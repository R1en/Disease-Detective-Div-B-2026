// 2x2 TABLE CALCULATOR
// Auto-calculates RR, OR, AR, and other epidemiological measures

class _Calculator2x2 {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return; // Silent return if container doesn't exist
        this.values = { a: 0, b: 0, c: 0, d: 0 };
        this.mode = 'unmatched';
        this.render();
    }

    render() {
        const html = `
            <div class="calculator-2x2">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h2 style="margin: 0;"><i class="ph ph-calculator"></i> 2×2 Table Calculator</h2>
                </div>
                
                <div class="mode-selector" style="background: var(--surface-2); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
                        <div style="flex: 1; min-width: 200px;">
                            <label for="calc-mode" style="font-weight: 500; font-size: 0.9rem;">Analysis Mode:</label>
                            <select id="calc-mode" class="form-select" style="width: 100%; margin-top: 0.5rem;" onchange="calc2x2.setMode(this.value)">
                                <option value="unmatched">Standard (Unmatched / Cohort)</option>
                                <option value="matched">Matched Case-Control</option>
                                <option value="pt">Incidence Density (Person-Time)</option>
                                <option value="stratified">Stratified (Mantel-Haenszel)</option>
                            </select>
                        </div>
                        <div class="national-toggle" style="display: flex; align-items: center; margin-top: 1.5rem;">
                            <label class="switch" style="margin-right: 0.5rem;">
                                <input type="checkbox" id="national-mode-toggle" aria-label="Toggle National Statistics Mode" ${this.nationalMode ? 'checked' : ''} onchange="calc2x2.toggleNationalMode(this.checked)">
                                <span class="slider round"></span>
                            </label>
                            <span style="font-weight: bold; color: var(--navy-primary); font-size: 0.9rem;">National Stats</span>
                        </div>
                    </div>
                    <div id="mode-guidance" style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-muted); font-style: italic;">
                        Standard 2x2 analysis for Cohort and Case-Control studies. Enter counts of individuals.
                    </div>
                </div>

                <div class="calc-actions" style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
                    <button class="btn btn-secondary" onclick="calc2x2.toggleSteps()"><i class="ph-bold ph-function"></i> Show Math</button>
                    <button class="btn btn-secondary" onclick="calc2x2.copyResults()"><i class="ph-bold ph-copy"></i> Copy Results</button>
                    <button class="btn btn-outline" onclick="calc2x2.clear()">Clear</button>
                    <button class="btn btn-outline" onclick="calc2x2.loadExample()">Load Example</button>
                    <button class="btn btn-secondary" onclick="calc2x2.toggleImporter()" style="width: 100%; margin-top: 0.5rem;"><i class="ph-bold ph-upload"></i> Import Line List</button>
                </div>

                <div id="importer-section" class="neo-card small" style="display: none; background: #fff; border: 1px dashed var(--navy-primary); margin-bottom: 2rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h4 style="margin:0;">Import Line List Data</h4>
                        <button onclick="calc2x2.toggleImporter()" style="background:none; border:none; cursor:pointer;"><i class="ph-bold ph-x"></i></button>
                    </div>
                    <p style="font-size:0.9rem; color:#666; margin:0.5rem 0;">Paste rows (Excel/Sheets). Must have headers like "Exposure" and "Ill".</p>
                    <textarea id="import-area" aria-label="Paste CSV Data here" style="width:100%; height:120px; font-family:monospace; margin-bottom:0.5rem; border:1px solid #ccc; padding:0.5rem;" placeholder="ID      Exposure      Ill&#10;1       Yes           Yes&#10;2       No            No"></textarea>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div id="import-error" style="color:var(--accent-orange); font-size:0.85rem; font-weight:bold;"></div>
                        <button class="neo-btn primary small" onclick="calc2x2.runImport()">Process Data</button>
                    </div>
                </div>

                <div id="calc-steps" class="neo-card small" style="display: none; background: #f8fafc; border: 1px dashed var(--navy-primary); margin-bottom: 2rem;">
                    <h4 style="margin-top: 0; color: var(--navy-primary);">Step-by-Step Breakdown</h4>
                    <div id="steps-content" style="font-family: monospace; font-size: 0.95rem;"></div>
                </div>
                
                <div class="table-2x2">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="table-head-1">Disease + (Ill)</th>
                                <th id="table-head-2">Disease − (Well)</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="table-row-1"><strong>Exposed +</strong></td>
                                <td>
                                    <input type="number" id="cell-a" value="${this.values.a}" min="0" class="cell-input" 
                                           aria-label="Cell A: Exposed and Ill"
                                           title="a = True Positives (Exposed and Ill) - Enter count">
                                    <div style="font-size: 0.7rem; color: #666; text-align: center;">a</div>
                                </td>
                                <td>
                                    <input type="number" id="cell-b" value="${this.values.b}" min="0" class="cell-input"
                                           aria-label="Cell B: Exposed and Well"
                                           title="b = False Positives (Exposed but Well) - Enter count">
                                    <div style="font-size: 0.7rem; color: #666; text-align: center;">b</div>
                                </td>
                                <td class="total-cell" id="total-a-b">0</td>
                            </tr>
                            <tr>
                                <td id="table-row-2"><strong>Exposed −</strong></td>
                                <td>
                                    <input type="number" id="cell-c" value="${this.values.c}" min="0" class="cell-input"
                                           aria-label="Cell C: Unexposed and Ill"
                                           title="c = False Negatives (Unexposed but Ill) - Enter count">
                                    <div style="font-size: 0.7rem; color: #666; text-align: center;">c</div>
                                </td>
                                <td>
                                    <input type="number" id="cell-d" value="${this.values.d}" min="0" class="cell-input"
                                           aria-label="Cell D: Unexposed and Well"
                                           title="d = True Negatives (Unexposed and Well) - Enter count">
                                    <div style="font-size: 0.7rem; color: #666; text-align: center;">d</div>
                                </td>
                                <td class="total-cell" id="total-c-d">0</td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td class="total-cell" id="total-a-c">0</td>
                                <td class="total-cell" id="total-b-d">0</td>
                                <td class="total-cell grand-total" id="grand-total">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="results-grid" aria-live="polite" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                    <div class="neo-card small">
                        <strong>Attack Rate (Exp)</strong>
                        <div class="stat-value" id="ar-exposed">—</div>
                    </div>
                    <div class="neo-card small">
                        <strong>Attack Rate (Unexp)</strong>
                        <div class="stat-value" id="ar-unexposed">—</div>
                    </div>
                    <div class="neo-card small">
                        <strong>Relative Risk (RR)</strong>
                        <div class="stat-value accent" id="rr-value">—</div>
                        <div class="stat-sub" id="rr-interp"></div>
                    </div>
                    <div class="neo-card small">
                        <strong>Odds Ratio (OR)</strong>
                        <div class="stat-value accent" id="or-value">—</div>
                        <div class="stat-sub" id="or-interp"></div>
                        <div class="stat-sub" style="margin-top:0.25rem; font-size:0.8rem; color: var(--text-color); font-weight: bold;">
                           (OR ≈ RR if prev. &lt; 10%)
                        </div>
                    </div>
                    <div class="neo-card small">
                        <strong>Attr. Risk (RD)</strong>
                        <div class="stat-value" id="rd-value">—</div>
                    </div>
                     <div class="neo-card small">
                        <strong>Attr. Risk %</strong>
                        <div class="stat-value" id="ar-pct-value">—</div>
                    </div>
                </div>

                <div class="national-mode-section national-stat hidden" style="border-top: 2px dashed var(--border); padding-top: 1.5rem;">
                    <h3 style="color: var(--navy-primary); margin-top: 0;">Advanced Statistics (National Mode)</h3>
                    <div class="results-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                        <div class="neo-card small" style="background: #fdf2f8;">
                            <strong>Chi-Square</strong>
                            <div class="stat-value" id="chi-square-value">—</div>
                            <div class="stat-sub" id="p-value"></div>
                            <div class="stat-sub" id="chi-interp"></div>
                        </div>
                        <div class="neo-card small" style="background: #fdf2f8;">
                            <strong>95% CI (OR)</strong>
                            <div class="stat-value smaller" id="or-ci">—</div>
                            <div class="stat-sub">Woolf's Method</div>
                        </div>
                         <div class="neo-card small" style="background: #fdf2f8;">
                            <strong>95% CI (RR)</strong>
                            <div class="stat-value smaller" id="rr-ci">—</div>
                            <div class="stat-sub">Taylor Series</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.container.innerHTML = html;
        this.attachListeners();
        this.calculate();
    }

    copyResults() {
        const { a, b, c, d } = this.values;
        const rr = document.getElementById('rr-value').textContent;
        const or = document.getElementById('or-value').textContent;
        const arExp = document.getElementById('ar-exposed').textContent;
        const arUnexp = document.getElementById('ar-unexposed').textContent;
        const rd = document.getElementById('rd-value').textContent;

        const text = `2x2 Calculation Results:
------------------------
       Ill  Well
Exp+   ${a}   ${b}
Exp-   ${c}   ${d}
------------------------
Attack Rate (Exp): ${arExp}
Attack Rate (Unexp): ${arUnexp}
Relative Risk (RR): ${rr}
Odds Ratio (OR): ${or}
Attributable Risk: ${rd}
`;
        navigator.clipboard.writeText(text).then(() => {
            const btns = this.container.querySelectorAll('.btn-secondary');
            // Assuming the copy button is the second one, but safer to find by icon or text
            let btn = null;
            btns.forEach(b => {
                if (b.textContent.includes('Copy')) btn = b;
            });

            if (btn) {
                const original = btn.innerHTML;
                btn.innerHTML = '<i class="ph-bold ph-check"></i> Copied!';
                setTimeout(() => btn.innerHTML = original, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy', err);
            if (typeof window.UI !== 'undefined') window.UI.toast('Failed to copy to clipboard', 'error');
            else alert('Failed to copy to clipboard');
        });
    }

    attachListeners() {
        ['a', 'b', 'c', 'd'].forEach(cell => {
            const input = document.getElementById(`cell-${cell}`);
            if (input) {
                input.addEventListener('input', (e) => {
                    let val = parseInt(e.target.value);
                    if (isNaN(val) || val < 0) val = 0;
                    // Dont overwrite user typing empty string, only on calc
                    this.values[cell] = val;
                    this.calculate();
                });
                // Enforce on blur
                input.addEventListener('blur', (e) => {
                    const val = parseInt(e.target.value);
                    if (isNaN(val) || val < 0) {
                        e.target.value = 0;
                        this.values[cell] = 0;
                        this.calculate();
                    }
                });
            }
        });
    }

    toggleSteps() {
        const steps = document.getElementById('calc-steps');
        const btn = this.container.querySelector('.btn-secondary');
        if (steps.style.display === 'none') {
            steps.style.display = 'block';
            btn.innerHTML = '<i class="ph-bold ph-function"></i> Hide Math';
        } else {
            steps.style.display = 'none';
            btn.innerHTML = '<i class="ph-bold ph-function"></i> Show Math';
        }
    }

    calculate() {
        // Sanitize values to ensure they are numbers
        this.values.a = Number(this.values.a) || 0;
        this.values.b = Number(this.values.b) || 0;
        this.values.c = Number(this.values.c) || 0;
        this.values.d = Number(this.values.d) || 0;

        const { a, b, c, d } = this.values;

        // Update totals
        document.getElementById('total-a-b').textContent = Number((a + b).toFixed(1));
        document.getElementById('total-c-d').textContent = Number((c + d).toFixed(1));
        document.getElementById('total-a-c').textContent = Number((a + c).toFixed(1));
        document.getElementById('total-b-d').textContent = Number((b + d).toFixed(1));
        document.getElementById('grand-total').textContent = Number((a + b + c + d).toFixed(1));

        const mode = this.mode || 'unmatched';
        const stepsContainer = document.getElementById('steps-content');

        let rr = 0, or = 0, arExposed = 0, arUnexposed = 0, arPct = 0;

        if (mode === 'matched') {
            // McNemar's OR = b / c
            or = c > 0 ? b / c : 0;

            document.getElementById('rr-value').textContent = "N/A";
            document.getElementById('or-value').textContent = this.formatNumber(or);
            document.getElementById('ar-exposed').textContent = "N/A";
            document.getElementById('ar-unexposed').textContent = "N/A";
            document.getElementById('rd-value').textContent = "N/A";
            document.getElementById('ar-pct-value').textContent = "N/A";

            if (stepsContainer) {
                stepsContainer.innerHTML = `
                    <div style="margin-bottom: 0.5rem;"><strong>Matched Case-Control:</strong> Analyze <em>discordant pairs</em>.</div>
                    <div><strong>Odds Ratio (OR):</strong> b / c = ${b} / ${c} = <strong>${this.formatNumber(or)}</strong></div>
                `;
            }

            this.interpretValue('or-interp', or, 'odds');
            document.getElementById('rr-interp').textContent = "Not used in Matched";

            this.interpretValue('or-interp', or, 'odds');
            document.getElementById('rr-interp').textContent = "Not used in Matched";

        } else if (mode === 'stratified') {
            // We need a second table for this... 
            // For simplicity in this tool, we will assume Strata 1 is the user input A-D, 
            // and we will prompt or look for hidden inputs for Strata 2.
            // BUT simpler: Just show a "Work in Progress" message or minimal UI for now,
            // or render input fields for Stratum 2 dynamically.

            // Dynamic injection of Stratum 2 inputs if missing
            const stratum2 = document.getElementById('stratum-2-container');
            if (!stratum2) {
                this.injectStratum2();
                return; // Re-render triggers calc again
            }

            // Get Stratum 2 values
            const a2 = Number(document.getElementById('cell-a2').value) || 0;
            const b2 = Number(document.getElementById('cell-b2').value) || 0;
            const c2 = Number(document.getElementById('cell-c2').value) || 0;
            const d2 = Number(document.getElementById('cell-d2').value) || 0;

            // Calculate MH OR
            // OR_MH = Sum( (ad)/N ) / Sum( (bc)/N )
            const n1 = a + b + c + d || 1;
            const n2 = a2 + b2 + c2 + d2 || 1;

            const num1 = (a * d) / n1;
            const denom1 = (b * c) / n1;

            const num2 = (a2 * d2) / n2;
            const denom2 = (b2 * c2) / n2;

            const orMH = (num1 + num2) / (denom1 + denom2) || 0;

            // Crude OR (Total)
            const A = a + a2, B = b + b2, C = c + c2, D = d + d2;
            const orCrude = (A * D) / (B * C) || 0;

            document.getElementById('or-value').textContent = this.formatNumber(orMH);
            document.getElementById('rr-value').textContent = "use OR"; // MH RR is harder

            // Display Logic
            if (stepsContainer) {
                const diff = Math.abs(orCrude - orMH) / orMH;
                const isConfounded = diff > 0.1; // 10% rule

                stepsContainer.innerHTML = `
                    <div><strong>Stratum 1 (Above):</strong> OR1 = ${(a * d) / (b * c) ? ((a * d) / (b * c)).toFixed(2) : 0}</div>
                    <div><strong>Stratum 2 (Below):</strong> OR2 = ${(a2 * d2) / (b2 * c2) ? ((a2 * d2) / (b2 * c2)).toFixed(2) : 0}</div>
                    <hr>
                    <div><strong>Crude OR:</strong> ${orCrude.toFixed(2)}</div>
                    <div><strong>Adjusted OR (Mantel-Haenszel):</strong> ${orMH.toFixed(2)}</div>
                    <div style="margin-top:0.5rem; color: ${isConfounded ? 'red' : 'green'}; font-weight:bold;">
                        ${isConfounded ? 'Change > 10% → Confounding Present!' : 'Change < 10% → No Major Confounding.'}
                    </div>
                 `;
            }

            this.interpretValue('or-interp', orMH, 'odds');

        } else if (mode === 'pt') {
            arExposed = b > 0 ? a / b : 0;
            arUnexposed = d > 0 ? c / d : 0;
            const irr = arUnexposed > 0 ? arExposed / arUnexposed : 0;

            document.getElementById('ar-exposed').textContent = arExposed.toFixed(4);
            document.getElementById('ar-unexposed').textContent = arUnexposed.toFixed(4);
            document.getElementById('rr-value').textContent = this.formatNumber(irr);
            document.getElementById('or-value').textContent = "N/A";

            const rd = arExposed - arUnexposed;
            document.getElementById('rd-value').textContent = rd.toFixed(4);

            arPct = irr > 0 ? (((irr - 1) / irr) * 100) : 0;
            document.getElementById('ar-pct-value').textContent = this.formatPercent(arPct / 100);

            if (stepsContainer) {
                stepsContainer.innerHTML = `
                    <div style="margin-bottom: 0.5rem;"><strong>Incidence Rate (Exp):</strong> Cases / PT = ${a} / ${b} = <strong>${arExposed.toFixed(4)}</strong></div>
                    <div style="margin-bottom: 0.5rem;"><strong>Incidence Rate (Unexp):</strong> Cases / PT = ${c} / ${d} = <strong>${arUnexposed.toFixed(4)}</strong></div>
                    <div style="margin-bottom: 0.5rem;"><strong>Rate Ratio (IRR):</strong> IR(exp) / IR(unexp) = ${arExposed.toFixed(4)} / ${arUnexposed.toFixed(4)} = <strong>${this.formatNumber(irr)}</strong></div>
                `;
            }

            this.interpretValue('rr-interp', irr, 'risk');
            document.getElementById('or-interp').textContent = "N/A for Person-Time";

        } else {
            const totalExposed = a + b;
            const totalUnexposed = c + d;

            arExposed = totalExposed > 0 ? (a / totalExposed) : 0;
            arUnexposed = totalUnexposed > 0 ? (c / totalUnexposed) : 0;

            rr = arUnexposed > 0 ? (arExposed / arUnexposed) : 0;
            or = (b > 0 && c > 0) ? ((a * d) / (b * c)) : 0;

            document.getElementById('ar-exposed').textContent = this.formatPercent(arExposed);
            document.getElementById('ar-unexposed').textContent = this.formatPercent(arUnexposed);
            document.getElementById('rr-value').textContent = this.formatNumber(rr);
            document.getElementById('or-value').textContent = this.formatNumber(or);

            const rd = arExposed - arUnexposed;
            document.getElementById('rd-value').textContent = this.formatPercent(rd);

            arPct = rr > 0 ? (((rr - 1) / rr) * 100) : 0;
            document.getElementById('ar-pct-value').textContent = this.formatPercent(arPct / 100);

            if (stepsContainer) {
                stepsContainer.innerHTML = `
                    <div style="margin-bottom: 0.5rem;"><strong>1. Attack Rate (Exposed):</strong> a / (a+b) = ${a} / ${totalExposed} = <strong>${arExposed.toFixed(3)}</strong> (${(arExposed * 100).toFixed(1)}%)</div>
                    <div style="margin-bottom: 0.5rem;"><strong>2. Attack Rate (Unexposed):</strong> c / (c+d) = ${c} / ${totalUnexposed} = <strong>${arUnexposed.toFixed(3)}</strong> (${(arUnexposed * 100).toFixed(1)}%)</div>
                    <div style="margin-bottom: 0.5rem;"><strong>3. Relative Risk (RR):</strong> AR(exp) / AR(unexp) = ${arExposed.toFixed(3)} / ${arUnexposed.toFixed(3)} = <strong>${this.formatNumber(rr)}</strong></div>
                    <div style="margin-bottom: 0.5rem;"><strong>4. Odds Ratio (OR):</strong> (a×d) / (b×c) = (${a}×${d}) / (${b}×${c}) = ${a * d} / ${b * c} = <strong>${this.formatNumber(or)}</strong></div>
                `;
            }

            this.interpretValue('rr-interp', rr, 'risk');
            this.interpretValue('or-interp', or, 'odds');

            if (this.nationalMode) {
                this.calculateNationalStats(a, b, c, d, or, rr);
            }
        }
    }

    interpretValue(elementId, val, type) {
        const el = document.getElementById(elementId);
        if (!el) return;

        if (val > 1) {
            el.textContent = type === 'risk' ? `Exposure increases risk by ${((val - 1) * 100).toFixed(0)}%` : `${val.toFixed(2)}× higher odds`;
            el.style.color = 'var(--danger)';
        } else if (val < 1 && val > 0) {
            el.textContent = type === 'risk' ? `Exposure decreases risk by ${((1 - val) * 100).toFixed(0)}%` : `${(1 / val).toFixed(2)}× lower odds`;
            el.style.color = 'var(--success)';
        } else if (val === 1) {
            el.textContent = 'No association';
            el.style.color = 'var(--text-muted)';
        } else {
            el.textContent = '—';
            el.style.color = 'var(--text-muted)';
        }
    }

    setMode(mode) {
        this.mode = mode;
        const guidance = document.getElementById('mode-guidance');
        const thDisease = document.getElementById('table-head-1');
        const thHealthy = document.getElementById('table-head-2');
        const rowExp = document.getElementById('table-row-1');
        const rowUnexp = document.getElementById('table-row-2');

        // Reset guidance styles
        if (guidance) {
            guidance.style.background = 'transparent';
            guidance.style.padding = '0';
            guidance.style.borderRadius = '0';
            guidance.style.color = 'var(--text-muted)';
        }

        if (mode === 'matched') {
            if (guidance) guidance.textContent = "Matched Case-Control. Use the 2x2 of Pairs. Cells represent PAIRS, not people.";
            if (thDisease) thDisease.innerHTML = "Control Exposed (+)";
            if (thHealthy) thHealthy.innerHTML = "Control Unexposed (-)";
            if (rowExp) rowExp.innerHTML = "<strong>Case Exposed (+)</strong>";
            if (rowUnexp) rowUnexp.innerHTML = "<strong>Case Unexposed (-)</strong>";
        } else if (mode === 'pt') {
            if (guidance) guidance.textContent = "Incidence Density. 'Disease -' column becomes 'Person-Time'. Enter summed time.";
            if (thDisease) thDisease.innerHTML = "Cases";
            if (thHealthy) thHealthy.innerHTML = "Person-Time";
            if (rowExp) rowExp.innerHTML = "<strong>Exposed</strong>";
            if (rowUnexp) rowUnexp.innerHTML = "<strong>Unexposed</strong>";
        } else if (mode === 'stratified') {
            if (guidance) guidance.innerHTML = "<strong>Mantel-Haenszel Analysis:</strong> Check for Confounding. Enter Stratum 1 above, Stratum 2 below.";
            if (thDisease) thDisease.innerHTML = "Disease +";
            if (thHealthy) thHealthy.innerHTML = "Disease -";

            // Show Strata 2
            this.injectStratum2();
        } else {
            if (guidance) guidance.textContent = "Standard 2x2 analysis for Cohort and Case-Control studies. Enter counts of individuals.";
            if (thDisease) thDisease.innerHTML = "Disease + (Ill)";
            if (thHealthy) thHealthy.innerHTML = "Disease − (Well)";
            if (rowExp) rowExp.innerHTML = "<strong>Exposed +</strong>";
            if (rowUnexp) rowUnexp.innerHTML = "<strong>Exposed −</strong>";
        }
        this.calculate();
    }

    toggleNationalMode(checked) {
        this.nationalMode = checked;
        const stats = this.container.querySelectorAll('.national-stat');
        stats.forEach(el => {
            if (this.nationalMode) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
        this.calculate();
    }

    calculateNationalStats(a, b, c, d, or, rr) {
        const total = a + b + c + d;
        if (total > 0) {
            const expA = ((a + c) * (a + b)) / total;
            const expB = ((b + d) * (a + b)) / total;
            const expC = ((a + c) * (c + d)) / total;
            const expD = ((b + d) * (c + d)) / total;

            const chi = (Math.pow(a - expA, 2) / expA) +
                (Math.pow(b - expB, 2) / expB) +
                (Math.pow(c - expC, 2) / expC) +
                (Math.pow(d - expD, 2) / expD);

            document.getElementById('chi-square-value').textContent = chi.toFixed(2);

            let pVal = "";
            if (chi > 6.63) pVal = "< 0.01 (Highly Sig)";
            else if (chi > 3.84) pVal = "< 0.05 (Significant)";
            else pVal = "> 0.05 (Not Sig)";

            document.getElementById('p-value').textContent = pVal;
            document.getElementById('chi-interp').textContent = chi > 3.84 ? "Reject Null Hypothesis" : "Fail to Reject Null";
        }

        if (a > 0 && b > 0 && c > 0 && d > 0) {
            const lnOR = Math.log(or);
            const seOR = Math.sqrt((1 / a) + (1 / b) + (1 / c) + (1 / d));
            const lowerOR = Math.exp(lnOR - (1.96 * seOR));
            const upperOR = Math.exp(lnOR + (1.96 * seOR));
            document.getElementById('or-ci').textContent = `95 % CI: ${lowerOR.toFixed(2)} - ${upperOR.toFixed(2)} `;
        } else {
            document.getElementById('or-ci').textContent = "Cannot calc CI (zeros)";
        }

        if (a > 0 && c > 0) {
            const lnRR = Math.log(rr);
            const seRR = Math.sqrt(((1 / a) + (1 / c)) - ((1 / (a + b)) + (1 / (c + d))));
            const lowerRR = Math.exp(lnRR - (1.96 * seRR));
            const upperRR = Math.exp(lnRR + (1.96 * seRR));
            document.getElementById('rr-ci').textContent = `95 % CI: ${lowerRR.toFixed(2)} - ${upperRR.toFixed(2)} `;
        } else {
            document.getElementById('rr-ci').textContent = "Cannot calc CI (zeros)";
        }
    }

    formatNumber(num) {
        if (!isFinite(num)) {
            if (isNaN(num)) return '—';
            return '∞'; // Infinite risk
        }
        if (num === 0) return '0.00';
        return num.toFixed(2);
    }

    formatPercent(num) {
        if (num === 0 || !isFinite(num)) return '—';
        return `${(num * 100).toFixed(1)}% `;
    }

    clear() {
        this.values = { a: 0, b: 0, c: 0, d: 0 };
        ['a', 'b', 'c', 'd'].forEach(cell => {
            const input = document.getElementById(`cell-${cell}`);
            if (input) input.value = 0;
        });

        // Reset mode and guidance styles
        this.setMode('unmatched');
        document.getElementById('calc-mode').value = 'unmatched';

        this.calculate();
    }

    loadExample() {
        const mode = document.getElementById('calc-mode').value;

        if (mode === 'matched') {
            // Matched Pairs Example (Foodborne pairs)
            this.values = { a: 15, b: 35, c: 5, d: 45 }; // b and c are discordant pairs
            ['a', 'b', 'c', 'd'].forEach(cell => {
                const input = document.getElementById(`cell-${cell}`);
                if (input) input.value = this.values[cell];
            });
            this.setMode('matched');
            const guidance = document.getElementById('mode-guidance');
            if (guidance) {
                guidance.innerHTML = '<strong style="color: var(--navy-primary);">Matched Example:</strong> 35 pairs were Case-Exposed/Control-Unexposed (b), only 5 were Case-Unexposed/Control-Exposed (c). OR is high.';
                guidance.style.background = '#eef2ff';
            }
        } else if (mode === 'pt') {
            // Person-Time Example
            this.values = { a: 10, b: 1000, c: 5, d: 1000 };
            ['a', 'b', 'c', 'd'].forEach(cell => {
                const input = document.getElementById(`cell-${cell}`);
                if (input) input.value = this.values[cell];
            });
            this.setMode('pt');
            const guidance = document.getElementById('mode-guidance');
            if (guidance) {
                guidance.innerHTML = '<strong style="color: var(--navy-primary);">PT Example:</strong> 10 cases in 1000 person-years exposed vs 5 in 1000 unexposed.';
                guidance.style.background = '#eef2ff';
            }
        } else {
            // Unmatched (Standard)
            this.values = { a: 85, b: 15, c: 10, d: 90 };
            ['a', 'b', 'c', 'd'].forEach(cell => {
                const input = document.getElementById(`cell-${cell}`);
                if (input) input.value = this.values[cell];
            });
            this.setMode('unmatched');

            const guidance = document.getElementById('mode-guidance');
            if (guidance) {
                guidance.innerHTML = '<strong style="color: var(--navy-primary);">Example Loaded:</strong> Chicken salad outbreak. Compare the high Attack Rate in exposed vs unexposed.';
                guidance.style.background = '#eef2ff';
                guidance.style.padding = '0.5rem';
                guidance.style.borderRadius = '4px';
            }
        }
        this.calculate();
    }

    toggleImporter() {
        const el = document.getElementById('importer-section');
        if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
        if (el.style.display === 'block') document.getElementById('import-area').focus();
    }

    runImport() {
        const text = document.getElementById('import-area').value.trim();
        const errorEl = document.getElementById('import-error');
        errorEl.textContent = '';
        errorEl.style.color = 'var(--accent-orange)';

        if (!text) { errorEl.textContent = "No data entered."; return; }

        const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
        if (lines.length < 2) { errorEl.textContent = "Need at least header and one row."; return; }

        // Naive Parser
        const header = lines[0].toLowerCase().split(/[\t,;|]+/).map(s => s.trim());
        let expIdx = header.findIndex(h => h.includes('exp') || h.includes('risk') || h.includes('food') || h.includes('eaten'));
        let illIdx = header.findIndex(h => h.includes('ill') || h.includes('sick') || h.includes('case') || h.includes('dis') || h.includes('outcome'));

        // Fallback
        if (expIdx === -1 && illIdx === -1) {
            if (header.length >= 3) { expIdx = 1; illIdx = 2; }
            else if (header.length === 2) { expIdx = 0; illIdx = 1; }
        }

        if (expIdx === -1 || illIdx === -1) {
            errorEl.innerHTML = "<strong>Format Error:</strong> Could not identify columns.<br>Please ensure your top row has headers like 'Exposure' and 'Ill'.<br><em>Example: ID, Exposure, Ill</em>";
            return;
        }

        let a = 0, b = 0, c = 0, d = 0;
        let processed = 0;

        for (let i = 1; i < lines.length; i++) {
            const row = lines[i].split(/[\t,;|]+/).map(s => s.trim());
            if (row.length <= Math.max(expIdx, illIdx)) continue;

            const expVal = this.parseBool(row[expIdx]);
            const illVal = this.parseBool(row[illIdx]);

            if (expVal === null || illVal === null) continue;

            if (expVal && illVal) a++;
            if (expVal && !illVal) b++;
            if (!expVal && illVal) c++;
            if (!expVal && !illVal) d++;
            processed++;
        }

        if (processed === 0) {
            errorEl.textContent = "No valid data rows found.";
            return;
        }

        this.values = { a, b, c, d };

        if (document.getElementById('cell-a')) document.getElementById('cell-a').value = a;
        if (document.getElementById('cell-b')) document.getElementById('cell-b').value = b;
        if (document.getElementById('cell-c')) document.getElementById('cell-c').value = c;
        if (document.getElementById('cell-d')) document.getElementById('cell-d').value = d;

        this.calculate();
        errorEl.style.color = 'green';
        errorEl.textContent = `Success! Processed ${processed} rows.`;

        // Hide after success
        setTimeout(() => {
            if (document.getElementById('import-error').textContent.includes('Success')) {
                this.toggleImporter();
            }
        }, 1500);
    }

    parseBool(val) {
        if (!val) return null;
        val = val.toLowerCase();
        if (['y', 'yes', '1', 'pos', '+', 'true'].some(x => val.startsWith(x))) return true;
        if (['n', 'no', '0', 'neg', '-', 'false'].some(x => val.startsWith(x))) return false;
        return null;
    }

    injectStratum2() {
        if (document.getElementById('stratum-2-container')) {
            document.getElementById('stratum-2-container').style.display = 'block';
            return;
        }

        const div = document.createElement('div');
        div.id = 'stratum-2-container';
        div.style.cssText = 'margin-top: 1rem; border-top: 2px dashed #ccc; padding-top: 1rem; background: #fffbe6; padding:1rem; border-radius:8px;';

        div.innerHTML = `
            <h4>Stratum 2 (e.g. Different Age Group)</h4>
            <table class="w-100">
                <tr>
                    <td>Exposed +</td>
                    <td><input type="number" id="cell-a2" value="0" class="cell-input" oninput="calc2x2.calculate()"></td>
                    <td><input type="number" id="cell-b2" value="0" class="cell-input" oninput="calc2x2.calculate()"></td>
                </tr>
                 <tr>
                    <td>Exposed -</td>
                    <td><input type="number" id="cell-c2" value="0" class="cell-input" oninput="calc2x2.calculate()"></td>
                    <td><input type="number" id="cell-d2" value="0" class="cell-input" oninput="calc2x2.calculate()"></td>
                </tr>
            </table>
        `;

        // Insert after first table
        const t1 = this.container.querySelector('.table-2x2');
        if (t1) t1.insertAdjacentElement('afterend', div);
    }
}

// Global instance
const _calc2x2 = null;
