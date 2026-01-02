const CASE_LIBRARY = [
    // --- FOODBORNE & WATERBORNE ---
    {
        id: "C1", disease: "Norovirus", title: "The School Potluck",
        scenario_text: "30% of school students absent with vomiting/cramps after Sunday potluck.",
        learning_objectives: ["Identify viral gastroenteritis symptoms.", "Calculate attack rates."],
        curve: "Point-Source", incubation: "24-48h", agent: "Norovirus GII", transmission: "Fecal-Oral",
        spot_map: "Clusters in classrooms A and B (who ate first shift).",
        counterfactual: "If hand sanitizer had been replaced with soap/water, transmission would have decreased (sanitizer doesn't kill Noro).",
        controls: ["Bleach disinfection", "Exclude ill staff 48h"],
        questions: [{ q: "Viral vs Bacterial?", a: "Viral (Vomiting dominant, short incubation)." }]
    },
    {
        id: "C2", disease: "Salmonella", title: "Peep Peep Problem",
        scenario_text: "Cluster of children with bloody diarrhea linked to backyard poultry.",
        learning_objectives: ["Zoonotic transmission.", "Propagated outbreaks."],
        curve: "Propagated", incubation: "12-72h", agent: "Salmonella Enteritidis", transmission: "Zoonotic/Fecal-Oral",
        spot_map: "Cases scattered across rural county, all with backyard coops.",
        counterfactual: "If children washed hands after touching chicks, cases would drop 90%.",
        controls: ["Handwashing", "Keep birds outdoors"],
        questions: [{ q: "Why propagated?", a: "Secondary household spread." }]
    },
    {
        id: "C3", disease: "E. coli O157", title: "The Raw Deal",
        scenario_text: "HS students with HUS after eating salad bar.",
        learning_objectives: ["HUS risk.", "Antibiotic contraindication."],
        curve: "Point-Source", incubation: "3-4 days", agent: "STEC O157", transmission: "Foodborne",
        spot_map: "Cases localized to high school cafeteria patrons.",
        counterfactual: "If antibiotics were administered, HUS rate would triple.",
        controls: ["No Antibiotics", "Pull lettuce"],
        questions: [{ q: "Treatment?", a: "Supportive care only." }]
    },
    {
        id: "C4", disease: "Campylobacter", title: "The Raw Milk",
        scenario_text: "Gastroenteritis outbreak after a farm field trip.",
        learning_objectives: ["Raw milk risks.", "Guillain-Barre link."],
        curve: "Point-Source", incubation: "2-5 days", agent: "Campylobacter jejuni", transmission: "Foodborne",
        spot_map: "Cluster of cases who signed the farm waiver.",
        counterfactual: "If milk was pasteurized, outbreak would be 0 cases.",
        controls: ["Pasteurization", "Hygiene"],
        questions: [{ q: "Long term risk?", a: "Guillain-Barre Syndrome." }]
    },
    {
        id: "C5", disease: "Listeria", title: "Deli Danger",
        scenario_text: "Spike in miscarriages and sepsis in elderly. Linked to deli meat.",
        learning_objectives: ["High risk groups.", "Psychrophilic bacteria."],
        curve: "Intermittent", incubation: "1-70 days", agent: "Listeria monocytogenes", transmission: "Foodborne",
        spot_map: "Dispersed cases across 3 states (distribution network).",
        counterfactual: "If meat was heated to steaming, risk is eliminated.",
        controls: ["Recall", "Sanitize slicers"],
        questions: [{ q: "Why hard to track?", a: "Long incubation (up to 70 days)." }]
    },
    {
        id: "C6", disease: "Vibrio parahaemolyticus", title: "The Oyster Bar",
        scenario_text: "Watery diarrhea after eating raw oysters in summer.",
        learning_objectives: ["Halophilic bacteria.", "Warm water risk."],
        curve: "Point-Source", incubation: "24h", agent: "Vibrio parahaemolyticus", transmission: "Foodborne",
        spot_map: "Coastal restaurants serving local catch.",
        counterfactual: "If oysters were harvested in winter, risk would be negligible.",
        controls: ["Cook seafood", "Monitor water temp"],
        questions: [{ q: "Environmental factor?", a: "Warm sea water." }]
    },
    {
        id: "C7", disease: "Shigella", title: "Daycare Disaster",
        scenario_text: "Bloody diarrhea spreading rapidly in a preschool.",
        learning_objectives: ["Low infectious dose.", "Person-to-Person spread."],
        curve: "Propagated", incubation: "1-2 days", agent: "Shigella sonnei", transmission: "Fecal-Oral",
        spot_map: "Clustered in 'Diaper' room.",
        counterfactual: "If soap was used instead of sanitizer, efficacy improves (barely). Handwashing is key.",
        controls: ["Strict hygiene", "Supervised washing"],
        questions: [{ q: "Infectious dose?", a: "Very low (10-100 bacteria)." }]
    },
    {
        id: "C8", disease: "Giardia", title: "The Beaver Fever",
        scenario_text: "Backpackers with foul, greasy diarrhea lasting weeks.",
        learning_objectives: ["Parasitic life cycle.", "Water filtration."],
        curve: "Sporadic", incubation: "1-2 weeks", agent: "Giardia lamblia", transmission: "Waterborne",
        spot_map: "Cases hiking along the same mountain stream.",
        counterfactual: "If iodine/filters were used, cysts would be removed.",
        controls: ["Filter water", "Boil"],
        questions: [{ q: "Symptom hallmark?", a: "Steatorrhea (Greasy stool)." }]
    },
    {
        id: "C9", disease: "Cryptosporidium", title: "Pool Panic",
        scenario_text: "Diarrhea outbreak at community pool. Chlorine is normal.",
        learning_objectives: ["Chlorine resistance.", "Fecal accident."],
        curve: "Continuous", incubation: "7 days", agent: "Cryptosporidium", transmission: "Waterborne",
        spot_map: "Cases all visited the 'Kiddie Pool'.",
        counterfactual: "If UV filters were installed, outbreak stops.",
        controls: ["Hyperchlorination", "UV"],
        questions: [{ q: "Why chlorine failed?", a: "Crypto is resistant." }]
    },
    {
        id: "C10", disease: "Cholera", title: "The Flight Home",
        scenario_text: "Severe 'rice water' stool in travelers returning from Haiti.",
        learning_objectives: ["Rapid dehydration.", "Rehydration therapy."],
        curve: "Point-Source (Flight)", incubation: "2-3 days", agent: "Vibrio cholerae", transmission: "Water/Food",
        spot_map: "Seated in rows 30-40 (served cold seafood salad).",
        counterfactual: "If ORS was given immediately, mortality drops <1%.",
        controls: ["Rehydration (ORS)", "Sanitation"],
        questions: [{ q: "Cause of death?", a: "Hypovolemic shock." }]
    },
    {
        id: "C11", disease: "Typhoid Fever", title: "The Carrier",
        scenario_text: "Unexplained fever cases linked to a single bakery.",
        learning_objectives: ["Chronic carriers.", "Systemic infection."],
        curve: "Intermittent", incubation: "1-3 weeks", agent: "Salmonella Typhi", transmission: "Fecal-Oral",
        spot_map: "All cases bought glazed donuts.",
        counterfactual: "If the baker (carrier) was treated/excluded, outbreak ends.",
        controls: ["Treat carrier", "Hygiene"],
        questions: [{ q: "Famous historical case?", a: "Typhoid Mary." }]
    },
    {
        id: "C12", disease: "Botulism", title: "Canned Death",
        scenario_text: "Descending paralysis after family reunion.",
        learning_objectives: ["Neurotoxin.", "Canning safety."],
        curve: "Point-Source", incubation: "12-36h", agent: "C. botulinum toxin", transmission: "Foodborne",
        spot_map: "Family members who ate the green beans.",
        counterfactual: "If beans were pressure canned, spores would die.",
        controls: ["Antitoxin", "Respiratory support"],
        questions: [{ q: "Mechanism?", a: "Blocks Acetylcholine." }]
    },
    {
        id: "C13", disease: "Staph Aureus", title: "Picnic Panic",
        scenario_text: "Vomiting 3 hours after eating potato salad.",
        learning_objectives: ["Intoxication vs Infection.", "Temp abuse."],
        curve: "Explosive Point-Source", incubation: "2-4h", agent: "Staph Enterotoxin", transmission: "Foodborne",
        spot_map: "Picnic table A.",
        counterfactual: "If salad was chilled, bacteria wouldn't produce toxin.",
        controls: ["Keep cold foods cold", "Hygiene"],
        questions: [{ q: "Why so fast?", a: "Pre-formed toxin." }]
    },
    {
        id: "C14", disease: "Bacillus cereus", title: "Fried Rice Syndrome",
        scenario_text: "Vomiting after eating buffet fried rice.",
        learning_objectives: ["Spore forming.", "Rice safety."],
        curve: "Point-Source", incubation: "1-5h (Emetic)", agent: "B. cereus", transmission: "Foodborne",
        spot_map: "Buffet line patrons.",
        counterfactual: "If rice was kept >60C, spores wouldn't germinate.",
        controls: ["Temp control"],
        questions: [{ q: "Two forms?", a: "Emetic (Vomiting) vs Diarrheal." }]
    },
    {
        id: "C15", disease: "Hepatitis A", title: "The Smoothie King",
        scenario_text: "Jaundice outbreak 1 month after visiting smoothie shop.",
        learning_objectives: ["Long incubation.", "Vaccine prevention."],
        curve: "Point-Source", incubation: "28 days", agent: "Hepatitis A Virus", transmission: "Fecal-Oral",
        spot_map: "Patrons of 'Berry Blast' (imported strawberries).",
        counterfactual: "If staff were vaccinated, transmission blocked.",
        controls: ["Post-exposure prophylaxis", "Vaccine"],
        questions: [{ q: "Symptom triad?", a: "Fever, Jaundice, Clay stool." }]
    },

    // --- VECTOR-BORNE & ZOONOTIC ---
    {
        id: "C16", disease: "Lyme Disease", title: "Bullseye",
        scenario_text: "Hikers with EM rash and arthralgia.",
        learning_objectives: ["Tick vectors.", "Early recognition."],
        curve: "Seasonal", incubation: "3-30 days", agent: "Borrelia burgdorferi", transmission: "Tick Bite",
        spot_map: "Cases map to brushy edge of campsite.",
        counterfactual: "If tick removed <24h, transmission unlikely.",
        controls: ["Permethrin", "Tick checks"],
        questions: [{ q: "Vector?", a: "Ixodes scapularis (Blacklegged tick)." }]
    },
    {
        id: "C17", disease: "RMSF", title: "Spotted Fever",
        scenario_text: "High fever and petechial rash on palms/soles.",
        learning_objectives: ["Rapid progression.", "Doxycycline urgency."],
        curve: "Seasonal", incubation: "2-14 days", agent: "Rickettsia rickettsii", transmission: "Tick Bite",
        spot_map: "Dog owners in rural suburb.",
        counterfactual: "If treated day 1, survival 100%. Day 5, mortality 30%.",
        controls: ["Doxycycline immediately"],
        questions: [{ q: "Rash pattern?", a: "Centripetal (Extremities to trunk)." }]
    },
    {
        id: "C18", disease: "West Nile", title: "Summer Encephalitis",
        scenario_text: "Elderly patients with fever/confusion in August.",
        learning_objectives: ["Mosquito vector.", "Neuroinvasive risk."],
        curve: "Seasonal (Late Summer)", incubation: "2-6 days", agent: "WNV", transmission: "Mosquito (Culex)",
        spot_map: "Clusters near stagnant drainage ponds.",
        counterfactual: "If larvicide applied in May, August cases drop.",
        controls: ["Larvicide", "DEET"],
        questions: [{ q: " Reservoir?", a: "Birds." }]
    },
    {
        id: "C19", disease: "Dengue", title: "Breakbone Fever",
        scenario_text: "Travelers to Puerto Rico return with severe bone pain.",
        learning_objectives: ["Aedes vector.", "Hemorrhagic risk."],
        curve: "Imported", incubation: "4-10 days", agent: "Dengue Virus", transmission: "Mosquito (Aedes)",
        spot_map: "Travelers staying in open-window hostels.",
        counterfactual: "If previously infected, second infection is worse (ADE).",
        controls: ["Screens", "Vector control"],
        questions: [{ q: "Vector habit?", a: "Day-biting." }]
    },
    {
        id: "C20", disease: "Malaria", title: "The Shakes",
        scenario_text: "Cyclical fever in missionary returning from Nigeria.",
        learning_objectives: ["Anopheles vector.", "Chemoprophylaxis."],
        curve: "Imported", incubation: "7-30 days", agent: "Plasmodium falciparum", transmission: "Mosquito",
        spot_map: "N/A (Travel)",
        counterfactual: "If taking prophylaxis, illness prevented.",
        controls: ["Bed nets", "Artemisinin"],
        questions: [{ q: "Deadliest species?", a: "Falciparum." }]
    },
    {
        id: "C21", disease: "Plague", title: "Prairie Dog Town",
        scenario_text: "Camper with painful swollen lymph node (bubo).",
        learning_objectives: ["Flea vector.", "Reservoir hosts."],
        curve: "Sporadic", incubation: "2-6 days", agent: "Yersinia pestis", transmission: "Flea bite",
        spot_map: "Close proximity to rodent die-off.",
        counterfactual: "If treated with Streptomycin early, curative.",
        controls: ["Flea control", "Avoid rodents"],
        questions: [{ q: "Bacteria shape?", a: "Safety-pin (Bipolar staining)." }]
    },
    {
        id: "C22", disease: "Tularemia", title: "Rabbit Fever",
        scenario_text: "Landscaper with ulcer detected after mowing over rabbit nest.",
        learning_objectives: ["Aerosol vs Contact.", "Low infectious dose."],
        curve: "Sporadic", incubation: "3-5 days", agent: "Francisella tularensis", transmission: "Contact/Aerosol",
        spot_map: "Map of lawn mowing path.",
        counterfactual: "If wearing mask, aerosol prevention.",
        controls: ["Antibiotics"],
        questions: [{ q: "AKA?", a: "Rabbit Fever." }]
    },
    {
        id: "C23", disease: "Rabies", title: "The Bat",
        scenario_text: "Child wakes up with bat in room. Small scratch.",
        learning_objectives: ["100% Fatality.", "PEP urgency."],
        curve: "Single Case", incubation: "Weeks to Months", agent: "Rabies Virus", transmission: "Bite/Scratch",
        spot_map: "Sleeping quarters.",
        counterfactual: "If PEP given immediately, survival 100%. If symptoms start, 0%.",
        controls: ["PEP (IG + Vaccine)"],
        questions: [{ q: "Survivable?", a: "No, once symptomatic." }]
    },
    {
        id: "C24", disease: "Hantavirus", title: "Dusty Shed",
        scenario_text: "Respiratory failure after sweeping cabin.",
        learning_objectives: ["Rodent excreta.", "No cure."],
        curve: "Sporadic", incubation: "1-5 weeks", agent: "Sin Nombre Virus", transmission: "Aerosolized urine",
        spot_map: "Old cabin location.",
        counterfactual: "If wet mopped, no aerosol.",
        controls: ["Wet cleaning", "N95"],
        questions: [{ q: "Region?", a: "Southwest USA (Four Corners)." }]
    },
    {
        id: "C25", disease: "Anthrax", title: "Wool Sorter",
        scenario_text: "Hide processor with black eschar ulcer.",
        learning_objectives: ["Cutaneous vs Inhalation.", "Spores."],
        curve: "Sporadic", incubation: "1-7 days", agent: "Bacillus anthracis", transmission: "Spore contact",
        spot_map: "Tannery workstation.",
        counterfactual: "If inhaled, mortality is typically high (Woolsorters disease).",
        controls: ["Cipro", "Vaccine (Occupational)"],
        questions: [{ q: "Painless?", a: "Yes, the ulcer is painless." }]
    },

    // --- RESPIRATORY & VACCINE PREVENTABLE ---
    {
        id: "C26", disease: "Measles", title: "Waiting Room",
        scenario_text: "Unvax child infects waiting room. Airborne.",
        learning_objectives: ["R0", "Airborne duration."],
        curve: "Propagated", incubation: "10-12 days", agent: "Measles Virus", transmission: "Airborne",
        spot_map: "Waiting room seating (infects everyone).",
        counterfactual: "If vaccinated (MMR), herd immunity protects.",
        controls: ["Isolation", "Vaccination"],
        questions: [{ q: "Koplik spots?", a: "Pathognomonic sign in mouth." }]
    },
    {
        id: "C27", disease: "Pertussis", title: "100 Day Cough",
        scenario_text: "Infant with apnea and severe cough. Unvax family.",
        learning_objectives: ["Waning immunity.", "Cocooning."],
        curve: "Propagated", incubation: "7-10 days", agent: "Bordetella pertussis", transmission: "Droplet",
        spot_map: "Daycare center.",
        counterfactual: "If mother vaxed during pregnancy (Tdap), antibodies protect infant.",
        controls: ["Antibiotics (Macrolides)", "Vaccinate"],
        questions: [{ q: "Sound?", a: "Whoop (Inspiratory stridor)." }]
    },
    {
        id: "C28", disease: "Mumps", title: "College Swell",
        scenario_text: "Outbreak of parotitis (swollen jaw) in dorms.",
        learning_objectives: ["Close contact.", "Complications (Orchitis)."],
        curve: "Propagated", incubation: "16-18 days", agent: "Mumps Virus", transmission: "Droplet",
        spot_map: "Dormitory cluster.",
        counterfactual: "If 3rd MMR dose given, outbreak control improves.",
        controls: ["Isolation", "Booster"],
        questions: [{ q: "Male complication?", a: "Orchitis (Testicular swelling)." }]
    },
    {
        id: "C29", disease: "Legionella", title: "The Cooling Tower",
        scenario_text: "Pneumonia cluster in hotel guests. No person-to-person.",
        learning_objectives: ["Environmental source.", "Urinary antigen."],
        curve: "Continuous Common Source", incubation: "2-10 days", agent: "L. pneumophila", transmission: "Aerosol Water",
        spot_map: "Rooms facing the cooling tower exhaust.",
        counterfactual: "If tower disinfected, outbreak stops immediately.",
        controls: ["Hyperchlorination"],
        questions: [{ q: "Transmission?", a: "Inhalation only, not P2P." }]
    },
    {
        id: "C30", disease: "Tuberculosis", title: "The Night Sweats",
        scenario_text: "Homeless shelter resident with chronic cough/hemoptysis.",
        learning_objectives: ["Latent vs Active.", "Long treatment."],
        curve: "Prolonged Propagated", incubation: "Weeks to Years", agent: "Mycobacterium tuberculosis", transmission: "Airborne",
        spot_map: "Bunks near airflow vent.",
        counterfactual: "If latent TB treated, active disease prevented.",
        controls: ["DOTS therapy", "Negative pressure isolation"],
        questions: [{ q: "Stain?", a: "Acid-Fast Bacilli (AFB)." }]
    },
    {
        id: "C31", disease: "Influenza", title: "Nursing Home Drift",
        scenario_text: "Rapid onset fever/cough in 50% of residents.",
        learning_objectives: ["Drift vs Shift.", "Prophylaxis."],
        curve: "Explosive Propagated", incubation: "1-4 days", agent: "Influenza A", transmission: "Droplet/Airborne",
        spot_map: "Dining hall seating.",
        counterfactual: "If Tamiflu prophylaxis given, attack rate halves.",
        controls: ["Antivirals", "Vaccine matching"],
        questions: [{ q: "Shift?", a: "Pandemic potential (Reassortment)." }]
    },
    {
        id: "C32", disease: "Meningitis", title: "Dorm Emergency",
        scenario_text: "Student found unconscious with stiff neck and purpura.",
        learning_objectives: ["Medical emergency.", "Chemoprophylaxis contacts."],
        curve: "Sporadic Cluster", incubation: "3-4 days", agent: "Neisseria meningitidis", transmission: "Droplet",
        spot_map: "Roommates.",
        counterfactual: "If contacts given Rifampin, secondary cases prevented.",
        controls: ["Vaccine (MenACWY/B)", "Antibiotics"],
        questions: [{ q: "Glass test?", a: "Rash doesn't fade under pressure." }]
    },

    // --- OTHER & SPECIAL ---
    {
        id: "C33", disease: "Lead Poisoning", title: "Sweet Paint",
        scenario_text: "Children in old housing with developmental regression.",
        learning_objectives: ["Environmental toxin.", "Chronic exposure."],
        curve: "N/A", incubation: "Chronic", agent: "Lead", transmission: "Ingestion",
        spot_map: "Map of houses built pre-1978.",
        counterfactual: "If abatement performed, levels drop.",
        controls: ["Chelation", "Abatement"],
        questions: [{ q: "Source?", a: "Peeling paint, dust." }]
    },
    {
        id: "C34", disease: "CO Poisoning", title: "Silent Killer",
        scenario_text: "Family found unconscious after winter storm. Generator inside.",
        learning_objectives: ["Cherry red skin.", "O2 displacement."],
        curve: "Point Source (Event)", incubation: "Hours", agent: "Carbon Monoxide", transmission: "Inhalation",
        spot_map: "Garage proximity.",
        counterfactual: "If detector installed, alarm would have saved them.",
        controls: ["Oxygen", "Ventilation"],
        questions: [{ q: "Hemoglobin?", a: "Carboxyhemoglobin affinity 200x O2." }]
    },
    {
        id: "C35", disease: "Tetanus", title: "Rusty Nail",
        scenario_text: "Gardener with lockjaw and muscle spasms.",
        learning_objectives: ["Anaerobic spores.", "Toxin mediated."],
        curve: "Single Case", incubation: "3-21 days", agent: "Clostridium tetani", transmission: "Puncture",
        spot_map: "Garden.",
        counterfactual: "If Td booster up to date, immune.",
        controls: ["IG", "Ventilator"],
        questions: [{ q: "Smile?", a: "Risus sardonicus." }]
    },
    {
        id: "C36", disease: "Ebola", title: "Viral Hemorrhagic",
        scenario_text: "Healthcare worker returning from West Africa with fever/bleeding.",
        learning_objectives: ["Direct contact fluids.", "High PPE."],
        curve: "Propagated", incubation: "2-21 days", agent: "Ebolavirus", transmission: "Fluids",
        spot_map: "Isolation unit.",
        counterfactual: "If PPE breach avoided, no infection.",
        controls: ["Strict Isolation", "Contact Tracing"],
        questions: [{ q: "Survivors?", a: "Virus persists in eyes/semen." }]
    },
    {
        id: "C37", disease: "Smallpox", title: "The Variola",
        scenario_text: "Bioterror simulation. Sync rash on face/extremities.",
        learning_objectives: ["Distinguish from Chickenpox.", "Eradicated."],
        curve: "Propagated", incubation: "7-17 days", agent: "Variola Major", transmission: "Airborne",
        spot_map: "Global.",
        counterfactual: "If Ring Vaccination used, verified containment.",
        controls: ["Vaccine (up to 4 days post exp)"],
        questions: [{ q: "Chickenpox diff?", a: "Smallpox: same stage lesions, distal. Chickenpox: crop stages, central." }]
    },
    {
        id: "C38", disease: "Rubella", title: "German Measles",
        scenario_text: "Mild rash in adult, but pregnant wife exposed.",
        learning_objectives: ["Congenital Rubella Syndrome.", "Mild in adults."],
        curve: "Propagated", incubation: "14 days", agent: "Rubella Virus", transmission: "Droplet",
        spot_map: "Household.",
        counterfactual: "If wife immune, fetus protected.",
        controls: ["MMR Vaccine"],
        questions: [{ q: "Fetus risk?", a: "Deafness, Cataracts, Heart defects." }]
    },
    {
        id: "C39", disease: "Candida auris", title: "Superbug",
        scenario_text: "ICU outbreak of drug-resistant fungal infection.",
        learning_objectives: ["Antifungal resistance.", "Surface persistence."],
        curve: "Propagated", incubation: "Unknown", agent: "C. auris", transmission: "Contact/Surface",
        spot_map: "ICU Beds.",
        counterfactual: "If special disinfectant (sporicidal) used, transmission stops.",
        controls: ["Screening", "Isolation"],
        questions: [{ q: "Resistance?", a: "Often multidrug resistant." }]
    },
    {
        id: "C40", disease: "Confounding", title: "The Coffee Paradox",
        scenario_text: "Coffee linked to cancer. Smoking is the confounder.",
        learning_objectives: ["Stratification.", "Simpsons Paradox."],
        curve: "N/A", incubation: "N/A", agent: "Stats", transmission: "Math",
        spot_map: "Venn Diagram.",
        counterfactual: "If stratified by smoking, association disappears.",
        controls: ["Analysis"],
        questions: [{ q: "Solution?", a: "Stratified Analysis." }]
    },
    {
        id: "C41", disease: "Histoplasmosis", title: "The Spelunker",
        scenario_text: "Group of explorers developing cough and fever after visiting a bat cave.",
        learning_objectives: ["Fungal spore inhalation.", "Bat/Bird guano association."],
        curve: "Point-Source", incubation: "3-17 days", agent: "Histoplasma capsulatum", transmission: "Inhalation",
        spot_map: "Cluster of cave visitors.",
        counterfactual: "If respirators were used or cave avoided, illness prevented.",
        controls: ["Dust suppression", "PPE (Respirators)"],
        questions: [{ q: "Geography?", a: "Ohio/Mississippi River Valleys." }]
    },
    {
        id: "C42", disease: "Leptospirosis", title: "The Mud Run",
        scenario_text: "Triathletes with fever, headache, and kidney failure after swimming in floodwater.",
        learning_objectives: ["Animal urine contamination.", "Mucous membrane entry."],
        curve: "Point-Source", incubation: "2-30 days", agent: "Leptospira spp.", transmission: "Contact (Water/Soil)",
        spot_map: "Participants who swallowed water.",
        counterfactual: "If race was cancelled due to flooding/rat infestation, no cases.",
        controls: ["Avoid contaminated water", "Rodent control"],
        questions: [{ q: "Severe form?", a: "Weil's Disease (Jaundice/Renal Failure)." }]
    },
    {
        id: "C43", disease: "Psittacosis", title: "Parrot Fever",
        scenario_text: "Pet shop employees with pneumonia-like symptoms.",
        learning_objectives: ["Avian zoonosis.", "Dry droppings aerosol."],
        curve: "Propagated (among birds) / Point (humans)", incubation: "5-14 days", agent: "Chlamydia psittaci", transmission: "Inhalation",
        spot_map: "Employees handling the new parrot shipment.",
        counterfactual: "If quarantine for new birds was strictly enforced, no human cases.",
        controls: ["Quarantine birds", "Wet cleaning"],
        questions: [{ q: "Reservoir?", a: "Birds (Parrots, pigeons, poultry)." }]
    },
    {
        id: "C44", disease: "Brucellosis", title: "Mediterranean Fever",
        scenario_text: "Family with undulating fevers after eating 'homemade' cheese from abroad.",
        learning_objectives: ["Unpasteurized dairy.", "Cyclical fever."],
        curve: "Household Cluster", incubation: "5-60 days", agent: "Brucella spp.", transmission: "Foodborne",
        spot_map: "Family dining table.",
        counterfactual: "If milk was pasteurized, bacteria killed.",
        controls: ["Pasteurization", "Animal vaccination"],
        questions: [{ q: "Symptom pattern?", a: "Undulating (rising and falling) fever." }]
    },
    {
        id: "C45", disease: "Q Fever", title: "Windy Discharge",
        scenario_text: "Neighbors of a goat farm developing flu-like illness during birthing season.",
        learning_objectives: ["Windborne spread.", "Placental fluids concentrate bacteria."],
        curve: "Continuous", incubation: "2-3 weeks", agent: "Coxiella burnetii", transmission: "Inhalation (Dust)",
        spot_map: "Downwind of the goat farm.",
        counterfactual: "If birth products were disposed of immediately and dust controlled, risk reduced.",
        controls: ["Dust control", "Animal vaccine"],
        questions: [{ q: "Resilience?", a: "Spore-like resistance in environment." }]
    },
    {
        id: "C46", disease: "Coccidioidomycosis", title: "Valley Fever",
        scenario_text: "Construction workers in Arizona with respiratory illness after digging.",
        learning_objectives: ["Soil disturbance.", "Fungal endemicity."],
        curve: "Point-Source (Event)", incubation: "1-3 weeks", agent: "Coccidioides", transmission: "Inhalation (Dust)",
        spot_map: "Excavation site.",
        counterfactual: "If soil was vetted down before digging, spores stay grounded.",
        controls: ["Dust suppression", "Masks"],
        questions: [{ q: "Ethnicity risk?", a: "Higher dissemination risk in Filipino/African ancestry." }]
    },
    {
        id: "C47", disease: "Scombroid", title: "Peppery Fish",
        scenario_text: "Diners at a seafood grill flushing and feeling dizzy minutes after eating Tuna.",
        learning_objectives: ["Histamine intoxication.", "Not an allergy."],
        curve: "Explosive Point-Source", incubation: "10-60 mins", agent: "Histamine", transmission: "Foodborne",
        spot_map: "Ate the Tuna Special.",
        counterfactual: "If fish was kept cold immediately, bacteria wouldn't convert histidine to histamine.",
        controls: ["Cold chain maintenance"],
        questions: [{ q: "Taste?", a: "Peppery or metallic taste." }]
    },
    {
        id: "C48", disease: "Ciguatera", title: "Hot Cold Reversal",
        scenario_text: "Tourists eating Grouper suffer nausea and strange temperature sensation.",
        learning_objectives: ["Bioaccumulation.", "Neurotoxin."],
        curve: "Point-Source", incubation: "3-6 hours", agent: "Ciguatoxin", transmission: "Foodborne (Reef Fish)",
        spot_map: "Dining party.",
        counterfactual: "Cooking does NOT kill the toxin. Avoid large reef fish.",
        controls: ["Avoid eating large predatory reef fish"],
        questions: [{ q: "Hallmark symptom?", a: "Hot feels cold, cold feels hot." }]
    },
    {
        id: "C49", disease: "Naegleria fowleri", title: "The Brain Eater",
        scenario_text: "Boy dies of meningoencephalitis after swimming in a warm lake.",
        learning_objectives: ["Nasal entry.", "Thermal pollution."],
        curve: "Single Case", incubation: "1-9 days", agent: "Naegleria fowleri", transmission: "Water to Nose",
        spot_map: "Lake swimming area.",
        counterfactual: "If nose clip used or head kept above water, amoeba can't enter.",
        controls: ["Nose clips", "Avoid sediment disturbance"],
        questions: [{ q: "Prognosis?", a: ">97% Fatality Rate." }]
    },
    {
        id: "C50", disease: "Zika Virus", title: "Microcephaly",
        scenario_text: "Increase in infants born with small heads in tropical region.",
        learning_objectives: ["Vertical transmission.", "Mosquito vector."],
        curve: "Propagated/Vector", incubation: "3-14 days", agent: "Zika Virus", transmission: "Mosquito/Sexual",
        spot_map: "Region-wide.",
        counterfactual: "If mosquito control was effective, cases drop.",
        controls: ["Mosquito control", "Safe sex"],
        questions: [{ q: "Major concern?", a: "Congenital defects (Microcephaly)." }]
    }
];

if (typeof module !== 'undefined') module.exports = CASE_LIBRARY;
else window.CASE_LIBRARY = CASE_LIBRARY;
