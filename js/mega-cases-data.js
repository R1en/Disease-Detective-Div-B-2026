/**
 * Phase 14: Mega Cases Data (Tier 2 Enhancements)
 * Adds deep data (Line Lists, 2x2 Tables) to existing cases.
 */

const MEGA_CASES = [
    {
        id: "C1",
        isMegaCase: true,
        mega_title: "Mega Case: The School Potluck (Deep Dive)",
        description: "A more detailed investigation into the school potluck outbreak. You now have access to the full line list of 10 key attendees. Use this data to calculate Attack Rates and confirm the source.",

        // Data Context
        lineList: [
            { id: 1, name: "Alex", age: 10, sex: "M", mac_cheese: "Y", fruit_salad: "Y", illness: "Y" },
            { id: 2, name: "Ben", age: 10, sex: "M", mac_cheese: "Y", fruit_salad: "N", illness: "Y" },
            { id: 3, name: "Cat", age: 11, sex: "F", mac_cheese: "Y", fruit_salad: "N", illness: "Y" },
            { id: 4, name: "Dan", age: 10, sex: "M", mac_cheese: "Y", fruit_salad: "Y", illness: "Y" },
            { id: 5, name: "Eve", age: 11, sex: "F", mac_cheese: "Y", fruit_salad: "N", illness: "Y" },
            { id: 6, name: "Fay", age: 11, sex: "F", mac_cheese: "Y", fruit_salad: "Y", illness: "N" },
            { id: 7, name: "Gus", age: 10, sex: "M", mac_cheese: "N", fruit_salad: "Y", illness: "N" },
            { id: 8, name: "Hal", age: 11, sex: "M", mac_cheese: "N", fruit_salad: "Y", illness: "N" },
            { id: 9, name: "Ian", age: 10, sex: "M", mac_cheese: "N", fruit_salad: "N", illness: "N" },
            { id: 10, name: "Jon", age: 11, sex: "M", mac_cheese: "N", fruit_salad: "N", illness: "N" }
        ],

        // Multi-Step Questions
        questions: [
            {
                q: "Step 1: Calculate the Attack Rate (AR) for those who ate Mac & Cheese.",
                a: "83%",
                hint: "AR = (Ill / Total Exposed) * 100",
                explanation: "6 people ate Mac & Cheese (Alex, Ben, Cat, Dan, Eve, Fay). 5 of them got sick. AR = 5/6 = 0.833 = 83%."
            },
            {
                q: "Step 2: Calculate the Attack Rate (AR) for those who did NOT eat Mac & Cheese.",
                a: "0%",
                hint: "Look at Gus, Hal, Ian, Jon.",
                explanation: "4 people did NOT eat Mac & Cheese (Gus, Hal, Ian, Jon). 0 of them got sick. AR = 0/4 = 0%."
            },
            {
                q: "Step 3: Calculate the Attack Rate Difference (Risk Difference) for Mac & Cheese.",
                a: "83%",
                explanation: "ARD = AR(Exposed) - AR(Unexposed) = 83% - 0% = 83%. This indicates a very strong association."
            },
            {
                q: "Step 4: Analyze Fruit Salad. Is it a likely source?",
                a: "No (AR Difference is negative)",
                explanation: "Exposed to Salad: 5 people (Alex, Dan, Fay, Gus, Hal). Ill: 2 (Alex, Dan). AR = 2/5 = 40%. Unexposed: 5 people. Ill: 3 (Ben, Cat, Eve). AR = 3/5 = 60%. People who ate salad were LESS likely to get sick."
            }
        ]
    },
    {
        id: "C3",
        isMegaCase: true,
        mega_title: "Mega Case: The Raw Deal (Odds Ratios)",
        description: "High school students are hospitalized with HUS. This is a Case-Control study (ill vs. well). You must calculate the Odds Ratio (OR) to implicate the salad bar.",

        // Data Context (2x2 Table Data)
        // A = Exposed Cases, B = Exposed Controls, C = Unexposed Cases, D = Unexposed Controls
        twoByTwo: {
            exposure: "Ate at Salad Bar",
            a: 18, // Ill + Ate
            b: 6,  // Well + Ate
            c: 2,  // Ill + No Eat
            d: 24  // Well + No Eat
        },

        questions: [
            {
                q: "Step 1: Identify the values for a, b, c, d in the 2x2 table.",
                a: "a=18, b=6, c=2, d=24",
                hint: "a = Exposed Cases, b = Exposed Controls... Use the provided data context.",
                explanation: "Cases who ate salad (a) = 18. Controls who ate salad (b) = 6. Cases who didn't (c) = 2. Controls who didn't (d) = 24."
            },
            {
                q: "Step 2: Calculate the Odds of Exposure in Cases.",
                a: "9.0",
                hint: "Odds(Cases) = a / c",
                explanation: "Odds = 18 / 2 = 9. Cases were 9 times more likely to have eaten salad than not."
            },
            {
                q: "Step 3: Calculate the Odds of Exposure in Controls.",
                a: "0.25",
                hint: "Odds(Controls) = b / d",
                explanation: "Odds = 6 / 24 = 0.25."
            },
            {
                q: "Step 4: Calculate the Odds Ratio (OR).",
                a: "36.0",
                hint: "OR = (a*d) / (b*c)",
                explanation: "OR = (18 * 24) / (6 * 2) = 432 / 12 = 36.0. <br>Interpretation: Students who ate at the salad bar had 36 times higher odds of illness."
            }
        ]
    },
    {
        id: "C5",
        isMegaCase: true,
        mega_title: "Mega Case: Listeria (Epi Curves)",
        description: "A confusing outbreak with a long incubation period. Use the onset dates to determine the time course and find the median incubation period.",

        lineList: [
            { id: 1, onset: "July 1", exposure: "June 1" },
            { id: 2, onset: "July 10", exposure: "June 1" },
            { id: 3, onset: "July 15", exposure: "June 1" },
            { id: 4, onset: "July 20", exposure: "June 1" },
            { id: 5, onset: "Aug 1", exposure: "June 1" }
        ],

        questions: [
            {
                q: "Step 1: Calculate the Incubation Period for Case #1.",
                a: "30 days",
                explanation: "Exposure June 1 to Onset July 1 = 30 days."
            },
            {
                q: "Step 2: Calculate the Median Incubation Period for the group.",
                a: "45 days",
                hint: "Periods: 30, 40, 45, 50, 61 days.",
                explanation: "Incubation periods are 30, 40 (July 10), 45 (July 15), 50 (July 20), 61 (Aug 1). The median (middle value) is 45 days."
            },
            {
                q: "Step 3: What does this range (30-60 days) tell you about the pathogen?",
                a: "It fits Listeria.",
                explanation: "Listeria has a uniquely long and variable incubation period (1-70 days), unlike Salmonella (hours) or E. coli (days)."
            }
        ]
    },
    {
        id: "C10",
        isMegaCase: true,
        mega_title: "Mega Case: Cholera (Triage & Treatment)",
        description: "A rapidly moving cholera outbreak. You must Triage patients based on vitals to allocate limited IV fluids vs ORS.",

        lineList: [
            { id: 1, bp: "80/50", pulse: "120", skin_turgor: "Poor", consciousness: "Lethargic" },
            { id: 2, bp: "110/70", pulse: "90", skin_turgor: "Normal", consciousness: "Alert" },
            { id: 3, bp: "Undetectable", pulse: "Weak", skin_turgor: "Tent", consciousness: "Unconscious" },
            { id: 4, bp: "100/60", pulse: "100", skin_turgor: "Slow", consciousness: "Irritable" },
            { id: 5, bp: "90/60", pulse: "110", skin_turgor: "Poor", consciousness: "Lethargic" }
        ],

        questions: [
            {
                q: "Step 1: Identify patients with 'Severe Dehydration' (Plan C).",
                a: "ID 1, ID 3, ID 5",
                explanation: "Severe signs: Low BP (Shock), Lethargy/Unconsciousness, Poor Turgor. IDs 1, 3, and 5 fit this."
            },
            {
                q: "Step 2: Who can generally be treated with ORS alone (Plan B)?",
                a: "ID 4",
                explanation: "ID 4 is irritable with some signs but stable BP. ID 2 has no signs (Plan A). ID 4 needs ORS."
            },
            {
                q: "Step 3: Why is antibiotic treatment secondary?",
                a: "Rehydration saves lives immediately.",
                explanation: "Death comes from hypovolemic shock. Antibiotics shorten duration but do not fix the immediate shock. Fluid replacement is priority #1."
            }
        ]
    },
    {
        id: "C26_MEGA",  // Links to C26 Measles in main library
        isMegaCase: true,
        mega_title: "Mega Case: Measles & Vaccine Efficacy",
        description: "A measles outbreak in a school with mixed vaccination status. Use the line list data to calculate Vaccine Efficacy (VE).",

        lineList: [
            { id: 1, status: "Vaccinated", ill: "N" },
            { id: 2, status: "Vaccinated", ill: "N" },
            { id: 3, status: "Vaccinated", ill: "Y" }, // Breakthrough
            { id: 4, status: "Vaccinated", ill: "N" },
            { id: 5, status: "Vaccinated", ill: "N" },
            { id: 6, status: "Unvaccinated", ill: "Y" },
            { id: 7, status: "Unvaccinated", ill: "Y" },
            { id: 8, status: "Unvaccinated", ill: "Y" },
            { id: 9, status: "Unvaccinated", ill: "N" },
            { id: 10, status: "Unvaccinated", ill: "Y" }
        ],

        questions: [
            {
                q: "Step 1: Calculate the Attack Rate in the Unvaccinated (ARu).",
                a: "80%",
                hint: "Look at IDs 6-10.",
                explanation: "Total Unvaccinated = 5. Total Ill = 4 (IDs 6,7,8,10). ARu = 4/5 = 80%."
            },
            {
                q: "Step 2: Calculate the Attack Rate in the Vaccinated (ARv).",
                a: "20%",
                hint: "Look at IDs 1-5.",
                explanation: "Total Vaccinated = 5. Total Ill = 1 (ID 3). ARv = 1/5 = 20%."
            },
            {
                q: "Step 3: Calculate Vaccine Efficacy (VE).",
                a: "75%",
                hint: "VE = 1 - (ARv / ARu)",
                explanation: "VE = 1 - (0.20 / 0.80) = 1 - 0.25 = 0.75 = 75%. <br>The vaccine prevented 75% of potential cases."
            }
        ]
    },
    {
        id: "C52",  // New ID - Salmonella hypothesis case doesn't match C13 (Staph)
        isMegaCase: true,
        mega_title: "Mega Case: Salmonella (Hypothesis Generation)",
        description: "You have food history data for Ill vs Well people. Calculate the Attack Rate Difference to generate a hypothesis.",

        // Using line list to represent summary data for simplicity in rendering
        lineList: [
            { food: "Chicken", ill_eaten: "90%", well_eaten: "85%" },
            { food: "Salad", ill_eaten: "20%", well_eaten: "20%" },
            { food: "Ice Cream", ill_eaten: "95%", well_eaten: "10%" },
            { food: "Water", ill_eaten: "100%", well_eaten: "100%" }
        ],

        questions: [
            {
                q: "Step 1: Which food shows the biggest difference between Ill and Well consumption?",
                a: "Ice Cream",
                explanation: "Chicken: 90% vs 85% (Small diff). Salad: Equal. Water: Equal. Ice Cream: 95% of Ill ate it, vs only 10% of Well. Huge difference."
            },
            {
                q: "Step 2: Why isn't Water the cause if 100% of Ill people drank it?",
                a: "Because 100% of Well people drank it too.",
                explanation: "Exposure is necessary but not sufficient. A cause must be MORE common in the ill group than the well group."
            }
        ]
    },
    {
        id: "C29_MEGA",  // Links to C29 Legionella in main library
        isMegaCase: true,
        mega_title: "Mega Case: Legionella (Spatial Analysis)",
        description: "A cluster of pneumonia cases in a nursing home. Use the Line List to calculate Attack Rates by Floor and identify the source.",

        lineList: [
            { id: 1, room: "101", floor: "1", wing: "East", ill: "Y" },
            { id: 2, room: "102", floor: "1", wing: "East", ill: "Y" },
            { id: 3, room: "103", floor: "1", wing: "East", ill: "Y" },
            { id: 4, room: "104", floor: "1", wing: "West", ill: "N" },
            { id: 5, room: "105", floor: "1", wing: "West", ill: "N" },
            { id: 6, room: "201", floor: "2", wing: "East", ill: "N" },
            { id: 7, room: "202", floor: "2", wing: "East", ill: "N" },
            { id: 8, room: "203", floor: "2", wing: "East", ill: "N" },
            { id: 9, room: "204", floor: "2", wing: "West", ill: "N" },
            { id: 10, room: "205", floor: "2", wing: "West", ill: "N" }
        ],

        questions: [
            {
                q: "Step 1: Calculate the Attack Rate (AR) for the 1st Floor.",
                a: "60%",
                hint: "Count total residents on Floor 1 vs. Ill residents on Floor 1.",
                explanation: "Total on Floor 1 = 5 (IDs 1-5). Ill = 3 (IDs 1-3). AR = 3/5 = 60%."
            },
            {
                q: "Step 2: Calculate the Attack Rate (AR) for the 2nd Floor.",
                a: "0%",
                explanation: "Total on Floor 2 = 5 (IDs 6-10). Ill = 0. AR = 0%."
            },
            {
                q: "Step 3: Analyze the pattern. Where is the risk?",
                a: "1st Floor East Wing",
                explanation: "All cases are in rooms 101, 102, 103 (East Wing, 1st Floor). This suggests a localized water issue (e.g., dead leg in plumbing) rather than the central cooling tower."
            }
        ]
    },
    {
        id: "C12_MEGA",  // Links to C12 Botulism in main library
        isMegaCase: true,
        mega_title: "Mega Case: Botulism (Relative Risk)",
        description: "A home canning party. Everyone ate the peas. Calculate the Relative Risk (RR).",

        twoByTwo: {
            exposure: "Ate Canned Peas",
            a: 10, // Ill + Ate
            b: 2, // Well + Ate
            c: 0, // Ill + No Eat
            d: 5 // Well + No Eat
        },

        questions: [
            {
                q: "Step 1: Calculate AR(Exposed).",
                a: "83%",
                explanation: "Total Ate = 12. Ill = 10. AR = 10/12 = 0.83."
            },
            {
                q: "Step 2: Calculate AR(Unexposed).",
                a: "0%",
                explanation: "Total No Eat = 5. Ill = 0. AR = 0/5 = 0."
            },
            {
                q: "Step 3: Calculate Relative Risk (RR).",
                a: "Undefined / Infinite",
                explanation: "RR = 0.83 / 0. Since you cannot divide by zero, the risk is 'Infinite' or 'Undefined', possibly suggesting a necessary cause."
            }
        ]
    },
    {
        id: "C40",
        isMegaCase: false, // Drill
        title: "Drill: The Dirty Dataset",
        disease: "Data Error",
        mega_title: "Drill: Data Cleaning Challenge",
        description: "In real life, data is messy. You received this line list from a panicked school nurse. Identify the 3 critical errors that would ruin your analysis.",
        learning_objectives: ["Identify outliers.", "Standardize categorical variables.", "Detect missing data."],
        agent: "Typo / Human Error",
        incubation: "N/A",
        curve: "N/A",
        transmission: "Keyboard",
        spot_map: "N/A",

        // Data Context
        lineList: [
            { id: 1, age: 12, sex: "M", onset: "10/12/2025" },
            { id: 2, age: 199, sex: "F", onset: "10/12/2025" }, // Error 1
            { id: 3, age: 13, sex: "Femal", onset: "10/12/2025" }, // Error 2
            { id: 4, age: 12, sex: "M", onset: "12/10/2025" }, // Error 3 (Date format swap?) or just outlier
            { id: 5, age: 12, sex: "M", onset: "10/12/2025" }
        ],

        questions: [
            {
                q: "Error #1: Look at ID #2. What is wrong?",
                a: "Age is 199 (Impossible value).",
                explanation: "This is likely a typo for 19, or 99. In Epi Info, this would skew your mean age significantly. Always check min/max values!"
            },
            {
                q: "Error #2: Look at ID #3. What needs fixing?",
                a: "Sex is 'Femal' (Inconsistent category).",
                explanation: "Computers see 'Femal' and 'F' and 'Female' as 3 different groups. You must standardize to 'F' or 'Female'."
            },
            {
                q: "Error #3: Look at ID #4. What implies a data entry error?",
                a: "Onset date is months later (12/10 vs 10/12).",
                explanation: "If the outbreak is in October (`10/12`), a December date (`12/10`) is likely a US/UK date format confusion or a typo. It should likely be excluded or corrected."
            }
        ]
    },
    {
        id: "C51",  // Changed from C50 to avoid overwriting Zika case
        isMegaCase: true,
        mega_title: "Mastery Case: The Wedding Disaster",
        description: "The ultimate challenge. Analyze the Line List AND the 2x2 Table to solve the multi-modal outbreak.",

        lineList: [
            { id: 1, onset: "12:00", item: "Cake", ill: "Y" },
            { id: 2, onset: "12:30", item: "Cake", ill: "Y" },
            { id: 3, onset: "13:00", item: "Cake", ill: "Y" },
            { id: 4, onset: "N/A", item: "None", ill: "N" }
        ],
        twoByTwo: {
            exposure: "Ate Wedding Cake",
            a: 30, b: 5, c: 2, d: 20
        },

        questions: [
            {
                q: "Step 1: Calculate the Odds Ratio for the Cake.",
                a: "60.0",
                explanation: "OR = (30 * 20) / (5 * 2) = 600 / 10 = 60."
            },
            {
                q: "Step 2: Look at the line list onset times (12:00-13:00). Event was at 10:00. What is the incubation?",
                a: "2-3 Hours",
                explanation: "10AM to 12PM is 2 hours. Short incubation suggests Staph aureus or chemical toxin."
            },
            {
                q: "Step 3: Conclusion?",
                a: "Staph aureus in the Wedding Cake.",
                explanation: "High OR (60) implicated Cake. Short incubation (2h) implicated Staph/Toxin. Likely temperature abuse of the cream filling."
            }
        ]
    }
];

// Auto-Inject Logic
if (typeof window !== 'undefined') {
    // Wait for main library to load
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (typeof window.CASE_LIBRARY !== 'undefined') {
                console.log('[MEGA CASES] Injecting Tier 2 Content...');

                // ID mapping for cases that link to different base IDs
                const idMapping = {
                    'C26_MEGA': 'C26',  // Measles VE links to C26 Measles
                    'C29_MEGA': 'C29',  // Legionella Spatial links to C29 Legionella
                    'C12_MEGA': 'C12',  // Botulism RR links to C12 Botulism
                    'C51': null,        // Wedding Disaster is standalone
                    'C52': null         // Salmonella Hypothesis is standalone
                };

                MEGA_CASES.forEach(mega => {
                    // Check if this ID has a mapping to a base case
                    const baseId = idMapping[mega.id] || mega.id;
                    const idx = window.CASE_LIBRARY.findIndex(c => c.id === baseId);

                    if (idx !== -1) {
                        // Merge with existing base case
                        const baseCase = window.CASE_LIBRARY[idx];
                        window.CASE_LIBRARY[idx] = {
                            ...baseCase,
                            ...mega,
                            id: baseCase.id,  // Keep original ID
                            title: mega.mega_title || baseCase.title,
                            disease: baseCase.disease,  // Keep base disease
                            agent: baseCase.agent,      // Keep base agent
                            incubation: baseCase.incubation,
                            curve: baseCase.curve,
                            transmission: baseCase.transmission,
                            description: mega.description || baseCase.scenario_text
                        };
                        // console.log(`[MEGA CASES] Upgraded Case ${baseCase.id}`);
                    } else if (idMapping[mega.id] === null) {
                        // Standalone new case - add required fields
                        const newCase = {
                            ...mega,
                            title: mega.mega_title || mega.title || 'Advanced Case',
                            disease: mega.disease || 'Multi-Modal Analysis',
                            agent: mega.agent || 'Various',
                            incubation: mega.incubation || 'Variable',
                            curve: mega.curve || 'Analysis',
                            transmission: mega.transmission || 'Various',
                            scenario_text: mega.description,
                            learning_objectives: mega.learning_objectives || ['Advanced analytical skills'],
                            controls: mega.controls || ['Complete analysis'],
                            counterfactual: mega.counterfactual || 'Varies by scenario'
                        };
                        window.CASE_LIBRARY.push(newCase);
                        // console.log(`[MEGA CASES] Added New Case ${mega.id}`);
                    } else {
                        // Fallback: add as new if base not found
                        console.warn(`[MEGA CASES] Base case ${baseId} not found for ${mega.id}`);
                        window.CASE_LIBRARY.push({
                            ...mega,
                            title: mega.mega_title || 'Advanced Case',
                            disease: 'Analysis',
                            agent: 'Various',
                            incubation: 'Variable',
                            curve: 'Analysis',
                            transmission: 'Various'
                        });
                    }
                });

                console.log('[MEGA CASES] Injection complete');

                // Sort CASE_LIBRARY by ID to ensure proper display order
                window.CASE_LIBRARY.sort((a, b) => {
                    // Extract numeric portion of ID
                    const numA = parseInt(a.id.replace(/[^\d]/g, '')) || 999;
                    const numB = parseInt(b.id.replace(/[^\d]/g, '')) || 999;
                    return numA - numB;
                });
            }
        }, 500); // Run after main data load
    });
}
