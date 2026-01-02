/**
 * Epidemic Engine - Extensions Module
 * Consolidates patches and updates from Phase 1, Phase 5, and Phase 6.
 * 
 * Includes:
 * - Flashcard Data (Phase 1)
 * - Content Injections for Ch4, Ch7, Appendix (Phase 1 & 6)
 * - UI Tweaks (Phase 5)
 */

(function () {
    console.log('Epidemic Engine Extensions [v4.0-init] loading...');

    // ==========================================
    // SECTION 1: Flashcards Data (from Phase 1)
    // ==========================================
    const newFlashcards = [
        { "front": "What is epidemiology?", "back": "The study of the distribution and determinants of health-related states or events in specified populations." },
        { "front": "Define outbreak.", "back": "An unexpected increase in cases of a disease in a population at a specific time." },
        { "front": "What is incidence rate?", "back": "Number of new cases in a defined population during a specific period, divided by the population at risk." },
        { "front": "What does endemic mean?", "back": "The constant presence and/or usual prevalence of a disease within a geographic area." },
        { "front": "What is active surveillance?", "back": "Ongoing, proactive data collection—health department solicits reports from facilities." },
        { "front": "Give the formula for Relative Risk (RR).", "back": "RR = (attack rate in exposed) / (attack rate in unexposed)." },
        { "front": "Name two analytic study types.", "back": "Case-control and cohort studies." },
        { "front": "What’s the first step in outbreak investigation?", "back": "Verify diagnosis and confirm the outbreak." },
        { "front": "What is a confounder?", "back": "A variable that influences both the dependent and independent variable, causing a spurious association." },
        { "front": "What does epidemic curve show?", "back": "The distribution of onset of illness among cases to determine time, place, and mode of exposure." },
        { "front": "What is passive surveillance?", "back": "Disease reporting initiated by health care providers on patient diagnosis, not actively sought by health department." },
        { "front": "Define notifiable disease.", "back": "A disease that, by law, must be reported to public health authorities when diagnosed." },
        { "front": "What is an epidemic?", "back": "An increase, often sudden, in the number of cases of a disease above what is normally expected." },
        { "front": "Pandemic definition?", "back": "An epidemic occurring over a very wide area, crossing international boundaries, and usually affecting a large number of people." },
        { "front": "Attack rate formula?", "back": "(Number of new cases among population during a period) / (Number of people at risk in the population at start of period)." },
        { "front": "Define point source outbreak.", "back": "An outbreak where all cases are exposed at about the same time, usually from a single source." },
        { "front": "What is secondary attack rate?", "back": "The spread of disease in a household or closed population where primary and secondary cases are defined." },
        { "front": "What is a zoonosis?", "back": "A disease that can be transmitted from animals to humans." },
        { "front": "What generates the “case definition”?", "back": "A set of clinical and/or epidemiologic criteria used to decide whether a person's illness counts as a case in an outbreak investigation." },
        { "front": "Give an example of primary prevention.", "back": "Immunization." },
        { "front": "What is surveillance bias?", "back": "The tendency for increased detection of a disease or condition because surveillance (monitoring) is more intensive for a particular group." },
        { "front": "Describe confounding.", "back": "When the relationship between an exposure and outcome is confused or distorted by a third variable." },
        { "front": "What is a reservoir?", "back": "The habitat in which an infectious agent normally lives, grows, and multiplies." },
        { "front": "Define “host” in epi triad.", "back": "A person or animal that provides subsistence or lodgment to an infectious agent." },
        { "front": "Define “agent” in epi triad.", "back": "A microbe or pathogen that causes the disease." },
        { "front": "Define “environment” in epi triad.", "back": "External factors that allow disease transmission, survival of agent, and susceptibility of host." },
        { "front": "What is a vector?", "back": "Any living carrier that transports an infectious agent from an infected individual or its wastes to a susceptible individual." },
        { "front": "What is herd immunity?", "back": "Protection of susceptible individuals in a population due to a high proportion of immune individuals." },
        { "front": "What is a risk factor?", "back": "An aspect of personal behavior, lifestyle, or exposure that increases likelihood of disease or injury." },
        { "front": "Define incubation period.", "back": "The time interval between initial exposure to an infectious agent and the appearance of symptoms." },
        { "front": "What is prevalence?", "back": "The total number of cases (new + existing) of a disease in a population at a given time." },
        { "front": "What does case fatality rate mean?", "back": "Proportion of persons with a particular condition who die from that condition." },
        { "front": "Define odds ratio (OR).", "back": "The odds of exposure among cases divided by the odds of exposure among controls." },
        { "front": "Give an example of “sentinel surveillance.”", "back": "Monitoring a selected group of reporting sites or facilities." },
        { "front": "What is cross-sectional study?", "back": "A study where data are collected on exposure and outcome at the same moment in time." },
        { "front": "What is recall bias?", "back": "Systematic error caused by differences in accuracy or completeness of participant recollections." },
        { "front": "Define relative risk (RR).", "back": "Measure of the risk of a certain event happening in one group compared to another." },
        { "front": "What is specificity (in testing)?", "back": "The ability of a test to correctly identify those without disease (true negative rate)." },
        { "front": "What is sensitivity?", "back": "The ability of a test to correctly identify those with the disease (true positive rate)." },
        { "front": "Define surveillance system.", "back": "An ongoing, systematic collection, analysis, and interpretation of health data." },
        { "front": "What is an epidemic curve used for?", "back": "To describe the magnitude and pattern of an outbreak over time." },
        { "front": "What is a case series?", "back": "Descriptive study following a group of similar cases over time." },
        { "front": "Define quarantine.", "back": "The separation and restriction of movement of persons exposed (but not yet ill) to see if they become sick." },
        { "front": "Define isolation.", "back": "The separation of persons who are ill with a communicable disease from those who are healthy." },
        { "front": "What is syndromic surveillance?", "back": "Surveillance using health-related data before diagnosis is confirmed." },
        { "front": "What is a “line list”?", "back": "A table summarizing key information about persons with a particular disease or exposure." },
        { "front": "Why is consent important in research?", "back": "To respect and protect the rights of participants." },
        { "front": "What is case-control study?", "back": "A study comparing people with a disease (cases) to those without (controls), retrospective for risk factor assessment." },
        { "front": "Define “bias.”", "back": "Any systematic error in a study that results in an incorrect estimate of the association between exposure and disease." },
        { "front": "What is direct transmission?", "back": "Immediate transfer of infectious agents from a reservoir to a susceptible host." },
        { "front": "What is indirect transmission?", "back": "Transfer of infectious agents via an intermediate object or organism." },
        { "front": "What is “sporadic” disease?", "back": "Occurring at irregular intervals, haphazardly, and infrequently." },
        { "front": "What is surveillance data used for?", "back": "Detecting outbreaks, monitoring trends, evaluating programs, guiding policy." },
        { "front": "Who was John Snow?", "back": "The physician who traced the source of a cholera outbreak in London (1854), considered a founder of epidemiology." },
        { "front": "What is positive predictive value (PPV)?", "back": "Proportion of positive test results that are true positives ." },
        { "front": "What is negative predictive value (NPV)?", "back": "Proportion of negative test results that are true negatives." },
        { "front": "What is “epidemic threshold”?", "back": "Minimum number of cases indicating an outbreak is occurring." },
        { "front": "Define vehicle in transmission.", "back": "An inanimate intermediary (food, water, blood) that conveys the infectious agent." },
        { "front": "What is a fomite?", "back": "An inanimate object that can carry infectious agents (like doorknobs, utensils)." },
        { "front": "Define “index case.”", "back": "The first case of a disease identified in an outbreak." },
        { "front": "What is a secondary case?", "back": "A person who becomes infected from the index case." },
        { "front": "What is the purpose of a spot map?", "back": "To identify location-based patterns in an outbreak." },
        { "front": "What is “case ascertainment”?", "back": "The process of identifying all cases of a disease in an outbreak." },
        { "front": "What is a propagated outbreak?", "back": "An outbreak that spreads person-to-person, showing progressive peaks." },
        { "front": "Define cross-immunity.", "back": "Immunity to one disease conferring protection against another related disease." },
        { "front": "Define “carrier.”", "back": "A person who harbors the infectious agent but has no symptoms." },
        { "front": "What is an epidemic peak?", "back": "The highest number of new cases in a given time period during an epidemic." },
        { "front": "What is subject attrition?", "back": "Loss of participants from a study over time." },
        { "front": "What is blinding?", "back": "Keeping study participants, personnel, or analysts unaware of participant group assignments." },
        { "front": "Define “randomization.”", "back": "Assigning study participants to groups by chance." },
        { "front": "What is matching in a study?", "back": "Selecting controls so they are similar to cases on certain variables." },
        { "front": "What is surveillance case definition?", "back": "A standard set of criteria for classifying whether a person has a particular disease." },
        { "front": "Give an example of secondary prevention.", "back": "Screening tests (e.g., mammograms)." },
        { "front": "Give an example of tertiary prevention.", "back": "Rehabilitation for people after a stroke." },
        { "front": "What is a null hypothesis?", "back": "The hypothesis that there is no association between exposure and disease." },
        { "front": "What does “p-value” mean?", "back": "The probability that the observed result occurred by chance." },
        { "front": "What is standardization?", "back": "Adjusting rates so populations can be compared fairly." },
        { "front": "What is crude rate?", "back": "A rate not modified to account for demographic differences in the population." },
        { "front": "What is indirect standardization?", "back": "Comparing observed cases to expected cases by applying standard rates to the study population." },
        { "front": "What is direct standardization?", "back": "Applying age-specific rates from study populations to a standard population." },
        { "front": "What is an “outlier”?", "back": "A data point distant from other values in a dataset." },
        { "front": "Define mean.", "back": "The arithmetic average of a set of numbers." },
        { "front": "Define mode.", "back": "The value that occurs most frequently in a dataset." },
        { "front": "What is “stratification”?", "back": "Separating data into subgroups to control confounding." },
        { "front": "What is multivariate analysis?", "back": "Statistical analysis considering more than one variable at a time." },
        { "front": "What is relative frequency?", "back": "The proportion of times a value appears in a dataset." },
        { "front": "What is proportion?", "back": "A type of ratio in which the numerator is included in the denominator." },
        { "front": "What is 2x2 table used for?", "back": "Summarizing relationship between exposure and outcome (disease) status." },
        { "front": "What is recall period?", "back": "The time frame in which participants are asked to remember exposures." },
        { "front": "What is surveillance interval?", "back": "The designated time between data collections or reports." },
        { "front": "What is time-series analysis?", "back": "Analyzing data points collected over time to identify trends." },
        { "front": "What is data cleaning?", "back": "The process of correcting or removing inaccurate records from a dataset." },
        { "front": "What is an “epidemic intelligence service”?", "back": "Teams (like CDC’s EIS ) that investigate and respond to outbreaks." },
        { "front": "What is spot check in surveillance?", "back": "Randomly checking data quality or presence of disease." },
        { "front": "What is ICD code?", "back": "International Classification of Diseases code assigned to health conditions." },
        { "front": "What is syndromic case definition?", "back": "Grouping illnesses by clinical presentations rather than specific diagnoses." },
        { "front": "What is health indicator?", "back": "A measurable characteristic describing health of a population (e.g., infant mortality rate)." },
        { "front": "What is “notifiable disease list”?", "back": "List of diseases that must be reported to public health authorities." },
        { "front": "What is isolation period?", "back": "The time span a person with infectious disease is kept separate from healthy individuals." },
        { "front": "What is re-infection?", "back": "Becoming infected again by the same agent after recovery." },
        { "front": "What is interquartile range?", "back": "The difference between third and first quartile (Q3–Q1) in a dataset." },
        { "front": "What is standard deviation?", "back": "A measure of variability showing how spread out values are around the mean ." },
        { "front": "What is cluster investigation?", "back": "Studying instances where a group of similar health events occur closely in time and place." },
        { "front": "What is analytic epidemiology?", "back": "Study of why and how diseases occur, using comparisons between groups." },
        { "front": "What is descriptive epidemiology?", "back": "Study describing disease patterns by time, place, and person." },
        { "front": "What is cohort effect?", "back": "Difference in disease risk that occurs between different birth-year groups." },
        { "front": "What is an “epidemic period”?", "back": "The time span during which cases of an epidemic occur." },
        { "front": "What is zero reporting?", "back": "Reporting that no cases of a disease have occurred during the interval." },
        { "front": "What’s a “sentinel animal”?", "back": "Animals used as early warning systems for human disease risk." },
        { "front": "What is active case finding?", "back": "Proactively seeking out cases in a population." },
        { "front": "What is batch testing?", "back": "Testing multiple samples together to save time/resources." },
        { "front": "What is a control group?", "back": "Group in a study used for comparison; not exposed to tested condition ." },
        { "front": "What is person-time?", "back": "Calculation in cohort studies of people observed multiplied by length of time observed." },
        { "front": "What is person-years?", "back": "A measurement combining number of persons and their time contribution in a study." },
        { "front": "Define “dose-response relationship.”", "back": "A trend where increased exposure increases (or decreases) the risk of disease." },
        { "front": "What is an “epidemic process”?", "back": "The sequence of events from introduction to cessation of disease in a population." },
        { "front": "What is the main use of prevalence?", "back": "Estimating the burden of chronic illness for planning health services." },
        { "front": "What is the purpose of analytic studies?", "back": "Test hypotheses and identify associations between exposures and outcomes." },
        { "front": "What is natural history of disease?", "back": "The progression of a disease process in an individual over time in the absence of intervention." },
        { "front": "What is prevalence ratio?", "back": "The ratio of the prevalence of disease among the exposed to that among the unexposed." },
        { "front": "What is population attributable risk?", "back": "The proportion of disease incidence in a population that can be attributed to a certain exposure." },
        { "front": "What is attributable risk percent?", "back": "Proportion of disease among exposed that is due to the exposure." },
        { "front": "What is a “closed cohort”?", "back": "A fixed group of individuals followed over time without new additions." },
        { "front": "What is primary prevention?", "back": "Efforts to prevent the initial occurrence of disease." },
        { "front": "What is secondary prevention?", "back": "Early detection and treatment to halt or slow progress of disease." },
        { "front": "What is tertiary prevention?", "back": "Reducing impacts of long-term disease and improving quality of life." },
        { "front": "What is the “epidemiologic triad”?", "back": "Agent, host, and environment—three elements necessary for disease occurrence." },
        { "front": "What is exposure?", "back": "Contact with an agent capable of causing disease." },
        { "front": "What is a 2x2 table?", "back": "A matrix to compare exposed/not exposed versus disease/no disease groups." },
        { "front": "What is an open cohort?", "back": "A group with dynamic membership—people may enter or leave the study over time ." },
        { "front": "What is surveillance pyramid?", "back": "A model illustrating how many cases are captured (or missed) by surveillance at each step (e.g., ill → seek care → test → report)." },
        { "front": "What is outbreak control?", "back": "Interventions to stop or limit spread, like isolation, vaccination, closing exposures." },
        { "front": "What is ring vaccination?", "back": "Vaccinating contacts of confirmed cases and those around them." },
        { "front": "What is chemoprophylaxis?", "back": "Administration of a drug to prevent disease." },
        { "front": "What is a “case definition” made up of?", "back": "Clinical criteria, laboratory criteria, and restrictions by person, place, time." },
        { "front": "What is elimination?", "back": "Reduction to zero of the incidence of a specified disease in a defined geographic area." },
        { "front": "What is eradication?", "back": "Permanent reduction to zero of the worldwide incidence of infection." },
        { "front": "What does emerging infection mean?", "back": "New, reappearing, or drug-resistant infections whose incidence has increased in recent years." },
        { "front": "What is a “baseline rate”?", "back": "The usual frequency of a disease in a population." },
        { "front": "What is health disparity?", "back": "Differences in health status or healthcare across different populations." },
        { "front": "What is vaccine efficacy?", "back": "The percentage reduction in disease incidence in a vaccinated group versus an unvaccinated group." },
        { "front": "What is ecological study?", "back": "A study based on populations or groups rather than individuals." },
        { "front": "What is selection bias?", "back": "Systematic error due to nonrandom assignment or selection in study groups." },
        { "front": "What is non-differential misclassification?", "back": "Error affecting both groups equally, usually biases toward the null." },
        { "front": "What is differential misclassification?", "back": "Error in classification that differs between groups, can bias results either way." },
        { "front": "What is confidence interval (CI)?", "back": "A range of values likely to contain the true population parameter." },
        { "front": "What is statistical significance?", "back": "The likelihood that an observed association is not due to chance." },
        { "front": "What is lead time bias?", "back": "Bias from early detection increasing perceived survival time without actual change in prognosis." },
        { "front": "What is length time bias?", "back": "Bias in screening where slower-progressing diseases are more likely to be detected." },
        { "front": "What is a double-blind study?", "back": "Neither subjects nor experimenters know which group participants are in." },
        { "front": "What is matching?", "back": "Selection of control subjects in such a way that they resemble case subjects." },
        { "front": "What is loss to follow-up?", "back": "Participants dropping out of a study, which can bias results." },
        { "front": "What is effect modification?", "back": "A third variable modifies the effect of an exposure on an outcome." },
        { "front": "What is misclassification?", "back": "Incorrect categorization of participants regarding exposure or outcome." },
        { "front": "What is secular trend?", "back": "Long-term change in incidence or prevalence over time." },
        { "front": "What is seasonal variation?", "back": "Regular fluctuation in disease occurrence by season." },
        { "front": "What is “null value” for RR or OR?", "back": "1.0 (no association)." },
        { "front": "What is overmatching?", "back": "Matching on variables so closely that it potentially hides true associations." },
        { "front": "What is case ascertainment bias?", "back": "Bias from incomplete discovery of all cases." },
        { "front": "What is the precautionary principle?", "back": "Policy of preventive action in the face of uncertainty." },
        { "front": "What is population risk?", "back": "The likelihood that events will occur in a group of people." },
        { "front": "Define statistical power.", "back": "The probability that a study will detect an association if one truly exists." },
        { "front": "What is the “denominator”?", "back": "The population or subgroup at risk." },
        { "front": "What is time-at-risk?", "back": "The period in which an individual could potentially experience the event." },
        { "front": "What is ecological fallacy?", "back": "Incorrect inference about individuals made from group data." },
        { "front": "What is cumulative incidence?", "back": "Number of new cases over a period divided by the number at risk at the start." },
        { "front": "What is “rate ratio”?", "back": "Ratio of incidence rates between an exposed and unexposed group." },
        { "front": "What is per-protocol analysis?", "back": "Analysis that includes only participants who completed the study as originally allocated." },
        { "front": "What is intention-to-treat analysis?", "back": "Includes all participants in the groups to which they were randomized, regardless of what treatment they received." },
        { "front": "What is subject compliance?", "back": "Degree to which participant behavior matches study protocol." },
        { "front": "What is case report?", "back": "Detailed presentation of a single individual’s illness." },
        { "front": "What is “case cluster”?", "back": "Aggregation of cases in a group linked by place and/or time." },
        { "front": "What is Pearson correlation coefficient?", "back": "Statistical measure of the strength and direction of a linear relationship between two variables." },
        { "front": "What is multistage sampling?", "back": "Selecting samples in stages, using groups and individuals within groups." },
        { "front": "What is “confounding variable”?", "back": "An outside influence that changes the effect of a dependent and independent variable." },
        { "front": "What is “standard error”?", "back": "An estimate of the variability of a sample mean." },
        { "front": "What is “risk difference”?", "back": "The absolute difference in risk between two groups." },
        { "front": "What is “crude mortality rate”?", "back": "Number of deaths per population in a given time period ." },
        { "front": "What is cause-specific mortality rate?", "back": "Number of deaths due to a specific cause per population." },
        { "front": "What is infant mortality rate?", "back": "Number of deaths of infants under one year per 1,000 live births." },
        { "front": "What is morbidity?", "back": "Incidence or prevalence of disease." },
        { "front": "What is mortality?", "back": "Incidence of death." },
        { "front": "What is “epidemiologic transition”?", "back": "Shift in disease patterns from infectious to chronic diseases in populations." },
        { "front": "Define global surveillance.", "back": "Collection and sharing of international health data to detect and respond to threats." },
        { "front": "What is sentinel surveillance system?", "back": "Surveillance at selected reporting sites chosen for likelihood to observe new cases." },
        { "front": "What is “community engagement”?", "back": "Involving communities in planning, decision-making, and action for health improvement." },
        { "front": "What is “ethical principle” in epidemiology?", "back": "Protecting human subjects, obtaining informed consent, ensuring beneficence." },
        { "front": "What is “surveillance report”?", "back": "A regularly published document summarizing surveillance data and trends." }
    ];

    if (!window.APPENDIX_DATA) window.APPENDIX_DATA = {};
    window.APPENDIX_DATA.flashcards = newFlashcards;

    // ==========================================
    // SECTION 2: Content Patches (Phase 1 & 6)
    // ==========================================
    function applyContentPatches() {
        if (!window.EPIDEMIC_ENGINE_CONTENT) return;

        // Ch7: Overlapping Steps Note
        if (window.EPIDEMIC_ENGINE_CONTENT.ch7) {
            const ch7 = window.EPIDEMIC_ENGINE_CONTENT.ch7;
            const note = `<div class="study-tip"><div class="callout-header"><i class="ph ph-lightbulb"></i>Important Note</div><div class="callout-content"><p>While presented sequentially, investigation steps often overlap, and control measures should be implemented as soon as a source is suspected. Maintain ongoing communication and surveillance throughout the process.</p></div></div>`;
            const insertionPoint = '<p class="lead">';
            if (ch7.content && ch7.content.includes(insertionPoint) && !ch7.content.includes('Important Note')) {
                ch7.content = ch7.content.replace(insertionPoint, note + insertionPoint);
            }
        }

        // Ch4: Definitions Refresher
        if (window.EPIDEMIC_ENGINE_CONTENT.ch4) {
            const ch4 = window.EPIDEMIC_ENGINE_CONTENT.ch4;
            const callout = `<div class="champion-concept"><div class="callout-header"><i class="ph ph-formula"></i>Definition Refresher</div><div class="callout-content"><ul><li><strong>Incidence Proportion (Risk / Attack Rate):</strong> New cases during a specified period ÷ Population at risk at start.</li><li><strong>Incidence Rate:</strong> New cases during a time period ÷ Person-time at risk.</li><li><strong>Prevalence:</strong> All existing cases (new + old) ÷ Total population.</li></ul><p>Numerators and denominators must match: exclude those already sick or immune from the at‑risk population.</p></div></div>`;
            const marker4 = '<h3>Incidence Rate</h3>';
            if (ch4.content && ch4.content.includes(marker4) && !ch4.content.includes('Definition Refresher')) {
                ch4.content = ch4.content.replace(marker4, marker4 + callout);
            }
        }

        // Ch9: Interactive Line List Mock
        if (window.EPIDEMIC_ENGINE_CONTENT.ch9) {
            const ch9 = window.EPIDEMIC_ENGINE_CONTENT.ch9;
            const mockTable = `
            <div class="neo-card small" style="border:1px solid #ccc; margin: 1rem 0;">
                <div style="font-weight:bold; margin-bottom:0.5rem;"><i class="ph ph-table"></i> Interactive Line List Entry</div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                        <thead style="background:#f3f4f6;">
                            <tr>
                                <th style="padding:4px; border:1px solid #ddd;">ID</th>
                                <th style="padding:4px; border:1px solid #ddd;">Age</th>
                                <th style="padding:4px; border:1px solid #ddd;">Sex</th>
                                <th style="padding:4px; border:1px solid #ddd;">Symptoms</th>
                                <th style="padding:4px; border:1px solid #ddd;">Onset Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:4px; border:1px solid #ddd;">001</td>
                                <td style="padding:4px; border:1px solid #ddd;">12</td>
                                <td style="padding:4px; border:1px solid #ddd;">M</td>
                                <td style="padding:4px; border:1px solid #ddd;">Vomiting</td>
                                <td style="padding:4px; border:1px solid #ddd;">2024-05-01</td>
                            </tr>
                            <tr style="background:#fff7ed;">
                                <td style="padding:4px; border:1px solid #ddd;">002</td>
                                <td style="padding:4px; border:1px solid #ddd;"><input type="number" placeholder="Enter Age" style="width:100%; border:1px solid #aaa; padding:2px;"></td>
                                <td style="padding:4px; border:1px solid #ddd;"><select style="width:100%;"><option>M</option><option>F</option></select></td>
                                <td style="padding:4px; border:1px solid #ddd;"><input type="text" placeholder="Symp..." style="width:100%;"></td>
                                <td style="padding:4px; border:1px solid #ddd;"><input type="date" style="width:100%;"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="font-size:0.8rem; color:#666; margin-top:0.5rem;"><em>Try entering data for Case 002 above!</em></div>
            </div>`;
            const header9 = '<h2>9.3 Constructing a Line List</h2>';
            if (ch9.content && ch9.content.includes(header9) && !ch9.content.includes('Interactive Line List Entry')) {
                ch9.content = ch9.content.replace(header9, header9 + mockTable);
            }
        }

        // Ch14: Bias Cheat Sheet
        if (window.EPIDEMIC_ENGINE_CONTENT.ch14) {
            const ch14 = window.EPIDEMIC_ENGINE_CONTENT.ch14;
            const biasSheet = `
            <div class="champion-concept">
                <div class="callout-header"><i class="ph ph-eye-slash"></i> Bias Visual Cheat Sheet</div>
                <div class="callout-content">
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                        <div style="background:#fff; padding:0.5rem; border:1px solid #ddd; border-radius:4px;">
                            <strong style="color:var(--accent-red);">Selection Bias</strong>
                            <p style="font-size:0.85rem; margin-top:4px;">Error in choosing participants.</p>
                            <ul style="font-size:0.8rem; padding-left:1.2rem;">
                                <li>Healthy Worker Effect</li>
                                <li>Self-Selection (Volunteer)</li>
                                <li>Loss to Follow-up</li>
                            </ul>
                        </div>
                        <div style="background:#fff; padding:0.5rem; border:1px solid #ddd; border-radius:4px;">
                            <strong style="color:var(--accent-blue);">Information Bias</strong>
                            <p style="font-size:0.85rem; margin-top:4px;">Error in measuring data.</p>
                            <ul style="font-size:0.8rem; padding-left:1.2rem;">
                                <li>Recall Bias (Memory)</li>
                                <li>Interviewer Bias</li>
                                <li>Misclassification</li>
                            </ul>
                        </div>
                    </div>
                    <div style="margin-top:0.5rem; font-size:0.85rem;"><strong>Mnemonic:</strong> <em>"Select who you study (Selection), Observe what they do (Information)"</em></div>
                </div>
            </div>`;
            const header14 = '<h2>14.1 Types of Bias</h2>';
            if (ch14.content && ch14.content.includes(header14) && !ch14.content.includes('Bias Visual Cheat Sheet')) {
                ch14.content = ch14.content.replace(header14, header14 + biasSheet);
            }
        }

        // Appendix: Diagnostic Content (Phase 6)
        if (window.EPIDEMIC_ENGINE_CONTENT.appendix) {
            const appendix = window.EPIDEMIC_ENGINE_CONTENT.appendix;
            if (appendix.content && !appendix.content.includes('id="diagnostic"')) {
                const diagnosticHTML = `\n<h2 id="diagnostic">Diagnostic Tests & Measures</h2>\n<p>Understanding diagnostic test performance is critical for interpreting screening and confirmatory tests.  The metrics below evaluate how well a test distinguishes between individuals with and without disease.</p>\n<ul>\n  <li><strong>Sensitivity (True Positive Rate):</strong> the proportion of individuals with the disease who test positive.  Formula: TP / (TP + FN).</li>\n  <li><strong>Specificity (True Negative Rate):</strong> the proportion of individuals without the disease who test negative.  Formula: TN / (TN + FP).</li>\n  <li><strong>Positive Predictive Value (PPV):</strong> among individuals who test positive, the proportion who truly have the disease.  Formula: TP / (TP + FP).</li>\n  <li><strong>Negative Predictive Value (NPV):</strong> among individuals who test negative, the proportion who truly do not have the disease.  Formula: TN / (TN + FN).</li>\n  <li><strong>Accuracy:</strong> the proportion of all tested individuals who are correctly classified.  Formula: (TP + TN) / (TP + TN + FP + FN).</li>\n</ul>\n<p>Use the table below to organise diagnostic test results:</p>\n<table style="border-collapse:collapse; max-width:500px; margin-bottom:1rem;">\n  <thead>\n    <tr>\n      <th style="border:1px solid #000;"></th>\n      <th colspan="2" style="border:1px solid #000;">Disease&nbsp;Status</th>\n    </tr>\n    <tr>\n      <th style="border:1px solid #000;">Test&nbsp;Result</th>\n      <th style="border:1px solid #000;">Present</th>\n      <th style="border:1px solid #000;">Absent</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style="border:1px solid #000;">Positive</td>\n      <td style="border:1px solid #000;">TP</td>\n      <td style="border:1px solid #000;">FP</td>\n    </tr>\n    <tr>\n      <td style="border:1px solid #000;">Negative</td>\n      <td style="border:1px solid #000;">FN</td>\n      <td style="border:1px solid #000;">TN</td>\n    </tr>\n  </tbody>\n</table>\n<p>You can practice calculating these measures using the <em>Practice Problems</em> tool by selecting sensitivity, specificity, PPV or NPV from the metric picker.</p>\n`;
                appendix.content += diagnosticHTML;

                // Live Update if on page
                try {
                    const currentHash = window.location.hash || '';
                    if (currentHash.includes('#appendix')) {
                        const container = document.getElementById('content-container');
                        if (container && !container.querySelector('#diagnostic')) {
                            container.insertAdjacentHTML('beforeend', diagnosticHTML);
                        }
                    }
                } catch (err) { }
            }
        }
    }

    // Execute content patching
    applyContentPatches();
    // Re-apply in case of race conditions with content loading
    window.addEventListener('load', applyContentPatches);

    // ==========================================
    // SECTION 3: UI Tweaks (Phase 5)
    // ==========================================
    function hideFlashDrillsButton() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => {
            const txt = (btn.textContent || '').trim().toLowerCase();
            if (txt === 'flash drills' || txt.startsWith('flash drills')) {
                btn.style.display = 'none';
            }
        });
    }

    function periodicHide(attempts) {
        hideFlashDrillsButton();
        if (attempts > 0) {
            setTimeout(() => periodicHide(attempts - 1), 300);
        }
    }

    periodicHide(5);
    const observer = new MutationObserver(() => hideFlashDrillsButton());
    observer.observe(document.body, { childList: true, subtree: true });

})();
