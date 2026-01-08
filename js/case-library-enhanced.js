/**
 * Case Library Enhancements - Upgraded Questions & Explanations
 * Adds improved case questions with:
 * - Better question stems
 * - Tricky distractor options  
 * - Detailed explanations with common mistakes
 * - Data tables where appropriate
 */

window.CASE_LIBRARY_ENHANCED = {
    // =========================================================================
    // ENHANCED FOODBORNE CASES
    // =========================================================================
    enhancements: {
        // C1: Norovirus School Potluck
        "C1": {
            enhanced_questions: [
                {
                    q: `<p>The school potluck had 200 attendees. 60 students developed vomiting and cramping within 24-48 hours.</p>
                        <table class='exam-table'>
                        <tr><th>Symptom</th><th>Cases (n=60)</th><th>Percentage</th></tr>
                        <tr><td>Vomiting</td><td>58</td><td>97%</td></tr>
                        <tr><td>Diarrhea</td><td>45</td><td>75%</td></tr>
                        <tr><td>Fever</td><td>6</td><td>10%</td></tr>
                        </table>
                        <p>Which pathogen is MOST consistent with this symptom profile?</p>`,
                    options: [
                        "Norovirus - vomiting predominant with low fever suggests viral, not bacterial",
                        "Salmonella - diarrhea was present in 75% of cases",
                        "C. perfringens - short incubation matches",
                        "Staph aureus - vomiting is the main symptom"
                    ],
                    correct: 0,
                    explain: "KEY: Vomiting > Diarrhea + LOW fever = Viral. Norovirus has vomiting as the hallmark symptom (97%), with diarrhea secondary (75%), and fever is RARE (<10%). Bacterial causes typically have higher fever rates. Staph has shorter incubation (1-6h) and C. perfringens rarely has vomiting as the dominant symptom.",
                    trap: "C. perfringens is a common exam trap - it has watery diarrhea as the dominant symptom, NOT vomiting."
                },
                {
                    q: "Hand sanitizer (alcohol-based) was available at the potluck, yet the outbreak still occurred. Why?",
                    options: [
                        "Norovirus is resistant to alcohol-based sanitizers",
                        "Not enough sanitizer was provided",
                        "People didn't use the sanitizer correctly",
                        "The sanitizer was expired"
                    ],
                    correct: 0,
                    explain: "Norovirus is a NON-ENVELOPED virus with high resistance to alcohol. Soap + water (friction) is MORE effective than alcohol sanitizers. This is a key Science Olympiad fact - not all pathogens are killed by hand sanitizer.",
                    trap: "Alcohol-based sanitizers work great for enveloped viruses (flu, COVID) but NOT for norovirus."
                }
            ]
        },

        // C3: E. coli O157:H7 - The Raw Deal
        "C3": {
            enhanced_questions: [
                {
                    q: `<p>High school students present with bloody diarrhea after eating at the salad bar. Three students develop HUS (hemolytic uremic syndrome). The attending physician asks which antibiotic to prescribe.</p>
                        <p>What is the CORRECT response?</p>`,
                    options: [
                        "Ciprofloxacin - effective against gram-negative bacteria",
                        "Azithromycin - covers most enteric pathogens",
                        "NO antibiotics - they may increase HUS risk",
                        "Metronidazole - covers anaerobes"
                    ],
                    correct: 2,
                    explain: "CRITICAL: Antibiotics are CONTRAINDICATED for E. coli O157:H7 (STEC). Antibiotic stress causes increased toxin release (Shiga toxin), which WORSENS HUS risk. Treatment is supportive care only. This is a key exam point!",
                    trap: "This question tests whether you know the STEC antibiotic contraindication - one of the most important clinical pearls in foodborne illness."
                },
                {
                    q: `<p>The epidemiologist constructs this 2×2 table:</p>
                        <table class='exam-table'>
                        <tr><th></th><th>Ill</th><th>Not Ill</th><th>Total</th></tr>
                        <tr><td><strong>Ate Romaine Lettuce</strong></td><td>18</td><td>6</td><td>24</td></tr>
                        <tr><td><strong>Did Not Eat Lettuce</strong></td><td>2</td><td>24</td><td>26</td></tr>
                        </table>
                        <p>Calculate the Risk Ratio (RR) for the association between lettuce and illness:</p>`,
                    options: [
                        "RR = 9.75",
                        "RR = 36.0",
                        "RR = 4.5",
                        "RR = 0.10"
                    ],
                    correct: 0,
                    explain: "AR(exposed) = 18/24 = 0.75 (75%). AR(unexposed) = 2/26 = 0.077 (7.7%). RR = 75%/7.7% = 9.75. Common trap: Answer B (36.0) is the OR, not RR. OR = (18×24)/(6×2) = 36. RR ≠ OR when disease is common.",
                    trap: "36.0 is the Odds Ratio - a very common exam trap!"
                }
            ]
        },

        // C13: Staph Aureus - Picnic Panic
        "C13": {
            enhanced_questions: [
                {
                    q: `<p>Timeline of the picnic outbreak:</p>
                        <table class='exam-table'>
                        <tr><th>Time</th><th>Event</th></tr>
                        <tr><td>11:00 AM</td><td>Potato salad prepared (mayonnaise-based)</td></tr>
                        <tr><td>12:00 PM</td><td>Salad left in sun at picnic table</td></tr>
                        <tr><td>2:00 PM</td><td>Picnic begins, salad served</td></tr>
                        <tr><td>4:30 PM</td><td>First case of vomiting</td></tr>
                        </table>
                        <p>The incubation period of 2.5 hours is MOST consistent with:</p>`,
                    options: [
                        "Staphylococcus aureus enterotoxin (preformed toxin)",
                        "Norovirus (short incubation strain)",
                        "Salmonella enteritidis",
                        "Clostridium perfringens"
                    ],
                    correct: 0,
                    explain: "Incubation 1-6 hours + vomiting dominant + creamy food left at room temp = STAPH AUREUS. The toxin is PREFORMED in the food (not made in the body), which is why onset is so rapid. Once toxin is produced, cooking WON'T help.",
                    trap: "C. perfringens has longer incubation (8-16h) and causes DIARRHEA, not vomiting."
                },
                {
                    q: "Which intervention would NOT have prevented this outbreak?",
                    options: [
                        "Keeping the potato salad below 40°F (4°C)",
                        "Cooking the potato salad to 165°F before the picnic",
                        "Using clean utensils and hand hygiene",
                        "Limiting time in the 'danger zone' to under 2 hours"
                    ],
                    correct: 1,
                    explain: "TRAP: Cooking AFTER toxin is produced won't help - Staph enterotoxin is HEAT-STABLE. Even boiling won't destroy it. Prevention requires keeping food cold (prevents bacterial growth and toxin production) or limiting time at room temperature.",
                    trap: "This is an EXCEPT question - cooking sounds right but the toxin is already present!"
                }
            ]
        },

        // C9: Cryptosporidium - Pool Panic
        "C9": {
            enhanced_questions: [
                {
                    q: `<p>A community pool outbreak affects 45 swimmers. Chlorine levels tested at 2.0 ppm (normal range). The pool manager is confused why chlorine didn't prevent the outbreak.</p>
                        <p>The BEST explanation is:</p>`,
                    options: [
                        "Cryptosporidium oocysts are highly resistant to standard chlorine levels",
                        "The chlorine test was performed incorrectly",
                        "Chlorine only works against bacteria, not all pathogens",
                        "The outbreak was caused by airborne transmission"
                    ],
                    correct: 0,
                    explain: "Crypto oocysts have a thick protective wall that makes them resistant to chlorine for DAYS at normal pool levels. Even 'proper' chlorination fails. Solutions: UV treatment, hyperchlorination (20+ ppm for 12+ hours), or pool closure.",
                    trap: "Don't assume chlorine failure means improper levels - Crypto is genuinely resistant."
                }
            ]
        },

        // C16: Lyme Disease - Bullseye
        "C16": {
            enhanced_questions: [
                {
                    q: `<p>A group of hikers notice ticks on their bodies after a day on the trail. One hiker removes a tick immediately; another discovers an attached tick 48 hours later.</p>
                        <p>Which statement about Lyme disease transmission is CORRECT?</p>`,
                    options: [
                        "The hiker who removed the tick immediately has minimal risk - transmission requires 24-36 hours of attachment",
                        "Both hikers have equal risk since any tick bite can transmit Lyme",
                        "Only deer ticks (Ixodes) transmit Lyme, so tick identification matters more than attachment time",
                        "Prophylactic antibiotics are recommended for all tick bites regardless of duration"
                    ],
                    correct: 0,
                    explain: "Lyme transmission requires PROLONGED attachment (typically 24-36+ hours). Prompt tick removal (<24h) dramatically reduces risk. This is why daily tick checks are so important for prevention.",
                    trap: "Not all tick bites transmit disease - time matters! Quick removal is protective."
                }
            ]
        },

        // C26: Measles - Waiting Room
        "C26": {
            enhanced_questions: [
                {
                    q: `<p>An unvaccinated child with measles spends 2 hours in a pediatric waiting room. Six other children were present during that time.</p>
                        <p>Given that measles has R₀ = 12-18, which statement is MOST accurate?</p>`,
                    options: [
                        "All 6 susceptible children will likely become infected - measles is airborne and extremely contagious",
                        "Only children sitting within 3 feet are at risk (droplet transmission)",
                        "Risk is limited to direct contact with the infected child",
                        "Modern ventilation systems prevent airborne transmission"
                    ],
                    correct: 0,
                    explain: "Measles is TRUE AIRBORNE - the virus can remain suspended in air for up to 2 HOURS after the infected person leaves. With R₀ of 12-18, an unvaccinated person in the same airspace has 90%+ chance of infection. This is why measles outbreaks spread so rapidly.",
                    trap: "Measles is not droplet - it's airborne and can infect people who enter a room hours after the case left."
                },
                {
                    q: "To achieve herd immunity for measles (R₀ = 15), what vaccination coverage is required?",
                    options: [
                        "50% (half the population)",
                        "75% (most of the population)",
                        "93% (nearly everyone)",
                        "100% (complete coverage)"
                    ],
                    correct: 2,
                    explain: "HIT = 1 - (1/R₀) = 1 - (1/15) = 1 - 0.067 = 0.93 = 93%. Measles requires the HIGHEST vaccine coverage of any disease due to its extreme contagiousness. This is why measles outbreaks often occur in communities with even slightly lower coverage.",
                    trap: "Many people underestimate how high measles coverage needs to be."
                }
            ]
        },

        // C50: Zika Virus - Microcephaly (keep original)
        "C50": {
            enhanced_questions: [
                {
                    q: `<p>A pregnant woman returns from a tropical vacation and asks about Zika virus risks.</p>
                        <p>All of the following are TRUE about Zika transmission EXCEPT:</p>`,
                    options: [
                        "Zika can be transmitted sexually from an infected partner",
                        "Aedes mosquitoes (day-biting) are the primary vector",
                        "Zika is transmitted through casual contact like hugging or shaking hands",
                        "Vertical transmission from mother to fetus can cause microcephaly"
                    ],
                    correct: 2,
                    explain: "Zika is NOT transmitted through casual contact. Transmission routes: (1) Aedes mosquito bites (primary), (2) Sexual contact, (3) Vertical (mother to fetus), (4) Blood transfusion (rare). Social contact (hugging, touching) is NOT a risk.",
                    trap: "This is an EXCEPT question - all options sound plausible but C is clearly false."
                },
                {
                    q: "The most significant public health concern with Zika virus is:",
                    options: [
                        "High mortality rate in adults",
                        "Congenital Zika syndrome (microcephaly and other birth defects)",
                        "Rapid person-to-person transmission",
                        "Antibiotic resistance"
                    ],
                    correct: 1,
                    explain: "Zika is typically MILD in adults (often asymptomatic). The major concern is Congenital Zika Syndrome - microcephaly, brain abnormalities, and other birth defects when pregnant women are infected, especially in the first trimester.",
                    trap: "Zika is not like Ebola - it's usually mild. The danger is to fetuses."
                }
            ]
        },

        // =========================================================================
        // VECTOR-BORNE DISEASES
        // =========================================================================

        // C18: West Nile Virus
        "C18": {
            enhanced_questions: [
                {
                    q: `<p>An August outbreak of encephalitis in elderly nursing home residents:</p>
                        <table class='exam-table'>
                        <tr><th>Case</th><th>Age</th><th>Symptom</th><th>Outdoor Exposure</th></tr>
                        <tr><td>1</td><td>78</td><td>Confusion, fever</td><td>Garden walks at dusk</td></tr>
                        <tr><td>2</td><td>82</td><td>Weakness, headache</td><td>Patio sitting evenings</td></tr>
                        <tr><td>3</td><td>75</td><td>Neck stiffness</td><td>Outdoor dining</td></tr>
                        </table>
                        <p>The timing (August, dusk/evening exposure) and symptoms suggest:</p>`,
                    options: [
                        "West Nile Virus - Culex mosquitoes are most active at dusk/dawn in late summer",
                        "Dengue - Aedes mosquitoes bite during day",
                        "Lyme disease - transmitted by ticks, not mosquitoes",
                        "Eastern Equine Encephalitis - rare and typically younger patients"
                    ],
                    correct: 0,
                    explain: "West Nile peaks in LATE SUMMER (August-September), transmitted by Culex mosquitoes (dusk/dawn biters), and causes neuroinvasive disease primarily in elderly. Birds are the reservoir.",
                    trap: "Dengue/Zika use Aedes (DAY biters). West Nile uses Culex (DUSK biters)."
                }
            ]
        },

        // C19: Dengue
        "C19": {
            enhanced_questions: [
                {
                    q: `<p>A traveler returns from the Caribbean with severe bone pain ("breakbone fever"). This is their SECOND dengue infection.</p>
                        <p>Why is a second dengue infection potentially MORE dangerous than the first?</p>`,
                    options: [
                        "Antibody-Dependent Enhancement (ADE) - prior antibodies help virus enter cells",
                        "The immune system is weakened by the first infection",
                        "Second infections always involve different serotypes",
                        "Dengue builds up in the body over time"
                    ],
                    correct: 0,
                    explain: "ADE is a phenomenon where antibodies from a previous dengue infection (different serotype) can ENHANCE viral uptake, leading to severe dengue/hemorrhagic fever. This is why a second infection can be worse than the first.",
                    trap: "ADE is a key Science Olympiad topic - counterintuitively, having some immunity can make things worse."
                },
                {
                    q: "All of the following are TRUE about Aedes mosquitoes EXCEPT:",
                    options: [
                        "They bite primarily during DAYTIME",
                        "They breed in small containers of standing water",
                        "They transmit dengue, Zika, and chikungunya",
                        "They are most active at dusk and dawn like Culex"
                    ],
                    correct: 3,
                    explain: "Aedes aegypti are DAY biters - a key difference from Culex (dusk/dawn). This affects prevention messaging. Aedes breed in artificial containers (flower pots, tires) near homes.",
                    trap: "Culex = dusk/dawn. Aedes = daytime. Common exam question!"
                }
            ]
        },

        // C20: Malaria
        "C20": {
            enhanced_questions: [
                {
                    q: `<p>A missionary returns from Nigeria with cyclical fevers occurring every 48 hours.</p>
                        <table class='exam-table'>
                        <tr><th>Species</th><th>Fever Cycle</th><th>Severity</th></tr>
                        <tr><td>P. vivax</td><td>48 hours (tertian)</td><td>Moderate, relapses</td></tr>
                        <tr><td>P. falciparum</td><td>Irregular/48 hours</td><td>SEVERE, can be fatal</td></tr>
                        <tr><td>P. malariae</td><td>72 hours (quartan)</td><td>Mild, chronic</td></tr>
                        </table>
                        <p>Which species is MOST likely causing severe/fatal malaria?</p>`,
                    options: [
                        "P. vivax - causes tertian fever",
                        "P. falciparum - responsible for most malaria deaths worldwide",
                        "P. malariae - causes quartan fever",
                        "P. ovale - similar to vivax"
                    ],
                    correct: 1,
                    explain: "P. falciparum causes 90%+ of malaria deaths. It can cause cerebral malaria, severe anemia, and multi-organ failure. Unlike vivax/ovale, it doesn't have liver dormant forms (hypnozoites).",
                    trap: "falciparum = fatal (both start with 'f'). Key memory aid!"
                }
            ]
        },

        // C21: Plague
        "C21": {
            enhanced_questions: [
                {
                    q: `<p>A camper in New Mexico develops a painful swollen lymph node (bubo) in the groin after a camping trip near a prairie dog colony.</p>
                        <p>The MOST likely transmission route is:</p>`,
                    options: [
                        "Flea bite from infected rodent fleas",
                        "Direct contact with prairie dog",
                        "Airborne transmission from other campers",
                        "Contaminated water near the colony"
                    ],
                    correct: 0,
                    explain: "Bubonic plague is transmitted by FLEA BITES (from rodent fleas). Fleas become infected feeding on diseased rodents, then bite humans. Buboes form at lymph nodes draining the bite site.",
                    trap: "Pneumonic plague IS airborne, but that causes pneumonia, not buboes."
                },
                {
                    q: "Which form of plague can spread person-to-person and is a bioterrorism concern?",
                    options: [
                        "Bubonic plague",
                        "Pneumonic plague",
                        "Septicemic plague",
                        "All forms spread equally"
                    ],
                    correct: 1,
                    explain: "PNEUMONIC plague (lung infection) spreads through respiratory droplets and can cause person-to-person epidemics. Bubonic and septicemic require flea/direct contact. Pneumonic plague is a Category A bioterrorism agent.",
                    trap: "Bubonic does NOT spread person-to-person - only pneumonic does."
                }
            ]
        },

        // =========================================================================
        // RESPIRATORY DISEASES
        // =========================================================================

        // C27: Pertussis
        "C27": {
            enhanced_questions: [
                {
                    q: `<p>A 2-month-old infant presents with paroxysmal cough and apnea. The mother received Tdap during pregnancy.</p>
                        <p>Why is maternal Tdap vaccination recommended during EACH pregnancy?</p>`,
                    options: [
                        "Maternal antibodies cross the placenta and protect the infant before they can be vaccinated",
                        "The vaccine only works for one pregnancy",
                        "Pertussis immunity lasts only 9 months",
                        "Infants cannot receive any pertussis vaccine"
                    ],
                    correct: 0,
                    explain: "Cocooning strategy: Tdap in 3rd trimester → maternal IgG crosses placenta → protects infant until they can start DTaP series at 2 months. Each pregnancy needs boosting because antibody levels decline.",
                    trap: "The infant ISN'T directly vaccinated - they're protected by mom's antibodies."
                },
                {
                    q: `<p>The characteristic "whoop" sound in pertussis is caused by:</p>`,
                    options: [
                        "Inspiratory stridor after a coughing paroxysm",
                        "Vocal cord inflammation",
                        "Bacterial colonization of the larynx",
                        "Allergic reaction to the toxin"
                    ],
                    correct: 0,
                    explain: "After violent coughing paroxysms, the patient forcefully inhales through narrowed airways, creating the characteristic 'whoop.' Infants may not whoop - they may just have apnea.",
                    trap: "Infants often DON'T whoop - they just stop breathing. More dangerous!"
                }
            ]
        },

        // C30: Tuberculosis
        "C30": {
            enhanced_questions: [
                {
                    q: `<p>A homeless shelter resident has a positive TB skin test (TST = 15mm). Chest X-ray shows no abnormalities.</p>
                        <p>This patient has:</p>`,
                    options: [
                        "Latent TB infection (LTBI) - infected but not contagious",
                        "Active TB disease - needs isolation",
                        "BCG vaccine artifact - ignore the result",
                        "False positive - no TB exposure"
                    ],
                    correct: 0,
                    explain: "Positive TST + Normal CXR = LATENT TB INFECTION. The person is infected but NOT sick or contagious. They should receive treatment (usually 4 months rifampin or 9 months INH) to prevent progression to active disease.",
                    trap: "Latent = NOT contagious. Active = contagious. Key distinction!"
                },
                {
                    q: "TB is considered TRUE AIRBORNE (not droplet) because:",
                    options: [
                        "TB bacilli remain suspended in air for hours and can travel long distances",
                        "TB spreads through contaminated surfaces",
                        "TB requires only brief exposure",
                        "TB is spread by coughing directly at someone"
                    ],
                    correct: 0,
                    explain: "TB requires AIRBORNE precautions (N95 respirators, negative pressure rooms) because droplet nuclei are <5 microns and remain suspended for hours. This is different from DROPLET transmission (flu, pertussis) where large particles fall quickly.",
                    trap: "Airborne = tiny particles stay in air. Droplet = large particles fall within 3-6 feet."
                }
            ]
        },

        // C31: Influenza
        "C31": {
            enhanced_questions: [
                {
                    q: `<p>Match the influenza term to its definition:</p>
                        <table class='exam-table'>
                        <tr><th>Term</th><th>Definition</th></tr>
                        <tr><td>Antigenic DRIFT</td><td>Small mutations → seasonal flu</td></tr>
                        <tr><td>Antigenic SHIFT</td><td>Major reassortment → pandemic potential</td></tr>
                        </table>
                        <p>A new influenza strain emerges from pigs containing genes from human, swine, AND avian flu. This is:</p>`,
                    options: [
                        "Antigenic SHIFT - reassortment of multiple strains creates novel virus",
                        "Antigenic DRIFT - gradual mutation over time",
                        "Neither - this is normal seasonal variation",
                        "Both processes occurring simultaneously"
                    ],
                    correct: 0,
                    explain: "SHIFT = major genetic reassortment (mixing of strains in a host like pigs). Creates novel viruses that humans have no immunity to → PANDEMIC potential. The 2009 H1N1 pandemic was from shift.",
                    trap: "DRIFT = gradual (seasonal flu). SHIFT = sudden (pandemic risk)."
                }
            ]
        },

        // =========================================================================
        // SPECIAL CASES
        // =========================================================================

        // C23: Rabies
        "C23": {
            enhanced_questions: [
                {
                    q: `<p>A child wakes up with a bat in their bedroom. Parents see no obvious bite marks.</p>
                        <p>What is the CORRECT recommendation?</p>`,
                    options: [
                        "Administer post-exposure prophylaxis (PEP) - bat bites may be undetectable",
                        "Wait and observe for symptoms before treating",
                        "Only treat if the bat tests positive for rabies",
                        "No treatment needed if no visible bite marks"
                    ],
                    correct: 0,
                    explain: "Bat bites can be UNDETECTABLE (tiny teeth). Any potential bat exposure (bat in room with sleeping/impaired person) = assume exposure and give PEP. Once rabies symptoms appear, it's 100% fatal (except 1 case with Milwaukee Protocol).",
                    trap: "Don't wait for symptoms! By the time symptoms appear, it's too late."
                },
                {
                    q: "Rabies post-exposure prophylaxis (PEP) is effective because:",
                    options: [
                        "Rabies has a long incubation period, allowing time to mount an immune response",
                        "The vaccine creates immediate immunity",
                        "Rabies immunoglobulin kills the virus instantly",
                        "PEP only works if given within 24 hours"
                    ],
                    correct: 0,
                    explain: "Rabies has weeks-to-months incubation (travels slowly along nerves to brain). This gives time for the vaccine + immunoglobulin to generate protective immunity BEFORE the virus reaches the CNS.",
                    trap: "PEP works even days-weeks after exposure because of the long incubation."
                }
            ]
        },

        // C24: Hantavirus
        "C24": {
            enhanced_questions: [
                {
                    q: `<p>A person develops respiratory failure after cleaning an abandoned cabin. They swept mouse droppings without a mask.</p>
                        <p>The transmission route for Hantavirus Pulmonary Syndrome (HPS) is:</p>`,
                    options: [
                        "Inhalation of aerosolized rodent urine/droppings",
                        "Mouse bite",
                        "Person-to-person respiratory droplets",
                        "Contaminated food"
                    ],
                    correct: 0,
                    explain: "Hantavirus is transmitted by INHALING aerosolized rodent excreta (urine, droppings, saliva). Sweeping/vacuuming creates aerosols. Prevention: WET MOP (don't sweep), ventilate, wear N95.",
                    trap: "Hantavirus does NOT spread person-to-person in the Americas."
                }
            ]
        },

        // C36: Ebola
        "C36": {
            enhanced_questions: [
                {
                    q: `<p>All of the following are TRUE about Ebola transmission EXCEPT:</p>`,
                    options: [
                        "Ebola spreads through direct contact with infected body fluids",
                        "Healthcare workers are at highest risk during outbreaks",
                        "Ebola is highly contagious through airborne transmission",
                        "Funeral practices involving body contact have spread Ebola"
                    ],
                    correct: 2,
                    explain: "Ebola is NOT airborne - it requires DIRECT CONTACT with body fluids (blood, vomit, feces). This is why proper PPE protects HCWs. Traditional funeral washing practices have been major transmission routes.",
                    trap: "Ebola is scary but NOT airborne. It requires direct fluid contact."
                },
                {
                    q: "Ebola survivors may continue to harbor virus in:",
                    options: [
                        "Eyes (ocular fluid) and semen for months after recovery",
                        "Respiratory secretions indefinitely",
                        "Skin cells for years",
                        "Survivors cannot transmit virus"
                    ],
                    correct: 0,
                    explain: "Ebola can persist in 'immune-privileged' sites like eyes and testes. Male survivors can have virus in semen for 1+ years. This has caused sexual transmission even after 'recovery.'",
                    trap: "Ebola survivors aren't completely 'clear' - virus hides in certain body sites."
                }
            ]
        },

        // C10: Cholera
        "C10": {
            enhanced_questions: [
                {
                    q: `<p>A cholera patient presents with severe dehydration:</p>
                        <table class='exam-table'>
                        <tr><th>Sign</th><th>Finding</th></tr>
                        <tr><td>Mental Status</td><td>Lethargic</td></tr>
                        <tr><td>Eyes</td><td>Sunken</td></tr>
                        <tr><td>Skin Turgor</td><td>Very slow (&gt;2 sec)</td></tr>
                        <tr><td>Pulse</td><td>Faint/Rapid</td></tr>
                        </table>
                        <p>The FIRST priority in treatment is:</p>`,
                    options: [
                        "IV fluid rehydration - patient is in shock",
                        "Antibiotics to kill the bacteria",
                        "Anti-diarrheal medications",
                        "Oral rehydration solution (ORS)"
                    ],
                    correct: 0,
                    explain: "SEVERE dehydration = IV fluids FIRST (Ringer's lactate or similar). Death from cholera is due to HYPOVOLEMIC SHOCK, not the bacteria. Rehydration is lifesaving; antibiotics are secondary (shorten duration only).",
                    trap: "ORS is for mild-moderate. SEVERE dehydration needs IV."
                }
            ]
        }
    }
};

// =========================================================================
// INTEGRATION: Merge enhanced questions into CASE_LIBRARY
// =========================================================================
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (!window.CASE_LIBRARY) {
                console.warn('[CASE LIBRARY ENHANCED] CASE_LIBRARY not found');
                return;
            }

            const enhancements = window.CASE_LIBRARY_ENHANCED.enhancements;
            let upgradeCount = 0;

            window.CASE_LIBRARY.forEach((caseItem, index) => {
                const enhanced = enhancements[caseItem.id];
                if (enhanced && enhanced.enhanced_questions) {
                    // Add enhanced questions to the case
                    if (!window.CASE_LIBRARY[index].enhanced_questions) {
                        window.CASE_LIBRARY[index].enhanced_questions = [];
                    }
                    window.CASE_LIBRARY[index].enhanced_questions.push(...enhanced.enhanced_questions);
                    upgradeCount++;
                }
            });

            console.log(`[CASE LIBRARY ENHANCED] Upgraded ${upgradeCount} cases with exam-style questions`);
        }, 600); // Run after mega-cases-data.js
    });
})();
