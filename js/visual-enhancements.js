/**
 * Visual Enhancements Module
 * Dynamically injects additional SVG diagrams into chapters
 * v2.5.0 Visual Learning Edition
 */

(function () {
    'use strict';

    const VisualEnhancements = {

        // Initialize on chapter load
        init: function () {
            // Hook into existing loadChapter system
            const originalLoadChapter = window.loadChapter;
            if (typeof originalLoadChapter === 'function') {
                window.loadChapter = function (chapterId, updateHistory) {
                    // Call original function
                    const result = originalLoadChapter.call(this, chapterId, updateHistory);

                    // Add visual enhancements after a short delay (allow DOM to settle)
                    setTimeout(() => {
                        VisualEnhancements.enhanceChapter(chapterId);
                    }, 150);

                    return result;
                };
            }
        },

        enhanceChapter: function (chapterId) {
            switch (chapterId) {
                case 'ch3':
                    this.addTriad();
                    this.addChainOfInfection();
                    break;
                case 'ch6':
                    this.addIncubationLatencyVisual();
                    break;
                case 'ch7':
                    this.addInvestigationRoadmap();
                    break;
                case 'ch10':
                    this.addEpiCurveComparison();
                    break;
                case 'ch11':
                    this.add2x2TableTemplate();
                    break;
                case 'ch12':
                    this.addStudyDesignTree();
                    break;
                case 'ch16':
                    this.addStopTheOutbreakGame();
                    break;
            }
        },

        // Visual 0: Investigation Roadmap (Chapter 7)
        addInvestigationRoadmap: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-investigation-roadmap')) return;

            // Find the header "The 13 Steps (In Order)"
            const headers = container.querySelectorAll('h2');
            const targetHeader = Array.from(headers).find(h => h.textContent.includes('13 Steps') || h.textContent.includes('In Order'));

            // Should replace the existing placeholder div or insert after header if div is empty
            // In the content file, there is a hardcoded SVG. We will target it to REPLACE it or ENHANCE it.
            // Best approach for "Refactor": If the hardcoded SVG exists, remove it or assume it was removed from content.js
            // But to be safe and "Enhance", let's look for a marker. 
            // In a true refactor, we would delete the SVG from content.js. 
            // For now, let's look for the header and insert our dynamic one, assuming we will clean content.js next.

            if (!targetHeader) return;

            // Check if there's already an SVG immediately after?
            const nextEl = targetHeader.nextElementSibling;
            if (nextEl && nextEl.querySelector('svg')) {
                // It's likely the hardcoded one. We can replace it or leave it. 
                // If the goal is to centralize, we should replace it.
                nextEl.remove();
            }

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-investigation-roadmap';
            visualDiv.style.cssText = 'text-align: center; margin: 2rem 0;';
            visualDiv.innerHTML = `
                <svg width="600" height="900" viewBox="0 0 400 900" class="responsive-svg" role="img" aria-label="13-Step Outbreak Investigation Roadmap Flowchart" style="max-width: 100%; height: auto; background: #fafafa; border-radius: 8px; border: 1px solid #eee;">
                    <title>13-Step Outbreak Investigation Roadmap</title>
                    <defs>
                         <marker id="arrowdown" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                        </marker>
                    </defs>

                    <!-- Step 1 -->
                    <rect x="50" y="20" width="300" height="40" rx="5" fill="#eef2ff" stroke="var(--navy-primary)" stroke-width="4"/>
                    <text x="200" y="47" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">1. Prepare for Fieldwork</text>
                    <line x1="200" y1="60" x2="200" y2="80" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 2 -->
                    <rect x="50" y="80" width="300" height="40" rx="5" fill="#eef2ff" stroke="var(--navy-primary)" stroke-width="4"/>
                    <text x="200" y="107" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">2. Verify Diagnosis</text>
                    <line x1="200" y1="120" x2="200" y2="140" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 3 -->
                    <rect x="50" y="140" width="300" height="40" rx="5" fill="#eef2ff" stroke="var(--navy-primary)" stroke-width="4"/>
                    <text x="200" y="167" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">3. Establish Existence</text>
                    <line x1="200" y1="180" x2="200" y2="200" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 4 -->
                    <rect x="50" y="200" width="300" height="40" rx="5" fill="#e0f7fa" stroke="var(--teal-accent)" stroke-width="4"/>
                    <text x="200" y="227" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">4. Defined Case</text>
                    <line x1="200" y1="240" x2="200" y2="260" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 5 -->
                    <rect x="50" y="260" width="300" height="40" rx="5" fill="#e0f7fa" stroke="var(--teal-accent)" stroke-width="4"/>
                    <text x="200" y="287" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">5. Find Cases & Record</text>
                    <line x1="200" y1="300" x2="200" y2="320" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 6 -->
                    <rect x="50" y="320" width="300" height="40" rx="5" fill="#e0f7fa" stroke="var(--teal-accent)" stroke-width="4"/>
                    <text x="200" y="347" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">6. Descriptive Epi (PPT)</text>
                    <line x1="200" y1="360" x2="200" y2="380" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 7 -->
                    <rect x="50" y="380" width="300" height="40" rx="5" fill="#fff3e0" stroke="#f59e0b" stroke-width="4"/>
                    <text x="200" y="407" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">7. Develop Hypotheses</text>
                    <line x1="200" y1="420" x2="200" y2="440" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 8 -->
                    <rect x="50" y="440" width="300" height="40" rx="5" fill="#fff3e0" stroke="#f59e0b" stroke-width="4"/>
                    <text x="200" y="467" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">8. Evaluate Hypotheses</text>
                    <line x1="200" y1="480" x2="200" y2="500" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 9 -->
                    <rect x="50" y="500" width="300" height="40" rx="5" fill="#fff3e0" stroke="#f59e0b" stroke-width="4"/>
                    <text x="200" y="527" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">9. Reconsider / Refine</text>
                    <line x1="200" y1="540" x2="200" y2="560" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 10 -->
                    <rect x="50" y="560" width="300" height="40" rx="5" fill="#f3e5f5" stroke="#9c27b0" stroke-width="4"/>
                    <text x="200" y="587" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">10. Compare with Lab/Env</text>
                    <line x1="200" y1="600" x2="200" y2="620" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 11 -->
                    <rect x="50" y="620" width="300" height="40" rx="5" fill="#fce4ec" stroke="#e91e63" stroke-width="4"/>
                    <text x="200" y="647" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">11. Implement Control</text>
                    <line x1="200" y1="660" x2="200" y2="680" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 12 -->
                    <rect x="50" y="680" width="300" height="40" rx="5" fill="#fce4ec" stroke="#e91e63" stroke-width="4"/>
                    <text x="200" y="707" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">12. Maintain Surveillance</text>
                    <line x1="200" y1="720" x2="200" y2="740" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                     <!-- Step 13 -->
                    <rect x="50" y="740" width="300" height="40" rx="5" fill="#fce4ec" stroke="#e91e63" stroke-width="4"/>
                    <text x="200" y="767" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">13. Communicate Findings</text>
                    
                    <!-- Side note for Control Measures -->
                    <path d="M370,640 Q390,640 390,400 Q390,100 360,100" fill="none" stroke="#e91e63" stroke-width="4" stroke-dasharray="8,5"/>
                    <text x="395" y="380" transform="rotate(90 395,380)" font-size="13" font-weight="bold" fill="#e91e63">Control can happen ANY time!</text>
                </svg>
            `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 6: Epidemiologic Triad (Chapter 3)
        addTriad: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-triad')) return;

            // Find header "The Epidemiologic Triad"
            const headers = container.querySelectorAll('h2');
            const targetHeader = Array.from(headers).find(h => h.textContent.includes('Triad') || h.textContent.includes('Triangle'));

            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-triad';
            visualDiv.style.cssText = 'margin: 2rem 0; padding: 1rem; text-align:center;';

            // Dynamic Triad SVG
            visualDiv.innerHTML = `
                <div class="interactive-triad-container" style="max-width: 600px; margin: 0 auto; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 2px solid var(--navy-primary);">
                    <h3 style="color: var(--navy-primary); margin-bottom: 2rem; margin-top:0;">
                        <i class="ph-bold ph-triangle"></i> The Epidemiological Triad
                    </h3>
                    <p style="margin-bottom: 2rem; font-size: 0.9rem; color: #666;">Hover over each corner to see examples.</p>
                    
                    <svg width="100%" height="400" viewBox="0 0 500 400" class="responsive-svg" role="img" aria-label="Epidemiologic Triad">
                        <style>
                            .triad-node { cursor: pointer; transition: all 0.3s ease; }
                            .triad-node:hover { transform: scale(1.05); filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); }
                            .triad-node text { font-family: 'Space Grotesk', sans-serif; }
                            .triad-example { opacity: 0; transition: opacity 0.3s; pointer-events: none;}
                            .triad-node:hover ~ .triad-info .triad-default { opacity: 0; }
                            #node-agent:hover ~ .triad-info #info-agent { opacity: 1; }
                            #node-host:hover ~ .triad-info #info-host { opacity: 1; }
                            #node-env:hover ~ .triad-info #info-env { opacity: 1; }
                            #node-vector:hover ~ .triad-info #info-vector { opacity: 1; }
                        </style>

                        <defs>
                             <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                             </filter>
                        </defs>
                        
                        <!-- Triangle Lines -->
                        <path d="M250,50 L50,350 L450,350 Z" fill="none" stroke="#ddd" stroke-width="4" stroke-dasharray="8,4" />
                        
                        <!-- Center: Vector (Optional but often included) -->
                        <g id="node-vector" class="triad-node">
                            <circle cx="250" cy="230" r="40" fill="#f3e8ff" stroke="#9333ea" stroke-width="3" />
                            <text x="250" y="235" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="12">VECTOR</text>
                        </g>

                        <!-- Top: Agent -->
                        <g id="node-agent" class="triad-node" transform-origin="250 50">
                            <circle cx="250" cy="50" r="50" fill="#fee2e2" stroke="#dc2626" stroke-width="4" />
                            <text x="250" y="55" text-anchor="middle" font-weight="bold" fill="#991b1b" font-size="14">AGENT</text>
                            <text x="250" y="75" text-anchor="middle" font-size="10" fill="#991b1b" font-weight="bold">(The "What")</text>
                        </g>
                        
                        <!-- Left: Host -->
                        <g id="node-host" class="triad-node" transform-origin="50 350">
                            <circle cx="50" cy="350" r="50" fill="#dbeafe" stroke="#2563eb" stroke-width="4" />
                            <text x="50" y="355" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">HOST</text>
                            <text x="50" y="375" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="bold">(The "Who")</text>
                        </g>

                        <!-- Right: Environment -->
                        <g id="node-env" class="triad-node" transform-origin="450 350">
                            <circle cx="450" cy="350" r="50" fill="#d1fae5" stroke="#059669" stroke-width="4" />
                            <text x="450" y="355" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="12">ENVIRONMENT</text>
                            <text x="450" y="375" text-anchor="middle" font-size="10" fill="#065f46" font-weight="bold">(The "Where")</text>
                        </g>

                        <!-- Info Area (Center Bottom or Overlay) -->
                        <g class="triad-info" transform="translate(250, 430)"> <!-- Actually outside viewbox? No, expand viewbox or put text inside -->
                             <!-- We'll put text in the middle area or below -->
                        </g>
                    </svg>
                    
                    <div class="triad-info" style="min-height: 80px; margin-top: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px; border-left: 4px solid var(--navy-primary);">
                        <div id="info-agent" class="triad-example" style="display:none;">
                            <strong><i class="ph-bold ph-bug"></i> Agent Examples:</strong> Bacteria, Virus, Fungi, Parasite. <br><em>Key Feature: Virulence, Infectivity.</em>
                        </div>
                        <div id="info-host" class="triad-example" style="display:none;">
                            <strong><i class="ph-bold ph-user"></i> Host Examples:</strong> Age, Sex, Genetics, Immune Status. <br><em>Key Question: Who is susceptible?</em>
                        </div>
                        <div id="info-env" class="triad-example" style="display:none;">
                            <strong><i class="ph-bold ph-plant"></i> Environment Examples:</strong> Crowding, Sanitation, Temperature. <br><em>Key Question: What creates the opportunity?</em>
                        </div>
                        <div id="info-vector" class="triad-example" style="display:none;">
                            <strong><i class="ph-bold ph-butterfly"></i> Vector Examples:</strong> Mosquitoes, Ticks, Fleas. <br><em>Role: The carrier (optional center of triad).</em>
                        </div>
                         <div class="triad-default">
                            <strong>Interactive Guide:</strong> Hover over a circle above to see details.
                        </div>
                    </div>
                    
                    <script>
                        // Simple script to handle hover if CSS fails or for better control
                        // (CSS solution used above for simplicity: adjacent sibling selector)
                        // But DOM structure is: SVG then DIV. SVG nodes hover cannot affect DIV easily without JS.
                        // So let's use a tiny inline script to handle mouseover.
                        
                        document.querySelectorAll('.triad-node').forEach(node => {
                            node.addEventListener('mouseenter', function() {
                                document.querySelectorAll('.triad-example').forEach(el => el.style.display = 'none');
                                document.querySelector('.triad-default').style.display = 'none';
                                const id = this.id.replace('node-', 'info-');
                                document.getElementById(id).style.display = 'block';
                            });
                            node.addEventListener('mouseleave', function() {
                                // Optional: reset on leave? Or keep last selection?
                                // Let's keep last selection or revert to default?
                                // Revert looks cleaner.
                                document.querySelectorAll('.triad-example').forEach(el => el.style.display = 'none');
                                document.querySelector('.triad-default').style.display = 'block';
                            });
                        });
                    </script>
                </div>
             `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);

            // Re-bind the script because innerHTML tags don't run automatically
            setTimeout(() => {
                const container = document.getElementById('visual-triad');
                if (!container) return;
                const nodes = container.querySelectorAll('.triad-node');
                const infos = container.querySelectorAll('.triad-example');
                const def = container.querySelector('.triad-default');

                nodes.forEach(node => {
                    node.addEventListener('mouseenter', function () {
                        infos.forEach(el => el.style.display = 'none');
                        if (def) def.style.display = 'none';
                        const id = this.id.replace('node-', 'info-');
                        const target = container.querySelector('#' + id);
                        if (target) target.style.display = 'block';
                    });
                    node.addEventListener('mouseleave', function () {
                        infos.forEach(el => el.style.display = 'none');
                        if (def) def.style.display = 'block';
                    });
                });
            }, 100);
        },

        // Visual 5: Chain of Infection (Chapter 3)
        addChainOfInfection: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-chain-infection')) return;

            // Find header with "Chain of Infection"
            const headers = container.querySelectorAll('h2, h3');
            const targetHeader = Array.from(headers).find(h => h.textContent.includes('Chain') || h.textContent.includes('Infection'));

            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-chain-infection';
            visualDiv.style.cssText = 'margin: 2rem 0; padding: 1rem;';
            visualDiv.innerHTML = `
                <div style="background: white; border: 3px solid var(--navy-primary); border-radius: 50%; padding: 2rem; max-width: 600px; margin: 0 auto; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                    <h3 style="text-align: center; color: var(--navy-primary); margin-top: 0; margin-bottom: 2rem;">
                        <i class="ph-bold ph-link"></i> The Chain of Infection
                    </h3>
                    <svg width="100%" height="450" viewBox="0 0 500 500" class="responsive-svg" role="img" aria-label="The Chain of Infection: A 6-link circular diagram showing Pathogen, Reservoir, Exit, Transmission, Entry, and Host">
                        <title>The Chain of Infection Diagram</title>
                        <defs>
                            <marker id="arrowChain" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                            </marker>
                        </defs>
                        
                        <!-- Center: Germ -->
                        <circle cx="250" cy="250" r="60" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
                        <text x="250" y="245" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="14">PATHOGEN</text>
                        <text x="250" y="265" text-anchor="middle" font-size="11" fill="#b45309">(Agent)</text>

                        <!-- Link 1: Reservoir (Top) -->
                        <circle cx="250" cy="80" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="250" y="75" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">1. RESERVOIR</text>
                        <text x="250" y="90" text-anchor="middle" font-size="10" fill="#0369a1">Where it lives</text>
                        
                        <!-- Arrow 1 -> 2 -->
                        <path d="M295,95 Q340,110 370,140" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Link 2: Portal of Exit (Top Right) -->
                        <circle cx="410" cy="180" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="410" y="175" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">2. EXIT</text>
                        <text x="410" y="190" text-anchor="middle" font-size="10" fill="#0369a1">How it leaves</text>

                         <!-- Arrow 2 -> 3 -->
                        <path d="M410,230 Q400,280 370,320" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Link 3: Mode of Transmission (Bottom Right) -->
                        <circle cx="340" cy="380" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="340" y="375" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">3. TRANSMIT</text>
                        <text x="340" y="390" text-anchor="middle" font-size="10" fill="#0369a1">How it moves</text>
                        
                         <!-- Arrow 3 -> 4 -->
                        <path d="M290,390 Q250,400 210,390" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Link 4: Portal of Entry (Bottom Left) -->
                        <circle cx="160" cy="380" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="160" y="375" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">4. ENTRY</text>
                        <text x="160" y="390" text-anchor="middle" font-size="10" fill="#0369a1">How it gets in</text>
                        
                         <!-- Arrow 4 -> 5 -->
                        <path d="M120,350 Q100,300 100,240" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Link 5: Susceptible Host (Top Left) -->
                        <circle cx="90" cy="180" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="90" y="175" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">5. HOST</text>
                        <text x="90" y="190" text-anchor="middle" font-size="10" fill="#0369a1">Next victim</text>
                        
                        <!-- Arrow 5 -> 1 -->
                        <path d="M130,150 Q170,110 210,95" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Breaking the Chain Labels -->
                        <rect x="235" y="130" width="30" height="30" fill="white" stroke="#ef4444" stroke-width="2" transform="rotate(45 250 145)"/>
                        <text x="250" y="150" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">X</text>
                        
                        <rect x="360" y="270" width="30" height="30" fill="white" stroke="#ef4444" stroke-width="2" transform="rotate(45 375 285)"/>
                        <text x="375" y="290" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">X</text>
                        
                        <rect x="130" y="270" width="30" height="30" fill="white" stroke="#ef4444" stroke-width="2" transform="rotate(45 145 285)"/>
                        <text x="145" y="290" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">X</text>
                    </svg>
                    <div style="text-align: center; margin-top: 1rem;">
                        <span style="background: #fee2e2; color: #b91c1c; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.9rem; font-weight: bold;">
                            <i class="ph-bold ph-scissors"></i> BREAK THE CHAIN to stop the outbreak!
                        </span>
                    </div>
                </div>
            `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 1: Incubation vs Latency Timeline (Chapter 6)
        addIncubationLatencyVisual: function () {
            const container = document.getElementById('content-container');
            if (!container) return;

            // Find the table and insert visual after it
            const tables = container.querySelectorAll('table');
            if (tables.length === 0) return;

            const targetTable = Array.from(tables).find(t =>
                t.textContent.includes('Incubation Period') &&
                t.textContent.includes('Latency Period')
            );

            if (!targetTable || document.getElementById('visual-incubation-latency')) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-incubation-latency';
            visualDiv.style.cssText = 'text-align: center; margin: 2rem 0;';
            visualDiv.innerHTML = `
                <svg width="500" height="280" viewBox="0 0 500 280" class="responsive-svg" role="img" aria-label="Timeline comparing Incubation Period (days) versus Latency Period (years)" style="max-width: 100%; height: auto; background: white; border: 2px solid var(--navy-primary); border-radius: 8px; padding: 1rem;">
                    <title>Incubation vs Latency Timeline</title>
                    <text x="250" y="25" text-anchor="middle" font-weight="bold" font-size="16" fill="var(--navy-primary)">Incubation vs Latency</text>
                    
                    <!-- Incubation Period (Top) -->
                    <text x="20" y="55" font-weight="bold" font-size="13" fill="#c2410c">INCUBATION (Infectious)</text>
                    
                    <defs>
                        <marker id="arrowIncub" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#c2410c" />
                        </marker>
                        <marker id="arrowLat" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#a16207" />
                        </marker>
                    </defs>
                    
                    <line x1="40" y1="75" x2="420" y2="75" stroke="#c2410c" stroke-width="3" marker-end="url(#arrowIncub)"/>
                    <circle cx="40" cy="75" r="6" fill="#ef4444"/>
                    <text x="40" y="95" text-anchor="middle" font-size="11" font-weight="bold">Exposure</text>
                    <rect x="40" y="67" width="180" height="16" fill="#fef3c7" opacity="0.6"/>
                    <text x="130" y="62" text-anchor="middle" font-size="10" fill="#92400e">Incubation</text>
                    <circle cx="220" cy="75" r="6" fill="#22c55e"/>
                    <text x="220" y="95" text-anchor="middle" font-size="11" font-weight="bold">Symptoms</text>
                    <text x="320" y="72" font-size="12" fill="#666">Ex: Flu (1-4 days)</text>
                    
                    <!-- Latency Period (Bottom) -->
                    <text x="20" y="150" font-weight="bold" font-size="13" fill="#a16207">LATENCY (Chronic)</text>
                    <line x1="40" y1="170" x2="420" y2="170" stroke="#a16207" stroke-width="3" marker-end="url(#arrowLat)"/>
                    <circle cx="40" cy="170" r="6" fill="#ef4444"/>
                    <text x="40" y="190" text-anchor="middle" font-size="11" font-weight="bold">Exposure</text>
                    <rect x="40" y="162" width="310" height="16" fill="#fed7aa" opacity="0.6"/>
                    <text x="195" y="157" text-anchor="middle" font-size="10" fill="#92400e">Latency (Years)</text>
                    <circle cx="350" cy="170" r="6" fill="#3b82f6"/>
                    <text x="350" y="190" text-anchor="middle" font-size="11" font-weight="bold">Detectable</text>
                    <text x="260" y="220" font-size="12" fill="#666">Ex: Cancer (20+ years)</text>
                </svg>
                <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem; font-style: italic;"><strong>Key:</strong> Incubation = <em>days</em>; Latency = <em>years</em>.</p>
            `;

            // Insert after the table's parent container
            const tableContainer = targetTable.closest('.table-container') || targetTable.parentElement;
            tableContainer.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 2: Epi Curve Pattern Comparison (Chapter 10)
        addEpiCurveComparison: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-epi-curves')) return;

            // Find h2 with "Curve Logic" or similar
            const headers = container.querySelectorAll('h2');
            const targetHeader = Array.from(headers).find(h => h.textContent.includes('Curve') || h.textContent.includes('10.'));
            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-epi-curves';
            visualDiv.style.cssText = 'margin: 2rem 0; padding: 1.5rem; background: #f8fafc; border: 2px solid var(--navy-primary); border-radius: 12px;';
            visualDiv.innerHTML = `
                <h3 style="text-align: center; color: var(--navy-primary); margin-bottom: 1.5rem;">
                    <i class="ph-bold ph-chart-line"></i> Epi Curve Pattern Recognition Guide
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    
                    <!-- Point Source -->
                    <div class="neo-card" style="padding: 1rem;">
                        <h4 style="color: #dc2626; margin-top: 0;">Point Source</h4>
                        <svg width="100%" height="120" viewBox="0 0 200 120" role="img" aria-label="Point Source Curve: Single peak, rapid decline">
                            <path d="M10,100 L40,100 L60,40 L80,30 L100,20 L120,40 L140,70 L160,90 L190,100" 
                                  fill="none" stroke="#dc2626" stroke-width="3"/>
                            <text x="100" y="115" text-anchor="middle" font-size="11" fill="#666">Time →</text>
                        </svg>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0 0 0;"><strong>Shape:</strong> Sharp peak, rapid decline</p>
                        <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0;"><em>Example: Wedding buffet outbreak</em></p>
                    </div>
                    
                    <!-- Continuous Source -->
                    <div class="neo-card" style="padding: 1rem;">
                        <h4 style="color: #ea580c; margin-top: 0;">Continuous Source</h4>
                        <svg width="100%" height="120" viewBox="0 0 200 120" role="img" aria-label="Continuous Source Curve: Plateau shape">
                            <rect x="40" y="40" width="120" height="45" fill="#fed7aa" opacity="0.6"/>
                            <path d="M10,100 L40,45 L160,45 L190,100" 
                                  fill="none" stroke="#ea580c" stroke-width="3"/>
                            <text x="100" y="115" text-anchor="middle" font-size="11" fill="#666">Time →</text>
                        </svg>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0 0 0;"><strong>Shape:</strong> Plateau</p>
                        <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0;"><em>Example: Contaminated well</em></p>
                    </div>
                    
                    <!-- Propagated -->
                    <div class="neo-card" style="padding: 1rem;">
                        <h4 style="color: #16a34a; margin-top: 0;">Propagated</h4>
                        <svg width="100%" height="120" viewBox="0 0 200 120" role="img" aria-label="Propagated Curve: Multiple progressive peaks">
                            <path d="M10,100 L30,80 L50,40 L70,70 L90,35 L110,60 L130,30 L150,55 L170,45 L190,65" 
                                  fill="none" stroke="#16a34a" stroke-width="3"/>
                            <text x="100" y="115" text-anchor="middle" font-size="11" fill="#666">Time →</text>
                        </svg>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0 0 0;"><strong>Shape:</strong> Successive peaks</p>
                        <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0;"><em>Example: Measles outbreak</em></p>
                    </div>
                    
                    <!-- Intermittent -->
                    <div class="neo-card" style="padding: 1rem;">
                        <h4 style="color: #7c3aed; margin-top: 0;">Intermittent</h4>
                        <svg width="100%" height="120" viewBox="0 0 200 120" role="img" aria-label="Intermittent Source Curve: Irregular spikes">
                            <path d="M10,100 L30,95 L50,40 L70,95 L90,94 L110,35 L130,96 L150,93 L170,45 L190,97" 
                                  fill="none" stroke="#7c3aed" stroke-width="3"/>
                            <text x="100" y="115" text-anchor="middle" font-size="11" fill="#666">Time →</text>
                        </svg>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0 0 0;"><strong>Shape:</strong> Irregular spikes</p>
                        <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0;"><em>Example: Weekend picnics</em></p>
                    </div>
                </div>
                <div class="study-tip" style="margin-top: 1rem; background: #fffbeb; border-left: 4px solid #f59e0b; padding: 1rem;">
                    <strong><i class="ph-bold ph-lightbulb"></i> Exam Tip:</strong> Look at the overall shape first. Point source = ONE peak. Propagated = MULTIPLE peaks. Continuous = PLATEAU.
                </div>
            `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 3: 2x2 Table Template (Chapter 11)
        add2x2TableTemplate: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-2x2-table')) return;

            // Find section about 2x2 tables or attack rates
            const headers = container.querySelectorAll('h2, h3');
            const targetHeader = Array.from(headers).find(h =>
                h.textContent.includes('2') && h.textContent.includes('2') ||
                h.textContent.includes('Attack') ||
                h.textContent.includes('Outbreak Math')
            );
            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-2x2-table';
            visualDiv.style.cssText = 'margin: 2rem 0; padding: 1.5rem; background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%); border: 3px solid var(--navy-primary); border-radius: 12px;';
            visualDiv.innerHTML = `
                <h3 style="text-align: center; color: var(--navy-primary); margin-bottom: 1rem;">
                    <i class="ph-bold ph-table"></i> The 2×2 Table: Foundation of Outbreak Math
                </h3>
                <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; align-items: center;">
                    <div>
                        <table style="border-collapse: collapse; font-size: 14px; background: white; box-shadow: 4px 4px 0 rgba(0,0,0,0.1);">
                            <tr>
                                <td style="border: 2px solid #333; padding: 0.5rem; background: #f3f4f6;"></td>
                                <td style="border: 2px solid #333; padding: 0.5rem; text-align: center; font-weight: bold; background: #dbeafe;">Exposed</td>
                                <td style="border: 2px solid #333; padding: 0.5rem; text-align: center; font-weight: bold; background: #dbeafe;">Not Exposed</td>
                                <td style="border: 2px solid #333; padding: 0.5rem; text-align: center; font-weight: bold; background: #f3f4f6;">Total</td>
                            </tr>
                            <tr>
                                <td style="border: 2px solid #333; padding: 0.5rem; font-weight: bold; background: #fee2e2;">Ill</td>
                                <td style="border: 2px solid #333; padding: 1.5rem; text-align: center; font-size: 18px; font-weight: bold; background: #fef3c7;">a</td>
                                <td style="border: 2px solid #333; padding: 1.5rem; text-align: center; font-size: 18px; font-weight: bold; background: #fef3c7;">b</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #f3f4f6;">a+b</td>
                            </tr>
                            <tr>
                                <td style="border: 2px solid #333; padding: 0.5rem; font-weight: bold; background: #d1fae5;">Not Ill</td>
                                <td style="border: 2px solid #333; padding: 1.5rem; text-align: center; font-size: 18px; font-weight: bold; background: #e0f2fe;">c</td>
                                <td style="border: 2px solid #333; padding: 1.5rem; text-align: center; font-size: 18px; font-weight: bold; background: #e0f2fe;">d</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #f3f4f6;">c+d</td>
                            </tr>
                            <tr>
                                <td style="border: 2px solid #333; padding: 0.5rem; font-weight: bold; background: #f3f4f6;">Total</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #f3f4f6;">a+c</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #f3f4f6;">b+d</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #e5e7eb;">N</td>
                            </tr>
                        </table>
                    </div>
                    <div style="max-width: 350px;">
                        <div class="formula-box" style="margin-bottom: 1rem; padding: 1rem; background: white; border: 2px solid #10b981; border-radius: 8px;">
                            <strong style="color: #10b981;">Attack Rate (Exposed):</strong>
                            <p style="font-size: 1.2rem; margin: 0.5rem 0;">AR<sub>exp</sub> = a / (a+c)</p>
                        </div>
                        <div class="formula-box" style="margin-bottom: 1rem; padding: 1rem; background: white; border: 2px solid #3b82f6; border-radius: 8px;">
                            <strong style="color: #3b82f6;">Risk Ratio:</strong>
                            <p style="font-size: 1.2rem; margin: 0.5rem 0;">RR = [a/(a+c)] / [b/(b+d)]</p>
                        </div>
                        <div class="formula-box" style="padding: 1rem; background: white; border: 2px solid #8b5cf6; border-radius: 8px;">
                            <strong style="color: #8b5cf6;">Odds Ratio:</strong>
                            <p style="font-size: 1.2rem; margin: 0.5rem 0;">OR = (a×d) / (b×c)</p>
                        </div>
                    </div>
                </div>
                <div class="exam-trap" style="margin-top: 1rem; background: #fef2f2; border-left: 4px solid #dc2626; padding: 1rem;">
                    <strong><i class="ph-bold ph-warning"></i> Common Mistake:</strong> Students often swap rows/columns. Remember: <strong>EXPOSURE goes on TOP</strong>, DISEASE goes on the SIDE.
                </div>
            `;

            // Insert near the beginning of the chapter
            const firstParagraph = container.querySelector('p.lead') || container.querySelector('p');
            if (firstParagraph) {
                firstParagraph.insertAdjacentElement('afterend', visualDiv);
            }
        },

        // Visual 4: Study Design Decision Tree (Chapter 12)
        addStudyDesignTree: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-study-tree')) return;

            const headers = container.querySelectorAll('h2');
            const targetHeader = Array.from(headers).find(h =>
                h.textContent.includes('Study') || h.textContent.includes('Design') || h.textContent.includes('12.')
            );
            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-study-tree';
            visualDiv.style.cssText = 'margin: 2rem 0;';
            visualDiv.innerHTML = `
                <div style="background: linear-gradient(to bottom right, #eff6ff, #dbeafe); border: 3px solid var(--navy-primary); border-radius: 12px; padding: 2rem;">
                    <h3 style="text-align: center; color: var(--navy-primary); margin-bottom: 1.5rem;">
                        <i class="ph-bold ph-tree-structure"></i> Study Design Selection Flowchart
                    </h3>
                    <svg width="100%" height="500" viewBox="0 0 600 500" style="max-width: 100%; height: auto;" role="img" aria-label="Study Design Decision Tree Flowchart">
                        <title>Study Design Selection Flowchart</title>
                        <defs>
                            <marker id="arrowTree" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                            </marker>
                        </defs>
                        
                        <!-- Start -->
                        <rect x="200" y="20" width="200" height="50" rx="25" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
                        <text x="300" y="50" text-anchor="middle" font-weight="bold" fill="white" font-size="16">START</text>
                        
                        <!-- Question 1: Outbreak Now? -->
                        <line x1="300" y1="70" x2="300" y2="100" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <rect x="150" y="100" width="300" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
                        <text x="300" y="125" text-anchor="middle" font-weight="bold" font-size="14">Is there an outbreak</text>
                        <text x="300" y="145" text-anchor="middle" font-weight="bold" font-size="14">happening NOW?</text>
                        
                        <!-- Yes Branch -->
                        <line x1="250" y1="160" x2="150" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="180" y="185" font-size="12" font-weight="bold" fill="#16a34a">YES</text>
                        
                        <!-- Question 2: Rare Disease? -->
                        <rect x="20" y="200" width="260" height="60" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                        <text x="150" y="225" text-anchor="middle" font-weight="bold" font-size="14">Is the disease</text>
                        <text x="150" y="245" text-anchor="middle" font-weight="bold" font-size="14">RARE?</text>
                        
                        <!-- Case-Control -->
                        <line x1="80" y1="260" x2="80" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="50" y="285" font-size="11" font-weight="bold" fill="#16a34a">YES</text>
                        <rect x="10" y="300" width="140" height="80" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="3"/>
                        <text x="80" y="330" text-anchor="middle" font-weight="bold" font-size="13" fill="#065f46">CASE-CONTROL</text>
                        <text x="80" y="350" text-anchor="middle" font-size="10">Start with cases,</text>
                        <text x="80" y="365" text-anchor="middle" font-size="10">find controls</text>
                        
                        <!-- Cohort -->
                        <line x1="220" y1="260" x2="220" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="240" y="285" font-size="11" font-weight="bold" fill="#dc2626">NO</text>
                        <rect x="165" y="300" width="140" height="80" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="235" y="330" text-anchor="middle" font-weight="bold" font-size="13" fill="#075985">COHORT</text>
                        <text x="235" y="350" text-anchor="middle" font-size="10">Follow exposed</text>
                        <text x="235" y="365" text-anchor="middle" font-size="10">and unexposed</text>
                        
                        <!-- No Branch (No Outbreak) -->
                        <line x1="350" y1="160" x2="450" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="420" y="185" font-size="12" font-weight="bold" fill="#dc2626">NO</text>
                        
                        <!-- Cross-Sectional -->
                        <rect x="320" y="200" width="260" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
                        <text x="450" y="225" text-anchor="middle" font-weight="bold" font-size="14">Need quick snapshot?</text>
                        
                        <line x1="380" y1="260" x2="380" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="350" y="285" font-size="11" font-weight="bold" fill="#16a34a">YES</text>
                        <rect x="320" y="300" width="140" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
                        <text x="390" y="330" text-anchor="middle" font-weight="bold" font-size="13" fill="#78350f">CROSS-SECT.</text>
                        <text x="390" y="350" text-anchor="middle" font-size="10">Survey at one</text>
                        <text x="390" y="365" text-anchor="middle" font-size="10">point in time</text>
                        
                        <line x1="520" y1="260" x2="520" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="540" y="285" font-size="11" font-weight="bold" fill="#dc2626">NO</text>
                        <rect x="470" y="300" width="120" height="80" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="3"/>
                        <text x="530" y="330" text-anchor="middle" font-weight="bold" font-size="13" fill="#3730a3">COHORT</text>
                        <text x="530" y="350" text-anchor="middle" font-size="10">Long-term</text>
                        <text x="530" y="365" text-anchor="middle" font-size="10">follow-up</text>
                        
                        <!-- Legend -->
                        <rect x="20" y="420" width="560" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
                        <text x="300" y="445" text-anchor="middle" font-weight="bold" font-size="14">Quick Reference</text>
                        <text x="150" y="465" text-anchor="middle" font-size="11"><tspan font-weight="bold">Outbreak + Rare:</tspan> Case-Control</text>
                        <text x="300" y="465" text-anchor="middle" font-size="11"><tspan font-weight="bold">Outbreak + Common:</tspan> Cohort</text>
                        <text x="450" y="465" text-anchor="middle" font-size="11"><tspan font-weight="bold">No Outbreak:</tspan> Cross-Sectional or Cohort</text>
                    </svg>
                </div>
                <div class="study-tip" style="margin-top: 1rem; background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem;">
                    <strong><i class="ph-bold ph-lightbulb"></i> Exam Strategy:</strong> In Division B, you'll mostly see <strong>Case-Control</strong> (for outbreaks of rare diseases like Salmonella) and <strong>Cohort</strong> (for common exposures like food at a picnic).
                </div>
            `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 7: Stop the Outbreak Mini-Game (Chapter 16)
        addStopTheOutbreakGame: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-outbreak-sim')) return;

            const headers = container.querySelectorAll('h2, h3');
            // Look for "Control Measures" or similar
            const targetHeader = Array.from(headers).find(h =>
                h.textContent.includes('Control') || h.textContent.includes('Intervention') || h.textContent.includes('16.')
            );

            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-outbreak-sim';
            visualDiv.style.cssText = 'margin: 2rem 0;';

            visualDiv.innerHTML = `
                <div class="neo-card" style="border: 3px solid var(--navy-primary); padding: 0; overflow: hidden;">
                    <div style="background: var(--navy-primary); color: white; padding: 1rem; text-align: center;">
                        <h3 style="margin:0; color:white;"><i class="ph-fill ph-shield-check"></i> Simulation: Stop the Outbreak</h3>
                        <p style="margin: 0.5rem 0 0; opacity: 0.9;">Apply control measures to flatten the curve!</p>
                    </div>
                    
                    <div style="padding: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
                        <!-- Controls -->
                        <div>
                            <div class="sim-stat" style="margin-bottom: 1.5rem; text-align: center;">
                                <div style="font-size: 0.9rem; color: #666;">Effective R (Rt)</div>
                                <div id="sim-r-value" style="font-size: 2.5rem; font-weight: bold; color: #dc2626;">4.0</div>
                                <div id="sim-status" style="font-weight: bold; color: #dc2626;">EXPONENTIAL GROWTH</div>
                            </div>

                            <h4 style="border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">Select Interventions:</h4>
                            <div class="sim-controls">
                                <label class="neo-check" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                                    <input type="checkbox" data-reduce="0.5" onchange="window.VisualEnhancements.updateSim()">
                                    <span style="margin-left: 0.75rem; font-weight: bold;">Mask Mandate</span>
                                    <span style="margin-left: auto; color: #22c55e; font-size: 0.9rem;">-0.5 R</span>
                                </label>
                                <label class="neo-check" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                                    <input type="checkbox" data-reduce="1.2" onchange="window.VisualEnhancements.updateSim()">
                                    <span style="margin-left: 0.75rem; font-weight: bold;">School Closure</span>
                                    <span style="margin-left: auto; color: #22c55e; font-size: 0.9rem;">-1.2 R</span>
                                </label>
                                <label class="neo-check" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                                    <input type="checkbox" data-reduce="1.5" onchange="window.VisualEnhancements.updateSim()">
                                    <span style="margin-left: 0.75rem; font-weight: bold;">Mass Vaccination</span>
                                    <span style="margin-left: auto; color: #22c55e; font-size: 0.9rem;">-1.5 R</span>
                                </label>
                                <label class="neo-check" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                                    <input type="checkbox" data-reduce="0.3" onchange="window.VisualEnhancements.updateSim()">
                                    <span style="margin-left: 0.75rem; font-weight: bold;">Hand Washing</span>
                                    <span style="margin-left: auto; color: #22c55e; font-size: 0.9rem;">-0.3 R</span>
                                </label>
                            </div>
                        </div>

                        <!-- Graph -->
                        <div style="background: #f8fafc; border-radius: 12px; padding: 1rem; border: 1px solid #e2e8f0;">
                            <svg id="sim-graph" width="100%" height="250" viewBox="0 0 300 200" preserveAspectRatio="none">
                                <!-- Axes -->
                                <line x1="20" y1="180" x2="290" y2="180" stroke="#94a3b8" stroke-width="2" />
                                <line x1="20" y1="180" x2="20" y2="20" stroke="#94a3b8" stroke-width="2" />
                                <text x="150" y="195" text-anchor="middle" font-size="10" fill="#64748b">Time (Weeks)</text>
                                <text x="10" y="100" text-anchor="middle" transform="rotate(-90 10 100)" font-size="10" fill="#64748b">Cases</text>
                                
                                <!-- Baseline Curve (Ghost) -->
                                <path d="M20,180 Q100,20 180,180" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4" />
                                <text x="185" y="175" font-size="9" fill="#94a3b8">Uncontrolled</text>

                                <!-- Active Curve -->
                                <path id="sim-curve" d="M20,180 Q100,20 180,180" fill="rgba(220, 38, 38, 0.2)" stroke="#dc2626" stroke-width="3" />
                                
                                <!-- Threshold Line -->
                                <line x1="20" y1="100" x2="290" y2="100" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />
                                <text x="290" y="95" text-anchor="end" font-size="9" fill="#ef4444">Hospital Capacity</text>
                            </svg>
                        </div>
                    </div>
                </div>
             `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);

            // Attach Logic
            this.updateSim = function () {
                const inputs = document.querySelectorAll('#visual-outbreak-sim input[type="checkbox"]');
                let R = 4.0; // Base R0
                inputs.forEach(input => {
                    if (input.checked) R -= parseFloat(input.dataset.reduce);
                });

                if (R < 0.5) R = 0.5; // Min floor

                // Update Display
                const rDisplay = document.getElementById('sim-r-value');
                const status = document.getElementById('sim-status');
                const curve = document.getElementById('sim-curve');

                if (!rDisplay) return;

                rDisplay.textContent = R.toFixed(1);

                if (R < 1.0) {
                    rDisplay.style.color = '#16a34a'; // Green
                    status.textContent = "OUTBREAK CONTROLLED";
                    status.style.color = '#16a34a';
                    curve.setAttribute('stroke', '#16a34a');
                    curve.setAttribute('fill', 'rgba(22, 163, 74, 0.2)');
                } else if (R < 2.0) {
                    rDisplay.style.color = '#ea580c'; // Orange
                    status.textContent = "SLOW GROWTH";
                    status.style.color = '#ea580c';
                    curve.setAttribute('stroke', '#ea580c');
                    curve.setAttribute('fill', 'rgba(234, 88, 12, 0.2)');
                } else {
                    rDisplay.style.color = '#dc2626'; // Red
                    status.textContent = "EXPONENTIAL GROWTH";
                    status.style.color = '#dc2626';
                    curve.setAttribute('stroke', '#dc2626');
                    curve.setAttribute('fill', 'rgba(220, 38, 38, 0.2)');
                }

                // Update Curve Shape
                // Simple quadratic bezier control point manipulation based on R
                // Base (R=4) peak at y=20 (high). End at 180 (zero).
                // Capacity line is y=100.
                // Start is (20, 180). End is roughly (200, 180).
                // Control Point X = 110. Control point Y varies.
                // y=180 is baseline. y=20 is max height.

                // Formula: PeakHeight = proportional to R.
                // R=4 -> Peak is high (y=20). Height = 160px.
                // R=1 -> Peak should be low (steady state or slight bump). 
                // R<1 -> Peak immediately drops.

                // Simple viz hack:
                // Y_control = 180 - ( (R / 4.0) * 160 * 1.5 )
                // The *1.5 accentuates the height difference.

                let heightFactor = R / 4.0;
                let peakY = 180 - (heightFactor * 160);
                if (peakY < 10) peakY = 10;
                if (peakY > 175) peakY = 175; // Even R=0.5 has some cases usually

                // If R < 1, curve should arguably not even peak, just drop?
                // But for simplified "Curve Flattening" viz, just lowering the peak is enough to convey the concept.

                // Also extend the duration if flattened?
                // For simplicity, we keep width constant but lower height.

                curve.setAttribute('d', `M20,180 Q110,${peakY} 200,180`);
            };
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => VisualEnhancements.init());
    } else {
        VisualEnhancements.init();
    }

    // Expose to window for debugging
    window.VisualEnhancements = VisualEnhancements;

})();
