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
                text: "Monday Morning. Mrs. Higgins reports 'everyone is throwing up' after yesterday's potluck.",
                choices: [
                    { text: "Ask for a list of foods served.", next: 'food_list', cost: 0, time: 1 },
                    { text: "Ask about symptoms and timing.", next: 'symptoms', cost: 0, time: 1 },
                    { text: "Send inspection team.", next: 'inspection', cost: 200, time: 4 }
                ]
            },
            'food_list': {
                text: "Menu: Potato Salad, BBQ Chicken, Coleslaw, Pudding. Chicken was 'pink'.",
                choices: [
                    { text: "Suspect Chicken (Salmonella?)", next: 'suspect_chicken', cost: 0, time: 0 },
                    { text: "Suspect Potato Salad (Staph?)", next: 'suspect_potato', cost: 0, time: 0 },
                    { text: "Ask about symptoms.", next: 'symptoms', cost: 0, time: 1 }
                ]
            },
            'symptoms': {
                text: "Started 3-4 hours after eating. Vomiting, cramps. No fever.",
                choices: [
                    { text: "Short incubation + Vomiting = Staph.", next: 'hypothesis_staph', cost: 0, time: 0 },
                    { text: "Short incubation + Vomiting = Norovirus.", next: 'hypothesis_noro', cost: 0, time: 0 },
                    { text: "Check Food List.", next: 'food_list', cost: 0, time: 1 }
                ]
            },
            'inspection': {
                text: "Kitchen clean. Potato Salad left out for 5 hours.",
                choices: [
                    { text: "Temp Abuse -> Staph.", next: 'hypothesis_staph', cost: 0, time: 0 },
                    { text: "Check Chicken logs.", next: 'chicken_logs', cost: 50, time: 1 }
                ]
            },
            'hypothesis_staph': {
                text: "Hypothesis: Staphylococcal food poisoning vs Potato Salad. Test?",
                choices: [
                    { text: "Test Salad (Confirm)", next: 'win', cost: 100, time: 2 },
                    { text: "Recall without test.", next: 'win_risky', cost: 0, time: 0 }
                ]
            },
            'win': {
                text: "VICTORY! Lab confirms Staph Enterotoxin. Recall issued.",
                end: true,
                win: true
            },
            'win_risky': {
                text: "VICTORY! You guessed right, but testing would have been safer.",
                end: true,
                win: true
            },
            'hypothesis_noro': { text: "Lab negative for Norovirus. You lost time.", end: true, win: false },
            'suspect_chicken': { text: "Chicken tested negative. It was the salad.", end: true, win: false },
            'suspect_potato': { text: "Good instinct. Why? (Go to Symptoms)", choices: [{ text: "Check symptoms", next: 'symptoms', cost: 0 }] },
            'chicken_logs': { text: "Chicken cooked to 165F. Safe.", choices: [{ text: "Back to inspection", next: 'inspection' }] }
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
        title: "Drill: Attack Rate",
        category: "calc",
        difficulty: "Beginner",
        description: "Calculate the Attack Rate (AR).",
        nodes: {
            'start': {
                text: "At a picnic, 50 people ate potato salad. 20 got sick.<br>Calculate the Attack Rate.",
                choices: [
                    { text: "20%", next: 'lose' },
                    { text: "40%", next: 'win' },
                    { text: "50%", next: 'lose' },
                    { text: "2.5", next: 'lose' }
                ]
            },
            'win': { text: "Correct! 20 / 50 = 0.40 (40%).", end: true, win: true },
            'lose': { text: "Incorrect. AR = Sick / Total Exposed.", end: true, win: false }
        }
    },
    'drill_rr': {
        title: "Drill: Risk Ratio",
        category: "calc",
        difficulty: "Intermediate",
        description: "Calculate the Relative Risk (RR).",
        nodes: {
            'start': {
                text: "Exposed AR = 40%. Unexposed AR = 10%.<br>Calculate RR.",
                choices: [
                    { text: "30%", next: 'lose' },
                    { text: "4.0", next: 'win' },
                    { text: "0.25", next: 'lose' }
                ]
            },
            'win': { text: "Correct! RR = 40 / 10 = 4.0.", end: true, win: true },
            'lose': { text: "Incorrect. RR = AR(Exposed) / AR(Unexposed).", end: true, win: false }
        }
    },
    'drill_or': {
        title: "Drill: Odds Ratio",
        category: "calc",
        difficulty: "Intermediate",
        description: "Calculate the Odds Ratio (OR).",
        nodes: {
            'start': {
                text: "Case-Control: a=20, b=10, c=5, d=10.<br>Calculate OR (ad/bc).",
                choices: [
                    { text: "4.0", next: 'win' },
                    { text: "2.0", next: 'lose' },
                    { text: "0.5", next: 'lose' }
                ]
            },
            'win': { text: "Correct! (20*10) / (10*5) = 200 / 50 = 4.0.", end: true, win: true },
            'lose': { text: "Incorrect. Formula is ad/bc.", end: true, win: false }
        }
    },
    'drill_ve': {
        title: "Drill: Vaccine Efficacy",
        category: "calc",
        difficulty: "Advanced",
        description: "Calculate Vaccine Efficacy (VE).",
        nodes: {
            'start': {
                text: "AR(Unvax) = 20%. AR(Vax) = 5%.<br>Calculate VE.",
                choices: [
                    { text: "75%", next: 'win' },
                    { text: "15%", next: 'lose' },
                    { text: "25%", next: 'lose' }
                ]
            },
            'win': { text: "Correct! VE = (ARu - ARv)/ARu = (20-5)/20 = 15/20 = 75%.", end: true, win: true },
            'lose': { text: "Incorrect. Formula is (ARu - ARv) / ARu.", end: true, win: false }
        }
    },
    'drill_test': {
        title: "Drill: Sensitivity",
        category: "calc",
        difficulty: "Advanced",
        description: "Calculate Sensitivity.",
        nodes: {
            'start': {
                text: "100 actually sick people. Test detects 90. Misses 10.<br>Sensitivity?",
                choices: [
                    { text: "90%", next: 'win' },
                    { text: "10%", next: 'lose' },
                    { text: "100%", next: 'lose' }
                ]
            },
            'win': { text: "Correct! TP / (TP + FN) = 90 / 100 = 90%.", end: true, win: true },
            'lose': { text: "Incorrect. Sensitivity is ability to detect disease.", end: true, win: false }
        }
    },

    // --- CATEGORY 3: LINE LISTS (5) ---
    'll_index': {
        title: "Line List: Index Case",
        category: "linelist",
        difficulty: "Beginner",
        description: "Identify the index case from a list.",
        nodes: {
            'start': {
                text: "Case A: Onset Jan 1. Case B: Onset Jan 3. Case C: Onset Dec 28.<br>Who is likely the Index Case?",
                choices: [
                    { text: "Case A", next: 'lose' },
                    { text: "Case B", next: 'lose' },
                    { text: "Case C", next: 'win' }
                ]
            },
            'win': { text: "Correct. Earliest onset suggests Index.", end: true, win: true },
            'lose': { text: "Incorrect. Look for the earliest date.", end: true, win: false }
        }
    },
    'll_exclude': {
        title: "Line List: Case Def",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Who meets the case definition?",
        nodes: {
            'start': {
                text: "Def: Fever AND Rash.<br>Patient 1: Fever only.<br>Patient 2: Fever + Rash.<br>Patient 3: Rash only.<br>Who is a case?",
                choices: [
                    { text: "Patient 1", next: 'lose' },
                    { text: "Patient 2", next: 'win' },
                    { text: "Patient 3", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Meets both criteria.", end: true, win: true },
            'lose': { text: "Incorrect. Must meet full definition.", end: true, win: false }
        }
    },
    'll_outlier': {
        title: "Line List: Outlier",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Spot the data error.",
        nodes: {
            'start': {
                text: "Ages: 12, 13, 14, 120, 13.<br>Which is likely an error?",
                choices: [
                    { text: "120", next: 'win' },
                    { text: "14", next: 'lose' }
                ]
            },
            'win': { text: "Correct. 120 is likely a typo for 12 or 20 (or improbable age).", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    },
    'll_incubation': {
        title: "Line List: Incubation",
        category: "linelist",
        difficulty: "Advanced",
        description: "Calculate incubation period.",
        nodes: {
            'start': {
                text: "Exposure: Jan 1. Onset: Jan 5.<br>Incubation period?",
                choices: [
                    { text: "1 day", next: 'lose' },
                    { text: "4 days", next: 'win' },
                    { text: "5 days", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Jan 5 - Jan 1 = 4 days.", end: true, win: true },
            'lose': { text: "Incorrect. Count days between exposure and onset.", end: true, win: false }
        }
    },
    'll_map': {
        title: "Line List: Mapping",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Visualize the data.",
        nodes: {
            'start': {
                text: "Most cases live on 'Broad St'. Map type?",
                choices: [
                    { text: "Spot Map", next: 'win' },
                    { text: "Epi Curve", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Spot maps show location.", end: true, win: true },
            'lose': { text: "Incorrect. Curves show time.", end: true, win: false }
        }
    },

    // --- CATEGORY 4: GRAPHS (5) ---
    'graph_point': {
        title: "Graph: Point Source",
        category: "graph",
        difficulty: "Beginner",
        description: "Identify the curve type.",
        nodes: {
            'start': {
                text: "Graph Description: Rapid rise to a sharp peak, then rapid decline. All within one incubation period.<br>Type?",
                choices: [
                    { text: "Point Source", next: 'win' },
                    { text: "Propagated", next: 'lose' },
                    { text: "Continuous", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Classic Point Source shape (log-normal).", end: true, win: true },
            'lose': { text: "Incorrect. Propagated has waves. Continuous is flat.", end: true, win: false }
        }
    },
    'graph_prop': {
        title: "Graph: Propagated",
        category: "graph",
        difficulty: "Intermediate",
        description: "Identify the curve type.",
        nodes: {
            'start': {
                text: "Graph Description: Series of progressively taller peaks, separated by incubation periods.<br>Type?",
                choices: [
                    { text: "Point Source", next: 'lose' },
                    { text: "Propagated", next: 'win' }
                ]
            },
            'win': { text: "Correct. Suggests person-to-person transmission.", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    },
    'graph_cont': {
        title: "Graph: Continuous",
        category: "graph",
        difficulty: "Intermediate",
        description: "Identify the curve type.",
        nodes: {
            'start': {
                text: "Graph Description: Rise to a plateau that persists for weeks.<br>Type?",
                choices: [
                    { text: "Point Source", next: 'lose' },
                    { text: "Continuous Common Source", next: 'win' }
                ]
            },
            'win': { text: "Correct. Constant exposure.", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    },
    'graph_outlier': {
        title: "Graph: Outlier",
        category: "graph",
        difficulty: "Advanced",
        description: "Identify the outlier.",
        nodes: {
            'start': {
                text: "Graph: Main peak Days 5-10. One case on Day 1.<br>What is the Day 1 case called?",
                choices: [
                    { text: "Index Case", next: 'win' },
                    { text: "Peak Case", next: 'lose' },
                    { text: "Last Case", next: 'lose' }
                ]
            },
            'win': { text: "Correct. The first case is the Index Case (or Primary Case).", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    },
    'graph_trend': {
        title: "Graph: Secular Trend",
        category: "graph",
        difficulty: "Advanced",
        description: "Long-term changes.",
        nodes: {
            'start': {
                text: "Graph: Data over 50 years showing steady decrease in Tb.<br>Type of trend?",
                choices: [
                    { text: "Seasonal", next: 'lose' },
                    { text: "Secular", next: 'win' },
                    { text: "Cyclical", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Secular = Long term.", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    }
};
