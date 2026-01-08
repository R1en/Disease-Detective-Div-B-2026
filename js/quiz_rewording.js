/**
 * Quiz Question Professional Rewording
 * Replaces casual question stems with professional, exam-style phrasing
 * Integrates on load by finding and updating matching questions
 */

window.QUIZ_REWORDING = {
    replacements: [
        // CASUAL -> PROFESSIONAL rewording
        {
            original: "Risk difference is most useful when:",
            reworded: "In which situation is Risk Difference (Attributable Risk) the MOST appropriate measure to use?",
            explain_upgrade: "Risk Difference (RD) quantifies the absolute excess risk attributable to an exposure. It is most valuable for public health planning because it directly estimates the number of cases that could be prevented by eliminating the exposure."
        },
        {
            original: "Initial spike followed by waves. Pattern?",
            reworded: "An epidemic curve shows an initial sharp spike in cases, followed by progressively smaller peaks at regular intervals. This pattern is BEST described as:",
            explain_upgrade: "This 'mixed' epidemic pattern indicates a common-source exposure that triggered secondary person-to-person (propagated) transmission. The initial spike represents the point-source exposure, while subsequent waves represent generation times of the pathogen."
        },
        {
            original: "Propagated outbreaks generally produce:",
            reworded: "Which epidemic curve pattern is characteristic of a propagated (person-to-person) outbreak?",
            explain_upgrade: "Propagated outbreaks display multiple peaks separated by the incubation period of the pathogen. Each peak represents a new 'generation' of cases infected by the previous one. The interval between peaks equals approximately one incubation period."
        },
        {
            original: "Which pattern suggests a slowly leaking water source?",
            reworded: "An epidemic curve showing a gradual rise in cases, a prolonged plateau, and a slow decline is MOST consistent with which type of outbreak?",
            explain_upgrade: "A continuous common-source outbreak (e.g., contaminated water supply, ongoing food contamination) produces this plateau pattern. Cases continue as long as exposure continues. The curve drops after the source is removed, with a tail equal to one incubation period."
        },
        {
            original: "Which is NOT part of a standard case definition?",
            reworded: "All of the following are components of a standardized case definition EXCEPT:",
            explain_upgrade: "A case definition includes: (1) Clinical criteria (symptoms/signs), (2) Laboratory criteria (confirmation), (3) Epidemiologic criteria (person, place, time), and (4) Case classification (confirmed, probable, suspected). Personal opinions and subjective judgments are NOT part of case definitions."
        },
        {
            original: "Descriptive epidemiology summarizes:",
            reworded: "The primary purpose of descriptive epidemiology is to characterize outbreaks by which three fundamental elements?",
            explain_upgrade: "Descriptive epidemiology summarizes data by the classic triad: PERSON (who is affected - age, sex, occupation), PLACE (where - geographic distribution), and TIME (when - temporal trends, seasonality). This forms the foundation for hypothesis generation."
        },
        {
            original: "Most appropriate EARLY control measure?",
            reworded: "During the initial phase of a foodborne outbreak investigation with strong epidemiological evidence linking illness to a specific food item, which control measure should be implemented FIRST?",
            explain_upgrade: "Early control measures should be implemented based on credible epidemiological evidence, even before laboratory confirmation. Removing suspected food from distribution protects the public immediately. Waiting for final results may allow additional exposures."
        },
        {
            original: "Case-control studies primarily use which measure?",
            reworded: "Which measure of association is PRIMARILY used in case-control studies, and why?",
            explain_upgrade: "Case-control studies use the Odds Ratio (OR) because participants are selected based on disease status (not exposure), making the true incidence in the population unknown. The OR approximates the Risk Ratio when disease prevalence is low (<10%)."
        },
        {
            original: "Major strength of cohort studies:",
            reworded: "What is the PRIMARY methodological advantage of a prospective cohort study compared to other observational designs?",
            explain_upgrade: "Cohort studies establish clear temporal sequence - exposure is measured BEFORE disease occurs. This temporal clarity strengthens causal inference and allows calculation of true incidence rates and Risk Ratios."
        },
        {
            original: "Study uses volunteers from a 'Healthy Lifestyle Club.' Bias?",
            reworded: "Researchers recruit study participants from a 'Healthy Lifestyle and Wellness Club.' This sampling approach is MOST likely to introduce which type of bias?",
            explain_upgrade: "This is selection bias (specifically, volunteer/healthy volunteer bias). Club members likely differ systematically from the general population in health behaviors, baseline health status, and health consciousness, limiting generalizability of findings."
        },
        {
            original: "Non-differential misclassification usually:",
            reworded: "When exposure misclassification occurs equally among cases and controls (non-differential), the MOST common effect on the measure of association is:",
            explain_upgrade: "Non-differential misclassification typically biases the result TOWARD the null (toward RR/OR = 1.0), diluting or obscuring true associations. This is because the 'noise' from random errors averages out, weakening the observed effect."
        },
        {
            original: "Random error example:",
            reworded: "Which of the following scenarios BEST illustrates the effect of random error in epidemiological studies?",
            explain_upgrade: "Random error results from chance variation, often due to small sample size. It produces unstable, imprecise estimates that vary from study to study. Unlike bias, random error does not systematically push results in one direction."
        },
        {
            original: "PPV answers:",
            reworded: "Positive Predictive Value (PPV) answers which clinical question?",
            explain_upgrade: "PPV answers: 'If my patient tests POSITIVE, what is the probability they actually HAVE the disease?' PPV = TP/(TP+FP). It depends heavily on disease prevalence - the same test has lower PPV in low-prevalence populations."
        },
        {
            original: "TP=50, FP=10, FN=5, TN=35. Specificity?",
            reworded: "<p>A diagnostic test is evaluated with the following results:</p><table class='exam-table'><tr><th></th><th>Disease +</th><th>Disease -</th></tr><tr><td>Test +</td><td>50</td><td>10</td></tr><tr><td>Test -</td><td>5</td><td>35</td></tr></table><p>Calculate the SPECIFICITY of this test:</p>",
            explain_upgrade: "Specificity = TN / (TN + FP) = 35 / (35 + 10) = 35/45 = 77.8%. Specificity measures the test's ability to correctly identify those WITHOUT disease (true negative rate). A highly specific test has few false positives."
        },
        {
            original: "Main purpose of screening:",
            reworded: "What is the PRIMARY public health purpose of implementing a screening program?",
            explain_upgrade: "Screening programs aim to detect disease (or risk factors) EARLY in asymptomatic individuals, when intervention is more effective. Screening is NOT diagnostic - positive screens require confirmatory testing."
        },
        {
            original: "Risk ratio comparing chicken eaters to non-eaters?",
            reworded: "<p>In an outbreak investigation, the following data are collected:</p><ul><li>30 people ate chicken: 9 became ill</li><li>20 people did NOT eat chicken: 2 became ill</li></ul><p>What is the correct formula for calculating the Risk Ratio (RR)?</p>",
            explain_upgrade: "RR = Attack Rate (exposed) / Attack Rate (unexposed) = (9/30) / (2/20) = 0.30 / 0.10 = 3.0. This means chicken eaters had 3 times the risk of illness compared to non-eaters."
        },
        {
            original: "Odds ratio formula:",
            reworded: "In a 2×2 table with cells labeled a, b, c, d (where a = exposed cases, b = exposed controls, c = unexposed cases, d = unexposed controls), the Odds Ratio is calculated as:",
            explain_upgrade: "OR = (a × d) / (b × c). This cross-product ratio compares the odds of exposure among cases to the odds of exposure among controls. When disease is rare (<10%), OR approximates RR."
        },
        {
            original: "Correct 2×2 layout:",
            reworded: "In the standard 2×2 contingency table used for outbreak analysis, the correct orientation places:",
            explain_upgrade: "The standard orientation places EXPOSURE as rows (exposed/unexposed) and OUTCOME as columns (ill/not ill). Cell 'a' (top-left) represents exposed cases. This layout allows direct reading of attack rates by exposure status."
        },
        {
            original: "Odds among exposed is:",
            reworded: "In calculating odds for exposed individuals, the correct formula divides:",
            explain_upgrade: "Odds = Number with outcome / Number without outcome (among exposed). Unlike risk (which uses total as denominator), odds compare events to non-events directly. Odds of 2:1 means 2 cases for every 1 non-case."
        },
        // Additional Part 2 casual questions
        {
            original: "Which is an RCT example?",
            reworded: "Which of the following scenarios BEST describes a randomized controlled trial (RCT)?",
            explain_upgrade: "An RCT requires that researchers randomly assign participants to exposure/treatment groups. Random assignment is the defining feature that distinguishes RCTs from observational studies and minimizes selection bias."
        },
        {
            original: "Case-control studies are best for:",
            reworded: "Case-control studies are the MOST efficient design for investigating which type of disease?",
            explain_upgrade: "Case-control studies excel at investigating RARE diseases because they start with cases (who already have the disease) rather than waiting for disease to occur. This makes them faster and more cost-effective than cohort studies for rare outcomes."
        },
        {
            original: "Validity means:",
            reworded: "In epidemiological research, the term 'validity' refers to:",
            explain_upgrade: "Validity (accuracy) indicates whether a measurement reflects the true value. A valid measure is free from systematic error (bias). This differs from reliability (precision/consistency), which can be high even if the measure is consistently wrong."
        },
        {
            original: "If specificity = 80%, false positive rate = ?",
            reworded: "If a screening test has a specificity of 80%, what is the false positive rate?",
            explain_upgrade: "False Positive Rate = 1 - Specificity = 1 - 0.80 = 0.20 = 20%. Specificity measures true negatives among those without disease; its complement is the false positive rate. A test that is 80% specific will incorrectly label 20% of healthy people as positive."
        },
        // Part 1 casual questions
        {
            original: "Which sequence is correct?",
            reworded: "Place the following stages of disease in the correct chronological order:",
            explain_upgrade: "The natural history of disease follows: Exposure → Incubation Period → Symptom Onset → Clinical Illness → Outcome (recovery, disability, or death). Understanding this sequence is fundamental to outbreak investigation and control timing."
        },
        {
            original: "Wearing a bike helmet is:",
            reworded: "Wearing a bicycle helmet to prevent head injuries is an example of which level of prevention?",
            explain_upgrade: "Primary prevention stops disease/injury BEFORE it occurs. Helmets prevent head trauma from happening in the first place. Secondary prevention = early detection (screening). Tertiary prevention = reducing complications of existing disease."
        },
        {
            original: "Exercise ? better grades, but exercise linked to more sleep. Confounder?",
            reworded: "A study finds that students who exercise more have better grades. However, students who exercise also tend to get more sleep. In this scenario, what is the potential confounding variable?",
            explain_upgrade: "Sleep is the confounder because it is: (1) associated with the exposure (exercise), (2) associated with the outcome (grades), and (3) not on the causal pathway. Sleep might explain the apparent exercise-grades relationship."
        },
        {
            original: "Consistent but incorrect survey answers indicate:",
            reworded: "Survey respondents consistently give the same answer, but the answer does not reflect their true behavior. This pattern indicates:",
            explain_upgrade: "High reliability (consistency) with low validity (accuracy). The measure is precise but not accurate - like a scale that always reads 5 pounds too heavy. In epidemiology, we need BOTH reliability AND validity."
        },
        // Additional epidemic curve questions
        {
            original: "Cases rise over 10 days, plateau 10 days, drop when water filter repaired. Pattern?",
            reworded: "An epidemic curve shows cases rising over 10 days, plateauing for 10 days, then dropping sharply when a water filter is repaired. This pattern is MOST consistent with:",
            explain_upgrade: "CONTINUOUS COMMON-SOURCE: Ongoing exposure produces a plateau; removal of the source causes the curve to drop (with a 'tail' of one incubation period). The abrupt decline matches intervention timing."
        },
        {
            original: "Exposure at noon Friday. Onsets: 6 PM, 9 PM, midnight. Incubation range?",
            reworded: "Guests at a party ate lunch at 12:00 PM Friday. Symptom onset times were 6:00 PM, 9:00 PM, and midnight. What is the incubation period RANGE for this outbreak?",
            explain_upgrade: "Incubation = time from exposure to symptom onset. 12:00 PM to 6:00 PM = 6 hours (minimum). 12:00 PM to midnight = 12 hours (maximum). Range = 6-12 hours, suggesting toxin-mediated illness (Staph aureus, B. cereus)."
        },
        {
            original: "Slow rise, broad peak for weeks, slow decline. Pattern?",
            reworded: "An outbreak displays a gradual increase in cases over several days, a broad peak lasting weeks, followed by a slow decline. This epidemic curve pattern is MOST consistent with:",
            explain_upgrade: "CONTINUOUS COMMON-SOURCE: Prolonged/ongoing exposure creates this extended curve. Examples: contaminated water supply, ongoing food source. The slow decline occurs as the population develops immunity or exposure decreases."
        },
        {
            original: "Median onset = 36h; incubation = 24-72h. Approx exposure?",
            reworded: "In a point-source outbreak, the median symptom onset is 36 hours after a suspected exposure event. The known incubation period for this pathogen is 24-72 hours. What is the BEST estimate for the exposure time?",
            explain_upgrade: "Use median onset and work backwards by median incubation. The median incubation (36 hours) matches the median onset time, confirming the suspected event. For unknown exposures: Exposure = Median Onset - Median Incubation."
        },
        {
            original: "Sharp initial peak (food event) + two peaks 4 days apart. Pattern?",
            reworded: "An epidemic curve shows a sharp initial peak following a catered event, followed by two smaller peaks spaced 4 days apart. This pattern is MOST consistent with:",
            explain_upgrade: "MIXED OUTBREAK: Initial peak = point-source (food event). Subsequent peaks = secondary person-to-person transmission. The 4-day interval between secondary peaks approximates the pathogen's incubation period."
        },
        {
            original: "Exposure 8 AM. Onsets: 2 PM, 3 PM, 5 PM, 6 PM. Incubation?",
            reworded: "A group was exposed to a suspected contaminated food at 8:00 AM. Symptom onset times were 2:00 PM, 3:00 PM, 5:00 PM, and 6:00 PM. What is the incubation period RANGE?",
            explain_upgrade: "Calculate each: 8 AM to 2 PM = 6 hours (minimum). 8 AM to 6 PM = 10 hours (maximum). Range = 6-10 hours. This short incubation suggests toxin-mediated illness (Staph aureus preformed toxin or B. cereus emetic toxin)."
        },
        {
            original: "Which statement is correct?",
            reworded: "Which of the following statements about Risk Ratio (RR) and Risk Difference (RD) is CORRECT?",
            explain_upgrade: "When RR > 1 AND RD > 0, both indicate the exposure is HARMFUL (increased risk). When RR < 1 AND RD < 0, both indicate PROTECTION. The measures should align in direction; if they don't, check your calculations."
        },
        // More casual phrasing fixes
        {
            original: "Which metric tells you how deadly a disease is (severity)?",
            reworded: "Which epidemiological metric is BEST for assessing the SEVERITY (lethality) of a disease?",
            explain_upgrade: "Case Fatality Rate (CFR) = Deaths / Cases. CFR measures what proportion of DISEASED people die, directly indicating disease severity. Compare to mortality rate, which measures deaths in the entire population (not just cases)."
        },
        {
            original: "A disease has CFR = 90% but mortality rate = 0.5 per 100,000. What does this suggest?",
            reworded: "A disease has a Case Fatality Rate (CFR) of 90% but a mortality rate of only 0.5 per 100,000 population. What does this combination suggest about the disease?",
            explain_upgrade: "The disease is extremely DEADLY (90% of cases die) but very RARE (few cases occur). Example: Rabies - nearly 100% fatal once symptoms appear, but very few cases in the US. High CFR + Low mortality = rare but deadly disease."
        },
        {
            original: "Hospitals report new flu cases weekly. Surveillance type?",
            reworded: "Hospitals submit weekly reports of new influenza cases to the health department. What type of surveillance system is this?",
            explain_upgrade: "PASSIVE SURVEILLANCE: Healthcare providers report cases to health authorities. It's inexpensive but depends on provider compliance, potentially missing cases. Compare to ACTIVE surveillance where health officials seek out cases."
        },
        {
            original: "An epi curve with several distinct peaks separated by 7 days relates to:",
            reworded: "An epidemic curve displays several distinct peaks, each separated by approximately 7 days. This pattern is MOST consistent with:",
            explain_upgrade: "PROPAGATED OUTBREAK with serial transmission. The 7-day interval represents the incubation period of the pathogen. Each peak = a new 'generation' of cases infected by the previous generation."
        },
        {
            original: "AR exposed = 60%, AR unexposed = 20%. Calculate RR.",
            reworded: "In an outbreak investigation, the Attack Rate among exposed persons is 60% and the Attack Rate among unexposed persons is 20%. Calculate the Risk Ratio (RR).",
            explain_upgrade: "RR = AR(exposed) / AR(unexposed) = 60% / 20% = 0.60 / 0.20 = 3.0. Interpretation: Exposed persons had 3 TIMES the risk of illness compared to unexposed persons. This suggests a strong association with the exposure."
        },
        {
            original: "Confounding requires:",
            reworded: "For a variable to be a CONFOUNDER, it must satisfy which of the following criteria?",
            explain_upgrade: "A confounder must be: (1) Associated with the EXPOSURE, (2) Associated with the OUTCOME, and (3) NOT on the causal pathway between exposure and outcome. All three criteria must be met. Stratified analysis or matching can control for confounders."
        },
        {
            original: "Stratification is used to:",
            reworded: "In epidemiological analysis, stratification is PRIMARILY used to:",
            explain_upgrade: "Stratification separates data into subgroups (strata) based on potential confounders to assess whether the association differs across strata. It allows identification and control of confounding without statistical modeling."
        },
        {
            original: "Attack rate formula:",
            reworded: "The Attack Rate (AR) is calculated using which formula?",
            explain_upgrade: "Attack Rate = (Number of new cases / Population at risk) × 100. It's a form of incidence used specifically in outbreak investigations. The denominator includes only those 'at risk' - exclude those already immune or unexposed."
        },
        {
            original: "What is a case definition?",
            reworded: "In outbreak investigation, a case definition serves which PRIMARY purpose?",
            explain_upgrade: "A case definition provides STANDARDIZED, OBJECTIVE criteria for classifying who is a 'case' in an outbreak. It includes clinical criteria (symptoms), time/place restrictions, and case classifications (confirmed, probable, suspected). This ensures consistent case counting."
        },
        {
            original: "Point source outbreaks have:",
            reworded: "Which of the following is a characteristic feature of a POINT-SOURCE outbreak?",
            explain_upgrade: "Point-source outbreaks have a single, brief exposure event affecting multiple people simultaneously. The epidemic curve shows a sharp rise and fall within one incubation period. All cases can be traced to the same moment of exposure."
        },
        {
            original: "Which is passive surveillance?",
            reworded: "Which of the following is an example of PASSIVE surveillance?",
            explain_upgrade: "Passive surveillance relies on healthcare providers to VOLUNTARILY report cases to health authorities. Examples: mandated disease reporting, hospital discharge records. Advantages: inexpensive, broad coverage. Limitations: underreporting, incomplete data."
        },
        {
            original: "Active surveillance means:",
            reworded: "Active surveillance is BEST characterized by which approach?",
            explain_upgrade: "Active surveillance involves health officials ACTIVELY seeking cases through regular contact with healthcare providers, laboratory surveillance, or community surveys. It's more complete but more labor-intensive and expensive than passive surveillance."
        },
        {
            original: "Person, place, time describes:",
            reworded: "The \"Person, Place, Time\" triad is the foundation of which epidemiological approach?",
            explain_upgrade: "DESCRIPTIVE EPIDEMIOLOGY characterizes disease patterns by WHO (person - demographics, risk factors), WHERE (place - geographic distribution), and WHEN (time - trends, seasonality). This generates hypotheses for analytic studies."
        },
        {
            original: "Incubation period is:",
            reworded: "The incubation period is defined as the time interval between:",
            explain_upgrade: "Incubation period = time from EXPOSURE (infection) to SYMPTOM ONSET. It varies by pathogen (hours for toxins to weeks for some viruses). Knowing incubation helps identify point-source exposures and predict outbreak course."
        },
        {
            original: "What does RR = 1.0 mean?",
            reworded: "If the Risk Ratio (RR) equals 1.0, how should this finding be interpreted?",
            explain_upgrade: "RR = 1.0 is the NULL VALUE, indicating NO ASSOCIATION between exposure and outcome. Exposed and unexposed groups have IDENTICAL risk. The exposure neither increases nor decreases disease risk."
        },
        {
            original: "OR > 1 indicates:",
            reworded: "When the Odds Ratio (OR) is greater than 1.0, this indicates:",
            explain_upgrade: "OR > 1.0 indicates the exposure is associated with INCREASED odds of disease (positive/harmful association). OR < 1.0 = protective association. OR = 1.0 = no association. The further from 1.0, the stronger the association."
        }
    ]
};

// Integration Logic
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (!window.QUIZ_BANKS) {
                console.warn('[QUIZ REWORDING] QUIZ_BANKS not found');
                return;
            }

            let updateCount = 0;
            const replacements = window.QUIZ_REWORDING.replacements;

            // Search through all quiz parts and difficulties
            ['part1', 'part2', 'part3'].forEach(part => {
                if (!window.QUIZ_BANKS[part]) return;

                ['beginner', 'intermediate', 'advanced'].forEach(difficulty => {
                    if (!window.QUIZ_BANKS[part][difficulty]) return;

                    window.QUIZ_BANKS[part][difficulty].forEach(question => {
                        replacements.forEach(repl => {
                            // Check if this question matches the original casual phrasing
                            if (question.q && question.q.includes(repl.original)) {
                                question.q = repl.reworded;
                                if (repl.explain_upgrade) {
                                    question.explain = repl.explain_upgrade;
                                }
                                updateCount++;
                            }
                        });
                    });
                });
            });

            // Also update aggregated pool
            if (window.AGGREGATED_QUIZ_POOL) {
                window.AGGREGATED_QUIZ_POOL.forEach(question => {
                    replacements.forEach(repl => {
                        if (question.q && question.q.includes(repl.original)) {
                            question.q = repl.reworded;
                            if (repl.explain_upgrade) {
                                question.explain = repl.explain_upgrade;
                            }
                        }
                    });
                });
            }

            console.log(`[QUIZ REWORDING] Upgraded ${updateCount} casual questions to professional format`);
        }, 700);
    });
})();
