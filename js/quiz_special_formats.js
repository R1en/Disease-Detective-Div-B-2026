/**
 * Quiz Special Formats - EXCEPT/NOT Questions & Epidemic Curve Analysis
 * These question types are heavily featured in Science Olympiad exams
 */

window.QUIZ_SPECIAL_FORMATS = {
    // =========================================================================
    // "EXCEPT" / "NOT" / "ALL OF THE FOLLOWING" QUESTIONS
    // =========================================================================
    except_questions: [
        {
            q: `<p>All of the following are characteristics of <strong>point-source outbreaks</strong> EXCEPT:</p>`,
            answer: 2,
            type: "mc",
            topic: "Outbreak Patterns",
            options: [
                "Cases cluster within one incubation period",
                "Epidemic curve shows a sharp rise and gradual decline",
                "Secondary peaks occur at intervals equal to the incubation period",
                "All cases can be traced to a single exposure event"
            ],
            explain: "Secondary peaks at incubation intervals indicate PROPAGATED spread (person-to-person), not point-source. A pure point-source has ONE peak because everyone was exposed at the same time to the same source.",
            chapter: "ch8",
            difficulty: "intermediate"
        },
        {
            q: `<p>Which of the following is <strong>NOT</strong> a component of the Chain of Infection?</p>`,
            answer: 3,
            type: "mc",
            topic: "Chain of Infection",
            options: [
                "Reservoir",
                "Portal of exit",
                "Mode of transmission",
                "Vaccine schedule"
            ],
            explain: "The 6 links: (1) Infectious agent, (2) Reservoir, (3) Portal of exit, (4) Mode of transmission, (5) Portal of entry, (6) Susceptible host. Vaccine schedule is an INTERVENTION, not a link in the chain.",
            chapter: "ch6",
            difficulty: "beginner"
        },
        {
            q: `<p>All of the following increase <strong>Positive Predictive Value (PPV)</strong> EXCEPT:</p>`,
            answer: 1,
            type: "mc",
            topic: "Screening",
            options: [
                "Higher disease prevalence in the population",
                "Lower specificity of the test",
                "Higher specificity of the test",
                "Testing high-risk populations"
            ],
            explain: "LOWER specificity = more false positives = LOWER PPV. PPV increases with: higher prevalence, higher specificity, targeted testing of high-risk groups. This is why screening general population for rare diseases has low PPV.",
            chapter: "ch12",
            difficulty: "advanced"
        },
        {
            q: `<p>All of the following are examples of <strong>Selection Bias</strong> EXCEPT:</p>`,
            answer: 2,
            type: "mc",
            topic: "Bias",
            options: [
                "Healthy Worker Effect",
                "Volunteer bias",
                "Recall bias",
                "Loss to follow-up bias"
            ],
            explain: "Recall bias is INFORMATION bias (differential memory of exposure between cases and controls). Selection bias involves who enters or stays in the study: healthy workers, volunteers, dropouts.",
            chapter: "ch11",
            difficulty: "intermediate"
        },
        {
            q: `<p>Which of the following is <strong>NOT</strong> a Bradford Hill criterion for causation?</p>`,
            answer: 3,
            type: "mc",
            topic: "Bradford Hill",
            options: [
                "Temporality",
                "Biological gradient",
                "Consistency",
                "Statistical significance"
            ],
            explain: "The 9 Bradford Hill criteria include temporality, strength, consistency, specificity, biological gradient, plausibility, coherence, experiment, and analogy. Statistical significance is NOT a criterion - even significant associations may not be causal.",
            chapter: "ch16",
            difficulty: "intermediate"
        },
        {
            q: `<p>All of the following are true about <strong>Odds Ratios (OR)</strong> EXCEPT:</p>`,
            answer: 2,
            type: "mc",
            topic: "Measures of Association",
            options: [
                "OR can be calculated in case-control studies",
                "OR approximates RR when disease is rare (<10%)",
                "OR is always smaller than RR",
                "OR = 1.0 indicates no association"
            ],
            explain: "OR is NOT always smaller than RR. When disease is common (high attack rate), OR > RR. When RR > 1, OR overestimates the effect. OR only approximates RR when disease is rare.",
            chapter: "ch7",
            difficulty: "advanced"
        },
        {
            q: `<p>All of the following pathogens cause <strong>bloody diarrhea</strong> EXCEPT:</p>`,
            answer: 1,
            type: "mc",
            topic: "Pathogens",
            options: [
                "E. coli O157:H7 (STEC)",
                "Norovirus",
                "Shigella",
                "Campylobacter"
            ],
            explain: "Norovirus causes WATERY diarrhea with prominent vomiting. E. coli O157:H7, Shigella, and Campylobacter can all cause bloody/dysenteric diarrhea. Key: Norovirus = vomiting predominant; bloody = invasive bacteria.",
            chapter: "ch14",
            difficulty: "intermediate"
        },
        {
            q: `<p>All of the following are <strong>notifiable diseases</strong> requiring immediate reporting to CDC EXCEPT:</p>`,
            answer: 2,
            type: "mc",
            topic: "Surveillance",
            options: [
                "Measles",
                "Botulism",
                "Common cold",
                "Anthrax"
            ],
            explain: "The common cold is NOT notifiable - it's too common and not a public health threat. Measles, botulism, and anthrax are nationally notifiable because of their severity, outbreak potential, or bioterrorism concern.",
            chapter: "ch18",
            difficulty: "beginner"
        },
        {
            q: `<p>All of the following control measures target the <strong>mode of transmission</strong> EXCEPT:</p>`,
            answer: 3,
            type: "mc",
            topic: "Control Measures",
            options: [
                "Mosquito nets (for malaria)",
                "Water chlorination (for cholera)",
                "Food irradiation (for Salmonella)",
                "Vaccination (for measles)"
            ],
            explain: "Vaccination targets the SUSCEPTIBLE HOST (makes them immune), not the mode of transmission. Nets, water treatment, and food safety all interrupt transmission routes.",
            chapter: "ch6",
            difficulty: "intermediate"
        }
    ],

    // =========================================================================
    // EPIDEMIC CURVE INTERPRETATION WITH SVG VISUALS
    // =========================================================================
    epi_curves: [
        {
            q: `<p>Examine the epidemic curve below:</p>
                <svg width='300' height='140' viewBox='0 0 300 140' style='background:#f9fafb; border:1px solid #e5e7eb; border-radius:4px; display:block; margin:0.5rem auto;'>
                <text x='150' y='15' text-anchor='middle' font-size='10' fill='#374151' font-weight='bold'>Foodborne Outbreak - Cases by Hour</text>
                <!-- X-axis -->
                <line x1='40' y1='110' x2='280' y2='110' stroke='#374151' stroke-width='2'/>
                <text x='160' y='135' text-anchor='middle' font-size='9' fill='#6b7280'>Hours after Lunch (12 PM)</text>
                <!-- Y-axis -->
                <line x1='40' y1='110' x2='40' y2='20' stroke='#374151' stroke-width='2'/>
                <text x='15' y='65' text-anchor='middle' font-size='9' fill='#6b7280' transform='rotate(-90,15,65)'>Cases</text>
                <!-- Bars - Point source pattern -->
                <rect x='50' y='100' width='15' height='10' fill='#3b82f6'/>
                <rect x='70' y='85' width='15' height='25' fill='#3b82f6'/>
                <rect x='90' y='40' width='15' height='70' fill='#3b82f6'/>
                <rect x='110' y='55' width='15' height='55' fill='#3b82f6'/>
                <rect x='130' y='75' width='15' height='35' fill='#3b82f6'/>
                <rect x='150' y='90' width='15' height='20' fill='#3b82f6'/>
                <rect x='170' y='100' width='15' height='10' fill='#3b82f6'/>
                <!-- Time labels -->
                <text x='57' y='122' font-size='7' fill='#6b7280'>4h</text>
                <text x='97' y='122' font-size='7' fill='#6b7280'>8h</text>
                <text x='137' y='122' font-size='7' fill='#6b7280'>12h</text>
                <text x='177' y='122' font-size='7' fill='#6b7280'>16h</text>
                </svg>
                <p>Based on this epidemic curve, what is the MOST likely causative agent?</p>`,
            answer: 1,
            type: "mc",
            topic: "Epidemic Curves",
            options: [
                "Hepatitis A (incubation 15-50 days)",
                "Clostridium perfringens (incubation 8-16 hours)",
                "Staphylococcus aureus (incubation 1-6 hours)",
                "Norovirus (incubation 12-48 hours)"
            ],
            explain: "Cases peak around 8-10 hours post-exposure and span 4-16 hours. This fits C. perfringens (8-16 hr incubation). Staph would peak earlier (1-6 hr). Norovirus would peak later (12-48 hr). The duration helps differentiate agents.",
            chapter: "ch15",
            difficulty: "advanced"
        },
        {
            q: `<p>Examine the epidemic curve below:</p>
                <svg width='300' height='140' viewBox='0 0 300 140' style='background:#f9fafb; border:1px solid #e5e7eb; border-radius:4px; display:block; margin:0.5rem auto;'>
                <text x='150' y='15' text-anchor='middle' font-size='10' fill='#374151' font-weight='bold'>Measles Outbreak - Cases by Week</text>
                <!-- X-axis -->
                <line x1='30' y1='110' x2='280' y2='110' stroke='#374151' stroke-width='2'/>
                <text x='155' y='135' text-anchor='middle' font-size='9' fill='#6b7280'>Week Number</text>
                <!-- Y-axis -->
                <line x1='30' y1='110' x2='30' y2='20' stroke='#374151' stroke-width='2'/>
                <!-- Propagated pattern - multiple peaks -->
                <rect x='40' y='95' width='18' height='15' fill='#ef4444'/>
                <rect x='60' y='100' width='18' height='10' fill='#ef4444'/>
                <rect x='80' y='75' width='18' height='35' fill='#ef4444'/>
                <rect x='100' y='85' width='18' height='25' fill='#ef4444'/>
                <rect x='120' y='45' width='18' height='65' fill='#ef4444'/>
                <rect x='140' y='55' width='18' height='55' fill='#ef4444'/>
                <rect x='160' y='35' width='18' height='75' fill='#ef4444'/>
                <rect x='180' y='50' width='18' height='60' fill='#ef4444'/>
                <rect x='200' y='65' width='18' height='45' fill='#ef4444'/>
                <rect x='220' y='80' width='18' height='30' fill='#ef4444'/>
                <rect x='240' y='95' width='18' height='15' fill='#ef4444'/>
                <!-- Peak markers -->
                <text x='49' y='90' font-size='7' fill='#991b1b'>1</text>
                <text x='129' y='40' font-size='7' fill='#991b1b'>2</text>
                <text x='169' y='30' font-size='7' fill='#991b1b'>3</text>
                </svg>
                <p>This epidemic curve pattern is BEST described as:</p>`,
            answer: 2,
            type: "mc",
            topic: "Epidemic Curves",
            options: [
                "Point-source outbreak",
                "Continuous common-source outbreak",
                "Propagated outbreak with multiple generations",
                "Intermittent common-source outbreak"
            ],
            explain: "Multiple peaks separated by the measles incubation period (~10-14 days = ~2 weeks) indicate a propagated outbreak. Each generation of cases infects the next. The waves represent successive generations of transmission.",
            chapter: "ch8",
            difficulty: "intermediate"
        },
        {
            q: `<p>Examine the epidemic curve below:</p>
                <svg width='300' height='140' viewBox='0 0 300 140' style='background:#f9fafb; border:1px solid #e5e7eb; border-radius:4px; display:block; margin:0.5rem auto;'>
                <text x='150' y='15' text-anchor='middle' font-size='10' fill='#374151' font-weight='bold'>Waterborne Outbreak - Daily Cases</text>
                <!-- X-axis -->
                <line x1='30' y1='110' x2='280' y2='110' stroke='#374151' stroke-width='2'/>
                <text x='155' y='135' text-anchor='middle' font-size='9' fill='#6b7280'>Days</text>
                <!-- Y-axis -->
                <line x1='30' y1='110' x2='30' y2='20' stroke='#374151' stroke-width='2'/>
                <!-- Continuous source - plateau pattern -->
                <rect x='40' y='90' width='12' height='20' fill='#10b981'/>
                <rect x='55' y='70' width='12' height='40' fill='#10b981'/>
                <rect x='70' y='55' width='12' height='55' fill='#10b981'/>
                <rect x='85' y='45' width='12' height='65' fill='#10b981'/>
                <rect x='100' y='40' width='12' height='70' fill='#10b981'/>
                <rect x='115' y='40' width='12' height='70' fill='#10b981'/>
                <rect x='130' y='42' width='12' height='68' fill='#10b981'/>
                <rect x='145' y='45' width='12' height='65' fill='#10b981'/>
                <rect x='160' y='40' width='12' height='70' fill='#10b981'/>
                <rect x='175' y='43' width='12' height='67' fill='#f59e0b'/>
                <rect x='190' y='60' width='12' height='50' fill='#f59e0b'/>
                <rect x='205' y='75' width='12' height='35' fill='#f59e0b'/>
                <rect x='220' y='90' width='12' height='20' fill='#f59e0b'/>
                <rect x='235' y='100' width='12' height='10' fill='#f59e0b'/>
                <!-- Intervention marker -->
                <line x1='175' y1='25' x2='175' y2='105' stroke='#dc2626' stroke-width='2' stroke-dasharray='4'/>
                <text x='180' y='32' font-size='8' fill='#dc2626'>Source removed</text>
                </svg>
                <p>The red dashed line indicates when the contaminated water source was identified and removed. What does the yellow portion of the curve demonstrate?</p>`,
            answer: 1,
            type: "mc",
            topic: "Epidemic Curves",
            options: [
                "The intervention failed",
                "Cases continue for one incubation period after source removal (people already exposed)",
                "A new contamination source emerged",
                "The curve represents baseline endemic disease"
            ],
            explain: "After source removal, cases continue for approximately one incubation period because people already exposed will still develop disease. The declining 'tail' after intervention is expected and shows the intervention worked.",
            chapter: "ch8",
            difficulty: "advanced"
        }
    ],

    // =========================================================================
    // SCENARIO-BASED MULTI-STEP QUESTIONS
    // =========================================================================
    scenarios: [
        {
            q: `<p><strong>Scenario:</strong> A health department investigates gastroenteritis among attendees of a church picnic. Initial data:</p>
                <table class='exam-table'>
                <tr><th>Food Item</th><th>Ate: AR</th><th>Did Not Eat: AR</th><th>RR</th></tr>
                <tr><td>Potato Salad</td><td>45%</td><td>10%</td><td>4.5</td></tr>
                <tr><td>Fried Chicken</td><td>28%</td><td>25%</td><td>1.1</td></tr>
                <tr><td>Coleslaw</td><td>30%</td><td>22%</td><td>1.4</td></tr>
                <tr><td>Lemonade</td><td>26%</td><td>27%</td><td>0.96</td></tr>
                </table>
                <p>Which food is the MOST likely source of the outbreak?</p>`,
            answer: 0,
            type: "mc",
            topic: "Food Attack Rates",
            options: [
                "Potato Salad (RR = 4.5, large difference in attack rates)",
                "Fried Chicken (highest raw attack rate at 28%)",
                "Coleslaw (RR = 1.4, moderate association)",
                "Cannot determine - need laboratory confirmation"
            ],
            explain: "Potato Salad has the largest RR (4.5) and the largest difference in attack rates (45% vs 10%). Chicken's attack rate difference is minimal (28% vs 25%). You can implicate a food epidemiologically BEFORE lab confirmation.",
            chapter: "ch15",
            difficulty: "intermediate"
        },
        {
            q: `<p><strong>Continuing the scenario...</strong> Several attendees report getting sick very quickly. They ate the potato salad at 1:00 PM and started vomiting around 4:30 PM (Incubation ~3.5 hours). Symptoms include severe nausea, vomiting, and abdominal cramping, but NO fever.</p>
                <p>Based on the short incubation period and symptoms, which pathogen is MOST likely?</p>`,
            answer: 2,
            type: "mc",
            topic: "Pathogen Identification",
            options: [
                "Norovirus (Incubation 12-48 hours)",
                "Salmonella (Incubation 6-72 hours)",
                "Staphylococcus aureus (Incubation 1-6 hours)",
                "E. coli O157:H7 (Incubation 3-4 days)"
            ],
            explain: "<strong>Staphylococcus aureus:</strong> The classic presentation is short incubation (1-6 hours), prominent vomiting ('upper GI'), and association with foods handled by hands and then temperature abused (like potato salad). C. perfringens would be later (8-16 hours) and mostly diarrhea.",
            chapter: "ch15",
            difficulty: "advanced"
        }
    ]
};

// =========================================================================
// INTEGRATION LOGIC
// =========================================================================
(function () {
    if (!window.QUIZ_BANKS) window.QUIZ_BANKS = {};
    if (!window.QUIZ_BANKS.special_formats) {
        window.QUIZ_BANKS.special_formats = {};
    }

    const formats = window.QUIZ_SPECIAL_FORMATS;
    let totalAdded = 0;

    Object.keys(formats).forEach(category => {
        window.QUIZ_BANKS.special_formats[category] = formats[category];
        totalAdded += formats[category].length;
    });

    // Add to aggregated pool
    if (window.AGGREGATED_QUIZ_POOL && Array.isArray(window.AGGREGATED_QUIZ_POOL)) {
        Object.keys(formats).forEach(category => {
            formats[category].forEach(q => {
                window.AGGREGATED_QUIZ_POOL.push({
                    q: q.q,
                    question: q.q,
                    options: q.options,
                    answer: q.answer,
                    correct: q.answer,
                    explain: q.explain,
                    topic: q.topic,
                    chapter: q.chapter,
                    difficulty: q.difficulty || 'intermediate',
                    category: 'special_' + category
                });
            });
        });
    }

    console.log(`[QUIZ SPECIAL FORMATS] Added ${totalAdded} EXCEPT/NOT questions and epidemic curve analyses`);
})();
