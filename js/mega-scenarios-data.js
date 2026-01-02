/**
 * Phase 14: Mega Scenarios Data (Tier 2 Enhancements)
 * Adds complex, deep-branching interactive scenarios.
 */

// Scenario 1: Potluck (Foodborne Toxin)
const MEGA_POTLUCK_SCENARIO = {
    title: "Scenario 1: Potluck Panic (MEGA EDITION)",
    category: "investigation",
    difficulty: "Advanced",
    description: "A comprehensive investigation with budget constraints, time pressure, and red herrings. Can you solve it before the outbreak spreads?",
    nodes: {
        'start': {
            text: "Monday, 8:00 AM. Principal Skinner calls. 'Half the 5th grade is vomiting! They had a potluck yesterday.' You are the lead investigator.",
            choices: [
                { text: "Request a Line List (Wait 2 hours)", next: 'line_list', cost: 0, time: 2 },
                { text: "Interview the Principal immediately", next: 'principal_interview', cost: 0, time: 1 },
                { text: "Dispatch Environmental Health team to Kitchen", next: 'kitchen_dispatch', cost: 200, time: 1 }
            ]
        },
        'principal_interview': {
            text: "Principal: 'They ate around 1 PM. Kids started getting sick around 4 PM. Vomiting, some cramps. No fever reported yet.'",
            choices: [
                { text: "Short Incubation (3h) -> Suspect Toxin", next: 'toxin_hypothesis', cost: 0, time: 0 },
                { text: "Wait for Line List", next: 'line_list', cost: 0, time: 2 },
                { text: "Blame the cafeteria lady", next: 'game_over_blame', cost: 0, time: 0 }
            ]
        },
        'kitchen_dispatch': {
            text: "Team reports: Kitchen is spotless. BUT, the potluck food came from parents, not the kitchen. You wasted budget.",
            choices: [
                { text: "Pivot: Call parents for food list", next: 'food_list', cost: 0, time: 2 },
                { text: "Inspect the cafeteria anyway", next: 'waste_time_kitchen', cost: 100, time: 2 }
            ]
        },
        'line_list': {
            text: "Line List Received (10 students). <br>Mac & Cheese: 5/6 Ill. <br>Fruit Salad: 2/5 Ill. <br>Cookies: 4/10 Ill.",
            choices: [
                { text: "Calculate Attack Rates", next: 'calc_ar', cost: 0, time: 1 },
                { text: "Ignore math, trust gut", next: 'gut_feeling', cost: 0, time: 0 }
            ]
        },
        'calc_ar': {
            text: "AR(Mac) = 83%. AR(Salad) = 40%. AR(Cookies) = 40%. The association with Mac & Cheese is strong.",
            choices: [
                { text: "Interview parent who made Mac & Cheese", next: 'interview_parent', cost: 20, time: 2 },
                { text: "Test the Mac & Cheese (Lab)", next: 'lab_test_mac', cost: 150, time: 4 }
            ]
        },
        'toxin_hypothesis': {
            text: "Hypothesis: Staph aureus or Bacillus cereus. Both fit the 3h incubation. Which food fits?",
            choices: [
                { text: "Staph (Salty/Starchy foods)", next: 'focus_staph', cost: 0, time: 0 },
                { text: "B. cereus (Fried Rice)", next: 'focus_rice', cost: 0, time: 0 }
            ]
        },
        'focus_staph': {
            text: "You suspect Staph. You look for Mac & Cheese, Potato Salad, or Ham.",
            choices: [
                { text: "Examine Mac & Cheese leftovers", next: 'lab_test_mac', cost: 150, time: 4 },
                { text: "Interview Mac & Cheese cook", next: 'interview_parent', cost: 20, time: 2 }
            ]
        },
        'interview_parent': {
            text: "Mrs. G: 'I made the Mac & Cheese at 10 AM. It sat on the counter until 1 PM. I have a small cut on my finger.'",
            choices: [
                { text: "Cut finger + Room Temp = Staph!", next: 'final_conclusion', cost: 0, time: 0 },
                { text: "It's fine, cheese is preserved", next: 'game_over_missed', cost: 0, time: 0 }
            ]
        },
        'lab_test_mac': {
            text: "Lab Result: Positive for Staphylococcal Enterotoxin B. (Results took 4 hours).",
            choices: [
                { text: "Issue Recall & Public Statement", next: 'victory_screen', cost: 0, time: 1 }
            ]
        },
        'final_conclusion': {
            text: "You have the epidemiology (AR), the biology (Incubation), and the environmental cause (Temp abuse + Source).",
            choices: [
                { text: "Declare Outbreak Solved", next: 'victory_screen', cost: 0, time: 0 }
            ]
        },
        'victory_screen': {
            text: "🏆 EXCELLENT WORK! <br>Cause: Staph aureus (Enterotoxin). <br>Vehicle: Mac & Cheese. <br>Contributing Factor: Temperature Abuse.",
            end: true,
            win: true
        },
        'game_over_blame': {
            text: "GAME OVER. You accused staff without evidence. The union sues. You are fired.",
            end: true,
            win: false
        },
        'game_over_missed': {
            text: "GAME OVER. You dismissed the critical clue (Temp Abuse). More kids got sick.",
            end: true,
            win: false
        },
        'waste_time_kitchen': {
            text: "You found nothing. The outbreak spreads while you inspect clean counters.",
            choices: [{ text: "Go back to start", next: 'start', cost: 0, time: 0 }]
        },
        'focus_rice': {
            text: "There was no rice served. You wasted time.",
            choices: [{ text: "Re-evaluate", next: 'start', cost: 0, time: 1 }]
        },
        'gut_feeling': {
            text: "You guessed... incorrectly. Always use data.",
            end: true,
            win: false
        }
    }
};

// Scenario 2: Wedding (Case-Control / Salmonella)
const MEGA_WEDDING_SCENARIO = {
    title: "Scenario 2: The Wedding Crasher (MEGA)",
    category: "investigation",
    difficulty: "Expert",
    description: "A large wedding. 200 guests. You can't interview everyone. Design a Case-Control study to find the source.",
    nodes: {
        'start': {
            text: "Saturday Night. ER reports 15 patients from the 'Smith Wedding'. Diarrhea, Fever, Abdominal Pain.",
            choices: [
                { text: "Interview all 200 guests", next: 'fail_resource', cost: 1000, time: 10 },
                { text: "Design Case-Control Study", next: 'case_control_setup', cost: 0, time: 1 },
                { text: "Inspect the Venue Kitchen", next: 'kitchen_inspect', cost: 100, time: 2 }
            ]
        },
        'fail_resource': {
            text: "GAME OVER. You tried to interview everyone. You ran out of budget and staff. Use a more efficient study design.",
            end: true, win: false
        },
        'case_control_setup': {
            text: "You select 15 Cases (Sick) and 30 Controls (Well). You ask about the menu.",
            choices: [
                { text: "Analyze: Chicken Marsala", next: 'analyze_chicken', cost: 50, time: 2 },
                { text: "Analyze: Wedding Cake", next: 'analyze_cake', cost: 50, time: 2 }
            ]
        },
        'analyze_chicken': {
            text: "Chicken: <br>Cases: 14/15 ate. <br>Controls: 5/30 ate. <br>OR = (14*25)/(1*5) = 70.0. HIGH ASSOCIATION.",
            choices: [
                { text: "Conclude Chicken is source", next: 'traceback', cost: 0, time: 0 },
                { text: "Check the Cake too", next: 'analyze_cake', cost: 50, time: 2 }
            ]
        },
        'analyze_cake': {
            text: "Cake: <br>Cases: 15/15 ate. <br>Controls: 29/30 ate. <br>Everyone ate cake. No significant difference.",
            choices: [
                { text: "Go back to Chicken", next: 'analyze_chicken', cost: 0, time: 0 }
            ]
        },
        'kitchen_inspect': {
            text: "Kitchen looks fine. Chef mentions the chicken was 'sous vide' then seared.",
            choices: [
                { text: "Suspect undecooking", next: 'temp_check', cost: 0, time: 1 }
            ]
        },
        'temp_check': {
            text: "Logs show water bath temp dropped to 110F for 3 hours. Danger Zone!",
            choices: [
                { text: "Confirm Salmonella", next: 'victory', cost: 0, time: 0 }
            ]
        },
        'traceback': {
            text: "Epidemiology implicates chicken. Environmental health confirms temp abuse.",
            choices: [
                { text: "Close the case", next: 'victory', cost: 0, time: 0 }
            ]
        },
        'victory': {
            text: "🏆 CASE SOLVED. <br>Agent: Salmonella (Fever/Diarrhea). <br>Vehicle: Chicken Marsala. <br>Factor: Improper Holding Temp.",
            end: true, win: true
        }
    }
};

// Scenario 3: Cruise Ship (Intervention / Norovirus)
const MEGA_NORO_SCENARIO = {
    title: "Scenario 3: High Seas Hazard (MEGA)",
    category: "intervention",
    difficulty: "Intermediate",
    description: "Vomiting on the Lido Deck. It's Norovirus. Your goal: Containment. Every hour matters.",
    nodes: {
        'start': {
            text: "Day 3 of Cruise. 5 passengers report projectile vomiting. Protocol Beta initiated.",
            choices: [
                { text: "Isolate the sick passengers", next: 'isolation', cost: 0, time: 1 },
                { text: "Quarantine the ENTIRE ship", next: 'fail_panic', cost: 5000, time: 0 }
            ]
        },
        'fail_panic': {
            text: "GAME OVER. You caused a panic and ruined the vacation for 3000 people over 5 cases. Proportional response is key.",
            end: true, win: false
        },
        'isolation': {
            text: "Sick passengers isolated in cabins. But the virus is on surfaces.",
            choices: [
                { text: "Disinfect with Alcohol Wipes", next: 'fail_chem', cost: 100, time: 2 },
                { text: "Disinfect with Bleach Solution", next: 'bleach_success', cost: 100, time: 2 }
            ]
        },
        'fail_chem': {
            text: "FAILURE. Alcohol does NOT kill Norovirus effectively. Cases jump to 50 overnight.",
            end: true, win: false
        },
        'bleach_success': {
            text: "Correct. Chlorine bleach kills Noro. What about the buffet?",
            choices: [
                { text: "Leave it open (Sneeze Guards)", next: 'fail_buffet', cost: 0, time: 0 },
                { text: "Switch to 'Served by Staff' only", next: 'partial_success', cost: 50, time: 1 },
                { text: "Close Buffet completely", next: 'victory', cost: 200, time: 2 }
            ]
        },
        'fail_buffet': {
            text: "FAILURE. Sneeze guards don't stop fomite transmission on tongs. Cases explode.",
            end: true, win: false
        },
        'partial_success': {
            text: "Acceptable. Staff serving food reduces utensil sharing. Outbreak slows but doesn't stop immediately. (Silver Medal)",
            end: true, win: true
        },
        'victory': {
            text: "🏆 OUTBREAK STOPPED. Aggressive sanitation and closing self-service food areas saved the cruise.",
            end: true, win: true
        }
    }
};

// Injection Logic
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (window.SCENARIO_DB) {
                console.log('[MEGA SCENARIOS] Injecting Tier 2 Content...');

                // Override Scenario 1
                window.SCENARIO_DB['potluck'] = MEGA_POTLUCK_SCENARIO;

                // Add/Override Scenario 2
                window.SCENARIO_DB['wedding'] = MEGA_WEDDING_SCENARIO;

                // Add/Override Scenario 3
                window.SCENARIO_DB['cruise'] = MEGA_NORO_SCENARIO;

                // console.log('[MEGA SCENARIOS] Scenarios Active: Potluck, Wedding, Cruise.');
            }
        }, 600);
    });
}
