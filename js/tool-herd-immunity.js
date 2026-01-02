/**
 * Herd Immunity Threshold Calculator (Phase 15)
 * Calculates HIT based on Basic Reproduction Number (R0).
 */
class HerdImmunityCalculator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (this.container) {
            this.render();
        } else {
            console.warn(`[HERD] Container ${containerId} not found.`);
        }
    }

    render() {
        this.container.innerHTML = `
            <div class="neo-card">
                <h3><i class="ph-bold ph-users-three"></i> Herd Immunity Calculator</h3>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 1.5rem;">
                    Calculate the vaccination coverage required to stop an outbreak based on the Basic Reproduction Number (R₀).
                </p>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
                    <!-- Input Section -->
                    <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <label style="display:block; font-weight:600; margin-bottom:0.5rem; color:var(--navy-primary);">
                            Basic Reproduction Number (R₀)
                        </label>
                        <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
                            <input type="range" id="herd-r0-input" min="1.1" max="20" step="0.1" value="15" style="flex:1;">
                            <input type="number" id="herd-r0-number" min="1.1" max="20" step="0.1" value="15" style="width: 70px; padding: 0.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-weight:bold;">
                        </div>

                        <div style="font-size: 0.85rem; color: #64748b;">
                            <strong>Common R₀ Values:</strong>
                            <div style="margin-top:0.5rem; display:flex; flex-wrap:wrap; gap:0.5rem;">
                                <span class="neo-badge small clickable" onclick="document.getElementById('herd-r0-number').value=15; document.getElementById('herd-r0-number').dispatchEvent(new Event('input'));">Measles (15)</span>
                                <span class="neo-badge small clickable" onclick="document.getElementById('herd-r0-number').value=6; document.getElementById('herd-r0-number').dispatchEvent(new Event('input'));">Polio (6)</span>
                                <span class="neo-badge small clickable" onclick="document.getElementById('herd-r0-number').value=2.5; document.getElementById('herd-r0-number').dispatchEvent(new Event('input'));">COVID-19 (2.5)</span>
                                <span class="neo-badge small clickable" onclick="document.getElementById('herd-r0-number').value=1.5; document.getElementById('herd-r0-number').dispatchEvent(new Event('input'));">Ebola (1.5)</span>
                            </div>
                        </div>
                    </div>

                    <!-- Output Section -->
                    <div style="text-align: center;">
                        <div style="font-weight: 600; color: #64748b; margin-bottom: 0.5rem;">REQUIRED VACCINATION RATE (HIT)</div>
                        <div id="herd-result" style="font-size: 3rem; font-weight: 800; color: var(--accent-green); line-height: 1;">93.3%</div>
                        <div style="margin-top: 1rem; height: 12px; background: #e2e8f0; border-radius: 6px; overflow: hidden; position: relative;">
                            <div id="herd-bar" style="width: 93.3%; height: 100%; background: var(--accent-green); transition: width 0.3s ease;"></div>
                        </div>
                        <div style="margin-top: 1rem; font-size: 0.9rem; background: #fffbe6; padding: 0.75rem; border-radius: 6px; border: 1px solid #ffe58f; text-align: left;">
                            <strong>Formula:</strong> HIT = (1 - 1/R₀) × 100
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.attachListeners();
    }

    attachListeners() {
        const slider = this.container.querySelector('#herd-r0-input');
        const number = this.container.querySelector('#herd-r0-number');
        const result = this.container.querySelector('#herd-result');
        const bar = this.container.querySelector('#herd-bar');

        const update = (val) => {
            const r0 = parseFloat(val);
            if (isNaN(r0) || r0 < 1.01) return; // Prevent div by zero or negative

            // Sync inputs
            slider.value = r0;
            number.value = r0;

            // Calculate HIT
            // HIT = 1 - (1/R0)
            const hit = 1 - (1 / r0);
            const hitPercent = (hit * 100).toFixed(1);

            // Update UI
            result.textContent = `${hitPercent}%`;
            bar.style.width = `${hitPercent}%`;

            // Color Logic
            if (hitPercent > 90) {
                result.style.color = '#ef4444'; // Red (Hard to achieve)
                bar.style.background = '#ef4444';
            } else if (hitPercent > 70) {
                result.style.color = '#f59e0b'; // Orange
                bar.style.background = '#f59e0b';
            } else {
                result.style.color = '#22c55e'; // Green
                bar.style.background = '#22c55e';
            }
        };

        slider.addEventListener('input', (e) => update(e.target.value));
        number.addEventListener('input', (e) => update(e.target.value));

        // Global click handler for the badges (since they are dynamic HTML)
        this.container.addEventListener('click', (e) => {
            if (e.target.classList.contains('clickable')) {
                // The onclick in HTML handles value set, just need to trigger logic if distinct
            }
        });
    }
}

// Make available globally
window.HerdImmunityCalculator = HerdImmunityCalculator;
