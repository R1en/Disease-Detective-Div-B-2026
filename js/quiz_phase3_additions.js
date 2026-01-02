(function () {
    if (typeof QUIZ_BANKS === 'undefined') {
        console.warn('QUIZ_BANKS not loaded, Phase 3 additions skipped.');
        return;
    }

    // console.log('[Phase 3] Injecting Advanced Content & Visuals...');

    const newQuestions = {
        part1: [
            {
                q: "Analyze this Epi Curve:<br><pre style='font-family:monospace; line-height:10px;'>\n   #\n   #\n  ###\n #####   #\n----------\n1 2 3 4 5 6</pre>Which pattern is most consistent with this single sharp peak?",
                answer: 0,
                type: "mc",
                topic: "Chapter 4",
                options: ["Point Source", "Propagated", "Continuous Common Source", "Intermittent"],
                explain: "Correct: A. A single sharp peak with a rapid decline suggests a point source exposure (e.g., a single contaminated meal)."
            },
            {
                q: "Compare Study Designs:<br><table class='neo-table small'><tr><td>A</td><td>Start with Disease</td><td>Look Back</td></tr><tr><td>B</td><td>Start with Exposure</td><td>Follow Forward</td></tr></table><br>Which row describes a Cohort Study?",
                answer: 1,
                type: "mc",
                topic: "Chapter 10",
                options: ["Row A", "Row B", "Both", "Neither"],
                explain: "Correct: B. Cohort studies classify by exposure status first, then track outcomes."
            },
            {
                q: "<strong>Visual Analogy:</strong><br>Identifying 'sick' people against a noisy background of 'healthy' people is best described by measures of:",
                answer: 0,
                type: "mc",
                topic: "Chapter 1",
                options: ["Validity (Sensitivity/Specificity)", "Reliability", "Representativeness", "Generalizability"],
                explain: "Correct: A. Signal-to-noise detection is the core concept of Sensitivity (finding the signal) and Specificity (ignoring the noise)."
            }
        ],
        part2: [
            {
                q: "<div style='font-family:monospace; border:1px solid #ccc; padding:5px;'>ID | Ate Salad | Sick<br>1  | Yes       | Yes<br>2  | No        | No<br>3  | Yes       | No</div><br>Calculate the Attack Rate for Salad Eaters.",
                answer: 0,
                type: "mc",
                topic: "Chapter 13",
                options: ["50% (1/2)", "33% (1/3)", "100% (2/2)", "0%"],
                explain: "Correct: A. Two people ate salad (ID 1, ID 3). Of them, only ID 1 got sick. 1/2 = 50%."
            },
            {
                q: "Risk Ratio Interpretation:<br><strong>RR = 0.6 (95% CI: 0.4 - 0.9)</strong><br>How should you interpret this?",
                answer: 1,
                type: "mc",
                topic: "Chapter 13",
                options: ["Exposure is a Risk Factor", "Exposure is Protective", "Result is Not Statistically Significant", "Bias is present"],
                explain: "Correct: B. RR < 1 indicates protection. Since the CI (0.4-0.9) does NOT include 1.0, it is statistically significant."
            },
            {
                q: "<strong>Visual Bias Drill:</strong><br>Two groups are compared. Group A has mean age 20. Group B has mean age 60. You find higher death rates in B. This is likely:",
                answer: 0,
                type: "mc",
                topic: "Chapter 11",
                options: ["Confounding by Age", "Selection Bias", "Recall Bias", "Observer Bias"],
                explain: "Correct: A. Age is related to both the group assignment and the outcome (death), making it a classic confounder."
            }
        ],
        part3: [
            {
                q: "<strong>Chain of Infection Visual:</strong><br>Reservoir -> Portal of Exit -> ??? -> Portal of Entry.<br>What is the missing link?",
                answer: 0,
                type: "mc",
                topic: "Chapter 15",
                options: ["Mode of Transmission", "Susceptible Host", "Agent", "Vector"],
                explain: "Correct: A. The agent must travel from the exit to the entry via a Mode of Transmission."
            },
            {
                q: "Ethical Dilemma:<br>A student has active Measles (Airborne). Which action is least restrictive but effective?",
                answer: 1,
                type: "mc",
                topic: "Chapter 17",
                options: ["Quarantine the whole school", "Isolate the student at home", "Monitor temperature only", "Do nothing"],
                explain: "Correct: B. Isolation restricts the sick individual. Quarantine restricts healthy/exposed. Whole school quarantine is too restrictive initially."
            }
        ]
    };

    // Inject
    if (QUIZ_BANKS.part1) QUIZ_BANKS.part1.advanced.push(...newQuestions.part1);
    if (QUIZ_BANKS.part2) QUIZ_BANKS.part2.intermediate.push(...newQuestions.part2);
    if (QUIZ_BANKS.part3) QUIZ_BANKS.part3.beginner.push(...newQuestions.part3);

})();
