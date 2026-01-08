/**
 * Epidemic Engine - Interactive Scenarios Data
 * 20 scenarios covering Investigation, Math, Line Lists, and Graphs.
 */

window.SCENARIO_DB = {
    // --- CATEGORY 1: FIELD INVESTIGATION (5) ---
    'potluck': {
        title: "The Potluck Panic",
        category: "investigation",
        difficulty: "Beginner",
        description: "A community potluck ends in disaster. Can you identify the culprit dish?",
        nodes: {
            'start': {
                text: "<strong>Outbreak Report:</strong> Monday Morning. Mrs. Higgins reports multiple attendees of yesterday's community potluck are presenting with acute gastrointestinal illness.",
                choices: [
                    { text: "Request a menu and attendee list to build a line list.", next: 'food_list', cost: 0, time: 1 },
                    { text: "Interview cases to determine symptom profile and incubation period.", next: 'symptoms', cost: 0, time: 1 },
                    { text: "Immediately inspect the kitchen (Environmental Assessment).", next: 'inspection', cost: 200, time: 4 }
                ]
            },
            'food_list': {
                text: "<strong>Menu Items Served:</strong><br><ul><li>Potato Salad (Home-prepared)</li><li>BBQ Chicken (Grill)</li><li>Coleslaw (Store-bought)</li><li>Banana Pudding (Dairy)</li></ul><em>Note:</em> Several guests noted the chicken looked undercooked.",
                choices: [
                    { text: "Hypothesis: Salmonella (Chicken is hi-risk vector).", next: 'suspect_chicken', cost: 0, time: 0 },
                    { text: "Hypothesis: Staphylococcal Intoxication (Potato Salad temp abuse).", next: 'suspect_potato', cost: 0, time: 0 },
                    { text: "Gather clinical data (Symptoms/Onset) to narrow differential.", next: 'symptoms', cost: 0, time: 1 }
                ]
            },
            'symptoms': {
                text: "<strong>Clinical Profile:</strong><br><ul><li><strong>Predominant symptoms:</strong> Severe vomiting, abdominal cramps.</li><li><strong>Fever:</strong> Absent in 90% of cases.</li><li><strong>Incubation Period:</strong> Median 3.5 hours (Range: 2-6 hours).</li></ul>",
                choices: [
                    { text: "Clinical picture fits Staph aureus intoxication (Short incubation, vomiting).", next: 'hypothesis_staph', cost: 0, time: 0 },
                    { text: "Clinical picture fits Norovirus (Vomiting, but incubation usually longer).", next: 'hypothesis_noro', cost: 0, time: 0 },
                    { text: "Re-evaluate food exposures.", next: 'food_list', cost: 0, time: 1 }
                ]
            },
            'inspection': {
                text: "<strong>Environmental Assessment:</strong><br>Kitchen surfaces clean. Refrigerator at 38°F. <br><strong>Critical Finding:</strong> Potato Salad was prepared at 8:00 AM and left on the counter until serving at 1:00 PM (5 hours in Danger Zone).",
                choices: [
                    { text: "Temperature abuse supports Staph ID.", next: 'hypothesis_staph', cost: 0, time: 0 },
                    { text: "Check Chicken cooking logs.", next: 'chicken_logs', cost: 50, time: 1 }
                ]
            },
            'hypothesis_staph': {
                text: "<strong>Leading Hypothesis:</strong> Staphylococcal food poisoning vectoring via Potato Salad.<br><strong>Action Plan:</strong>",
                choices: [
                    { text: "Submit salad sample for Enterotoxin testing (Confirm).", next: 'win', cost: 100, time: 2 },
                    { text: "Issue recall/advisory based on epi links alone.", next: 'win_risky', cost: 0, time: 0 }
                ]
            },
            'win': {
                text: "<strong>VICTORY (Confirmed):</strong> Lab confirms presence of Staphylococcal Enterotoxin A in potato salad. <br><br><em>Lesson:</em> Short incubation + vomiting + temp abuse = Staph.",
                end: true,
                win: true
            },
            'win_risky': {
                text: "<strong>VICTORY (Presumptive):</strong> You acted fast, but without lab confirmation, legal challenges are possible. Testing is preferred for localized outbreaks.",
                end: true,
                win: true
            },
            'hypothesis_noro': { text: "<strong>Lab Result:</strong> Negative for Norovirus. <br><em>Analysis:</em> Incubation period (3h) was too short for classic Norovirus (12-48h). You lost valuable time.", end: true, win: false },
            'suspect_chicken': { text: "<strong>Lab Result:</strong> Chicken negative for Salmonella/Campylobacter. Incubation period (3h) inconsistent with Salmonella (6-72h).", end: true, win: false },
            'suspect_potato': { text: "Good epidemiological reasoning. What clinical data supports this? (Go to Symptoms)", choices: [{ text: "Review Clinical Profile", next: 'symptoms', cost: 0 }] },
            'chicken_logs': { text: "<strong>Log Review:</strong> Chicken reached internal temp 165°F. CCP met. Unlikely source.", choices: [{ text: "Back to Environmental Assessment", next: 'inspection' }] }
        }
    },
    'wedding': {
        title: "The Wedding Crasher",
        category: "investigation",
        difficulty: "Intermediate",
        description: "Guests at a summer wedding fall ill. Was it the cake or the water?",
        nodes: {
            'start': {
                text: "50 of 100 guests ill. Vomiting/Diarrhea. Incubation 24-48h.",
                choices: [
                    { text: "Inspect the caterer.", next: 'caterer', cost: 50 },
                    { text: "Interview guests (Case-Control).", next: 'interview', cost: 20 }
                ]
            },
            'caterer': {
                text: "Caterer had a sick employee preparing salads.",
                choices: [
                    { text: "Close the kitchen.", next: 'close_kitchen', cost: 500 },
                    { text: "Wait for interviews.", next: 'interview', cost: 0 }
                ]
            },
            'interview': {
                text: "Salad eaters: OR = 12.0. Water drinkers: OR = 1.1. Cake eaters: OR = 0.9.",
                choices: [
                    { text: "Results implicate Salad.", next: 'win', cost: 0 },
                    { text: "Results implicate Water.", next: 'lose', cost: 0 }
                ]
            },
            'win': { text: "Correct. Norovirus via sick food handler in salad.", end: true, win: true },
            'lose': { text: "Incorrect. Stats point to Salad.", end: true, win: false },
            'close_kitchen': { text: "You stopped the outbreak, but interviews confirm Salad was the vector.", end: true, win: true }
        }
    },
    'cruise': {
        title: "The Cruise Ship Crisis",
        category: "investigation",
        difficulty: "Advanced",
        description: "Outbreak on the high seas. Is it the buffet or the air?",
        nodes: {
            'start': {
                text: "High attack rate on Deck 4. Vomiting. 200 cases.",
                choices: [
                    { text: "Quarantine cabins.", next: 'quarantine', cost: 1000 },
                    { text: "Sanitize high-touch surfaces.", next: 'sanitize', cost: 200 }
                ]
            },
            'quarantine': { text: "Cases slowing, but passengers furious.", choices: [{ text: "Analyze data", next: 'analyze' }] },
            'sanitize': { text: "Good first step for Noro.", choices: [{ text: "Analyze data", next: 'analyze' }] },
            'analyze': {
                text: "Curve suggests person-to-person propagation.",
                choices: [
                    { text: "Confirm Norovirus.", next: 'win' },
                    { text: "Suspect Legionella (Air/Water).", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Classic Cruise Noro.", end: true, win: true },
            'lose': { text: "Incorrect. Vomiting points to Noro, not Legionella (Pneumonia).", end: true, win: false }
        }
    },
    'zoo': {
        title: "The Petting Zoo",
        category: "investigation",
        difficulty: "Intermediate",
        description: "Children visiting a petting zoo develop bloody diarrhea.",
        nodes: {
            'start': {
                text: "Bloody diarrhea in 5 kids. HUS in 1. Visited 'Cuddly Farm'.",
                choices: [
                    { text: "Suspect Salmonella.", next: 'salm' },
                    { text: "Suspect E. coli O157.", next: 'ecoli' }
                ]
            },
            'salm': { text: "Poltry/Reptiles? Maybe. But HUS points elsewhere.", choices: [{ text: "Reconsider E. coli", next: 'ecoli' }] },
            'ecoli': {
                text: "Correct. HUS + Bloody Diarrhea = STEC.",
                choices: [
                    { text: "Close the petting zoo.", next: 'win' },
                    { text: "Recommend Antibiotics.", next: 'lose_abx' }
                ]
            },
            'win': { text: "Correct. Zoonotic transmission. Handwashing stations were empty.", end: true, win: true },
            'lose_abx': { text: "CRITICAL ERROR! Antibiotics increase HUS risk in STEC.", end: true, win: false }
        }
    },
    'hospital': {
        title: "The Hospital Wing",
        category: "investigation",
        difficulty: "Advanced",
        description: "Post-surgical infections spiking in Ward B.",
        nodes: {
            'start': {
                text: "Surgical site infections up 300%. MRSA suspected.",
                choices: [
                    { text: "Swab staff noses.", next: 'swab' },
                    { text: "Review sterilization logs.", next: 'logs' }
                ]
            },
            'swab': { text: "One surgeon is MRSA positive (Carrier).", choices: [{ text: "Decolonize surgeon.", next: 'win' }] },
            'logs': { text: "Equipment sterile. It's a person.", choices: [{ text: "Swab staff.", next: 'swab' }] },
            'win': { text: "Correct. Asymptomatic carrier identified.", end: true, win: true }
        }
    },

    // --- CATEGORY 2: CALCULATION DRILLS (5) ---
    'drill_ar_1': {
        title: "Calc Drill: Attack Rate",
        category: "calc",
        difficulty: "Beginner",
        description: "Calculate the Attack Rate (AR) from outbreak data.",
        nodes: {
            'start': {
                text: "<strong>Scenario:</strong> Following a company picnic, health officials survey attendees.<br><table class='exam-table'><tr><th>Group</th><th>Total</th><th>Ill</th></tr><tr><td>Ate Potato Salad</td><td>50</td><td>20</td></tr></table><br><strong>Question:</strong> Calculate the Attack Rate for those who ate potato salad.",
                choices: [
                    { text: "20%", next: 'lose' },
                    { text: "40%", next: 'win' },
                    { text: "50%", next: 'lose' },
                    { text: "2.5", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct!</strong><br>Formula: AR = Ill / Total Exposed.<br>Calculation: 20 / 50 = 0.40 = <strong>40%</strong>.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Remember: Attack Rate is the proportion of EXPOSED people who became ILL.<br>Use Formula: Ill / Total.", end: true, win: false }
        }
    },
    'drill_rr': {
        title: "Calc Drill: Risk Ratio",
        category: "calc",
        difficulty: "Intermediate",
        description: "Calculate and interpret the Relative Risk (RR).",
        nodes: {
            'start': {
                text: "<strong>Data:</strong><br><ul><li>Attack Rate (Exposed) = 40%</li><li>Attack Rate (Unexposed) = 10%</li></ul><br><strong>Question:</strong> Calculate the Risk Ratio (RR).",
                choices: [
                    { text: "30%", next: 'lose' },
                    { text: "4.0", next: 'win' },
                    { text: "0.25", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct!</strong><br>Formula: RR = AR(Exposed) / AR(Unexposed)<br>Calculation: 40% / 10% = <strong>4.0</strong>.<br>Interpretation: Exposed group is 4x times more likely to get sick.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Risk Ratio is a division calculation (Ratio), not subtraction (Difference).<br>Use Formula: AR(Exp) / AR(Unexp).", end: true, win: false }
        }
    },
    'drill_or': {
        title: "Calc Drill: Odds Ratio",
        category: "calc",
        difficulty: "Intermediate",
        description: "Calculate the Odds Ratio (OR) from a Case-Control study.",
        nodes: {
            'start': {
                text: "<strong>Study Data:</strong><br><table class='exam-table'><tr><th></th><th>Cases</th><th>Controls</th></tr><tr><td>Exposed</td><td>20</td><td>10</td></tr><tr><td>Unexposed</td><td>5</td><td>10</td></tr></table><br><strong>Question:</strong> Calculate the Odds Ratio (OR) of exposure.",
                choices: [
                    { text: "4.0", next: 'win' },
                    { text: "2.0", next: 'lose' },
                    { text: "0.5", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct!</strong><br>Formula: (a * d) / (b * c)<br>Calculation: (20 * 10) / (10 * 5) = 200 / 50 = <strong>4.0</strong>.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>For Case-Control studies, use the Cross-Product Ratio (ad/bc).", end: true, win: false }
        }
    },
    'drill_ve': {
        title: "Calc Drill: Vaccine Efficacy",
        category: "calc",
        difficulty: "Advanced",
        description: "Calculate Vaccine Efficacy (VE) from attack rates.",
        nodes: {
            'start': {
                text: "<strong>Data:</strong><br><ul><li>Attack Rate in Unvaccinated = 20%</li><li>Attack Rate in Vaccinated = 5%</li></ul><br><strong>Question:</strong> Calculate the Vaccine Efficacy (VE).",
                choices: [
                    { text: "75%", next: 'win' },
                    { text: "15%", next: 'lose' },
                    { text: "25%", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct!</strong><br>Formula: VE = (ARu - ARv) / ARu<br>Calculation: (20 - 5) / 20 = 15/20 = 0.75 = <strong>75%</strong>.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Formula: (Risk_Unvax - Risk_Vax) / Risk_Unvax.<br>Think: 'What percentage of the risk was removed?'", end: true, win: false }
        }
    },
    'drill_test': {
        title: "Calc Drill: Sensitivity",
        category: "calc",
        difficulty: "Advanced",
        description: "Calculate Sensitivity from a 2x2 table context.",
        nodes: {
            'start': {
                text: "<strong>Scenario:</strong> 100 patients confirmed to have Flu (Gold Standard). A new rapid test detects flu in 90 of them but misses 10.<br><br><strong>Question:</strong> What is the Sensitivity of this rapid test?",
                choices: [
                    { text: "90%", next: 'win' },
                    { text: "10%", next: 'lose' },
                    { text: "100%", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct!</strong><br>Sensitivity = TP / (TP + FN) = 90 / 100 = <strong>90%</strong>.<br>Interpretation: The test correctly identifies 90% of true cases.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Sensitivity measures the ability to detect the DISEASE (Positives).<br>Formula: TP / All Sick.", end: true, win: false }
        }
    },

    // --- CATEGORY 3: LINE LISTS (5) ---
    'll_index': {
        title: "Line List: Index Case",
        category: "linelist",
        difficulty: "Beginner",
        description: "Identify the index case from line list data.",
        nodes: {
            'start': {
                text: "<strong>Line List Data:</strong><br><table class='exam-table'><tr><th>ID</th><th>Onset Date</th></tr><tr><td>A</td><td>Jan 01</td></tr><tr><td>B</td><td>Jan 03</td></tr><tr><td>C</td><td>Dec 28</td></tr></table><br><strong>Question:</strong> Who is the likely <strong>Index Case</strong>?",
                choices: [
                    { text: "Case A", next: 'lose' },
                    { text: "Case B", next: 'lose' },
                    { text: "Case C", next: 'win' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>Case C has the earliest onset date (Dec 28), making them the first identified case (Index Case) in this dataset.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>The Index Case is the *first* case to come to attention (often earliest onset). Check the dates.", end: true, win: false }
        }
    },
    'll_exclude': {
        title: "Line List: Case Status",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Classify cases based on a definition.",
        nodes: {
            'start': {
                text: "<strong>Case Definition:</strong> Fever (&ge;100.4&deg;F) AND Maculopapular Rash.<br><br><strong>Patients:</strong><br>1. Fever only (101&deg;F)<br>2. Fever (102&deg;F) + Rash<br>3. Rash only<br><br><strong>Question:</strong> Who meets the confirmed case definition?",
                choices: [
                    { text: "Patient 1", next: 'lose' },
                    { text: "Patient 2", next: 'win' },
                    { text: "Patient 3", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>Patient 2 is the only one who meets BOTH criteria (Fever AND Rash).", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>The definition requires BOTH Fever AND Rash. 'AND' means all criteria must be met.", end: true, win: false }
        }
    },
    'll_outlier': {
        title: "Line List: Data Cleaning",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Identify data entry errors.",
        nodes: {
            'start': {
                text: "<strong>Age Column Data:</strong><br>[ 12, 13, 14, 120, 13 ]<br><br><strong>Question:</strong> Which value requires validation?",
                choices: [
                    { text: "120", next: 'win' },
                    { text: "14", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>120 is statistically improbable for a school age group and is likely a data entry error (typo for 12 or 20).", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>14 is a plausible age. Look for the biologically or contextually impossible value.", end: true, win: false }
        }
    },
    'll_incubation': {
        title: "Line List: Incubation",
        category: "linelist",
        difficulty: "Advanced",
        description: "Calculate the individual incubation period.",
        nodes: {
            'start': {
                text: "<strong>Case A Data:</strong><br><ul><li>Date of Exposure: Jan 1</li><li>Date of Symptom Onset: Jan 5</li></ul><br><strong>Question:</strong> What is the incubation period for Case A?",
                choices: [
                    { text: "1 day", next: 'lose' },
                    { text: "4 days", next: 'win' },
                    { text: "5 days", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>Jan 5 (Onset) - Jan 1 (Exposure) = <strong>4 days</strong>.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Incubation Period = Date of Onset - Date of Exposure. Count the days between.", end: true, win: false }
        }
    },
    'll_map': {
        title: "Line List: Mapping",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Choose the correct visualization.",
        nodes: {
            'start': {
                text: "<strong>Scenario:</strong> You verify that 90% of cholera cases reside on 'Broad Street'.<br><br><strong>Question:</strong> Which tool best visualizes this spatial clustering?",
                choices: [
                    { text: "Spot Map", next: 'win' },
                    { text: "Epi Curve", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>Spot Maps visualize <strong>Place</strong> (geographic clustering). Epi Curves visualize <strong>Time</strong>.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Epi Curves show distribution over TIME. For location/place, use a Map.", end: true, win: false }
        }
    },

    // --- CATEGORY 4: GRAPHS (5) ---
    'graph_point': {
        title: "Graph: Point Source",
        category: "graph",
        difficulty: "Beginner",
        description: "Identify the epidemic curve pattern.",
        nodes: {
            'start': {
                text: "<strong>Curve Description:</strong><br>Cases rise rapidly to a sharp peak and fall gradually. All cases occur within one incubation period.<br><br><strong>Question:</strong> identifying this pattern.",
                choices: [
                    { text: "Point Source", next: 'win' },
                    { text: "Propagated", next: 'lose' },
                    { text: "Continuous", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>This matches a <strong>Point Source</strong> outbreak (e.g., a single contaminated meal).", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Propagated has waves. Continuous has a flat plateau.", end: true, win: false }
        }
    },
    'graph_prop': {
        title: "Graph: Propagated",
        category: "graph",
        difficulty: "Intermediate",
        description: "Identify the epidemic curve pattern.",
        nodes: {
            'start': {
                text: "<strong>Curve Description:</strong><br>A series of progressively taller peaks, each separated by approximately one incubation period.<br><br><strong>Question:</strong> Identify this pattern.",
                choices: [
                    { text: "Point Source", next: 'lose' },
                    { text: "Propagated", next: 'win' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>This suggests <strong>Propagated</strong> (person-to-person) transmission, where each wave infects more people.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Point source has a single peak. Multiple waves suggest spread between people.", end: true, win: false }
        }
    },
    'graph_cont': {
        title: "Graph: Continuous",
        category: "graph",
        difficulty: "Intermediate",
        description: "Identify the epidemic curve pattern.",
        nodes: {
            'start': {
                text: "<strong>Curve Description:</strong><br>Cases rise gradually to a plateau that persists for weeks without a distinct peak.<br><br><strong>Question:</strong> Identify this pattern.",
                choices: [
                    { text: "Point Source", next: 'lose' },
                    { text: "Continuous Common Source", next: 'win' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>A plateau indicates a <strong>Continuous Common Source</strong> (e.g., a contaminated water supply that isn't fixed).", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Point source falls quickly. Propagated has peaks. A plateau means constant exposure.", end: true, win: false }
        }
    },
    'graph_outlier': {
        title: "Graph: Outlier Analysis",
        category: "graph",
        difficulty: "Advanced",
        description: "Interpret outliers in an epi curve.",
        nodes: {
            'start': {
                text: "<strong>Graph Description:</strong><br>The main cluster of cases occurs Days 5-10. However, there is a single isolated case on Day 1.<br><br><strong>Question:</strong> What is this Day 1 case likely called?",
                choices: [
                    { text: "Index Case", next: 'win' },
                    { text: "Peak Case", next: 'lose' },
                    { text: "Secondary Case", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br>The first case to appear (outlier at start) is often the <strong>Index Case</strong>, who may have introduced the pathogen.", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Peak case is in the middle. Secondary cases come later. The first case is the Index.", end: true, win: false }
        }
    },
    'graph_trend': {
        title: "Graph: Secular Trend",
        category: "graph",
        difficulty: "Advanced",
        description: "Identify long-term data trends.",
        nodes: {
            'start': {
                text: "<strong>Graph Description:</strong><br>A line graph shows the incidence of Tuberculosis decreasing steadily over 50 years.<br><br><strong>Question:</strong> What type of trend is this?",
                choices: [
                    { text: "Seasonal", next: 'lose' },
                    { text: "Secular", next: 'win' },
                    { text: "Cyclical", next: 'lose' }
                ]
            },
            'win': { text: "<strong>Correct.</strong><br><strong>Secular Trends</strong> refer to long-term changes over years or decades (e.g., decline of infectious disease).", end: true, win: true },
            'lose': { text: "<strong>Incorrect.</strong><br>Seasonal happens every year. Cyclical is periodic (e.g., every 5 years). Long-term is Secular.", end: true, win: false }
        }
    }
};
