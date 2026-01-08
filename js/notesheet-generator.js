const _NotesheetGenerator = {
    render: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="notesheet-preview neo-card" style="padding: 1.5rem; background: white; color: black; font-family: 'Arial', sans-serif; font-size: 11px; line-height: 1.4;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 3px double black; padding-bottom: 0.5rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 1.3rem; font-weight: 800;">DISEASE DETECTIVES REFERENCE SHEET</h1>
                        <div style="font-size: 0.8rem; color: #555;">Science Olympiad • Division B/C</div>
                    </div>
                    <div class="no-print">
                        <button onclick="window.print()" class="neo-btn small primary">
                            <i class="ph-bold ph-printer"></i> Print Notesheet
                        </button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
                    
                    <!-- COLUMN 1 -->
                    <div>
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem; background: #f9f9f9;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">📐 CORE FORMULAS</strong>
                            <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
                                <tr><td style="padding: 2px;"><b>Attack Rate</b></td><td>= Cases ÷ Population at Risk</td></tr>
                                <tr style="background:#eee;"><td style="padding: 2px;"><b>Relative Risk</b></td><td>= AR<sub>exposed</sub> ÷ AR<sub>unexposed</sub></td></tr>
                                <tr><td style="padding: 2px;"><b>Odds Ratio</b></td><td>= (a × d) ÷ (b × c)</td></tr>
                                <tr style="background:#eee;"><td style="padding: 2px;"><b>Attributable Risk</b></td><td>= AR<sub>exp</sub> − AR<sub>unexp</sub></td></tr>
                                <tr><td style="padding: 2px;"><b>Sensitivity</b></td><td>= TP ÷ (TP + FN) = "Rule Out"</td></tr>
                                <tr style="background:#eee;"><td style="padding: 2px;"><b>Specificity</b></td><td>= TN ÷ (TN + FP) = "Rule In"</td></tr>
                                <tr><td style="padding: 2px;"><b>PPV</b></td><td>= TP ÷ (TP + FP)</td></tr>
                                <tr style="background:#eee;"><td style="padding: 2px;"><b>NPV</b></td><td>= TN ÷ (TN + FN)</td></tr>
                                <tr><td style="padding: 2px;"><b>Vaccine Eff.</b></td><td>= (AR<sub>u</sub> − AR<sub>v</sub>) ÷ AR<sub>u</sub></td></tr>
                            </table>
                        </div>
                        
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">📊 2×2 TABLE</strong>
                            <table style="width: 100%; text-align: center; font-size: 9px; border-collapse: collapse; border: 1px solid #666;">
                                <tr style="background: #ddd;"><td></td><td style="border: 1px solid #666;"><b>Disease+</b></td><td style="border: 1px solid #666;"><b>Disease−</b></td><td></td></tr>
                                <tr><td style="border: 1px solid #666;"><b>Exposed</b></td><td style="border: 1px solid #666; background:#ffe;">a</td><td style="border: 1px solid #666;">b</td><td style="border: 1px solid #666;">a+b</td></tr>
                                <tr><td style="border: 1px solid #666;"><b>Unexposed</b></td><td style="border: 1px solid #666;">c</td><td style="border: 1px solid #666; background:#efe;">d</td><td style="border: 1px solid #666;">c+d</td></tr>
                            </table>
                            <div style="font-size: 9px; margin-top: 0.25rem;"><b>OR</b> = ad/bc | <b>RR</b> = [a/(a+b)] / [c/(c+d)]</div>
                        </div>

                        <div style="border: 1px solid #333; padding: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">📈 EPI CURVES</strong>
                            <ul style="margin: 0; padding-left: 1rem;">
                                <li><b>Point Source:</b> Sharp rise, single peak (potluck)</li>
                                <li><b>Continuous:</b> Plateau shape (contaminated water)</li>
                                <li><b>Propagated:</b> Multiple peaks/waves (person-to-person)</li>
                                <li><b>Intermittent:</b> Irregular peaks (sporadic exposure)</li>
                            </ul>
                            <div style="background:#eee; padding: 2px 4px; margin-top: 4px; font-size: 9px;">
                                <b>Bin Width</b> = ¼ to ⅓ of incubation period
                            </div>
                        </div>
                    </div>
                    
                    <!-- COLUMN 2 -->
                    <div>
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem; background: #f9f9f9;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🔟 OUTBREAK INVESTIGATION</strong>
                            <ol style="margin: 0; padding-left: 1.2rem; font-size: 10px;">
                                <li><b>Prepare</b> for field work</li>
                                <li><b>Establish</b> existence of outbreak</li>
                                <li><b>Verify</b> diagnosis</li>
                                <li><b>Define</b> case (Person, Place, Time)</li>
                                <li><b>Find</b> cases systematically</li>
                                <li><b>Describe</b> (Time, Place, Person)</li>
                                <li><b>Develop</b> hypotheses</li>
                                <li><b>Evaluate</b> hypotheses (Analytic study)</li>
                                <li><b>Implement</b> control measures</li>
                                <li><b>Communicate</b> findings</li>
                            </ol>
                        </div>
                        
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">⚠️ BIAS & CONFOUNDING</strong>
                            <div style="font-size: 10px;">
                                <div style="margin-bottom: 4px;"><b>Selection Bias:</b> Berkson's (Hospital), Healthy Worker</div>
                                <div style="margin-bottom: 4px;"><b>Information Bias:</b> Recall, Interviewer, Misclassification</div>
                                <div style="margin-bottom: 4px;"><b>Confounding:</b> Associated with E and D, NOT on causal path</div>
                                <div style="background:#fff3cd; padding: 2px 4px;"><b>Fix:</b> Stratify, Match, Restrict, Adjust (MH OR)</div>
                            </div>
                        </div>

                        <div style="border: 1px solid #333; padding: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🧠 MNEMONICS</strong>
                            <ul style="margin: 0; padding-left: 1rem; font-size: 10px;">
                                <li><b>SNOUT:</b> SeNsitive test rules OUT disease</li>
                                <li><b>SPIN:</b> SPecific test rules IN disease</li>
                                <li><b>HILL:</b> Strength, Consistency, Specificity, Temporality, Dose-Response, Plausibility, Coherence, Experiment, Analogy</li>
                                <li><b>Chain:</b> Agent → Reservoir → Portal Exit → Mode → Portal Entry → Host</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- COLUMN 3 -->
                    <div>
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem; background: #f0fff0;">
                            <strong style="display: block; background: #228b22; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🦠 HIGH-YIELD DISEASES</strong>
                            <table style="width: 100%; font-size: 9px; border-collapse: collapse;">
                                <tr style="background:#ddd;"><th style="text-align:left; padding:2px;">Disease</th><th style="text-align:left; padding:2px;">Incubation</th><th style="text-align:left; padding:2px;">Key Clue</th></tr>
                                <tr><td>Norovirus</td><td>12-48h</td><td>Vomit, Chlorine resistant</td></tr>
                                <tr style="background:#eee;"><td>Staph</td><td>2-4h</td><td>Preformed toxin, fast</td></tr>
                                <tr><td>Salmonella</td><td>12-72h</td><td>Poultry, Eggs, Reptiles</td></tr>
                                <tr style="background:#eee;"><td>E.coli O157</td><td>3-4d</td><td>HUS, NO antibiotics</td></tr>
                                <tr><td>Legionella</td><td>2-10d</td><td>Water aerosols, No P2P</td></tr>
                                <tr style="background:#eee;"><td>Lyme</td><td>3-30d</td><td>Bullseye, Tick &lt;24h safe</td></tr>
                                <tr><td>Measles</td><td>10-12d</td><td>Airborne 2h, Koplik spots</td></tr>
                                <tr style="background:#eee;"><td>Hantavirus</td><td>1-5wk</td><td>Rodent dust, Southwest</td></tr>
                            </table>
                        </div>
                        
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🔬 STUDY TYPES</strong>
                            <ul style="margin: 0; padding-left: 1rem; font-size: 10px;">
                                <li><b>Cohort:</b> Follow exposed/unexposed → Calculate RR</li>
                                <li><b>Case-Control:</b> Compare cases/controls → Calculate OR</li>
                                <li><b>Cross-Sectional:</b> Snapshot → Prevalence</li>
                                <li><b>Ecologic:</b> Group-level data → Correlation</li>
                                <li><b>RCT:</b> Gold standard, Randomized</li>
                            </ul>
                        </div>

                        <div style="border: 1px solid #333; padding: 0.5rem; background: #fff0f0;">
                            <strong style="display: block; background: #c00; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🚨 EXAM TRAPS</strong>
                            <ul style="margin: 0; padding-left: 1rem; font-size: 10px;">
                                <li>Crypto is CHLORINE RESISTANT</li>
                                <li>Antibiotics WORSEN E.coli O157 (HUS)</li>
                                <li>Legionella is NOT person-to-person</li>
                                <li>Staph = INTOXICATION (not infection)</li>
                                <li>RR needs INCIDENCE (Cohort only)</li>
                                <li>Confounding ≠ Effect Modification</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="custom-notes-section" style="margin-top: 0.75rem; border-top: 2px solid #333; padding-top: 0.5rem; page-break-inside: avoid;">
                    <strong style="display: block; font-size: 11px; margin-bottom: 0.25rem;">📝 MY FIELD NOTES</strong>
                    <textarea id="notesheet-memo" 
                        placeholder="Type here... Content saves automatically to this device."
                        style="width: 100%; height: 1.5in; font-family: 'Inter', sans-serif; font-size: 10px; border: 1px dashed #999; padding: 0.25rem; resize: vertical; background: #fffdf0;"
                    ></textarea>
                </div>

                <div style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid #999; font-size: 9px; color: #666; display: flex; justify-content: space-between;">
                    <span>Generated by Epidemic Engine v2.3</span>
                    <span>Print: Ctrl+P | Landscape recommended</span>
                </div>
            </div>
            
            <style>
                @media print {
                    /* Orientation specific to Notesheet */
                    @page { size: landscape; margin: 0.25in; }

                    .notesheet-preview {
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border: none !important;
                        font-size: 10px !important;
                    }
                    
                    /* Ensure textarea expands to show all text */
                    #notesheet-memo {
                        border: 1px solid #ccc !important;
                        resize: none !important;
                        overflow: visible !important;
                        height: auto !important;
                        display: block !important;
                        color: black !important;
                        background: transparent !important;
                    }

                    /* Utility to hide specific elements like the print button */
                    .no-print { display: none !important; }
                }
            </style>
        `;

        container.innerHTML = html;

        // Restore saved notes
        const ta = document.getElementById('notesheet-memo');
        const saved = localStorage.getItem('epi_notesheet_memo');
        if (saved) ta.value = saved;

        // Auto-save
        ta.addEventListener('input', () => {
            localStorage.setItem('epi_notesheet_memo', ta.value);
        });
    }
};
