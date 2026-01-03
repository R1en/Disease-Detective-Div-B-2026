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

    /**
     * Generates a completely new random outbreak scenario.
     * Selects a pathogen, setting, and culprit food, then simulates patient data
     * including exposure status and illness onset times based on risk probabilities.
     * Retries automatically if the generated data is statistically ambiguous.
     * 
     * @returns {Object} The scenario object containing title, line list, and solution.
     */
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

    /**
     * Calculates the Odds Ratio (OR) for each food item in the line list.
     * Used to validate the solvability of the generated outbreak.
     * 
     * @param {Array} lineList - Array of patient objects.
     * @param {Array} items - Array of food item names.
     * @returns {Array} List of analysis results per item {item, a, b, c, d, OR}.
     */
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

    /**
     * Renders a new Infinite Outbreak case into the specified DOM container.
     * Creates the line list table and interactive analysis controls.
     * 
     * @param {string} containerId - The ID of the HTML element to render into.
     */
    renderTo: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const data = this.generate();

        // Build HTML Table
        const headers = ["ID", "Age", "Sex", ...data.items, "Ill?", "Onset"];

        const html = `
            <div class="neo-card">
                <div style="display:flex; justify-content:space-between; align-items: center; margin-bottom: 1rem;">
                    <h2 style="margin:0;">${data.title}</h2>
                    <button class="neo-btn small outline" onclick="OutbreakGenerator.renderTo('${containerId}')">
                        <i class="ph-bold ph-arrows-clockwise"></i> Generate New Outbreak
                    </button>
                </div>
                
                <div style="background: #f0f9ff; border: 1px solid #bae6fd; padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
                    <p style="margin:0; font-size: 0.95rem;"><strong>🕵️ Mission:</strong> A cluster of illnesses has been reported. Review the <strong>Line List</strong> below to identify the culprit food item.</p>
                </div>

                <div style="margin-bottom: 0.5rem; font-size: 0.85rem; color: #666; font-style: italic;">
                    <i class="ph-bold ph-table"></i> Line List Data:
                </div>
                
                <div style="overflow-x:auto; margin-bottom: 1.5rem; border: 1px solid #e2e8f0; border-radius: 6px;">
                    <table class="data-table small-text" style="margin:0;">
                        <thead style="background: #f8fafc;">
                            <tr>${headers.map(h => `<th style="padding: 0.5rem;">${h}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${data.lineList.map(p => `
                                <tr class="${p.ill === 'Y' ? 'row-ill' : ''}" style="${p.ill === 'Y' ? 'background: #fff1f2;' : ''}">
                                    <td style="padding: 0.5rem;">${p.id}</td>
                                    <td style="padding: 0.5rem;">${p.age}</td>
                                    <td style="padding: 0.5rem;">${p.sex}</td>
                                    ${data.items.map(i => `<td style="padding: 0.5rem; text-align: center;">${p.foods[i]}</td>`).join('')}
                                    <td style="padding: 0.5rem; font-weight:bold; color:${p.ill === 'Y' ? '#dc2626' : '#166534'}">${p.ill}</td>
                                    <td style="padding: 0.5rem;">${p.onset}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- Interactive Analysis -->
                <div class="quiz-box" style="background: #fafafa; border: 2px solid #e5e5e5; padding: 1.5rem; border-radius: 8px;">
                    <h3 style="margin-top:0;">🔎 Your Analysis</h3>
                    <p>Which food item is the most likely cause?</p>
                    
                    <div style="margin-bottom: 1rem;">
                        <span style="font-size: 0.85rem; background: #fffbeb; padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid #fcd34d;">
                            Tip: Compare the <strong>Attack Rate</strong> (Ill / Total) for those who ate vs. didn't eat each item.
                        </span>
                    </div>

                    <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                        ${data.items.map(item => `
                            <button class="neo-btn outline" onclick="OutbreakGenerator.checkAnswer('${item}', '${data.culprit.replace(/'/g, "\\'")}', this.parentElement)">
                                ${item}
                            </button>
                        `).join('')}
                    </div>
                    <div id="gen-feedback" style="margin-top:1rem;"></div>
                </div>

                <details style="margin-top:2rem; border-top: 1px solid #eee; padding-top: 1rem;">
                    <summary style="cursor: pointer; color: #666;">Show Solution & Statistics</summary>
                    <div style="background:#f0fdf4; padding:1rem; margin-top:0.5rem; border-radius:8px; border: 1px solid #bbf7d0;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <strong>Culprit:</strong> <span style="color: #166534;">${data.culprit}</span><br>
                                <strong>Agent:</strong> ${data.agent_type}
                            </div>
                            <div>
                                <strong>Odds Ratio (OR):</strong> ${data.solution.OR.toFixed(2)}<br>
                                <span style="font-size: 0.8rem; color: #666;">(Highest association)</span>
                            </div>
                        </div>
                        <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem;"><em>Note: In a defined cohort like this, you could also calculate Attack Rates. The generated solution uses OR as a general measure of association.</em></p>
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
