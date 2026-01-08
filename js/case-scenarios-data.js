const CASE_SCENARIOS = [
    {
        id: "case1",
        title: "Case 1: The Science Fair",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> 7th graders attended a science fair. 4 hours later, many students reported vomiting (92%) and nausea (87%). None had fever.",
                question: "Based on the symptoms and incubation period (4 hours), what is the most likely agent?",
                options: ["Norovirus", "Staphylococcus aureus toxin", "Salmonella", "E. coli O157:H7"],
                answer: 1,
                feedback: "<b>Correct!</b> Rapid onset (4h) + vomiting without fever strongly suggests a preformed toxin like Staph aureus. Norovirus usually takes 12-48h."
            },
            {
                text: "<b>Investigation:</b> You interview the students. Attack Rates: Chicken Salad (80% exposed vs 33% unexposed), Mac & Cheese (80% exposed vs 33% unexposed), Fruit (67% exposed vs 60% unexposed).",
                question: "Both Chicken Salad and Mac & Cheese have the same Attack Rates. Which is the more likely vehicle for <i>Staphylococcus aureus</i>?",
                options: ["Chicken Salad", "Mac & Cheese", "Fruit", "Both are equally likely"],
                answer: 0,
                feedback: "<b>Correct!</b> Chicken Salad is a high-risk food for Staph (hand contact + temperature abuse). Mac & Cheese is less likely to support Staph toxin formation."
            },
            {
                text: "<b>Conclusion:</b> The food handler for the Chicken Salad had a cut on their finger.",
                question: "What type of outbreak source is this?",
                options: ["Point Source", "Continuous Source", "Propagated", "Intermittent"],
                answer: 0,
                feedback: "<b>Correct!</b> This is a Point Source outbreak: single exposure event, rapid onset, and tight clustering of cases."
            }
        ]
    },
    {
        id: "case2",
        title: "Case 2: The Middle School Cluster",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> A cluster of respiratory illness is reported in a middle school. The Epi Curve shows multiple small peaks separated by 1-4 days over a 10-day period.",
                question: "What pattern does this Epi Curve suggest?",
                options: ["Point Source", "Common Source", "Propagated", "Environmental"],
                answer: 2,
                feedback: "<b>Correct!</b> Multiple waves or peaks separated by incubation periods indicates person-to-person transmission (propagated)."
            },
            {
                text: "<b>Data Analysis:</b> You calculate Attack Rates by Homeroom: C1 (67%), C2 (100%), C3 (33%), C4 (25%).",
                question: "What does this distribution suggest?",
                options: ["Cafeteria food is the cause", "Transmission is occurring in classrooms (C1, C2)", "Ventilation system failure", "Water fountain contamination"],
                answer: 1,
                feedback: "<b>Correct!</b> Clustering in specific homerooms (C1, C2) suggests close-contact transmission (droplet) is happening within those rooms."
            },
            {
                text: "<b>Further Investigation:</b> You find that students in C1 and C2 share a choir class.",
                question: "How does this support your hypothesis?",
                options: ["It doesn't", "Singing increases droplet spread, supporting person-to-person transmission", "It suggests a waterborne source in the choir room", "It proves airborne transmission"],
                answer: 1,
                feedback: "<b>Correct!</b> Singing is a high-risk activity for droplet spread, reinforcing the propagated/person-to-person hypothesis."
            }
        ]
    },
    {
        id: "case3",
        title: "Case 3: The Wedding Banquet",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Background:</b> Guests at a wedding banquet fall ill. Onset times vary from 12 to 36 hours after the meal.",
                question: "Which agent fits this incubation period?",
                options: ["Staph aureus", "Salmonella", "Botulism", "Chemical toxin"],
                answer: 1,
                feedback: "<b>Correct!</b> Salmonella typically has an incubation period of 6-72 hours (average 12-36h). Staph is much faster (2-4h)."
            },
            {
                text: "<b>Epi Curve:</b> The curve shows a log-normal distribution with a single peak.",
                question: "What does this curve shape imply?",
                options: ["Propagated outbreak", "Point source outbreak", "Continuous source", "Endemic disease"],
                answer: 1,
                feedback: "<b>Correct!</b> A single peak with a log-normal (steep up, gradual down) shape is characteristic of a Point Source outbreak."
            },
            {
                text: "<b>Outlier:</b> One case had onset 2 hours before the meal.",
                question: "How do you interpret this outlier?",
                options: ["The vehicle was served earlier", "This is likely the primary case (index) or a background case", "The incubation period is shorter than thought", "It proves the food wasn't the cause"],
                answer: 1,
                feedback: "<b>Correct!</b> A case occurring before the exposure is likely a background case (unrelated) or the index case who contaminated the food/environment."
            }
        ]
    },
    {
        id: "case4",
        title: "Case 4: The Basketball Game",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> Several students fell ill after a basketball game. You survey attendees.",
                question: "Among those who consumed food at the concession stand, 3 out of 4 (75%) became ill. Among those who did NOT consume food at the stand, 3 out of 4 (75%) also became ill. What is the Risk Ratio?",
                options: ["2.0", "0.5", "1.0", "1.5"],
                answer: 2,
                feedback: "<b>Correct!</b> AR(exposed) = 75%, AR(unexposed) = 75%. RR = 0.75 / 0.75 = 1.0. The game is NOT the cause."
            },
            {
                text: "<b>Re-evaluation:</b> You look for other common exposures. All ill students consumed food at a specific concession stand.",
                question: "What is your next step?",
                options: ["Close the school", "Calculate AR for specific food items at the stand", "Test the water", "Interview the basketball players"],
                answer: 1,
                feedback: "<b>Correct!</b> You need to identify the specific vehicle. Calculate Attack Rates for each food item served at the stand."
            }
        ]
    },
    {
        id: "case5",
        title: "Case 5: The Picnic Salad",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> A potato salad is suspected in an outbreak. AR(eaten) = 80%, AR(not eaten) = 10%.",
                question: "Calculate the Relative Risk (RR).",
                options: ["8.0", "0.8", "7.0", "80%"],
                answer: 0,
                feedback: "<b>Correct!</b> RR = 80% / 10% = 8.0. This is a strong association."
            },
            {
                text: "<b>Context:</b> The salad was left out in the sun for 5 hours.",
                question: "What factor contributed most to this outbreak?",
                options: ["Acidic ingredients", "Temperature abuse", "Cross-contamination", "Improper cooking"],
                answer: 1,
                feedback: "<b>Correct!</b> Leaving food in the 'Danger Zone' (40-140°F) for >2 hours allows bacteria to multiply. This is Temperature Abuse."
            }
        ]
    },
    {
        id: "case6",
        title: "Case 6: The Swimming Pool",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> Children report diarrhea after swimming. Cryptosporidium is suspected.",
                question: "Why is 'Crypto' a common pool pathogen?",
                options: ["It multiplies in water", "It is chlorine-resistant", "It is airborne", "It comes from algae"],
                answer: 1,
                feedback: "<b>Correct!</b> Cryptosporidium has a thick outer shell that makes it highly resistant to standard chlorine levels."
            },
            {
                text: "<b>Control:</b> The pool operator wants to shock the pool with chlorine.",
                question: "Is this sufficient?",
                options: ["Yes, standard shock works", "No, hyperchlorination is required for Crypto", "No, the pool must be drained", "Yes, if done overnight"],
                answer: 1,
                feedback: "<b>Correct!</b> Crypto requires Hyperchlorination (very high levels for long time) or UV treatment to kill. Standard shock is often not enough."
            }
        ]
    },
    {
        id: "case7",
        title: "Case 7: The Unknown Toxin",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Background:</b> Diners report numbness and tingling in lips after eating fish.",
                question: "What is the likely agent?",
                options: ["Scombroid", "Ciguatera", "Salmonella", "Norovirus"],
                answer: 1,
                feedback: "<b>Correct!</b> Numbness/tingling (paresthesia) and temperature reversal are classic signs of Ciguatera toxin from reef fish."
            },
            {
                text: "<b>Prevention:</b> The chef asks how to cook the fish to destroy the toxin.",
                question: "What do you tell them?",
                options: ["Cook to 165°F", "Freeze for 24 hours", "The toxin is heat-stable and cannot be destroyed", "Marinate in lime juice"],
                answer: 2,
                feedback: "<b>Correct!</b> Ciguatoxin is heat-stable. Cooking or freezing does NOT destroy it. Prevention relies on not eating large reef fish from risky areas."
            }
        ]
    },
    {
        id: "case8",
        title: "Case 8: The Camping Trip",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> Campers develop bloody diarrhea after drinking from a stream.",
                question: "Which pathogen is most likely?",
                options: ["Giardia", "E. coli O157:H7", "Norovirus", "Staph aureus"],
                answer: 1,
                feedback: "<b>Correct!</b> Bloody diarrhea (dysentery) is a hallmark of E. coli O157:H7 (or Shigella/Campylobacter). Giardia causes greasy, non-bloody stool."
            },
            {
                text: "<b>Treatment:</b> A parent wants to give antibiotics.",
                question: "Is this recommended for E. coli O157:H7?",
                options: ["Yes, immediately", "No, it increases risk of HUS", "Yes, but only penicillin", "No, it causes resistance"],
                answer: 1,
                feedback: "<b>Correct!</b> Antibiotics can increase the release of Shiga toxin, raising the risk of Hemolytic Uremic Syndrome (HUS). Supportive care is best."
            }
        ]
    },
    {
        id: "case9",
        title: "Case 9: The Daycare",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> Shigella outbreak in a daycare. Transmission is rapid.",
                question: "Why does Shigella spread so easily?",
                options: ["It is airborne", "It has a very low infectious dose", "It survives on dry surfaces for years", "It is vector-borne"],
                answer: 1,
                feedback: "<b>Correct!</b> Shigella has a very low infectious dose (10-100 bacteria), making person-to-person (fecal-oral) transmission very efficient."
            },
            {
                text: "<b>Control:</b> What is the most critical control measure?",
                question: "Select the best option.",
                options: ["Handwashing supervision", "Closing the kitchen", "Spraying for bugs", "Testing the water"],
                answer: 0,
                feedback: "<b>Correct!</b> Since it's fecal-oral and low dose, supervised Handwashing is the most effective intervention in a daycare setting."
            }
        ]
    },
    {
        id: "case10",
        title: "Case 10: The Cruise Ship",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> Hundreds of passengers vomit. The ship returns to port.",
                question: "What is the classic 'Cruise Ship Virus'?",
                options: ["Influenza", "Norovirus", "Rotavirus", "Adenovirus"],
                answer: 1,
                feedback: "<b>Correct!</b> Norovirus is the most common cause of outbreaks on cruise ships due to close quarters and environmental persistence."
            },
            {
                text: "<b>Cleanup:</b> The crew uses alcohol sanitizer.",
                question: "Is this effective for Norovirus?",
                options: ["Yes, highly effective", "No, Norovirus is resistant to alcohol", "Only if 90% alcohol", "Yes, if hands are dry"],
                answer: 1,
                feedback: "<b>Correct!</b> Norovirus is non-enveloped and resistant to alcohol. Bleach or soap and water (mechanical removal) are required."
            }
        ]
    },
    {
        id: "case11",
        title: "Case 11: The Farm Visit",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> Children visit a petting zoo. Some develop diarrhea and fever.",
                question: "What is a common zoonotic pathogen here?",
                options: ["Salmonella", "Hepatitis A", "Norovirus", "Measles"],
                answer: 0,
                feedback: "<b>Correct!</b> Salmonella (and E. coli, Campylobacter) are common in reptile/amphibian/poultry/livestock feces at petting zoos."
            },
            {
                text: "<b>Risk Factor:</b> One child ate a sandwich without washing hands.",
                question: "What mode of transmission is this?",
                options: ["Direct contact", "Indirect contact (Fecal-Oral)", "Vector-borne", "Airborne"],
                answer: 1,
                feedback: "<b>Correct!</b> This is Indirect Contact (Fecal-Oral) via hand-to-mouth transfer."
            }
        ]
    },
    {
        id: "case12",
        title: "Case 12: The Church Supper",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Background:</b> Canned green beans are served. People develop double vision and difficulty swallowing.",
                question: "This is a medical emergency. What is the disease?",
                options: ["Botulism", "Guillain-Barre", "Stroke", "Listeria"],
                answer: 0,
                feedback: "<b>Correct!</b> Double vision (diplopia), dysphagia, and descending paralysis are classic signs of Botulism neurotoxin."
            },
            {
                text: "<b>Mechanism:</b> How did the beans become dangerous?",
                question: "Select the cause.",
                options: ["Not cooked long enough", "Improper home canning (anaerobic environment)", "Left out too long", "Contaminated by flies"],
                answer: 1,
                feedback: "<b>Correct!</b> C. botulinum spores germinate in anaerobic (oxygen-free) environments like improper home canning, producing the toxin."
            }
        ]
    },
    {
        id: "case13",
        title: "Case 13: The Hospital Wing",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Background:</b> Patients with open wounds develop infections. MRSA is identified.",
                question: "What type of transmission is most likely?",
                options: ["Airborne via vents", "Contact via healthcare workers' hands", "Waterborne", "Foodborne"],
                answer: 1,
                feedback: "<b>Correct!</b> MRSA in hospitals is primarily spread via the hands of healthcare workers or contaminated equipment (fomites)."
            },
            {
                text: "<b>Intervention:</b> Rates remain high despite hand hygiene.",
                question: "What is the next level of precaution?",
                options: ["Contact Precautions (Gown/Glove)", "Airborne Precautions (N95)", "Droplet Precautions (Mask)", "Standard Precautions"],
                answer: 0,
                feedback: "<b>Correct!</b> Contact Precautions (Gowns and Gloves for all interactions) are necessary for MDROs like MRSA."
            }
        ]
    },
    {
        id: "case14",
        title: "Case 14: The Dormitory",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> A college student has stiff neck, fever, and rash. Meningitis is suspected.",
                question: "What is the immediate public health action?",
                options: ["Wait for lab confirmation", "Prophylaxis for close contacts", "Quarantine the entire dorm", "Vaccinate everyone immediately"],
                answer: 1,
                feedback: "<b>Correct!</b> Bacterial meningitis is rapid and deadly. Chemoprophylaxis (antibiotics) for close contacts is urgent, even before final lab confirmation."
            },
            {
                text: "<b>Type:</b> The rash is petechial (non-blanching).",
                question: "This points to which pathogen?",
                options: ["Neisseria meningitidis", "Viral meningitis", "Fungal meningitis", "Tuberculosis"],
                answer: 0,
                feedback: "<b>Correct!</b> Meningococcal disease (Neisseria) causes the characteristic petechial/purpuric rash."
            }
        ]
    },
    {
        id: "case15",
        title: "Case 15: The Mosquito Bite",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> A traveler returns from the tropics with high fever and joint pain.",
                question: "Which vector is likely responsible?",
                options: ["Anopheles mosquito", "Aedes aegypti mosquito", "Tick", "Flea"],
                answer: 1,
                feedback: "<b>Correct!</b> Aedes mosquitoes carry Dengue, Chikungunya, and Zika, which cause fever and joint pain. Anopheles carries Malaria."
            },
            {
                text: "<b>Control:</b> How do we control Aedes mosquitoes?",
                question: "Select the best method.",
                options: ["Bed nets at night", "Eliminate standing water (containers)", "Spray forests", "Avoid animals"],
                answer: 1,
                feedback: "<b>Correct!</b> Aedes breed in small containers (tires, pots) around homes and bite during the day. Eliminating standing water is key. Bed nets help less since they are day-biters."
            }
        ]
    },
    {
        id: "case16",
        title: "Mastery Case: The National Nightmare",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Data Cleaning:</b> You receive a line list for a wedding outbreak. <br>Case A: Onset 12:00 PM, Meal 2:00 PM.<br>Case B: Onset 6:00 PM, Meal 2:00 PM.<br>Case C: Onset 7:00 PM, Meal 2:00 PM.",
                question: "Which record should be excluded from analysis?",
                options: ["Case A", "Case B", "Case C", "None"],
                answer: 0,
                feedback: "<b>Correct!</b> Case A has an onset time <i>before</i> the exposure time. This is logically impossible for a foodborne outbreak and is likely a data entry error or a background case."
            },
            {
                text: "<b>Confounding Check:</b> You calculate the Crude OR for 'Beef' as 4.5. You suspect Gender is a confounder. You stratify by Gender.<br>Male OR = 1.2<br>Female OR = 1.1",
                question: "What does this suggest?",
                options: ["Effect Modification", "Confounding", "No Association", "Selection Bias"],
                answer: 1,
                feedback: "<b>Correct!</b> The stratum-specific ORs (1.2 and 1.1) are similar to each other but significantly different from the Crude OR (4.5). This is the definition of Confounding."
            },
            {
                text: "<b>Adjustment:</b> Since Confounding is present, the Crude OR is invalid.",
                question: "Which statistical method should you use to calculate the true association?",
                options: ["Chi-Square Test", "Mantel-Haenszel Adjusted OR", "Fisher's Exact Test", "T-Test"],
                answer: 1,
                feedback: "<b>Correct!</b> The Mantel-Haenszel method calculates a weighted average of the stratum-specific ORs to provide an Adjusted OR that removes the confounding effect."
            },
            {
                text: "<b>Bias Hunt:</b> You find that the 'Controls' were selected from a group of health-conscious gym members.",
                question: "What type of bias does this introduce?",
                options: ["Recall Bias", "Berkson's Bias", "Selection Bias (Healthy Worker)", "Information Bias"],
                answer: 2,
                feedback: "<b>Correct!</b> Selecting controls that are systematically different (healthier) from the general population or the case population introduces Selection Bias, specifically a variant of the Healthy Worker Effect."
            }
        ]
    }
];

window.CASE_SCENARIOS = CASE_SCENARIOS;
