/**
 * Epidemic Engine - Interactive Scenario Engine
 * "Choose Your Own Adventure" style outbreak simulations.
 */

class ScenarioEngine {
    constructor(containerId = 'interactive-cases-root') {
        this.containerId = containerId;
        this.currentScenario = null;
        this.currentNodeId = null;
        this.history = [];
        this.state = {
            integrity: 100, // Health/Public Trust
            budget: 1000,
            time: 0 // Days elapsed
        };

        // Scenario Database
        this.scenarios = window.SCENARIO_DB || {};
    }

    init() {
        // Called when chapter loads.
        this.renderMenu();
    }

    renderMenu() {
        const container = document.getElementById(this.containerId);
        if (!container) return; // Not on the right page

        // Group by category
        const categories = {
            'investigation': { title: 'Field Investigation', icon: 'ph-magnifying-glass', color: 'var(--navy-primary)' },
            'intervention': { title: 'Control & Prevention', icon: 'ph-shield-check', color: '#059669' },
            'calc': { title: 'Calculations & Math', icon: 'ph-calculator', color: '#7c3aed' },
            'linelist': { title: 'Data Interpretation', icon: 'ph-table', color: '#ea580c' },
            'graph': { title: 'Visual Analytics', icon: 'ph-chart-line', color: '#2563eb' }
        };

        const grouped = {};
        Object.keys(this.scenarios).forEach(key => {
            const s = this.scenarios[key];
            let cat = s.category || 'investigation';
            // Safety fallback for unknown categories
            if (!categories[cat]) cat = 'investigation';

            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push({ key, ...s });
        });

        let html = `<div class="scenarios-container">
            <h2 style="margin-bottom: 0.5rem;"><i class="ph-bold ph-strategy"></i> Simulation Center</h2>
            <p class="lead" style="margin-bottom: 2rem; color: #666;">
                Master key skills through interactive "Choose Your Own Adventure" stations. 
                Each scenario mimics a <strong>Station</strong> you might encounter in a Science Olympiad competition.
            </p>`;

        Object.keys(categories).forEach(catId => {
            const items = grouped[catId];
            if (!items || items.length === 0) return;
            const catConfig = categories[catId];

            html += `
                <div class="category-section" style="margin-bottom: 3rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">
                        <div style="background: ${catConfig.color}; color: white; width: 32px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                            <i class="ph-bold ${catConfig.icon}"></i>
                        </div>
                        <h3 style="margin: 0; color: #333;">${catConfig.title}</h3>
                    </div>
                    <div class="scenarios-grid">
                        <style>
                            .scenarios-grid { display: grid; gap: 1.5rem; grid-template-columns: 1fr; }
                            @media (min-width: 640px) { .scenarios-grid { grid-template-columns: repeat(2, 1fr); } }
                            @media (min-width: 1024px) { .scenarios-grid { grid-template-columns: repeat(3, 1fr); } }
                        </style>
            `;

            items.forEach(s => {
                const diffColor = s.difficulty === 'Expert' ? '#dc2626' : (s.difficulty === 'Advanced' ? '#ea580c' : (s.difficulty === 'Intermediate' ? '#d97706' : '#16a34a'));
                const diffBg = s.difficulty === 'Expert' ? '#fef2f2' : (s.difficulty === 'Advanced' ? '#fff7ed' : (s.difficulty === 'Intermediate' ? '#fffbeb' : '#f0fdf4'));
                const diffIcon = s.difficulty === 'Expert' ? 'ph-fire' : (s.difficulty === 'Advanced' ? 'ph-chart-bar' : 'ph-gauge');

                html += `
                    <div class="neo-card scenario-premium-card" style="display: flex; flex-direction: column; height: 100%; border: 2px solid #000; transition: all 0.2s ease; background: white; padding: 0; overflow: hidden; position: relative; box-shadow: 6px 6px 0 #000;" 
                         onclick="window.ScenarioEngine.startScenario('${s.key}')">
                        <div style="height: 8px; width: 100%; background: ${catConfig.color};"></div>
                        <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem; gap: 0.5rem;">
                                <h4 style="margin: 0; color: var(--navy-primary); font-size: 1.25rem; font-weight: 800; line-height: 1.2;">${s.title}</h4>
                                <div style="background: ${catConfig.color}15; color: ${catConfig.color}; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <i class="ph-bold ${catConfig.icon}"></i>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 1.25rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                <span class="neo-badge small" style="background: ${diffBg}; color: ${diffColor}; border: 1px solid ${diffColor}; padding: 0.25rem 0.6rem; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;">
                                    <i class="ph-bold ${diffIcon}"></i> ${s.difficulty || 'Normal'}
                                </span>
                                ${s.points ? `<span class="neo-badge small" style="background: #f8fafc; color: #64748b; border: 1px solid #cbd5e1; padding: 0.25rem 0.6rem; font-size: 0.75rem;">${s.points} pts</span>` : ''}
                            </div>

                            <p style="font-size: 0.95rem; color: #475569; line-height: 1.5; margin-bottom: 2rem; flex: 1;">
                                ${s.description}
                            </p>

                            <div style="margin-top: auto;">
                                <button class="neo-btn primary full-width" style="display: flex; align-items: center; justify-content: center; width: 100%; font-size: 1rem; padding: 0.75rem;">
                                    Investigate <i class="ph-bold ph-arrow-right" style="margin-left: 8px;"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });

            html += `</div></div>`;
        });

        html += `</div>`;
        container.innerHTML = html;
        
    }

    startScenario(id) {
        this.currentScenario = this.scenarios[id];
        this.currentNodeId = 'start';
        this.history = [];
        this.state = { integrity: 100, budget: 1000, time: 0 };
        this.renderNode();

        // Scroll to top
        const container = document.getElementById(this.containerId);
        if (container) container.scrollIntoView({ behavior: 'smooth' });
    }

    renderNode() {
        const container = document.getElementById(this.containerId);
        if (!container || !this.currentScenario) return;

        const node = this.currentScenario.nodes[this.currentNodeId];

        let choicesHtml = '';

        if (node.type === 'reflection') {
            choicesHtml = `
                <div class="reflection-box" style="margin-top: 2rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem; color:var(--accent-color);">
                        <i class="ph-bold ph-pencil-simple"></i> Critical Thinking Challenge
                    </label>
                    <p style="font-size:0.9rem; color:#666;">Type your answer below before revealing the expert analysis.</p>
                    <textarea id="reflection-input" class="neo-input" rows="4" placeholder="Explain your reasoning..." style="width:100%; margin-bottom:1rem; font-family:var(--font-body);"></textarea>
                    
                    <div id="reflection-feedback" role="status" style="display:none; background:#f0fdf4; padding:1.5rem; border-left:4px solid #22c55e; margin-bottom:1rem; border-radius:0 8px 8px 0;">
                        <h4 style="margin-top:0; color:#15803d; font-size:1.1rem;"><i class="ph-bold ph-check-circle"></i> Expert Analysis:</h4>
                        <p style="margin-bottom:0;">${node.feedback || "Good reasoning. Proceed to see the outcome."}</p>
                    </div>

                    <div style="display:flex; gap:1rem; align-items:center;">
                        <button id="reflection-btn" class="neo-btn primary" onclick="
                            const fb = document.getElementById('reflection-feedback');
                            const btn = this;
                            const nextBtn = document.getElementById('reflection-next');
                            const input = document.getElementById('reflection-input');
                            
                            fb.style.display='block';
                            btn.style.display='none';
                            nextBtn.style.display='inline-flex';
                            input.disabled=true;
                            fb.focus();
                        ">Submit Reasoning</button>
                        
                        <button id="reflection-next" class="neo-btn outline" style="display:none;" onclick="window.ScenarioEngine.makeChoice(0)">
                            Continue <i class="ph-bold ph-arrow-right" style="margin-left:0.5rem;"></i>
                        </button>
                    </div>
                </div>
            `;
        } else if (node.choices) {
            choicesHtml = `<div class="scenario-choices" style="display: grid; gap: 1rem; margin-top: 2rem;">`;
            node.choices.forEach((choice, idx) => {
                choicesHtml += `
                    <button class="neo-btn outline" onclick="window.ScenarioEngine.makeChoice(${idx})" style="text-align: left; justify-content: flex-start; padding: 1rem;">
                        <span style="font-weight: bold; color: var(--accent-color); margin-right: 0.5rem;">${String.fromCharCode(65 + idx)}.</span>
                        ${choice.text}
                        <span style="margin-left: auto; font-size: 0.8rem; opacity: 0.7;">
                            ${choice.cost > 0 ? `-$${choice.cost}` : ''} 
                            ${choice.time > 0 ? `+${choice.time}h` : ''}
                        </span>
                    </button>
                `;
            });
            choicesHtml += `</div>`;
        } else if (node.end) {
            choicesHtml = `
                <div style="margin-top: 2rem; text-align: center;">
                    <button class="neo-btn primary large" onclick="window.ScenarioEngine.renderMenu()">Return to Menu</button>
                </div>
             `;
        }

        container.innerHTML = `
            <div class="neo-card" style="max-width: 800px; margin: 0 auto; border-top: 4px solid var(--navy-primary);" role="region" aria-label="Scenario Scenario">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 1rem; margin-bottom: 1rem;" aria-live="polite">
                    <div><strong>Case:</strong> ${this.currentScenario.title}</div>
                    <div style="display: flex; gap: 1rem;">
                        <span aria-label="Integrity: ${this.state.integrity} percent"><i class="ph-bold ph-heart" aria-hidden="true"></i> ${this.state.integrity}%</span>
                        <span aria-label="Time Elapsed: ${this.state.time} hours"><i class="ph-bold ph-clock" aria-hidden="true"></i> +${this.state.time}h</span>
                        <span aria-label="Budget Remaining: ${this.state.budget} dollars"><i class="ph-bold ph-money" aria-hidden="true"></i> $${this.state.budget}</span>
                    </div>
                </div>
                
                <div class="scenario-text" tabindex="-1" style="font-size: 1.1rem; line-height: 1.6; outline: none;">
                    ${node.text}
                </div>

                ${choicesHtml}
            </div>
        `;

        // Focus management: move focus to the new text so screen reader starts reading
        setTimeout(() => {
            const textEl = container.querySelector('.scenario-text');
            if (textEl) textEl.focus();
        }, 50);
    }

    makeChoice(index) {
        if (!this.currentScenario) return;
        const node = this.currentScenario.nodes[this.currentNodeId];
        const choice = node.choices[index];

        this.state.budget -= (choice.cost || 0);
        this.state.time += (choice.time || 0);

        // Integrity check? (if budget < 0)

        this.history.push({ nodeId: this.currentNodeId, choiceIndex: index });
        this.currentNodeId = choice.next;
        this.renderNode();
    }
}

window.ScenarioEngine = new ScenarioEngine();
