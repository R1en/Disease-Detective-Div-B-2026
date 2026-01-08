class _EpiCurve {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.cases = [];
        this.mode = 'plotter'; // 'plotter' or 'visualizer'
        this.visualizerType = 'point'; // 'point', 'continuous', 'propagated'
        this.render();
    }

    addCase(dateStr) {
        if (!dateStr) return;
        this.cases.push(dateStr);
        this.cases.sort();
        this.render();
    }

    // Cleaned up duplicate render and input methods


    removeCase(index) {
        this.cases.splice(index, 1);
        this.render();
    }

    clear() {
        if (typeof window.UI !== 'undefined') {
            window.UI.modal('Clear Data', 'Are you sure you want to clear all data?', () => {
                this.cases = [];
                this.render();
                window.UI.toast('Data cleared.', 'info');
            });
        } else if (confirm('Are you sure you want to clear all data?')) {
            this.cases = [];
            this.render();
        }
    }

    loadExample() {
        this.loadPointSource();
    }

    loadPointSource() {
        const baseDate = new Date().toISOString().split('T')[0];
        const pattern = [1, 2, 4, 7, 5, 3, 2, 1];
        this.populateData(baseDate, pattern);
        this.renderSummaryTable(this.summarizeByDate(this.cases));
        this.renderExplanation({
            title: "Point Source Outbreak",
            text: "Rapid rise to a peak, then gradual decline. Suggests a single, sharp exposure (e.g., contaminated potato salad at a picnic)."
        });
    }

    loadIntermittent() {
        const baseDate = new Date().toISOString().split('T')[0];
        // Intermittent: Peaks separated by non-incubation periods
        const pattern = [2, 3, 0, 0, 4, 5, 0, 0, 0, 3, 2];
        this.populateData(baseDate, pattern);
        this.renderSummaryTable(this.summarizeByDate(this.cases));
        this.renderExplanation({
            title: "Intermittent Common Source",
            text: "Irregular peaks reflecting the timing and extent of exposure. Suggests a source that is not constant (e.g., specific batches of contaminated product)."
        });
    }

    loadPropagated() {
        const baseDate = new Date().toISOString().split('T')[0];
        // Propagated: Successively larger peaks, spaced by incubation period
        // Approx incubation of 3 days for this fake data
        const pattern = [1, 0, 0, 2, 3, 0, 0, 5, 8, 4, 0, 0, 2];
        this.populateData(baseDate, pattern);
        this.renderSummaryTable(this.summarizeByDate(this.cases));
        this.renderExplanation({
            title: "Propagated (Person-to-Person)",
            text: "Successively taller peaks, separated by one incubation period. Suggests the disease is spreading from person to person (e.g., Measles)."
        });
    }

    populateData(baseDate, pattern) {
        this.cases = [];
        pattern.forEach((count, offset) => {
            for (let i = 0; i < count; i++) {
                this.cases.push(this.addDays(baseDate, offset));
            }
        });
        this.cases.sort();
        this.render();
    }

    renderExplanation(info) {
        const container = document.getElementById('epi-curve-explanation');
        if (!container) return;
        container.innerHTML = `
            <div class="neo-card small" style="border-left: 4px solid var(--accent-orange); margin-top: 1rem;">
                <h4>${info.title}</h4>
                <p>${info.text}</p>
            </div>
        `;
    }

    /**
     * Summarise an array of case dates into an array of objects with date and count.
     * @param {string[]} cases
     * @returns {{date: string, count: number}[]}
     */
    summarizeByDate(cases) {
        const counts = {};
        cases.forEach(d => {
            counts[d] = (counts[d] || 0) + 1;
        });
        return Object.keys(counts)
            .sort()
            .map(date => ({ date, count: counts[date] }));
    }

    /**
     * Render the summary data table into the dedicated container on the page.
     * @param {Array} summary
     */
    renderSummaryTable(summary) {
        const container = document.getElementById('epi-curve-table-container');
        if (!container) return;
        if (!summary || summary.length === 0) {
            container.innerHTML = '';
            return;
        }
        const rows = summary.map(row => {
            return `<tr><td>${row.date}</td><td style="text-align:left;">${row.count}</td></tr>`;
        }).join('');
        container.innerHTML = `
            <table class="table" style="width: auto; min-width: 300px; border-collapse: collapse;">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr><th style="padding: 0.5rem; text-align:left;">Date (onset)</th><th style="padding: 0.5rem; text-align:left;">Number of cases</th></tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }



    addDays(dateStr, days) {
        const date = new Date(dateStr);
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    }

    getHistogramData() {
        if (this.cases.length === 0) return { labels: [], data: [], max: 0 };

        const counts = {};
        const minDate = new Date(this.cases[0]);
        const maxDate = new Date(this.cases[this.cases.length - 1]);

        // Fill in gaps
        for (let d = new Date(minDate); d <= maxDate; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            counts[dateStr] = 0;
        }

        this.cases.forEach(date => {
            if (counts[date] !== undefined) counts[date]++;
        });

        const labels = Object.keys(counts).sort();
        const data = labels.map(date => counts[date]);
        const max = Math.max(...data, 1); // Ensure at least 1 for scale

        return { labels, data, max };
    }

    // --- Visualizer Methods ---

    setMode(mode) {
        this.mode = mode;
        this.render();
        if (mode === 'visualizer') {
            this.drawVisualizer();
        }
    }

    setVisualizerType(type) {
        this.visualizerType = type;
        this.drawVisualizer();
        this.updateVisualizerDescription();
    }

    drawVisualizer() {
        const canvas = document.getElementById('epiCanvas');
        if (!canvas) return;

        // Auto-Resize
        const container = canvas.parentElement;
        if (container) {
            canvas.width = container.clientWidth;
            // canvas.height remains fixed or could be ratio based
        }

        const ctx = canvas.getContext('2d');
        const type = this.visualizerType;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set dimensions
        const padding = 40;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Draw axes
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text') || '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();

        // Labels
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text') || '#000';
        ctx.font = '14px sans-serif';
        ctx.fillText('Cases', 10, 30);
        ctx.fillText('Time', canvas.width / 2 - 20, canvas.height - 10);

        // Generate data based on type
        const data = [];
        const maxCases = 50;

        if (type === 'point') {
            // Point source - bell curve
            for (let i = 0; i < 20; i++) {
                const x = i - 10;
                const y = maxCases * Math.exp(-x * x / 20);
                data.push(y);
            }
        } else if (type === 'continuous') {
            // Continuous - plateau
            for (let i = 0; i < 20; i++) {
                if (i < 3) data.push(maxCases * 0.1 * i);
                else if (i < 15) data.push(maxCases * 0.8 + Math.random() * maxCases * 0.2);
                else data.push(maxCases * 0.8 * (20 - i) / 5);
            }
        } else if (type === 'intermittent') {
            // Intermittent - Irregular peaks
            for (let i = 0; i < 25; i++) {
                let val = 0;
                // Peak 1
                if (Math.abs(i - 4) <= 2) val = maxCases * 0.6;
                // Peak 2
                if (Math.abs(i - 12) <= 1) val = maxCases * 0.8;
                // Peak 3
                if (Math.abs(i - 20) <= 2) val = maxCases * 0.5;

                // Add randomization
                if (val > 0) val += (Math.random() - 0.5) * (maxCases * 0.2);

                data.push(Math.max(0, val));
            }
        } else {
            // Propagated - multiple peaks
            for (let i = 0; i < 25; i++) {
                const peak1 = maxCases * 0.4 * Math.exp(-Math.pow(i - 5, 2) / 8);
                const peak2 = maxCases * 0.7 * Math.exp(-Math.pow(i - 12, 2) / 10);
                const peak3 = maxCases * 1.0 * Math.exp(-Math.pow(i - 20, 2) / 12);
                data.push(peak1 + peak2 + peak3);
            }
        }

        // Draw bars
        const barWidth = chartWidth / data.length;
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--navy-primary') || '#003d6b';

        data.forEach((value, index) => {
            const barHeight = (value / maxCases) * chartHeight;
            const x = padding + index * barWidth;
            const y = canvas.height - padding - barHeight;
            ctx.fillRect(x, y, barWidth * 0.8, barHeight);
        });
    }

    updateVisualizerDescription() {
        const descriptions = {
            point: `<h4 style="color: var(--color-primary);">Point Source Outbreak</h4>
                    <p><strong>Pattern:</strong> Single sharp peak with rapid rise and gradual decline (bell curve)</p>
                    <p><strong>Cause:</strong> Exposure to a common source over a brief, well-defined period</p>
                    <p><strong>Example:</strong> Food poisoning from contaminated potato salad at a single event</p>
                    <p><strong>Key Feature:</strong> Everyone exposed at approximately the same time</p>`,
            continuous: `<h4 style="color: var(--color-primary);">Continuous Common Source Outbreak</h4>
                    <p><strong>Pattern:</strong> Plateau or flat-topped curve</p>
                    <p><strong>Cause:</strong> Ongoing exposure to contaminated source over extended period</p>
                    <p><strong>Example:</strong> Contaminated water supply (like John Snow's cholera investigation)</p>
                    <p><strong>Key Feature:</strong> Source remains active, causing cases over multiple incubation periods</p>`,
            propagated: `<h4 style="color: var(--color-primary);">Propagated Outbreak</h4>
                    <p><strong>Pattern:</strong> Multiple peaks of increasing height</p>
                    <p><strong>Cause:</strong> Person-to-person transmission</p>
                    <p><strong>Example:</strong> Measles, influenza, COVID-19</p>
                    <p><strong>Key Feature:</strong> Peaks represent successive generations, spaced ~1 incubation period apart</p>`,
            intermittent: `<h4 style="color: var(--color-primary);">Intermittent Common Source</h4>
                    <p><strong>Pattern:</strong> Irregular peaks separated by periods with no cases</p>
                    <p><strong>Cause:</strong> Common source that is not constant (e.g., occasional batch of bad food)</p>
                    <p><strong>Example:</strong> Industrial waste released into water only on weekends</p>
                    <p><strong>Key Feature:</strong> Unpredictable timing, gaps reflect times when source was safe</p>`
        };
        const descContainer = document.getElementById('epi-description');
        if (descContainer) {
            descContainer.innerHTML = descriptions[this.visualizerType];
        }
    }

    // --- Render Main Interface ---

    addBulkCases(text) {
        if (!text) return;
        // Split by newlines, commas, or semicolons
        const potentialDates = text.split(/[\n,;]+/);
        let addedCount = 0;

        potentialDates.forEach(dStr => {
            const raw = dStr.trim();
            if (!raw) return;
            // Attempt simple standardization (YYYY-MM-DD)
            const d = new Date(raw);
            if (!isNaN(d.getTime())) {
                this.cases.push(d.toISOString().split('T')[0]);
                addedCount++;
            }
        });

        if (addedCount > 0) {
            this.cases.sort();
            this.render();
            if (typeof window.UI !== 'undefined') window.UI.toast(`Added ${addedCount} cases.`, 'success');
            else alert(`Added ${addedCount} cases.`);
        } else {
            if (typeof window.UI !== 'undefined') window.UI.toast('No valid dates found. Use YYYY-MM-DD format.', 'error');
            else alert('No valid dates found. Use YYYY-MM-DD format.');
        }
    }

    // --- Render Main Interface ---

    render() {
        const isPlotter = this.mode === 'plotter';

        let contentHtml = '';

        if (isPlotter) {
            const { labels, data, max } = this.getHistogramData();
            const peak = Math.max(...data, 0);
            const totalCases = this.cases.length;

            let chartHtml = '';
            if (totalCases > 0) {
                chartHtml = `
                    <div class="epi-chart-container">
                        <div class="y-axis">
                            <span>${max}</span>
                            <span>${Math.round(max / 2)}</span>
                            <span>0</span>
                        </div>
                        <div class="chart-bars">
                            ${labels.map((date, i) => {
                    const count = data[i];
                    const height = (count / max) * 100;
                    const isPeak = count === peak && count > 0;
                    return `
                                    <div class="bar-group" title="${date}: ${count} cases">
                                        <div class="bar ${isPeak ? 'peak' : ''}" style="height: ${height}%">
                                            ${count > 0 ? `<span class="bar-label">${count}</span>` : ''}
                                        </div>
                                        <div class="x-label">${date.slice(5)}</div>
                                    </div>
                                `;
                }).join('')}
                        </div>
                    </div>
                `;
            } else {
                chartHtml = `<div class="empty-state"><p>No cases recorded. Add a case to generate the curve.</p></div>`;
            }

            contentHtml = `
                <div class="tool-controls" style="display: flex; flex-direction: column; gap: 1rem;">
                    
                    <div style="display: flex; gap: 1rem; align-items: flex-start; flex-wrap: wrap;">
                        <div class="neo-card small" style="flex: 1; min-width: 250px;">
                            <label for="case-date-input" style="font-weight: bold; display: block; margin-bottom: 0.5rem;">Single Case:</label>
                            <div class="input-group">
                                <input type="date" id="case-date-input" class="form-input">
                                <button class="btn btn-primary" onclick="epiCurve.addCase(document.getElementById('case-date-input').value)">Add</button>
                            </div>
                        </div>

                        <div class="neo-card small" style="flex: 1; min-width: 250px;">
                            <label for="bulk-cases-input" style="font-weight: bold; display: block; margin-bottom: 0.5rem;">Bulk Entry:</label>
                            <textarea id="bulk-cases-input" class="form-input" rows="3" placeholder="Paste list of dates (YYYY-MM-DD)..."></textarea>
                            <button class="btn btn-secondary btn-sm" style="margin-top: 0.5rem; width: 100%;" onclick="epiCurve.addBulkCases(document.getElementById('bulk-cases-input').value)">
                                <i class="ph-bold ph-plus"></i> Add All
                            </button>
                        </div>
                    </div>

                    <div class="action-group" style="display: flex; flex-wrap: wrap; gap: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                        <button class="btn btn-outline" onclick="epiCurve.loadExample()">Load Point Source</button>
                        <button class="btn btn-outline" onclick="epiCurve.loadIntermittent()">Load Intermittent</button>
                        <button class="btn btn-outline" onclick="epiCurve.loadPropagated()">Load Propagated</button>
                        <button class="btn btn-outline" onclick="epiCurve.downloadCSV()"><i class="ph-bold ph-download-simple"></i> CSV</button>
                        <button class="btn btn-outline" onclick="epiCurve.downloadImage()" style="background: #f0fdf4; border-color: #22c55e;"><i class="ph-bold ph-image"></i> PNG</button>
                        <button class="btn btn-danger" onclick="epiCurve.clear()">Clear All</button>
                    </div>
                </div>

                <div class="stats-panel">
                    <table class="table" style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
                        <thead>
                            <tr style="background: var(--surface-2);">
                                <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border-color);">Total Cases</th>
                                <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border-color);">Peak Cases</th>
                                <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border-color);">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 1rem; text-align: center; font-size: 1.5rem; font-weight: bold; border: 1px solid var(--border-color);">${totalCases}</td>
                                <td style="padding: 1rem; text-align: center; font-size: 1.5rem; font-weight: bold; border: 1px solid var(--border-color); color: var(--accent-orange);">${peak}</td>
                                <td style="padding: 1rem; text-align: center; font-size: 1.5rem; font-weight: bold; border: 1px solid var(--border-color);">${labels.length || 0} days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="chart-wrapper">
                    ${chartHtml}
                    <div style="text-align: center; margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
                        See <strong>Chapter 6</strong> (Outbreaks) or <strong>Chapter 10</strong> (Study Design) for interpreting these curves.
                    </div>
                </div>

                <div class="case-list">
                    <h3>Case List</h3>
                    <div style="max-height: 300px; overflow-y: auto;">
                        <table class="table" style="width: auto; min-width: 400px; border-collapse: collapse; margin-right: auto;">
                            <thead>
                                <tr style="background: var(--surface-2); text-align: left;">
                                    <th style="padding: 0.5rem;">#</th>
                                    <th style="padding: 0.5rem;">Date</th>
                                    <th style="padding: 0.5rem; text-align: left;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.cases.map((date, i) => `
                                    <tr style="border-bottom: 1px solid var(--border-color);">
                                        <td style="padding: 0.5rem;">${i + 1}</td>
                                        <td style="padding: 0.5rem;">${date}</td>
                                        <td style="padding: 0.5rem; text-align: left;">
                                            <button class="btn btn-sm btn-danger" onclick="epiCurve.removeCase(${i})" title="Remove case">
                                                <i class="ph ph-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Summary table and explanation for example datasets -->
                <div class="epi-curve-summary">
                    <h3>Example Data Table</h3>
                    <div id="epi-curve-table-container"></div>
                </div>
                <div class="epi-curve-explanation" style="margin-top: 1rem;">
                    <div id="epi-curve-explanation"></div>
                </div>
            `;
        } else {
            // Visualizer Mode
            contentHtml = `
                <div class="tool-controls">
                    <div class="input-group">
                        <label for="outbreak-type">Outbreak Type:</label>
                        <select id="outbreak-type" class="form-select" onchange="epiCurve.setVisualizerType(this.value)">
                            <option value="point" ${this.visualizerType === 'point' ? 'selected' : ''}>Point Source</option>
                            <option value="continuous" ${this.visualizerType === 'continuous' ? 'selected' : ''}>Continuous Common Source</option>
                            <option value="intermittent" ${this.visualizerType === 'intermittent' ? 'selected' : ''}>Intermittent Common Source</option>
                            <option value="propagated" ${this.visualizerType === 'propagated' ? 'selected' : ''}>Propagated</option>
                        </select>
                    </div>
                </div>

                <div class="chart-wrapper" style="text-align: center;">
                    <canvas id="epiCanvas" width="600" height="300" style="max-width: 100%; border: 1px solid var(--border-color); border-radius: 8px; background: var(--surface-color);"></canvas>
                </div>

                <div id="epi-description" class="callout" style="margin-top: 1rem;">
                    <!-- Description injected here -->
                </div>
            `;
        }

        const html = `
            <div class="tool-header">
                <h2><i class="ph ph-chart-bar"></i> Epi Curve Generator</h2>
                <div class="mode-switch" style="display: flex; gap: 10px; margin-top: 10px;">
                    <button class="btn ${isPlotter ? 'btn-primary' : 'btn-outline'}" onclick="epiCurve.setMode('plotter')">Data Plotter</button>
                    <button class="btn ${!isPlotter ? 'btn-primary' : 'btn-outline'}" onclick="epiCurve.setMode('visualizer')">Pattern Visualizer</button>
                </div>
            </div>
            ${contentHtml}
        `;

        this.container.innerHTML = html;

        if (!isPlotter) {
            this.updateVisualizerDescription();
            // Need to wait for DOM update to draw on canvas
            setTimeout(() => this.drawVisualizer(), 0);
        } else {
            // In plotter mode, update summary table and explanation if cases exist
            if (this.cases && this.cases.length > 0) {
                const summary = this.summarizeByDate(this.cases);
                this.renderSummaryTable(summary);
                // this.renderExplanation(summary); // REMOVED: Caused "undefined" title bug. Explanations are only for loaded examples.
            } else {
                // Clear summary and explanation if no cases
                const t = document.getElementById('epi-curve-table-container');
                const e = document.getElementById('epi-curve-explanation');
                if (t) t.innerHTML = '';
                if (e) e.innerHTML = '';
            }
        }
    }

    downloadCSV() {
        if (!this.cases || this.cases.length === 0) {
            if (typeof window.UI !== 'undefined') window.UI.toast('No data to export', 'error');
            else alert('No data to export');
            return;
        }
        const summary = this.summarizeByDate(this.cases);
        let csv = 'Date,Count\n';
        summary.forEach(row => {
            csv += `${row.date},${row.count}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'epi_curve_data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    downloadImage() {
        const { labels, data, max } = this.getHistogramData();
        if (!labels || labels.length === 0) {
            if (typeof window.UI !== 'undefined') window.UI.toast('No data to export', 'error');
            else alert('No data to export');
            return;
        }

        // Create an offscreen canvas
        const canvas = document.createElement('canvas');
        const width = Math.max(800, labels.length * 40);
        const height = 450;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);

        // Padding
        const padding = { top: 60, right: 40, bottom: 80, left: 60 };
        const chartWidth = width - padding.left - padding.right;
        const chartHeight = height - padding.top - padding.bottom;

        // Title
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 20px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Epidemic Curve', width / 2, 30);

        // Subtitle
        ctx.font = '12px Inter, sans-serif';
        ctx.fillStyle = '#64748b';
        ctx.fillText(`Generated ${new Date().toLocaleDateString()} | Total Cases: ${this.cases.length}`, width / 2, 48);

        // Draw axes
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding.left, padding.top);
        ctx.lineTo(padding.left, height - padding.bottom);
        ctx.lineTo(width - padding.right, height - padding.bottom);
        ctx.stroke();

        // Y-axis labels
        ctx.fillStyle = '#64748b';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'right';
        for (let i = 0; i <= 5; i++) {
            const y = padding.top + (chartHeight / 5) * (5 - i);
            const val = Math.round((max / 5) * i);
            ctx.fillText(val.toString(), padding.left - 8, y + 4);

            // Grid line
            ctx.strokeStyle = '#e2e8f0';
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();
        }

        // Y-axis label
        ctx.save();
        ctx.translate(18, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillStyle = '#64748b';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Number of Cases', 0, 0);
        ctx.restore();

        // Draw bars
        const barWidth = chartWidth / labels.length;
        const barPadding = Math.max(2, barWidth * 0.15);
        const peak = Math.max(...data);

        data.forEach((count, i) => {
            const barHeight = (count / max) * chartHeight;
            const x = padding.left + i * barWidth + barPadding;
            const y = height - padding.bottom - barHeight;
            const bw = barWidth - barPadding * 2;

            // Bar color - highlight peak
            if (count === peak && count > 0) {
                ctx.fillStyle = '#f97316'; // Orange for peak
            } else {
                ctx.fillStyle = '#3b82f6'; // Blue for others
            }
            ctx.fillRect(x, y, bw, barHeight);

            // Bar value
            if (count > 0) {
                ctx.fillStyle = '#1e293b';
                ctx.font = '10px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(count.toString(), x + bw / 2, y - 4);
            }

            // X-axis label (date)
            ctx.fillStyle = '#64748b';
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.save();
            ctx.translate(x + bw / 2, height - padding.bottom + 12);
            ctx.rotate(Math.PI / 4);
            ctx.fillText(labels[i].slice(5), 0, 0); // Show MM-DD
            ctx.restore();
        });

        // X-axis label
        ctx.fillStyle = '#64748b';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Date of Symptom Onset', width / 2, height - 10);

        // Footer
        ctx.font = '10px Inter, sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.textAlign = 'right';
        ctx.fillText('Epidemic Engine v5.0', width - 10, height - 10);

        // Download
        const link = document.createElement('a');
        link.download = 'epi_curve.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if (typeof window.UI !== 'undefined') window.UI.toast('Image downloaded!', 'success');
    }
}
// Global instance
const _epiCurve = null;
