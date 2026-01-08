/**
 * Quiz Engine Core v6.0.0 - Complete Rewrite
 * A clean, simple quiz system with NO pause functionality.
 */

console.log("QuizEngine v6.0.0 loading...");

// Override bundle's QuizEngine directly
window.QuizEngine = class QuizEngine {
    static VERSION = '5.0.0';

    constructor(config) {
        this.quizId = config.quizId || 'quiz';
        this.containerId = config.containerId || 'quiz-container';
        this.questions = config.questions || [];
        this.mode = config.mode || 'practice';
        this.timeLimit = config.timeLimit || null; // seconds, null = no limit
        this.enableInstantFeedback = config.enableInstantFeedback || false;

        this.currentIndex = 0;
        this.answers = {};
        this.flagged = new Set();
        this.startTime = null;
        this.timerInterval = null;
        this.isComplete = false;
    }

    start() {
        console.log("QuizEngine: Starting quiz", this.quizId);
        this.startTime = Date.now();
        this.currentIndex = 0;
        this.answers = {};
        this.flagged = new Set();
        this.isComplete = false;

        this.render();

        if (this.timeLimit) {
            this.startTimer();
        }

        // Keyboard nav
        this._keyHandler = (e) => {
            if (this.isComplete) return;
            if (e.key === 'ArrowRight') this.next();
            if (e.key === 'ArrowLeft') this.prev();
        };
        document.addEventListener('keydown', this._keyHandler);
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const remaining = this.timeLimit - elapsed;

            if (remaining <= 0) {
                this.submit();
            } else {
                this.updateTimerDisplay(remaining);
            }
        }, 1000);
    }

    updateTimerDisplay(seconds) {
        const el = document.getElementById('quiz-timer');
        if (!el) return;
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        el.style.color = seconds < 300 ? '#e53e3e' : '';
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="quiz-shell">
                <div class="quiz-header">
                    <button class="btn btn-outline small" onclick="window.quizEngine.exit()">
                        <i class="ph-bold ph-sign-out"></i> Exit
                    </button>
                    <div class="quiz-title">
                        Q <span id="q-num">${this.currentIndex + 1}</span> / ${this.questions.length}
                    </div>
                    ${this.timeLimit ? `<div class="timer-badge"><i class="ph-fill ph-clock"></i> <span id="quiz-timer">--:--</span></div>` : '<div></div>'}
                </div>
                <div id="quiz-body" class="quiz-body"></div>
                <div id="quiz-footer" class="quiz-footer"></div>
            </div>
        `;

        this.renderQuestion();
        this.renderFooter();
    }

    renderQuestion() {
        const body = document.getElementById('quiz-body');
        if (!body) return;

        const q = this.questions[this.currentIndex];
        if (!q) return;

        const userAns = this.answers[this.currentIndex];
        const labels = ['A', 'B', 'C', 'D', 'E'];

        // Show feedback only if instant feedback enabled AND user answered
        const showFeedback = this.enableInstantFeedback && userAns !== undefined;

        const optionsHtml = q.options.map((opt, i) => {
            let cls = 'option-card';
            let style = '';

            if (userAns === i) cls += ' selected';

            if (showFeedback) {
                if (i === q.answer) {
                    style = 'background: #22c55e; color: white; border-color: #22c55e;';
                } else if (userAns === i && i !== q.answer) {
                    style = 'background: #f97316; color: white; border-color: #f97316;';
                }
            }

            return `
                <button class="${cls}" style="${style}" onclick="window.quizEngine.selectAnswer(${i})">
                    <span class="option-label">${labels[i]}</span>
                    <span class="option-text">${opt}</span>
                </button>
            `;
        }).join('');

        let feedbackHtml = '';
        if (showFeedback) {
            const isCorrect = userAns === q.answer;
            feedbackHtml = `
                <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">
                    <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong> 
                    The answer is ${labels[q.answer]}.
                    <div class="explanation">${q.explain || ''}</div>
                </div>
            `;
        }

        body.innerHTML = `
            <div class="question-container">
                <h2 class="question-text">${q.q || q.question}</h2>
                <div class="options-list">${optionsHtml}</div>
                ${feedbackHtml}
            </div>
        `;

        // Update counter
        const numEl = document.getElementById('q-num');
        if (numEl) numEl.textContent = this.currentIndex + 1;
    }

    renderFooter() {
        const footer = document.getElementById('quiz-footer');
        if (!footer) return;

        const isFirst = this.currentIndex === 0;
        const isLast = this.currentIndex === this.questions.length - 1;
        const isFlagged = this.flagged.has(this.currentIndex);
        const progress = Math.round((this.currentIndex / this.questions.length) * 100);

        footer.innerHTML = `
            <div class="footer-left">
                <button class="btn icon-btn ${isFlagged ? 'flagged' : ''}" onclick="window.quizEngine.toggleFlag()" title="Flag">
                    <i class="ph-fill ph-flag"></i>
                </button>
                <div class="progress-bar-mini"><div class="fill" style="width:${progress}%"></div></div>
            </div>
            <div class="footer-right">
                <button class="btn secondary" onclick="window.quizEngine.prev()" ${isFirst ? 'disabled' : ''}>Prev</button>
                ${isLast
                ? `<button class="btn primary" onclick="window.quizEngine.confirmSubmit()">Submit</button>`
                : `<button class="btn primary" onclick="window.quizEngine.next()">Next</button>`
            }
            </div>
        `;
    }

    selectAnswer(idx) {
        if (this.isComplete) return;
        this.answers[this.currentIndex] = idx;
        this.renderQuestion();
        this.renderFooter();
    }

    toggleFlag() {
        if (this.flagged.has(this.currentIndex)) {
            this.flagged.delete(this.currentIndex);
        } else {
            this.flagged.add(this.currentIndex);
        }
        this.renderFooter();
    }

    next() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    jumpTo(idx) {
        if (idx >= 0 && idx < this.questions.length) {
            this.currentIndex = idx;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    exit() {
        if (confirm('Exit quiz? Your progress will not be saved.')) {
            this.cleanup();
            window.location.href = 'index.html#welcome';
        }
    }

    confirmSubmit() {
        const answered = Object.keys(this.answers).length;
        const total = this.questions.length;
        const msg = `Submit quiz?\n\nAnswered: ${answered}/${total}`;

        if (confirm(msg)) {
            this.submit();
        }
    }

    submit() {
        this.isComplete = true;
        this.cleanup();

        const results = this.calculateResults();
        this.showResults(results);

        // Log to analytics if available
        if (window.AnalyticsManager) {
            window.AnalyticsManager.logAttempt(this.quizId, results.score, results.total, this.mode);
        }
    }

    cleanup() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        if (this._keyHandler) document.removeEventListener('keydown', this._keyHandler);
    }

    calculateResults() {
        let correct = 0;
        const byTopic = {};

        this.questions.forEach((q, i) => {
            const userAns = this.answers[i];
            const isCorrect = userAns === q.answer;
            if (isCorrect) correct++;

            const topic = q.topic || 'General';
            if (!byTopic[topic]) byTopic[topic] = { total: 0, correct: 0 };
            byTopic[topic].total++;
            if (isCorrect) byTopic[topic].correct++;
        });

        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);

        return {
            score: correct,
            total: this.questions.length,
            percentage: Math.round((correct / this.questions.length) * 100),
            timeSpent: elapsed,
            byTopic
        };
    }

    showResults(results) {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const mins = Math.floor(results.timeSpent / 60);
        const secs = results.timeSpent % 60;

        let topicHtml = '';
        Object.entries(results.byTopic).forEach(([topic, stats]) => {
            const pct = Math.round((stats.correct / stats.total) * 100);
            const color = pct >= 80 ? '#22c55e' : pct >= 60 ? '#f97316' : '#ef4444';
            topicHtml += `
                <div class="topic-stat">
                    <span class="topic-name">${topic}</span>
                    <span class="topic-score" style="color:${color}">${pct}% (${stats.correct}/${stats.total})</span>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="results-container">
                <h1>Quiz Complete!</h1>
                <div class="score-display">
                    <div class="big-score">${results.percentage}%</div>
                    <div class="score-detail">${results.score} / ${results.total} correct</div>
                    <div class="time-detail">Time: ${mins}m ${secs}s</div>
                </div>
                <div class="topic-breakdown">
                    <h3>By Topic</h3>
                    ${topicHtml}
                </div>
                <div class="result-actions">
                    <button class="btn primary" onclick="window.quizEngine.showReview()">Review Answers</button>
                    <button class="btn secondary" onclick="window.quizEngine.showReview(true)">Missed Only</button>
                    <button class="btn outline" onclick="window.location.href='index.html#welcome'">Exit</button>
                </div>
            </div>
        `;
    }

    showReview(missedOnly = false) {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const labels = ['A', 'B', 'C', 'D', 'E'];
        let html = '';
        let count = 0;

        this.questions.forEach((q, i) => {
            const userAns = this.answers[i];
            const isCorrect = userAns === q.answer;

            if (missedOnly && isCorrect) return;
            count++;

            const optionsHtml = q.options.map((opt, j) => {
                let cls = '';
                if (j === q.answer) cls = 'correct-answer';
                else if (j === userAns && j !== q.answer) cls = 'wrong-answer';
                return `<div class="review-option ${cls}">${labels[j]}. ${opt}</div>`;
            }).join('');

            html += `
                <div class="review-card ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-header">
                        <span class="q-number">Q${i + 1}</span>
                        <span class="status">${isCorrect ? '✓' : '✗'}</span>
                    </div>
                    <div class="review-question">${q.q || q.question}</div>
                    <div class="review-options">${optionsHtml}</div>
                    <div class="review-explain"><strong>Explanation:</strong> ${q.explain || 'N/A'}</div>
                </div>
            `;
        });

        if (count === 0) {
            alert('No questions to review!');
            return;
        }

        container.innerHTML = `
            <div class="review-container">
                <div class="review-header-bar">
                    <h2>Review (${count} questions)</h2>
                    <button class="btn outline" onclick="window.quizEngine.submit()">Back to Results</button>
                </div>
                <div class="review-list">${html}</div>
            </div>
        `;
    }
};

// Static methods for generating quiz data
QuizEngine.getQuestionsForPart = function (partId, difficulty = 'balanced') {
    if (typeof QUIZ_BANKS === 'undefined') return [];

    const cleanId = partId.replace('quiz_', '').replace('part', 'part');
    const bank = QUIZ_BANKS[cleanId];
    if (!bank) return [];

    let questions = [];
    const levels = ['beginner', 'intermediate', 'advanced'];

    if (difficulty === 'balanced') {
        levels.forEach(lvl => {
            if (bank[lvl]) questions.push(...bank[lvl].map(q => ({ ...q, difficulty: lvl })));
        });
    } else if (bank[difficulty]) {
        questions = bank[difficulty].map(q => ({ ...q, difficulty }));
    }

    return questions;
};

QuizEngine.generateSimulation = function (difficulty = 'balanced') {
    if (typeof QUIZ_BANKS === 'undefined') return { questions: [], boundaries: [] };

    const shuffle = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const selectRandom = (arr, n) => shuffle([...arr]).slice(0, n);

    const allQuestions = [];
    const boundaries = [];
    let idx = 0;

    ['part1', 'part2', 'part3'].forEach(part => {
        const partQs = QuizEngine.getQuestionsForPart(part, difficulty);
        const selected = selectRandom(partQs, Math.min(17, partQs.length));

        if (selected.length > 0) {
            boundaries.push({ index: idx, label: part.replace('part', 'Part ').toUpperCase() });
            selected.forEach(q => {
                allQuestions.push({ ...q, part });
                idx++;
            });
        }
    });

    return { questions: allQuestions, boundaries };
};

// Expose instance holder
window.quizEngine = null;

console.log("QuizEngine v6.0.0 loaded.");
