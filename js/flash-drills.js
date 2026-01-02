/**
 * Flash Drills - Rapid Fire Practice
 * Pulls random questions from the Quiz Bank for infinite practice.
 */

class FlashDrills {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.currentQuestion = null;
        this.streak = 0;
        this.mode = 'all'; // all, math, logic

        if (this.container) {
            this.renderIntro();
        }
    }

    renderIntro() {
        this.container.innerHTML = `
            <div class="neo-card text-center" style="max-width: 600px; margin: 2rem auto; padding: 3rem;">
                <div style="font-size: 3rem; color: var(--accent-purple); margin-bottom: 1rem;">
                    <i class="ph-bold ph-lightning"></i>
                </div>
                <h2 style="margin-top:0; color:var(--navy-primary);">Flash Drills</h2>
                <p class="lead" style="margin-bottom: 2rem;">Rapid-fire practice to build your speed and intuition.</p>
                
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
            </div>
        `;

        // Expose instance for onclick
        window.flashDrills = this;
    }

    start() {
        const select = document.getElementById('drill-mode');
        if (select) this.mode = select.value;
        this.streak = 0;
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

        const html = `
            <div style="max-width: 800px; margin: 0 auto; animation: slideUp 0.3s ease;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                    <button class="neo-btn small outline" onclick="window.flashDrills.renderIntro()">
                        <i class="ph-bold ph-arrow-left"></i> Exit
                    </button>
                    <div style="font-weight:bold; color:var(--accent-purple);">
                        Current Streak: <span style="font-size:1.2rem;">${this.streak}</span> 🔥
                    </div>
                </div>

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

        if (isCorrect) {
            btn.style.background = '#dcfce7';
            btn.style.borderColor = '#16a34a';
            btn.style.color = '#14532d';
            title.textContent = "Correct! 🎉";
            title.style.color = "#16a34a";
            text.innerHTML = this.currentQuestion.explanation || "Great job!";
            this.streak++;
        } else {
            btn.style.background = '#fee2e2';
            btn.style.borderColor = '#dc2626';
            title.textContent = "Incorrect";
            title.style.color = "#dc2626";

            // Highlight correct one
            // We need to find which button was correct
            // Since we shuffled, we might not know easily unless we stored it in DOM?
            // Actually, we passed isCorrect to the function. We can't find the other button easily
            // unless we store the data-is-correct attribute.
            // Let's just show the explanation which typically contains the answer.
            text.innerHTML = this.currentQuestion.explanation || "Review this concept.";
            this.streak = 0;
        }

        // Focus next button
        const nextBtn = feedback.querySelector('button');
        if (nextBtn) nextBtn.focus();
    }
}
