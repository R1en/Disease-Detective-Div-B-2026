class _ExposureCalculator {
    constructor(containerId) {
        this.containerId = containerId;
        this.scale = 24; // Default zoom scale (hours +/- around window)
        this.currentWindow = null;
        this.render();
    }

    // Render the input form and placeholder containers for graph and examples
    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        container.innerHTML = `
            <div class="exposure-tool">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="field-label" for="exposure-onset">Symptom onset (local time)</label>
                        <input type="datetime-local" id="exposure-onset" class="field-input" />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="field-label" for="exposure-min">Min incubation (hours)</label>
                            <input type="number" id="exposure-min" class="field-input" min="0" />
                        </div>
                        <div>
                            <label class="field-label" for="exposure-max">Max incubation (hours)</label>
                            <input type="number" id="exposure-max" class="field-input" min="0" />
                        </div>
                    </div>
                </div>
                <div class="mt-3 flex gap-2 flex-wrap">
                    <button class="btn btn-primary" id="exposure-calc-btn">Calculate window</button>
                    <button class="btn btn-secondary" id="exposure-step-btn" onclick="exposureCalc.toggleSteps()">Show Math</button>
                    <button class="btn btn-outline" onclick="exposureCalc.loadExample()">Load Example</button>
                    <button class="btn btn-secondary" id="exposure-clear-btn">Clear</button>
                </div>
                
                <div id="exposure-steps" class="neo-card small" style="display: none; background: #f8fafc; border: 1px dashed var(--navy-primary); margin-top: 1rem;">
                    <h4 style="margin-top: 0; color: var(--navy-primary);">Step-by-Step Breakdown</h4>
                    <div id="exposure-steps-content" style="font-family: monospace; font-size: 0.95rem;"></div>
                </div>

                <div class="mt-3 callout-info" id="exposure-result" aria-live="polite" style="border-left: 4px solid var(--accent-color); padding: 1rem; background: var(--surface-2);"></div>

                <div class="mt-4">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 class="tool-subheading" style="margin: 0;">Visual timeline</h3>
                        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem;">
                            <label>Zoom:</label>
                            <input type="range" min="6" max="168" value="24" id="exposure-zoom" oninput="exposureCalc.updateScale(this.value)">
                        </div>
                    </div>
                    <div id="exposure-graph" class="exposure-graph"></div>
                </div>
                <div class="mt-4">
                    <h3 class="tool-subheading">Practice scenarios</h3>
                    <div id="exposure-examples" class="exposure-examples"></div>
                </div>
            </div>
        `;
        // Attach event listeners
        const calcBtn = document.getElementById('exposure-calc-btn');
        const clearBtn = document.getElementById('exposure-clear-btn');
        if (calcBtn) calcBtn.addEventListener('click', () => this.calculate());
        if (clearBtn) clearBtn.addEventListener('click', () => this.clear());
        this.renderExamples();
    }

    // Format dates for display
    format(dt) {
        return dt.toLocaleString(undefined, {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: 'numeric', minute: '2-digit'
        });
    }

    toggleSteps() {
        const steps = document.getElementById('exposure-steps');
        const btn = document.getElementById('exposure-step-btn');
        if (steps.style.display === 'none') {
            steps.style.display = 'block';
            btn.textContent = 'Hide Math';
        } else {
            steps.style.display = 'none';
            btn.textContent = 'Show Math';
        }
    }

    updateScale(val) {
        this.scale = Number(val);
        if (this.currentWindow) {
            this.renderGraph(this.currentWindow);
        }
    }

    // Perform the calculation and show result and graph
    calculate() {
        const onsetInput = document.getElementById('exposure-onset');
        const minInput = document.getElementById('exposure-min');
        const maxInput = document.getElementById('exposure-max');
        const resultBox = document.getElementById('exposure-result');
        if (!onsetInput || !minInput || !maxInput || !resultBox) return;
        const onsetStr = onsetInput.value;
        const minH = Number(minInput.value);
        const maxH = Number(maxInput.value);
        if (!onsetStr || isNaN(minH) || isNaN(maxH) || minH < 0 || maxH <= 0 || maxH < minH) {
            resultBox.innerHTML = `<p>Please enter a valid onset date/time and a valid incubation range (max ≥ min).</p>`;
            this.renderGraph(null);
            this.currentWindow = null;
            return;
        }
        const onset = new Date(onsetStr);
        const earliest = new Date(onset.getTime() - maxH * 3600 * 1000);
        const latest = new Date(onset.getTime() - minH * 3600 * 1000);
        this.currentWindow = { onset, earliest, latest, minH, maxH };

        resultBox.innerHTML = `
            <p><strong>Likely exposure window:</strong></p>
            <ul>
                <li>Earliest plausible exposure: <strong>${this.format(earliest)}</strong></li>
                <li>Latest plausible exposure: <strong>${this.format(latest)}</strong></li>
            </ul>
            <div class="study-tip" style="margin-top: 1rem; border-left: 4px solid var(--accent-orange); padding-left: 1rem;">
                <p class="text-sm font-bold">Exam Strategy:</p>
                <ul class="text-sm text-muted">
                    <li><strong>Individual cases:</strong> The exposure must be within the window (Earliest to Latest).</li>
                    <li><strong>Multiple cases:</strong> Look for the <strong>overlap</strong> of windows.</li>
                    <li><strong>Point Source:</strong> Count back one incubation period from the <strong>peak</strong> cases for the most probable exposure.</li>
                    <li><strong>Given Range (A-B days):</strong> Count back A days from the <em>first</em> case (start of window) and B days from the <em>last</em> case (end of window).</li>
                </ul>
            </div>
        `;

        // Populate Steps
        const stepsContainer = document.getElementById('exposure-steps-content');
        if (stepsContainer) {
            stepsContainer.innerHTML = `
                <div style="margin-bottom: 0.5rem;"><strong>Formula:</strong> Exposure = Onset Time - Incubation Period</div>
                <div style="margin-bottom: 0.5rem;"><strong>1. Earliest Exposure (using Max Incubation):</strong><br>
                ${this.format(onset)} - ${maxH} hours = <strong>${this.format(earliest)}</strong></div>
                <div><strong>2. Latest Exposure (using Min Incubation):</strong><br>
                ${this.format(onset)} - ${minH} hours = <strong>${this.format(latest)}</strong></div>
            `;
        }

        this.renderGraph(this.currentWindow);
    }

    // Clear inputs and outputs
    clear() {
        const onsetInput = document.getElementById('exposure-onset');
        const minInput = document.getElementById('exposure-min');
        const maxInput = document.getElementById('exposure-max');
        const resultBox = document.getElementById('exposure-result');
        const stepsContainer = document.getElementById('exposure-steps-content');

        if (onsetInput) onsetInput.value = '';
        if (minInput) minInput.value = '';
        if (maxInput) maxInput.value = '';
        if (resultBox) resultBox.innerHTML = '';
        if (stepsContainer) stepsContainer.innerHTML = '';
        this.currentWindow = null;

        this.renderGraph(null);
    }

    // Render timeline graph or placeholder
    renderGraph(windowObj) {
        const graph = document.getElementById('exposure-graph');
        if (!graph) return;

        if (!windowObj) {
            graph.innerHTML = `<p class="text-muted text-center" style="padding: 2rem;">Enter onset and incubation range above, or select an example.<br><span style="font-size: 2rem; opacity: 0.3;">⏳</span></p>`;
            return;
        }

        const { onset, earliest, latest, minH, maxH } = windowObj;

        // Viewport Logic
        // We want to see [Earliest Exposure - Padding] to [Onset + Padding]
        const padHours = Math.max(24, Math.abs(maxH) * 0.5); // Dynamic padding
        const viewStart = new Date(earliest.getTime() - padHours * 3600 * 1000);
        const viewEnd = new Date(onset.getTime() + (padHours / 2) * 3600 * 1000);
        const totalMs = viewEnd.getTime() - viewStart.getTime();

        // Store state for listeners
        this.graphState = { viewStart, totalMs, onset };

        const getPercent = (dt) => {
            const pct = ((dt.getTime() - viewStart.getTime()) / totalMs) * 100;
            return Math.max(0, Math.min(100, pct));
        };

        const winStartPct = getPercent(earliest);
        const winEndPct = getPercent(latest);
        const winWidth = Math.max(0.5, winEndPct - winStartPct);
        const onsetPct = getPercent(onset);

        // Render Interactive Graph
        graph.innerHTML = `
            <div class="exposure-vis-container" style="position: relative; height: 140px; background: white; border: 2px solid var(--border-color); border-radius: 8px; overflow: hidden; user-select: none;">
                
                <!-- Grid Lines (Every 12h or 24h) -->
                <div class="vis-grid" style="position: absolute; width: 100%; height: 100%; display: flex; justify-content: space-between; opacity: 0.5;">
                    ${this.renderGridLines(viewStart, viewEnd)}
                </div>

                <!-- Main Timeline Track -->
                <div style="position: absolute; top: 60px; left: 2%; right: 2%; height: 6px; background: var(--border-color); border-radius: 3px;"></div>

                <!-- Exposure Window Zone (The "Answer") -->
                <div class="exp-window-zone" style="position: absolute; top: 40px; height: 44px; left: ${winStartPct}%; width: ${winWidth}%; 
                     background: rgba(255, 171, 112, 0.3); border: 4px solid var(--accent-orange); border-radius: 6px; 
                     display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                    <div style="font-size: 0.8rem; font-weight: 900; color: var(--navy-primary); background: white; padding: 2px 8px; border-radius: 4px; border: 2px solid var(--accent-orange); white-space: nowrap; text-transform: uppercase;">
                        Exposure Window
                    </div>
                    
                    <!-- Min Incubation Handle (Right side of window, closer to onset) -->
                    <div class="drag-handle min-handle" title="Min Incubation: ${minH}h" style="position: absolute; right: -8px; top: -2px; bottom: -2px; width: 16px; cursor: ew-resize; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 6px; height: 24px; background: var(--accent-orange); border-radius: 3px; border: 1px solid white;"></div>
                    </div>

                    <!-- Max Incubation Handle (Left side of window, further from onset) -->
                    <div class="drag-handle max-handle" title="Max Incubation: ${maxH}h" style="position: absolute; left: -8px; top: -2px; bottom: -2px; width: 16px; cursor: ew-resize; display: flex; align-items: center; justify-content: center;">
                         <div style="width: 6px; height: 24px; background: var(--accent-orange); border-radius: 3px; border: 1px solid white;"></div>
                    </div>
                </div>

                <!-- Onset Marker (Fixed Anchor) -->
                <div class="onset-marker" style="position: absolute; top: 25px; bottom: 25px; left: ${onsetPct}%; width: 4px; background: var(--navy-primary); z-index: 10;">
                    <div style="position: absolute; top: -25px; left: -50px; width: 100px; text-align: center; background: var(--navy-primary); color: white; font-size: 0.75rem; padding: 2px 4px; border-radius: 4px; font-weight: bold;">
                        Symptom Onset<br>
                        ${this.formatShort(onset)}
                    </div>
                    <div style="position: absolute; bottom: 0; left: -6px; width: 16px; height: 16px; background: var(--navy-primary); border-radius: 50%;"></div>
                </div>

                <!-- Labels for Window Ends -->
                <div style="position: absolute; top: 90px; left: ${winStartPct}%; transform: translateX(-50%); text-align: center; font-size: 0.7rem; color: var(--text-muted);">
                    Earliest<br>${this.formatShort(earliest)}
                </div>
                <div style="position: absolute; top: 90px; left: ${winEndPct}%; transform: translateX(-50%); text-align: center; font-size: 0.7rem; color: var(--text-muted);">
                    Latest<br>${this.formatShort(latest)}
                </div>

            </div>
            <div style="margin-top: 0.5rem; text-align: center; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
                Drag the handles to adjust the Incubation Period.
            </div> 
        `;

        // Attach interactive listeners
        this.attachGraphListeners(graph, windowObj);
    }

    attachGraphListeners(container, windowObj) {
        const visContainer = container.querySelector('.exposure-vis-container');
        const minHandle = container.querySelector('.min-handle');
        const maxHandle = container.querySelector('.max-handle');
        const windowZone = container.querySelector('.exp-window-zone');

        if (!visContainer || !this.graphState) return;

        const { viewStart, totalMs, onset } = this.graphState;
        const width = visContainer.offsetWidth;

        // Calc conversion factor: Pixels -> Hours
        // totalMs maps to width (px)
        // 1 px = (totalMs / width) ms
        const pxToHours = (px) => {
            const ms = px * (totalMs / width);
            return ms / (3600 * 1000);
        };

        // Helper to update UI without re-render
        const updateVisuals = (newMin, newMax) => {
            // Update inputs
            const minInput = document.getElementById('exposure-min');
            const maxInput = document.getElementById('exposure-max');
            if (minInput) minInput.value = Math.round(newMin);
            if (maxInput) maxInput.value = Math.round(newMax);

            // Update Window Zone
            // Calculate new Percentages
            // Earliest (Max Incubation) -> Left Side
            // Latest (Min Incubation) -> Right Side

            const earliestTime = onset.getTime() - newMax * 3600000;
            const latestTime = onset.getTime() - newMin * 3600000;

            const getPercent = (t) => ((t - viewStart.getTime()) / totalMs) * 100;

            const leftPct = Math.max(0, getPercent(earliestTime));
            const rightPct = Math.min(100, getPercent(latestTime));
            const zoneWidth = Math.max(0.5, rightPct - leftPct);

            if (windowZone) {
                windowZone.style.left = `${leftPct}%`;
                windowZone.style.width = `${zoneWidth}%`;
            }

            // Update Handle Titles
            if (minHandle) minHandle.title = `Min Incubation: ${Math.round(newMin)}h`;
            if (maxHandle) maxHandle.title = `Max Incubation: ${Math.round(newMax)}h`;
        };

        // --- HANDLE DRAG ---
        const setupHandleDrag = (element, isMin) => {
            element.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent background drag
                const startX = e.clientX;
                const startVal = isMin ? windowObj.minH : windowObj.maxH;

                const onMove = (moveEvent) => {
                    const deltaPx = moveEvent.clientX - startX;
                    const deltaH = pxToHours(deltaPx);

                    // Moving Right (Positive) -> Time Later -> Incubation Smaller
                    let newVal = startVal - deltaH;

                    // Constraints
                    if (newVal < 0) newVal = 0;

                    let currentMin = isMin ? newVal : parseFloat(document.getElementById('exposure-min')?.value || windowObj.minH);
                    let currentMax = isMin ? parseFloat(document.getElementById('exposure-max')?.value || windowObj.maxH) : newVal;

                    if (isMin) {
                        if (newVal > currentMax) newVal = currentMax; // Clamp to Max
                        currentMin = newVal;
                    } else {
                        if (newVal < currentMin) newVal = currentMin; // Clamp to Min
                        currentMax = newVal;
                    }

                    updateVisuals(currentMin, currentMax);
                };

                const onUp = () => {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onUp);
                    this.calculate(); // Re-calc final state
                };

                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onUp);
            });
        };

        // --- BACKGROUND DRAG (HIGHLIGHT) ---
        visContainer.addEventListener('mousedown', (e) => {
            if (e.target.closest('.drag-handle')) return; // Ignore handles
            e.preventDefault();

            const rect = visContainer.getBoundingClientRect();
            const startX = e.clientX - rect.left;

            // Initial click defines one edge. Drag defines the other.

            const onMove = (moveEvent) => {
                const currentX = moveEvent.clientX - rect.left;

                // Define range in pixels relative to container
                const p1 = Math.min(startX, currentX);
                const p2 = Math.max(startX, currentX);

                // Convert pixels to Time
                // px / width = timeOffset / totalMs
                const timeStart = viewStart.getTime() + (p1 / width) * totalMs;
                const timeEnd = viewStart.getTime() + (p2 / width) * totalMs;

                // Convert Time to Incubation Hours (Time = Onset - Incubation)
                // Incubation = (Onset - Time) / 3600000
                // Earlier time (timeStart) = Higher Incubation (Max)
                // Later time (timeEnd) = Lower Incubation (Min)

                const curMax = (onset.getTime() - timeStart) / 3600000;
                const curMin = (onset.getTime() - timeEnd) / 3600000;

                updateVisuals(Math.max(0, curMin), Math.max(0, curMax));
            };

            const onUp = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                this.calculate();
            };

            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });

        if (minHandle) setupHandleDrag(minHandle, true);
        if (maxHandle) setupHandleDrag(maxHandle, false);

        // Add cursor hint to container
        visContainer.style.cursor = 'crosshair';
    }

    renderGridLines(start, end) {
        let html = '';
        let current = new Date(start);
        current.setMinutes(0, 0, 0); // Snap to hour
        const totalMs = end.getTime() - start.getTime();

        // Determine interval based on span
        const spanHours = (end - start) / 3600000;
        let intervalHours = 6;
        if (spanHours > 48) intervalHours = 12;
        if (spanHours > 100) intervalHours = 24;

        while (current < end) {
            if (current > start) {
                const pct = ((current - start) / totalMs) * 100;
                const isDayStart = current.getHours() === 0;
                const label = isDayStart
                    ? current.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
                    : current.getHours() + ':00';

                html += `
                    <div style="position: absolute; left: ${pct}%; top: 0; bottom: 0; width: 1px; background: ${isDayStart ? '#cbd5e1' : '#f1f5f9'};">
                        <div style="position: absolute; bottom: 2px; left: 4px; font-size: 0.65rem; color: #94a3b8;">${label}</div>
                    </div>
                `;
            }
            current = new Date(current.getTime() + intervalHours * 3600 * 1000);
        }
        return html;
    }

    formatShort(dt) {
        return dt.toLocaleString(undefined, {
            month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: '2-digit'
        });
    }

    // Render example scenarios
    renderExamples() {
        const container = document.getElementById('exposure-examples');
        if (!container) return;
        const examples = [
            {
                id: 'noro',
                title: 'Norovirus (12–48h)',
                onsetOffsetH: 0,
                min: 12,
                max: 48,
                note: 'Classic short incubation, often from a single meal.'
            },
            {
                id: 'salmonella',
                title: 'Salmonella (6–72h)',
                onsetOffsetH: -24,
                min: 6,
                max: 72,
                note: 'Wider window; exams often pick the middle.'
            },
            {
                id: 'ecoli',
                title: 'E. coli (3–4 days)',
                onsetOffsetH: -48,
                min: 72,
                max: 96,
                note: 'Common bacterial outbreak. Incubation is days, not hours.'
            },
            {
                id: 'hepA',
                title: 'Hepatitis A (15–50 days)',
                onsetOffsetH: -7 * 24,
                min: 15 * 24,
                max: 50 * 24,
                note: 'Very long incubation; you must look weeks back.'
            }
        ];
        container.innerHTML = examples.map(ex => {
            return `
                <div class="example-card" data-id="${ex.id}" style="cursor:pointer; border: 1px solid var(--border-color); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem; background: #fff;">
                    <div class="font-semibold" style="color: var(--navy-primary);">${ex.title}</div>
                    <div class="text-sm text-muted">${ex.note}</div>
                </div>
            `;
        }).join('');
        container.querySelectorAll('.example-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const ex = examples.find(e => e.id === id);
                if (!ex) return;
                const now = new Date();
                now.setHours(now.getHours() + ex.onsetOffsetH);
                const _iso = now.toISOString(); // UTC
                // Simple local iso trick
                const local = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().substring(0, 16);
                document.getElementById('exposure-onset').value = local;
                document.getElementById('exposure-min').value = ex.min;
                document.getElementById('exposure-max').value = ex.max;
                this.calculate();
            });
        });
    }

    // Load a default example
    loadExample() {
        const noroCard = this.containerId ? document.querySelector(`#${this.containerId} .example-card[data-id="noro"]`) : document.querySelector('.example-card[data-id="noro"]');
        if (noroCard) {
            noroCard.click();
        } else {
            // Fallback
            const now = new Date();
            const local = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().substring(0, 16);
            document.getElementById('exposure-onset').value = local;
            document.getElementById('exposure-min').value = 12;
            document.getElementById('exposure-max').value = 48;
            this.calculate();
        }
    }
}


// Global variable for Tools Manager to instantiate
const _exposureCalc = null;