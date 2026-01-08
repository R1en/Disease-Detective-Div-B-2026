/**
 * Quiz Explanation Upgrades
 * Replaces brief "Correct: X" explanations with detailed educational content
 */

window.QUIZ_EXPLANATION_UPGRADES = {
    upgrades: [
        // Chapter 8: Outbreak Patterns
        {
            match: "Correct: B. Mixed = common source + propagation.",
            upgrade: "MIXED OUTBREAK: Starts with a common-source exposure (initial spike), then continues with person-to-person spread (subsequent waves). Example: A food handler contaminates food (initial cases), then infected people spread to household contacts. The timing of peaks helps identify the dual mechanism."
        },
        {
            match: "Correct: B.",
            context: "Multiple peaks spaced by incubation",
            upgrade: "PROPAGATED OUTBREAK: Person-to-person transmission creates successive waves of cases. Each peak represents a new 'generation' of cases infected by the previous wave. The interval between peaks approximately equals the pathogen's INCUBATION PERIOD. This pattern rules out common-source exposure."
        },
        {
            match: "Correct: Case definitions require objective criteria.",
            upgrade: "Case definitions must be OBJECTIVE and REPRODUCIBLE. They include: (1) Clinical criteria (specific symptoms/signs), (2) Laboratory criteria (test results), (3) Epidemiologic criteria (time, place, person). Personal opinions or subjective assessments are NEVER part of case definitions because different investigators might interpret them differently."
        },
        {
            match: "Correct: Classic descriptive triad.",
            upgrade: "The descriptive epidemiology triad: PERSON (who is affected - age, sex, occupation, risk factors), PLACE (geographic distribution - neighborhood, facility, environmental features), TIME (when - onset dates, temporal patterns, seasonality). This triad generates hypotheses for analytic testing."
        },
        {
            match: "Correct: Early control occurs immediately with credible evidence.",
            upgrade: "URGENT: Control measures should NOT wait for complete investigation. When epidemiological evidence strongly implicates a food item, water source, or other exposure, REMOVE IT IMMEDIATELY. The precautionary principle applies - waiting for laboratory confirmation while the source continues to cause illness is unethical."
        },
        // Chapter 10: Study Designs
        {
            match: "Correct: Cohort = forward direction based on exposure.",
            upgrade: "COHORT STUDIES follow groups defined by EXPOSURE status forward in time to measure disease incidence. This establishes temporal sequence (exposure precedes disease), allows calculation of true incidence rates and Risk Ratios, and can examine multiple outcomes from one exposure. Limitation: expensive and time-consuming for rare diseases."
        },
        {
            match: "Correct: OR required because denominators forced.",
            upgrade: "In CASE-CONTROL studies, you SELECT based on OUTCOME (disease status), not exposure. You purposely choose a set number of cases and controls, so the disease proportion in your study is artificial. You CANNOT calculate true incidence or Risk Ratio. The Odds Ratio is the valid measure because it compares exposure odds between groups."
        },
        {
            match: "Correct: Cross-sectional measures prevalence.",
            upgrade: "CROSS-SECTIONAL studies measure exposure and disease at the SAME POINT IN TIME (a 'snapshot'). They measure PREVALENCE (existing cases / total population), NOT incidence. Limitation: Cannot establish temporal sequence - you don't know if exposure came before disease."
        },
        {
            match: "Correct: Temporal clarity.",
            upgrade: "The PRIMARY advantage of cohort studies is establishing TEMPORAL SEQUENCE - you KNOW exposure occurred BEFORE disease because you measure exposure first, then follow for outcomes. This temporal clarity is essential for causal inference and is impossible in cross-sectional or retrospective case-control designs."
        },
        // Chapter 11: Bias & Error
        {
            match: "Correct: Volunteers ? source population ? selection bias.",
            upgrade: "SELECTION BIAS (specifically 'healthy volunteer bias'): People who volunteer for studies systematically differ from the general population. 'Healthy Lifestyle Club' members are likely healthier, more educated, and more health-conscious than average. Results cannot be generalized to the broader population."
        },
        {
            match: "Correct: Dilutes association.",
            upgrade: "NON-DIFFERENTIAL MISCLASSIFICATION (equal error in cases and controls) typically BIASES TOWARD THE NULL (toward RR/OR = 1.0). Random errors 'wash out' and dilute the true association. Key exception: If exposure has >2 categories, non-differential misclassification can bias in either direction."
        },
        {
            match: "Correct: Instability = random error.",
            upgrade: "RANDOM ERROR results from chance variation and produces unstable, imprecise estimates. Common causes: small sample size, sampling variability. Unlike bias (systematic error), random error does NOT push results consistently in one direction. Solution: increase sample size to narrow confidence intervals."
        },
        {
            match: "Correct: Validity = accuracy.",
            upgrade: "VALIDITY = ACCURACY: A measure is valid if it correctly measures what it's supposed to measure. A valid study has minimal bias. Compare to RELIABILITY (precision/consistency) - a measure can be reliable but NOT valid (consistently wrong). We need BOTH for quality research."
        },
        {
            match: "Correct: Consistent error.",
            upgrade: "HIGH RELIABILITY + LOW VALIDITY: The measure gives consistent results (reliable/precise) but those results are consistently WRONG (not valid/not accurate). Example: A scale that always reads 5 lbs too high - very reliable, very predictable, but not valid. In epidemiology, this indicates systematic bias."
        },
        // Chapter 12: Screening
        {
            match: "Sensitivity = TP / (TP + FN) = 90%.",
            upgrade: "SENSITIVITY = TP / (TP + FN) = 90/100 = 90%. Sensitivity answers: 'Of all people WHO HAVE THE DISEASE, what percentage did the test correctly identify?' High sensitivity = few FALSE NEGATIVES = good for RULING OUT disease (SnNout). A negative result from a highly sensitive test means you probably don't have the disease."
        },
        {
            match: "Specificity = TN/(TN+FP) = 35/45 = 78%.",
            upgrade: "SPECIFICITY = TN / (TN + FP) = 35/45 = 77.8%. Specificity answers: 'Of all people WITHOUT DISEASE, what percentage did the test correctly identify as negative?' High specificity = few FALSE POSITIVES = good for RULING IN disease (SpPin). A positive result from a highly specific test means you probably have the disease."
        },
        {
            match: "PPV = P(disease | positive test).",
            upgrade: "POSITIVE PREDICTIVE VALUE = TP / (TP + FP). PPV answers the CLINICAL question: 'Given a POSITIVE test result, what is the probability my patient actually HAS the disease?' CRITICAL: PPV depends heavily on PREVALENCE. The same test has LOWER PPV in low-prevalence populations (more false positives relative to true positives)."
        },
        {
            match: "Correct: Screening = early detection.",
            upgrade: "SCREENING = detecting disease in ASYMPTOMATIC individuals at an early, more treatable stage. Key principles: (1) Disease must have a detectable preclinical phase, (2) Early treatment must improve outcomes, (3) Screening test must be acceptable, safe, and affordable. Screening is NOT diagnostic - positive screens require confirmatory testing."
        },
        // Chapter 4: Incidence & Prevalence
        {
            match: "Correct: Prevalence shows how many people need care right now.",
            upgrade: "PREVALENCE is essential for HEALTHCARE PLANNING because it tells you how many people currently have a disease and need care, treatment, or services. Example: To plan dialysis capacity, you need to know how many people currently have end-stage renal disease (prevalence), not how many new cases occur each year (incidence)."
        },
        {
            match: "Correct: Incidence tracks new cases, linking them directly to recent exposures.",
            upgrade: "INCIDENCE is essential for ETIOLOGICAL research because it directly links NEW CASES to recent EXPOSURES. If exposure causes disease, exposed people should have HIGHER INCIDENCE than unexposed people. Prevalence is confounded by disease duration - even harmful exposures might show low prevalence if they cause rapid death."
        },
        // Transmission
        {
            match: "Correct: Indirect contact via fomite. Trap: Students confuse shared objects with droplets.",
            upgrade: "FOMITE (indirect contact) transmission: Pathogens spread via contaminated OBJECTS (doorknobs, toys, phones). The touchscreen scenario = fomite transmission. COMMON TRAP: Students confuse fomites with droplet transmission. Droplets require close proximity to an infected person who coughs/sneezes. Touching a surface is NEVER droplet transmission."
        },
        {
            match: "Correct: Measles is airborne. Trap: Distance reveals the true mode.",
            upgrade: "MEASLES is TRUE AIRBORNE - virus particles can remain suspended in air for up to 2 HOURS after an infected person leaves the room. The waiting room scenario (infection through shared air space without direct contact) = AIRBORNE. Key distinction: Droplets fall within 3-6 feet; airborne particles travel long distances and persist in air."
        }
    ]
};

// Integration Logic
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (!window.QUIZ_BANKS) {
                console.warn('[EXPLANATION UPGRADES] QUIZ_BANKS not found');
                return;
            }

            let upgradeCount = 0;
            const upgrades = window.QUIZ_EXPLANATION_UPGRADES.upgrades;

            // Search through all quiz parts and difficulties
            ['part1', 'part2', 'part3'].forEach(part => {
                if (!window.QUIZ_BANKS[part]) return;

                ['beginner', 'intermediate', 'advanced'].forEach(difficulty => {
                    if (!window.QUIZ_BANKS[part][difficulty]) return;

                    window.QUIZ_BANKS[part][difficulty].forEach(question => {
                        upgrades.forEach(upg => {
                            if (question.explain && question.explain.includes(upg.match)) {
                                // If there's a context requirement, check it
                                if (upg.context) {
                                    const hasContext = question.options &&
                                        question.options.some(opt => opt.includes(upg.context));
                                    if (!hasContext) return;
                                }
                                question.explain = upg.upgrade;
                                upgradeCount++;
                            }
                        });
                    });
                });
            });

            // Also update aggregated pool
            if (window.AGGREGATED_QUIZ_POOL) {
                window.AGGREGATED_QUIZ_POOL.forEach(question => {
                    upgrades.forEach(upg => {
                        if (question.explain && question.explain.includes(upg.match)) {
                            if (upg.context) {
                                const hasContext = question.options &&
                                    question.options.some(opt => opt.includes(upg.context));
                                if (!hasContext) return;
                            }
                            question.explain = upg.upgrade;
                        }
                    });
                });
            }

            console.log(`[EXPLANATION UPGRADES] Enhanced ${upgradeCount} brief explanations with detailed content`);
        }, 800);
    });
})();
