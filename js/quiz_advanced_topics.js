/**
 * Quiz Advanced Topics - Tier 2 Exam-Style Questions
 * Covers: Vaccine Effectiveness, Herd Immunity, Surveillance, Screening, R0
 * Advanced calculations and "tiebreaker" level difficulty
 */

window.QUIZ_ADVANCED_TOPICS = {
    // =========================================================================
    // VACCINE EFFECTIVENESS & HERD IMMUNITY
    // =========================================================================
    vaccines: [
        {
            q: `<p>A school vaccination study provides the following data:</p>
                <table class='exam-table'>
                <tr><th></th><th>Developed Measles</th><th>Did Not Develop Measles</th><th>Total</th></tr>
                <tr><td><strong>Vaccinated</strong></td><td>5</td><td>495</td><td>500</td></tr>
                <tr><td><strong>Unvaccinated</strong></td><td>40</td><td>60</td><td>100</td></tr>
                </table>
                <p>Calculate the <strong>Vaccine Effectiveness (VE)</strong>:</p>`,
            answer: 2,
            type: "mc",
            topic: "Vaccine Effectiveness",
            options: [
                "VE = 87.5% (35/40)",
                "VE = 90% (1 - 0.1)",
                "VE = 97.5% (1 - [1%/40%])",
                "VE = 40% (40/100)"
            ],
            explain: "AR(unvax) = 40/100 = 40%. AR(vax) = 5/500 = 1%. VE = (ARu - ARv)/ARu = (40% - 1%)/40% = 39/40 = 0.975 = 97.5%. The vaccine reduced the risk of measles by 97.5%.",
            chapter: "ch17",
            difficulty: "advanced"
        },
        {
            q: `<p>During a flu season, data shows:</p>
                <ul>
                <li>Attack rate among vaccinated: 5%</li>
                <li>Attack rate among unvaccinated: 20%</li>
                </ul>
                <p>A vaccinated person claims the flu shot "didn't work" because they still got sick. What is the BEST response?</p>`,
            answer: 1,
            type: "mc",
            topic: "Vaccine Effectiveness",
            options: [
                "The vaccine failed completely for this individual",
                "The vaccine reduced their risk by 75%, but no vaccine is 100% effective",
                "They must have received an expired vaccine",
                "Influenza vaccines don't prevent infection"
            ],
            explain: "VE = (20% - 5%)/20% = 75%. The vaccine reduced their risk by 75%, but 5% of vaccinated people still got influenza. Being one of the 5% doesn't mean the vaccine 'failed' - it worked for most people.",
            chapter: "ch17",
            difficulty: "intermediate"
        },
        {
            q: `<p>For a disease with R₀ = 4, calculate the <strong>Herd Immunity Threshold (HIT)</strong>:</p>
                <p>Formula: HIT = 1 - (1/R₀)</p>`,
            answer: 1,
            type: "mc",
            topic: "Herd Immunity",
            options: [
                "HIT = 50%",
                "HIT = 75%",
                "HIT = 80%",
                "HIT = 25%"
            ],
            explain: "HIT = 1 - (1/R₀) = 1 - (1/4) = 1 - 0.25 = 0.75 = 75%. At least 75% of the population must be immune to prevent sustained transmission.",
            chapter: "ch17",
            difficulty: "intermediate"
        },
        {
            q: `<p>Compare the following diseases:</p>
                <table class='exam-table'>
                <tr><th>Disease</th><th>R₀</th><th>Herd Immunity Threshold</th></tr>
                <tr><td>Measles</td><td>12-18</td><td>92-95%</td></tr>
                <tr><td>Polio</td><td>5-7</td><td>80-86%</td></tr>
                <tr><td>Influenza (seasonal)</td><td>2-3</td><td>50-67%</td></tr>
                <tr><td>COVID-19 (original)</td><td>2-3</td><td>50-67%</td></tr>
                </table>
                <p>Why is measles vaccination coverage of 90% often insufficient to prevent outbreaks?</p>`,
            answer: 0,
            type: "mc",
            topic: "Herd Immunity",
            options: [
                "Measles requires 92-95% coverage due to extremely high R₀; 90% leaves enough susceptibles for transmission",
                "Measles vaccine is only 50% effective",
                "90% coverage is always sufficient for any disease",
                "Measles is not vaccine-preventable"
            ],
            explain: "With R₀ = 12-18, measles requires 92-95% immune population to achieve herd immunity. At 90% coverage (with 97% vaccine effectiveness), effective immunity is ~87%, leaving enough susceptibles for outbreaks in clustered unvaccinated communities.",
            chapter: "ch17",
            difficulty: "advanced"
        }
    ],

    // =========================================================================
    // SURVEILLANCE & SCREENING
    // =========================================================================
    surveillance: [
        {
            q: `<p>A screening program for a disease uses a test with:</p>
                <ul>
                <li>Sensitivity: 99%</li>
                <li>Specificity: 95%</li>
                <li>Disease prevalence: 0.1% (1 in 1,000)</li>
                </ul>
                <p>In a population of 100,000, how many FALSE POSITIVES would you expect?</p>`,
            answer: 2,
            type: "mc",
            topic: "Screening",
            options: [
                "100 false positives",
                "1,000 false positives",
                "4,995 false positives",
                "5,000 false positives"
            ],
            explain: "Healthy people = 100,000 × 99.9% = 99,900. FP = 99,900 × 5% (1 - specificity) = 4,995. With low prevalence, even a specific test generates many false positives. TP = 100 × 99% = 99. PPV = 99/(99+4,995) = 1.9%!",
            chapter: "ch12",
            difficulty: "advanced"
        },
        {
            q: `<p>Which type of surveillance system would BEST detect the first cases of a new, unknown pathogen?</p>`,
            answer: 1,
            type: "mc",
            topic: "Surveillance",
            options: [
                "Passive surveillance (provider reports to health department)",
                "Syndromic surveillance (monitoring symptom patterns in real-time)",
                "Sentinel surveillance (select sites report on specific diseases)",
                "Laboratory-based surveillance (positive test results reported)"
            ],
            explain: "Syndromic surveillance monitors symptom patterns (e.g., ER visits for respiratory illness) and can detect unusual clusters BEFORE a diagnosis is made. Lab-based surveillance requires knowing what to test for.",
            chapter: "ch18",
            difficulty: "intermediate"
        },
        {
            q: `<p>Active surveillance differs from passive surveillance because:</p>`,
            answer: 2,
            type: "mc",
            topic: "Surveillance",
            options: [
                "Active surveillance only monitors hospitalized patients",
                "Passive surveillance requires more resources",
                "Active surveillance involves health departments proactively seeking cases",
                "Active surveillance is always less accurate"
            ],
            explain: "ACTIVE: Health department contacts providers/hospitals to find cases. PASSIVE: Providers voluntarily report cases. Active is more complete but resource-intensive. Passive may miss cases (underreporting).",
            chapter: "ch18",
            difficulty: "beginner"
        }
    ],

    // =========================================================================
    // R₀ AND EPIDEMIC DYNAMICS
    // =========================================================================
    r0: [
        {
            q: `<p>During an outbreak, the effective reproduction number (Rₑ) drops from 2.5 to 0.8 after interventions. This means:</p>`,
            answer: 1,
            type: "mc",
            topic: "R0",
            options: [
                "The outbreak will accelerate",
                "The outbreak will decline and eventually end",
                "The outbreak is stable (endemic)",
                "Interventions had no effect"
            ],
            explain: "When Rₑ < 1, each case generates fewer than one new case on average, so the outbreak shrinks. Rₑ > 1 = growing. Rₑ = 1 = stable. Rₑ < 1 = declining. The goal of interventions is to push Rₑ below 1.",
            chapter: "ch17",
            difficulty: "intermediate"
        },
        {
            q: `<p>An outbreak modeler reports:</p>
                <ul>
                <li>R₀ = 3.0</li>
                <li>Serial interval = 5 days</li>
                <li>Doubling time = 3.5 days</li>
                </ul>
                <p>If there are 10 cases today, approximately how many cases would you expect in 2 weeks (14 days) with NO intervention?</p>`,
            answer: 2,
            type: "mc",
            topic: "R0",
            options: [
                "30 cases (10 × 3)",
                "80 cases (10 × 2⁴)",
                "160 cases (10 × 2^(14/3.5))",
                "1,000 cases"
            ],
            explain: "Doubling time = 3.5 days. In 14 days, there are 14/3.5 = 4 doubling periods. Cases = 10 × 2⁴ = 10 × 16 = 160 cases. Exponential growth is why early intervention is critical!",
            chapter: "ch17",
            difficulty: "advanced"
        },
        {
            q: `<p>The <strong>serial interval</strong> of a disease is defined as:</p>`,
            answer: 1,
            type: "mc",
            topic: "R0",
            options: [
                "Time from infection to symptom onset (incubation period)",
                "Time from symptom onset in one case to symptom onset in the case they infected",
                "Time from symptom onset to recovery",
                "Time between epidemic peaks"
            ],
            explain: "Serial interval = time from symptoms in infector to symptoms in infectee. It's related to but not the same as incubation period. Serial interval determines how fast generations of infection occur.",
            chapter: "ch17",
            difficulty: "intermediate"
        }
    ],

    // =========================================================================
    // OUTBREAK CALCULATIONS - TIEBREAKER LEVEL
    // =========================================================================
    tiebreaker: [
        {
            q: `<p><strong>TIEBREAKER:</strong> A cohort study follows 1,000 people for 5 years. Half drop out after 2.5 years. 50 cases occur (evenly distributed over time). Calculate the <strong>Incidence Rate</strong> per 1,000 person-years:</p>`,
            answer: 1,
            type: "mc",
            topic: "Incidence Rate",
            options: [
                "10 per 1,000 person-years",
                "13.3 per 1,000 person-years",
                "50 per 1,000 person-years",
                "20 per 1,000 person-years"
            ],
            explain: "Person-years: 500 people × 5 years + 500 people × 2.5 years = 2,500 + 1,250 = 3,750 person-years. Incidence rate = 50/3,750 × 1,000 = 13.3 per 1,000 person-years. Must account for variable follow-up!",
            chapter: "ch4",
            difficulty: "tiebreaker"
        },
        {
            q: `<p><strong>TIEBREAKER:</strong> Calculate the 95% Confidence Interval for a Risk Ratio:</p>
                <table class='exam-table'>
                <tr><th></th><th>Disease+</th><th>Disease-</th><th>Total</th></tr>
                <tr><td>Exposed</td><td>30</td><td>70</td><td>100</td></tr>
                <tr><td>Unexposed</td><td>10</td><td>90</td><td>100</td></tr>
                </table>
                <p>RR = 3.0. Standard Error ≈ 0.35. Which CI interpretation is correct?</p>`,
            answer: 2,
            type: "mc",
            topic: "Confidence Intervals",
            options: [
                "CI includes 1.0, so association is not significant",
                "CI = 3.0 ± 0.35 = (2.65, 3.35)",
                "95% CI ≈ (1.5, 6.0) using log transformation; excludes 1.0, significant association",
                "Confidence intervals cannot be calculated for RR"
            ],
            explain: "For RR, CI is calculated on the log scale: ln(3.0) = 1.10. CI = 1.10 ± 1.96×0.35 = (0.42, 1.78). Exponentiate: (e^0.42, e^1.78) = (1.5, 6.0). Excludes 1.0 → statistically significant.",
            chapter: "ch7",
            difficulty: "tiebreaker"
        },
        {
            q: `<p><strong>TIEBREAKER:</strong> Chi-square test for the table below:</p>
                <table class='exam-table'>
                <tr><th></th><th>Ill</th><th>Not Ill</th><th>Total</th></tr>
                <tr><td>Ate Fish</td><td>40</td><td>20</td><td>60</td></tr>
                <tr><td>No Fish</td><td>10</td><td>30</td><td>40</td></tr>
                <tr><td>Total</td><td>50</td><td>50</td><td>100</td></tr>
                </table>
                <p>Expected value for "Ate Fish + Ill" cell: E = (Row Total × Column Total) / Grand Total = ?</p>`,
            answer: 1,
            type: "mc",
            topic: "Chi-Square",
            options: [
                "E = 20",
                "E = 30",
                "E = 40",
                "E = 25"
            ],
            explain: "Expected = (Row Total × Column Total) / Grand Total = (60 × 50) / 100 = 30. Compare to Observed (40). This contributes to χ² = (O-E)²/E = (40-30)²/30 = 100/30 = 3.33 for this cell alone.",
            chapter: "ch11",
            difficulty: "tiebreaker"
        },
        {
            q: `<p><strong>TIEBREAKER:</strong> An investigator calculates Attributable Risk Percent (AR%):</p>
                <ul>
                <li>AR(exposed) = 40%</li>
                <li>AR(unexposed) = 10%</li>
                <li>Risk Ratio = 4.0</li>
                </ul>
                <p>Calculate AR% = (RR - 1) / RR × 100:</p>`,
            answer: 2,
            type: "mc",
            topic: "Attributable Risk",
            options: [
                "AR% = 25%",
                "AR% = 30%",
                "AR% = 75%",
                "AR% = 40%"
            ],
            explain: "AR% = (RR - 1) / RR × 100 = (4 - 1) / 4 × 100 = 3/4 × 100 = 75%. Interpretation: 75% of disease among the exposed is attributable to the exposure (could be prevented by removing exposure).",
            chapter: "ch7",
            difficulty: "tiebreaker"
        }
    ],

    // =========================================================================
    // ENVIRONMENTAL & OCCUPATIONAL EPIDEMIOLOGY
    // =========================================================================
    environmental: [
        {
            q: `<p>Workers at a factory have elevated blood lead levels. The exposure-response relationship shows:</p>
                <table class='exam-table'>
                <tr><th>Exposure Level (μg/m³)</th><th>Blood Lead (μg/dL)</th><th>% with Symptoms</th></tr>
                <tr><td>0-10</td><td>5-10</td><td>5%</td></tr>
                <tr><td>11-25</td><td>15-25</td><td>20%</td></tr>
                <tr><td>26-50</td><td>30-45</td><td>50%</td></tr>
                <tr><td>>50</td><td>>50</td><td>85%</td></tr>
                </table>
                <p>This gradient supports which Bradford Hill criterion?</p>`,
            answer: 2,
            type: "mc",
            topic: "Bradford Hill",
            options: [
                "Consistency - similar findings across studies",
                "Specificity - one exposure causes one disease",
                "Biological gradient (dose-response) - more exposure = more disease",
                "Temporality - exposure precedes outcome"
            ],
            explain: "A dose-response relationship (biological gradient) is strong evidence for causation: as exposure increases, so does the outcome. This is NOT proof of causation but supports it.",
            chapter: "ch16",
            difficulty: "intermediate"
        },
        {
            q: `<p>The "Healthy Worker Effect" is an example of:</p>`,
            answer: 0,
            type: "mc",
            topic: "Bias",
            options: [
                "Selection bias - workers are healthier than general population",
                "Information bias - workers report differently",
                "Confounding by age",
                "Measurement error"
            ],
            explain: "Healthy Worker Effect: Workers must be healthy enough to work, so comparing worker mortality to general population underestimates occupational hazards. It's selection bias - the comparison group differs systematically.",
            chapter: "ch11",
            difficulty: "advanced"
        }
    ],

    // =========================================================================
    // MOLECULAR EPIDEMIOLOGY & GENOMICS
    // =========================================================================
    molecular: [
        {
            q: `<p>Whole Genome Sequencing (WGS) of Salmonella isolates from 5 states shows identical genetic fingerprints. This finding:</p>`,
            answer: 1,
            type: "mc",
            topic: "Molecular Epidemiology",
            options: [
                "Proves the cases are unrelated",
                "Strongly suggests a common source (same contaminated product)",
                "Indicates the outbreaks are coincidental",
                "Means the pathogen is nonvirulent"
            ],
            explain: "Identical WGS = same strain = likely common source. Multi-state outbreaks with matching genetic fingerprints indicate a distributed food product. WGS has largely replaced PFGE for outbreak detection.",
            chapter: "ch16",
            difficulty: "intermediate"
        },
        {
            q: `<p>PulseNet is a CDC network that:</p>`,
            answer: 0,
            type: "mc",
            topic: "Surveillance",
            options: [
                "Links foodborne illness cases across states using DNA fingerprinting",
                "Tracks hospital admissions for infectious diseases",
                "Monitors air quality for respiratory pathogens",
                "Coordinates vaccine distribution"
            ],
            explain: "PulseNet is CDC's molecular surveillance network for foodborne diseases. Labs upload pathogen DNA fingerprints to detect multi-state clusters that would otherwise go unnoticed.",
            chapter: "ch18",
            difficulty: "intermediate"
        }
    ]
};

// =========================================================================
// INTEGRATION LOGIC
// =========================================================================
(function () {
    if (!window.QUIZ_BANKS) window.QUIZ_BANKS = {};
    if (!window.QUIZ_BANKS.advanced_topics) {
        window.QUIZ_BANKS.advanced_topics = {};
    }

    const topics = window.QUIZ_ADVANCED_TOPICS;
    let totalAdded = 0;

    // Create category-based structure
    Object.keys(topics).forEach(category => {
        window.QUIZ_BANKS.advanced_topics[category] = topics[category];
        totalAdded += topics[category].length;
    });

    // Also add to aggregated quiz pool
    if (window.AGGREGATED_QUIZ_POOL && Array.isArray(window.AGGREGATED_QUIZ_POOL)) {
        Object.keys(topics).forEach(category => {
            topics[category].forEach(q => {
                window.AGGREGATED_QUIZ_POOL.push({
                    q: q.q,
                    question: q.q,
                    options: q.options,
                    answer: q.answer,
                    correct: q.answer,
                    explain: q.explain,
                    topic: q.topic,
                    chapter: q.chapter,
                    difficulty: q.difficulty || 'advanced',
                    category: category
                });
            });
        });
    }

    console.log(`[QUIZ ADVANCED TOPICS] Added ${totalAdded} advanced questions (vaccines, surveillance, R0, tiebreakers)`);
})();
