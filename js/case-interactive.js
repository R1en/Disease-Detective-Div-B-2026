(() => {
    const INTERACTIVE_CASES_DATA = [

        // ========== MEGA-CASES (Advanced National-Level Scenarios) ==========

        {
            id: "MC1",
            title: "The School Cafeteria Outbreak",
            difficulty: "Advanced",
            description: "A multi-day outbreak at a middle school requires comprehensive epidemiological investigation including attack rate calculations, curve analysis, and control measures.",
            steps: [
                {
                    id: "step1",
                    text: `<h6>Step 1: Initial Report</h6>
                <p>On Wednesday morning, the school nurse reports multiple students with gastrointestinal illness. She provides you with the following preliminary line list:</p>
                <table class='line-list-table' style='font-size:0.85rem; margin:1rem 0;'>
                <tr><th>ID</th><th>Grade</th><th>Ate Lunch Mon</th><th>Onset Date</th><th>Onset Time</th><th>Symptoms</th></tr>
                <tr><td>001</td><td>6</td><td>Yes</td><td>Tue</td><td>6:00 AM</td><td>V, D</td></tr>
                <tr><td>002</td><td>7</td><td>Yes</td><td>Tue</td><td>7:30 AM</td><td>V, N</td></tr>
                <tr><td>003</td><td>6</td><td>Yes</td><td>Tue</td><td>8:00 AM</td><td>V, D, N</td></tr>
                <tr><td>004</td><td>8</td><td>Yes</td><td>Tue</td><td>9:00 AM</td><td>V, D</td></tr>
                <tr><td>005</td><td>7</td><td>Yes</td><td>Mon</td><td>11:00 PM</td><td>V</td></tr>
                <tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                </table>
                <p style='font-size:0.85rem; color:#666;'>V=Vomiting, D=Diarrhea, N=Nausea. Total: 45 cases out of 300 students who ate Monday lunch.</p>
                <p><strong>Calculate the Attack Rate.</strong></p>`,
                    options: [
                        { text: "AR = 15%", feedback: "Correct! 45/300 × 100 = 15%. This is the proportion of the exposed population that became ill.", correct: true },
                        { text: "AR = 45%", feedback: "Incorrect. You need to divide cases by total exposed, not just count cases.", correct: false },
                        { text: "AR = 30%", feedback: "Incorrect. Check your calculation: 45/300.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: `<h6>Step 2: Incubation Period Analysis</h6>
                <p>Review the onset times from the line list. Lunch was served Monday 12:00 PM.</p>
                <ul style='text-align:left;'>
                <li><strong>First case:</strong> Monday 11:00 PM (11 hours post-exposure)</li>
                <li><strong>Median onset:</strong> Tuesday 8:00 AM (20 hours)</li>
                <li><strong>Last case:</strong> Tuesday 2:00 PM (26 hours)</li>
                </ul>
                <p><strong>Based on the incubation period range (11-26 hours), which pathogen is MOST likely?</strong></p>`,
                    options: [
                        { text: "Staphylococcus aureus (incubation 1-6 hours)", feedback: "Incorrect. The minimum incubation of 11 hours is too long for Staph.", correct: false },
                        { text: "Norovirus (incubation 12-48 hours)", feedback: "Correct! The 11-26 hour range with peak at 20 hours fits Norovirus. The prominent vomiting also supports this.", correct: true },
                        { text: "Clostridium perfringens (incubation 8-16 hours)", feedback: "Possible but less likely. C. perfringens typically causes diarrhea > vomiting, and max incubation is ~16 hours.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: `<h6>Step 3: Food-Specific Attack Rates</h6>
                <p>You conduct a cohort study asking about all foods eaten. The results:</p>
                <table class='exam-table'>
                <tr><th>Food Item</th><th>Ate: Ill/Total</th><th>AR (Ate)</th><th>Did Not Eat: Ill/Total</th><th>AR (Not)</th></tr>
                <tr><td>Chicken Salad</td><td>40/60</td><td>67%</td><td>5/240</td><td>2%</td></tr>
                <tr><td>Fruit Cup</td><td>20/150</td><td>13%</td><td>25/150</td><td>17%</td></tr>
                <tr><td>Milk</td><td>30/200</td><td>15%</td><td>15/100</td><td>15%</td></tr>
                </table>
                <p><strong>Calculate the Relative Risk (RR) for the Chicken Salad.</strong></p>`,
                    options: [
                        { text: "RR = 33.5", feedback: "Correct! RR = AR(exposed)/AR(unexposed) = 67%/2% = 33.5. Students who ate chicken salad were 33.5 times more likely to become ill!", correct: true },
                        { text: "RR = 2.0", feedback: "Incorrect. You may have reversed the calculation or used wrong values.", correct: false },
                        { text: "RR = 0.67", feedback: "Incorrect. An RR < 1 would indicate protection, but chicken salad was clearly a risk factor.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: `<h6>Step 4: Environmental Investigation & Control</h6>
                <p>Your investigation reveals:</p>
                <ul style='text-align:left;'>
                <li>The chicken salad was prepared Sunday evening and stored at room temperature overnight</li>
                <li>A food handler reported "stomach bug" symptoms last week but continued working</li>
                <li>Handwashing facilities in the kitchen had no soap</li>
                </ul>
                <p><strong>What is the MOST appropriate set of control measures?</strong></p>`,
                    options: [
                        { text: "Close the school for 2 weeks and disinfect all classrooms", feedback: "Incorrect. The outbreak is over and this is excessive. Norovirus doesn't persist on surfaces for weeks.", correct: false },
                        { text: "Exclude ill food handlers until 48h symptom-free, enforce cold-holding temperatures, restock handwashing supplies, and provide food safety training", feedback: "Correct! This multi-pronged approach addresses all identified failures: sick worker, time-temperature abuse, and hygiene gaps.", correct: true },
                        { text: "Prescribe antibiotics to all 300 students who ate lunch", feedback: "Incorrect. Norovirus is a virus; antibiotics don't work. Also, prophylactic antibiotics are inappropriate here.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC2",
            title: "The Swimming Pool Cryptosporidiosis",
            difficulty: "Advanced",
            description: "A community pool outbreak requires understanding of chlorine-resistant pathogens, prolonged incubation periods, and environmental controls.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Pattern Recognition</h6><p>Over 2 weeks, 80 children who swam at a community pool developed watery diarrhea lasting 1-2 weeks. Onset ranged from 2-10 days after swimming, with most cases appearing 7 days post-exposure.</p><p><strong>What type of outbreak curve would you expect?</strong></p>",
                    options: [
                        { text: "Point Source (sharp peak)", feedback: "Incorrect. The wide range (2-10 days) suggests continuous exposure.", correct: false },
                        { text: "Continuous Common Source (plateau)", feedback: "Correct! Continuous exposure over 2 weeks with a long incubation period creates a plateau pattern.", correct: true },
                        { text: "Propagated (successive waves)", feedback: "Incorrect. Cryptosporidium is waterborne, not person-to-person in this context.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Agent Identification</h6><p>Stool samples show oocysts. The pathogen is resistant to standard chlorine levels. Incubation: 2-10 days (median 7). Duration: 1-2 weeks.</p><p><strong>What is the most likely agent?</strong></p>",
                    options: [
                        { text: "Giardia lamblia", feedback: "Incorrect. Giardia has a longer incubation (1-3 weeks).", correct: false },
                        { text: "Cryptosporidium parvum", feedback: "Correct! Chlorine-resistant, 2-10 day incubation, prolonged diarrhea, and oocysts all point to Crypto.", correct: true },
                        { text: "E. coli O157:H7", feedback: "Incorrect. E. coli is chlorine-sensitive and has shorter incubation.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Attack Rate Calculation</h6><p>Pool attendance records show 400 children swam during the 2-week period. 80 became ill.</p><p><strong>What is the attack rate?</strong></p>",
                    options: [
                        { text: "AR = 20%", feedback: "Correct! 80/400 × 100 = 20%", correct: true },
                        { text: "AR = 25%", feedback: "Incorrect. Recheck: 80/400.", correct: false },
                        { text: "AR = 80%", feedback: "Incorrect. You forgot to divide by total exposed.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Control Measures</h6><p>Standard chlorination failed. What is the MOST effective control?</p>",
                    options: [
                        { text: "Increase chlorine to maximum levels", feedback: "Incorrect. Cryptosporidium is chlorine-resistant even at high levels.", correct: false },
                        { text: "Close pool, hyperchlorinate or use UV treatment, enforce 'no swimming when ill' policy, and improve filtration", feedback: "Correct! Comprehensive approach: UV kills Crypto, policy prevents contamination, filtration removes oocysts.", correct: true },
                        { text: "Ban children under 5 from the pool", feedback: "Incorrect. This doesn't address the contamination source.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC3",
            title: "The Restaurant Hepatitis A Cluster",
            difficulty: "Advanced",
            description: "A foodborne hepatitis A outbreak with a long incubation period requires understanding of case definitions, secondary transmission, and vaccination strategies.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Case Definition</h6><p>15 patrons of a restaurant developed jaundice, dark urine, and elevated liver enzymes 28-35 days after dining. All tested positive for Hepatitis A IgM.</p><p><strong>What case classification applies?</strong></p>",
                    options: [
                        { text: "Probable cases (clinical symptoms only)", feedback: "Incorrect. They have lab confirmation.", correct: false },
                        { text: "Confirmed cases (clinical + lab confirmation)", feedback: "Correct! Symptoms + positive IgM = confirmed Hepatitis A.", correct: true },
                        { text: "Suspected cases (exposure only)", feedback: "Incorrect. They have both symptoms and lab confirmation.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Source Investigation</h6><p>A food handler tested positive for Hepatitis A. They worked while symptomatic (jaundice) for 3 days before being sent home. They handled ready-to-eat foods without gloves.</p><p><strong>What is the mode of transmission?</strong></p>",
                    options: [
                        { text: "Airborne", feedback: "Incorrect. Hepatitis A is fecal-oral.", correct: false },
                        { text: "Fecal-oral (contaminated food)", feedback: "Correct! Food handler with poor hand hygiene contaminated food.", correct: true },
                        { text: "Bloodborne", feedback: "Incorrect. While Hep A is in blood, transmission here was via contaminated food.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Secondary Transmission Risk</h6><p>Hepatitis A incubation: 15-50 days (average 28). Infectious period: 2 weeks before to 1 week after jaundice onset.</p><p><strong>What is the risk of secondary household transmission?</strong></p>",
                    options: [
                        { text: "Low - Hepatitis A is not contagious person-to-person", feedback: "Incorrect. Hep A IS contagious person-to-person via fecal-oral route.", correct: false },
                        { text: "High - Close contacts are at risk, especially if hygiene is poor", feedback: "Correct! Household members can be infected through shared bathrooms, poor handwashing.", correct: true },
                        { text: "Moderate - Only if blood contact occurs", feedback: "Incorrect. Fecal-oral is the primary route, not blood.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>200 patrons ate at the restaurant during the food handler's infectious period. Most are now past the 2-week window for immune globulin.</p><p><strong>What is the best intervention?</strong></p>",
                    options: [
                        { text: "Hepatitis A vaccine for all exposed patrons (even if >2 weeks post-exposure)", feedback: "Correct! Vaccine can still provide protection and prevent future exposure. Also educate on symptoms and hygiene.", correct: true },
                        { text: "Immune globulin only (even though window passed)", feedback: "Incorrect. IG is only effective within 2 weeks. Vaccine is better at this point.", correct: false },
                        { text: "No intervention needed - too late", feedback: "Incorrect. Vaccine can still help and prevents future infections.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC4",
            title: "The Legionnaires' Disease Hotel Outbreak",
            difficulty: "Advanced",
            description: "An environmental outbreak requiring understanding of aerosol transmission, environmental sampling, and engineering controls.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Clinical Presentation</h6><p>12 hotel guests developed severe pneumonia 2-10 days after staying at the hotel. All required hospitalization. Urine antigen tests confirmed Legionella pneumophila.</p><p><strong>What is the most likely source?</strong></p>",
                    options: [
                        { text: "Person-to-person transmission from an ill guest", feedback: "Incorrect. Legionnaires' disease is NOT transmitted person-to-person.", correct: false },
                        { text: "Contaminated water system (cooling towers, hot tubs, showers)", feedback: "Correct! Legionella grows in warm water systems and spreads via aerosols.", correct: true },
                        { text: "Contaminated food in the hotel restaurant", feedback: "Incorrect. Legionella is waterborne/airborne, not foodborne.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Environmental Investigation</h6><p>Water samples from the hotel's cooling tower, hot tub, and shower heads are collected. Which is MOST likely to be positive?</p>",
                    options: [
                        { text: "Cooling tower", feedback: "Correct! Cooling towers are the #1 source of Legionnaires' outbreaks due to aerosolization and ideal growth temperature (25-42°C).", correct: true },
                        { text: "Cold water tap", feedback: "Incorrect. Legionella prefers warm water (25-42°C).", correct: false },
                        { text: "Swimming pool (chlorinated)", feedback: "Incorrect. Proper chlorination kills Legionella.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Attack Rate</h6><p>500 guests stayed at the hotel during the exposure period. 12 developed Legionnaires' disease.</p><p><strong>Calculate the attack rate.</strong></p>",
                    options: [
                        { text: "AR = 2.4%", feedback: "Correct! 12/500 × 100 = 2.4%", correct: true },
                        { text: "AR = 12%", feedback: "Incorrect. You forgot to divide by total exposed.", correct: false },
                        { text: "AR = 0.24%", feedback: "Incorrect. Check your percentage calculation.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Control Measures</h6><p>What is the PRIMARY engineering control for Legionella in water systems?</p>",
                    options: [
                        { text: "Antibiotics in the water supply", feedback: "Incorrect. This is not practical or safe.", correct: false },
                        { text: "Superheat water to >60°C and flush system, maintain hot water >50°C and cold <20°C, regular cleaning/disinfection of cooling towers", feedback: "Correct! Temperature control and maintenance are key engineering controls.", correct: true },
                        { text: "Close the hotel permanently", feedback: "Incorrect. Proper remediation can eliminate the risk.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC5",
            title: "The Daycare E. coli O157:H7 Outbreak",
            difficulty: "Advanced",
            description: "A person-to-person outbreak in a daycare requiring understanding of HUS complications, exclusion policies, and secondary attack rates.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Index Case</h6><p>A 3-year-old develops bloody diarrhea after a petting zoo visit. Stool culture: E. coli O157:H7. The child attends daycare.</p><p><strong>What is the IMMEDIATE action?</strong></p>",
                    options: [
                        { text: "Wait for more cases before acting", feedback: "Incorrect. E. coli O157:H7 is highly dangerous; immediate action is needed.", correct: false },
                        { text: "Exclude the child from daycare immediately, notify parents of all children, and begin active surveillance", feedback: "Correct! Rapid exclusion prevents secondary transmission. E. coli O157:H7 can cause HUS (hemolytic uremic syndrome).", correct: true },
                        { text: "Prescribe antibiotics to all daycare children", feedback: "Incorrect. Antibiotics may INCREASE HUS risk in E. coli O157:H7.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Secondary Cases</h6><p>Over the next week, 5 more children (out of 30 total) develop diarrhea. All test positive for E. coli O157:H7. None visited the petting zoo.</p><p><strong>What is the secondary attack rate?</strong></p>",
                    options: [
                        { text: "SAR = 17.2%", feedback: "Correct! 5 secondary cases / 29 susceptible contacts × 100 = 17.2%", correct: true },
                        { text: "SAR = 16.7%", feedback: "Incorrect. Don't include the index case in the denominator.", correct: false },
                        { text: "SAR = 20%", feedback: "Incorrect. Check your calculation: 5/29.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: HUS Complication</h6><p>One child develops hemolytic uremic syndrome (HUS): hemolytic anemia, thrombocytopenia, and acute kidney injury.</p><p><strong>What percentage of E. coli O157:H7 cases develop HUS?</strong></p>",
                    options: [
                        { text: "5-10%", feedback: "Correct! About 5-10% of E. coli O157:H7 cases progress to HUS, especially in young children.", correct: true },
                        { text: "50%", feedback: "Incorrect. HUS is serious but not that common.", correct: false },
                        { text: "<1%", feedback: "Incorrect. HUS is more common than this in E. coli O157:H7.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Return-to-Daycare Criteria</h6><p>When can an infected child return to daycare?</p>",
                    options: [
                        { text: "After symptoms resolve (no diarrhea for 24 hours)", feedback: "Incorrect. Children can still shed bacteria after symptoms resolve.", correct: false },
                        { text: "After 2 consecutive negative stool cultures, at least 24 hours apart, after diarrhea resolves", feedback: "Correct! This ensures the child is no longer shedding E. coli O157:H7.", correct: true },
                        { text: "After completing a course of antibiotics", feedback: "Incorrect. Antibiotics are NOT recommended for E. coli O157:H7 (may increase HUS risk).", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC6",
            title: "The Measles School Outbreak",
            difficulty: "Advanced",
            description: "A highly contagious airborne outbreak requiring understanding of R0, herd immunity, and vaccination strategies.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Index Case</h6><p>An unvaccinated 12-year-old returns from international travel with fever, cough, and a rash. Diagnosed with measles. The student attended school for 2 days while infectious.</p><p><strong>What is measles' basic reproduction number (R0)?</strong></p>",
                    options: [
                        { text: "R0 = 2-3 (like flu)", feedback: "Incorrect. Measles is MUCH more contagious.", correct: false },
                        { text: "R0 = 12-18 (one of the most contagious diseases)", feedback: "Correct! Measles R0 is 12-18, meaning one case can infect 12-18 susceptible people.", correct: true },
                        { text: "R0 = 5-7 (like chickenpox)", feedback: "Incorrect. Measles is more contagious than chickenpox.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Exposure Assessment</h6><p>The school has 500 students. Vaccination records show 450 are fully vaccinated (2 doses MMR), 30 have 1 dose, and 20 are unvaccinated.</p><p><strong>How many students are susceptible?</strong></p>",
                    options: [
                        { text: "50 students (1 dose + unvaccinated)", feedback: "Correct! 30 with 1 dose + 20 unvaccinated = 50 susceptible. 2 doses = 97% effective.", correct: true },
                        { text: "20 students (only unvaccinated)", feedback: "Incorrect. Students with only 1 dose are also at risk (1 dose = ~93% effective).", correct: false },
                        { text: "500 students (everyone)", feedback: "Incorrect. Vaccinated students have protection.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Herd Immunity Threshold</h6><p>To achieve herd immunity for measles (R0 = 15), what percentage of the population must be immune?</p><p>Formula: HIT = (1 - 1/R0) Ã— 100</p>",
                    options: [
                        { text: "93-95%", feedback: "Correct! HIT = (1 - 1/15) × 100 = 93.3%. This is why measles outbreaks occur when vaccination rates drop below 95%.", correct: true },
                        { text: "70-80%", feedback: "Incorrect. This works for less contagious diseases, but measles needs higher coverage.", correct: false },
                        { text: "50%", feedback: "Incorrect. Much too low for measles.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>Unvaccinated students were exposed 3 days ago. What is the best intervention?</p>",
                    options: [
                        { text: "MMR vaccine within 72 hours of exposure", feedback: "Correct! MMR vaccine within 72 hours can prevent or modify disease. After 72 hours, use immune globulin for high-risk individuals.", correct: true },
                        { text: "Antibiotics", feedback: "Incorrect. Measles is viral; antibiotics don't work.", correct: false },
                        { text: "Quarantine only, no medical intervention", feedback: "Incorrect. Vaccine can still help if given quickly.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC7",
            title: "The Nursing Home Influenza Outbreak",
            difficulty: "Advanced",
            description: "A respiratory outbreak in a vulnerable population requiring understanding of vaccine effectiveness, antiviral prophylaxis, and cohorting.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Outbreak Recognition</h6><p>A nursing home with 100 residents reports 15 cases of fever, cough, and myalgia over 3 days. Rapid flu tests: positive for Influenza A.</p><p><strong>What is the attack rate so far?</strong></p>",
                    options: [
                        { text: "AR = 15%", feedback: "Correct! 15/100 × 100 = 15%. But this will likely increase as the outbreak progresses.", correct: true },
                        { text: "AR = 30%", feedback: "Incorrect. Currently 15 cases out of 100.", correct: false },
                        { text: "AR = 5%", feedback: "Incorrect. Check your calculation.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Vaccination Status</h6><p>Records show 80 residents received flu vaccine this season. Of the 15 ill residents, 10 were vaccinated and 5 were not.</p><p><strong>Calculate Vaccine Effectiveness (VE).</strong></p><p>VE = (ARu - ARv) / ARu × 100</p>",
                    options: [
                        { text: "VE = 37.5%", feedback: "Incorrect. VE = (25-12.5)/25 × 100 = 50%. (ARu = 5/20 = 25%, ARv = 10/80 = 12.5%).", correct: false },
                        { text: "VE = 50%", feedback: "Correct! ARu = 25%, ARv = 12.5%, VE = (25-12.5)/25 × 100 = 50%", correct: true },
                        { text: "VE = 75%", feedback: "Incorrect. Recheck the formula and calculations.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Antiviral Prophylaxis</h6><p>The outbreak is ongoing. What is the recommendation for uninfected residents?</p>",
                    options: [
                        { text: "No intervention - let it run its course", feedback: "Incorrect. Elderly residents are at high risk for complications.", correct: false },
                        { text: "Antiviral prophylaxis (oseltamivir) for all uninfected residents, especially unvaccinated", feedback: "Correct! Prophylactic antivirals can prevent infection during an outbreak in high-risk settings.", correct: true },
                        { text: "Antibiotics for all residents", feedback: "Incorrect. Influenza is viral; antibiotics don't work (unless treating secondary bacterial pneumonia).", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Infection Control</h6><p>What is the MOST important infection control measure?</p>",
                    options: [
                        { text: "Cohort ill residents together, use droplet precautions, restrict admissions/transfers, vaccinate staff", feedback: "Correct! Multi-pronged approach: cohorting prevents spread, droplet precautions protect staff, vaccination protects everyone.", correct: true },
                        { text: "Airborne isolation for all residents", feedback: "Incorrect. Influenza is droplet, not airborne (except during aerosol-generating procedures).", correct: false },
                        { text: "Close the facility to all visitors", feedback: "Partially correct but not sufficient. Need cohorting and precautions.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC8",
            title: "The Salmonella Turtle-Associated Outbreak",
            difficulty: "Advanced",
            description: "A multi-state zoonotic outbreak requiring understanding of case-control studies, odds ratios, and public health messaging.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Multi-State Pattern</h6><p>CDC receives reports of Salmonella infections in children across 15 states. All isolates have the same PFGE pattern (genetic fingerprint).</p><p><strong>What does the identical PFGE pattern suggest?</strong></p>",
                    options: [
                        { text: "Unrelated sporadic cases", feedback: "Incorrect. Identical PFGE patterns indicate a common source.", correct: false },
                        { text: "A common source outbreak (same contaminated product/animal)", feedback: "Correct! PFGE (pulsed-field gel electrophoresis) matching indicates cases are related.", correct: true },
                        { text: "Person-to-person transmission chain", feedback: "Incorrect. While possible, the multi-state distribution suggests a distributed product.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Case-Control Study</h6><p>A case-control study is conducted. Cases: 50 ill children. Controls: 100 healthy children matched by age and location.</p><p>Exposure to pet turtles: Cases = 40 exposed, 10 not. Controls = 20 exposed, 80 not.</p><p><strong>Calculate the Odds Ratio (OR).</strong></p>",
                    options: [
                        { text: "OR = 16", feedback: "Correct! OR = (40×80)/(10×20) = 3200/200 = 16. Children with turtles had 16 times the odds of infection.", correct: true },
                        { text: "OR = 4", feedback: "Incorrect. Recheck your calculation: (a×d)/(b×c).", correct: false },
                        { text: "OR = 2", feedback: "Incorrect. Check the 2×2 table setup.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Biological Plausibility</h6><p>Why are small turtles (<4 inches) a Salmonella risk?</p>",
                    options: [
                        { text: "Small turtles are more likely to bite", feedback: "Incorrect. The risk is not from bites.", correct: false },
                        { text: "Small turtles naturally carry Salmonella in their intestines and on their shells; children often put them in their mouths", feedback: "Correct! Reptiles are natural Salmonella carriers. Small turtles are mouthing hazards for young children.", correct: true },
                        { text: "Small turtles are fed contaminated food", feedback: "Incorrect. Turtles naturally carry Salmonella.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Public Health Action</h6><p>What is the appropriate public health response?</p>",
                    options: [
                        { text: "Ban on sale of turtles <4 inches (already exists via FDA), public education on reptile-associated Salmonella, hand hygiene messaging", feedback: "Correct! The FDA banned small turtle sales in 1975, but illegal sales continue. Education is key.", correct: true },
                        { text: "Mandatory Salmonella testing of all pet turtles", feedback: "Incorrect. Not practical; turtles shed Salmonella intermittently.", correct: false },
                        { text: "Antibiotics for all turtle owners", feedback: "Incorrect. Prophylactic antibiotics are not indicated.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC9",
            title: "The Listeria Cantaloupe Outbreak",
            difficulty: "Advanced",
            description: "A deadly foodborne outbreak requiring understanding of high-risk populations, long incubation periods, and food recalls.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: High-Risk Population</h6><p>33 cases of listeriosis are reported across 12 states. 30 patients are pregnant women, elderly (>65), or immunocompromised. 7 deaths occur.</p><p><strong>What is the case-fatality rate?</strong></p>",
                    options: [
                        { text: "CFR = 21.2%", feedback: "Correct! 7 deaths / 33 cases × 100 = 21.2%. Listeria has one of the highest CFRs of foodborne pathogens.", correct: true },
                        { text: "CFR = 7%", feedback: "Incorrect. You calculated deaths as a percentage of the population, not cases.", correct: false },
                        { text: "CFR = 33%", feedback: "Incorrect. Recheck: 7/33.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Incubation Period</h6><p>Listeria has an unusually long incubation period: 1-4 weeks (can be up to 70 days for invasive disease).</p><p><strong>Why does this complicate outbreak investigation?</strong></p>",
                    options: [
                        { text: "Patients may not remember what they ate weeks ago; contaminated food may be gone", feedback: "Correct! Long incubation makes recall difficult and food may be consumed/discarded.", correct: true },
                        { text: "It doesn't complicate investigation", feedback: "Incorrect. Long incubation is a major challenge.", correct: false },
                        { text: "Patients are no longer infectious", feedback: "Incorrect. Listeria is foodborne, not person-to-person anyway.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Source Identification</h6><p>Whole genome sequencing (WGS) links all cases. Traceback investigation identifies cantaloupes from a single farm.</p><p><strong>Why are cantaloupes a Listeria risk?</strong></p>",
                    options: [
                        { text: "Netted rind can harbor bacteria; often eaten without cooking; can be contaminated by soil", feedback: "Correct! The rough rind traps bacteria, and cantaloupes are eaten raw. Listeria can grow at refrigerator temperatures.", correct: true },
                        { text: "Cantaloupes are acidic", feedback: "Incorrect. Cantaloupes are not particularly acidic, and Listeria can tolerate some acidity.", correct: false },
                        { text: "Cantaloupes are always contaminated", feedback: "Incorrect. Contamination is from poor agricultural/packing practices.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Recall and Prevention</h6><p>What is the appropriate action?</p>",
                    options: [
                        { text: "Voluntary recall of implicated cantaloupes, public warning to high-risk groups, investigation of farm practices (sanitation, water sources)", feedback: "Correct! Recall removes product, warning protects vulnerable populations, farm investigation prevents recurrence.", correct: true },
                        { text: "Ban all cantaloupe sales nationwide", feedback: "Incorrect. Only implicated farm's products need recall.", correct: false },
                        { text: "Antibiotics for all cantaloupe consumers", feedback: "Incorrect. Prophylactic antibiotics not indicated.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "MC10",
            title: "The Pertussis Daycare Outbreak",
            difficulty: "Advanced",
            description: "A vaccine-preventable disease outbreak requiring understanding of waning immunity, cocooning strategy, and antibiotic prophylaxis.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Index Case</h6><p>A 2-month-old infant (too young for full vaccination) develops severe coughing fits (paroxysms) with inspiratory 'whoop' and post-tussive vomiting. PCR confirms Bordetella pertussis.</p><p><strong>Why are young infants at highest risk for severe pertussis?</strong></p>",
                    options: [
                        { text: "They have no maternal antibodies", feedback: "Partially correct, but the main issue is lack of vaccination.", correct: false },
                        { text: "They are too young to be fully vaccinated (DTaP series starts at 2 months) and have the highest risk of complications (apnea, pneumonia, death)", feedback: "Correct! Infants <6 months are most vulnerable; they haven't completed the primary series.", correct: true },
                        { text: "Their immune systems are overactive", feedback: "Incorrect. The opposite is true.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Source Investigation</h6><p>The infant's 8-year-old sibling attends daycare and has had a mild cough for 3 weeks. PCR: positive for pertussis. The sibling was fully vaccinated as an infant but hasn't had a booster.</p><p><strong>What does this demonstrate?</strong></p>",
                    options: [
                        { text: "Vaccine failure (vaccine doesn't work)", feedback: "Incorrect. The vaccine works but immunity wanes over time.", correct: false },
                        { text: "Waning immunity - pertussis vaccine protection decreases over time, requiring boosters (Tdap at age 11-12)", feedback: "Correct! Pertussis immunity wanes 5-10 years after vaccination. Boosters are essential.", correct: true },
                        { text: "The sibling was never vaccinated", feedback: "Incorrect. The scenario states they were fully vaccinated as an infant.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Cocooning Strategy</h6><p>What is the 'cocooning' strategy for pertussis prevention?</p>",
                    options: [
                        { text: "Isolating sick infants in a separate room", feedback: "Incorrect. Cocooning refers to vaccination strategy.", correct: false },
                        { text: "Vaccinating all close contacts of infants (parents, siblings, grandparents, caregivers) with Tdap to create a protective 'cocoon'", feedback: "Correct! Cocooning protects vulnerable infants by vaccinating everyone around them.", correct: true },
                        { text: "Giving infants extra vaccine doses", feedback: "Incorrect. Infants follow the standard DTaP schedule.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>20 children at the daycare were exposed. What is the recommendation?</p>",
                    options: [
                        { text: "Azithromycin prophylaxis for all close contacts, regardless of vaccination status; Tdap booster for those due", feedback: "Correct! Antibiotics prevent disease in exposed individuals. Vaccine booster provides long-term protection.", correct: true },
                        { text: "No intervention - pertussis is mild", feedback: "Incorrect. Pertussis can be severe in infants and prophylaxis prevents spread.", correct: false },
                        { text: "Quarantine only", feedback: "Incorrect. Antibiotic prophylaxis is recommended for close contacts.", correct: false }
                    ]
                }
            ]
        },


        {
            id: "MC11",
            title: "Mastery Case: The National Nightmare",
            difficulty: "National",
            description: "The ultimate test of epidemiological judgment. This case requires data cleaning, stratified analysis to detect confounding, and identification of advanced biases.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Data Cleaning</h6><p>You receive a raw line list for a suspected foodborne outbreak at a wedding. Before running stats, you sanity-check the data.</p><table class='table' style='width:100%; font-size:0.85rem; margin-bottom:1rem;'><thead><tr style='background:#eee'><th style='padding:4px;'>ID</th><th style='padding:4px;'>Meal Time</th><th style='padding:4px;'>Onset Time</th><th style='padding:4px;'>Symptoms</th></tr></thead><tbody><tr><td>001</td><td>2:00 PM</td><td>6:00 PM</td><td>Vomiting</td></tr><tr><td>002</td><td>2:00 PM</td><td>12:00 PM</td><td>Vomiting</td></tr><tr><td>003</td><td>2:00 PM</td><td>7:00 PM</td><td>Vomiting</td></tr></tbody></table><p><strong>Which record must be excluded/quarantined?</strong></p>",
                    options: [
                        { text: "ID 001", feedback: "Incorrect. 4 hours incubation is consistent with Staph aureus.", correct: false },
                        { text: "ID 002", feedback: "Correct! ID 002 has an onset time (12:00 PM) BEFORE the exposure time (2:00 PM). This violates temporality and is likely a data entry error or a background case.", correct: true },
                        { text: "ID 003", feedback: "Incorrect. 5 hours incubation is consistent with Staph aureus.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Crude Analysis</h6><p>You investigate a study linking <strong>Coffee Consumption</strong> to <strong>Pancreatic Cancer</strong>. The Crude Odds Ratio (OR) is <strong>3.0</strong> (p < 0.05).</p><p>However, you notice that coffee drinkers in the study are also much more likely to be <strong>Smokers</strong>. Smoking is a known cause of pancreatic cancer.</p><p><strong>What is the relationship between Smoking and Coffee here?</strong></p>",
                    options: [
                        { text: "Smoking is an Effect Modifier.", feedback: "Incorrect. We haven't looked at strata yet, but this setup suggests confounding.", correct: false },
                        { text: "Smoking is a potential Confounder.", feedback: "Correct! It is associated with the exposure (Coffee), associated with the outcome (Cancer), and is not on the causal pathway.", correct: true },
                        { text: "Smoking is the Independent Variable.", feedback: "Incorrect. Coffee is the exposure of interest.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Stratified Analysis</h6><p>You stratify the data by Smoking status.</p><ul><li><strong>Smokers Only:</strong> OR for Coffee = 1.0</li><li><strong>Non-Smokers Only:</strong> OR for Coffee = 1.0</li></ul><p><strong>Compare these stratum-specific odds ratios (1.0) to the crude odds ratio (3.0). What is your conclusion?</strong></p>",
                    options: [
                        { text: "Effect Modification is present.", feedback: "Incorrect. Effect Modification would show DIFFERENT ORs in each stratum (e.g., 1.0 vs 5.0). Here they are the same (1.0).", correct: false },
                        { text: "Confounding is present.", feedback: "Correct! The crude OR (3.0) disappears when you control for smoking (OR 1.0). The association was purely due to confounding.", correct: true },
                        { text: "Coffee causes cancer only in smokers.", feedback: "Incorrect. The OR is 1.0 in smokers, meaning NO association.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Adjustment</h6><p>Since confounding is present, you cannot report the Crude OR. Which statistical method should you use to report a single, summary Odds Ratio that accounts for the confounding?</p>",
                    options: [
                        { text: "Pearson's Chi-Square Test", feedback: "Incorrect. This tests significance, it doesn't adjust for confounding.", correct: false },
                        { text: "Mantel-Haenszel Adjusted Odds Ratio", feedback: "Correct! The Mantel-Haenszel method calculates a weighted average of the stratum-specific ORs, effectively removing the confounding bias.", correct: true },
                        { text: "T-Test", feedback: "Incorrect. That compares means, not odds.", correct: false }
                    ]
                },
                {
                    id: "step5",
                    text: "<h6>Step 5: Advanced Bias</h6><p>In a separate hospital-based Case-Control study, you find that controls (patients with broken legs) smoke less than the general population. This artificially inflates the association between smoking and disease in your study.</p><p><strong>What specific type of Selection Bias is this?</strong></p>",
                    options: [
                        { text: "Recall Bias", feedback: "Incorrect. That is Information Bias.", correct: false },
                        { text: "Berkson's Bias (Admission Rate Bias)", feedback: "Correct! Hospital controls often have different exposure rates than the general community, leading to spurious associations.", correct: true },
                        { text: "Neyman Bias (Prevalence-Incidence Bias)", feedback: "Incorrect. That relates to survival/mortality.", correct: false }
                    ]
                }
            ]
        },

        {
            id: "IC1",
            title: "The Wedding Reception Investigation",
            difficulty: "Intermediate",
            description: "Guests at a summer wedding fall ill with vomiting and diarrhea. Navigate the investigation steps from notification to control.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Notification</h6><p>On Monday morning, the local health department receives calls from three different attendees of a wedding reception held on Saturday. They report severe nausea, vomiting, and some diarrhea starting Sunday night.</p><p><strong>What is your immediate priority?</strong></p>",
                    options: [
                        { text: "Close the wedding venue immediately.", feedback: "Incorrect. You don't have enough evidence to implicate the venue yet.", correct: false },
                        { text: "Collect food samples from the dumpster.", feedback: "Incorrect. While useful later, confirming the diagnosis and establishing an outbreak is first.", correct: false },
                        { text: "Interview the callers to gather clinical details and establish a case definition.", feedback: "Correct. You need to know 'who, what, where, when' and confirm it's an outbreak.", correct: true }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Case Finding</h6><p>You confirm 55 of 120 guests meet the case definition. Symptoms last 24-48 hours. Stool samples are negative for Salmonella and E. coli. The incubation period is 24-36 hours.</p><p><strong>What is the most likely agent?</strong></p>",
                    options: [
                        { text: "Staphylococcus aureus", feedback: "Incorrect. Staph incubation is shorter (2-7 hours).", correct: false },
                        { text: "Norovirus", feedback: "Correct. The incubation (24-48h), duration, and symptoms (vomiting > diarrhea) are classic for Norovirus.", correct: true },
                        { text: "Giardia", feedback: "Incorrect. Incubation is 1-3 weeks.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Epi Curve Analysis</h6><p>The Epi Curve shows a sharp peak on Monday morning, with a rapid decline. All cases ate at the reception.</p><p><strong>What type of outbreak is this?</strong></p>",
                    options: [
                        { text: "Propagated", feedback: "Incorrect. Propagated would show waves of cases over time.", correct: false },
                        { text: "Point Source", feedback: "Correct. A single sharp peak within one incubation period indicates a point source exposure.", correct: true }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Control Measures</h6><p>Food handlers are suspected. One server reported being ill on Friday but worked anyway.</p><p><strong>What is the best control measure?</strong></p>",
                    options: [
                        { text: "Prescribe antibiotics to all guests.", feedback: "Incorrect. Norovirus is viral.", correct: false },
                        { text: "Exclude the ill food handler and disinfect surfaces with bleach.", feedback: "Correct. Exclusion stops the source; bleach kills Norovirus.", correct: true }
                    ]
                }
            ]
        },
        {
            id: "IC2",
            title: "The Community Picnic Mystery (Mega-Case)",
            difficulty: "Advanced",
            description: "A comprehensive outbreak scenario covering Epi Curves, Exposure Windows, Stratified Analysis, and Confounding.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: The Pattern</h6><p>Three days after a large community picnic, your office is flooded with reports of fever, cramps, and diarrhea. You plot an Epi Curve of 100 cases. It shows a steep rise to a peak on Monday afternoon, followed by a gradual decline over the next few days. There are no secondary waves.</p><p><strong>What does this curve suggest?</strong></p>",
                    options: [
                        { text: "Propagated outbreak (person-to-person).", feedback: "Incorrect. Propagated curves have multiple, progressively larger peaks.", correct: false },
                        { text: "Point Source outbreak (single exposure).", feedback: "Correct. The log-normal (bell) shape with a sharp rise and tail suggests a single common exposure.", correct: true },
                        { text: "Continuous Common Source.", feedback: "Incorrect. A continuous source would have a plateau, not a sharp peak.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: The Window</h6><p>The peak of cases occurred on Monday at 4:00 PM. The suspected pathogen is <em>Salmonella</em> (Incubation 12-48 hours, Median 28 hours). The picnic started Saturday at 11:00 AM and ended at 4:00 PM.</p><p><strong>Does the timing implicate the picnic?</strong></p>",
                    options: [
                        { text: "No, the incubation period effectively rules out the picnic.", feedback: "Incorrect. Monday 4PM minus 28 hours is Sunday Noon. Wait, that's 28 hours. Let's calculate: Mon 4PM - 24h = Sun 4PM. -4h = Sun Noon. That's 28 hours. Picnic was Sat.", correct: false },
                        { text: "Yes. Monday 4PM minus 28 hours = Sunday Noon (Wait...). Let's re-calculate: Mon 4PM is ~52 hours after Sat Noon. That is slightly outside the median but within the max (48-72h for some strains). Actually, let's look closer. 12-36h is typical for Salmonella. If peak is Mon 4PM, exposure was likely Sun AM. The picnic was Saturday. This is tricky.", feedback: "Let's check the math. Sat 12PM to Sun 12PM (24h) to Mon 12PM (48h). Mon 4PM is 52 hours. This is a bit long for a median of 28h. Maybe it wasn't the picnic?", correct: false },
                        { text: "Wait, let's look at the data again. Peak Monday 4PM. Min Incubation 6h, Max 72h. If we subtract the median (28h) from Mon 4PM, we get Sunday 12:00 PM. The picnic was Saturday. The timing suggests the exposure might be LATER than the picnic, OR the incubation is longer.", feedback: "Correct. A strict median calculation points to Sunday. However, if we assume the Picnic IS the source, we might be dealing with a long-incubation pathogen or leftover food eaten Sunday.", correct: true }
                    ]
                },
                {
                    id: "step2_revised",
                    text: "<h6>Step 2: Re-evaluating the Agent</h6><p>Okay, let's refine. Stool samples actually come back positive for <em>Campylobacter</em> (Incubation 2-5 days). Peak is Monday. Picnic was Saturday (2 days prior). </p><p><strong>Does this fit?</strong></p>",
                    options: [
                        { text: "Yes, 2 days fits perfectly within the incubation period.", feedback: "Correct. Saturday to Monday is 48 hours. This aligns with Campylobacter.", correct: true },
                        { text: "No, it's too short.", feedback: "Incorrect. 48 hours is standard for Campy.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: The Cohort Study</h6><p>You conduct a cohort study. <br><strong>Chicken:</strong> AR(Ill)=40%, AR(Well)=10%. <br><strong>Salad:</strong> AR(Ill)=35%, AR(Well)=35%.</p><p><strong>Calculate the Risk Ratio (RR) for Chicken.</strong></p>",
                    options: [
                        { text: "RR = 1.0", feedback: "Incorrect.", correct: false },
                        { text: "RR = 4.0", feedback: "Correct. 40% / 10% = 4.0. People who ate Chicken were 4 times more likely to get sick.", correct: true },
                        { text: "RR = 0.25", feedback: "Incorrect.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Confounding?</h6><p>Almost everyone who ate Chicken also ate the <strong>Grilled Corn</strong>. You run a stratified analysis.</p><p><strong>Strata 1 (Did NOT eat Corn):</strong> RR for Chicken = 3.9.<br><strong>Strata 2 (Did eat Corn):</strong> RR for Chicken = 4.1.<br><strong>Crude RR for Chicken:</strong> 4.0.</p><p><strong>Is Corn a confounder?</strong></p>",
                    options: [
                        { text: "Yes, because the stratum specific RRs are similar.", feedback: "Incorrect logic. If stratum RRs are similar to the crude, there is NO confounding.", correct: false },
                        { text: "No. The stratum-specific RRs (3.9, 4.1) are similar to the crude RR (4.0). Corn did not distort the relationship.", feedback: "Correct. This is not confounding. Chicken is the independent cause.", correct: true },
                        { text: "Yes, it is an Effect Modifier.", feedback: "Incorrect. RRs are not significantly different between strata.", correct: false }
                    ]
                },
                {
                    id: "step5",
                    text: "<h6>Step 5: Recommendation</h6><p>The chicken was undercooked. What is the primary recommendation?</p>",
                    options: [
                        { text: "Administer prophylactic antibiotics to the town.", feedback: "Incorrect. Antibiotic stewardship precludes this.", correct: false },
                        { text: "Education on safe cooking temperatures and avoiding cross-contamination.", feedback: "Correct. Prevention for future events.", correct: true }
                    ]
                }
            ]
        }
    ];

    class InteractiveCaseEngine {
        constructor() {
            this.containerId = null;
        }

        init(containerId) {
            this.containerId = containerId;
            this.renderList();
        }

        renderList() {
            const container = document.getElementById(this.containerId);
            if (!container) return;

            let html = `
            <div class="interactive-case-list" style="text-align: left;">
                <h3 style="border-bottom: 2px solid var(--accent-color); padding-bottom: 0.5rem; margin-top: 2rem; text-align: left;">Interactive Scenarios</h3>
                <p style="text-align: left;">Test your skills with multi-step investigations. Each decision affects your score.</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
        `;

            INTERACTIVE_CASES_DATA.forEach(c => {
                const diffColor = c.difficulty === 'Advanced' ? '#ea580c' : '#1e40af';
                const diffBg = c.difficulty === 'Advanced' ? '#fff7ed' : '#eff6ff';

                html += `
                <div class="neo-card case-premium-card" style="border: 2px solid #000; padding: 0; height: 100%; display: flex; flex-direction: column; cursor: pointer; transition: all 0.2s ease; text-align: left; background: white; overflow: hidden; box-shadow: 6px 6px 0 #000;" 
                     onclick="if(window.InteractiveEngine) window.InteractiveEngine.startCase('${c.id}')">
                    
                    <div style="height: 6px; width: 100%; background: ${diffColor};"></div>
                    
                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 0.75rem; gap: 0.5rem;">
                            <h4 style="margin:0; font-size: 1.2rem; color: var(--navy-primary); font-weight: 800; line-height: 1.3;">${c.title}</h4>
                            <span class="neo-badge small" style="background:${diffBg}; color:${diffColor}; border: 1px solid ${diffColor}; flex-shrink: 0; font-size: 0.7rem;">${c.difficulty}</span>
                        </div>
                        <p style="font-size: 0.95rem; line-height: 1.5; color: #4b5563; margin-top: 0.5rem; flex: 1;">${c.description}</p>
                        
                        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px dashed #eee;">
                            <button class="neo-btn small primary full-width" style="font-size: 0.9rem; padding: 0.6rem;">
                                Start Case <i class="ph-bold ph-caret-right" style="margin-left: 4px;"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            });

            html += `</div></div>`;
            container.innerHTML = html;
        }

        startCase(id) {
            const caseData = INTERACTIVE_CASES_DATA.find(c => c.id === id);
            if (!caseData) return;
            this.currentCase = caseData;
            this.currentStepIndex = 0;
            this.renderStep();
        }

        renderStep() {
            const container = document.getElementById(this.containerId);
            const step = this.currentCase.steps[this.currentStepIndex];
            const isLastStep = this.currentStepIndex === this.currentCase.steps.length - 1;

            let html = `
            <div class="interactive-case-view">
                <button class="btn btn-outline btn-sm" onclick="window.InteractiveEngine.renderList()"><i class="ph-bold ph-arrow-left"></i> Back to Cases</button>
                <div class="neo-card" style="margin-top: 1rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3 style="margin:0; text-align: left;">${this.currentCase.title}</h3>
                        <span class="text-sm text-muted">Step ${this.currentStepIndex + 1} of ${this.currentCase.steps.length}</span>
                    </div>
                    <hr>
                    <div class="step-content" style="font-size: 1.1rem; line-height: 1.6;">
                        ${step.text}
                    </div>
                    <div class="options-grid" style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 1.5rem;">
        `;

            step.options.forEach((opt, idx) => {
                html += `
                <button class="btn btn-outline option-btn" id="opt-${idx}" onclick="window.InteractiveEngine.checkAnswer(${idx})" style="text-align: left; padding: 1rem;">
                    ${opt.text}
                </button>
            `;
            });

            html += `   </div>
                    <div id="step-feedback" style="margin-top: 1.5rem; display: none;" class="callout"></div>
                    <button id="next-step-btn" class="btn btn-primary" onclick="window.InteractiveEngine.nextStep()" style="display: none; margin-top: 1rem; float: right;">
                        ${isLastStep ? 'Finish Case' : 'Next Step <i class="ph-bold ph-arrow-right"></i>'}
                    </button>
                    <div style="clear: both;"></div>
                </div>
            </div>
        `;

            container.innerHTML = html;
        }

        checkAnswer(optionIdx) {
            const step = this.currentCase.steps[this.currentStepIndex];
            const option = step.options[optionIdx];
            const feedbackEl = document.getElementById('step-feedback');
            const nextBtn = document.getElementById('next-step-btn');
            const btns = document.querySelectorAll('.option-btn');

            // Disable all buttons initially so they can't double click
            btns.forEach(b => b.disabled = true);

            // Show feedback
            feedbackEl.style.display = 'block';
            feedbackEl.innerHTML = `<strong>${option.correct ? 'Correct!' : 'Incorrect.'}</strong> ${option.feedback}`;
            feedbackEl.className = option.correct ? 'callout callout-success' : 'callout callout-danger';

            // Highlight selected
            const selectedBtn = document.getElementById(`opt-${optionIdx}`);
            if (option.correct) {
                selectedBtn.style.background = 'rgba(34, 197, 94, 0.1)';
                selectedBtn.style.borderColor = 'var(--success)';
                nextBtn.style.display = 'inline-block';
            } else {
                selectedBtn.style.background = 'rgba(239, 68, 68, 0.1)';
                selectedBtn.style.borderColor = 'var(--danger)';
                // Re-enable other buttons to allow retry, but keep this one disabled
                btns.forEach((b, idx) => {
                    if (idx !== optionIdx) b.disabled = false;
                });
            }
        }

        nextStep() {
            if (this.currentStepIndex < this.currentCase.steps.length - 1) {
                this.currentStepIndex++;
                this.renderStep();
            } else {
                // Finish
                const container = document.getElementById(this.containerId);
                container.innerHTML = `
                <div class="interactive-case-view">
                    <div class="neo-card" style="text-align: center; padding: 3rem;">
                        <i class="ph ph-check-circle" style="font-size: 4rem; color: var(--success); margin-bottom: 1rem;"></i>
                        <h2>Case Closed!</h2>
                        <p>You successfully investigated and controlled the outbreak.</p>
                        <button class="btn btn-primary" onclick="window.InteractiveEngine.renderList()">Return to Case Library</button>
                    </div>
                </div>
             `;
            }
        }
    }

    const interactiveEngine = new InteractiveCaseEngine();
    window.InteractiveEngine = interactiveEngine;
})();
