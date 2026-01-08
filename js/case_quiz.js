/*
 * Case Challenges (Phase 9)
 *
 * This module introduces multi‑step case challenges that mirror the
 * structure of real competition questions.  Each case presents a
 * narrative scenario followed by several sub‑questions.  Students
 * read the case, answer each question sequentially and receive
 * immediate feedback and explanations.  A summary at the end
 * provides a score and encourages review of any missed concepts.
 */

(function () {
  if (!window.EPIDEMIC_ENGINE_CONTENT) {
    window.EPIDEMIC_ENGINE_CONTENT = {};
  }
  // Define the chapter entry for the sidebar
  window.EPIDEMIC_ENGINE_CONTENT.case_quiz = {
    title: 'Case Challenges',
    difficulty: 'C',
    content: `
      <h1>Case Challenges</h1>
      <p>
        Work through multi‑step scenarios inspired by past Science Olympiad
        Disease Detectives exams.  Each case includes a short narrative
        followed by several questions testing definitions, calculations
        and interpretation.  Answer each question to reveal the
        explanation and advance to the next.  At the end you will see
        your total score and can review any missed items.
      </p>
      <div id="case-quiz-container" style="margin-top:2rem;"></div>
    `
  };

  // Data: define a few example cases.  More can be added as needed.
  const cases = [
    {
      title: 'Case 1: Picnic Outbreak',
      narrative: `
        <p>A group of 60 people attended a company picnic.  Within 24
        hours, 18 attendees became ill with vomiting and diarrhea.  A
        line list was compiled and food exposures were recorded.  The
        attack rate among those who ate chicken salad was 12/20, while
        the attack rate among those who did not eat chicken salad was
        6/40.</p>
      `,
      questions: [
        {
          prompt: 'Calculate the relative risk of illness associated with eating chicken salad.',
          type: 'mcq',
          options: [
            '2.0',
            '1.5',
            '4.0',
            '0.5'
          ],
          correct: 0,
          explanation: 'RR = (12/20) / (6/40) = (0.6) / (0.15) = 4.0.  Always divide the attack rate among the exposed by the attack rate among the unexposed.'
        },
        {
          prompt: 'Based on the relative risk calculated, which statement best describes the association?',
          type: 'mcq',
          options: [
            'Those who ate chicken salad had no increased risk of illness.',
            'Those who ate chicken salad were four times more likely to become ill.',
            'Those who did not eat chicken salad were at higher risk.',
            'The sample size is too small to interpret.'
          ],
          correct: 1,
          explanation: 'A relative risk of 4 indicates that individuals who ate the chicken salad were four times as likely to develop illness compared with those who did not.'
        },
        {
          prompt: 'Which control measure would be most appropriate at this point in the investigation?',
          type: 'mcq',
          options: [
            'Recall all leftover chicken salad and send it to the lab for testing.',
            'Administer antibiotics prophylactically to all attendees.',
            'Close the picnic venue permanently.',
            'Interview only those who remained healthy.'
          ],
          correct: 0,
          explanation: 'Removing the suspected food and submitting samples for laboratory analysis is a common early control measure in food‑borne outbreaks.'
        }
      ]
    },
    {
      title: 'Case 2: Measles in the Community',
      narrative: `
        <p>A measles case is reported in a small town.  The index case
        attended a local school while contagious.  Public health
        officials identify 50 susceptible students.  Two weeks later,
        10 of these students develop measles despite being vaccinated.
        Measles vaccine efficacy is known to be 97&nbsp;percent.</p>
      `,
      questions: [
        {
          prompt: 'What is the secondary attack rate among the susceptible students?',
          type: 'mcq',
          options: [
            '20%',
            '10%',
            '5%',
            '15%'
          ],
          correct: 0,
          explanation: 'The secondary attack rate = 10 cases / 50 susceptibles = 0.20 or 20%.'
        },
        {
          prompt: 'Which statement regarding the vaccine is most accurate?',
          type: 'mcq',
          options: [
            'The vaccine failed completely since cases occurred among vaccinated individuals.',
            'A 97% efficacious vaccine means no vaccinated persons should get measles.',
            'Breakthrough cases can occur even with high vaccine efficacy.',
            'Vaccine efficacy measures the probability of exposure.'
          ],
          correct: 2,
          explanation: 'Vaccine efficacy of 97% means the vaccine reduces risk by 97%, but breakthrough cases can still occur, especially if exposure intensity is high.'
        },
        {
          prompt: 'Which public health action is NOT appropriate in this situation?',
          type: 'mcq',
          options: [
            'Offer measles vaccination to unvaccinated contacts.',
            'Isolate ill students at home until they are no longer contagious.',
            'Provide post‑exposure prophylaxis with antibiotics.',
            'Notify parents and local healthcare providers about the exposure.'
          ],
          correct: 2,
          explanation: 'Antibiotics have no effect on measles, which is viral.  Vaccination and isolation are appropriate control measures, as is notification.'
        }
      ]
    },
    {
      title: 'Case 3: Salmonella Outbreak at a Wedding',
      narrative: `
        <p>After a large wedding reception, 45 out of 150 guests fell ill with fever, cramps, and diarrhea. 
        Interviews revealed that of the 80 guests who ate the Caesar salad, 40 became ill. 
        Only 5 of the 70 guests who did not eat the salad became ill.</p>
      `,
      questions: [
        {
          prompt: 'Calculate the Attack Rate (AR) for those who ate the Caesar salad.',
          type: 'mcq',
          options: [
            '30%',
            '50%',
            '25%',
            '80%'
          ],
          correct: 1,
          explanation: 'AR = Ill / Total Exposed = 40 / 80 = 0.50 or 50%.'
        },
        {
          prompt: 'Calculate the Odds Ratio (OR) associated with the Caesar salad exposure.',
          type: 'mcq',
          options: [
            '11.0',
            '13.0',
            '7.0',
            '1.0'
          ],
          correct: 1,
          explanation: 'OR = (a/b) / (c/d) = (40/40) / (5/65) = 1 / 0.0769 ≈ 13.0.'
        },
        {
          prompt: 'If Salmonella is confirmed, what must investigators verify during the trace-back?',
          type: 'mcq',
          options: [
            'That the chef wore gloves.',
            'Whether raw eggs or undercooked chicken were used in the dressing.',
            'If the salad was served on cold plates.',
            'If guests danced before eating.'
          ],
          correct: 1,
          explanation: 'Raw eggs (often in Caesar dressing) and undercooked poultry are primary reservoirs for Salmonella.'
        }
      ]
    },
    {
      title: 'Case 4: Legionnaires\' Disease at a Hotel',
      narrative: `
        <p>Several guests at a downtown hotel developed severe pneumonia within two weeks of their stay. 
        Environmental sampling found <i>Legionella pneumophila</i> in the cooling tower. 
        No person-to-person transmission has been documented.</p>
      `,
      questions: [
        {
          prompt: 'What type of outbreak pattern is this?',
          type: 'mcq',
          options: [
            'Propagated Source',
            'Common Source (Intermittent or Continuous)',
            'Person-to-Person',
            'Vector-borne'
          ],
          correct: 1,
          explanation: 'Legionnaires\' disease is acquired from an environmental source (water/mist) and is not transmitted person-to-person. It typically creates a common source pattern.'
        },
        {
          prompt: 'Which Hill Criterion is most strongly supported by finding the specific bacteria in the water source?',
          type: 'mcq',
          options: [
            'Specificity',
            'Temporality',
            'Coherence',
            'Biological Gradient'
          ],
          correct: 2,
          explanation: 'Coherence means the finding matches known biological facts (Legionella lives in water towers). Specificity is rarely perfect; Temporality requires knowing exposure time relative to onset.'
        }
      ]
    },
    {
      title: 'Case 5: Norovirus on a Cruise Ship',
      narrative: `
        <p>An outbreak of vomiting begins on Day 2 of a cruise. By Day 4, 300 passengers are ill. 
        The Epi Curve shows a sharp peak followed by a gradual decline, suggesting a point source followed by secondary spread. 
        Cleaning protocols are intensified.</p>
      `,
      questions: [
        {
          prompt: 'Why is Norovirus often associated with such rapid secondary spread?',
          type: 'mcq',
          options: [
            'It is airborne over long distances.',
            'It has a low infectious dose and high environmental stability.',
            'It is vector-borne.',
            'It requires direct blood contact.'
          ],
          correct: 1,
          explanation: 'Norovirus is highly contagious (low dose) and survives well on surfaces, leading to rapid person-to-person and fomite transmission.'
        },
        {
          prompt: 'What is the most effective way to break the chain of transmission for this pathogen?',
          type: 'mcq',
          options: [
            'Hand sanitizer only.',
            'Rigorous hand washing with soap and water and disinfection with bleach.',
            'Wearing masks.',
            'Antibiotics for all passengers.'
          ],
          correct: 1,
          explanation: 'Alcohol-based sanitizers are less effective against Norovirus. Soap and water plus bleach disinfection are the gold standards.'
        }
      ]
    },
    {
      title: 'Case 6: Mystery in the Woods',
      narrative: `
        <p>Three friends went hiking within the Appalachian region. One week later, two developed fatigue, fever, and a distinct "bullseye" rash (Erythema migrans). 
        They recalled walking through tall grass but did not notice any bites.</p>
      `,
      questions: [
        {
          prompt: 'What is the most likely vector for this illness?',
          type: 'mcq',
          options: [
            'Mosquito (Aedes aegypti)',
            'Black-legged Tick (Ixodes scapularis)',
            'Flea (Xenopsylla cheopis)',
            'Tsetse Fly'
          ],
          correct: 1,
          explanation: 'Lyme disease, characterized by Erythema migrans, is transmitted by the Black-legged tick (Ixodes scapularis).'
        },
        {
          prompt: 'Which preventive measure is most effective for this vector?',
          type: 'mcq',
          options: [
            'Sleeping under bed nets',
            'Wearing light-colored protective clothing and using DEET',
            'Eliminating standing water',
            'Vaccinating pets only'
          ],
          correct: 1,
          explanation: 'Light clothing makes ticks visible, and DEET repels them. Bed nets and water elimination target mosquitoes.'
        }
      ]
    },
    {
      title: 'Case 7: The Silent Infant',
      narrative: `
        <p>A 4-month-old infant presents with lethargy, poor feeding, constipation, and weak cry ("floppy baby" syndrome). 
        The parents mention using honey to sweeten the baby\'s pacifier. Stool samples are collected.</p>
      `,
      questions: [
        {
          prompt: 'What is the likely pathogen?',
          type: 'mcq',
          options: [
            'Clostridium tetani',
            'Clostridium botulinum',
            'Staphylococcus aureus',
            'Salmonella'
          ],
          correct: 1,
          explanation: 'Infant botulism is caused by ingesting C. botulinum spores (often in honey), which colonize the gut and produce toxin.'
        },
        {
          prompt: 'This case represents which type of transmission?',
          type: 'mcq',
          options: [
            'Foodborne intoxication',
            'Foodborne infection',
            'Vector-borne',
            'Person-to-person'
          ],
          correct: 1,
          explanation: 'Infant botulism is an infection (spores grow in gut), unlike adult botulism which is usually intoxication (eating pre-formed toxin).'
        }
      ]
    },
    {
      title: 'Case 8: University Mumps Outbreak',
      narrative: `
        <p>A university experiences a sudden spike in Mumps cases. 
        Records show 95% of students received the MMR vaccine. 
        However, detailed analysis shows the attack rate is highest among those vaccinated >10 years ago.</p>
      `,
      questions: [
        {
          prompt: 'This pattern suggests:',
          type: 'mcq',
          options: [
            'Primary Vaccine Failure (Antigens didn\'t work)',
            'Waning Immunity (Secondary Failure)',
            'Cold Chain Failure',
            'Herd Immunity Threshold was met'
          ],
          correct: 1,
          explanation: 'Cases in long-ago vaccinated individuals suggest immunity has faded over time (waning immunity).'
        },
        {
          prompt: 'What is the immediate control strategy?',
          type: 'mcq',
          options: [
            'Close the university for a semester.',
            'Administer a third "booster" dose of MMR to the at-risk population.',
            'Prescribe antibiotics to all students.',
            'Switch to oral polio vaccine.'
          ],
          correct: 1,
          explanation: 'Outbreak control for Mumps in high-vaccination settings often involves a third MMR dose to boost immunity.'
        }
      ]
    },
    {
      title: 'Case 9: The Monday Headache',
      narrative: `
        <p>Every Monday morning during winter, workers at a packaging plant complain of headaches, dizziness, and nausea. 
        Symptoms resolve by Monday evening after they leave. No fever is reported.</p>
      `,
      questions: [
        {
          prompt: 'You suspect an environmental cause. What is the top differential?',
          type: 'mcq',
          options: [
            'Norovirus',
            'Carbon Monoxide (CO) poisoning',
            'Legionella',
            'Salmonella'
          ],
          correct: 1,
          explanation: 'The timing (Monday mornings in winter) suggests a heating system or forklift startup issue causing CO buildup. Symptoms match CO poisoning.'
        },
        {
          prompt: 'This type of illness pattern is best described as:',
          type: 'mcq',
          options: [
            'Building-Related Illness (BRI)',
            'Sick Building Syndrome (SBS)',
            'Mass Psychogenic Illness',
            'Infectious Cluster'
          ],
          correct: 0,
          explanation: 'BRI applies when a specific, diagnosable cause (like CO) is identified in a building. SBS implies general malaise without a specific etiology.'
        }
      ]
    },
    {
      title: 'Case 10: Mystery Tropical Fever',
      narrative: `
        <p>A traveler returning from Brazil presents with high fever, severe joint pain ("breakbone fever"), and pain behind the eyes. 
        A tourniquet test is positive (petechiae appear). Malaria smear is negative.</p>
      `,
      questions: [
        {
          prompt: 'What is the most likely diagnosis?',
          type: 'mcq',
          options: [
            'Yellow Fever',
            'Dengue Fever',
            'Typhoid',
            'Cholera'
          ],
          correct: 1,
          explanation: 'Severe joint pain (breakbone) and retro-orbital pain are classic signs of Dengue Fever.'
        },
        {
          prompt: 'Which mosquito vector is responsible?',
          type: 'mcq',
          options: [
            'Anopheles',
            'Aedes aegypti',
            'Culex',
            'Sandfly'
          ],
          correct: 1,
          explanation: 'Aedes aegypti (and Aedes albopictus) transmit viral fevers like Dengue, Zika, and Chikungunya.'
        }
      ]
    },
    {
      title: 'Case 11: Assessing Screening Accuracy',
      narrative: `
        <p>A new rapid test for Strep Throat is evaluated. 
        In a sample of 100 confirmed sick patients, the test found 80 positive. 
        In a sample of 100 healthy patients, the test found 90 negative.</p>
      `,
      questions: [
        {
          prompt: 'Calculate the Sensitivity of the test.',
          type: 'mcq',
          options: [
            '80%',
            '90%',
            '20%',
            '10%'
          ],
          correct: 0,
          explanation: 'Sensitivity = TP / (TP + FN) = 80 / 100 = 80%.'
        },
        {
          prompt: 'Calculate the Specificity of the test.',
          type: 'mcq',
          options: [
            '80%',
            '90%',
            '10%',
            '100%'
          ],
          correct: 1,
          explanation: 'Specificity = TN / (TN + FP) = 90 / 100 = 90%.'
        }
      ]
    },
    {
      title: 'Case 12: E. coli at the County Fair',
      narrative: `
        <p>Following a county fair, 25 children develop bloody diarrhea; 3 develop Hemolytic Uremic Syndrome (HUS). 
        A case-control study shows a strong association with visiting the petting zoo (OR = 15.4).</p>
      `,
      questions: [
        {
          prompt: 'This pathogen is likely:',
          type: 'mcq',
          options: [
            'E. coli O157:H7 (STEC)',
            'Enterotoxigenic E. coli (ETEC)',
            'Salmonella Typhi',
            'Shigella'
          ],
          correct: 0,
          explanation: 'Shiga toxin-producing E. coli (STEC) causes bloody diarrhea and HUS and is common in ruminants (cattle/goats) at petting zoos.'
        },
        {
          prompt: 'The mode of transmission here is:',
          type: 'mcq',
          options: [
            'Foodborne (Ingestion)',
            'Direct Contact / Fecal-Oral',
            'Airborne',
            'Vector-borne'
          ],
          correct: 1,
          explanation: 'Direct contact with animals or their environment followed by hand-to-mouth (fecal-oral) transmission.'
        }
      ]
    },
    {
      title: 'Case 13: Hepatitis A in a Bistro',
      narrative: `
        <p>Public health is notified of 5 unrelated people with jaundice and elevated liver enzymes. 
        The only common link is dining at "Bistro X" 4 weeks ago. 
        An investigation reveals a salad prep cook recently returned from a trip where he was ill.</p>
      `,
      questions: [
        {
          prompt: 'What is the incubation period for Hepatitis A?',
          type: 'mcq',
          options: [
            '24-48 hours',
            '3-5 days',
            '14-28 days (avg 28-30)',
            '3-6 months'
          ],
          correct: 2,
          explanation: 'Hep A has a long incubation period, typically 28 days (range 15-50 days).'
        },
        {
          prompt: 'Can post-exposure prophylaxis (PEP) be given to recent diners?',
          type: 'mcq',
          options: [
            'No, once exposed nothing can be done.',
            'Yes, Hep A vaccine or IgG can be given within 2 weeks of exposure.',
            'Yes, antibiotics should be given immediately.',
            'Only if they are symptomatic.'
          ],
          correct: 1,
          explanation: 'Hep A vaccine or immunoglobulin is effective if given within 14 days of exposure.'
        }
      ]
    },
    {
      title: 'Case 14: Mystery Paralysis',
      narrative: `
        <p>In a region certified polio-free, a 6-year-old child presents with sudden onset weakness in the left leg (Acute Flaccid Paralysis). 
        Stool samples distinguish between wild virus and vaccine-derived strains.</p>
      `,
      questions: [
        {
          prompt: 'If the strain is "Vaccine-Derived" (cVDPV), what does this imply?',
          type: 'mcq',
          options: [
            'The child was recently vaccinated with IPV.',
            'The oral vaccine virus (OPV) circulated in an under-immunized population and mutated.',
            'The lab made an error.',
            'This is a wild strain.'
          ],
          correct: 1,
          explanation: 'cVDPV occurs when the live attenuated virus from OPV circulates long enough in improper coverage areas to regain neurovirulence.'
        },
        {
          prompt: 'AFP surveillance requires reporting:',
          type: 'mcq',
          options: [
            'Only confirmed Polio cases',
            'Any case of sudden floppy paralysis in children <15 years',
            'Any paralysis in adults',
            'Only cases with fever'
          ],
          correct: 1,
          explanation: 'Sensitive surveillance requires reporting ALL Acute Flaccid Paralysis cases in children to catch potential polio.'
        }
      ]
    },
    {
      title: 'Case 15: Listeria in Deli Meats',
      narrative: `
        <p>A cluster of Listeriosis cases is identified across three states. 
        Whole Genome Sequencing (WGS) links the patient isolates to a single strain found in a deli meat processing facility.</p>
      `,
      questions: [
        {
          prompt: 'Why is Listeria monocytogenes particularly dangerous for pregnant women?',
          type: 'mcq',
          options: [
            'It causes severe skin rash.',
            'It can cross the placenta causing miscarriage or stillbirth.',
            'It is resistant to all antibiotics.',
            'It causes rapid respiratory failure.'
          ],
          correct: 1,
          explanation: 'Listeria can cross the placental barrier, leading to severe fetal infection or death, even if the mother has mild symptoms.'
        },
        {
          prompt: 'Unique characteristic of Listeria regarding temperature:',
          type: 'mcq',
          options: [
            'It survives boiling.',
            'It grows at refrigerator temperatures (4°C).',
            'It only grows in tropical heat.',
            'It requires freezing to reproduce.'
          ],
          correct: 1,
          explanation: 'Listeria is psychrotrophic, meaning it can grow at refrigeration temperatures where other bacteria are inhibited.'
        }
      ]
    },
    {
      title: 'Case 16: Cryptosporidium at the Pool',
      narrative: `
        <p>Two weeks after a community pool party, several attendees report watery diarrhea that has lasted >7 days. 
        Routine water testing showed normal chlorine levels.</p>
      `,
      questions: [
        {
          prompt: 'Why did chlorine not prevent this outbreak?',
          type: 'mcq',
          options: [
            'The test was wrong.',
            'Cryptosporidium has a protective outer shell highly resistant to chlorine.',
            'The bacteria mutated.',
            'It was actually airborne.'
          ],
          correct: 1,
          explanation: 'Crypto has an oocyst shell that makes it extremely resistant to standard chlorine levels. Hyperchlorination or UV is needed.'
        },
        {
          prompt: 'The study design best suited to investigate this specific event is:',
          type: 'mcq',
          options: [
            'Cohort Study (Retrospective)',
            'Ecological Study',
            'Case Report',
            'Randomized Control Trial'
          ],
          correct: 0,
          explanation: 'Since the population (party attendees) is well-defined, we can classify them by exposure (swam vs didn\'t) and calculate RR (Retrospective Cohort).'
        }
      ]
    },
    {
      title: 'Case 17: Mystery Hantavirus',
      narrative: `
        <p>A young man in New Mexico presents with rapid onset respiratory distress and dies within 24 hours. 
        History reveals he was cleaning an old barn filled with mice droppings a week earlier.</p>
      `,
      questions: [
        {
          prompt: 'The likely diagnosis is:',
          type: 'mcq',
          options: [
            'Plague',
            'Hantavirus Pulmonary Syndrome (HPS)',
            'Histoplasmosis',
            'Influenza'
          ],
          correct: 1,
          explanation: 'Hantavirus is transmitted by inhaling aerosolized rodent urine/feces (Deer Mouse) and causes severe pulmonary edema.'
        },
        {
          prompt: 'Proper prevention when cleaning such areas includes:',
          type: 'mcq',
          options: [
            'Sweeping vigorously.',
            'Vacuuming immediately.',
            'Wet mopping with disinfectant to avoid creating dust.',
            'Using a fan.'
          ],
          correct: 2,
          explanation: 'Never sweep or vacuum dry droppings as it aerosolizes the virus. Wet down the area with bleach first.'
        }
      ]
    },
    {
      title: 'Case 18: Smoking and Lung Cancer (Cohort)',
      narrative: `
        <p>A classic prospective cohort study follows 1000 smokers and 1000 non-smokers for 10 years. 
        100 smokers develop lung cancer. 10 non-smokers develop lung cancer.</p>
      `,
      questions: [
        {
          prompt: 'Calculate the Risk Ratio (RR).',
          type: 'mcq',
          options: [
            '5.0',
            '10.0',
            '2.0',
            '100.0'
          ],
          correct: 1,
          explanation: 'Risk Exposed = 100/1000 = 0.1. Risk Unexposed = 10/1000 = 0.01. RR = 0.1 / 0.01 = 10.0.'
        },
        {
          prompt: 'Calculate the Attributable Risk Percent (AR%) in the exposed.',
          type: 'mcq',
          options: [
            '90%',
            '50%',
            '10%',
            '99%'
          ],
          correct: 0,
          explanation: 'AR% = (RR - 1) / RR = (10 - 1) / 10 = 0.9 or 90%. 90% of the risk in smokers is attributable to smoking.'
        }
      ]
    },
    {
      title: 'Case 19: The Sensitivity Paradox',
      narrative: `
        <p>A rare disease (Prevalence = 0.1%) is tested with a screening tool that has 99% Sensitivity and 99% Specificity. 
        A patient tests positive.</p>
      `,
      questions: [
        {
          prompt: 'Is the patient likely to have the disease (Positive Predictive Value)?',
          type: 'mcq',
          options: [
            'Yes, >99%',
            'No, likely <10% (False Positive Paradox)',
            'Yes, exactly 50%',
            'Cannot determine'
          ],
          correct: 1,
          explanation: 'With low prevalence, false positives outnumber true positives. In 10,000 people: 10 Sick (TP=9.9). 9,990 Healthy -> 1% FP = ~100. PPV ≈ 10/110 ≈ 9%.'
        },
        {
          prompt: 'How do you fix this for clinical use?',
          type: 'mcq',
          options: [
            'Test only high-risk populations (Increase Prevalence).',
            'Lower the sensitivity.',
            'Use a test with lower specificity.',
            'Test everyone twice.'
          ],
          correct: 0,
          explanation: 'Increasing the pre-test probability (prevalence) by testing only symptomatic/high-risk groups improves the PPV.'
        }
      ]
    },
    {
      title: 'Case 20: The "Novel" Respiratory Virus',
      narrative: `
        <p>A cluster of pneumonia cases of unknown etiology emerges in a crowded market city. 
        Cases double every 4 days. R0 is estimated at 2.5.</p>
      `,
      questions: [
        {
          prompt: 'What does R0 = 2.5 mean?',
          type: 'mcq',
          options: [
            'The virus kills 2.5% of people.',
            'Each infected person infects avg 2.5 others in a susceptible population.',
            'The incubation period is 2.5 days.',
            'It spreads via water.'
          ],
          correct: 1,
          explanation: 'The Basic Reproduction Number (R0) measures transmissibility in a naive population.'
        },
        {
          prompt: 'To stop the outbreak (R < 1) via vaccine alone, what coverage is needed?',
          type: 'mcq',
          options: [
            '20%',
            '40%',
            '60%',
            '100%'
          ],
          correct: 2,
          explanation: 'Hit = 1 - (1/R0) = 1 - (1/2.5) = 1 - 0.4 = 0.6 or 60%.'
        }
      ]
    }
  ];

  // Internal state to track progress through cases and questions
  const state = {
    caseOrder: [],
    caseIdx: 0,
    questionIdx: 0,
    correct: 0,
    totalQuestions: 0
  };

  // Shuffle helper
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Render the initial screen
  function renderStart() {
    const container = document.getElementById('case-quiz-container');
    if (!container) return;
    container.innerHTML = `
      <div class="neo-card" style="max-width:600px; margin:0 auto; padding:2rem; text-align:center;">
        <h2 style="margin-top:0; color:var(--navy-primary);">Start Case Challenges</h2>
        <p>You will be given a set of cases in random order.  Each case has several questions.</p>
        <button id="case-start-btn" class="neo-btn primary">Begin</button>
      </div>
    `;
    const startBtn = document.getElementById('case-start-btn');
    if (startBtn) {
      startBtn.onclick = () => {
        startQuiz();
      };
    }
  }

  // Start the quiz: initialise state and display the first case
  function startQuiz() {
    state.caseOrder = shuffle(cases.map((_, idx) => idx));
    state.caseIdx = 0;
    state.questionIdx = 0;
    state.correct = 0;
    state.totalQuestions = cases.reduce((sum, c) => sum + c.questions.length, 0);
    renderCase();
  }

  // Render the current case narrative and first question
  function renderCase() {
    const container = document.getElementById('case-quiz-container');
    if (!container) return;
    // If all cases complete, show final results
    if (state.caseIdx >= state.caseOrder.length) {
      renderResults();
      return;
    }
    const caseData = cases[state.caseOrder[state.caseIdx]];
    state.questionIdx = 0;
    container.innerHTML = `
      <div class="neo-card" style="max-width:800px; margin:0 auto; padding:2rem;">
        <h3 style="margin-top:0; color:var(--navy-primary);">${caseData.title}</h3>
        <div>${caseData.narrative}</div>
        <div id="case-question" style="margin-top:1.5rem;"></div>
      </div>
    `;
    renderQuestion();
  }

  // Render the current question for the current case
  function renderQuestion() {
    const caseData = cases[state.caseOrder[state.caseIdx]];
    const q = caseData.questions[state.questionIdx];
    const qContainer = document.getElementById('case-question');
    if (!qContainer || !q) return;
    // Build question HTML
    let html = '';
    html += `<p style="font-weight:500; font-size:1.05rem;">Q${state.questionIdx + 1} of ${caseData.questions.length}: ${q.prompt}</p>`;
    if (q.type === 'mcq') {
      html += `<div id="case-options" style="display:grid; gap:1rem; margin-top:1rem;">`;
      q.options.forEach((opt, idx) => {
        html += `<button class="neo-btn outline" data-index="${idx}" style="text-align:left; padding:0.75rem;">`;
        html += `<span style="font-weight:bold; margin-right:0.5rem;">${String.fromCharCode(65 + idx)}.</span> ${opt}`;
        html += `</button>`;
      });
      html += `</div>`;
    }
    html += `<div id="case-feedback" style="margin-top:1rem;"></div>`;
    qContainer.innerHTML = html;
    // Attach listeners
    if (q.type === 'mcq') {
      Array.from(document.querySelectorAll('#case-options button')).forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          const isCorrect = idx === q.correct;
          handleAnswer(isCorrect, q.explanation);
        };
      });
    }
  }

  // Handle answer selection and proceed to next question or case
  function handleAnswer(isCorrect, explanation) {
    const feedback = document.getElementById('case-feedback');
    if (!feedback) return;
    const color = isCorrect ? 'var(--success-primary)' : 'var(--danger-primary)';
    const prefix = isCorrect ? '<strong>Correct!</strong>' : '<strong>Incorrect.</strong>';
    if (isCorrect) state.correct++;
    feedback.innerHTML = `<p style="color:${color};">${prefix} ${explanation}</p>`;
    // Disable option buttons
    const optionButtons = document.querySelectorAll('#case-options button');
    optionButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.pointerEvents = 'none';
    });
    // Add Next button
    feedback.innerHTML += `<button id="case-next-btn" class="neo-btn primary" style="margin-top:1rem;">Next</button>`;
    document.getElementById('case-next-btn').onclick = () => {
      advance();
    };
  }

  // Advance to next question or case
  function advance() {
    const caseData = cases[state.caseOrder[state.caseIdx]];
    if (state.questionIdx < caseData.questions.length - 1) {
      state.questionIdx++;
      renderQuestion();
    } else {
      // Move to next case
      state.caseIdx++;
      renderCase();
    }
  }

  // Show final results and review summary
  function renderResults() {
    const container = document.getElementById('case-quiz-container');
    if (!container) return;
    const percentage = state.totalQuestions ? Math.round((state.correct / state.totalQuestions) * 100) : 0;
    container.innerHTML = `
      <div class="neo-card" style="max-width:600px; margin:0 auto; padding:2rem; text-align:center;">
        <h2 style="margin-top:0; color:var(--navy-primary);">Case Challenges Complete</h2>
        <p>You answered ${state.correct} out of ${state.totalQuestions} questions correctly (${percentage}%).</p>
        <button id="case-restart-btn" class="neo-btn primary">Restart</button>
      </div>
    `;
    const restartBtn = document.getElementById('case-restart-btn');
    if (restartBtn) {
      restartBtn.onclick = () => {
        renderStart();
      };
    }
  }

  // Observe DOM changes to initialise the case quiz when its container appears
  const observer = new MutationObserver(() => {
    const container = document.getElementById('case-quiz-container');
    if (container && !container.dataset.initialised) {
      container.dataset.initialised = 'true';
      renderStart();
    }
  });
  observer.observe(document.getElementById('content-container'), { childList: true, subtree: true });
})();