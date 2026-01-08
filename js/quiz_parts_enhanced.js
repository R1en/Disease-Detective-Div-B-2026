/**
 * Quiz Parts Enhancement - Exam-Style Questions
 * Adds realistic scenarios, data tables, and improved explanations
 * to Part 1, Part 2, and Part 3 quizzes
 */

window.QUIZ_PARTS_ENHANCED = {
    // =========================================================================
    // PART 1: FUNDAMENTALS (Chapters 1-6) - Incidence, Prevalence, Morbidity
    // =========================================================================
    part1: {
        intermediate: [
            // --- INCIDENCE & PREVALENCE (Chapter 4) ---
            {
                q: `<p>A school nurse tracks new flu cases over the month of January:</p>
                    <table class='exam-table'>
                    <tr><th>Week</th><th>Total Students</th><th>New Cases This Week</th><th>Recovered</th></tr>
                    <tr><td>Week 1</td><td>500</td><td>10</td><td>0</td></tr>
                    <tr><td>Week 2</td><td>500</td><td>15</td><td>8</td></tr>
                    <tr><td>Week 3</td><td>500</td><td>8</td><td>12</td></tr>
                    <tr><td>Week 4</td><td>500</td><td>2</td><td>10</td></tr>
                    </table>
                    <p>What is the <strong>cumulative incidence</strong> (attack rate) for the entire month?</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 4",
                options: [
                    "5% (10/500 × 100)",
                    "7% (35/500 × 100)",
                    "3.5% (17.5/500 × 100)",
                    "17.5 cases"
                ],
                explain: "<strong>Calculation:</strong> Cumulative Incidence = Total NEW cases / Population at risk = (10+15+8+2)/500 = 35/500 = <strong>7%</strong>.<br><br><em>Exam Traps:</em> ❌ Using only Week 1 data (gives 5%). ❌ Averaging weeks (wrong approach). ❌ Using recoveries in calculation.<br><br><strong>Key Concept:</strong> Cumulative incidence sums ALL new cases over the entire period. The 'at risk' population is the starting population.",
                chapter: "ch4"
            },
            {
                q: `<p>On January 15th, a county health department conducts a diabetes screening. Results:</p>
                    <ul>
                    <li>Total population screened: 10,000</li>
                    <li>Previously diagnosed diabetics: 400</li>
                    <li>Newly diagnosed diabetics: 100</li>
                    </ul>
                    <p>What is the <strong>point prevalence</strong> of diabetes on January 15th?</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 4",
                options: [
                    "5% (500/10,000)",
                    "1% (100/10,000)",
                    "4% (400/10,000)",
                    "50% (500/1,000)"
                ],
                explain: "<strong>Calculation:</strong> Point Prevalence = ALL existing cases / Total population = (400 + 100)/10,000 = <strong>5%</strong>.<br><br><em>Key Distinction:</em> <ul><li><strong>Prevalence</strong> = TOTAL burden (old + new cases) at a point in time</li><li><strong>Incidence</strong> = NEW cases only over a time period</li></ul><strong>Exam Trap:</strong> ❌ Using only newly diagnosed (100/10,000 = 1%) gives INCIDENCE, not prevalence!",
                chapter: "ch4"
            },
            {
                q: `<p>Compare the epidemiology of two diseases in the same city (Population = 1,000,000):</p>
                    <table class='exam-table'>
                    <tr><th></th><th>Disease X</th><th>Disease Y</th></tr>
                    <tr><td><strong>Annual New Cases</strong></td><td>50</td><td>2,000</td></tr>
                    <tr><td><strong>Average Duration</strong></td><td>20 years</td><td>1 week</td></tr>
                    <tr><td><strong>Effect on Patient</strong></td><td>Chronic management</td><td>Full recovery</td></tr>
                    </table>
                    <p>Which disease has the higher <strong>Point Prevalence</strong>?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 4",
                options: [
                    "Disease Y (Higher incidence always means higher prevalence)",
                    "They are approximately equal",
                    "Disease X (Long duration leads to accumulation of cases)",
                    "Cannot be calculated without knowing the CFR"
                ],
                explain: "<strong>Formula:</strong> Prevalence ≈ Incidence × Duration.<br><br><strong>Disease X:</strong> 50 cases/yr × 20 yrs = ~1,000 active cases.<br><strong>Disease Y:</strong> 2,000 cases/yr × (1/52) yrs = ~38 active cases.<br><br><strong>Key Concept:</strong> Even with low incidence, chronic diseases (long duration) accumulate HUGE prevalence. Think of the <em>'Bathtub Analogy'</em>: X has a slow drain, Y has a wide open drain.",
                chapter: "ch4"
            },
            {
                q: `<p>A health department compares two regions:</p>
                    <table class='exam-table'>
                    <tr><th>Region</th><th>Incidence Rate</th><th>Average Duration</th><th>Prevalence</th></tr>
                    <tr><td>Region A</td><td>5 per 1,000</td><td>10 years</td><td>?</td></tr>
                    <tr><td>Region B</td><td>10 per 1,000</td><td>2 years</td><td>?</td></tr>
                    </table>
                    <p>Using the formula P ≈ I × D, which region has HIGHER prevalence?</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 4",
                options: [
                    "Region A (P = 50 per 1,000)",
                    "Region B (P = 20 per 1,000)",
                    "Both have equal prevalence",
                    "Cannot determine from this data"
                ],
                explain: "Region A: P = 5 × 10 = 50 per 1,000. Region B: P = 10 × 2 = 20 per 1,000. Despite having HALF the incidence, Region A has more than DOUBLE the prevalence due to longer disease duration.",
                chapter: "ch4"
            },
            {
                q: `<p>During a measles outbreak at a summer camp of 200 children, the medical log shows:</p>
                    <table class='exam-table'>
                    <tr><th>Outcome</th><th>Count</th></tr>
                    <tr><td>Exposed (Total)</td><td>200</td></tr>
                    <tr><td>Developed Rash & Fever (Cases)</td><td>45</td></tr>
                    <tr><td>Required Hospitalization</td><td>3</td></tr>
                    <tr><td>Deaths</td><td>1</td></tr>
                    </table>
                    <p>Calculate the <strong>Case Fatality Rate (CFR)</strong>.</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 4",
                options: [
                    "0.5% (1/200)",
                    "2.2% (1/45)",
                    "33.3% (1/3)",
                    "22.5% (45/200)"
                ],
                explain: "<strong>Formula:</strong> CFR = Deaths / Total CASES = 1/45 = <strong>2.2%</strong><br><br><strong>What CFR measures:</strong> Severity of disease ONCE YOU HAVE IT (not risk of getting it).<br><br><em>Exam Traps:</em><ul><li>❌ Deaths/Total exposed (200) = Mortality Rate, not CFR</li><li>❌ Deaths/Hospitalized (3) = Wrong denominator</li><li>✅ Deaths/All cases (45) = Correct CFR</li></ul><strong>Mnemonic:</strong> <em>CFR = Fatalities FROM Cases</em>",
                chapter: "ch4"
            },

            // --- RATES AND RATIOS (Chapter 5) ---
            {
                q: `<p>An epidemiologist compares cancer deaths in two cities:</p>
                    <table class='exam-table'>
                    <tr><th>City</th><th>Deaths from Cancer</th><th>Total Population</th><th>Crude Mortality Rate</th></tr>
                    <tr><td>Youngtown</td><td>100</td><td>50,000</td><td>200 per 100,000</td></tr>
                    <tr><td>Eldersburg</td><td>500</td><td>50,000</td><td>1,000 per 100,000</td></tr>
                    </table>
                    <p>Eldersburg's higher crude mortality rate is MOST likely due to:</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 5",
                options: [
                    "More environmental carcinogens in Eldersburg",
                    "Worse healthcare in Eldersburg",
                    "Eldersburg has an older population (confounding by age)",
                    "Different case definitions between cities"
                ],
                explain: "<strong>Key Insight:</strong> Age is a powerful <em>confounder</em> for cancer mortality because older people have more cancer AND die more often.<br><br><strong>Solution:</strong> Use <strong>age-adjusted (standardized) rates</strong> to compare fairly. This mathematically removes the effect of different age distributions.<br><br><strong>Exam Tip:</strong> When comparing populations with different demographics, ALWAYS consider standardization. The names give hints: <em>'Youngtown'</em> vs <em>'Eldersburg'</em> = age is the obvious confounder.",
                chapter: "ch5"
            },
            {
                q: `<p>Review the following metrics calculated from a study:</p>
                    <table class='exam-table'>
                    <tr><th>Metric</th><th>Calculation</th><th>Value</th></tr>
                    <tr><td>A</td><td>Cases / Person-Years</td><td>0.05 / year</td></tr>
                    <tr><td>B</td><td>Deaths / Total Pop</td><td>0.01</td></tr>
                    <tr><td>C</td><td>Cases / Pop at Risk</td><td>0.25</td></tr>
                    <tr><td>D</td><td>Births / Total Pop</td><td>0.02</td></tr>
                    </table>
                    <p>Which metric is strictly a <strong>PROPORTION</strong> (and not a true rate)?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 5",
                options: [
                    "Metric A (Incidence Rate)",
                    "Metric B (Mortality Rate)",
                    "Metric C (Attack Rate / Cumulative Incidence)",
                    "None of them"
                ],
                explain: "<strong>The Naming Trap:</strong> Metric C (Attack Rate) is defined as Cases / Residents. Both numerator and denominator are counts of people (unitless). It's a PROPORTION (0-1).<br><br><strong>True Rates:</strong> Metric A (Incidence Density) has TIME in the denominator (person-years). That's a true rate.<br><br><strong>Exam Tip:</strong> Attack Rate, Prevalence, and CFR are technically proportions, despite their names.",
                chapter: "ch5"
            },

            // --- CHAIN OF INFECTION (Chapter 6) ---
            {
                q: `<p>Match the intervention to the chain of infection link it targets:</p>
                    <table class='exam-table'>
                    <tr><th>Intervention</th><th>Target Link</th></tr>
                    <tr><td>Mosquito nets</td><td>?</td></tr>
                    <tr><td>Hand washing</td><td>?</td></tr>
                    <tr><td>Vaccination</td><td>?</td></tr>
                    <tr><td>Treating infected patients</td><td>?</td></tr>
                    </table>
                    <p>Which intervention targets the <strong>Susceptible Host</strong>?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 6",
                options: [
                    "Mosquito nets (interrupts vector/mode of transmission)",
                    "Hand washing (interrupts portal of exit/transmission)",
                    "Vaccination (makes host immune/non-susceptible)",
                    "Treating infected patients (reduces reservoir/agent)"
                ],
                explain: "<strong>Chain of Infection Links:</strong><ul><li>🦟 <strong>Mosquito nets</strong> → Block the VECTOR (mode of transmission)</li><li>🧼 <strong>Hand washing</strong> → Interrupt TRANSMISSION (portal of exit/entry)</li><li>💉 <strong>Vaccination</strong> → Protect the SUSCEPTIBLE HOST (makes them immune)</li><li>💊 <strong>Treating patients</strong> → Reduce the RESERVOIR (eliminate agent)</li></ul><strong>Exam Tip:</strong> Vaccines change the HOST, not the environment. They don't kill pathogens - they prepare the immune system.",
                chapter: "ch6"
            },
            {
                q: `<p>A foodborne outbreak is traced to a deli worker who contaminated sandwiches while symptomatic with Hepatitis A. The deli worker is classified as the:</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 6",
                options: [
                    "Vector",
                    "Reservoir (human)",
                    "Portal of entry",
                    "Susceptible host"
                ],
                explain: "<strong>Key Distinction:</strong><ul><li><strong>RESERVOIR:</strong> Where the pathogen LIVES and multiplies (can be human, animal, or environment). The deli worker harbored Hepatitis A virus.</li><li><strong>VECTOR:</strong> An ARTHROPOD (insect/arachnid) that transmits disease - mosquitoes, ticks, fleas. Vectors are NEVER humans!</li></ul><strong>Exam Trap:</strong> ❌ Food handlers are NOT vectors. They're human reservoirs or carriers. The FOOD is the vehicle; the WORKER is the reservoir.",
                chapter: "ch6"
            },
            {
                q: `<p>Investigate this outbreak scenario:</p>
                    <div style='background:#f1f5f9; padding:10px; border-left:4px solid #3b82f6; margin-bottom:10px;'>
                    "A student develops measles. Two days later, students sitting across the classroom (20 feet away) become infected, despite having no direct contact."
                    </div>
                    <p>This pattern best demonstrates which mode of transmission?</p>`,
                answer: 3,
                type: "mc",
                topic: "Chapter 6",
                options: [
                    "Droplet (direct)",
                    "Vehicle-borne (indirect)",
                    "Vector-borne (indirect)",
                    "Airborne (indirect)"
                ],
                explain: "<strong>Airborne vs Droplet:</strong><ul><li><strong>Droplet:</strong> Heavy particles, fall quickly, < 6 feet range (e.g., sneeze). direct contact.</li><li><strong>Airborne:</strong> Tiny particles (nuclei), float on air currents, > 6 feet range, can linger for hours.</li></ul>The distance (20 feet) and lack of contact confirms <strong>Airborne</strong> transmission (classic for measles).",
                chapter: "ch6"
            }
        ],
        advanced: [
            {
                q: `<p>A hospital tracks C. difficile infections over 6 months:</p>
                    <table class='exam-table'>
                    <tr><th>Month</th><th>Patient-Days</th><th>New C. diff Cases</th></tr>
                    <tr><td>January</td><td>3,000</td><td>6</td></tr>
                    <tr><td>February</td><td>2,800</td><td>4</td></tr>
                    <tr><td>March</td><td>3,100</td><td>8</td></tr>
                    <tr><td>April</td><td>2,900</td><td>5</td></tr>
                    <tr><td>May</td><td>3,200</td><td>7</td></tr>
                    <tr><td>June</td><td>3,000</td><td>6</td></tr>
                    </table>
                    <p>Calculate the <strong>incidence RATE</strong> for the 6-month period (per 1,000 patient-days):</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 4",
                options: [
                    "0.2 per 1,000 patient-days",
                    "36 per 1,000 patient-days",
                    "2.0 per 1,000 patient-days",
                    "6.0 per 1,000 patient-days"
                ],
                explain: "Total cases = 6+4+8+5+7+6 = 36. Total patient-days = 18,000. Incidence rate = 36/18,000 × 1,000 = 2.0 per 1,000 patient-days. This is a TRUE rate because it uses person-time in the denominator.",
                chapter: "ch4"
            }
        ]
    },

    // =========================================================================
    // PART 2: ANALYSIS (Chapters 7-13) - Measures of Association, Study Design
    // =========================================================================
    part2: {
        intermediate: [
            // --- RISK RATIO & ODDS RATIO (Chapter 7) ---
            {
                q: `<p>In a cohort study of a restaurant outbreak:</p>
                    <table class='exam-table'>
                    <tr><th></th><th>Ill</th><th>Not Ill</th><th>Total</th></tr>
                    <tr><td><strong>Ate Potato Salad</strong></td><td>40</td><td>10</td><td>50</td></tr>
                    <tr><td><strong>Did Not Eat Potato Salad</strong></td><td>10</td><td>40</td><td>50</td></tr>
                    <tr><td><strong>Total</strong></td><td>50</td><td>50</td><td>100</td></tr>
                    </table>
                    <p>Calculate the <strong>Risk Ratio (RR)</strong>:</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 7",
                options: [
                    "RR = 2.0",
                    "RR = 4.0",
                    "RR = 8.0",
                    "RR = 16.0"
                ],
                explain: "<strong>Calculation Steps:</strong><ol><li>AR(exposed) = 40/50 = 80%</li><li>AR(unexposed) = 10/50 = 20%</li><li>RR = 80% ÷ 20% = <strong>4.0</strong></li></ol><strong>Interpretation:</strong> Those who consumed potato salad were <em>4 times more likely</em> to become ill than those who didn't.<br><br><strong>Exam Trap:</strong> ❌ OR = (40×40)/(10×10) = 16.0 (NOT the same as RR because disease is common at 50%)<br><br><strong>Key Rule:</strong> OR ≈ RR only when disease is RARE (<10%)",
                chapter: "ch7"
            },
            {
                q: `<p>Using the same 2×2 table above, calculate the <strong>Odds Ratio (OR)</strong>:</p>
                    <table class='exam-table'>
                    <tr><th></th><th>Ill</th><th>Not Ill</th></tr>
                    <tr><td><strong>Ate Potato Salad</strong></td><td>40 (a)</td><td>10 (b)</td></tr>
                    <tr><td><strong>Did Not Eat</strong></td><td>10 (c)</td><td>40 (d)</td></tr>
                    </table>
                    <p>OR = (a×d)/(b×c) = ?</p>`,
                answer: 3,
                type: "mc",
                topic: "Chapter 7",
                options: [
                    "OR = 4.0",
                    "OR = 8.0",
                    "OR = 12.0",
                    "OR = 16.0"
                ],
                explain: "<strong>Formula:</strong> OR = (a×d)/(b×c) = (40×40)/(10×10) = 1600/100 = <strong>16.0</strong><br><br><strong>Why OR (16) ≠ RR (4)?</strong> The disease is COMMON (50% attack rate). When disease is prevalent, OR OVERESTIMATES the relative risk.<br><br><strong>Rare Disease Assumption:</strong> OR ≈ RR only when incidence < 10%. This is why case-control studies of rare diseases can use OR as an estimate of RR.<br><br><strong>Mnemonic:</strong> 'ad/bc' = <em>'A Dog runs Before a Cat'</em></em> 🐕🐱",
                chapter: "ch7"
            },
            {
                q: `<p>Read this abstract excerpt:</p>
                    <div style='background:#fffbeb; padding:10px; border:1px solid #e2e8f0; font-family:serif; font-style:italic;'>
                    "In a cohort of picnic attendees, the risk of illness was 15% in hot dog eaters versus 14% in non-eaters. The Risk Ratio was 1.07 (95% CI: 0.82 - 1.35)."
                    </div>
                    <p>What is the correct epidemiological interpretation?</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 7",
                options: [
                    "Hot dogs caused the outbreak (RR > 1)",
                    "There is no statistically significant association (Null hypothesis not rejected)",
                    "Hot dogs were protective (lower bound < 1)",
                    "The study is invalid due to small sample size"
                ],
                explain: "<strong>Interpreting the Null Value:</strong><br>RR = 1.0 means NO association.<br>The 95% Confidence Interval (0.82 - 1.35) <strong>crosses 1.0</strong>.<br><br>Therefore, the result is <strong>not statistically significant</strong>. We cannot conclude hot dogs caused the illness. The slight elevation (1.07) is likely due to chance.",
                chapter: "ch7"
            },
            {
                q: `<p>A dermatology study reports the following:</p>
                    <table class='exam-table'>
                    <tr><th>Exposure</th><th>Outcome</th><th>RR (95% CI)</th></tr>
                    <tr><td>Daily Sunscreen</td><td>Melanoma</td><td>0.4 (0.3 - 0.5)</td></tr>
                    </table>
                    <p>Translate this Risk Ratio into a "Risk Reduction" percentage.</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 7",
                options: [
                    "60% reduction in risk (Protective)",
                    "40% reduction in risk",
                    "40% increase in protection",
                    "0.4% risk reduction"
                ],
                explain: "<strong>Formula:</strong> Relative Risk Reduction (RRR) = (1 - RR) × 100%<br><br><strong>Calculation:</strong> (1 - 0.4) = 0.6 = <strong>60%</strong>.<br><br><strong>Interpretation:</strong> Using sunscreen reduces the risk of melanoma by 60% compared to not using it. RR < 1 means the exposure is PROTECTIVE.",
                chapter: "ch7"
            },

            // --- OUTBREAK CURVES (Chapter 8) ---
            {
                q: `<p>An epidemic curve shows these characteristics:</p>
                    <ul>
                    <li>Rapid rise over 2 days</li>
                    <li>Single sharp peak</li>
                    <li>Rapid decline over 3 days</li>
                    <li>Total duration: ~7 days (one incubation period)</li>
                    </ul>
                    <p>This pattern is MOST consistent with:</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 8",
                options: [
                    "Point-source outbreak (single exposure event)",
                    "Propagated outbreak (person-to-person transmission)",
                    "Continuous common-source outbreak",
                    "Mixed epidemic (initial source + secondary spread)"
                ],
                explain: "Point-source: Single exposure → cases cluster within one incubation period → classic log-normal shape. Key: Duration < 2× max incubation period of the pathogen.",
                chapter: "ch8"
            },
            {
                q: `<p>An epidemic curve shows:</p>
                    <ul>
                    <li>First peak: Day 5</li>
                    <li>Second peak: Day 15</li>
                    <li>Third peak: Day 25</li>
                    <li>Peaks approximately 10 days apart</li>
                    </ul>
                    <p>If the pathogen has a 10-day incubation period, this pattern suggests:</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 8",
                options: [
                    "Point-source outbreak with multiple exposures",
                    "Propagated outbreak with person-to-person transmission",
                    "Continuous common-source from contaminated water",
                    "Seasonal pattern unrelated to outbreak"
                ],
                explain: "Multiple peaks separated by one incubation period = Propagated (person-to-person) outbreak. Each generation of cases infects the next, creating 'waves' spaced by incubation period.",
                chapter: "ch8"
            },

            // --- STUDY DESIGN (Chapter 10) ---
            {
                q: `<p><strong>Scenario:</strong> You need to study a very rare form of brain cancer (incidence: 1 in 1 million). You have limited funding and time.</p>
                    <table class='exam-table'>
                    <tr><th>Design Option</th><th>Strategy</th></tr>
                    <tr><td>A</td><td>Recruit 100,000 healthy people and follow for 20 years</td></tr>
                    <tr><td>B</td><td>Find 50 existing brain cancer patients and compare to 50 healthy controls</td></tr>
                    <tr><td>C</td><td>Survey the entire city population once</td></tr>
                    </table>
                    <p>Which design is the ONLY feasible option?</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 10",
                options: [
                    "Option A (Cohort)",
                    "Option B (Case-Control)",
                    "Option C (Cross-Sectional)",
                    "None"
                ],
                explain: "<strong>Efficiency for Rare Diseases:</strong><br><br><strong>Option A (Cohort):</strong> Even with 100,000 people, you might see 0 cases in 20 years (since rate is 1/million). <em>Inefficient.</em><br><strong>Option B (Case-Control):</strong> Starts with cases that <em>already exist</em>. You don't have to wait for them to occur. <em>Most Efficient.</em>",
                chapter: "ch10"
            },
            {
                q: `<p>Match the study design to its primary measure of association:</p>
                    <table class='exam-table'>
                    <tr><th>Study Design</th><th>Primary Measure</th></tr>
                    <tr><td>Cohort Study</td><td>?</td></tr>
                    <tr><td>Case-Control Study</td><td>?</td></tr>
                    <tr><td>Cross-Sectional</td><td>?</td></tr>
                    </table>
                    <p>Case-control studies calculate:</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 10",
                options: [
                    "Risk Ratio (RR)",
                    "Odds Ratio (OR)",
                    "Prevalence Ratio",
                    "Incidence Rate Ratio"
                ],
                explain: "Case-control studies CANNOT calculate RR because participants are selected by outcome (cases vs controls), not by exposure. The population denominators are artificial, so we use OR. Cohort → RR. Cross-sectional → Prevalence Ratio.",
                chapter: "ch10"
            },

            // --- BIAS & CONFOUNDING (Chapter 11) ---
            {
                q: `<p><strong>Study Critique:</strong> Validated medical records show that mothers of babies with birth defects used Tylenol at the SAME rate (20%) as mothers of healthy babies. However, when interviewed, the mothers of affected babies reported Tylenol use at 50%.</p>
                    <p>This discrepancy demonstrates:</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 11",
                options: [
                    "Selection bias (wrong participants)",
                    "Confounding (third variable)",
                    "Recall bias (Information bias)",
                    "Observer bias"
                ],
                explain: "<strong>Recall Bias in Action:</strong> The <em>Truth</em> (medical records) shows no difference (20% vs 20%). The <em>Interview</em> suggests a huge risk (50% vs 20%).<br><br>Why? Mothers of affected babies 'ruminate' and search for a cause, remembering exposures that control mothers forget. This creates a <strong>false association</strong>.",
                chapter: "ch11"
            },
            {
                q: `<p>A study finds an association between Coffee and Lung Cancer. Review the stratified analysis results:</p>
                    <table class='exam-table'>
                    <tr><th>Group</th><th>Odds Ratio (Coffee vs Cancer)</th></tr>
                    <tr><td><strong>Crude (Unadjusted)</strong></td><td>2.0 (Confidence Interval: 1.5 - 2.5)</td></tr>
                    <tr><td><strong>Stratified: Smokers</strong></td><td>1.0 (Confidence Interval: 0.8 - 1.2)</td></tr>
                    <tr><td><strong>Stratified: Non-Smokers</strong></td><td>1.0 (Confidence Interval: 0.8 - 1.2)</td></tr>
                    </table>
                    <p>What is the definitive role of <strong>Smoking</strong> in this scenario?</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 11",
                options: [
                    "Effect Modifier (Interaction)",
                    "Confounder",
                    "Mediator (Causal Pathway)",
                    "No role (Coffee causes Cancer)"
                ],
                explain: "<strong>Diagnosis: Confounding</strong><br><br><strong>Why?</strong> The Crude OR (2.0) suggests a risk. But when we <em>separate</em> people by smoking status (Stratification), the risk disappears (OR = 1.0) in BOTH groups.<br><br>This means Coffee doesn't cause Cancer; Coffee drinkers just happen to smoke more, and Smoking causes Cancer. Smoking created the false appearance of a link.<br><br><strong>Exam Rule:</strong><br>Crude ≠ Stratified (and Stratified same as each other) → <strong>Confounding</strong>.<br>Crude ≠ Stratified (and Stratified differ from each other) → <strong>Effect Modification</strong>.",
                chapter: "ch11"
            },
            {
                q: `<p>All of the following are methods to control confounding EXCEPT:</p>`,
                answer: 3,
                type: "mc",
                topic: "Chapter 11",
                options: [
                    "Randomization (in experimental studies)",
                    "Matching (in case-control studies)",
                    "Stratification (in analysis)",
                    "Increasing sample size"
                ],
                explain: "Increasing sample size reduces RANDOM ERROR (increases precision) but does NOT control confounding. Confounding is SYSTEMATIC error that requires design (randomization, matching, restriction) or analysis (stratification, adjustment) to control.",
                chapter: "ch11"
            },

            // --- SENSITIVITY & SPECIFICITY (Chapter 12) ---
            {
                q: `<p>A new rapid COVID test is evaluated:</p>
                    <table class='exam-table'>
                    <tr><th></th><th>Disease Present (PCR+)</th><th>Disease Absent (PCR-)</th></tr>
                    <tr><td><strong>Test Positive</strong></td><td>90</td><td>20</td></tr>
                    <tr><td><strong>Test Negative</strong></td><td>10</td><td>180</td></tr>
                    </table>
                    <p>Calculate the <strong>Sensitivity</strong>:</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 12",
                options: [
                    "90% (90/100)",
                    "82% (90/110)",
                    "95% (180/190)",
                    "90% (90/200)"
                ],
                explain: "<strong>Formula:</strong> Sensitivity = TP/(TP+FN) = 90/(90+10) = <strong>90%</strong><br><br><strong>What it measures:</strong> The test's ability to correctly identify those WITH disease ('true positive rate').<br><br><strong>Mnemonic: SnNout</strong> = High <u>Sn</u>ensitivity, <u>N</u>egative result rules <u>out</u> disease.<br><br><strong>Exam Trap:</strong> ❌ Using total test positives (90/110) gives PPV, not sensitivity!<br><br><em>Quick check:</em> Sensitivity denominator = DISEASE column (TP + FN)",
                chapter: "ch12"
            },
            {
                q: `<p>Using the same table, calculate the <strong>Positive Predictive Value (PPV)</strong>:</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 12",
                options: [
                    "90% (90/100)",
                    "82% (90/110)",
                    "95% (180/190)",
                    "90% (180/200)"
                ],
                explain: "<strong>Formula:</strong> PPV = TP/(TP+FP) = 90/(90+20) = 90/110 = <strong>82%</strong><br><br><strong>Clinical question answered:</strong> <em>'If I test POSITIVE, what'</em>s the probability I ACTUALLY have the disease?'<br><br><strong>Critical concept:</strong> PPV depends heavily on PREVALENCE!<ul><li>High prevalence → High PPV</li><li>Low prevalence → Low PPV (many false positives)</li></ul><strong>Mnemonic:</strong> <em>PPV denominator = TEST POSITIVE row (TP + FP)</em>",
                chapter: "ch12"
            },
            {
                q: `<p>A screening test has 95% sensitivity and 95% specificity. If the disease prevalence is 1%, the PPV will be:</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 12",
                options: [
                    "Low (~16%) - most positives will be false positives",
                    "High (~95%) - matching the test's sensitivity",
                    "Very high (~99%) - complementing specificity",
                    "Cannot determine without sample size"
                ],
                explain: "When prevalence is LOW, even a specific test generates more false positives than true positives. In a population of 10,000: 100 diseased × 95% sensitivity = 95 TP. 9,900 healthy × 5% FP rate = 495 FP. PPV = 95/(95+495) = 16%.",
                chapter: "ch12"
            }
        ],
        advanced: [
            {
                q: `<p>Berkson's bias occurs when:</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 11",
                options: [
                    "Cases and controls are matched on confounders",
                    "Interviewers know case status and probe differently",
                    "Hospital-based case-control studies create spurious associations due to different admission rates",
                    "Random digit dialing misses households without phones"
                ],
                explain: "Berkson's bias (hospital-based selection bias) occurs when both exposure and disease independently increase hospitalization probability. This creates an artificial association in hospital-based studies that doesn't exist in the general population.",
                chapter: "ch11"
            },
            {
                q: `<p>In a 2×2 table, what happens to the Odds Ratio if you swap the exposure and outcome?</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 7",
                options: [
                    "OR stays the same (symmetric property)",
                    "OR becomes 1/OR (inverts)",
                    "OR becomes undefined",
                    "OR approaches 1.0"
                ],
                explain: "The Odds Ratio is SYMMETRIC - it doesn't matter which variable is considered 'exposure' and which is 'outcome.' This is why OR can be calculated in case-control studies where you can't determine true risk.",
                chapter: "ch7"
            }
        ]
    },

    // =========================================================================
    // PART 3: CONTROL & PREVENTION (Chapters 14-21) - Interventions, Ethics, Toxins
    // =========================================================================
    part3: {
        intermediate: [
            // --- VACCINE EFFICACY (Chapter 14-15) ---
            {
                q: `<p>During a measles outbreak, a health department collects the following vaccination data:</p>
                    <table class='exam-table'>
                    <tr><th></th><th>Vaccinated</th><th>Unvaccinated</th><th>Total</th></tr>
                    <tr><td><strong>Measles Cases</strong></td><td>12</td><td>88</td><td>100</td></tr>
                    <tr><td><strong>No Measles</strong></td><td>588</td><td>312</td><td>900</td></tr>
                    <tr><td><strong>Total</strong></td><td>600</td><td>400</td><td>1,000</td></tr>
                    </table>
                    <p>Calculate the <strong>Vaccine Efficacy (VE)</strong>.</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 15",
                options: [
                    "78% (using (88-12)/88 × 100)",
                    "91% (using VE = (ARU - ARV)/ARU × 100)",
                    "82% (using 12/100 × 100)",
                    "Cannot calculate without confidence intervals"
                ],
                explain: "ARV = 12/600 = 2%. ARU = 88/400 = 22%. VE = (22% - 2%)/22% × 100 = 91%. This means the vaccine prevented 91% of cases that would have occurred. Formula: VE = (ARU - ARV)/ARU × 100.",
                chapter: "ch15"
            },
            {
                q: `<p>A new influenza vaccine is tested in a randomized controlled trial:</p>
                    <table class='exam-table'>
                    <tr><th>Group</th><th>N</th><th>Flu Cases</th><th>Attack Rate</th></tr>
                    <tr><td>Vaccine Group</td><td>5,000</td><td>50</td><td>1.0%</td></tr>
                    <tr><td>Placebo Group</td><td>5,000</td><td>200</td><td>4.0%</td></tr>
                    </table>
                    <p>What is the <strong>Number Needed to Treat (NNT)</strong> to prevent one case of flu?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 15",
                options: [
                    "4 (using 200/50)",
                    "25 (using 1/ARV)",
                    "33 (using 1/ARR)",
                    "100 (using 1/1%)"
                ],
                explain: "Absolute Risk Reduction (ARR) = 4.0% - 1.0% = 3.0% = 0.03. NNT = 1/ARR = 1/0.03 = 33.3 ≈ 33. This means you need to vaccinate 33 people to prevent 1 case of influenza.",
                chapter: "ch15"
            },

            // --- OUTBREAK LINE LISTING (Chapter 16) ---
            {
                q: `<p>Review this line listing from a restaurant outbreak:</p>
                    <table class='exam-table'>
                    <tr><th>Case</th><th>Age</th><th>Sex</th><th>Onset Date</th><th>Onset Time</th><th>Chicken</th><th>Salad</th><th>Rice</th><th>Symptoms</th></tr>
                    <tr><td>1</td><td>34</td><td>M</td><td>Jan 5</td><td>18:00</td><td>Y</td><td>Y</td><td>N</td><td>V, D, F</td></tr>
                    <tr><td>2</td><td>28</td><td>F</td><td>Jan 5</td><td>19:30</td><td>Y</td><td>N</td><td>Y</td><td>V, D</td></tr>
                    <tr><td>3</td><td>45</td><td>M</td><td>Jan 5</td><td>20:00</td><td>Y</td><td>Y</td><td>Y</td><td>V, D, F</td></tr>
                    <tr><td>4</td><td>31</td><td>F</td><td>Jan 5</td><td>18:30</td><td>Y</td><td>N</td><td>N</td><td>V, D</td></tr>
                    <tr><td>5</td><td>52</td><td>M</td><td>Jan 5</td><td>21:00</td><td>Y</td><td>Y</td><td>N</td><td>V, D, F</td></tr>
                    </table>
                    <p><em>V=Vomiting, D=Diarrhea, F=Fever. Dinner was at 12:00 on Jan 5.</em></p>
                    <p>Based on this line listing, the most likely incubation period is:</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 16",
                options: [
                    "2-4 hours (suggesting Staphylococcus aureus toxin)",
                    "6-9 hours (suggesting Clostridium perfringens)",
                    "12-24 hours (suggesting Norovirus)",
                    "24-48 hours (suggesting Salmonella)"
                ],
                explain: "Meal at 12:00, onsets at 18:00-21:00 = 6-9 hour incubation. C. perfringens typically has 6-16 hr incubation with V+D. Staphylococcus would be 1-6 hrs. The presence of fever in some cases is unusual for toxin-mediated illness but can occur.",
                chapter: "ch16"
            },
            {
                q: `<p>From the line listing above, which food item is MOST strongly implicated?</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 16",
                options: [
                    "Chicken (5/5 cases = 100% consumed it)",
                    "Salad (3/5 cases = 60% consumed it)",
                    "Rice (2/5 cases = 40% consumed it)",
                    "Cannot determine without control data"
                ],
                explain: "Chicken was consumed by 100% of cases (5/5). However, to truly implicate a food, we need attack rates among those who consumed vs didn't eat each item. The correct answer D is also defensible, but in exam context, 100% exposure is a strong signal.",
                chapter: "ch16"
            },

            // --- 2x2 TABLE ANALYSIS (Chapter 14) ---
            {
                q: `<p>A cohort study evaluates a new screening test for colon cancer:</p>
                    <table class='exam-table'>
                    <tr><th></th><th>Disease Positive</th><th>Disease Negative</th></tr>
                    <tr><td><strong>Test Positive</strong></td><td>TP = 85</td><td>FP = 15</td></tr>
                    <tr><td><strong>Test Negative</strong></td><td>FN = 15</td><td>TN = 885</td></tr>
                    </table>
                    <p>Calculate the <strong>Positive Predictive Value (PPV)</strong>.</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 14",
                options: [
                    "85% (TP / (TP + FP) = 85/100)",
                    "85% (TP / (TP + FN) = 85/100)",
                    "98.3% (TN / (TN + FN))",
                    "90% ((TP + TN) / Total)"
                ],
                explain: "PPV = TP / (TP + FP) = 85 / (85 + 15) = 85%. PPV answers: <em>'If the test is positive, what'</em>s the probability the patient truly has the disease?' Common trap: Sensitivity is TP/(TP+FN).",
                chapter: "ch14"
            },
            {
                q: `<p>Using the same 2×2 table above, what is the <strong>Sensitivity</strong> of this test?</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 14",
                options: [
                    "85% (using TP / Test Positives)",
                    "85% (using TP / (TP + FN) = 85/100)",
                    "98.3% (using TN / (TN + FP))",
                    "15% (using FN / Disease Positives)"
                ],
                explain: "Sensitivity = TP / (TP + FN) = 85 / (85 + 15) = 85%. Sensitivity is the proportion of truly diseased people who test positive. It answers: <em>'How well does the test detect disease?'</em> SnNout: Sensitive test, Negative result rules OUT disease.",
                chapter: "ch14"
            },

            // --- CASE FATALITY RATE (Chapter 15) ---
            {
                q: `<p>An outbreak of Botulism occurs at a family reunion:</p>
                    <table class='exam-table'>
                    <tr><th>Outcome</th><th>Number</th></tr>
                    <tr><td>Total Exposed</td><td>25</td></tr>
                    <tr><td>Developed Botulism</td><td>8</td></tr>
                    <tr><td>Hospitalized</td><td>8</td></tr>
                    <tr><td>Required Ventilator</td><td>5</td></tr>
                    <tr><td>Deaths</td><td>2</td></tr>
                    </table>
                    <p>What is the <strong>Case Fatality Rate (CFR)</strong>?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 15",
                options: [
                    "8% (Deaths / Total Exposed = 2/25)",
                    "40% (Deaths / Required Ventilator = 2/5)",
                    "25% (Deaths / Cases = 2/8)",
                    "62.5% (Ventilator / Cases = 5/8)"
                ],
                explain: "CFR = Deaths / Total Cases × 100 = 2/8 = 25%. CFR measures the severity of a disease once you have it. Common trap: Using total exposed as denominator gives mortality rate, not CFR.",
                chapter: "ch15"
            },

            // --- PREVENTION LEVELS (Chapter 15) ---
            {
                q: `<p>Match each intervention to its level of prevention:</p>
                    <table class='exam-table'>
                    <tr><th>Intervention</th><th>Level</th></tr>
                    <tr><td>1. HPV vaccine to prevent cervical cancer</td><td>?</td></tr>
                    <tr><td>2. Pap smear screening</td><td>?</td></tr>
                    <tr><td>3. Chemotherapy for cervical cancer</td><td>?</td></tr>
                    <tr><td>4. Physical therapy after cervical surgery</td><td>?</td></tr>
                    </table>
                    <p>Which sequence correctly matches interventions 1-4 to prevention levels?</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 15",
                options: [
                    "Primary, Secondary, Tertiary, Tertiary",
                    "Primary, Primary, Secondary, Tertiary",
                    "Secondary, Primary, Tertiary, Tertiary",
                    "Primary, Secondary, Secondary, Tertiary"
                ],
                explain: "1) HPV vaccine = PRIMARY (prevents disease before it occurs). 2) Pap smear = SECONDARY (early detection of existing disease). 3) Chemotherapy = TERTIARY (treating disease to limit disability). 4) Physical therapy = TERTIARY (rehabilitation).",
                chapter: "ch15"
            },

            // --- ISOLATION vs QUARANTINE (Chapter 17) ---
            {
                q: `<p>A county health officer must decide on movement restrictions during a measles outbreak. Consider these scenarios:</p>
                    <table class='exam-table'>
                    <tr><th>Person</th><th>Status</th><th>Action</th></tr>
                    <tr><td>Patient A</td><td>Confirmed measles, symptomatic</td><td>?</td></tr>
                    <tr><td>Person B</td><td>Exposed but asymptomatic, unknown immunity</td><td>?</td></tr>
                    <tr><td>Person C</td><td>Fully vaccinated, exposed, asymptomatic</td><td>?</td></tr>
                    </table>
                    <p>What is the correct action for each person?</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 17",
                options: [
                    "A: Quarantine, B: Isolation, C: No restriction",
                    "A: Isolation, B: Quarantine, C: Monitoring only",
                    "A: Isolation, B: Isolation, C: Quarantine",
                    "All three: Home quarantine"
                ],
                explain: "ISOLATION = separating SICK people. QUARANTINE = restricting EXPOSED (not yet ill) people. Patient A (ill) = Isolation. Person B (exposed, not ill) = Quarantine. Person C (vaccinated) = Monitoring only (low risk).",
                chapter: "ch17"
            },

            // --- INCUBATION PERIOD CALCULATION (Chapter 14) ---
            {
                q: `<p>A foodborne outbreak occurs after a company picnic. The following data is collected:</p>
                    <table class='exam-table'>
                    <tr><th>Case #</th><th>Meal Time</th><th>Symptom Onset</th><th>Incubation (hrs)</th></tr>
                    <tr><td>1</td><td>12:00</td><td>18:00</td><td>6</td></tr>
                    <tr><td>2</td><td>12:00</td><td>20:00</td><td>8</td></tr>
                    <tr><td>3</td><td>12:00</td><td>14:00</td><td>2</td></tr>
                    <tr><td>4</td><td>12:00</td><td>22:00</td><td>10</td></tr>
                    <tr><td>5</td><td>12:00</td><td>19:00</td><td>7</td></tr>
                    <tr><td>6</td><td>12:00</td><td>16:00</td><td>4</td></tr>
                    </table>
                    <p>What is the <strong>median incubation period</strong>?</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 14",
                options: [
                    "6 hours (the mode)",
                    "6.5 hours (average of middle two values)",
                    "7 hours (the mean)",
                    "8 hours (the middle value)"
                ],
                explain: "Sorted incubation: 2, 4, 6, 7, 8, 10. With 6 values (even number), median = average of 3rd and 4th values = (6 + 7)/2 = 6.5 hours. This is consistent with Staphylococcus or Bacillus cereus (emetic type).",
                chapter: "ch14"
            },

            // --- ATTACK RATE CALCULATION (Chapter 16) ---
            {
                q: `<p>At a church potluck, investigators collect food history data:</p>
                    <table class='exam-table'>
                    <tr><th>Food</th><th>Ate: Ill</th><th>Ate: Well</th><th>Ate: Total</th><th>Not Ate: Ill</th><th>Not Ate: Well</th><th>Not Ate: Total</th></tr>
                    <tr><td>Potato Salad</td><td>42</td><td>18</td><td>60</td><td>8</td><td>32</td><td>40</td></tr>
                    <tr><td>Ham</td><td>30</td><td>45</td><td>75</td><td>20</td><td>5</td><td>25</td></tr>
                    <tr><td>Pie</td><td>25</td><td>25</td><td>50</td><td>25</td><td>25</td><td>50</td></tr>
                    </table>
                    <p>Which food has the <strong>highest Risk Ratio (RR)</strong>?</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 16",
                options: [
                    "Potato Salad (RR = 3.5)",
                    "Ham (RR = 0.5)",
                    "Pie (RR = 1.0)",
                    "All foods have equal RR"
                ],
                explain: "Potato Salad: AR(ate) = 42/60 = 70%, AR(not) = 8/40 = 20%, RR = 3.5. Ham: AR(ate) = 30/75 = 40%, AR(not) = 20/25 = 80%, RR = 0.5 (protective!). Pie: 50%/50% = 1.0 (no association). Potato salad is clearly implicated.",
                chapter: "ch16"
            },

            // --- ENVIRONMENTAL TOXINS (Chapter 21) ---
            {
                q: `<p>A cluster of children in a neighborhood develop developmental delays and anemia. Environmental testing reveals:</p>
                    <table class='exam-table'>
                    <tr><th>Sample</th><th>Lead Level</th><th>Reference</th></tr>
                    <tr><td>Drinking water</td><td>28 ppb</td><td><15 ppb action level</td></tr>
                    <tr><td>Soil near homes</td><td>850 ppm</td><td><400 ppm</td></tr>
                    <tr><td>Children's blood</td><td>12 μg/dL avg</td><td><5 μg/dL</td></tr>
                    </table>
                    <p>What is the MOST likely exposure source?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 21",
                options: [
                    "Water only (highest relative exceedance)",
                    "Water and soil equally",
                    "Soil is the primary source (pica behavior in children)",
                    "Cannot determine without more testing"
                ],
                explain: "While both water and soil exceed limits, soil lead levels (2x the limit) combined with children's hand-to-mouth behavior (pica) make soil the likely primary source. Lead in soil is typically from deteriorating lead paint or historical industrial contamination.",
                chapter: "ch21"
            },

            // --- CHI-SQUARE INTERPRETATION (Chapter 13) ---
            {
                q: `<p>A case-control study produces the following 2×2 table:</p>
                    <table class='exam-table'>
                    <tr><th></th><th>Cases</th><th>Controls</th></tr>
                    <tr><td><strong>Exposed</strong></td><td>45</td><td>15</td></tr>
                    <tr><td><strong>Unexposed</strong></td><td>15</td><td>45</td></tr>
                    </table>
                    <p>The Chi-Square test yields χ² = 30.0, p < 0.001.</p>
                    <p>Which statement is CORRECT?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 13",
                options: [
                    "The exposure causes the disease",
                    "The association is weak but statistically significant",
                    "There is a statistically significant association between exposure and disease",
                    "The study proves causation"
                ],
                explain: "Chi-square tests for STATISTICAL SIGNIFICANCE (whether an association exists), NOT causation. p < 0.001 means <0.1% chance the association is due to chance alone. The OR = (45×45)/(15×15) = 9.0, which is a STRONG association, not weak.",
                chapter: "ch13"
            },

            // --- PPE AND TRANSMISSION PRECAUTIONS (Chapter 17) ---
            {
                q: `<p>A hospital infection preventionist must select appropriate precautions:</p>
                    <table class='exam-table'>
                    <tr><th>Disease</th><th>Transmission Route</th><th>Precaution Type</th></tr>
                    <tr><td>Tuberculosis</td><td>?</td><td>?</td></tr>
                    <tr><td>MRSA wound infection</td><td>?</td><td>?</td></tr>
                    <tr><td>Measles</td><td>?</td><td>?</td></tr>
                    <tr><td>C. diff colitis</td><td>?</td><td>?</td></tr>
                    </table>
                    <p>Which disease requires ONLY Contact Precautions (not airborne)?</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 17",
                options: [
                    "Tuberculosis (requires N95)",
                    "MRSA wound infection (gloves + gown)",
                    "Measles (requires N95 + negative pressure)",
                    "C. diff (also requires hand hygiene with soap)"
                ],
                explain: "MRSA wounds require Contact Precautions only (gloves + gown). TB and Measles require Airborne Precautions (N95 + negative pressure room). C. diff requires Contact Precautions PLUS soap/water handwashing (alcohol doesn't kill spores).",
                chapter: "ch17"
            }
        ],
        advanced: [
            // --- CONFIDENCE INTERVAL INTERPRETATION (Chapter 13) ---
            {
                q: `<p>A study reports these findings for different risk factors:</p>
                    <table class='exam-table'>
                    <tr><th>Risk Factor</th><th>Odds Ratio</th><th>95% CI</th></tr>
                    <tr><td>Smoking</td><td>3.2</td><td>2.1 - 4.8</td></tr>
                    <tr><td>Alcohol</td><td>1.8</td><td>0.9 - 3.6</td></tr>
                    <tr><td>Obesity</td><td>2.5</td><td>1.2 - 5.2</td></tr>
                    <tr><td>Exercise</td><td>0.4</td><td>0.2 - 0.8</td></tr>
                    </table>
                    <p>Which risk factor shows a STATISTICALLY SIGNIFICANT association with the outcome?</p>`,
                answer: 3,
                type: "mc",
                topic: "Chapter 13",
                options: [
                    "Only Smoking (highest OR)",
                    "Smoking and Obesity only (OR > 1)",
                    "All four are significant",
                    "Smoking, Obesity, and Exercise (CIs don't cross 1.0)"
                ],
                explain: "A 95% CI that does NOT include 1.0 is statistically significant. Smoking (2.1-4.8), Obesity (1.2-5.2), and Exercise (0.2-0.8) are all significant. Alcohol's CI (0.9-3.6) INCLUDES 1.0, so it's NOT significant. Exercise is protective (OR < 1).",
                chapter: "ch13"
            },

            // --- OUTBREAK CURVE ANALYSIS (Chapter 16) ---
            {
                q: `<p>Analyze this epidemic curve from a school outbreak:</p>
                    <div style="font-family: monospace; background: #f8fafc; padding: 1rem; border-radius: 4px; margin: 1rem 0;">
Day 1:  ▓▓<br>
Day 2:  ▓▓▓▓▓▓<br>
Day 3:  ▓▓▓▓▓▓▓▓▓▓▓▓<br>
Day 4:  ▓▓▓▓▓▓▓▓<br>
Day 5:  ▓▓▓<br>
Day 6:  ▓<br>
Day 7:  <br>
Day 8:  ▓▓<br>
Day 9:  ▓▓▓▓▓<br>
Day 10: ▓▓▓<br>
Day 11: ▓
                    </div>
                    <p>This curve MOST likely represents:</p>`,
                answer: 1,
                type: "mc",
                topic: "Chapter 16",
                options: [
                    "Point source only (single exposure)",
                    "Mixed epidemic (point source + secondary transmission)",
                    "Propagated outbreak (person-to-person only)",
                    "Continuous common source"
                ],
                explain: "The curve shows a clear initial peak (Days 1-6) suggesting point source, then a gap (Day 7), followed by a smaller secondary wave (Days 8-11). The gap equals approximately one incubation period, indicating secondary person-to-person transmission. This is a MIXED epidemic.",
                chapter: "ch16"
            },

            // --- RELATIVE RISK vs ODDS RATIO (Chapter 14) ---
            {
                q: `<p>Compare these summary measures from different study designs:</p>
                    <table class='exam-table'>
                    <tr><th>Study</th><th>Design</th><th>Measure</th><th>Value</th><th>95% CI</th></tr>
                    <tr><td>Study A</td><td>Cohort</td><td>RR</td><td>2.4</td><td>1.8 - 3.2</td></tr>
                    <tr><td>Study B</td><td>Case-Control</td><td>OR</td><td>2.6</td><td>1.9 - 3.5</td></tr>
                    <tr><td>Study C</td><td>Cross-sectional</td><td>PR</td><td>1.9</td><td>1.4 - 2.6</td></tr>
                    </table>
                    <p>If the disease prevalence is 25%, which statement is TRUE?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 14",
                options: [
                    "OR will equal RR exactly",
                    "OR will underestimate RR",
                    "OR will overestimate RR when disease is common",
                    "Study design doesn't affect measure interpretation"
                ],
                explain: "The OR approximates RR only when disease is RARE (<10%). At 25% prevalence, OR OVERESTIMATES the RR. This is because OR = (a×d)/(b×c) includes cases in both numerator and denominator, inflating the ratio when disease is common.",
                chapter: "ch14"
            },

            // --- BRADFORD HILL CRITERIA (Chapter 16) ---
            {
                q: `<p>An epidemiologist evaluates evidence linking a chemical exposure to liver cancer:</p>
                    <table class='exam-table'>
                    <tr><th>Criterion</th><th>Evidence</th></tr>
                    <tr><td>Strength</td><td>RR = 8.5 in exposed workers</td></tr>
                    <tr><td>Consistency</td><td>5 studies across 3 countries show similar results</td></tr>
                    <tr><td>Temporality</td><td>Exposure documented 15-20 years before cancer diagnosis</td></tr>
                    <tr><td>Dose-Response</td><td>Higher exposure levels = higher cancer rates</td></tr>
                    <tr><td>Biological Plausibility</td><td>Chemical forms DNA adducts in lab studies</td></tr>
                    </table>
                    <p>Which Bradford Hill criterion is MOST important and cannot be violated if causation is claimed?</p>`,
                answer: 2,
                type: "mc",
                topic: "Chapter 16",
                options: [
                    "Strength (RR = 8.5 is very strong)",
                    "Consistency (replicated across studies)",
                    "Temporality (exposure must precede outcome)",
                    "Biological Plausibility (mechanism understood)"
                ],
                explain: "TEMPORALITY is the ONLY absolutely required criterion. You cannot cause something that happened before your exposure. All other criteria support causation but can have exceptions. Even a strong, consistent, plausible association is not causal if the outcome preceded exposure.",
                chapter: "ch16"
            },

            // --- HERD IMMUNITY THRESHOLD (Chapter 18) ---
            {
                q: `<p>Calculate herd immunity thresholds for these diseases:</p>
                    <table class='exam-table'>
                    <tr><th>Disease</th><th>R₀</th><th>HIT = 1 - (1/R₀)</th></tr>
                    <tr><td>Measles</td><td>15</td><td>?</td></tr>
                    <tr><td>COVID-19 (original)</td><td>2.5</td><td>?</td></tr>
                    <tr><td>Seasonal Flu</td><td>1.3</td><td>?</td></tr>
                    </table>
                    <p>What is the herd immunity threshold for measles?</p>`,
                answer: 3,
                type: "mc",
                topic: "Chapter 18",
                options: [
                    "67% (using 1 - 1/15 without converting)",
                    "85% (using 15/18)",
                    "90% (rounded estimate)",
                    "93-94% (using HIT = 1 - 1/15 = 14/15)"
                ],
                explain: "HIT = 1 - (1/R₀) = 1 - (1/15) = 14/15 = 93.3%. This means 93-94% of the population must be immune to stop measles transmission. This is why measles outbreaks occur when vaccination coverage drops below 95%.",
                chapter: "ch18"
            },

            // --- STRATIFIED ANALYSIS FOR CONFOUNDING (Chapter 19) ---
            {
                q: `<p>A study finds coffee drinking associated with lung cancer (OR = 2.1). Stratified analysis by smoking:</p>
                    <table class='exam-table'>
                    <tr><th>Stratum</th><th>Coffee-Cancer OR</th></tr>
                    <tr><td>Smokers</td><td>1.0</td></tr>
                    <tr><td>Non-smokers</td><td>1.0</td></tr>
                    <tr><td>Crude (unstratified)</td><td>2.1</td></tr>
                    </table>
                    <p>What does this analysis reveal?</p>`,
                answer: 0,
                type: "mc",
                topic: "Chapter 19",
                options: [
                    "Smoking is a confounder; coffee-cancer association is spurious",
                    "Coffee causes lung cancer only in non-smokers",
                    "This is effect modification by smoking",
                    "The crude OR is more accurate than stratified ORs"
                ],
                explain: "When stratified ORs are BOTH 1.0 (no association) but crude OR ≠ 1.0, this indicates CONFOUNDING. Smokers drink more coffee AND get more lung cancer, creating a spurious association. Controlling for smoking eliminates the apparent coffee-cancer link.",
                chapter: "ch19"
            }
        ]
    }

};

// =========================================================================
// INTEGRATION LOGIC - Merge enhanced questions into existing quiz banks
// =========================================================================
(function () {
    if (!window.QUIZ_BANKS) {
        console.warn('[QUIZ PARTS ENHANCED] QUIZ_BANKS not found. Skipping merge.');
        return;
    }

    const enhanced = window.QUIZ_PARTS_ENHANCED;
    let totalAdded = 0;

    // Merge each part
    ['part1', 'part2', 'part3'].forEach(partKey => {
        if (!enhanced[partKey]) return;
        if (!window.QUIZ_BANKS[partKey]) {
            window.QUIZ_BANKS[partKey] = {};
        }

        // Merge each difficulty tier
        ['beginner', 'intermediate', 'advanced'].forEach(tier => {
            if (!enhanced[partKey][tier]) return;
            if (!window.QUIZ_BANKS[partKey][tier]) {
                window.QUIZ_BANKS[partKey][tier] = [];
            }

            // Prepend enhanced questions so they appear first
            const newQuestions = enhanced[partKey][tier];
            window.QUIZ_BANKS[partKey][tier] = newQuestions.concat(
                window.QUIZ_BANKS[partKey][tier]
            );
            totalAdded += newQuestions.length;
        });
    });

    // Also add to aggregated quiz pool if it exists
    if (window.AGGREGATED_QUIZ_POOL && Array.isArray(window.AGGREGATED_QUIZ_POOL)) {
        ['part1', 'part2', 'part3'].forEach(partKey => {
            if (!enhanced[partKey]) return;
            ['beginner', 'intermediate', 'advanced'].forEach(tier => {
                if (!enhanced[partKey][tier]) return;
                enhanced[partKey][tier].forEach(q => {
                    // Transform to aggregated format
                    window.AGGREGATED_QUIZ_POOL.push({
                        q: q.q,
                        question: q.q,
                        options: q.options,
                        answer: q.answer,
                        correct: q.answer,
                        explain: q.explain,
                        topic: q.topic,
                        chapter: q.chapter,
                        difficulty: tier
                    });
                });
            });
        });
    }

    console.log(`[QUIZ PARTS ENHANCED] Added ${totalAdded} exam-style questions to Parts 1, 2, and 3`);
})();
