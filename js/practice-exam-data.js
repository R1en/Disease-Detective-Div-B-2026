/**
 * Practice Exam Data - National Level Format
 * Enhanced with tables, scenarios, and professional explanations
 * v6.0.0 - Complete Upgrade
 */

const PRACTICE_EXAM_DATA = {
    "part1": [
        // ========== OUTBREAK DEFINITIONS WITH SCENARIO ==========
        {
            q: `<p>Review this surveillance report:</p>
                <table class='exam-table'>
                <tr><th>Disease</th><th>Expected Cases (Monthly)</th><th>Observed Cases (This Month)</th></tr>
                <tr><td>Salmonella</td><td>12</td><td>45</td></tr>
                <tr><td>E. coli</td><td>5</td><td>6</td></tr>
                <tr><td>Listeria</td><td>2</td><td>2</td></tr>
                </table>
                <p>Which disease meets the criteria for an <strong>outbreak</strong>?</p>`,
            answer: 0,
            type: "mc",
            topic: "Practice Part 1",
            options: [
                "Salmonella (observed significantly exceeds expected)",
                "E. coli (slight increase is concerning)",
                "Listeria (stable = emerging threat)",
                "All three qualify as outbreaks"
            ],
            explain: "<strong>Outbreak Definition:</strong> More cases than EXPECTED in a given area during a specific time period.<br><br>Salmonella: 45 observed vs 12 expected = <strong>3.75× the expected rate</strong> → Definite outbreak.<br>E. coli: 6 vs 5 = within normal variation.<br>Listeria: 2 vs 2 = baseline rate.<br><br><strong>Exam Tip:</strong> Outbreaks require comparison to baseline, not just 'more cases.'"
        },
        {
            q: `<p>A health department receives these reports over 3 weeks:</p>
                <table class='exam-table'>
                <tr><th>Week</th><th>Location</th><th>Cases</th><th>Pattern</th></tr>
                <tr><td>Week 1</td><td>Brazil, Italy, UK</td><td>1,200</td><td>Rising</td></tr>
                <tr><td>Week 2</td><td>+ Japan, Australia, Canada</td><td>5,400</td><td>Accelerating</td></tr>
                <tr><td>Week 3</td><td>+ 30 more countries</td><td>28,000</td><td>Exponential</td></tr>
                </table>
                <p>This pattern best describes a:</p>`,
            answer: 2,
            type: "mc",
            topic: "Practice Part 1",
            options: [
                "Local outbreak (confined to one region)",
                "Epidemic (large numbers in one area)",
                "Pandemic (multiple continents, large population affected)",
                "Endemic (stable baseline rate)"
            ],
            explain: "<strong>Key Distinctions:</strong><ul><li><strong>Outbreak:</strong> Localized excess cases</li><li><strong>Epidemic:</strong> Large numbers over wide area (one country/region)</li><li><strong>Pandemic:</strong> Epidemic spanning MULTIPLE CONTINENTS affecting large populations</li><li><strong>Endemic:</strong> Constant baseline rate</li></ul>This scenario shows spread across 6+ continents with exponential growth → <strong>Pandemic</strong>."
        },

        // ========== SURVEILLANCE ==========
        {
            q: `<p>Which element is NOT part of the surveillance cycle?</p>
                <table class='exam-table'>
                <tr><th>Step</th><th>Activity</th></tr>
                <tr><td>1</td><td>Data Collection (reports from providers)</td></tr>
                <tr><td>2</td><td>Data Analysis (statistics, trends)</td></tr>
                <tr><td>3</td><td>Interpretation (meaning, context)</td></tr>
                <tr><td>4</td><td>Dissemination (share with stakeholders)</td></tr>
                <tr><td>5</td><td>?</td></tr>
                </table>`,
            answer: 1,
            type: "mc",
            topic: "Practice Part 1",
            options: [
                "Action (implement interventions based on data)",
                "Prosecution (legal action against disease spreaders)",
                "Evaluation (assess surveillance system quality)",
                "Feedback (improve based on outcomes)"
            ],
            explain: "<strong>Surveillance Definition:</strong> Systematic, ongoing <em>collection, analysis, interpretation, and dissemination</em> of health data.<br><br>The cycle includes: Collection → Analysis → Interpretation → Dissemination → Action → Evaluation → back to Collection.<br><br><strong>NOT included:</strong> Legal prosecution – that's law enforcement, not epidemiology."
        },

        // ========== VECTOR VS RESERVOIR ==========
        {
            q: `<p>Classify each transmission scenario:</p>
                <table class='exam-table'>
                <tr><th>Scenario</th><th>Role</th></tr>
                <tr><td>Mosquito transmits malaria plasmodium</td><td>?</td></tr>
                <tr><td>Bat harbors rabies virus without symptoms</td><td>?</td></tr>
                <tr><td>Tick transmits Lyme disease spirochete</td><td>?</td></tr>
                <tr><td>Human with HIV infects others</td><td>?</td></tr>
                </table>
                <p>Which is an example of a <strong>VECTOR</strong>?</p>`,
            answer: 0,
            type: "mc",
            topic: "Practice Part 1",
            options: [
                "Mosquito (arthropod that transmits pathogen)",
                "Bat (animal reservoir harboring virus)",
                "Human with HIV (human reservoir)",
                "Both mosquito AND tick are vectors"
            ],
            explain: "<strong>Vector:</strong> An ARTHROPOD (insect/arachnid) that transmits disease from one host to another.<br><br><strong>Reservoir:</strong> Where pathogen lives and multiplies (can be human, animal, or environment).<br><br>✅ Mosquito = Vector (transmits malaria)<br>✅ Tick = Vector (transmits Lyme)<br>❌ Bat = Reservoir (harbors rabies)<br>❌ Human = Reservoir (harbors HIV)<br><br><strong>Best answer:</strong> D - Both mosquito AND tick are vectors, but if forced to pick one, A is correct."
        },

        // ========== COHORT VS CASE-CONTROL ==========
        {
            q: `<p>Match study design to the correct approach:</p>
                <table class='exam-table'>
                <tr><th>Study Design</th><th>Starting Point</th><th>Direction</th></tr>
                <tr><td>Cohort</td><td>Exposed vs Unexposed groups</td><td>Follow FORWARD to see who gets disease</td></tr>
                <tr><td>Case-Control</td><td>Cases vs Controls (by disease status)</td><td>Look BACKWARD at past exposures</td></tr>
                </table>
                <p>A researcher wants to study a disease affecting 1 in 100,000 people. Which design is MORE efficient?</p>`,
            answer: 1,
            type: "mc",
            topic: "Practice Part 1",
            options: [
                "Cohort study (can calculate true incidence rates)",
                "Case-control study (starts with existing cases)",
                "Both are equally efficient for rare diseases",
                "Neither can study rare diseases effectively"
            ],
            explain: "<strong>Case-control is ideal for RARE diseases.</strong><br><br>A cohort study would need to follow hundreds of thousands of people for years to accumulate enough cases (1 in 100,000).<br><br>Case-control efficiently uses existing cases from registries/hospitals and compares their past exposures to matched controls.<br><br><strong>Trade-off:</strong> Case-control can only calculate Odds Ratio (OR), not Risk Ratio (RR). But OR ≈ RR when disease is rare."
        },

        // ========== RISK ==========
        {
            q: `<p>A clinical trial reports the following outcomes:</p>
                <table class='exam-table'>
                <tr><th>Group</th><th>N</th><th>Developed Heart Attack</th><th>Risk</th></tr>
                <tr><td>Drug Group</td><td>500</td><td>10</td><td>2%</td></tr>
                <tr><td>Placebo Group</td><td>500</td><td>40</td><td>8%</td></tr>
                </table>
                <p>What is the <strong>Absolute Risk Reduction (ARR)</strong>?</p>`,
            answer: 2,
            type: "mc",
            topic: "Practice Part 1",
            options: [
                "0.25 (10/40)",
                "75% (1 - 0.25)",
                "6% (8% - 2%)",
                "4 (40/10)"
            ],
            explain: "<strong>Absolute Risk Reduction (ARR):</strong> The difference in risk between groups.<br><br>ARR = Risk(placebo) - Risk(drug) = 8% - 2% = <strong>6%</strong><br><br>This means the drug prevents 6 additional heart attacks per 100 patients treated.<br><br><strong>Related metrics:</strong><ul><li>RRR (Relative Risk Reduction) = ARR/Risk(placebo) = 6/8 = 75%</li><li>NNT = 1/ARR = 1/0.06 = 17 (treat 17 patients to prevent 1 heart attack)</li></ul>"
        },

        // ========== CLUSTER ==========
        {
            q: `<p>Health officials investigate unusual cancer cases:</p>
                <table class='exam-table'>
                <tr><th>Observation</th><th>Data</th></tr>
                <tr><td>Cases</td><td>8 children with leukemia</td></tr>
                <tr><td>Location</td><td>3-block radius</td></tr>
                <tr><td>Time Period</td><td>18 months</td></tr>
                <tr><td>Expected Rate</td><td>Unknown for this small area</td></tr>
                </table>
                <p>This situation is best classified as:</p>`,
            answer: 0,
            type: "mc",
            topic: "Practice Part 1",
            options: [
                "Cluster (cases grouped in time/space, expected rate unknown)",
                "Outbreak (definitely more than expected)",
                "Epidemic (widespread illness)",
                "Endemic (baseline rate)"
            ],
            explain: "<strong>Cluster Definition:</strong> An aggregation of cases grouped in time and space, <em>regardless of whether</em> the number exceeds expected rates.<br><br>Key difference from outbreak: We often call it a 'cluster' when we're <em>uncertain</em> if it exceeds baseline, or when dealing with non-infectious diseases where 'outbreak' sounds inappropriate.<br><br>Cancer clusters require careful investigation – many turn out to be coincidental."
        },

        // ========== CARRIER ==========
        {
            q: `<p>A restaurant investigation reveals:</p>
                <table class='exam-table'>
                <tr><th>Person</th><th>Symptoms</th><th>Lab Result</th><th>Transmission</th></tr>
                <tr><td>Chef</td><td>None</td><td>Salmonella positive</td><td>Contaminated food</td></tr>
                <tr><td>Customer A</td><td>Diarrhea, fever</td><td>Salmonella positive</td><td>Ate contaminated food</td></tr>
                <tr><td>Customer B</td><td>Vomiting</td><td>Salmonella positive</td><td>Ate contaminated food</td></tr>
                </table>
                <p>The chef is classified as:</p>`,
            answer: 1,
            type: "mc",
            topic: "Practice Part 1",
            options: [
                "Index case (first identified case)",
                "Carrier (harbors agent without symptoms)",
                "Vector (transmits disease)",
                "Susceptible host (at risk of infection)"
            ],
            explain: "<strong>Carrier Definition:</strong> A person or animal that harbors an infectious agent and can transmit it to others, but does <em>not</em> show signs of disease.<br><br>The chef:<br>✅ Harbors Salmonella (lab positive)<br>✅ Can transmit (contaminated food)<br>✅ No symptoms (asymptomatic)<br>= <strong>Classic carrier</strong><br><br>Famous example: 'Typhoid Mary' – asymptomatic carrier who infected 50+ people."
        }
    ],

    "history": [
        // ========== PIONEERS WITH CONTRIBUTIONS TABLE ==========
        {
            q: `<p>Match the epidemiology pioneer to their primary contribution:</p>
                <table class='exam-table'>
                <tr><th>Pioneer</th><th>Era</th><th>Contribution</th></tr>
                <tr><td>John Snow</td><td>1854</td><td>?</td></tr>
                <tr><td>Robert Koch</td><td>1880s</td><td>?</td></tr>
                <tr><td>Louis Pasteur</td><td>1860s-80s</td><td>?</td></tr>
                <tr><td>Edward Jenner</td><td>1796</td><td>?</td></tr>
                </table>
                <p>Who is known as the "Father of Epidemiology"?</p>`,
            answer: 0,
            type: "mc",
            topic: "History",
            options: [
                "John Snow (Broad Street cholera investigation, 1854)",
                "Robert Koch (Koch's Postulates)",
                "Louis Pasteur (Germ theory, anthrax vaccine)",
                "Edward Jenner (Smallpox vaccine)"
            ],
            explain: "<strong>John Snow (1813-1858):</strong> 'Father of Epidemiology'<br><br>Key achievements:<ul><li>Investigated 1854 London cholera outbreak</li><li>Mapped cases → identified Broad Street pump</li><li>Removed pump handle → ended outbreak</li><li>Used epidemiologic methods BEFORE germ theory was established</li></ul><strong>Exam Tip:</strong> Snow showed disease could be traced and controlled through systematic investigation, founding modern epidemiology."
        },
        {
            q: `<p>Koch's Postulates established criteria for proving causation. Which criterion is REQUIRED?</p>
                <table class='exam-table'>
                <tr><th>#</th><th>Postulate</th></tr>
                <tr><td>1</td><td>Microorganism found in ALL cases of disease</td></tr>
                <tr><td>2</td><td>Organism isolated and grown in pure culture</td></tr>
                <tr><td>3</td><td>Cultured organism causes disease when introduced to healthy host</td></tr>
                <tr><td>4</td><td>Organism re-isolated from experimentally infected host</td></tr>
                </table>`,
            answer: 3,
            type: "mc",
            topic: "History",
            options: [
                "Only postulates 1 and 3 are essential",
                "Only postulate 3 (experimental infection)",
                "Postulates 1-3 are sufficient; 4 is optional",
                "All four postulates must be satisfied"
            ],
            explain: "<strong>Koch's Postulates (all required):</strong><ol><li>Organism found in ALL cases</li><li>Isolated in pure culture</li><li>Causes disease in healthy host</li><li>Re-isolated from that host</li></ol><strong>Limitations:</strong> Some organisms can't be cultured (viruses in Koch's time), and ethical concerns prevent human experiments. Modified versions exist for non-culturable pathogens."
        },
        {
            q: `<p>James Lind's 1747 scurvy experiment is historically significant because:</p>
                <table class='exam-table'>
                <tr><th>Group</th><th>Treatment</th><th>Outcome</th></tr>
                <tr><td>A</td><td>Cider</td><td>No improvement</td></tr>
                <tr><td>B</td><td>Citrus (oranges & lemons)</td><td>Recovered!</td></tr>
                <tr><td>C</td><td>Seawater</td><td>No improvement</td></tr>
                <tr><td>D</td><td>Vinegar</td><td>No improvement</td></tr>
                </table>`,
            answer: 1,
            type: "mc",
            topic: "History",
            options: [
                "He discovered vitamin C",
                "He conducted the first controlled clinical trial",
                "He proved germ theory",
                "He invented the vaccination concept"
            ],
            explain: "<strong>James Lind (1716-1794):</strong> Conducted the first systematic <strong>controlled clinical trial</strong>.<br><br>Key features:<ul><li>Compared multiple treatments simultaneously</li><li>Used similar patients (sailors with scurvy)</li><li>Controlled conditions</li><li>Observed outcomes</li></ul>Result: Citrus cured scurvy (vitamin C, though he didn't know the mechanism). British sailors became 'limeys.'"
        },
        {
            q: `<p>Which pioneer's work is most relevant to modern vaccine development?</p>
                <table class='exam-table'>
                <tr><th>Pioneer</th><th>Disease</th><th>Method</th></tr>
                <tr><td>Jenner</td><td>Smallpox</td><td>Cowpox inoculation</td></tr>
                <tr><td>Pasteur</td><td>Anthrax, Rabies</td><td>Attenuated live vaccines</td></tr>
                <tr><td>Salk</td><td>Polio</td><td>Inactivated vaccine</td></tr>
                <tr><td>Sabin</td><td>Polio</td><td>Live attenuated oral vaccine</td></tr>
                </table>`,
            answer: 1,
            type: "mc",
            topic: "History",
            options: [
                "Jenner (first vaccine ever)",
                "Pasteur (developed scientific vaccine methodology)",
                "Salk (mass production techniques)",
                "Sabin (oral delivery innovation)"
            ],
            explain: "<strong>Louis Pasteur (1822-1895):</strong> Father of modern vaccinology.<br><br>Key contributions:<ul><li>Germ theory of disease</li><li>Attenuation concept (weakening pathogens)</li><li>Anthrax vaccine (1881)</li><li>Rabies vaccine (1885)</li></ul>While Jenner made the first vaccine empirically, Pasteur developed the <em>scientific methodology</em> that enables modern vaccine development."
        },
        {
            q: `<p>The Mantel-Haenszel method is used for:</p>`,
            answer: 0,
            type: "mc",
            topic: "History",
            options: [
                "Stratified analysis in case-control studies (controlling confounders)",
                "Calculating vaccine efficacy",
                "Determining sample size requirements",
                "Visualizing epidemic curves"
            ],
            explain: "<strong>Mantel-Haenszel Method (1959):</strong><br><br>A statistical technique for combining odds ratios across STRATA (subgroups) to control for confounding.<br><br><strong>Example:</strong> If you suspect age confounds the smoking-cancer relationship, you stratify by age groups and calculate a weighted average OR.<br><br>This revolutionized case-control analysis and remains fundamental to epidemiologic research."
        },
        {
            q: `<p>Hippocrates' contribution to epidemiology was:</p>`,
            answer: 0,
            type: "mc",
            topic: "History",
            options: [
                "Proposing disease has natural (not supernatural) causes (~400 BC)",
                "Developing the microscope",
                "Conducting the first vaccine trial",
                "Creating the chain of infection model"
            ],
            explain: "<strong>Hippocrates (~460-370 BC):</strong> 'Father of Medicine'<br><br>Key insight: Disease has <strong>natural causes</strong> related to environment, diet, and lifestyle – NOT punishment from gods.<br><br>His work 'On Airs, Waters, and Places' examined how geography and climate affect health, making him arguably the first environmental epidemiologist."
        },
        {
            q: `<p>John Graunt's 1662 "Bills of Mortality" analysis was significant because he:</p>`,
            answer: 0,
            type: "mc",
            topic: "History",
            options: [
                "First systematically analyzed mortality data (founding vital statistics)",
                "Discovered the cause of plague",
                "Invented the microscope",
                "Developed the first vaccine"
            ],
            explain: "<strong>John Graunt (1620-1674):</strong> Pioneer of <strong>vital statistics</strong> and demography.<br><br>Analyzed London's 'Bills of Mortality' (death records) to show:<ul><li>Patterns in causes of death</li><li>Seasonal variations</li><li>Urban vs rural differences</li><li>Life tables (actuarial science foundation)</li></ul>His quantitative approach to health data was revolutionary."
        },
        {
            q: `<p>Joseph Goldberger's pellagra investigation (1914-1920) demonstrated:</p>`,
            answer: 0,
            type: "mc",
            topic: "History",
            options: [
                "Pellagra was caused by nutritional deficiency, not infection",
                "Pellagra was contagious through respiratory droplets",
                "Vaccines could prevent pellagra",
                "Antibiotics could treat pellagra"
            ],
            explain: "<strong>Joseph Goldberger (1874-1929):</strong><br><br>Proved pellagra was a <strong>nutritional deficiency</strong> (niacin/B3), not an infectious disease as widely believed.<br><br>Heroic experiments:<ul><li>Fed prisoners varied diets → diet caused/cured pellagra</li><li>Injected himself with pellagra patients' blood → no disease (not infectious)</li></ul>Showed epidemiologic methods can identify non-infectious disease causes."
        }
    ]
};

// Inject into global QUIZ_BANKS if available
if (typeof QUIZ_BANKS !== 'undefined') {
    QUIZ_BANKS["practice_exam"] = {
        "part1": PRACTICE_EXAM_DATA.part1,
        "history": PRACTICE_EXAM_DATA.history
    };
} else {
    console.warn("QUIZ_BANKS not defined. Practice Exam Data loaded as standalone.");
}

// Make available globally
window.PRACTICE_EXAM_DATA = PRACTICE_EXAM_DATA;
console.log('[PRACTICE EXAM] Loaded ' + (PRACTICE_EXAM_DATA.part1.length + PRACTICE_EXAM_DATA.history.length) + ' enhanced exam questions');
