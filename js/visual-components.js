/**
 * Epidemic Engine - Visual Components Library
 * Interactive SVGs and Diagrams
 */

window.VisualComponents = {

    // Interactive Epidemiologic Triad
    renderTriad: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="triad-widget neo-card" style="text-align:center; padding: 2rem;">
                <h3 style="color:var(--navy-primary); margin-bottom: 2rem; font-weight: 800; font-size: 1.5rem;">Interactive Triad</h3>
                
                <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap: 2rem;">
                    
                    <!-- SVG Diagram -->
                    <div class="triad-svg-container" style="flex: 0 0 300px;">
                        <svg viewBox="0 0 300 260" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">
                            <!-- Edges -->
                            <line x1="150" y1="40" x2="40" y2="220" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round" />
                            <line x1="150" y1="40" x2="260" y2="220" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round" />
                            <line x1="40" y1="220" x2="260" y2="220" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round" />

                            <!-- Vector (Center) -->
                            <g class="triad-node" role="button" tabindex="0" onclick="VisualComponents.updateTriad('vector')" onkeydown="if(event.key==='Enter'||event.key===' ')VisualComponents.updateTriad('vector')" style="cursor:pointer;" aria-label="Select Vector">
                                <circle cx="150" cy="150" r="32" fill="#f1f5f9" stroke="#64748b" stroke-width="3" class="node-bg" id="node-vector"/>
                                <text x="150" y="156" text-anchor="middle" font-size="11" font-weight="900" fill="#334155" style="text-transform: uppercase; letter-spacing: 0.5px;">VECTOR</text>
                            </g>

                            <!-- Agent (Top) -->
                            <g class="triad-node" role="button" tabindex="0" onclick="VisualComponents.updateTriad('agent')" onkeydown="if(event.key==='Enter'||event.key===' ')VisualComponents.updateTriad('agent')" style="cursor:pointer;" aria-label="Select Agent">
                                <circle cx="150" cy="40" r="38" fill="#fee2e2" stroke="#ef4444" stroke-width="4" class="node-bg" id="node-agent"/>
                                <text x="150" y="46" text-anchor="middle" font-size="13" font-weight="900" fill="#991b1b" style="text-transform: uppercase;">AGENT</text>
                                <text x="150" y="15" text-anchor="middle" font-size="24">🦠</text>
                            </g>

                            <!-- Host (Left) -->
                            <g class="triad-node" role="button" tabindex="0" onclick="VisualComponents.updateTriad('host')" onkeydown="if(event.key==='Enter'||event.key===' ')VisualComponents.updateTriad('host')" style="cursor:pointer;" aria-label="Select Host">
                                <circle cx="40" cy="220" r="38" fill="#dbeafe" stroke="#3b82f6" stroke-width="4" class="node-bg" id="node-host"/>
                                <text x="40" y="226" text-anchor="middle" font-size="13" font-weight="900" fill="#1e40af" style="text-transform: uppercase;">HOST</text>
                                <text x="40" y="195" text-anchor="middle" font-size="24">👤</text>
                            </g>

                            <!-- Environment (Right) -->
                            <g class="triad-node" role="button" tabindex="0" onclick="VisualComponents.updateTriad('env')" onkeydown="if(event.key==='Enter'||event.key===' ')VisualComponents.updateTriad('env')" style="cursor:pointer;" aria-label="Select Environment">
                                <circle cx="260" cy="220" r="38" fill="#dcfce7" stroke="#22c55e" stroke-width="4" class="node-bg" id="node-env"/>
                                <text x="260" y="226" text-anchor="middle" font-size="12" font-weight="900" fill="#166534" style="text-transform: uppercase;">ENVIRON</text>
                                <text x="260" y="195" text-anchor="middle" font-size="24">🌍</text>
                            </g>
                        </svg>
                    </div>

                    <!-- Info Panel -->
                    <div id="triad-info" role="status" aria-live="polite" style="flex: 1; min-width: 250px; text-align: left; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                        <h4 style="margin-top:0; color:#334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.75rem; font-weight: 800; font-size: 1.1rem;">Select a Node</h4>
                        <p style="color: #475569; font-size: 1rem; line-height: 1.6; font-weight: 500;">Click on the corners of the triangle to explore the components of this model.</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = html;

        // Initial state - Use RAF to avoid synchronous layout thrashing after innerHTML write
        requestAnimationFrame(() => {
            this.updateTriad('agent');
        });
    },

    updateTriad: function (type) {
        const info = document.getElementById('triad-info');
        if (!info) return;

        const content = {
            agent: {
                title: "The Agent ('What')",
                color: "#b91c1c",
                bg: "#fee2e2",
                body: `
                    <p>The cause of the disease. Can be:</p>
                    <ul style="padding-left: 1.25rem;">
                        <li><strong>Biological:</strong> Bacteria, Viruses, Parasites</li>
                        <li><strong>Chemical:</strong> Poisons, Alcohol, Smoke</li>
                        <li><strong>Physical:</strong> Trauma, Radiation, Fire</li>
                        <li><strong>Nutritional:</strong> Lack (Scurvy) or Excess (Obesity)</li>
                    </ul>
                `
            },
            host: {
                title: "The Host ('Who')",
                color: "#1d4ed8",
                bg: "#dbeafe",
                body: `
                    <p>The organism harboring the disease. Risk factors include:</p>
                    <ul style="padding-left: 1.25rem;">
                        <li><strong>Intrinsic:</strong> Age, Sex, Genetics, Immunity</li>
                        <li><strong>Behavioral:</strong> Diet, Exercise, Hygiene</li>
                        <li><strong>Psychological:</strong> Stress levels</li>
                    </ul>
                `
            },
            env: {
                title: "The Environment ('Where')",
                color: "#15803d",
                bg: "#dcfce7",
                body: `
                    <p>External factors allowing transmission:</p>
                    <ul style="padding-left: 1.25rem;">
                        <li><strong>Physical:</strong> Climate, Geography, Water supply</li>
                        <li><strong>Biological:</strong> Vectors (Mosquitoes), Flora</li>
                        <li><strong>Socioeconomic:</strong> Crowding, Sanitation, Access to care</li>
                    </ul>
                `
            },
            vector: {
                title: "The Vector (Center)",
                color: "#475569",
                bg: "#f1f5f9",
                body: `
                    <p><strong>The Transporter.</strong></p>
                    <p>An organism (like a mosquito or tick) that carries the agent from a host or reservoir to a new susceptible host. Not always present in every disease model.</p>
                `
            }
        };

        const data = content[type];

        // Animate Update
        info.style.opacity = '0.5';
        setTimeout(() => {
            info.style.background = data.bg;
            info.style.borderColor = data.color;
            info.innerHTML = `
                <h4 style="margin-top:0; color:${data.color}; border-bottom: 1px solid ${data.color}40; padding-bottom: 0.5rem;">${data.title}</h4>
                <div style="font-size: 0.95rem; color: #334155;">${data.body}</div>
            `;
            info.style.opacity = '1';
        }, 150);

        // Highlight SVG Node
        document.querySelectorAll('.node-bg').forEach(el => el.style.filter = '');

        // Reset Aria-Pressed
        document.querySelectorAll('.triad-node').forEach(el => el.setAttribute('aria-pressed', 'false'));

        const activeNode = document.getElementById(`node-${type}`);
        if (activeNode) {
            activeNode.style.filter = 'brightness(0.9) drop-shadow(0 0 8px rgba(0,0,0,0.2))';
            activeNode.parentElement.setAttribute('aria-pressed', 'true'); // Set on the group
        }
    },

    // ------------------------------------------
    // "Stop the Outbreak" Simulator (R0 Control)
    // ------------------------------------------
    renderControlSimulator: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="control-sim neo-card" style="padding: 2rem; background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2rem;">
                    <div>
                        <h3 style="color:var(--navy-primary); margin:0;">Stop the Outbreak</h3>
                        <p style="margin:0.25rem 0 0; color:#64748b; font-size:0.9rem;">Adjust interventions to reduce the Reproduction Number (R).</p>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:0.8rem; text-transform:uppercase; font-weight:bold; color:#64748b;">Current Status</div>
                        <div id="sim-status" style="font-weight:bold; color:#ef4444;">EXPONENTIAL GROWTH</div>
                    </div>
                </div>

                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <!-- Controls -->
                    <div style="flex: 1; min-width: 250px;">
                        <!-- Vaccine -->
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:0.5rem;">
                                <span>Vaccination Rate</span>
                                <span id="val-vac">0%</span>
                            </label>
                            <input type="range" id="range-vac" min="0" max="100" value="0" style="width:100%; accent-color: #3b82f6;">
                            <div style="font-size:0.8rem; color:#64748b;">Reduces susceptible population.</div>
                        </div>

                        <!-- Masks -->
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:0.5rem;">
                                <span>Mask Usage</span>
                                <span id="val-mask">0%</span>
                            </label>
                            <input type="range" id="range-mask" min="0" max="100" value="0" style="width:100%; accent-color: #10b981;">
                            <div style="font-size:0.8rem; color:#64748b;">Reduces transmission probability.</div>
                        </div>

                        <!-- Distancing -->
                        <div style="margin-bottom: 0;">
                            <label style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:0.5rem;">
                                <span>Social Distancing</span>
                                <span id="val-dist">Normal</span>
                            </label>
                            <input type="range" id="range-dist" min="0" max="3" step="1" value="0" style="width:100%; accent-color: #f59e0b;">
                            <div style="font-size:0.8rem; color:#64748b;">Reduces contact rate.</div>
                        </div>
                    </div>

                    <!-- Visual Output -->
                    <div style="flex: 0 0 280px; background: white; padding: 1.5rem; border-radius: 12px; border: 1px solid #e2e8f0; text-align: center;">
                        <h4 style="margin-top:0; color:#334155;">Reproduction Number (<span style="font-style:italic;">R</span>)</h4>
                        
                        <div style="position:relative; height: 120px; display:flex; align-items:flex-end; justify-content:center; margin-bottom: 1rem;">
                            <!-- Bar Background -->
                            <div style="width: 40px; height: 100%; background: #f1f5f9; border-radius: 20px; position: relative; overflow: hidden;">
                                <!-- Fill -->
                                <div id="r-bar" style="position:absolute; bottom:0; left:0; right:0; height: 100%; background: #ef4444; transition: height 0.3s, background 0.3s;"></div>
                                <!-- Line at 1.0 -->
                                <div style="position:absolute; bottom: 25%; left: -5px; right: -5px; border-top: 2px dashed #334155; z-index: 2;"></div>
                            </div>
                            <div style="position:absolute; bottom: 25%; right: 70px; font-size: 0.8rem; font-weight:bold; color: #334155;">Target < 1.0</div>
                        </div>

                        <div id="r-value" style="font-size: 3.5rem; font-weight: 800; line-height: 1; color: #ef4444; transition: color 0.3s;">4.00</div>
                        <div style="font-size: 0.9rem; color: #64748b; margin-top: 0.5rem;">Starting R₀ = 4.0</div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = html;

        // Logic
        const ranges = {
            vac: document.getElementById('range-vac'),
            mask: document.getElementById('range-mask'),
            dist: document.getElementById('range-dist')
        };
        const displays = {
            vac: document.getElementById('val-vac'),
            mask: document.getElementById('val-mask'),
            dist: document.getElementById('val-dist'),
            r: document.getElementById('r-value'),
            bar: document.getElementById('r-bar'),
            status: document.getElementById('sim-status')
        };

        const R0 = 4.0;
        const distLabels = ["Normal", "Limit Groups", "Stay Home", "Lockdown"];
        // Distancing Factors: 1.0, 0.7, 0.4, 0.1 (Contact reduction)
        const distFactors = [1.0, 0.7, 0.4, 0.1];

        const update = () => {
            const vRate = parseInt(ranges.vac.value) / 100;
            const mRate = parseInt(ranges.mask.value) / 100;
            const dIdx = parseInt(ranges.dist.value);

            displays.vac.textContent = `${(vRate * 100).toFixed(0)}%`;
            displays.mask.textContent = `${(mRate * 100).toFixed(0)}%`;
            displays.dist.textContent = distLabels[dIdx];

            // Formula: R = R0 * (1 - VaccineEff * Coverage) * (1 - MaskEff * Usage) * DistFactor
            // Assumptions: Vaccine is 90% effective, Masks are 50% effective (community)
            const rEff = R0 * (1 - (0.9 * vRate)) * (1 - (0.5 * mRate)) * distFactors[dIdx];

            displays.r.textContent = rEff.toFixed(2);

            // Visual Updates
            // Max height is R=4.0 (100%). Target is 1.0 (25%)
            let hPct = (rEff / 4.0) * 100;
            if (hPct > 100) hPct = 100;
            if (hPct < 5) hPct = 5;
            displays.bar.style.height = `${hPct}%`;

            if (rEff < 1.0) {
                displays.r.style.color = "#10b981"; // Green
                displays.bar.style.background = "#10b981";
                displays.status.textContent = "OUTBREAK CONTROLLED";
                displays.status.style.color = "#10b981";
            } else {
                displays.r.style.color = "#ef4444"; // Red
                displays.bar.style.background = "#ef4444";
                displays.status.textContent = "EXPONENTIAL GROWTH";
                displays.status.style.color = "#ef4444";
            }
        };

        Object.values(ranges).forEach(r => r.addEventListener('input', update));
    },

    // ------------------------------------------
    // Wheel of Causation (Interactive)
    // ------------------------------------------
    renderWheelOfCausation: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="wheel-widget neo-card" style="padding: 2rem; text-align: center;">
                 <h3 style="color:var(--navy-primary); margin-bottom: 2rem; font-weight: 800; font-size: 1.5rem;">Interactive Wheel of Causation</h3>
                 
                 <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap: 3rem;">
                    
                    <!-- SVG Wheel -->
                    <div style="flex: 0 0 320px;">
                        <svg viewBox="0 0 320 320" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); cursor:pointer;">
                            <defs>
                                <filter id="glow-wheel" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="3" result="blur"/>
                                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                                </filter>
                            </defs>
                            
                            <!-- Outer Ring Segments (Environment) -->
                            <!-- Physical (Top Left) -->
                            <path d="M160,160 L160,10 A150,150 0 0,0 30,85 Z" fill="#93c5fd" stroke="white" stroke-width="2" 
                                  class="wheel-slice" id="slice-physical" onclick="VisualComponents.updateWheel('physical')" role="button" tabindex="0"/>
                            <text x="90" y="80" font-weight="900" font-size="11" fill="#1e3a8a" transform="rotate(-45, 90, 80)">PHYSICAL</text>
                            
                             <!-- Biologic (Right) -->
                            <path d="M160,160 L160,10 A150,150 0 0,1 290,235 L160,160 Z" fill="#86efac" stroke="white" stroke-width="2" 
                                  class="wheel-slice" id="slice-biologic" onclick="VisualComponents.updateWheel('biologic')" role="button" tabindex="0"/>
                            <text x="230" y="100" font-weight="900" font-size="11" fill="#14532d" transform="rotate(45, 230, 100)">BIOLOGICAL</text>

                            <!-- Social (Bottom Left) -->
                            <path d="M160,160 L290,235 A150,150 0 0,1 30,85 L160,160 Z" fill="#fca5a5" stroke="white" stroke-width="2" 
                                  class="wheel-slice" id="slice-social" onclick="VisualComponents.updateWheel('social')" role="button" tabindex="0"/>
                            <text x="130" y="260" font-weight="900" font-size="11" fill="#7f1d1d">SOCIAL ENV.</text>

                            <!-- Core (Host) -->
                            <circle cx="160" cy="160" r="50" fill="#fde047" stroke="white" stroke-width="3" 
                                    class="wheel-slice" id="slice-host" onclick="VisualComponents.updateWheel('host')" role="button" tabindex="0"/>
                            <text x="160" y="160" text-anchor="middle" font-weight="900" font-size="13" fill="#854d0e" dy="5">HOST</text>
                        </svg>
                    </div>

                    <!-- Info Panel -->
                    <div id="wheel-info" role="status" aria-live="polite" style="flex: 1; min-width: 250px; text-align: left; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                        <h4 style="margin-top:0; color:#334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.75rem; font-weight: 800; font-size: 1.1rem;">The Wheel Model</h4>
                        <p style="color: #475569; font-size: 1rem; line-height: 1.6; font-weight: 500;">Click on any section of the wheel to understand its role in multi-factorial causation.</p>
                    </div>

                 </div>
            </div>
        `;
        container.innerHTML = html;

        // Add keyboard support
        container.querySelectorAll('.wheel-slice').forEach(el => {
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
        });
    },

    updateWheel: function (type) {
        const info = document.getElementById('wheel-info');
        if (!info) return;

        const content = {
            host: {
                title: "The Core: The Genetically Determined Host",
                bg: "#fef9c3",
                color: "#ca8a04",
                body: "<p>The central hub. Includes genetic makeup, immunity, and intrinsic factors. The wheel model emphasizes that the host interacts with <strong>all</strong> environmental sectors simultaneously.</p>"
            },
            physical: {
                title: "Physical Environment",
                bg: "#eff6ff",
                color: "#1d4ed8",
                body: "<p>Non-living external factors:</p><ul><li>Pollution & Air Quality</li><li>Geography & Climate</li><li>Housing & Urban Design</li><li>Water Sanitation</li></ul>"
            },
            biologic: {
                title: "Biological Environment",
                bg: "#f0fdf4",
                color: "#15803d",
                body: "<p>Living external factors contributing to disease:</p><ul><li>Infectious Agents (Viruses, Bacteria)</li><li>Vectors (Mosquitoes)</li><li>Reservoirs (Animals)</li><li>Flora & Fauna</li></ul>"
            },
            social: {
                title: "Social Environment",
                bg: "#fef2f2",
                color: "#b91c1c",
                body: "<p>The #1 determinant for many chronic diseases:</p><ul><li>Socioeconomic Status (Poverty)</li><li>Culture & Lifestyle</li><li>Stress & Political Stability</li><li>Healthcare Access</li></ul>"
            }
        };

        const data = content[type];

        // Animate
        info.style.opacity = '0.5';
        setTimeout(() => {
            info.style.background = data.bg;
            info.style.borderColor = data.color;
            info.innerHTML = `
                <h4 style="margin-top:0; color:${data.color}; border-bottom: 1px solid ${data.color}40; padding-bottom: 0.5rem;">${data.title}</h4>
                <div style="font-size: 0.95rem; color: #334155;">${data.body}</div>
             `;
            info.style.opacity = '1';
        }, 150);

        // Highlight
        document.querySelectorAll('.wheel-slice').forEach(el => {
            el.style.opacity = '0.6';
            el.style.strokeWidth = '2';
            el.setAttribute('aria-pressed', 'false');
        });
        const active = document.getElementById(`slice-${type}`);
        if (active) {
            active.style.opacity = '1';
            active.style.strokeWidth = '4';
            active.setAttribute('aria-pressed', 'true');
        }
    }
};

