window.QUIZ_BANKS = {
    "part2": {
        "intermediate": [
            {
                "q": "<p><strong>Complex Scenario:</strong></p>                <p>A large banquet (N=450) exhibits three waves of illness:</p>                <ol>                    <li>Early Vomiting (6-8 hours post-meal)</li>                    <li>Mid-Diarrhea (18-24 hours post-meal)</li>                    <li>Late Diarrhea+Fever (3 days post-meal)</li>                </ol>                <p>Additionally, secondary cases appear in households of attendees.</p>                <p>What is the best explanation?</p>",
                "answer": 0,
                "type": "mc",
                "topic": "Chapter 20",
                "options": [
                    "Staph + Salmonella + secondary norovirus",
                    "Single norovirus",
                    "Single Salmonella",
                    "Fruit trays only"
                ],
                "explain": "<strong>Multiple Mechanisms.</strong> Likely a toxin (early) + bacteria (mid) + secondary spread (late) or multiple pathogens.",
                "chapter": "ch20"
            }
        ]
    }
};

// --- MERGED CONTENT FROM PHASE 2 & 4 ADDITIONS ---

// Helper to ensure part and difficulty arrays exist
function ensureArray(part, level) {
    if (!QUIZ_BANKS[part]) QUIZ_BANKS[part] = {};
    if (!Array.isArray(QUIZ_BANKS[part][level])) QUIZ_BANKS[part][level] = [];
    return QUIZ_BANKS[part][level];
}

// Phase 2: Advanced Questions
(function () {
    const part1Advanced = ensureArray('part1', 'advanced');
    part1Advanced.push(
        {
            q: "<p><strong>Causal Criteria:</strong></p><p>Which of Bradford Hill's criteria is considered the <strong>only absolute requirement</strong> for causality?</p>",
            answer: 0,
            type: 'mc',
            topic: 'Chapter 3',
            options: ['Temporality', 'Strength of association', 'Consistency', 'Dose–response'],
            explain: "<strong>Temporality.</strong> The cause must precede the effect in time."
        },
        {
            q: "<p><strong>Ethics in Research:</strong></p><p>Which principle from the Belmont Report dictates that participants must provide <strong>Informed Consent</strong>?</p>",
            answer: 0,
            type: 'mc',
            topic: 'Chapter 3',
            options: ['Respect for Persons (Autonomy)', 'Beneficence', 'Justice', 'Non‑maleficence'],
            explain: "<strong>Respect for Persons.</strong> It acknowledges autonomy and protects those with diminished autonomy."
        },
        {
            q: "<p><strong>Pathogen Transmission:</strong></p><p>Which pair of diseases are both <strong>Vector-Borne</strong>?</p>",
            answer: 0,
            type: 'mc',
            topic: 'Chapter 5',
            options: ['Malaria & Lyme disease', 'Malaria, Lyme disease & Influenza', 'Cholera & Influenza', 'All of the above'],
            explain: "<strong>Malaria & Lyme Disease.</strong> Malaria (Mosquito) and Lyme (Tick) require vectors. Influenza is droplet/airborne; Cholera is vehicle/waterborne."
        }
    );

    const part2Advanced = ensureArray('part2', 'advanced');
    part2Advanced.push(
        {
            q: "<p><strong>Investigation Data:</strong></p><table class='exam-table'><tr><th>Group</th><th>Ate Tuna</th><th>Did Not Eat</th></tr><tr><td><strong>Total</strong></td><td>30</td><td>20</td></tr><tr><td><strong>Sick</strong></td><td>20</td><td>2</td></tr></table><p>Based on attack rates, is the tuna salad the likely source?</p>",
            answer: 0,
            type: 'mc',
            topic: 'Chapter 8',
            options: ['Yes – AR_exposed≈67% vs AR_unexposed=10%', 'No – AR_exposed≈10% vs AR_unexposed=67%', 'No', 'Cannot determine'],
            explain: "<strong>Yes.</strong> AR(Exposed) = 20/30 (66.7%). AR(Unexposed) = 2/20 (10%). High RR implies association."
        },
        {
            q: "<p><strong>Bias Classification:</strong></p><p>A study measures exposure with equal error rates in both the case group and the control group (e.g. 10% error in both).</p><p>This <em>'Non-differential Misclassification'</em> typically biases the result:</p>",
            answer: 0,
            type: 'mc',
            topic: 'Chapter 10',
            options: ['Toward the Null', 'Away from the Null', 'Creates a False Positive', 'Unknown Direction'],
            explain: "<strong>Toward the Null.</strong> Random errors in classification dilute the true association, making it harder to find a significant difference."
        }
    );

    // Phase 4: Bias, Confounding, Curves
    // Phase 4: Bias, Confounding, Curves (Upgraded to National Standards)
    const newQuestionsP4 = [
        {
            q: "<p>A study reports an association between coffee consumption and lung cancer. However, when the data is stratified by <strong>smoking status</strong>, the association disappears in both smokers and non-smokers. Smoking is acting as:</p>",
            answer: 0,
            type: "mc",
            topic: "Chapter 11",
            options: [
                "A Confounder",
                "An Effect Modifier",
                "A Mediator (Causal Pathway)",
                "A Selection Bias"
            ],
            explain: "<strong>Confounding:</strong> Smoking is associated with the exposure (coffee drinkers smoke more) AND the outcome (smoking causes cancer). Stratification removes the distortion, revealing that coffee itself has no effect. If it were Effect Modification, the association would be <em>different</em> between strata (e.g., strong in smokers, weak in non-smokers)."
        },
        {
            q: "<p>An investigator controls for <em>'Admission Rate Bias'</em> (Berkson's Bias) by avoiding hospital controls. This specific bias is a form of:</p>",
            answer: 1,
            type: "mc",
            topic: "Chapter 19",
            options: [
                "Information Bias",
                "Selection Bias",
                "Lead-time Bias",
                "Observer Bias"
            ],
            explain: "<strong>Selection Bias:</strong> Berkson's Bias occurs when the combination of exposure and disease increases the probability of being hospitalized (selected for the study), creating a spurious association that doesn't exist in the general population."
        },
        {
            q: "<p>In a case-control study of birth defects, mothers of affected children provide more detailed reports of past medication use than mothers of healthy children. This systematic difference is:</p>",
            answer: 0,
            type: "mc",
            topic: "Chapter 11",
            options: [
                "Recall Bias (Information Bias)",
                "Selection Bias",
                "Confounding",
                "Length Bias"
            ],
            explain: "<strong>Recall Bias:</strong> This is a specific type of Information Bias where the <em>outcome</em> affects the accuracy of exposure reporting. Affected parents 'ruminate' and remember exposures that controls forget, leading to an overestimation of risk."
        },
        {
            q: "<p>The <em>'Healthy Worker Effect'</em> typically biases mortality studies of occupational cohorts towards:</p>",
            answer: 1,
            type: "mc",
            topic: "Chapter 19",
            options: [
                "Overestimating the risk of the job",
                "The null (underestimating the risk)",
                "A protective effect greater than reality",
                "Random error"
            ],
            explain: "<strong>Selection Bias towards Null:</strong> Workers are generally healthier than the general population (which includes the sick/disabled). Comparing workers to the general public makes the workers look 'healthier' than they really are, potentially masking dangerous occupational exposures."
        },
        {
            q: "<p>Which analytic method allows an epidemiologist to detect <strong>Effect Modification</strong>?</p>",
            answer: 2,
            type: "mc",
            topic: "Chapter 11",
            options: [
                "Matching",
                "Randomization",
                "Stratification",
                "Increasing sample size"
            ],
            explain: "<strong>Stratification:</strong> By inspecting the association within subgroups (strata), you can see if the effect <em>differs</em> (modifies) between them. Confounding shows the <em>same</em> adjusted effect; Effect Modification shows <em>different</em> effects."
        },
        {
            q: "<p>Random Assignment (Randomization) in a clinical trial is the only method that effectively controls for:</p>",
            answer: 1,
            type: "mc",
            topic: "Chapter 10",
            options: [
                "Information Bias",
                "Unknown / Unmeasured Confounders",
                "Effect Modification",
                "Loss to Follow-up"
            ],
            explain: "<strong>Unmeasured Confounding:</strong> Other methods (matching, stratification) require you to <em>know</em> the confounder. Randomization balances ALL factors (known and unknown) between groups, theoretically eliminating confounding."
        },
        {
            q: "<p>Epidemiologists distinguish between <em>'Reliability'</em> and <em>'Validity'</em>. Systematic error primarily reduces:</p>",
            answer: 0,
            type: "mc",
            topic: "Chapter 11",
            options: [
                "Validity (Accuracy)",
                "Reliability (Precision)",
                "Statistical Power",
                "Sample Size significance"
            ],
            explain: "<strong>Validity:</strong> Systematic Error (Bias) pushes the result away from the truth, reducing accuracy (validity). Random Error reduces precision (reliability), making the confidence interval wider."
        },
        {
            q: "<p>The <em>'Hawthorne Effect'</em> describes a situation where:</p>",
            answer: 0,
            type: "mc",
            topic: "Chapter 19",
            options: [
                "Study participants change their behavior because they know they are being observed",
                "Workers in a plant are healthier than the general population",
                "Hospital admission rates distort the exposure-disease relationship",
                "Early detection by screening appears to increase survival time"
            ],
            explain: "<strong>Hawthorne Effect:</strong> A form of measurement bias where the act of observation itself alters the subject's behavior (e.g., washing hands more often because a camera is watching)."
        },
        {
            q: "<p>Identify the outbreak type: <em>'A series of progressively taller peaks, each separated by approximately one incubation period.'</em></p>",
            answer: 2,
            type: "mc",
            topic: "Chapter 10",
            options: [
                "Point Source",
                "Continuous Common Source",
                "Propagated (Person-to-Person)",
                "Intermittent Common Source"
            ],
            explain: "<strong>Propagated Outbreak:</strong> The peaks represent generations of cases. Generation 1 infects Generation 2 (larger), which infects Generation 3 (even larger), until the pool of susceptibles is exhausted."
        },
        {
            q: "<p>Identify the outbreak type: <em>'Rapid rise to a sharp peak, followed by a gradual decline, with all cases occurring within one incubation period.'</em></p>",
            answer: 0,
            type: "mc",
            topic: "Chapter 10",
            options: [
                "Point Source",
                "Continuous Common Source",
                "Propagated",
                "Endemic baseline"
            ],
            explain: "<strong>Point Source:</strong> Indicates a simultaneous exposure (e.g., one contaminated meal). The 'gradual decline' (log-normal tail) represents the variation in individual incubation periods."
        },
        {
            q: "<p>Identify the outbreak type: <em>'A plateau curve where case counts remain elevated for weeks without distict peaks.'</em></p>",
            answer: 1,
            type: "mc",
            topic: "Chapter 10",
            options: [
                "Point Source",
                "Continuous Common Source",
                "Propagated",
                "Sentinel Event"
            ],
            explain: "<strong>Continuous Common Source:</strong> Exposure is constant (e.g., a polluted water pump used daily). The curve rises and stays high until the source is removed."
        },
        {
            q: "<p>On an epidemic curve, a single case appearing one incubation period <em>before</em> the main peak is best classified as:</p>",
            answer: 0,
            type: "mc",
            topic: "Chapter 10",
            options: [
                "The Index Case (Primary Case)",
                "A Secondary Case",
                "An Unrelated Background Case",
                "A Measurement Error"
            ],
            explain: "<strong>Index Case:</strong> This outlier represents the first person to introduce the pathogen to the group, subsequently causing the main cluster (wave) of cases."
        },
        {
            q: "<p>In a Point Source outbreak, the duration from the earliest onset to the latest onset represents:</p>",
            answer: 1,
            type: "mc",
            topic: "Chapter 10",
            options: [
                "The generation time of the agent",
                "The range of incubation periods",
                "The duration of exposure",
                "The serial interval"
            ],
            explain: "Since exposure happens at ONE point in time, the spread in onset times is due entirely to biological differences in how long it takes each person to get sick (Range of Incubation Periods)."
        },
        {
            q: "<p><strong>Simpson's Paradox</strong> refers to a phenomenon where:</p>",
            answer: 0,
            type: "mc",
            topic: "Chapter 19",
            options: [
                "A trend evident in individual groups disappears or reverses when groups are combined",
                "A statistical test has 100% specificity but low sensitivity",
                "Case-control studies yield higher RRs than Cohort studies",
                "The 95% Confidence Interval is narrower than the P-value"
            ],
            explain: "<strong>Simpson's Paradox:</strong> A classic warning against aggregating data without checking for confounders. A drug could look bad overall, but actually be good for men AND good for women, simply because sick men took it more often."
        },
        {
            q: "<p>Interpret this Risk Ratio: RR = 1.2 (95% CI: 0.8 - 1.5).</p>",
            answer: 1,
            type: "mc",
            topic: "Chapter 13",
            options: [
                "Statistically Significant risk increase",
                "Not Statistically Significant",
                "Proven Causal Link",
                "Evidence of Bias"
            ],
            explain: "<strong>Not Significant:</strong> The Confidence Interval includes the null value (1.0). This means the true result could plausibly be 1.0 (no effect). We cannot reject the null hypothesis."
        },
        {
            q: "<p>Which metric indicates the <strong>Precision</strong> of a study's estimate?</p>",
            answer: 0,
            type: "mc",
            topic: "Chapter 13",
            options: [
                "The width of the Confidence Interval",
                "The P-value magnitude",
                "The magnitude of the Risk Ratio",
                "The validity score"
            ],
            explain: "<strong>Precision = Narrow CI.</strong> A narrow interval means less random error. Validity (Accuracy) is about hitting the true target; Precision is about the tightness of the grouping."
        },
        {
            q: "<p>The <strong>Ecological Fallacy</strong> occurs when:</p>",
            answer: 2,
            type: "mc",
            topic: "Chapter 19",
            options: [
                "Environmental factors are ignored",
                "Confounding is mistaken for Effect Modification",
                "Inferences about individuals are made based on aggregate group data",
                "Selection bias distorts ecological studies"
            ],
            explain: "<strong>Ecological Fallacy:</strong> <em>'Countries with high fat intake have high cancer rates'</em> does NOT prove that YOU (an individual) will get cancer if you eat fat. The correlation exists at the group level, not necessarily the individual level."
        },
        {
            q: "<p><strong>Lead-Time Bias</strong> is a critical concern in evaluating:</p>",
            answer: 1,
            type: "mc",
            topic: "Chapter 19",
            options: [
                "Case-Control Studies",
                "Screening Programs",
                "Vaccine Efficacy Trials",
                "Outbreak Investigations"
            ],
            explain: "<strong>Screening Bias:</strong> Screening detects disease EARLIER. Patients seem to 'survive longer' simply because you started the clock sooner, not because they actually lived until a later date."
        },
        {
            q: "<p><strong>Neyman Bias</strong> (Prevalence-Incidence Bias) specifically excludes which group from a study?</p>",
            answer: 1,
            type: "mc",
            topic: "Chapter 19",
            options: [
                "Healthy volunteers",
                "Those who died early or recovered quickly before study start",
                "Those exposed to low levels of the agent",
                "Hospitalized controls"
            ],
            explain: "<strong>Survivor Bias:</strong> If you only study prevalent (existing) cases, you miss the ones who died immediately (severe) or recovered immediately (mild). You only see the 'survivors,' skewing the picture of the disease."
        },
        {
            q: "<p>If a disease has a Basic Reproductive Number (R₀) of 4, what is the <strong>Herd Immunity Threshold</strong>?</p>",
            answer: 2,
            type: "mc",
            topic: "Chapter 18",
            options: [
                "25%",
                "50%",
                "75%",
                "90%"
            ],
            explain: "<strong>Formula:</strong> HIT = 1 - (1/R₀) = 1 - (1/4) = 1 - 0.25 = <strong>75%</strong>.<br>Interpretation: 75% of the population must be immune to prevent sustained spread."
        }
    ];
    part2Advanced.push(...newQuestionsP4);

    const part3Advanced = ensureArray('part3', 'advanced');
    part3Advanced.push(
        {
            q: "<p>A public health program implements three strategies: 1) Administering HPV vaccines to adolescents, 2) Providing Pap smear screenings for women, and 3) Treating confirmed cervical cancer cases with chemotherapy. Which strategy represents <strong>Primary Prevention</strong>?</p>",
            answer: 0,
            "type": "mc",
            "topic": "Chapter 15",
            "options": [
                "Administering HPV vaccines",
                "Providing Pap smear screenings",
                "Treating confirmed cancer cases",
                "Strategies 1 and 2"
            ],
            "explain": "<strong>Prevention Levels:</strong><br><strong>Primary:</strong> Preventing disease onset (Vaccines).<br><strong>Secondary:</strong> Early detection/Screening (Pap smears).<br><strong>Tertiary:</strong> Treatment/Rehabilitation (Chemotherapy).",
            "chapter": "ch15"
        },
        {
            q: "<p>Measles is highly contagious with a Basic Reproductive Number (R₀) of approximately 18. What proportion of the population must be immune to achieve <strong>Herd Immunity</strong>?</p>",
            answer: 0,
            "type": "mc",
            "topic": "Chapter 18",
            "options": [
                "Approximately 94-95%",
                "Approximately 50%",
                "Approximately 18%",
                "100%"
            ],
            "explain": "<strong>Calculation:</strong> HIT = 1 - (1/R₀) = 1 - (1/18) = 1 - 0.055 = <strong>0.944 (94.4%)</strong>. Measles requires very high immunity levels to prevent outbreaks.",
            "chapter": "ch18"
        },
        {
            q: "<p>Which of the following sets contains ONLY widely accepted criteria from <strong>Bradford Hill's Criteria for Causation</strong>?</p>",
            answer: 2,
            "type": "mc",
            "topic": "Chapter 18",
            "options": [
                "Statistical Significance, Sample Size, Plausibility",
                "Dose-Response, P-value < 0.05, Temporality",
                "Temporality, Consistency, Biological Gradient (Dose-Response)",
                "Specificity, Placebo Control, Double-Blinding"
            ],
            "explain": "<strong>Hill's Criteria:</strong> Key criteria include Temporality (Cause before effect), Consistency (Repeated results), Strength, Biological Gradient (Dose-Response), and Plausibility. 'P-value' and 'Sample Size' are statistical attributes, not causal criteria.",
            "chapter": "ch18"
        }
    );
})();


// Make globally available
if (typeof window !== 'undefined') {
    window.QUIZ_BANKS = QUIZ_BANKS;
}
if (typeof module !== 'undefined') {
    module.exports = QUIZ_BANKS;
}