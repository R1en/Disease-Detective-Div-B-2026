/**
 * Enhanced Exam-Style Questions
 * v6.0.0 - National Level Question Bank
 * 
 * These questions are designed to mimic real Science Olympiad Disease Detectives
 * exam format with:
 * - Realistic scenario context
 * - Data tables requiring parsing
 * - "EXCEPT" and "BEST" framing
 * - Multi-step reasoning
 * - Sophisticated distractors
 */

window.ENHANCED_EXAM_QUESTIONS = [

    // ========== 2x2 TABLE CALCULATIONS ==========
    {
        q: `<p>During an outbreak investigation at a summer camp, epidemiologists collected the following food history data:</p>
            <table class='exam-table'>
            <tr><th></th><th>Cases (Ill)</th><th>Non-Cases (Well)</th><th>Total</th></tr>
            <tr><td><strong>Ate Hot Dogs</strong></td><td>42</td><td>18</td><td>60</td></tr>
            <tr><td><strong>Did Not Eat Hot Dogs</strong></td><td>8</td><td>32</td><td>40</td></tr>
            <tr><td><strong>Total</strong></td><td>50</td><td>50</td><td>100</td></tr>
            </table>
            <p>What is the <strong>Attack Rate</strong> among those who ate hot dogs?</p>`,
        options: ["70%", "42%", "84%", "60%"],
        answer: 0,
        explain: "<strong>Formula:</strong> Attack Rate = Ill among exposed / Total exposed<br><br><strong>Calculation:</strong> AR = 42/60 = 0.70 = <strong>70%</strong><br><br><em>Common Exam Trap:</em> ❌ Dividing by total cases (42/50 = 84%) gives the wrong denominator!<br><br><strong>Key concept:</strong> Attack rate uses ROW totals (those who ate hot dogs), not COLUMN totals (all cases).",
        topic: "2x2 Analysis",
        chapter: "ch11",
        difficulty: "intermediate"
    },
    {
        q: `<p>Using the same outbreak data from the summer camp hot dog investigation:</p>
            <table class='exam-table'>
            <tr><th></th><th>Cases</th><th>Non-Cases</th><th>Total</th></tr>
            <tr><td><strong>Ate Hot Dogs</strong></td><td>42</td><td>18</td><td>60</td></tr>
            <tr><td><strong>Did Not Eat Hot Dogs</strong></td><td>8</td><td>32</td><td>40</td></tr>
            </table>
            <p>Calculate the <strong>Relative Risk (Risk Ratio)</strong>.</p>`,
        options: ["3.5", "7.0", "2.3", "0.29"],
        answer: 0,
        explain: "<strong>Formula:</strong> RR = AR(exposed) / AR(unexposed)<br><br><strong>Step-by-step:</strong><ol><li>AR(ate hot dogs) = 42/60 = 70%</li><li>AR(didn't eat) = 8/40 = 20%</li><li>RR = 70% ÷ 20% = <strong>3.5</strong></li></ol><strong>Interpretation:</strong> Campers who ate hot dogs were 3.5× more likely to become ill than those who didn't.<br><br><strong>Exam Tip:</strong> RR > 1 = increased risk. RR < 1 = protective. RR = 1 = no association.",
        topic: "2x2 Analysis",
        chapter: "ch11",
        difficulty: "intermediate"
    },
    {
        q: `<p>A case-control study investigates the relationship between attending a potluck dinner and developing gastroenteritis:</p>
            <table class='exam-table'>
            <tr><th></th><th>Cases</th><th>Controls</th></tr>
            <tr><td><strong>Attended Potluck</strong></td><td>35</td><td>10</td></tr>
            <tr><td><strong>Did Not Attend</strong></td><td>15</td><td>40</td></tr>
            </table>
            <p>Calculate the <strong>Odds Ratio</strong>.</p>`,
        options: ["9.33", "3.5", "2.33", "14.0"],
        answer: 0,
        explain: "<strong>Formula:</strong> OR = (a × d) / (b × c)<br><br><strong>Step-by-step:</strong><br>a=35, b=10, c=15, d=40<br>OR = (35 × 40) / (10 × 15) = 1400 / 150 = <strong>9.33</strong><br><br><strong>Interpretation:</strong> Those who attended the potluck had 9.33× the ODDS of becoming ill.<br><br><strong>Mnemonic:</strong> 'ad/bc' → 'A Dog runs Before a Cat' 🐕🐱<br><br><strong>When to use:</strong> OR is used in case-control studies because we can't calculate true incidence rates.",
        topic: "2x2 Analysis",
        chapter: "ch11",
        difficulty: "advanced"
    },

    // ========== INCUBATION PERIOD CALCULATIONS ==========
    {
        q: `<p>A point-source outbreak occurred after a company picnic. The event was held on Saturday from 12:00 PM to 4:00 PM. Case onset times were:</p>
            <ul style='text-align:left; margin-left: 2rem;'>
            <li>Case 1: Saturday 10:00 PM (10 hours post-exposure)</li>
            <li>Case 2: Sunday 2:00 AM (14 hours)</li>
            <li>Case 3: Sunday 6:00 AM (18 hours)</li>
            <li>Case 4: Sunday 8:00 AM (20 hours)</li>
            <li>Case 5: Sunday 12:00 PM (24 hours)</li>
            </ul>
            <p>Based on this incubation period range (10-24 hours, median ~18 hours), which pathogen is MOST likely?</p>`,
        options: ["Clostridium perfringens (8-16 hours)", "Staphylococcus aureus (1-6 hours)", "Salmonella (12-72 hours)", "Norovirus (12-48 hours)"],
        answer: 2,
        explain: "<strong>Median incubation:</strong> ~18 hours (range 10-24 hours)<br><br><strong>Pathogen Incubation Reference:</strong><ul><li>Staph aureus: 1-6 hrs (TOO SHORT)</li><li>C. perfringens: 8-16 hrs (possible but typically shorter)</li><li><strong>Salmonella: 12-72 hrs</strong> (BEST FIT ✓)</li><li>Norovirus: 12-48 hrs (also fits)</li></ul><strong>Exam Tip:</strong> When median is ~18 hours, Salmonella is the classic answer. C. perfringens typically peaks at 12 hrs.",
        topic: "Incubation Period",
        chapter: "ch10",
        difficulty: "advanced"
    },
    {
        q: `<p>You are investigating a foodborne outbreak. The exposure occurred at 6:00 PM on Friday. Using the epidemic curve, you determine that the <strong>median onset time</strong> was 3:00 AM Saturday (9 hours later).</p>
            <p>If the suspected pathogen is <em>Staphylococcus aureus</em> (incubation 1-6 hours, median 2-4 hours), what should you conclude?</p>`,
        options: [
            "The incubation period is consistent with S. aureus",
            "The incubation period is TOO LONG for S. aureus; consider a different pathogen",
            "The incubation period is too short for S. aureus",
            "Incubation period cannot be determined from this data"
        ],
        answer: 1,
        explain: "A 9-hour median incubation is TOO LONG for S. aureus (typical max 6-7 hours). Consider Clostridium perfringens (8-16h) or Bacillus cereus diarrheal type (8-16h) instead.",
        topic: "Incubation Period",
        chapter: "ch10",
        difficulty: "advanced"
    },

    // ========== STUDY DESIGN ==========
    {
        q: `<p>Researchers want to study risk factors for a rare childhood cancer that affects only 1 in 100,000 children. They have access to a cancer registry with 200 confirmed cases.</p>
            <p>Which study design is MOST appropriate and why?</p>`,
        options: [
            "Cohort study - it provides the strongest evidence",
            "Case-control study - efficient for rare diseases because it starts with cases",
            "Cross-sectional study - quick and inexpensive",
            "Randomized controlled trial - gold standard for causation"
        ],
        answer: 1,
        explain: "Case-control studies are ideal for RARE diseases. A cohort study would require following hundreds of thousands of children for years to accumulate enough cases. Case-control efficiently uses existing cases and compares their exposures to matched controls.",
        topic: "Study Design",
        chapter: "ch10",
        difficulty: "intermediate"
    },
    {
        q: `<p>A researcher follows 10,000 nurses for 20 years, periodically assessing their diet and tracking who develops heart disease. This is an example of which study design?</p>`,
        options: [
            "Case-control study",
            "Prospective cohort study",
            "Cross-sectional study",
            "Nested case-control study"
        ],
        answer: 1,
        explain: "This describes a PROSPECTIVE COHORT study (like the Nurses' Health Study). Participants are enrolled based on exposure status (or potential exposure) and followed FORWARD in time to observe outcomes.",
        topic: "Study Design",
        chapter: "ch10",
        difficulty: "beginner"
    },

    // ========== BIAS AND CONFOUNDING ==========
    {
        q: `<p>In a case-control study of lung cancer, researchers find that cases (cancer patients) are more likely to report past smoking than controls. However, cases may remember their smoking history more vividly because they are searching for explanations for their illness.</p>
            <p>This is an example of:</p>`,
        options: [
            "Selection bias",
            "Recall bias",
            "Confounding",
            "Lead-time bias"
        ],
        answer: 1,
        explain: "<strong>Recall Bias Definition:</strong> Cases remember/report exposures differently than controls, often more thoroughly because they're 'searching for meaning.'<br><br><strong>Classic Example:</strong> Mothers of children with birth defects recall every medication, food, or exposure during pregnancy – while mothers of healthy children don't think twice about it.<br><br><strong>Prevention:</strong> Use objective records (medical charts, pharmacy databases) instead of self-report when possible.<br><br><strong>Type of bias:</strong> This is INFORMATION bias (not selection bias).",
        topic: "Bias",
        chapter: "ch11",
        difficulty: "intermediate"
    },
    {
        q: `<p>A hospital-based case-control study compares lung cancer patients to patients with broken bones (controls). The researchers find an unexpectedly WEAK association between smoking and lung cancer because broken bone patients who smoke are over-represented in the hospital.</p>
            <p>This is an example of:</p>`,
        options: [
            "Recall bias",
            "Berkson's bias (Admission rate bias)",
            "Neyman bias (Prevalence-incidence bias)",
            "Length-time bias"
        ],
        answer: 1,
        explain: "Berkson's bias occurs in hospital-based studies when the controls (other hospitalized patients) have different exposure rates than the general population. Smokers may be hospitalized more often for various reasons, diluting the apparent association.",
        topic: "Bias",
        chapter: "ch11",
        difficulty: "advanced"
    },
    {
        q: `<p>A study finds that coffee drinking is associated with pancreatic cancer (RR = 2.5). However, when the researchers control for cigarette smoking, the association disappears (adjusted RR = 1.0).</p>
            <p>Smoking is acting as a:</p>`,
        options: [
            "Effect modifier",
            "Confounder",
            "Mediator",
            "Collider"
        ],
        answer: 1,
        explain: "This is classic CONFOUNDING. Smoking is associated with both coffee drinking (exposure) and pancreatic cancer (outcome), and is NOT on the causal pathway. When controlled, the spurious association disappears.",
        topic: "Confounding",
        chapter: "ch11",
        difficulty: "advanced"
    },

    // ========== SENSITIVITY AND SPECIFICITY ==========
    {
        q: `<p>A new rapid HIV test is evaluated. Results:</p>
            <table class='exam-table'>
            <tr><th></th><th>HIV+ (Gold Std)</th><th>HIV- (Gold Std)</th></tr>
            <tr><td><strong>Test Positive</strong></td><td>95</td><td>10</td></tr>
            <tr><td><strong>Test Negative</strong></td><td>5</td><td>990</td></tr>
            </table>
            <p>Calculate the <strong>Sensitivity</strong> of this test.</p>`,
        options: ["95%", "99%", "90.5%", "95.2%"],
        answer: 0,
        explain: "<strong>Formula:</strong> Sensitivity = TP / (TP + FN)<br><br><strong>Calculation:</strong> = 95 / (95 + 5) = 95/100 = <strong>95%</strong><br><br><strong>What it measures:</strong> The test's ability to correctly identify those WITH disease (true positive rate).<br><br><strong>Mnemonic:</strong> <em>SnNout</em> = High <u>Sn</u>ensitivity + <u>N</u>egative result = rules <u>OUT</u> disease.<br><br><strong>Exam Tip:</strong> Sensitivity denominator = DISEASE PRESENT column (TP + FN)",
        topic: "Sensitivity/Specificity",
        chapter: "ch12",
        difficulty: "intermediate"
    },
    {
        q: `<p>Using the same HIV test data:</p>
            <table class='exam-table'>
            <tr><th></th><th>HIV+</th><th>HIV-</th></tr>
            <tr><td><strong>Test +</strong></td><td>95</td><td>10</td></tr>
            <tr><td><strong>Test -</strong></td><td>5</td><td>990</td></tr>
            </table>
            <p>Calculate the <strong>Positive Predictive Value (PPV)</strong>.</p>`,
        options: ["90.5%", "95%", "99%", "95.2%"],
        answer: 0,
        explain: "<strong>Formula:</strong> PPV = TP / (TP + FP)<br><br><strong>Calculation:</strong> = 95 / (95 + 10) = 95/105 = <strong>90.5%</strong><br><br><strong>Clinical Question Answered:</strong> 'If I test POSITIVE, what's the probability I ACTUALLY have the disease?'<br><br><strong>Critical Concept:</strong> PPV depends heavily on disease PREVALENCE:<ul><li>High prevalence → High PPV</li><li>Low prevalence → Low PPV (many false positives)</li></ul><br><strong>Mnemonic:</strong> PPV = TEST POSITIVE row (TP + FP)",
        topic: "Sensitivity/Specificity",
        chapter: "ch12",
        difficulty: "intermediate"
    },
    {
        q: `<p>A screening test has 99% sensitivity and 95% specificity. In a population where disease prevalence is very LOW (0.1%), what happens to the Positive Predictive Value?</p>`,
        options: [
            "PPV is very LOW (most positives are false positives)",
            "PPV is very HIGH (the test is accurate)",
            "PPV equals sensitivity",
            "PPV cannot be determined without more data"
        ],
        answer: 0,
        explain: "When prevalence is low, even a highly specific test produces many false positives relative to true positives. With 0.1% prevalence, ~1 true positive per 1000 people, but ~50 false positives (5% of 999 negatives). PPV ≈ 1/51 ≈ 2%. This is the 'screening paradox'.",
        topic: "Sensitivity/Specificity",
        chapter: "ch12",
        difficulty: "advanced"
    },

    // ========== VACCINE EFFECTIVENESS ==========
    {
        q: `<p>During a measles outbreak, the following data was collected:</p>
            <table class='exam-table'>
            <tr><th></th><th>Measles Cases</th><th>Total</th><th>Attack Rate</th></tr>
            <tr><td><strong>Unvaccinated</strong></td><td>50</td><td>100</td><td>50%</td></tr>
            <tr><td><strong>Vaccinated (2 doses)</strong></td><td>10</td><td>400</td><td>2.5%</td></tr>
            </table>
            <p>Calculate the <strong>Vaccine Effectiveness (VE)</strong>.</p>`,
        options: ["95%", "80%", "90%", "97.5%"],
        answer: 0,
        explain: "<strong>Vaccine Effectiveness Formula:</strong><br>VE = (ARu - ARv) / ARu × 100<br><br><strong>Step-by-step:</strong><ol><li>ARu (unvaccinated) = 50/100 = 50%</li><li>ARv (vaccinated) = 10/400 = 2.5%</li><li>VE = (50% - 2.5%) / 50% × 100</li><li>VE = 47.5 / 50 × 100 = <strong>95%</strong></li></ol><strong>Interpretation:</strong> The vaccine reduced measles risk by 95% compared to being unvaccinated.<br><br><strong>Exam Trap:</strong> ❌ Don't divide ARv by ARu directly – that gives RR, not VE!<br><br><strong>Alternative Formula:</strong> VE = (1 - RR) × 100 = (1 - 0.05) × 100 = 95%",
        topic: "Vaccine Effectiveness",
        chapter: "ch13",
        difficulty: "intermediate"
    },

    // ========== HERD IMMUNITY ==========
    {
        q: `<p>Measles has an R₀ (basic reproduction number) of approximately 15. Using the formula HIT = 1 - (1/R₀), what percentage of the population must be immune to achieve herd immunity?</p>`,
        options: ["93.3%", "85%", "70%", "99%"],
        answer: 0,
        explain: "<strong>Herd Immunity Threshold Formula:</strong> HIT = 1 - (1/R₀)<br><br><strong>Calculation for Measles (R₀ = 15):</strong><br>HIT = 1 - (1/15) = 1 - 0.067 = 0.933 = <strong>93.3%</strong><br><br><strong>What this means:</strong> 93-94% of the population must be immune to stop measles transmission.<br><br><strong>Real-world impact:</strong> This is why measles outbreaks occur when vaccination coverage drops below ~95%. There's almost no margin for error with highly contagious diseases.<br><br><strong>Reference values:</strong><ul><li>Measles (R₀=15): HIT = 93%</li><li>COVID original (R₀=2.5): HIT = 60%</li><li>Flu (R₀=1.3): HIT = 23%</li></ul>",
        topic: "Herd Immunity",
        chapter: "ch18",
        difficulty: "intermediate"
    },

    // ========== "EXCEPT" / "NOT" QUESTIONS ==========
    {
        q: `<p>Which of the following is <strong>NOT</strong> one of the Bradford Hill criteria for assessing causation?</p>`,
        options: [
            "Statistical significance (p < 0.05)",
            "Temporality (cause precedes effect)",
            "Biological plausibility",
            "Dose-response relationship"
        ],
        answer: 0,
        explain: "Statistical significance is NOT a Bradford Hill criterion. The 9 criteria are: Strength, Consistency, Specificity, Temporality, Biological gradient (dose-response), Plausibility, Coherence, Experiment, and Analogy.",
        topic: "Causation",
        chapter: "ch3",
        difficulty: "advanced"
    },
    {
        q: `<p>All of the following are components of the Chain of Infection <strong>EXCEPT</strong>:</p>`,
        options: [
            "Incubation period",
            "Reservoir",
            "Portal of exit",
            "Mode of transmission"
        ],
        answer: 0,
        explain: "The 6 links in the Chain of Infection are: Infectious Agent, Reservoir, Portal of Exit, Mode of Transmission, Portal of Entry, and Susceptible Host. Incubation period is a time characteristic, not a chain link.",
        topic: "Chain of Infection",
        chapter: "ch3",
        difficulty: "beginner"
    },
    {
        q: `<p>Which of the following is <strong>LEAST likely</strong> to be an example of PRIMARY prevention?</p>`,
        options: [
            "Mammography screening for breast cancer",
            "Childhood vaccinations",
            "Water fluoridation to prevent cavities",
            "Wearing seatbelts to prevent injury"
        ],
        answer: 0,
        explain: "Mammography is SECONDARY prevention (early detection of existing disease). Primary prevention occurs BEFORE disease onset: vaccines, fluoridation, and seatbelts all prevent the initial health problem.",
        topic: "Prevention Levels",
        chapter: "ch15",
        difficulty: "intermediate"
    },

    // ========== EPIDEMIC CURVE INTERPRETATION ==========
    {
        q: `<p>An epidemic curve shows the following pattern: cases rise rapidly to a peak over 3 days, then decline over 5 days. The entire outbreak lasts about 10 days. What type of outbreak does this suggest?</p>`,
        options: [
            "Point source outbreak",
            "Continuous common source outbreak",
            "Propagated outbreak",
            "Intermittent common source"
        ],
        answer: 0,
        explain: "<strong>Epidemic Curve Patterns:</strong><br><br><table style='width:100%;border-collapse:collapse;'><tr style='background:#f8fafc;'><td style='padding:0.5rem;border:1px solid #e2e8f0;'><strong>Point Source</strong></td><td style='padding:0.5rem;border:1px solid #e2e8f0;'>Sharp rise, single peak, rapid decline. Duration ≈ one incubation period.</td></tr><tr><td style='padding:0.5rem;border:1px solid #e2e8f0;'><strong>Propagated</strong></td><td style='padding:0.5rem;border:1px solid #e2e8f0;'>Multiple peaks separated by one incubation period (generations of cases).</td></tr><tr><td style='padding:0.5rem;border:1px solid #e2e8f0;'><strong>Continuous Source</strong></td><td style='padding:0.5rem;border:1px solid #e2e8f0;'>Plateau pattern – cases continue as long as source persists.</td></tr></table><br>This scenario: 3-day rise → peak → 5-day decline = <strong>Point Source</strong> (classic log-normal curve).",
        topic: "Epidemic Curves",
        chapter: "ch10",
        difficulty: "beginner"
    },
    {
        q: `<p>An epidemic curve shows multiple peaks of increasing height, each separated by approximately 2 weeks. This pattern suggests:</p>`,
        options: [
            "Propagated outbreak with person-to-person transmission",
            "Point source outbreak",
            "Continuous common source",
            "Data collection artifact"
        ],
        answer: 0,
        explain: "Successive peaks separated by one incubation period (here, 2 weeks) indicate PROPAGATED transmission. Each peak represents a new 'generation' of cases infected by the previous generation.",
        topic: "Epidemic Curves",
        chapter: "ch10",
        difficulty: "intermediate"
    },

    // ========== MORTALITY METRICS ==========
    {
        q: `<p>During an Ebola outbreak, 500 people are infected and 250 die. What is the Case Fatality Rate (CFR)?</p>`,
        options: ["50%", "25%", "100%", "Cannot determine without population data"],
        answer: 0,
        explain: "<strong>Formula:</strong> CFR = Deaths / Cases × 100<br><br><strong>Calculation:</strong> = 250/500 × 100 = <strong>50%</strong><br><br><strong>What CFR measures:</strong> Disease SEVERITY – the proportion of CASES that die. It does NOT measure population impact.<br><br><strong>Key Distinction:</strong><ul><li><strong>CFR</strong> = Deaths / Cases (how deadly once infected)</li><li><strong>Mortality Rate</strong> = Deaths / Population (population burden)</li><li><strong>Attack Rate</strong> = Cases / Exposed (risk of infection)</li></ul><br><strong>Exam Tip:</strong> High CFR + rare disease = few deaths. Low CFR + common disease = many deaths.",
        topic: "Mortality Metrics",
        chapter: "ch4",
        difficulty: "beginner"
    },
    {
        q: `<p>A disease has a Case Fatality Rate of 0.1% but causes 500,000 deaths per year worldwide. This is most likely describing:</p>`,
        options: [
            "A common disease with low per-case mortality (like influenza)",
            "A rare disease with high mortality",
            "A disease with high attack rate and low transmission",
            "Data inconsistency - this combination is impossible"
        ],
        answer: 0,
        explain: "Low CFR (0.1%) + High death count = VERY COMMON disease. Influenza has ~0.1% CFR but infects hundreds of millions annually, causing 290,000-650,000 deaths globally.",
        topic: "Mortality Metrics",
        chapter: "ch4",
        difficulty: "advanced"
    }
];

// Merge with existing quiz banks on load
(function () {
    if (!window.QUIZ_BANKS) window.QUIZ_BANKS = {};
    if (!window.QUIZ_BANKS.enhanced) window.QUIZ_BANKS.enhanced = {};

    // Distribute into Part 1, 2, 3 for Simulation Exam usage
    // Simulation Exam pulls from QUIZ_BANKS.partX.advanced/intermediate/beginner

    const getPart = (ch) => {
        if (!ch) return 'part2';
        const num = parseInt(ch.replace('ch', ''));
        if (isNaN(num)) return 'part2';
        if (num <= 6) return 'part1';
        if (num <= 13) return 'part2';
        return 'part3';
    };

    let distributedCount = 0;
    if (window.QUIZ_BANKS) {
        window.ENHANCED_EXAM_QUESTIONS.forEach(q => {
            const part = getPart(q.chapter);

            // Ensure structure exists
            if (!window.QUIZ_BANKS[part]) window.QUIZ_BANKS[part] = {};
            if (!window.QUIZ_BANKS[part].advanced) window.QUIZ_BANKS[part].advanced = [];

            // Prevent duplicates (simple check)
            const exists = window.QUIZ_BANKS[part].advanced.some(existing => existing.q === q.q);
            if (!exists) {
                window.QUIZ_BANKS[part].advanced.push(q);
                distributedCount++;
            }
        });
    }

    // Also add to aggregated pool if it exists
    if (typeof window.AGGREGATED_QUIZ_POOL !== 'undefined' && Array.isArray(window.AGGREGATED_QUIZ_POOL)) {
        window.AGGREGATED_QUIZ_POOL = window.AGGREGATED_QUIZ_POOL.concat(window.ENHANCED_EXAM_QUESTIONS);
    }

    console.log(`[ENHANCED EXAMS] Loaded ${window.ENHANCED_EXAM_QUESTIONS.length} questions. Distributed ${distributedCount} into Simulation Bank.`);
})();
