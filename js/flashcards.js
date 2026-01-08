
(() => {
  // Flashcards data generated from 252 flashcards document
  const flashcardsData = [
    {
      "question": "What is epidemiology?",
      "answer": "The study of the distribution and determinants of health-related states or events in specified populations."
    },
    {
      "question": "Define outbreak.",
      "answer": "An unexpected increase in cases of a disease in a population at a specific time."
    },
    {
      "question": "What is incidence rate?",
      "answer": "Number of new cases in a defined population during a specific period, divided by the population at risk."
    },
    {
      "question": "What does endemic mean?",
      "answer": "The constant presence and/or usual prevalence of a disease within a geographic area."
    },
    {
      "question": "What is active surveillance?",
      "answer": "Ongoing, proactive data collection\u2014health department solicits reports from facilities."
    },
    {
      "question": "Give the formula for Relative Risk (RR).",
      "answer": "RR = (attack rate in exposed) / (attack rate in unexposed)."
    },
    {
      "question": "Name two analytic study types.",
      "answer": "Case-control and cohort studies."
    },
    {
      "question": "What\u2019s the first step in outbreak investigation?",
      "answer": "Verify diagnosis and confirm the outbreak."
    },
    {
      "question": "What is a confounder?",
      "answer": "A variable that influences both the dependent and independent variable, causing a spurious association."
    },
    {
      "question": "What does epidemic curve show?",
      "answer": "The distribution of onset of illness among cases to determine time, place, and mode of exposure."
    },
    {
      "question": "What is passive surveillance?",
      "answer": "Disease reporting initiated by health care providers on patient diagnosis, not actively sought by health department."
    },
    {
      "question": "Define notifiable disease.",
      "answer": "A disease that, by law, must be reported to public health authorities when diagnosed."
    },
    {
      "question": "What is an epidemic?",
      "answer": "An increase, often sudden, in the number of cases of a disease above what is normally expected."
    },
    {
      "question": "Pandemic definition?",
      "answer": "An epidemic occurring over a very wide area, crossing international boundaries, and usually affecting a large number of people."
    },
    {
      "question": "Attack rate formula?",
      "answer": "(Number of new cases among population during a period) / (Number of people at risk in the population at start of period)."
    },
    {
      "question": "Define point source outbreak.",
      "answer": "An outbreak where all cases are exposed at about the same time, usually from a single source."
    },
    {
      "question": "What is secondary attack rate?",
      "answer": "The spread of disease in a household or closed population where primary and secondary cases are defined."
    },
    {
      "question": "What is a zoonosis?",
      "answer": "A disease that can be transmitted from animals to humans."
    },
    {
      "question": "What generates the \u201ccase definition\u201d?",
      "answer": "A set of clinical and/or epidemiologic criteria used to decide whether a person's illness counts as a case in an outbreak investigation."
    },
    {
      "question": "Give an example of primary prevention.",
      "answer": "Immunization."
    },
    {
      "question": "What is surveillance bias?",
      "answer": "The tendency for increased detection of a disease or condition because surveillance (monitoring) is more intensive for a particular group."
    },
    {
      "question": "What does endemic mean?",
      "answer": "The constant presence or usual prevalence of a disease within a geographic area."
    },
    {
      "question": "Describe confounding.",
      "answer": "When the relationship between an exposure and outcome is confused or distorted by a third variable."
    },
    {
      "question": "What is a reservoir?",
      "answer": "The habitat in which an infectious agent normally lives, grows, and multiplies."
    },
    {
      "question": "Define \u201chost\u201d in epi triad.",
      "answer": "A person or animal that provides subsistence or lodgment to an infectious agent."
    },
    {
      "question": "Define \u201cagent\u201d in epi triad.",
      "answer": "A microbe or pathogen that causes the disease."
    },
    {
      "question": "Define \u201cenvironment\u201d in epi triad.",
      "answer": "External factors that allow disease transmission, survival of agent, and susceptibility of host."
    },
    {
      "question": "What is a vector?",
      "answer": "Any living carrier that transports an infectious agent from an infected individual or its wastes to a susceptible individual."
    },
    {
      "question": "What is herd immunity?",
      "answer": "Protection of susceptible individuals in a population due to a high proportion of immune individuals."
    },
    {
      "question": "What is a risk factor?",
      "answer": "An aspect of personal behavior, lifestyle, or exposure that increases likelihood of disease or injury."
    },
    {
      "question": "Define incubation period.",
      "answer": "The time interval between initial exposure to an infectious agent and the appearance of symptoms."
    },
    {
      "question": "What is prevalence?",
      "answer": "The total number of cases (new + existing) of a disease in a population at a given time."
    },
    {
      "question": "What does case fatality rate mean?",
      "answer": "Proportion of persons with a particular condition who die from that condition."
    },
    {
      "question": "Define odds ratio (OR).",
      "answer": "The odds of exposure among cases divided by the odds of exposure among controls."
    },
    {
      "question": "Give an example of \u201csentinel surveillance.\u201d",
      "answer": "Monitoring a selected group of reporting sites or facilities."
    },
    {
      "question": "What is cross-sectional study?",
      "answer": "A study where data are collected on exposure and outcome at the same moment in time."
    },
    {
      "question": "What is recall bias?",
      "answer": "Systematic error caused by differences in accuracy or completeness of participant recollections."
    },
    {
      "question": "Define relative risk (RR).",
      "answer": "Measure of the risk of a certain event happening in one group compared to another."
    },
    {
      "question": "What is specificity (in testing)?",
      "answer": "The ability of a test to correctly identify those without disease (true negative rate)."
    },
    {
      "question": "What is sensitivity?",
      "answer": "The ability of a test to correctly identify those with the disease (true positive rate)."
    },
    {
      "question": "Define surveillance system.",
      "answer": "An ongoing, systematic collection, analysis, and interpretation of health data."
    },
    {
      "question": "What is an epidemic curve used for?",
      "answer": "To describe the magnitude and pattern of an outbreak over time."
    },
    {
      "question": "What is a case series?",
      "answer": "Descriptive study following a group of similar cases over time."
    },
    {
      "question": "Define quarantine.",
      "answer": "The separation and restriction of movement of persons exposed (but not yet ill) to see if they become sick."
    },
    {
      "question": "Define isolation.",
      "answer": "The separation of persons who are ill with a communicable disease from those who are healthy."
    },
    {
      "question": "What is attack rate?",
      "answer": "Proportion of persons who become ill after exposure to an infectious agent."
    },
    {
      "question": "What is surveillance?",
      "answer": "The ongoing systematic collection, analysis, and interpretation of health data essential to public health practice."
    },
    {
      "question": "What is syndromic surveillance?",
      "answer": "Surveillance using health-related data before diagnosis is confirmed."
    },
    {
      "question": "What is a \u201cline list\u201d?",
      "answer": "A table summarizing key information about persons with a particular disease or exposure."
    },
    {
      "question": "Why is consent important in research?",
      "answer": "To respect and protect the rights of participants."
    },
    {
      "question": "What is case-control study?",
      "answer": "A study comparing people with a disease (cases) to those without (controls), retrospective for risk factor assessment."
    },
    {
      "question": "Define \u201cbias.\u201d",
      "answer": "Any systematic error in a study that results in an incorrect estimate of the association between exposure and disease."
    },
    {
      "question": "What is direct transmission?",
      "answer": "Immediate transfer of infectious agents from a reservoir to a susceptible host."
    },
    {
      "question": "What is indirect transmission?",
      "answer": "Transfer of infectious agents via an intermediate object or organism."
    },
    {
      "question": "What is incubation period?",
      "answer": "Time from exposure to pathogen to appearance of symptoms."
    },
    {
      "question": "Define latent period.",
      "answer": "Time from initial infection until the infectious agent can be transmitted to others."
    },
    {
      "question": "What is \u201csporadic\u201d disease?",
      "answer": "Occurring at irregular intervals, haphazardly, and infrequently."
    },
    {
      "question": "What is surveillance data used for?",
      "answer": "Detecting outbreaks, monitoring trends, evaluating programs, guiding policy."
    },
    {
      "question": "What is the denominator in rate calculations?",
      "answer": "The population at risk for the event."
    },
    {
      "question": "Who was John Snow?",
      "answer": "The physician who traced the source of a cholera outbreak in London (1854), considered a founder of epidemiology."
    },
    {
      "question": "What is positive predictive value (PPV)?",
      "answer": "Proportion of positive test results that are true positives ."
    },
    {
      "question": "What is negative predictive value (NPV)?",
      "answer": "Proportion of negative test results that are true negatives."
    },
    {
      "question": "What is \u201cepidemic threshold\u201d?",
      "answer": "Minimum number of cases indicating an outbreak is occurring."
    },
    {
      "question": "Define vehicle in transmission.",
      "answer": "An inanimate intermediary (food, water, blood) that conveys the infectious agent."
    },
    {
      "question": "What is a fomite?",
      "answer": "An inanimate object that can carry infectious agents (like doorknobs, utensils)."
    },
    {
      "question": "Define \u201cindex case.\u201d",
      "answer": "The first case of a disease identified in an outbreak."
    },
    {
      "question": "What is a secondary case?",
      "answer": "A person who becomes infected from the index case."
    },
    {
      "question": "What is the purpose of a spot map?",
      "answer": "To identify location-based patterns in an outbreak."
    },
    {
      "question": "What is \u201ccase ascertainment\u201d?",
      "answer": "The process of identifying all cases of a disease in an outbreak."
    },
    {
      "question": "What is a propagated outbreak?",
      "answer": "An outbreak that spreads person-to-person, showing progressive peaks."
    },
    {
      "question": "Define cross-immunity.",
      "answer": "Immunity to one disease conferring protection against another related disease."
    },
    {
      "question": "Define \u201ccarrier.\u201d",
      "answer": "A person who harbors the infectious agent but has no symptoms."
    },
    {
      "question": "What is an epidemic peak?",
      "answer": "The highest number of new cases in a given time period during an epidemic."
    },
    {
      "question": "What is subject attrition?",
      "answer": "Loss of participants from a study over time."
    },
    {
      "question": "What is blinding?",
      "answer": "Keeping study participants, personnel, or analysts unaware of participant group assignments."
    },
    {
      "question": "Define \u201crandomization.\u201d",
      "answer": "Assigning study participants to groups by chance."
    },
    {
      "question": "What is matching in a study?",
      "answer": "Selecting controls so they are similar to cases on certain variables."
    },
    {
      "question": "What is surveillance case definition?",
      "answer": "A standard set of criteria for classifying whether a person has a particular disease."
    },
    {
      "question": "Give an example of secondary prevention.",
      "answer": "Screening tests (e.g., mammograms)."
    },
    {
      "question": "Give an example of tertiary prevention.",
      "answer": "Rehabilitation for people after a stroke."
    },
    {
      "question": "What is a null hypothesis?",
      "answer": "The hypothesis that there is no association between exposure and disease."
    },
    {
      "question": "What does \u201cp-value\u201d mean?",
      "answer": "The probability that the observed result occurred by chance."
    },
    {
      "question": "What is standardization?",
      "answer": "Adjusting rates so populations can be compared fairly."
    },
    {
      "question": "What is crude rate?",
      "answer": "A rate not modified to account for demographic differences in the population."
    },
    {
      "question": "What is indirect standardization?",
      "answer": "Comparing observed cases to expected cases by applying standard rates to the study population."
    },
    {
      "question": "What is direct standardization?",
      "answer": "Applying age-specific rates from study populations to a standard population."
    },
    {
      "question": "What is an \u201coutlier\u201d?",
      "answer": "A data point distant from other values in a dataset."
    },
    {
      "question": "Define mean.",
      "answer": "The arithmetic average of a set of numbers."
    },
    {
      "question": "Define mode.",
      "answer": "The value that occurs most frequently in a dataset."
    },
    {
      "question": "What is \u201cstratification\u201d?",
      "answer": "Separating data into subgroups to control confounding."
    },
    {
      "question": "What is multivariate analysis?",
      "answer": "Statistical analysis considering more than one variable at a time."
    },
    {
      "question": "What is relative frequency?",
      "answer": "The proportion of times a value appears in a dataset."
    },
    {
      "question": "What is proportion?",
      "answer": "A type of ratio in which the numerator is included in the denominator."
    },
    {
      "question": "What is 2x2 table used for?",
      "answer": "Summarizing relationship between exposure and outcome (disease) status."
    },
    {
      "question": "What is recall period?",
      "answer": "The time frame in which participants are asked to remember exposures."
    },
    {
      "question": "What is surveillance interval?",
      "answer": "The designated time between data collections or reports."
    },
    {
      "question": "What is time-series analysis?",
      "answer": "Analyzing data points collected over time to identify trends."
    },
    {
      "question": "What is data cleaning?",
      "answer": "The process of correcting or removing inaccurate records from a dataset."
    },
    {
      "question": "What is an \u201cepidemic intelligence service\u201d?",
      "answer": "Teams (like CDC\u2019s EIS ) that investigate and respond to outbreaks."
    },
    {
      "question": "What is spot check in surveillance?",
      "answer": "Randomly checking data quality or presence of disease."
    },
    {
      "question": "What is ICD code?",
      "answer": "International Classification of Diseases code assigned to health conditions."
    },
    {
      "question": "What is syndromic case definition?",
      "answer": "Grouping illnesses by clinical presentations rather than specific diagnoses."
    },
    {
      "question": "What is health indicator?",
      "answer": "A measurable characteristic describing health of a population (e.g., infant mortality rate)."
    },
    {
      "question": "What is \u201cnotifiable disease list\u201d?",
      "answer": "List of diseases that must be reported to public health authorities."
    },
    {
      "question": "Define attack rate.",
      "answer": "(Repeated) Proportion of persons who become ill after exposure to an infectious agent."
    },
    {
      "question": "What is isolation period?",
      "answer": "The time span a person with infectious disease is kept separate from healthy individuals."
    },
    {
      "question": "What is re-infection?",
      "answer": "Becoming infected again by the same agent after recovery."
    },
    {
      "question": "What is interquartile range?",
      "answer": "The difference between third and first quartile (Q3\u2013Q1) in a dataset."
    },
    {
      "question": "What is standard deviation?",
      "answer": "A measure of variability showing how spread out values are around the mean ."
    },
    {
      "question": "What is cluster investigation?",
      "answer": "Studying instances where a group of similar health events occur closely in time and place."
    },
    {
      "question": "What is analytic epidemiology?",
      "answer": "Study of why and how diseases occur, using comparisons between groups."
    },
    {
      "question": "What is descriptive epidemiology?",
      "answer": "Study describing disease patterns by time, place, and person."
    },
    {
      "question": "What is cohort effect?",
      "answer": "Difference in disease risk that occurs between different birth-year groups."
    },
    {
      "question": "What is an \u201cepidemic period\u201d?",
      "answer": "The time span during which cases of an epidemic occur."
    },
    {
      "question": "What is zero reporting?",
      "answer": "Reporting that no cases of a disease have occurred during the interval."
    },
    {
      "question": "What\u2019s a \u201csentinel animal\u201d?",
      "answer": "Animals used as early warning systems for human disease risk."
    },
    {
      "question": "What is active case finding?",
      "answer": "Proactively seeking out cases in a population."
    },
    {
      "question": "What is batch testing?",
      "answer": "Testing multiple samples together to save time/resources."
    },
    {
      "question": "What is a control group?",
      "answer": "Group in a study used for comparison; not exposed to tested condition ."
    },
    {
      "question": "What is person-time?",
      "answer": "Calculation in cohort studies of people observed multiplied by length of time observed."
    },
    {
      "question": "What is person-years?",
      "answer": "A measurement combining number of persons and their time contribution in a study."
    },
    {
      "question": "Define \u201cdose-response relationship.\u201d",
      "answer": "A trend where increased exposure increases (or decreases) the risk of disease."
    },
    {
      "question": "What is a \u201cconfounder control\u201d method?",
      "answer": "Strategies like matching, stratification, or multivariate analysis to reduce confounding."
    },
    {
      "question": "What is an \u201cepidemic process\u201d?",
      "answer": "The sequence of events from introduction to cessation of disease in a population."
    },
    {
      "question": "What is the main use of prevalence?",
      "answer": "Estimating the burden of chronic illness for planning health services."
    },
    {
      "question": "What is the purpose of analytic studies?",
      "answer": "Test hypotheses and identify associations between exposures and outcomes."
    },
    {
      "question": "What is natural history of disease?",
      "answer": "The progression of a disease process in an individual over time in the absence of intervention."
    },
    {
      "question": "What is indirect transmission?",
      "answer": "Transmission of disease agent by means other than direct contact (e.g., vehicle, vector, airborne)."
    },
    {
      "question": "What is direct transmission?",
      "answer": "Direct and immediate transfer of infectious agent to a susceptible host."
    },
    {
      "question": "What is prevalence ratio?",
      "answer": "The ratio of the prevalence of disease among the exposed to that among the unexposed."
    },
    {
      "question": "What is population attributable risk?",
      "answer": "The proportion of disease incidence in a population that can be attributed to a certain exposure."
    },
    {
      "question": "What is attributable risk percent?",
      "answer": "Proportion of disease among exposed that is due to the exposure."
    },
    {
      "question": "What is a \u201cclosed cohort\u201d?",
      "answer": "A fixed group of individuals followed over time without new additions."
    },
    {
      "question": "What is primary prevention?",
      "answer": "Efforts to prevent the initial occurrence of disease."
    },
    {
      "question": "What is secondary prevention?",
      "answer": "Early detection and treatment to halt or slow progress of disease."
    },
    {
      "question": "What is tertiary prevention?",
      "answer": "Reducing impacts of long-term disease and improving quality of life."
    },
    {
      "question": "What is the \u201cepidemiologic triad\u201d?",
      "answer": "Agent, host, and environment\u2014three elements necessary for disease occurrence."
    },
    {
      "question": "What is exposure?",
      "answer": "Contact with an agent capable of causing disease."
    },
    {
      "question": "What is a 2x2 table?",
      "answer": "A matrix to compare exposed/not exposed versus disease/no disease groups."
    },
    {
      "question": "What is an open cohort?",
      "answer": "A group with dynamic membership\u2014people may enter or leave the study over time ."
    },
    {
      "question": "What is surveillance pyramid?",
      "answer": "A model illustrating how many cases are captured (or missed) by surveillance at each step (e.g., ill \u2192 seek care \u2192 test \u2192 report)."
    },
    {
      "question": "What is outbreak control?",
      "answer": "Interventions to stop or limit spread, like isolation, vaccination, closing exposures."
    },
    {
      "question": "What is ring vaccination?",
      "answer": "Vaccinating contacts of confirmed cases and those around them."
    },
    {
      "question": "What is chemoprophylaxis?",
      "answer": "Administration of a drug to prevent disease."
    },
    {
      "question": "What is a \u201ccase definition\u201d made up of?",
      "answer": "Clinical criteria, laboratory criteria, and restrictions by person, place, time."
    },
    {
      "question": "What is elimination?",
      "answer": "Reduction to zero of the incidence of a specified disease in a defined geographic area."
    },
    {
      "question": "What is eradication?",
      "answer": "Permanent reduction to zero of the worldwide incidence of infection."
    },
    {
      "question": "What does emerging infection mean?",
      "answer": "New, reappearing, or drug-resistant infections whose incidence has increased in recent years."
    },
    {
      "question": "What is a \u201cbaseline rate\u201d?",
      "answer": "The usual frequency of a disease in a population."
    },
    {
      "question": "What is health disparity?",
      "answer": "Differences in health status or healthcare across different populations."
    },
    {
      "question": "What is vaccine efficacy?",
      "answer": "The percentage reduction in disease incidence in a vaccinated group versus an unvaccinated group."
    },
    {
      "question": "What is predictive value positive?",
      "answer": "Probability that an individual with a positive test truly has the disease."
    },
    {
      "question": "What is predictive value negative?",
      "answer": "Probability that an individual with a negative test truly does not have the disease."
    },
    {
      "question": "What is ecological study?",
      "answer": "A study based on populations or groups rather than individuals."
    },
    {
      "question": "What is selection bias?",
      "answer": "Systematic error due to nonrandom assignment or selection in study groups."
    },
    {
      "question": "What is non-differential misclassification?",
      "answer": "Error affecting both groups equally, usually biases toward the null."
    },
    {
      "question": "What is differential misclassification?",
      "answer": "Error in classification that differs between groups, can bias results either way."
    },
    {
      "question": "What is a point estimate?",
      "answer": "The single value calculated from sample data used to estimate a population parameter."
    },
    {
      "question": "What is confidence interval (CI)?",
      "answer": "A range of values likely to contain the true population parameter."
    },
    {
      "question": "What is statistical significance?",
      "answer": "The likelihood that an observed association is not due to chance."
    },
    {
      "question": "What is lead time bias?",
      "answer": "Bias from early detection increasing perceived survival time without actual change in prognosis."
    },
    {
      "question": "What is length time bias?",
      "answer": "Bias in screening where slower-progressing diseases are more likely to be detected."
    },
    {
      "question": "What is a double-blind study?",
      "answer": "Neither subjects nor experimenters know which group participants are in."
    },
    {
      "question": "What is recall period?",
      "answer": "The time frame during which participants identify exposures or outcomes."
    },
    {
      "question": "What is matching?",
      "answer": "Selection of control subjects in such a way that they resemble case subjects."
    },
    {
      "question": "What is loss to follow-up?",
      "answer": "Participants dropping out of a study, which can bias results."
    },
    {
      "question": "What is effect modification?",
      "answer": "A third variable modifies the effect of an exposure on an outcome."
    },
    {
      "question": "What is misclassification?",
      "answer": "Incorrect categorization of participants regarding exposure or outcome."
    },
    {
      "question": "What is secular trend?",
      "answer": "Long-term change in incidence or prevalence over time."
    },
    {
      "question": "What is seasonal variation?",
      "answer": "Regular fluctuation in disease occurrence by season."
    },
    {
      "question": "What is \u201cnull value\u201d for RR or OR?",
      "answer": "1.0 (no association)."
    },
    {
      "question": "What is overmatching?",
      "answer": "Matching on variables so closely that it potentially hides true associations."
    },
    {
      "question": "What is case ascertainment bias?",
      "answer": "Bias from incomplete discovery of all cases."
    },
    {
      "question": "What is the precautionary principle?",
      "answer": "Policy of preventive action in the face of uncertainty."
    },
    {
      "question": "What is population risk?",
      "answer": "The likelihood that events will occur in a group of people."
    },
    {
      "question": "Define statistical power.",
      "answer": "The probability that a study will detect an association if one truly exists."
    },
    {
      "question": "What is the \u201cdenominator\u201d?",
      "answer": "The population or subgroup at risk."
    },
    {
      "question": "What is time-at-risk?",
      "answer": "The period in which an individual could potentially experience the event."
    },
    {
      "question": "What is ecological fallacy?",
      "answer": "Incorrect inference about individuals made from group data."
    },
    {
      "question": "What is cumulative incidence?",
      "answer": "Number of new cases over a period divided by the number at risk at the start."
    },
    {
      "question": "What is \u201crate ratio\u201d?",
      "answer": "Ratio of incidence rates between an exposed and unexposed group."
    },
    {
      "question": "What is per-protocol analysis?",
      "answer": "Analysis that includes only participants who completed the study as originally allocated."
    },
    {
      "question": "What is intention-to-treat analysis?",
      "answer": "Includes all participants in the groups to which they were randomized, regardless of what treatment they received."
    },
    {
      "question": "What is subject compliance?",
      "answer": "Degree to which participant behavior matches study protocol."
    },
    {
      "question": "What is case report?",
      "answer": "Detailed presentation of a single individual\u2019s illness."
    },
    {
      "question": "What is \u201ccase cluster\u201d?",
      "answer": "Aggregation of cases in a group linked by place and/or time."
    },
    {
      "question": "What is Pearson correlation coefficient?",
      "answer": "Statistical measure of the strength and direction of a linear relationship between two variables."
    },
    {
      "question": "What is multistage sampling?",
      "answer": "Selecting samples in stages, using groups and individuals within groups."
    },
    {
      "question": "What is \u201cconfounding variable\u201d?",
      "answer": "An outside influence that changes the effect of a dependent and independent variable."
    },
    {
      "question": "What is \u201cstandard error\u201d?",
      "answer": "An estimate of the variability of a sample mean."
    },
    {
      "question": "What is \u201crisk difference\u201d?",
      "answer": "The absolute difference in risk between two groups."
    },
    {
      "question": "What is \u201ccrude mortality rate\u201d?",
      "answer": "Number of deaths per population in a given time period ."
    },
    {
      "question": "What is cause-specific mortality rate?",
      "answer": "Number of deaths due to a specific cause per population."
    },
    {
      "question": "What is infant mortality rate?",
      "answer": "Number of deaths of infants under one year per 1,000 live births."
    },
    {
      "question": "What is morbidity?",
      "answer": "Incidence or prevalence of disease."
    },
    {
      "question": "What is mortality?",
      "answer": "Incidence of death."
    },
    {
      "question": "What is \u201cepidemiologic transition\u201d?",
      "answer": "Shift in disease patterns from infectious to chronic diseases in populations."
    },
    {
      "question": "Define global surveillance.",
      "answer": "Collection and sharing of international health data to detect and respond to threats."
    },
    {
      "question": "What is sentinel surveillance system?",
      "answer": "Surveillance at selected reporting sites chosen for likelihood to observe new cases."
    },
    {
      "question": "What is \u201coutbreak threshold\u201d?",
      "answer": "Case count or rate above which an outbreak is identified."
    },
    {
      "question": "What is \u201creportable disease\u201d?",
      "answer": "Disease required by law to be reported to authorities."
    },
    {
      "question": "What is \u201cimmunity\u201d?",
      "answer": "Resistance to infection due to antibodies or cell-mediated defenses."
    },
    {
      "question": "What is \u201cvertical transmission\u201d?",
      "answer": "Transmission from parent to offspring (i.e., mother to child)."
    },
    {
      "question": "What is \u201chorizontal transmission\u201d?",
      "answer": "Transmission between people of the same generation."
    },
    {
      "question": "What is prevalence rate?",
      "answer": "The proportion of a population that has the disease at a specific point in time."
    },
    {
      "question": "What is cumulative frequency?",
      "answer": "The sum of frequencies accumulated up to the upper boundary of each class."
    },
    {
      "question": "What is frequency distribution?",
      "answer": "Summary of how often each value occurs."
    },
    {
      "question": "What is \u201cmode of transmission\u201d?",
      "answer": "Means by which infectious agents are spread (direct, indirect, airborne, vector, vehicle, etc.)"
    },
    {
      "question": "What is denominator data?",
      "answer": "Information about the population at risk, used to calculate rates."
    },
    {
      "question": "What is numerator data?",
      "answer": "Count of events, such as cases, within the population."
    },
    {
      "question": "What is \u201cattack rate percent\u201d?",
      "answer": "Attack rate expressed as a percentage."
    },
    {
      "question": "What is confounding by indication?",
      "answer": "Bias in observational studies when the reason for treatment is associated with the outcome."
    },
    {
      "question": "What is secondary prevention?",
      "answer": "Detecting and treating disease early to stop or slow progression."
    },
    {
      "question": "What is \u201chost factor\u201d?",
      "answer": "A characteristic of an individual affecting susceptibility to disease."
    },
    {
      "question": "What is \u201cperiod prevalence\u201d?",
      "answer": "Number of cases that exist at any time during a defined period."
    },
    {
      "question": "What is \u201cpoint prevalence\u201d?",
      "answer": "Number of cases at a single point in time."
    },
    {
      "question": "What is meta-analysis?",
      "answer": "Combining results from multiple studies to produce a single estimate."
    },
    {
      "question": "What is systematic review?",
      "answer": "Summary of the literature using clear methodology for identification and evaluation."
    },
    {
      "question": "What is \u201cincidence density\u201d?",
      "answer": "Number of new cases divided by person-time at risk."
    },
    {
      "question": "What is \u201crisk ratio\u201d?",
      "answer": "Ratio of probability of event in exposed vs. unexposed."
    },
    {
      "question": "What is \u201ccase-control odds ratio\u201d?",
      "answer": "Comparison of odds of exposure among cases with odds of exposure among controls."
    },
    {
      "question": "What is \u201cprecision\u201d?",
      "answer": "Degree to which repeated measurements produce similar results."
    },
    {
      "question": "What is \u201caccuracy\u201d?",
      "answer": "Degree to which measurement reflects the true value."
    },
    {
      "question": "What is \u201csystematic error\u201d?",
      "answer": "Consistent, repeatable error usually due to study design."
    },
    {
      "question": "What is \u201crandom error\u201d?",
      "answer": "Fluctuations in data due to chance."
    },
    {
      "question": "What is \u201cp-value threshold\u201d?",
      "answer": "The cut-off below which a result is considered statistically significant (commonly p<0.05)."
    },
    {
      "question": "What is \u201cmultiple comparison problem\u201d?",
      "answer": "Increased risk of Type I error when multiple statistical tests are performed."
    },
    {
      "question": "What is \u201cBonferroni correction\u201d?",
      "answer": "Adjustment to significance threshold to prevent multiple comparison bias."
    },
    {
      "question": "What is \u201calpha level\u201d?",
      "answer": "The probability threshold for rejecting the null hypothesis."
    },
    {
      "question": "What is \u201cbeta level\u201d?",
      "answer": "Probability of failing to reject a false null hypothesis."
    },
    {
      "question": "What is Type I error?",
      "answer": "Incorrect rejection of a true null hypothesis (false positive)."
    },
    {
      "question": "What is Type II error?",
      "answer": "Failure to reject a false null hypothesis (false negative)."
    },
    {
      "question": "What is \u201cstandard population\u201d?",
      "answer": "Population structure used for comparison in age-standardized rates."
    },
    {
      "question": "What is \u201cnotification bias\u201d?",
      "answer": "Tendency for certain groups or conditions to be more likely to be reported."
    },
    {
      "question": "What is \u201ccase definition sensitivity\u201d?",
      "answer": "Ability to capture most true cases."
    },
    {
      "question": "What is \u201ccase definition specificity\u201d?",
      "answer": "Ability to exclude non-cases."
    },
    {
      "question": "What is \u201cepidemiologic surveillance\u201d?",
      "answer": "Systematic, ongoing collection and analysis of health data."
    },
    {
      "question": "What is \u201cconfounding control\u201d?",
      "answer": "Techniques to account for confounding, e.g., randomization, stratification."
    },
    {
      "question": "What is \u201cpower calculation\u201d?",
      "answer": "Calculation of required sample size to achieve desired statistical power."
    },
    {
      "question": "What is \u201crate adjustment\u201d?",
      "answer": "Modifying rates to accommodate demographic or other differences."
    },
    {
      "question": "What is \u201cdata triangulation\u201d?",
      "answer": "Using multiple sources or methods to validate data."
    },
    {
      "question": "What is \u201coutbreak response\u201d?",
      "answer": "Coordinated public health actions to control and end an outbreak."
    },
    {
      "question": "What is \u201cdata integrity\u201d?",
      "answer": "Assurance of data accuracy and reliability."
    },
    {
      "question": "What is a \u201cserosurvey\u201d?",
      "answer": "Survey using blood tests to estimate population immunity."
    },
    {
      "question": "What is a \u201c",
      "answer": "biosurveillance \u201d system? Integration of health data sources to detect and manage threats."
    },
    {
      "question": "What is \u201crisk communication\u201d?",
      "answer": "Strategic sharing of outbreak risks and actions with the public."
    },
    {
      "question": "What is \u201cmonitoring\u201d?",
      "answer": "Continuous, systematic collection of data for immediate use."
    },
    {
      "question": "What is \u201cevaluation\u201d in public health?",
      "answer": "Systematic assessment of a program\u2019s design, implementation, and outcomes."
    },
    {
      "question": "What is \u201cpolicy development\u201d?",
      "answer": "The formulation and implementation of public health laws and regulations."
    },
    {
      "question": "What is \u201ccommunity engagement\u201d?",
      "answer": "Involving communities in planning, decision-making, and action for health improvement."
    },
    {
      "question": "What is \u201cethical principle\u201d in epidemiology?",
      "answer": "Protecting human subjects, obtaining informed consent, ensuring beneficence."
    },
    {
      "question": "What is \u201csurveillance report\u201d?",
      "answer": "A regularly published document summarizing surveillance data and trends."
    }
  ];

  let html = `<h1>Flashcards</h1><p>Click each card to reveal the answer.</p>`;
  flashcardsData.forEach((card, index) => {
    const q = card.question.replace(/`/g, '');
    const a = card.answer.replace(/`/g, '');
    html += `<details class="flashcard" style="margin-bottom:1rem;"><summary><strong>${index + 1}. ${q}</strong></summary><p>${a}</p></details>`;
  });

  if (!window.EPIDEMIC_ENGINE_CONTENT) window.EPIDEMIC_ENGINE_CONTENT = {};
  window.EPIDEMIC_ENGINE_CONTENT.flashcards = {
    title: "Flashcards",
    difficulty: "B",
    content: html
  };

  // Expose raw data for other modules (extensions, packet generator)
  window.FLASHCARDS_DATA = flashcardsData;
})();
