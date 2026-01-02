/**
 * Quiz Engine Core - Unified Assessment System
 * Replaces ExamEngine and ComprehensiveQuiz with a single flexible architecture.
 * Supports: 'practice' (chapter quizzes) and 'simulation' (timed exams) modes.
 */

class QuizEngine {
    constructor(config) {
        // Configuration
        this.mode = config.mode || 'practice'; // 'practice' | 'simulation'
        this.quizId = config.quizId || 'unknown-quiz'; // Analytics ID
        this.containerId = config.containerId || 'quiz-container';
        this.questions = config.questions || [];
        this.timeLimit = config.timeLimit || (this.mode === 'simulation' ? 50 * 60 : null); // Seconds
        this.onComplete = config.onComplete || null;
        this.enableInstantFeedback = config.enableInstantFeedback || false;

        // State
        this.currentIndex = 0;
        this.answers = {}; // Map { index: optionIndex }
        this.flagged = new Set();
        this.startTime = null;
        this.endTime = null;
        this.timerInterval = null;
        this.isComplete = false;
        this.warningDisplayed = false; // For 5 min warning

        // Exam specific
        this.sectionBoundaries = config.sectionBoundaries || []; // [{index: 0, label: 'Part A'}]
        this.returnChapter = config.returnChapter || null;
    }

    /* ================= INITIALIZATION ================= */

    start() {
        const saved = this.loadLocalProgress();

        let shouldPauseImmediately = false;

        if (saved) {
            // Auto-resume logic
            this.currentIndex = saved.currentIndex || 0;
            this.answers = saved.answers || {};
            // Rehydrate Set
            this.flagged = saved.flagged ? new Set(saved.flagged) : new Set();

            // Restore time state
            this.startTime = Date.now() - (saved.elapsedTime || 0);
            this.isComplete = false;
            shouldPauseImmediately = true;
        } else {
            this.startTime = Date.now();
            this.currentIndex = 0;
            this.answers = {};
            this.flagged = new Set();
            this.isComplete = false;
        }

        // Setup UI
        this.renderFrame();
        this.renderQuestion();

        if (shouldPauseImmediately) {
            this.pauseQuiz();
        } else {
            // Start Timer if needed
            if (this.timeLimit) {
                this.startTimer();
            }
        }

        // Keyboard bindings
        this.handleKeyBound = this.handleKey.bind(this);
        document.addEventListener('keydown', this.handleKeyBound);
    }

    handleKey(e) {
        if (this.isComplete) return;
        // Arrow navigation
        if (e.key === 'ArrowRight') this.nextQuestion();
        if (e.key === 'ArrowLeft') this.previousQuestion();
    }

    /* ================= TIMER LOGIC ================= */

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        const timerCallback = () => {
            const now = Date.now();
            const elapsed = Math.floor((now - this.startTime) / 1000);
            const remaining = this.timeLimit - elapsed;

            if (remaining <= 0) {
                this.submit(true); // Force submit
            } else {
                this.updateTimerDisplay(remaining);

                // 5 Minute Warning (Simulation only)
                if (this.mode === 'simulation' && remaining <= 300 && !this.warningDisplayed) {
                    this.showTimeWarning();
                    this.warningDisplayed = true;
                }
            }
        };

        this.timerInterval = setInterval(timerCallback, 1000);
        timerCallback(); // Immediate update
    }

    updateTimerDisplay(seconds) {
        const el = document.getElementById('quiz-timer');
        if (!el) return;

        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        el.textContent = `${m}:${s.toString().padStart(2, '0')}`;

        // Color coding
        if (seconds < 300) el.style.color = 'var(--danger)';
        else if (seconds < 600) el.style.color = 'var(--warning)';
        else el.style.color = '';
    }

    showTimeWarning() {
        if (document.getElementById('five-minute-warning')) return;
        const banner = document.createElement('div');
        banner.id = 'five-minute-warning';
        Object.assign(banner.style, {
            position: 'fixed', top: '0', left: '0', right: '0',
            padding: '1rem', background: 'rgba(255, 165, 0, 0.95)',
            color: 'black', fontWeight: 'bold', textAlign: 'center', zIndex: '1000'
        });
        banner.textContent = '⚠️ 5 minutes remaining – please review your answers.';
        document.body.appendChild(banner);
        setTimeout(() => banner.remove(), 10000);
    }

    /* ================= CORE ACTIONS ================= */

    selectAnswer(index) {
        if (this.isComplete) return;

        this.answers[this.currentIndex] = index;

        // Save progress to local storage if practice
        if (this.mode === 'practice') {
            this.saveLocalProgress();
        }

        // Re-render only the options part or full question to show selection state
        this.renderQuestion();
        this.updateProgressUI();
    }

    toggleFlag() {
        if (this.flagged.has(this.currentIndex)) {
            this.flagged.delete(this.currentIndex);
        } else {
            this.flagged.add(this.currentIndex);
        }
        this.renderFooter(); // Update flag icon state
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    previousQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    jumpTo(index) {
        if (index >= 0 && index < this.questions.length) {
            this.currentIndex = index;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    /* ================= SUBMISSION & SCORING ================= */

    confirmExit() {
        const doExit = () => {
            // Clear global state to prevent double confirmation
            window.currentQuizEngine = null;
            try {
                if (this.returnChapter && typeof window.loadChapter === 'function') {
                    // console.log("Exiting to: " + this.returnChapter);
                    window.loadChapter(this.returnChapter);
                } else {
                    location.reload();
                }
            } catch (e) {
                console.error("Exit failed, forcing reload", e);
                location.reload();
            }
        };

        if (typeof window.UI !== 'undefined') {
            window.UI.modal('Exit Quiz?', 'Your progress will be lost. Are you sure you want to go back to configuration?', doExit);
        } else if (confirm('Exit? Progress will be lost.')) {
            doExit();
        }
    }

    confirmSubmit() {
        const answeredCount = Object.keys(this.answers).length;
        const total = this.questions.length;
        const unanswered = total - answeredCount;

        let msg = `Ready to submit?\nYou have answered ${answeredCount} of ${total} questions.`;
        if (unanswered > 0) msg += `\n(${unanswered} skipped)`;

        if (typeof window.UI !== 'undefined') {
            window.UI.modal('Submit Exam?', msg.replace(/\n/g, '<br>'), () => this.submit());
        } else if (confirm(msg)) {
            this.submit();
        }
    }

    submit(forced = false) {
        if (this.isComplete) return;

        this.isComplete = true;
        this.endTime = Date.now();
        if (this.timerInterval) clearInterval(this.timerInterval);
        document.removeEventListener('keydown', this.handleKeyBound);

        if (forced) {
            if (typeof window.UI !== 'undefined') window.UI.toast("Time is up! Submitting exam.", "info");
            else alert("Time is up! Submitting exam.");
        }

        const results = this.calculateResults();
        this.renderResults(results);

        // Save local analytics
        this.saveToAnalytics(results);

        // Clear saved progress on completion
        this.clearLocalProgress();
    }

    calculateResults() {
        let correct = 0;
        const byTopic = {};
        const byPart = {}; // For simulation breakdown

        this.questions.forEach((q, idx) => {
            const userAns = this.answers[idx];
            const isCorrect = (userAns === q.answer);

            if (isCorrect) correct++;

            // Topic stats
            const topic = q.topic || 'General';
            if (!byTopic[topic]) byTopic[topic] = { total: 0, correct: 0 };
            byTopic[topic].total++;
            if (isCorrect) byTopic[topic].correct++;

            // Part stats (if simulation)
            if (q.part) {
                if (!byPart[q.part]) byPart[q.part] = { total: 0, correct: 0 };
                byPart[q.part].total++;
                if (isCorrect) byPart[q.part].correct++;
            }
        });

        const total = this.questions.length;
        const elapsedSeconds = Math.floor((this.endTime - this.startTime) / 1000);

        return {
            score: correct,
            total: total,
            percentage: Math.round((correct / total) * 100),
            timeSpent: elapsedSeconds,
            byTopic: byTopic,
            byPart: byPart
        };
    }

    saveToAnalytics(results) {
        // Deprecated: Analytics logging is now handled in renderResults via AnalyticsManager
    }

    /* ================= RENDERING ================= */

    renderFrame() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        // Common Shell
        container.innerHTML = `
            <div class="quiz-container-v2">
                <div class="quiz-header-v2">
                    <button class="btn btn-outline small" onclick="window.currentQuizEngine.confirmExit()" title="Exit Quiz">
                        <i class="ph-bold ph-sign-out"></i> Exit
                    </button>
                    <!-- Pause moved to footer -->
                    <button class="btn btn-outline small" onclick="window.currentQuizEngine.printView()" title="Print Exam" aria-label="Print Exam" style="margin-left: 0.5rem;">
                        <i class="ph-bold ph-printer"></i>
                    </button>
                    <div class="header-center">
                        <span id="quiz-header-title">${this.mode === 'simulation' ? 'Simulation Exam' : 'Chapter Quiz'}</span>
                        <div class="question-counter">Q <span id="q-num">1</span> / ${this.questions.length}</div>
                    </div>
                    ${this.timeLimit ? `
                    <div class="timer-badge">
                        <i class="ph-fill ph-clock"></i> <span id="quiz-timer" role="timer">--:--</span>
                    </div>` : ''}
                </div>

                <div class="quiz-body-v2" id="quiz-body">
                    <!-- Question injected here -->
                </div>

                <div class="quiz-footer-v2" id="quiz-footer">
                    <!-- Nav buttons injected here -->
                </div>
            </div>
        `;

        // Initial Footer Render
        this.renderFooter();
    }

    renderQuestion() {
        const container = document.getElementById('quiz-body');
        if (!container) return;

        const q = this.questions[this.currentIndex];
        const userAns = this.answers[this.currentIndex];

        // Check for section header (simulation mode)
        let sectionHtml = '';
        if (this.mode === 'simulation' && this.sectionBoundaries) {
            const boundary = this.sectionBoundaries.find(b => b.index === this.currentIndex);
            if (boundary) {
                sectionHtml = `<div class="exam-section-header">${boundary.label}</div>`;
            }
        }

        // Update Header Counter
        const numEl = document.getElementById('q-num');
        if (numEl) numEl.textContent = this.currentIndex + 1;

        // Coach Mode or Instant Feedback Logic
        const urlParams = new URLSearchParams(window.location.search);
        const isCoach = urlParams.get('coach') === '1';
        const isProctor = localStorage.getItem('dd_proctor_mode') === 'true';
        // Feedback is hidden in Proctor Mode even if normally enabled
        const showFeedback = !isProctor && (this.enableInstantFeedback || isCoach) && userAns !== undefined;

        // Render Options
        let optionsHtml = '';
        const labels = ['A', 'B', 'C', 'D', 'E'];

        q.options.forEach((opt, idx) => {
            let className = 'option-card-v2';
            let icon = '';

            if (userAns === idx) className += ' selected';

            if (showFeedback) {
                // Correct answer is always Green
                if (idx === q.answer) {
                    className += ' correct-green'; // Need CSS for this
                    icon = '<i class="ph-bold ph-check-circle" style="margin-left:auto; color:white;"></i>';
                }
                // Wrong selection is Amber
                else if (userAns === idx && idx !== q.answer) {
                    className += ' wrong-amber'; // Need CSS for this
                    icon = '<i class="ph-bold ph-x-circle" style="margin-left:auto; color:white;"></i>';
                }
            } else {
                // Normal behavior
                if (userAns === idx) icon = '<i class="ph-bold ph-check-circle" style="margin-left:auto"></i>';
            }

            optionsHtml += `
                <button class="${className}" 
                     type="button"
                     onclick="window.currentQuizEngine.selectAnswer(${idx})"
                     aria-label="Option ${labels[idx]}: ${opt}"
                     style="${showFeedback && idx === q.answer ? 'background-color: var(--success); color: white; border-color: var(--success);' : ''} 
                            ${showFeedback && userAns === idx && idx !== q.answer ? 'background-color: var(--warning); color: black; border-color: var(--warning);' : ''}">
                    <span class="option-indicator" style="${showFeedback && (idx === q.answer || (userAns === idx && idx !== q.answer)) ? 'background: rgba(255,255,255,0.3); color: white; border: none;' : ''}">${labels[idx] || '?'}</span>
                    <span class="option-content">${opt}</span>
                    ${icon}
                </button>
            `;
        });

        // Feedback Explanation
        let feedbackHtml = '';
        if (showFeedback) {
            const isRight = (userAns === q.answer);
            feedbackHtml = `
                <div class="coach-banner ${isRight ? 'success' : 'info'}" style="margin-top: 1rem; padding: 1rem; background: ${isRight ? '#dcfce7' : '#fff7ed'}; border-radius: 8px; border: 1px solid ${isRight ? '#22c55e' : '#f97316'};">
                    <strong>${isRight ? 'Correct!' : 'Incorrect.'}</strong> The answer is ${labels[q.answer]}.
                    <div class="small-explanation" style="margin-top: 0.5rem; color: #333;">
                        ${q.explain || 'No explanation provided.'}
                        ${!isRight && typeof window.generateReviewLink === 'function' ? window.generateReviewLink(q) : ''}
                    </div>
                </div>
             `;
        }

        container.innerHTML = `
            ${sectionHtml}
            <div class="question-fade-in">
                <h2 class="question-text-v2" tabindex="-1" style="outline: none;">${q.q || q.question}</h2>
                <div class="options-grid-v2">
                    ${optionsHtml}
                </div>
                ${feedbackHtml}
            </div>
        `;

        // Accessibility: Move focus to the new question to announce it
        // Use timeout to ensure DOM is ready and transition doesn't interfere
        setTimeout(() => {
            const h2 = container.querySelector('.question-text-v2');
            if (h2) h2.focus();
        }, 50);
    }

    renderFooter() {
        const container = document.getElementById('quiz-footer');
        if (!container) return;

        const isLast = this.currentIndex === this.questions.length - 1;
        const isFlagged = this.flagged.has(this.currentIndex);
        const progressPct = Math.round(((this.currentIndex) / this.questions.length) * 100);

        container.innerHTML = `
            <div class="footer-left">
                <button class="neo-btn icon-only ${isFlagged ? 'active-flag' : ''}" onclick="window.currentQuizEngine.toggleFlag()" aria-label="Flag Question for Review" title="Flag Question">
                    <i class="ph-fill ph-flag"></i>
                </button>
                <button class="neo-btn icon-only" onclick="window.currentQuizEngine.pauseQuiz()" title="Pause Quiz" aria-label="Pause Quiz" style="margin-left: 0.5rem;">
                    <i class="ph-bold ph-pause"></i>
                </button>
                <div class="progress-mini">
                    <div class="bar" style="width: ${progressPct}%"></div>
                </div>
            </div>

            <div class="footer-right">
                <button class="neo-btn secondary" 
                        onclick="window.currentQuizEngine.previousQuestion()" 
                        ${this.currentIndex === 0 ? 'disabled' : ''}>
                    Prev
                </button>
                
                ${isLast ? `
                    <button class="neo-btn primary" onclick="window.currentQuizEngine.confirmSubmit()">
                        Submit Exam
                    </button>
                ` : `
                    <button class="neo-btn primary" onclick="window.currentQuizEngine.nextQuestion()">
                        Next
                    </button>
                `}
            </div>
        `;
    }

    updateProgressUI() {
        // Redraw footer progress bar if needed, handled in renderFooter mostly for simplicity
        // But we can target specific elements for perf if needed. For now renderFooter is fast enough.
        this.renderFooter();
    }

    /* ================= RESULTS & REVIEW ================= */

    renderResults(results) {
        // Analytics Tracking
        if (window.AnalyticsManager) {
            window.AnalyticsManager.logAttempt(this.quizId, results.score, results.total, this.mode);

            // Log missed questions for "Weak Areas" analysis
            this.questions.forEach((q, idx) => {
                const userAns = this.answers[idx];
                if (userAns !== q.answer) {
                    window.AnalyticsManager.logMissedQuestion(q.topic || 'General', q.q || q.question);
                }
            });
        }

        const container = document.getElementById(this.containerId);

        let analysisHtml = '';

        // Topic Breakdown
        const topics = Object.entries(results.byTopic).sort((a, b) => b[1].total - a[1].total);
        if (topics.length > 0) {
            analysisHtml += `<h3>Topic Breakdown</h3><div class="topic-grid">`;
            topics.forEach(([topic, stats]) => {
                const pct = Math.round((stats.correct / stats.total) * 100);
                const color = pct >= 80 ? 'green' : (pct >= 60 ? 'orange' : 'red');
                analysisHtml += `
                    <div class="stat-card ${color}">
                        <div class="stat-val">${pct}%</div>
                        <div class="stat-label">${topic}</div>
                        <div class="stat-meta">${stats.correct}/${stats.total}</div>
                    </div>
                `;
            });
            analysisHtml += `</div>`;
        }

        const mins = Math.floor(results.timeSpent / 60);
        const secs = results.timeSpent % 60;

        container.innerHTML = `
            <div class="results-view">
                <div class="score-header">
                    <h1>Results</h1>
                    <div class="big-score">${results.percentage}%</div>
                    <div class="score-meta">${results.score} / ${results.total} correct</div>
                    <div class="time-meta">Time: ${mins}m ${secs}s</div>
                </div>

                <div class="analysis-section">
                    ${analysisHtml}
                </div>

                <div class="actions-row">
                    <button class="neo-btn primary" onclick="window.currentQuizEngine.reviewMode()">Review Answers</button>
                    <button class="neo-btn secondary" onclick="window.currentQuizEngine.reviewMode(true)">Missed Only</button>
                    <button class="neo-btn outline" onclick="location.reload()">Exit</button>
                    <button class="neo-btn outline" onclick="window.currentQuizEngine.copyResultsToClipboard()">Copy</button>
                </div>
            </div>
        `;
    }

    reviewMode(missedOnly = false) {
        const container = document.getElementById(this.containerId);

        let questionsHtml = '';
        let count = 0;

        this.questions.forEach((q, idx) => {
            const userAns = this.answers[idx];
            const isCorrect = (userAns === q.answer);

            if (missedOnly && isCorrect) return; // Skip correct ones
            count++;

            const labels = ['A', 'B', 'C', 'D', 'E'];

            questionsHtml += `
                <div class="review-card ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-header">
                        <span class="q-idx">Q${idx + 1}</span>
                        <span class="status-badge">${isCorrect ? 'Correct' : 'Incorrect'}</span>
                    </div>
                    <div class="review-text">${q.q || q.question}</div>
                    
                    <div class="review-options">
                        ${q.options.map((opt, i) => {
                let cls = '';
                if (i === q.answer) cls = 'truth';
                else if (i === userAns) cls = 'selected-wrong';
                return `<div class="rev-opt ${cls}">${labels[i]}. ${opt}</div>`;
            }).join('')}
                    </div>

                    <div class="review-explain">
                        <strong>Explanation:</strong> ${q.explain || 'No explanation available.'}
                        ${!isCorrect && typeof window.generateReviewLink === 'function' ? `<div style="margin-top: 0.75rem; border-top: 1px dashed #ccc; padding-top: 0.5rem;">${window.generateReviewLink(q)}</div>` : ''}
                    </div>
                </div>
            `;
        });

        if (count === 0) {
            if (typeof window.UI !== 'undefined') window.UI.toast("No questions match criteria (e.g. perfect score!).", "info");
            else alert("No questions match criteria (e.g. perfect score!).");
            return;
        }

        container.innerHTML = `
            <div class="review-container">
                <div class="review-top-bar">
                    <h2>Reviewing ${missedOnly ? 'Missed' : 'All'} (${count})</h2>
                    <button class="neo-btn small outline" onclick="window.currentQuizEngine.submit(true)">Back to Results</button>
                </div>
                <div class="review-list">
                    ${questionsHtml}
                </div>
            </div>
        `;
    }

    printView() {
        const container = document.getElementById(this.containerId);

        const questionsHtml = this.questions.map((q, idx) => {
            const labels = ['A', 'B', 'C', 'D', 'E'];
            return `
                <div class="print-question" style="margin-bottom: 2rem; page-break-inside: avoid;">
                    <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 0.5rem;">${idx + 1}. ${q.q || q.question}</div>
                    <div class="print-options" style="margin-left: 1.5rem;">
                        ${q.options.map((opt, i) => `
                            <div style="margin-bottom: 0.25rem;">
                                <span style="font-weight: 600; margin-right: 0.5rem;">${labels[i]})</span> ${opt}
                            </div>
                        `).join('')}
                    </div>
                </div>
             `;
        }).join('');

        const answerKeyRows = this.questions.map((q, idx) => {
            const labels = ['A', 'B', 'C', 'D', 'E'];
            return `<div style="display:inline-block; width: 4rem; margin-bottom: 0.5rem;"><strong>${idx + 1}:</strong> ${labels[q.answer]}</div>`;
        }).join('');

        const html = `
            <div class="print-wrapper">
                <div class="print-header" style="text-align: center; margin-bottom: 2rem; border-bottom: 2px solid black; padding-bottom: 1rem;">
                    <h1 style="margin: 0; font-family:serif;">${this.mode === 'simulation' ? 'Disease Detectives Simulation Exam' : 'Epidemic Engine Practice Quiz'}</h1>
                    <div style="margin-top: 0.5rem; font-family:serif;">Name: ________________________________  Score: _______ / ${this.questions.length}</div>
                </div>

                <div class="print-body">
                    ${questionsHtml}
                </div>

                <div class="print-key" style="page-break-before: always; margin-top: 3rem;">
                    <h2 style="text-align: center; border-bottom: 1px solid black; margin-bottom: 1rem; font-family:serif;">Answer Key</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${answerKeyRows}
                    </div>
                </div>

                <div class="print-controls" style="position: fixed; top: 20px; right: 20px; background: white; padding: 1rem; border: 1px solid #ccc; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                    <button class="neo-btn primary" onclick="window.print()">Print Now</button>
                    <button class="neo-btn outline" onclick="location.reload()">Back to App</button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        setTimeout(() => window.print(), 500);
    }

    copyResultsToClipboard() {
        // Logic from ComprehensiveQuiz
        const results = this.calculateResults();
        let text = `Epidemic Engine Results: ${results.score}/${results.total} (${results.percentage}%)\n`;
        text += `Time: ${Math.floor(results.timeSpent / 60)}m\n\n`;
        Object.entries(results.byTopic).forEach(([topic, stats]) => {
            text += `${topic}: ${Math.round((stats.correct / stats.total) * 100)}%\n`;
        });
        navigator.clipboard.writeText(text).then(() => {
            if (typeof window.UI !== 'undefined') window.UI.toast("Copied!", "success");
            else alert("Copied!");
        });
    }

    /* ================= LOCAL STORAGE ================= */

    saveLocalProgress() {
        if (!this.quizId) return;
        const state = {
            currentIndex: this.currentIndex,
            answers: this.answers,
            flagged: Array.from(this.flagged),
            elapsedTime: Date.now() - this.startTime,
            savedAt: Date.now(),
            mode: this.mode
        };
        localStorage.setItem('quiz_progress_' + this.quizId, JSON.stringify(state));
    }

    loadLocalProgress() {
        try {
            const raw = localStorage.getItem('quiz_progress_' + this.quizId);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            console.error("Failed to load progress", e);
            return null;
        }
    }

    clearLocalProgress() {
        if (this.quizId) {
            localStorage.removeItem('quiz_progress_' + this.quizId);
        }
    }

    pauseQuiz() {
        this.saveLocalProgress();
        if (this.timerInterval) clearInterval(this.timerInterval);

        const container = document.getElementById(this.containerId);
        if (!container) return;

        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'quiz-pause-overlay';
        Object.assign(overlay.style, {
            position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
            background: 'rgba(255,255,255,0.95)', zIndex: '100',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        });

        overlay.innerHTML = `
            <h2 style="margin-bottom: 1rem; color: var(--navy-primary);">Quiz Paused</h2>
            <p style="margin-bottom: 2rem;">Your progress has been saved.</p>
            <button class="neo-btn primary large" id="resume-btn">
                <i class="ph-bold ph-play"></i> Resume Quiz
            </button>
            <button class="neo-btn outline" onclick="window.currentQuizEngine.confirmExit()" style="margin-top: 1rem;">
                Exit to Menu
            </button>
        `;

        container.appendChild(overlay);

        // Handle Resume
        document.getElementById('resume-btn').onclick = () => {
            overlay.remove();
            if (this.timeLimit) {
                // Adjust start time to account for pause duration? 
                // Simple version: just restart interval, but that might drift if we don't track pause time.
                // Better: We saved progress. The simplest is to just restart the timer interval logic.

                // The current timer logic usually calcs elapsed based on StartTime. 
                // If we pause, wall clock keeps moving. We need to shift startTime forward by the pause duration.
                // But for now, let's just re-init the timer which updates display.
                // Wait... if logic relies on (Now - StartTime), pausing will effectively count as "time taken".
                // To truly pause the CLOCK, we need to track "PauseStartTime".

                // Correction: The simplest approach for now without refactoring the whole timer:
                // We rely on the fact that the user is NOT exiting.
                // We need to adjust this.startTime so the elapsed calculation remains valid.
                // But since we didn't track "pauseStart", let's just restart for now or rely on the user knowing time ticks?
                // NO, user expects time to stop.

                // Let's effectively "re-start" the session logic similar to a reload, 
                // but we need to know how long we were paused.
                // Let's use a dirty fix: 
                // We don't have pauseStart variable in class state easily without breaking constructor.
                // ACTUALLY: The easiest fix:
                // The `start()` logic handles "resuming" by adjusting startTime based on `saved.elapsedTime`.
                // So we can just call `start()` again? No, that re-renders everything.

                // Let's do this manual fix:
                // 1. When pausing, we saved `elapsedTime`.
                // 2. When resuming, reset `startTime` to `Date.now() - saved.elapsedTime`.

                const saved = this.loadLocalProgress();
                if (saved && saved.elapsedTime) {
                    this.startTime = Date.now() - saved.elapsedTime;
                }
                this.startTimer();
            }
        };
    }
}

// Static Generator for Simulation Exams
// Static Generator for Simulation Exams (Improved Blueprint)
QuizEngine.generateSimulation = function (difficulty = 'balanced') {
    if (typeof QUIZ_BANKS === 'undefined') return { questions: [], boundaries: [] };

    // Helper: Select N random questions with TOPIC BALANCING
    const selectBalanced = (part, totalCount, difficulty = 'balanced') => {
        if (!QUIZ_BANKS[part]) return [];

        // 1. Gather Filtered Pool
        let pool = [];
        ['beginner', 'intermediate', 'advanced'].forEach(lvl => {
            if (QUIZ_BANKS[part][lvl]) {
                const qList = QUIZ_BANKS[part][lvl].map(q => ({ ...q, part: part, difficulty: lvl }));
                pool.push(...qList);
            }
        });

        // Filter by difficulty preference
        if (difficulty === 'beginner') pool = pool.filter(q => q.difficulty !== 'advanced');
        else if (difficulty === 'advanced') pool = pool.filter(q => q.difficulty !== 'beginner');

        // 2. Group by Topic
        const byTopic = {};
        pool.forEach(q => {
            const t = q.topic || 'General';
            if (!byTopic[t]) byTopic[t] = [];
            byTopic[t].push(q);
        });

        const topics = Object.keys(byTopic);
        if (topics.length === 0) return [];

        // 3. Distribute Quota
        // Goal: Even spread across topics
        let selected = [];
        const baseCount = Math.floor(totalCount / topics.length);
        let remainder = totalCount % topics.length;

        // Shuffle topics so the "remainder" (extra questions) distributes randomly each time
        topics.sort(() => Math.random() - 0.5);

        topics.forEach(topic => {
            // Determine how many to take from this topic
            let count = baseCount;
            if (remainder > 0) {
                count++;
                remainder--;
            }

            // Shuffle questions within this topic
            const topicQs = byTopic[topic].sort(() => Math.random() - 0.5);

            // Take the quota (or all if insufficient)
            selected.push(...topicQs.slice(0, count));
        });

        // 4. Fallback if pool was too small to meet totalCount (rare)
        if (selected.length < totalCount) {
            // Fill rest with randoms from full pool (excluding already selected)
            const remainingNeeded = totalCount - selected.length;
            const currentIds = new Set(selected.map(q => q.q)); // using q text as ID proxy

            const leftovers = pool.filter(q => !currentIds.has(q.q)).sort(() => Math.random() - 0.5);
            selected.push(...leftovers.slice(0, remainingNeeded));
        }

        // 5. Final Shuffle
        return selected.sort(() => Math.random() - 0.5);
    };

    // Blueprint: 50 Questions Total (Updated Phase 2)
    // Part I (Foundations): 8 Qs (16%)
    // Part II (Investigation/Math): 30 Qs (60%)
    // Part III (Control/Studies): 12 Qs (24%)

    const part1Qs = selectBalanced('part1', 8, difficulty);
    const part2Qs = selectBalanced('part2', 30, difficulty);
    const part3Qs = selectBalanced('part3', 12, difficulty);

    const finalQuestions = [...part1Qs, ...part2Qs, ...part3Qs];

    const boundaries = [
        { index: 0, label: 'Part I: Scientific Inquiry & Foundations' },
        { index: part1Qs.length, label: 'Part II: Investigation & Statistics' },
        { index: part1Qs.length + part2Qs.length, label: 'Part III: Prevention & Control' }
    ];

    return { questions: finalQuestions, boundaries };
};

// Helper: Select questions for a specific Part
QuizEngine.getQuestionsForPart = function (partId, difficulty = 'balanced') {
    if (typeof QUIZ_BANKS === 'undefined') return [];

    const cleanId = partId.replace('quiz_', '');

    const getQs = (pid, level) => {
        if (!QUIZ_BANKS[pid] || !QUIZ_BANKS[pid][level]) return [];
        return QUIZ_BANKS[pid][level].map(q => ({ ...q, part: pid, difficulty: level }));
    };

    let questions = [];
    const levels = ['beginner', 'intermediate', 'advanced'];

    if (difficulty === 'balanced') {
        levels.forEach(lvl => questions.push(...getQs(cleanId, lvl)));
    } else {
        questions = getQs(cleanId, difficulty);
    }

    return questions;
};

// Validates a single question object against schema
QuizEngine.validateQuestion = function (q) {
    if (!q || typeof q !== 'object') return false;
    if (!q.q || typeof q.q !== 'string' || q.q.length < 5) return false; // "q" is content
    if (!Array.isArray(q.options) || q.options.length < 2) return false;
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) return false;
    return true;
};

// Expose
window.QuizEngine = QuizEngine;
window.currentQuizEngine = null;
