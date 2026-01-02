const PREVENTION_DATA = [
    {
        "q": "Preventing exposure to hazards that cause disease or injury such as seat belts, safety helmets",
        "answer": 1,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Primary Prevention: Preventing exposure to hazards."
    },
    {
        "q": "Vocational rehabilitation programs to retrain workers for new jobs after recovery",
        "answer": 3,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Tertiary Prevention: Rehabilitation and return to work."
    },
    {
        "q": "Changing childhood life style to prevent adult health problems as obesity and hypertension",
        "answer": 0,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Primordial Prevention: Targeting underlying conditions/lifestyles early."
    },
    {
        "q": "Detecting and treating disease or injury that has already occurred through regular exams & screening",
        "answer": 2,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Secondary Prevention: Early detection and treatment."
    },
    {
        "q": "Handwashing and regular dental cleaning & care",
        "answer": 1,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Primary Prevention: Personal hygiene to prevent disease."
    },
    {
        "q": "A healthy lifestyle, including diet and exercise (as per source text)",
        "answer": 4,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Quaternary Prevention: (Note: Source text classifies this as Quaternary, though often considered Primary)."
    },
    {
        "q": "Changing the socio-economic status of society and public attitudes to improve life style patterns",
        "answer": 0,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Primordial Prevention: Broad societal changes."
    },
    {
        "q": "Immunization against infectious diseases",
        "answer": 1,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Primary Prevention: Vaccination."
    },
    {
        "q": "Support groups that allow members to share strategies for living with limitations",
        "answer": 3,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Tertiary Prevention: Managing long-term conditions."
    },
    {
        "q": "Suitable modified work so injured or ill workers can return safely to their jobs",
        "answer": 2,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Secondary Prevention: (Source text classifies as Secondary, likely due to early intervention/return to work)."
    },
    {
        "q": "Cardiac or stroke rehabilitation programs, chronic disease management programs",
        "answer": 3,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Tertiary Prevention: Rehabilitation."
    },
    {
        "q": "Individual programs to change individual life style to promote health and safety",
        "answer": 1,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Primary Prevention: Individual lifestyle changes."
    },
    {
        "q": "Daily, low-dose aspirins and/or diet & exercise to prevent further heart attacks or stroke",
        "answer": 2,
        "type": "mc",
        "topic": "Prevention",
        "options": ["Primordial", "Primary", "Secondary", "Tertiary", "Quaternary"],
        "explain": "Secondary Prevention: Preventing recurrence (Secondary prevention)."
    }
];

if (typeof QUIZ_BANKS !== 'undefined') {
    if (!QUIZ_BANKS["practice_exam"]) QUIZ_BANKS["practice_exam"] = {};
    QUIZ_BANKS["practice_exam"]["prevention"] = PREVENTION_DATA;
    // console.log("Prevention Data loaded into QUIZ_BANKS");
}
