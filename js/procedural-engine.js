/**
 * PROCURAL OUTBREAK GENERATOR (Phase 16 - Tier 3)
 * Generates infinite random case studies with solvable logic.
 */

window.OutbreakGenerator = {

    // Database of Pathogens & Characteristics
    agents: [
        { name: "Norovirus", incubation_mean: 24, incubation_range: 12, symptoms: ["Vomiting", "Diarrhea"], source: ["Salad", "Sandwich", "Fruit", "Ice"] },
        { name: "Salmonella", incubation_mean: 18, incubation_range: 12, symptoms: ["Fever", "Diarrhea", "Cramps"], source: ["Chicken", "Eggs", "Beef", "Sprouts"] },
        { name: "Staph aureus", incubation_mean: 3, incubation_range: 2, symptoms: ["Vomiting", "Nausea"], source: ["Potato Salad", "Pastry", "Ham", "Mac & Cheese"] },
        { name: "E. coli O157", incubation_mean: 72, incubation_range: 24, symptoms: ["Bloody Diarrhea", "Cramps"], source: ["Burger", "Lettuce", "Milk", "Water"] }
    ],

    settings: [
        { name: "School Picnic", items: ["Burger", "Potato Salad", "Watermelon", "Cookie"] },
        { name: "Wedding Banquet", items: ["Chicken", "Rice", "Cake", "Salad"] },
        { name: "Office Potluck", items: ["Chili", "Cornbread", "Brownie", "Dip"] }
    ],

    // Generate a single random case
    generate: function () {
        console.log("[GENERATOR] Creating new outbreak...");

        // 1. Pick Scenario
        const agent = this.agents[Math.floor(Math.random() * this.agents.length)];
        const setting = this.settings[Math.floor(Math.random() * this.settings.length)];

        // 2. Pick the "Culprit" Food (Must be in the setting's items)
        // If agent specific source is in setting, prioritize it. Otherwise random.
        let culprit = setting.items[Math.floor(Math.random() * setting.items.length)];
        // Optional: Align culprit with agent preference for realism (e.g. Staph + Potato Salad)
        // For difficulty, sometimes mismatch them? For now, fully random culprit.

        // 3. Generate Population (10-20 people)
        const popSize = 10 + Math.floor(Math.random() * 11); // 10-20
        const lineList = [];

        for (let i = 1; i <= popSize; i++) {
            // Person Attributes
            const person = {
                id: i,
                age: 10 + Math.floor(Math.random() * 50),
                sex: Math.random() > 0.5 ? "M" : "F",
                foods: {},
                ill: "N",
                onset: "N/A"
            };

            // Assign Food Exposures
            // Culprit: High exposure rate (e.g. 50-80% ate it)
            // Others: Random exposure rate
            setting.items.forEach(item => {
                let eatProb = 0.5; // Baseline
                person.foods[item] = Math.random() < eatProb ? "Y" : "N";
            });

            // Determine Illness (Probabilistic)
            // If ate culprit -> High chance of illness (Attack Rate)
            // If didn't eat culprit -> Low chance (Background rate / error)
            const ateCulprit = person.foods[culprit] === "Y";
            let risk = ateCulprit ? 0.85 : 0.05; // 85% vs 5% AR

            if (Math.random() < risk) {
                person.ill = "Y";
                // Generate Onset Time
                // Mean incubation +/- random variance
                const hours = agent.incubation_mean + (Math.random() * agent.incubation_range * 2 - agent.incubation_range); // +/- range
                // Convert to "Day X, HH:MM"
                person.onset = this.formatTime(hours);
                // Assign Symptoms
                const symptoms = [...agent.symptoms]; // Copy
                if (Math.random() > 0.8) symptoms.pop(); // Sometimes missing one
                person.symptoms = symptoms.join(", ");
            } else {
                person.ill = "N";
                person.onset = "N/A";
                person.symptoms = "None";
            }

            lineList.push(person);
        }

        // 4. Calculate Truth (for validation)
        const stats = this.analyze(lineList, setting.items);
        const bestItem = stats.sort((a, b) => b.OR - a.OR)[0]; // Highest OR

        // If the generated case is unsolvable (e.g. random noise made "Water" the culprit instead of "Chicken"), Retry.
        // Or just let it be "Inconclusive"?
        // For a learning tool, we want solvable.
        if (bestItem.item !== culprit || bestItem.OR < 3.0) {
            // console.log("[GENERATOR] Failed validation (Ambiguous). Retrying...");
            return this.generate(); // Recursion retry
        }

        return {
            title: `Outbreak at ${setting.name}`,
            description: `A cluster of illnesses reported after a ${setting.name}. Analyze the data to find the cause.`,
            agent_type: agent.name, // The "Truth"
            culprit: culprit, // The "Truth"
            lineList: lineList,
            items: setting.items, // List of headers
            solution: bestItem
        };
    },

    // Analyze data to calculate OR for each item
    analyze: function (lineList, items) {
        return items.map(item => {
            let a = 0, b = 0, c = 0, d = 0;
            lineList.forEach(p => {
                const ate = p.foods[item] === "Y";
                const ill = p.ill === "Y";
                if (ate && ill) a++;
                if (ate && !ill) b++;
                if (!ate && ill) c++;
                if (!ate && !ill) d++;
            });
            // OR = (a*d)/(b*c)
            const num = a * d;
            const den = b * c;
            let or = (den === 0) ? (num > 0 ? 999 : 1) : (num / den); // 999 = Infinity

            return { item, a, b, c, d, OR: or };
        });
    },

    // Helper: Format hours into relative time string
    formatTime: function (hours) {
        const day = 1 + Math.floor(hours / 24);
        const h = Math.floor(hours % 24);
        const m = Math.floor((hours % 1) * 60);
        return `Day ${day}, ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    },

    // Render Function: Injects the generated case into the DOM container
    renderTo: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const data = this.generate();

        // Build HTML Table
        const headers = ["ID", "Age", "Sex", ...data.items, "Ill?", "Onset"];

        let html = `
            <div class="neo-card">
                <div style="display:flex; justify-content:space-between;">
                    <h2>${data.title}</h2>
                    <button class="neo-btn small outline" onclick="OutbreakGenerator.renderTo('${containerId}')">
                        <i class="ph-bold ph-arrows-clockwise"></i> Generate New
                    </button>
                </div>
                <p>${data.description}</p>
                
                <div style="overflow-x:auto; margin: 1rem 0;">
                    <table class="data-table small-text">
                        <thead>
                            <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${data.lineList.map(p => `
                                <tr class="${p.ill === 'Y' ? 'row-ill' : ''}">
                                    <td>${p.id}</td>
                                    <td>${p.age}</td>
                                    <td>${p.sex}</td>
                                    ${data.items.map(i => `<td>${p.foods[i]}</td>`).join('')}
                                    <td style="font-weight:bold; color:${p.ill === 'Y' ? 'red' : 'green'}">${p.ill}</td>
                                    <td>${p.onset}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- Interactive Analysis -->
                <div class="quiz-box">
                    <h3>Your Analysis</h3>
                    <p>Which item has the strongest association?</p>
                    <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                        ${data.items.map(item => `
                            <button class="neo-btn outline" onclick="OutbreakGenerator.checkAnswer('${item}', '${data.culprit.replace(/'/g, "\\'")}', this.parentElement)">
                                ${item}
                            </button>
                        `).join('')}
                    </div>
                    <div id="gen-feedback" style="margin-top:1rem;"></div>
                </div>

                <details style="margin-top:2rem;">
                    <summary>Show Full Solution</summary>
                    <div style="background:#f0fdf4; padding:1rem; margin-top:0.5rem; border-radius:8px;">
                        <strong>Culprit:</strong> ${data.culprit}<br>
                        <strong>Agent:</strong> ${data.agent_type}<br>
                        <strong>Odds Ratio:</strong> ${data.solution.OR.toFixed(2)} (Highest)<br>
                        <br>
                        <em>Note: In real life, check Incubation Period to confirm Agent.</em>
                    </div>
                </details>
            </div>
        `;

        container.innerHTML = html;
        window.CURRENT_OUTBREAK_SOLUTION = data.culprit;
    },

    checkAnswer: function (selected, correct, btnContainer) {
        const feedback = document.getElementById('gen-feedback');
        if (selected === correct) {
            feedback.innerHTML = `<div class="alert success">✅ Correct! The <strong>${selected}</strong> is the likely source.</div>`;
        } else {
            feedback.innerHTML = `<div class="alert error">❌ Incorrect. The data suggests a stronger association with a different item. Calculate the OR!</div>`;
        }
    }
};
