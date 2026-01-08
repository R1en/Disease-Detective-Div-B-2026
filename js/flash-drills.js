/**
 * Flash Drills - Rapid Fire Practice
 * Pulls random questions from the Quiz Bank for infinite practice.
 * Enhanced with persistent progress tracking and high scores.
 */

class _FlashDrills {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.currentQuestion = null;
        this.streak = 0;
        this.mode = 'all'; // all, math, logic
        this.sessionCorrect = 0;
        this.sessionTotal = 0;
        this.startTime = null;

        // Load persistent stats from localStorage
        this.stats = this.loadStats();

        if (this.container) {
            this.renderIntro();
        }
    }

    loadStats() {
        const saved = localStorage.getItem('flash_drills_stats');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.warn('[FlashDrills] Could not parse saved stats');
            }
        }
        return {
            highScore: 0,
            totalQuestions: 0,
            totalCorrect: 0,
            sessionsPlayed: 0,
            lastPlayed: null
        };
    }

    saveStats() {
        try {
            localStorage.setItem('flash_drills_stats', JSON.stringify(this.stats));
        } catch (e) {
            console.warn('[FlashDrills] Could not save stats');
        }
    }

    renderIntro() {
        const accuracy = this.stats.totalQuestions > 0
            ? Math.round((this.stats.totalCorrect / this.stats.totalQuestions) * 100)
            : 0;
        const lastPlayedText = this.stats.lastPlayed
            ? new Date(this.stats.lastPlayed).toLocaleDateString()
            : 'Never';

        this.container.innerHTML = `
            <div class="neo-card text-center" style="max-width: 700px; margin: 2rem auto; padding: 3rem;">
                <div style="font-size: 3rem; color: var(--accent-purple); margin-bottom: 1rem;">
                    <i class="ph-bold ph-lightning"></i>
                </div>
                <h2 style="margin-top:0; color:var(--navy-primary);">Flash Drills</h2>
                <p class="lead" style="margin-bottom: 2rem;">Rapid-fire practice to build your speed and intuition.</p>
                
                <!-- Stats Panel -->
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; text-align: center;">
                    <div class="neo-card small" style="padding: 1rem;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-orange);">🔥 ${this.stats.highScore}</div>
                        <div style="font-size: 0.8rem; color: #64748b;">High Score</div>
                    </div>
                    <div class="neo-card small" style="padding: 1rem;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-blue);">${this.stats.totalQuestions}</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Total Questions</div>
                    </div>
                    <div class="neo-card small" style="padding: 1rem;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-green);">${accuracy}%</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Accuracy</div>
                    </div>
                    <div class="neo-card small" style="padding: 1rem;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-purple);">${this.stats.sessionsPlayed}</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Sessions</div>
                    </div>
                </div>

                <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 2rem;">
                    Last played: ${lastPlayedText}
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <label style="font-weight:bold; display:block; margin-bottom:0.5rem;">Select Topic:</label>
                    <select id="drill-mode" class="neo-select" style="max-width:300px; margin:0 auto;">
                        <option value="all">Everything (Mix)</option>
                        <option value="math">Calculations Only</option>
                        <option value="content">Concepts & Definitions</option>
                    </select>
                </div>

                <button class="neo-btn primary large" onclick="window.flashDrills.start()">
                    Start Practice <i class="ph-bold ph-play"></i>
                </button>

                ${this.stats.totalQuestions > 0 ? `
                    <button class="neo-btn small outline" style="margin-top: 1rem; display: block; margin-left: auto; margin-right: auto;" 
                            onclick="if(confirm('Reset all flash drill stats?')) { window.flashDrills.resetStats(); }">
                        <i class="ph ph-trash"></i> Reset Stats
                    </button>
                ` : ''}
            </div>
        `;

        // Expose instance for onclick
        window.flashDrills = this;
    }

    resetStats() {
        this.stats = {
            highScore: 0,
            totalQuestions: 0,
            totalCorrect: 0,
            sessionsPlayed: 0,
            lastPlayed: null
        };
        this.saveStats();
        this.renderIntro();
        if (typeof window.UI !== 'undefined') window.UI.toast('Stats reset!', 'info');
    }

    start() {
        const select = document.getElementById('drill-mode');
        if (select) this.mode = select.value;
        this.streak = 0;
        this.sessionCorrect = 0;
        this.sessionTotal = 0;
        this.startTime = Date.now();
        this.stats.sessionsPlayed++;
        this.stats.lastPlayed = new Date().toISOString();
        this.saveStats();
        this.nextQuestion();
    }

    nextQuestion() {
        this.currentQuestion = this.getRandomQuestion();

        if (!this.currentQuestion) {
            this.container.innerHTML = `<div class="alert alert-error">Error loading questions. Please reload.</div>`;
            return;
        }

        this.renderQuestion();
    }

    getRandomQuestion() {
        if (typeof QUIZ_BANKS === 'undefined') return null;

        let pool = [];

        // Flatten all banks
        Object.keys(QUIZ_BANKS).forEach(key => {
            const bank = QUIZ_BANKS[key];
            if (bank.questions) {
                // Filter by mode
                const validQuestions = bank.questions.filter(q => {
                    if (this.mode === 'all') return true;
                    const isMath = (q.type === 'calculation' || q.question.includes('Calculate') || q.type === 'math');
                    if (this.mode === 'math') return isMath;
                    if (this.mode === 'content') return !isMath;
                    return true;
                });
                pool = pool.concat(validQuestions);
            }
        });

        if (pool.length === 0) return null;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    renderQuestion() {
        const q = this.currentQuestion;
        if (!q) return;

        // Shuffle options but keep track of correct one
        const options = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correct }));
        // Simple shuffle
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }

        const isNewHighScore = this.streak > 0 && this.streak === this.stats.highScore;
        const streakClass = this.streak >= 5 ? 'on-fire' : '';

        const html = `
            <div style="max-width: 800px; margin: 0 auto; animation: slideUp 0.3s ease;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap: wrap; gap: 0.5rem;">
                    <button class="neo-btn small outline" onclick="window.flashDrills.endSession()">
                        <i class="ph-bold ph-arrow-left"></i> Exit
                    </button>
                    <div style="display: flex; gap: 1.5rem; align-items: center;">
                        <div style="font-size: 0.9rem; color: #64748b;">
                            This session: <strong>${this.sessionCorrect}/${this.sessionTotal}</strong>
                        </div>
                        <div style="font-weight:bold; color:var(--accent-purple); font-size: 1.1rem;" class="${streakClass}">
                            Streak: <span style="font-size:1.3rem;">${this.streak}</span> 🔥
                            ${isNewHighScore ? '<span style="color: #f59e0b; font-size: 0.8rem;"> NEW RECORD!</span>' : ''}
                        </div>
                    </div>
                </div>

                <!-- Progress bar towards high score -->
                ${this.stats.highScore > 0 ? `
                    <div style="margin-bottom: 1rem;">
                        <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.25rem;">
                            Progress to high score (${this.stats.highScore})
                        </div>
                        <div style="height: 6px; background: #e2e8f0; border-radius: 999px; overflow: hidden;">
                            <div style="height: 100%; width: ${Math.min(100, (this.streak / this.stats.highScore) * 100)}%; 
                                        background: linear-gradient(90deg, #a855f7, #f59e0b); transition: width 0.3s;"></div>
                        </div>
                    </div>
                ` : ''}

                <div class="neo-card">
                    <div style="font-size: 1.2rem; font-weight: 500; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1.5rem;">
                        ${q.question}
                        ${q.image ? `<img src="${q.image}" style="max-width:100%; margin-top:1rem; border-radius:8px;">` : ''}
                    </div>

                    <div class="drill-options" style="display: grid; gap: 1rem;">
                        ${options.map((opt, idx) => `
                            <button class="drill-option neo-btn outline" 
                                onclick="window.flashDrills.checkAnswer(this, ${opt.isCorrect})"
                                style="text-align:left; padding: 1rem;">
                                <span style="font-weight:bold; margin-right:0.5rem;">${String.fromCharCode(65 + idx)}.</span> ${opt.text}
                            </button>
                        `).join('')}
                    </div>

                    <div id="drill-feedback" style="display:none; margin-top:2rem; padding-top:2rem; border-top:2px solid #eee;">
                        <h4 id="feedback-title" style="margin-top:0;"></h4>
                        <div id="feedback-text" style="margin-bottom:1.5rem;"></div>
                        <button class="neo-btn primary large" style="width:100%;" onclick="window.flashDrills.nextQuestion()">
                            Next Question <i class="ph-bold ph-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <style>
                .on-fire {
                    animation: pulse 0.5s ease infinite alternate;
                }
                @keyframes pulse {
                    from { transform: scale(1); }
                    to { transform: scale(1.05); }
                }
            </style>
        `;

        this.container.innerHTML = html;

        // Focus first option for a11y
        setTimeout(() => {
            const first = this.container.querySelector('.drill-option');
            if (first) first.focus();
        }, 50);
    }

    checkAnswer(btn, isCorrect) {
        // Disable all buttons
        const allBtns = this.container.querySelectorAll('.drill-option');
        allBtns.forEach(b => {
            b.disabled = true;
            b.style.pointerEvents = 'none';
        });

        const feedback = document.getElementById('drill-feedback');
        const title = document.getElementById('feedback-title');
        const text = document.getElementById('feedback-text');

        feedback.style.display = 'block';
        this.sessionTotal++;
        this.stats.totalQuestions++;

        if (isCorrect) {
            btn.style.background = '#dcfce7';
            btn.style.borderColor = '#16a34a';
            btn.style.color = '#14532d';
            title.textContent = "Correct! 🎉";
            title.style.color = "#16a34a";
            text.innerHTML = this.currentQuestion.explanation || "Great job!";
            this.streak++;
            this.sessionCorrect++;
            this.stats.totalCorrect++;

            // Check for new high score
            if (this.streak > this.stats.highScore) {
                this.stats.highScore = this.streak;
                title.textContent = "🏆 NEW HIGH SCORE! 🏆";
            }
        } else {
            btn.style.background = '#fee2e2';
            btn.style.borderColor = '#dc2626';
            title.textContent = "Incorrect";
            title.style.color = "#dc2626";
            text.innerHTML = this.currentQuestion.explanation || "Review this concept.";
            this.streak = 0;
        }

        this.saveStats();

        // Focus next button
        const nextBtn = feedback.querySelector('button');
        if (nextBtn) nextBtn.focus();
    }

    endSession() {
        const duration = this.startTime ? Math.round((Date.now() - this.startTime) / 1000) : 0;
        const accuracy = this.sessionTotal > 0 ? Math.round((this.sessionCorrect / this.sessionTotal) * 100) : 0;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;

        this.container.innerHTML = `
            <div class="neo-card text-center" style="max-width: 600px; margin: 2rem auto; padding: 3rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📊</div>
                <h2 style="margin-top: 0; color: var(--navy-primary);">Session Complete!</h2>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                    <div class="neo-card small" style="padding: 1.5rem;">
                        <div style="font-size: 2.5rem; font-weight: bold; color: var(--accent-green);">${this.sessionCorrect}/${this.sessionTotal}</div>
                        <div style="color: #64748b;">Questions Correct</div>
                    </div>
                    <div class="neo-card small" style="padding: 1.5rem;">
                        <div style="font-size: 2.5rem; font-weight: bold; color: var(--accent-blue);">${accuracy}%</div>
                        <div style="color: #64748b;">Accuracy</div>
                    </div>
                    <div class="neo-card small" style="padding: 1.5rem;">
                        <div style="font-size: 2.5rem; font-weight: bold; color: var(--accent-purple);">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                        <div style="color: #64748b;">Duration</div>
                    </div>
                    <div class="neo-card small" style="padding: 1.5rem;">
                        <div style="font-size: 2.5rem; font-weight: bold; color: var(--accent-orange);">🔥 ${this.stats.highScore}</div>
                        <div style="color: #64748b;">All-Time Best</div>
                    </div>
                </div>

                <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
                    <button class="neo-btn primary large" onclick="window.flashDrills.start()">
                        <i class="ph-bold ph-arrow-clockwise"></i> Play Again
                    </button>
                    <button class="neo-btn outline large" onclick="window.flashDrills.renderIntro()">
                        <i class="ph-bold ph-house"></i> Main Menu
                    </button>
                </div>
            </div>
        `;
    }
}
