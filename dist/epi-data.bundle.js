/**
 * Epidemic Engine - Content Management System
 * Handles all 20 chapters with comprehensive content
 */

window.EPIDEMIC_ENGINE_CONTENT = {
    // Welcome/Home
    welcome: {
        title: "Welcome to The Epidemic Engine",
        content: `
            <div id="home-root" style="min-height: 50vh;">
                <div style="text-align: center; margin-top: 4rem;">
                    <div class="loader"></div>
                    <p style="color: #666; margin-top: 1rem;">Loading Dashboard...</p>
                </div>
            </div>
        `
    },

    // PART I: FOUNDATION & SURVEILLANCE
    ch1: {
        title: "Chapter 1: Core Frameworks & Mindset",
        difficulty: "B",
        content: `
            <h1>Chapter 1: Core Frameworks & Mindset</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 2px solid #166534; font-weight: bold; box-shadow: 0 2px 4px rgba(21, 128, 61, 0.2); opacity: 1;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Epidemiology is the study of the <strong>distribution</strong> and <strong>determinants</strong> of health-related states in populations, and the <strong>application</strong> of this study to control health problems.</p>

            <h2>1.1 The Three Pillars of Epidemiology</h2>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Study Guide Tip
                </div>
                <div class="callout-content">
                    <p><strong>Mnemonic: DDA</strong></p>
                    <ul>
                        <li><strong>D</strong>istribution - Who, where, when?</li>
                        <li><strong>D</strong>eterminants - Why and how?</li>
                        <li><strong>A</strong>pplication - What can we do?</li>
                    </ul>
                </div>
            </div>

            <h3>Distribution</h3>
            <p>Analyzing the <strong>frequency</strong> and <strong>pattern</strong> of health events by:</p>
            <ul>
                <li><strong>Person:</strong> Age, sex, occupation, socioeconomic status</li>
                <li><strong>Place:</strong> Geographic location, urban vs rural</li>
                <li><strong>Time:</strong> Seasonal patterns, trends, outbreaks (endemic vs epidemic)</li>
            </ul>

            <div class="neo-card small" style="background: #f1f5f9; margin: 1.5rem 0; border-left: 4px solid var(--navy-primary);">
                <h3><i class="ph-bold ph-chart-line-up"></i> Key Definitions: Disease Frequency</h3>
                <ul>
                    <li><strong>Endemic:</strong> Constant presence of a disease in a geographic area (e.g., Malaria in parts of Africa).</li>
                    <li><strong>Epidemic:</strong> Sudden increase in cases above what is normally expected (e.g., Zika outbreak).</li>
                    <li><strong>Pandemic:</strong> An epidemic that has spread over several countries or continents (e.g., COVID-19).</li>
                </ul>
            </div>

            <h3>Determinants</h3>
            <p>Identifying the <strong>causes</strong> and <strong>risk factors</strong> for health events:</p>
            <ul>
                <li>Biological factors (genetics, immunity)</li>
                <li>Behavioral factors (diet, exercise, smoking)</li>
                <li>Environmental factors (pollution, climate)</li>
                <li>Social factors (poverty, education, access to care)</li>
            </ul>
            <p><em>Example:</em> For SARS-CoV-2, determinants included crowding (Environment), age/comorbidities (Host), and the viral strain (Agent).</p>

            <h3>Application</h3>
            <p>Using epidemiological findings for <strong>public health action</strong>:</p>
            <ul>
                <li>Disease prevention programs</li>
                <li>Health policy development</li>
                <li>Resource allocation</li>
                <li>Outbreak control measures</li>
            </ul>
            <p><strong>Note:</strong> Public health surveillance systems (like PulseNet or NNDSS in the US) continuously collect this data to trigger early action—stay tuned for Chapter 7.</p>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Epidemiology vs. Etiology
                </div>
                <div class="callout-content">
                    <p><strong>COMMON MISTAKE:</strong> Confusing epidemiology with etiology.</p>
                    <ul>
                        <li><strong>Epidemiology:</strong> Broad study of disease patterns, causes, AND control in populations</li>
                        <li><strong>Etiology:</strong> Narrow focus on disease CAUSES only</li>
                    </ul>
                    <p><strong>Remember:</strong> Epidemiology includes etiology but is much broader!</p>
                </div>
            </div>

            <h2>1.2 Clinical Medicine vs. Public Health</h2>

            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 1rem; text-align: left;">Aspect</th>
                        <th style="padding: 1rem; text-align: left;">Clinical Medicine</th>
                        <th style="padding: 1rem; text-align: left;">Public Health/Epidemiology</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Focus</strong></td>
                        <td style="padding: 1rem;">Individual patient</td>
                        <td style="padding: 1rem;">Populations and communities</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Goal</strong></td>
                        <td style="padding: 1rem;">Diagnose and treat disease</td>
                        <td style="padding: 1rem;">Prevent disease and promote health</td>
                    </tr>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Approach</strong></td>
                        <td style="padding: 1rem;">One-on-one care</td>
                        <td style="padding: 1rem;">Population-level interventions</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Question</strong></td>
                        <td style="padding: 1rem;">"What's wrong with this patient?"</td>
                        <td style="padding: 1rem;">"Why is this disease occurring in this community?"</td>
                    </tr>
                </tbody>
            </table></div>

            <h2>1.3 Scope of Epidemiology: Not Just Outbreaks!</h2>
            <p>While this guide focuses on "Disease Detectives" (which often emphasizes infectious outbreaks), epidemiology covers <strong>ALL</strong> health-related states.</p>
            
            <div class="neo-card small" style="background: #f0f9ff; border-left: 4px solid var(--navy-primary); margin: 1.5rem 0;">
                <p><strong>Epidemiologists study:</strong></p>
                <ul>
                    <li><strong>Infectious Diseases:</strong> Flu, Salmonella, COVID-19.</li>
                    <li><strong>Chronic Diseases:</strong> Cancer, diabetes, heart disease.</li>
                    <li><strong>Environmental Health:</strong> Lead poisoning, asthma triggers.</li>
                    <li><strong>Injuries:</strong> Car crashes, workplace safety.</li>
                    <li><strong>Behaviors:</strong> Smoking, seatbelt use, diet.</li>
                </ul>
            </div>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-question"></i>
                    Scope Quiz
                </div>
                <div class="callout-content">
                    <p><strong>Question:</strong> True or False: Determining if seatbelt laws reduce traffic deaths is an epidemiological study.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: TRUE</strong></p>
                            <p>Epidemiology studies the <em>determinants</em> (seatbelt laws) of <em>health-related events</em> (deaths) in a <em>population</em>. It is not limited to germs!</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>1.4 Historical Foundations</h2>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: John Snow's Cholera Investigation (1854)
                </div>
                <div class="callout-content">
                    <p><strong>The Father of Modern Epidemiology</strong></p>
                    <p>John Snow investigated a cholera outbreak in London's Soho district:</p>
                    
                    <div style="text-align: center; margin: 1.5rem 0;">
                        <svg width="400" height="300" viewBox="0 0 400 300" class="responsive-svg" style="background: #fdfbf7; border: 2px solid #d1d5db; border-radius: 4px;">
                            <!-- Streets -->
                            <line x1="50" y1="150" x2="350" y2="150" stroke="#9ca3af" stroke-width="12"/> <!-- Broad Street -->
                            <text x="360" y="155" font-size="10" fill="#6b7280" font-weight="bold">BROAD ST</text>
                            
                            <line x1="200" y1="50" x2="200" y2="250" stroke="#9ca3af" stroke-width="8"/> <!-- Cross Street -->
                            <line x1="120" y1="50" x2="120" y2="250" stroke="#9ca3af" stroke-width="6"/> <!-- Side Street -->
                            <line x1="280" y1="50" x2="280" y2="250" stroke="#9ca3af" stroke-width="6"/> <!-- Side Street -->

                            <!-- Cases (Dots) clustered near pump -->
                            <g fill="#ef4444">
                                <circle cx="190" cy="140" r="3"/> <circle cx="210" cy="140" r="3"/>
                                <circle cx="195" cy="160" r="3"/> <circle cx="205" cy="160" r="3"/>
                                <circle cx="180" cy="145" r="3"/> <circle cx="220" cy="145" r="3"/>
                                <circle cx="190" cy="130" r="3"/> <circle cx="210" cy="170" r="3"/>
                                <circle cx="170" cy="150" r="3"/> <circle cx="230" cy="150" r="3"/>
                                <circle cx="200" cy="120" r="3"/> <circle cx="200" cy="180" r="3"/>
                                <!-- Sparse cases further away -->
                                <circle cx="100" cy="100" r="3"/> <circle cx="300" cy="200" r="3"/>
                                <circle cx="120" cy="220" r="3"/> <circle cx="280" cy="80" r="3"/>
                            </g>

                            <!-- The Pump -->
                            <rect x="195" y="145" width="10" height="10" fill="#000" stroke="#fff" stroke-width="1"/>
                            <text x="190" y="140" font-size="12" font-weight="900" fill="#000">X</text>
                            
                            <!-- Legend -->
                            <rect x="10" y="260" width="120" height="35" fill="white" stroke="#ccc"/>
                            <circle cx="20" cy="270" r="3" fill="#ef4444"/> <text x="30" y="274" font-size="10">Cholera Case</text>
                            <text x="20" y="288" font-size="10" font-weight="900">X</text> <text x="30" y="288" font-size="10">Water Pump</text>
                        </svg>
                        <p style="font-size: 0.85rem; color: #666; margin-top: 0.5rem;"><em>Visualizing the cluster around the Broad Street Pump</em></p>
                    </div>

                    <ul>
                        <li><strong>Method:</strong> Mapped cases on a street map</li>
                        <li><strong>Finding:</strong> Cases clustered around the Broad Street pump</li>
                        <li><strong>Action:</strong> Removed the pump handle</li>
                        <li><strong>Result:</strong> Outbreak ended</li>
                    </ul>
                    <p><strong>Key Insight:</strong> Snow controlled the outbreak <em>without knowing the causative agent</em> (cholera bacteria weren't discovered until 30 years later). This demonstrates epidemiology's power - you can prevent disease even without knowing the exact cause!</p>
                </div>
            </div>

            <h3>Other Pioneers</h3>
            <ul>
                <li><strong>Edward Jenner (1796):</strong> Developed smallpox vaccine</li>
                <li><strong>Ignaz Semmelweis (1840s):</strong> Hand washing to prevent childbed fever</li>
                <li><strong>William Farr:</strong> Developed vital statistics and disease classification</li>
                <li><strong>Robert Koch:</strong> Established germ theory and Koch's postulates</li>
            </ul>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Quick Check
                </div>
                <div class="callout-content">
                    <p><strong>Question:</strong> A researcher studies 500 diabetes patients to understand why some develop complications. Is this epidemiology?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: YES</strong></p>
                            <p><strong>Rationale:</strong> This is epidemiology because it's studying a <em>population</em> (500 patients) to understand <em>determinants</em> (why complications occur). Even though it's focused on one disease, it's population-level research, not individual patient care.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li>Epidemiology = Distribution + Determinants + Application</li>
                <li>Focus on populations, not individuals</li>
                <li>Can prevent disease without knowing exact causes</li>
                <li>Foundation for all public health action</li>
            </ul>

            <h2>5.5 International Health Regulations (IHR)</h2>
            <div class="callout-header" style="background: var(--gold-accent); color: var(--navy-primary);">
                <i class="ph ph-globe"></i> Global Surveillance
            </div>
            <p><strong>IHR (2005):</strong> A legally binding international law that helps countries work together to save lives while minimizing interference with international trade and travel.</p>
            
            <div class="neo-card" style="margin: 1.5rem 0;">
                <h3 style="margin-top:0; color:var(--navy-primary);">PHEIC (Public Health Emergency of International Concern)</h3>
                <p>The **WHO Director-General** declares a PHEIC if an event is:</p>
                <ol>
                    <li><strong>Extraordinary</strong></li>
                    <li><strong>A public health risk to other states</strong> (via international spread)</li>
                    <li><strong>Potentially requiring a coordinated international response</strong></li>
                </ol>
            </div>

            <div class="study-tip">
                <div class="callout-header"><i class="ph ph-lightbulb"></i> Mnemonic: IHR Decision Instrument</div>
                <div class="callout-content">
                    <p>To decide if you must notify the WHO, answer these 4 Questions:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>1. Is the public health impact serious?</li>
                        <li>2. Is the event unusual or unexpected?</li>
                        <li>3. Is there a significant risk of international spread?</li>
                        <li>4. Is there a significant risk of international travel/trade restrictions?</li>
                    </ul>
                    <p><strong>Rule:</strong> If "Yes" to **any 2** questions -> Notify WHO within 24 hours.</p>
                    <p><em>(Note: Smallpox, Polio, SARS, and new Influenza are ALWAYS reportable).</em></p>
                </div>
            </div>

            <h2>5.6 Exam Focus (National)</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Definition:</strong> Memorize "Distribution and Determinants".</li>
                        <li><strong>Population Focus:</strong> Epidemiology is about groups, not individuals.</li>
                        <li><strong>Application:</strong> The ultimate goal is control/prevention.</li>
                    </ul>
                </div>
            </div>
        `
    },

    // Placeholder for remaining chapters (to be populated)
    ch2: {
        title: "Chapter 2: History & Heroes",
        difficulty: "B",
        content: `
            <h1>Chapter 2: History & Heroes</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 2px solid #166534; font-weight: bold; box-shadow: 0 2px 4px rgba(21, 128, 61, 0.2); opacity: 1;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">The story of epidemiology is filled with inspiring investigators who saved millions of lives. Division B exams frequently test your knowledge of these pioneers and their methods.</p>

            <h2>2.1 The Pioneers</h2>
            <p>Commit these names and contributions to memory (Mnemonic: <strong>GFSJSNK</strong>). They built the foundation of modern public health.</p>
            
            <div class="timeline-container">
                <!-- Graunt -->
                <div class="timeline-item">
                    <div class="timeline-marker blue"></div>
                    <div class="timeline-content">
                        <div class="timeline-date" style="background: var(--accent-blue); color: black;">1662</div>
                        <div class="timeline-title">John Graunt</div>
                        <p style="margin:0; font-size:0.95rem;"><strong>"Father of Demography"</strong>. Analyzed Bills of Mortality in London to identify seasonal patterns in death. First to quantify health data.</p>
                    </div>
                </div>

                <!-- Jenner -->
                <div class="timeline-item">
                    <div class="timeline-marker green"></div>
                    <div class="timeline-content">
                        <div class="timeline-date" style="background: var(--accent-green); color: black;">1796</div>
                        <div class="timeline-title">Edward Jenner</div>
                        <p style="margin:0; font-size:0.95rem;">Developed the first <strong>Smallpox Vaccine</strong> using cowpox material. Proved protection could be induced.</p>
                    </div>
                </div>

                <!-- Farr -->
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">1800s</div>
                        <div class="timeline-title">William Farr</div>
                        <p style="margin:0; font-size:0.95rem;">Developed vital statistics systems and the concept of <strong>"Surveillance"</strong>. Standardized disease classification.</p>
                    </div>
                </div>

                <!-- Semmelweis -->
                <div class="timeline-item">
                    <div class="timeline-marker orange"></div>
                    <div class="timeline-content">
                        <div class="timeline-date" style="background: var(--accent-orange);">1840s</div>
                        <div class="timeline-title">Ignaz Semmelweis</div>
                        <p style="margin:0; font-size:0.95rem;"><strong>"The Savior of Mothers"</strong>. Proved handwashing reduced childbed fever in Vienna hospitals. Rejected by peers.</p>
                    </div>
                </div>

                <!-- Snow -->
                <div class="timeline-item">
                    <div class="timeline-marker purple"></div>
                    <div class="timeline-content">
                        <div class="timeline-date" style="background: var(--accent-purple);">1854</div>
                        <div class="timeline-title">John Snow</div>
                        <p style="margin:0; font-size:0.95rem;"><strong>"Father of Field Epidemiology"</strong>. Mapped cholera cases in Soho to the Broad Street Pump. Stopped outbreak without knowing the germ.</p>
                    </div>
                </div>

                 <!-- Nightingale -->
                 <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date" style="background: var(--pink-500);">1850s</div>
                        <div class="timeline-title">Florence Nightingale</div>
                        <p style="margin:0; font-size:0.95rem;">Pioneer of Nursing and <strong>Data Visualization</strong>. Used "Rose Diagrams" to show soldiers died from poor sanitation, not wounds.</p>
                    </div>
                </div>

                <!-- Koch -->
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date" style="background: #333;">1880s</div>
                        <div class="timeline-title">Robert Koch</div>
                        <p style="margin:0; font-size:0.95rem;">Validated <strong>Germ Theory</strong>. Developed "Koch's Postulates" to strictly link specific microbes to specific diseases (e.g., Anthrax, TB).</p>
                    </div>
                </div>
            </div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: John Snow's Method
                </div>
                <div class="callout-content">
                    <p><strong>He didn't know the germ!</strong></p>
                    <p>John Snow stopped the cholera outbreak by removing the pump handle <em>before</em> anyone knew bacteria caused it. He used <strong>observational epidemiology</strong> (mapping residence of cases) to find the risk factor.</p>
                </div>
            </div>

            <h2>2.2 Recent Outbreak Milestones</h2>
            <div class="timeline-container">
                 <!-- Legionnaires -->
                 <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">1976</div>
                        <div class="timeline-title">Legionnaires' Disease</div>
                        <p style="margin:0; font-size:0.95rem;">Philadelphia. Discovered in AC cooling towers. Classic <em>point source</em> investigation leading to new pathogen discovery.</p>
                    </div>
                </div>

                <!-- HIV -->
                <div class="timeline-item">
                     <div class="timeline-marker"></div>
                     <div class="timeline-content">
                         <div class="timeline-date">1981</div>
                         <div class="timeline-title">HIV/AIDS</div>
                         <p style="margin:0; font-size:0.95rem;">First recognized in MMWR as Pneumocystis pneumonia clusters in young men. Identifying a syndrome before the virus.</p>
                     </div>
                 </div>

                 <!-- SARS -->
                 <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">2003</div>
                        <div class="timeline-title">SARS</div>
                        <p style="margin:0; font-size:0.95rem;">First pandemic of 21st century. Highlighted global spread via air travel and "super-spreader" events.</p>
                    </div>
                </div>

                 <!-- H1N1 -->
                 <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">2009</div>
                        <div class="timeline-title">H1N1 (Swine Flu)</div>
                        <p style="margin:0; font-size:0.95rem;">First major influenza pandemic since 1968. Rapid global spread; highlighted success in modern vaccine development speed.</p>
                    </div>
                </div>

                 <!-- Ebola -->
                 <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">2014</div>
                        <div class="timeline-title">Ebola (West Africa)</div>
                        <p style="margin:0; font-size:0.95rem;">Largest Ebola outbreak in history. Emphasized need for contact tracing and cultural sensitivity in burial practices.</p>
                    </div>
                </div>

                 <!-- COVID-19 -->
                 <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">2019</div>
                        <div class="timeline-title">COVID-19</div>
                        <p style="margin:0; font-size:0.95rem;">SARS-CoV-2. Demonstrated challenge of <strong>asymptomatic spread</strong>. massive global intervention (social distancing, mRNA vaccines).</p>
                    </div>
                </div>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Mnemonic: GFSJSNK
                </div>
                <div class="callout-content">
                    <p><strong>"Great Folks Studying Joyfully Save Nations Kindly"</strong></p>
                    <ul>
                        <li><strong>G</strong>raunt (Counting)</li>
                        <li><strong>F</strong>arr (Statistics)</li>
                        <li><strong>S</strong>now (Pump)</li>
                        <li><strong>J</strong>enner (Vaccine)</li>
                        <li><strong>S</strong>emmelweis (Hands)</li>
                        <li><strong>N</strong>ightingale (Nursing/Charts)</li>
                        <li><strong>K</strong>och (Germs)</li>
                    </ul>
                </div>
            </div>

            <h2>2.3 The Natural History Timeline</h2>
            <p>Diseases progress through predictable stages. Understanding this helps you identify where to intervene!</p>
            
            <div class="neo-card" style="margin: 1.5rem 0;">
                <ol style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 1rem;">
                        <strong>Stage of Susceptibility</strong>
                        <div style="color: #666;">Disease has not started. Risk factors are present.</div>
                    </li>
                    <li style="margin-bottom: 1rem;">
                        <strong>Stage of Subclinical Disease</strong>
                        <div style="color: #666;">Exposure has occurred. Pathological changes are happening, but <strong>NO symptoms yet</strong>.</div>
                        <div style="background: #fff3cd; padding: 0.5rem; border-radius: 4px; margin-top: 0.5rem; font-size: 0.9rem;">(This is the <strong>Incubation Period</strong>)</div>
                    </li>
                    <li style="margin-bottom: 1rem;">
                        <strong>Stage of Clinical Disease</strong>
                        <div style="color: #666;">Symptoms appear (<strong>Onset</strong>). Diagnosis is usually made here.</div>
                    </li>
                    <li style="margin-bottom: 1rem;">
                        <strong>Stage of Recovery, Disability, or Death</strong>
                        <div style="color: #666;">The outcome of the disease process.</div>
                    </li>
                </ol>
            </div>

            <h2>2.4 Carriers</h2>
            <p>A <strong>Carrier</strong> is a person who harbors the infectious agent without showing symptoms but can still infect others.</p>
            
            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 0.75rem; text-align: left;">Type</th>
                        <th style="padding: 0.75rem; text-align: left;">Example Scenario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 0.75rem;"><strong>Symptomatic Carrier</strong></td>
                        <td style="padding: 0.75rem;">A person with mild flu who goes to work.</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.75rem;"><strong>Asymptomatic (Healthy) Carrier</strong></td>
                        <td style="padding: 0.75rem;">"Typhoid Mary" - never felt sick but shed bacteria.</td>
                    </tr>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 0.75rem;"><strong>Convalescent Carrier</strong></td>
                        <td style="padding: 0.75rem;">Recovering from Salmonella but still infectious for weeks.</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.75rem;"><strong>Incubatory Carrier</strong></td>
                        <td style="padding: 0.75rem;">Spreading Chickenpox before the rash appears.</td>
                    </tr>
                </tbody>
            </table></div>
            
            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Generation Time
                </div>
                <div class="callout-content">
                    <p><strong>Generation Time:</strong> The time interval between infection of host A and infection of host B.</p>
                    <p style="background: #fef2f2; padding: 0.5rem; border-radius: 4px; border-left: 3px solid #ef4444;">If <strong>Generation Time &lt; Incubation Period</strong>, the disease spreads before it is detected (hard to control!).</p>
                </div>
            </div>

            <h3>2.4.1 Carrier Drill</h3>
            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-question"></i>
                    Identify the Carrier Type
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> "Typhoid Mary" felt perfectly healthy but spread Typhoid Fever to families she cooked for over many years.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Asymptomatic (Healthy) Carrier</strong> - Never showed symptoms but was infectious for years.</p>
                        </div>
                    </div>
                    
                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> A student feels fine on Monday but infects his classmates. On Tuesday, he wakes up with a fever and rash.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Incubatory Carrier</strong> - Was infectious during the incubation period (before symptoms).</p>
                        </div>
                    </div>
                    
                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> A patient recovers from diarrhea but continues to shed bacteria in stool for 2 weeks.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Convalescent Carrier</strong> - Recovered from illness but still shedding pathogen.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: "Typhoid Mary" Mallon
                </div>
                <div class="callout-content">
                    <p><strong>Mary Mallon (1869-1938)</strong> was the first identified healthy carrier of typhoid fever in the US. Working as a cook, she infected at least 53 people (3 died). She refused to believe she was the source because she felt healthy, illustrating the danger of the <strong>asymptomatic carrier</strong> state. She was forcibly quarantined for the last 23 years of her life.</p>
                </div>
            </div>
            </div>

            <div class="neo-card" style="background: #f0fdf4; border-left: 4px solid #22c55e; margin: 1.5rem 0;">
                <h4 style="margin-top: 0;"><i class="ph-bold ph-check-circle"></i> Summary</h4>
                <ul>
                    <li><strong>Incubation:</strong> Exposure to Symptoms (Infectious).</li>
                    <li><strong>Latency:</strong> Exposure to Disease (Chronic).</li>
                    <li><strong>Carrier:</strong> Infectious but no symptoms.</li>
                </ul>
            </div>

            <h2>2.5 Exam Focus &amp; Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Incubation vs Latency:</strong> Know the difference (Infectious vs Chronic).</li>
                        <li><strong>Carrier Types:</strong> Incubatory, Convalescent, Chronic, Healthy.</li>
                        <li><strong>Natural History:</strong> Susceptibility → Subclinical → Clinical → Outcome.</li>
                    </ul>
                </div>
            </div>
        `
    },
    ch3: {
        title: "Chapter 3: Causation & Transmission",
        difficulty: "B/M",
        content: `
            <h1>Chapter 3: Causation & Transmission</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 2px solid #166534; font-weight: bold; box-shadow: 0 2px 4px rgba(21, 128, 61, 0.2); opacity: 1;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Understanding how disease spreads is the first step to stopping it. This chapter covers the fundamental models of disease causation and transmission.</p>

            <h2>3.1 The Epidemiologic Triad</h2>
            <p>The traditional model for infectious disease causation involves the interaction of three elements:</p>

            <!-- Interactive Visual Root -->
            <div id="triad-interactive-root" style="margin: 2rem 0;"></div>

            <script>
                // Self-executing check to render if navigated directly
                if(typeof VisualComponents !== 'undefined' && document.getElementById('triad-interactive-root')) {
                    VisualComponents.renderTriad('triad-interactive-root');
                }
            </script>

            
            <div class="callout-info" style="background: #eef2ff; border-left: 4px solid var(--accent-purple);">
                <h4><i class="ph-bold ph-share-network"></i> Beyond the Triad</h4>
                <p>The Triad is great for infectious disease, but for chronic disease (like heart disease) or complex outbreaks, we use updated models:</p>
                <ul>
                    <li><strong>Wheel of Causation:</strong> Host at center, surrounded by biologic, physical, and social environments. De-emphasizes the "agent". Useful for chronic diseases.</li>
                    <li><strong>Web of Causation:</strong> A complex network of factors where no single cause is necessary or sufficient. Used for multifactorial diseases like cancer.</li>
                    <li><strong>Rothman's Causal Pies:</strong> "Pies" represent sufficient causes. Each slice is a component cause. When the pie is full, disease occurs.</li>
                </ul>
                <div style="text-align: center; margin-top: 2rem;">
                    <!-- Rothman's Causal Pie SVG -->
                    <svg width="450" height="220" viewBox="0 0 450 220" class="responsive-svg">
                        <!-- Definitions -->
                        <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.2"/>
                            </filter>
                        </defs>

                        <!-- Pie 1: Sufficient Cause I -->
                        <g transform="translate(110, 100)">
                            <!-- Slice A (Necessary) -->
                            <path d="M0,0 L0,-80 A80,80 0 0,1 80,0 Z" fill="#FF9AA2" stroke="white" stroke-width="2" />
                            <text x="25" y="-30" font-family="Arial" font-weight="bold" fill="#333">A</text>
                            
                            <!-- Slice B -->
                            <path d="M0,0 L80,0 A80,80 0 0,1 0,80 Z" fill="#FFB7B2" stroke="white" stroke-width="2" />
                            <text x="30" y="40" font-family="Arial" fill="#333">B</text>

                            <!-- Slice C -->
                            <path d="M0,0 L0,80 A80,80 0 0,1 -80,0 Z" fill="#FFDAC1" stroke="white" stroke-width="2" />
                            <text x="-30" y="40" font-family="Arial" fill="#333">C</text>

                            <!-- Slice D -->
                            <path d="M0,0 L-80,0 A80,80 0 0,1 0,-80 Z" fill="#E2F0CB" stroke="white" stroke-width="2" />
                            <text x="-30" y="-30" font-family="Arial" fill="#333">D</text>

                            <text x="0" y="110" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--navy-primary)">Sufficient Cause I</text>
                        </g>

                        <!-- Pie 2: Sufficient Cause II -->
                        <g transform="translate(340, 100)">
                            <!-- Slice A (Necessary - present in both!) -->
                            <path d="M0,0 L0,-80 A80,80 0 0,1 80,0 Z" fill="#FF9AA2" stroke="white" stroke-width="2" />
                            <text x="25" y="-30" font-family="Arial" font-weight="bold" fill="#333">A</text>
                            
                            <!-- Slice E -->
                            <path d="M0,0 L80,0 A80,80 0 0,1 0,80 Z" fill="#B5EAD7" stroke="white" stroke-width="2" />
                            <text x="30" y="40" font-family="Arial" fill="#333">E</text>

                            <!-- Slice F -->
                            <path d="M0,0 L0,80 A80,80 0 1,1 0,-80 Z" fill="#C7CEEA" stroke="white" stroke-width="2" />
                            <text x="-40" y="10" font-family="Arial" fill="#333">F</text>

                            <text x="0" y="110" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--navy-primary)">Sufficient Cause II</text>
                        </g>
                    </svg>
                    <p style="font-size: 0.9rem; color: #555; margin-top: 0.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                        <strong>Rothman's Pies:</strong> Each full pie causes disease. 
                        <span style="background:#FF9AA2; padding: 2px 6px; border-radius: 4px;">A</span> is a <strong>Necessary Cause</strong> (must be present in all pies). 
                        Other letters are Component Causes.
                    </p>
                </div>
            </div>

            <h2>3.2 The Chain of Infection</h2>
            <p>For disease to spread, a complete chain of events must occur. Breaking ANY link stops the outbreak.</p>

            <ol>
                <li><strong>Infectious Agent:</strong> The pathogen itself.</li>
                <li><strong>Reservoir:</strong> Where the agent lives and multiplies (Human, Animal, Soil).</li>
                <li><strong>Portal of Exit:</strong> How it leaves the reservoir (Cough, Feces, Blood).</li>
                <li><strong>Mode of Transmission:</strong> How it travels (Direct or Indirect).</li>
                <li><strong>Portal of Entry:</strong> How it enters the new host (Mouth, Nose, Skin).</li>
                <li><strong>Susceptible Host:</strong> Someone with no immunity.</li>
            </ol>
            
            <div style="text-align: center; margin: 2rem 0;">
                <svg width="600" height="400" viewBox="0 0 600 400" class="responsive-svg" style="max-width: 100%; height: auto;">
                    <!-- Definitions for markers -->
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                        </marker>
                    </defs>
                    
                    <!-- Center Icon/Text -->
                    <circle cx="300" cy="200" r="60" fill="var(--gray-bg)" stroke="var(--navy-primary)" stroke-width="2" stroke-dasharray="5,5" />
                    <text x="300" y="205" text-anchor="middle" font-weight="bold" fill="var(--navy-primary)">INFECTION</text>

                    <!-- Nodes (Hexagon Layout) -->
                    <!-- 1. Agent (Top) -->
                    <g transform="translate(300, 50)">
                        <rect x="-70" y="-25" width="140" height="50" rx="10" fill="white" stroke="var(--teal-accent)" stroke-width="2"/>
                        <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="#333">1. Agent</text>
                    </g>

                    <!-- 2. Reservoir (Top Right) -->
                    <g transform="translate(500, 120)">
                       <rect x="-70" y="-25" width="140" height="50" rx="10" fill="white" stroke="var(--teal-accent)" stroke-width="2"/>
                        <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="#333">2. Reservoir</text>
                    </g>

                    <!-- 3. Portal Exit (Bottom Right) -->
                    <g transform="translate(500, 280)">
                        <rect x="-70" y="-25" width="140" height="50" rx="10" fill="white" stroke="var(--teal-accent)" stroke-width="2"/>
                        <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="#333">3. Portal Exit</text>
                    </g>
                    
                    <!-- 4. Mode of Trans (Bottom) -->
                    <g transform="translate(300, 350)">
                        <rect x="-80" y="-25" width="160" height="50" rx="10" fill="white" stroke="var(--teal-accent)" stroke-width="2"/>
                        <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="#333">4. Transmission</text>
                    </g>

                    <!-- 5. Portal Entry (Bottom Left) -->
                    <g transform="translate(100, 280)">
                        <rect x="-70" y="-25" width="140" height="50" rx="10" fill="white" stroke="var(--teal-accent)" stroke-width="2"/>
                        <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="#333">5. Portal Entry</text>
                    </g>

                    <!-- 6. Host (Top Left) -->
                    <g transform="translate(100, 120)">
                        <rect x="-70" y="-25" width="140" height="50" rx="10" fill="white" stroke="var(--teal-accent)" stroke-width="2"/>
                        <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="#333">6. Host</text>
                    </g>

                    <!-- Connecting Arrows -->
                    <!-- 1 -> 2 -->
                    <path d="M370,50 Q430,50 500,95" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <!-- 2 -> 3 -->
                    <path d="M500,145 Q500,200 500,255" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <!-- 3 -> 4 -->
                    <path d="M500,305 Q430,350 380,350" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <!-- 4 -> 5 -->
                    <path d="M220,350 Q170,350 100,305" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <!-- 5 -> 6 -->
                    <path d="M100,255 Q100,200 100,145" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <!-- 6 -> 1 -->
                    <path d="M100,95 Q170,50 230,50" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>

                    <!-- Break Points (Red X) -->
                    <text x="450" y="60" fill="red" font-size="20">✕</text>
                    <text x="510" y="200" fill="red" font-size="20">✕</text>
                    <text x="450" y="340" fill="red" font-size="20">✕</text>
                    <text x="150" y="340" fill="red" font-size="20">✕</text>
                    <text x="90" y="200" fill="red" font-size="20">✕</text>
                    <text x="150" y="60" fill="red" font-size="20">✕</text>
                </svg>
                <p style="font-size: 0.9rem; color: #666; font-style: italic;">The Chain of Infection: Break ANY link to stop the spread!</p>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Study Guide Tip: Breaking the Chain
                </div>
                <div class="callout-content">
                    <p>Public health interventions work by targeting specific links:</p>
                    <ul>
                        <li><strong>Handwashing:</strong> Breaks Mode of Transmission.</li>
                        <li><strong>Vaccination:</strong> Protects Susceptible Host.</li>
                        <li><strong>Antibiotics:</strong> Kills Infectious Agent.</li>
                        <li><strong>Masks:</strong> Blocks Portal of Exit/Entry.</li>
                    </ul>
                </div>
            </div>

            <h2>3.3 Modes of Transmission</h2>

            <h3>Direct Transmission</h3>
            <ul>
                <li><strong>Direct Contact:</strong> Skin-to-skin, kissing, sexual intercourse (e.g., Herpes, HIV).</li>
                <li><strong>Droplet Spread:</strong> Large spray over short distance (< 1 meter) from sneezing/coughing (e.g., Pertussis, Meningococcal).</li>
            </ul>

            <h3>Indirect Transmission</h3>
            <ul>
                <li><strong>Airborne:</strong> Tiny particles suspended in air for long distances/time (e.g., Measles, TB).</li>
                <li><strong>Vehicleborne:</strong> Food, water, blood, or inanimate objects (fomites).</li>
                <li><strong>Vectorborne:</strong> Living organisms (mosquitoes, ticks, fleas).</li>
            </ul>

            <div class="study-tip">
                 <div class="callout-header"><i class="ph ph-lightbulb"></i> Mnemonic: IWAF</div>
                 <div class="callout-content">
                    <p>Major transmission routes for exam questions:</p>
                    <ul>
                        <li><strong>I</strong>nsects (Vector - Malaria, Lyme)</li>
                        <li><strong>W</strong>ater (Vehicle - Cholera, Giardia)</li>
                        <li><strong>A</strong>ir (Airborne - TB, Measles)</li>
                        <li><strong>F</strong>ood (Vehicle - Salmonella, E. coli)</li>
                    </ul>
                 </div>
            <div style="margin: 2rem 0;">
                <h3 style="color: var(--teal-accent);">Crucial Distinction: Droplet vs. Airborne</h3>
                <p>This is a top exam concept. How far does the spit go?</p>
                <div class="table-container"><table class="table">
                    <thead style="background: var(--navy-primary); color: white;">
                        <tr>
                            <th style="padding: 1rem; text-align: left;">Feature</th>
                            <th style="padding: 1rem; text-align: left;">Droplet</th>
                            <th style="padding: 1rem; text-align: left;">Airborne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background: var(--gray-bg);">
                            <td style="padding: 1rem;"><strong>Particle Size</strong></td>
                            <td style="padding: 1rem;">Large (> 5 microns)</td>
                            <td style="padding: 1rem;">Tiny (< 5 microns)</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem;"><strong>Distance</strong></td>
                            <td style="padding: 1rem;">Falls quickly (< 6 feet)</td>
                            <td style="padding: 1rem;">Floats (Can fill a room)</td>
                        </tr>
                        <tr style="background: var(--gray-bg);">
                            <td style="padding: 1rem;"><strong>Example</strong></td>
                            <td style="padding: 1rem;">Flu, Pertussis, Meningitis</td>
                            <td style="padding: 1rem;">TB, Measles, Chickenpox</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem;"><strong>PPE</strong></td>
                            <td style="padding: 1rem;">Standard Surgical Mask</td>
                            <td style="padding: 1rem;">N95 Respirator (Fit-tested)</td>
                        </tr>
                    </tbody>
                </table></div>
            </div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Vector vs. Vehicle
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> Confusing Vectors and Vehicles.</p>
                    <ul>
                        <li><strong>Vector:</strong> ALIVE (Mosquito, Tick, Fly).</li>
                        <li><strong>Vehicle:</strong> NON-LIVING (Food, Water, Doorknob).</li>
                    </ul>
                    <p><strong>Tricky Case:</strong> A fly landing on food is a mechanical vector. The food itself is a vehicle.</p>
                </div>
            </div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Fomites
                </div>
                <div class="callout-content">
                    <p>A <strong>Fomite</strong> is a specific type of vehicle: an inanimate object that can carry disease agents.</p>
                    <p><strong>Examples:</strong> Doorknobs, bedding, surgical instruments, toys in a daycare.</p>
                    <p><em>Note: Fomites are NOT vectors!</em></p>
                </div>
            </div>

            <h2>3.4 Transmission Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Identify the Mode
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> A child gets sick after playing with a toy that a sick child slobbered on.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Indirect - Vehicleborne (Fomite)</strong></p>
                            <p>The toy is an inanimate object (fomite) acting as a vehicle.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> A hiker gets Lyme disease from a tick bite.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Indirect - Vectorborne</strong></p>
                            <p>The tick is a living organism (vector).</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> Someone gets Tuberculosis (TB) after sitting in a waiting room where a patient coughed 2 hours ago.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Indirect - Airborne</strong></p>
                            <p>TB stays suspended in the air for long periods. This is NOT droplet spread (which falls quickly).</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Triad:</strong> Agent, Host, Environment.</li>
                <li><strong>Chain:</strong> 6 links must be intact for spread.</li>
                <li><strong>Vector:</strong> Living carrier.</li>
                <li><strong>Vehicle:</strong> Non-living carrier (includes Fomites).</li>
            </ul>

            <div class="neo-card small" style="background: #fff0f0; border-left: 4px solid var(--danger);">
                 <h3><i class="ph-bold ph-skull"></i> Prion Diseases (ADVANCED)</h3>
                 <p>Prions are transmissible proteins (not viruses/bacteria). They are resistant to standard sterilization.</p>
                 <p><strong>Example:</strong> Creutzfeldt-Jakob Disease (CJD), Mad Cow Disease (BSE).</p>
            </div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-dna"></i>
                    Champion Concept: Genomic Epidemiology
                </div>
                <div class="callout-content">
                    <p><strong>Genomic Epidemiology</strong> uses the genetic "fingerprint" of a pathogen to link cases.</p>
                    <p>If two patients have viruses with <em>identical</em> genetic sequences, they are part of the same transmission chain.</p>
                    <p><strong>Application:</strong> Used to track variants (like Omicron) and solve foodborne outbreaks (PulseNet) by linking patients to a specific food source.</p>
                </div>
            </div>

            <h2>3.5 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Triangle:</strong> Agent, Host, Environment.</li>
                        <li><strong>Chain of Infection:</strong> Know all 6 links and how to break them.</li>
                        <li><strong>Vector vs Vehicle:</strong> Living vs Non-living. Fomites are Vehicles!</li>
                    </ul>
                </div>
            </div>

            <!-- New Section 3.6: Beyond the Triad -->
            <h2>3.6 Beyond the Triad: Wheel, Web & Causal Pie Models</h2>
            <p>While the epidemiologic triad provides a simple starting framework, real‑world disease causation is often more complex. Advanced models recognise that multiple component causes interact.</p>
            <h3>The Wheel Model</h3>
            <p>The <strong>Wheel of Causation</strong> places the <em>host</em> at the centre, surrounded by overlapping segments of the physical, biologic and social environment. These segments emphasise that environmental factors, not just a single agent, shape disease.</p>
            
            <div style="text-align: center; margin: 2rem 0;">
                <svg width="400" height="400" viewBox="0 0 400 400" class="responsive-svg">
                    <defs>
                        <filter id="shadow">
                           <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.2"/>
                        </filter>
                    </defs>

                    <!-- Outer Environment Ring -->
                    <circle cx="200" cy="200" r="180" fill="#f3f4f6" stroke="#d1d5db" stroke-width="2"/>
                    
                    <!-- Environment Segments (Biologic, Physical, Social) -->
                    <!-- Biologic (Top Left) -->
                    <path d="M200,200 L200,20 A180,180 0 0,0 44,110 Z" fill="#dbeafe" stroke="white" stroke-width="2"/>
                    <text x="130" y="100" text-anchor="middle" font-weight="bold" fill="#1e40af">Biologic Env</text>
                    <text x="130" y="115" text-anchor="middle" font-size="10" fill="#1e3a8a">(Viruses, Vectors)</text>

                    <!-- Physical (Top Right) -->
                    <path d="M200,200 L356,110 A180,180 0 0,0 200,20 Z" fill="#fce7f3" stroke="white" stroke-width="2"/>
                    <text x="270" y="100" text-anchor="middle" font-weight="bold" fill="#9d174d">Physical Env</text>
                    <text x="270" y="115" text-anchor="middle" font-size="10" fill="#831843">(Geography, Climate)</text>
                    
                    <!-- Social (Bottom) -->
                    <path d="M200,200 L44,110 A180,180 0 0,0 356,110 Z" fill="#d1fae5" stroke="white" stroke-width="2"/>
                    <text x="200" y="320" text-anchor="middle" font-weight="bold" fill="#065f46">Social Env</text>
                    <text x="200" y="335" text-anchor="middle" font-size="10" fill="#064e3b">(Poverty, Policy)</text>

                    <!-- Inner Host Hub (Genetics) -->
                    <circle cx="200" cy="200" r="60" fill="white" stroke="#333" stroke-width="3" filter="url(#shadow)"/>
                    <text x="200" y="195" text-anchor="middle" font-weight="900" font-size="14" fill="#333">HOST</text>
                    <text x="200" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#555">(Genetics)</text>
                </svg>
                <p style="text-align: center; color: #666; font-size: 0.9rem; margin-top: 0.5rem;"><em>Prioritizes multiple causes over a single "Agent".</em></p>
            </div>

            <h3>The Web of Causation</h3>
            <p>The <strong>Web of Causation</strong> represents disease as a network of interconnected factors. There is no single necessary agent; instead, multiple exposures and conditions weave together. Cutting any key strand can help prevent disease.</p>
            <h3>Rothman’s Causal Pies</h3>
            <p>In <strong>Rothman’s Causal Pie</strong> model, each pie represents a sufficient cause. Each slice is a <em>component cause</em> such as an exposure or genetic predisposition. When all slices are present, the pie is complete and disease occurs. Different pies may share slices, illustrating why some factors are necessary but not sufficient on their own.</p>
            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Socio-Economic Determinants
                </div>
                <div class="callout-content">
                    <p>Disease is not just biological; it's social. Factors include:</p>
                    <ul>
                         <li><strong>Income & Housing:</strong> Overcrowding increases TB spread.</li>
                         <li><strong>Education:</strong> Health literacy affects prevention.</li>
                         <li><strong>Access:</strong> "Food deserts" lead to poor nutrition.</li>
                    </ul>
                </div>
            </div>
            <h2>3.7 Bradford Hill's Criteria for Causation</h2>
            <p>How do we know if an association is actually <strong>CAUSAL</strong>? Austin Bradford Hill established 9 criteria.</p>
            
            <div style="text-align: center; margin: 2rem 0;">
                <svg width="600" height="400" viewBox="0 0 600 400" class="responsive-svg" style="max-width: 100%; height: auto; background: white; border: 2px solid var(--navy-primary); border-radius: 8px;">
                    <defs>
                        <filter id="dropshadow" height="130%">
                          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                          <feOffset dx="2" dy="2" result="offsetblur"/>
                          <feComponentTransfer>
                            <feFuncA type="linear" slope="0.2"/>
                          </feComponentTransfer>
                          <feMerge> 
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/> 
                          </feMerge>
                        </filter>
                    </defs>

                    <text x="300" y="30" text-anchor="middle" font-weight="bold" font-size="20" fill="var(--navy-primary)">Hill's Criteria (The "Big 9")</text>

                    <!-- Grid Layout for 9 Items -->
                    <!-- Row 1 -->
                    <g transform="translate(50, 60)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#e0f2f1" stroke="#00695c" stroke-width="2"/>
                        <text x="75" y="30" text-anchor="middle" font-weight="bold" fill="#00695c">1. Strength</text>
                        <text x="75" y="50" text-anchor="middle" font-size="10" fill="#333">Large RR/OR?</text>
                    </g>
                    <g transform="translate(225, 60)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#e0f2f1" stroke="#00695c" stroke-width="2"/>
                        <text x="75" y="30" text-anchor="middle" font-weight="bold" fill="#00695c">2. Consistency</text>
                        <text x="75" y="50" text-anchor="middle" font-size="10" fill="#333">Seen in other studies?</text>
                    </g>
                    <g transform="translate(400, 60)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#e0f2f1" stroke="#00695c" stroke-width="2"/>
                        <text x="75" y="30" text-anchor="middle" font-weight="bold" fill="#00695c">3. Specificity</text>
                        <text x="75" y="50" text-anchor="middle" font-size="10" fill="#333">One cause, one disease?</text>
                    </g>

                    <!-- Row 2 -->
                    <g transform="translate(50, 160)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#fff3e0" stroke="#ef6c00" stroke-width="2"/>
                         <text x="75" y="25" text-anchor="middle" font-weight="bold" fill="#ef6c00" font-size="14">4. Temporality</text>
                         <text x="75" y="45" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">Cause BEFORE</text>
                         <text x="75" y="60" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">Effect</text>
                         <!-- Star icon for emphasis -->
                         <path d="M135,10 L140,25 L155,25 L142,35 L147,50 L135,40 L123,50 L128,35 L115,25 L130,25 Z" fill="gold" stroke="orange" transform="scale(0.6) translate(180,20)"/>
                    </g>
                    <g transform="translate(225, 160)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#e0f2f1" stroke="#00695c" stroke-width="2"/>
                        <text x="75" y="30" text-anchor="middle" font-weight="bold" fill="#00695c">5. Bio Gradient</text>
                        <text x="75" y="50" text-anchor="middle" font-size="10" fill="#333">More dose = More disease?</text>
                    </g>
                    <g transform="translate(400, 160)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#e0f2f1" stroke="#00695c" stroke-width="2"/>
                        <text x="75" y="30" text-anchor="middle" font-weight="bold" fill="#00695c">6. Plausibility</text>
                        <text x="75" y="50" text-anchor="middle" font-size="10" fill="#333">Does biology make sense?</text>
                    </g>

                    <!-- Row 3 -->
                    <g transform="translate(50, 260)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#e0f2f1" stroke="#00695c" stroke-width="2"/>
                        <text x="75" y="30" text-anchor="middle" font-weight="bold" fill="#00695c">7. Coherence</text>
                        <text x="75" y="50" text-anchor="middle" font-size="10" fill="#333">Facts fit known history?</text>
                    </g>
                    <g transform="translate(225, 260)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#e0f2f1" stroke="#00695c" stroke-width="2"/>
                        <text x="75" y="30" text-anchor="middle" font-weight="bold" fill="#00695c">8. Experiment</text>
                        <text x="75" y="50" text-anchor="middle" font-size="10" fill="#333">Does prevention work?</text>
                    </g>
                    <g transform="translate(400, 260)">
                        <rect x="0" y="0" width="150" height="80" rx="4" fill="#e0f2f1" stroke="#00695c" stroke-width="2"/>
                        <text x="75" y="30" text-anchor="middle" font-weight="bold" fill="#00695c">9. Analogy</text>
                        <text x="75" y="50" text-anchor="middle" font-size="10" fill="#333">Similar to other diseases?</text>
                    </g>
                    
                    <!-- Essential Note -->
                    <text x="300" y="375" text-anchor="middle" font-style="italic" fill="#c62828" font-size="14">* Temporality is the ONLY necessary criterion!</text>
                </svg>
            </div>

        `
    },
    ch4: {
        title: "Chapter 4: Measures of Frequency",
        difficulty: "B",
        content: `
    <h1> Chapter 4: Measures of Frequency</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 2px solid #166534; font-weight: bold; box-shadow: 0 2px 4px rgba(21, 128, 61, 0.2); opacity: 1;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">To describe how often a disease occurs, epidemiologists use three main types of measures: <strong>Counts</strong>, <strong>Proportions</strong>, and <strong>Rates</strong>. Mastering the difference between Incidence and Prevalence is fundamental.</p>

            <h2>4.1 The Three Types of Measures</h2>

            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 1rem; text-align: left;">Measure</th>
                        <th style="padding: 1rem; text-align: left;">Definition</th>
                        <th style="padding: 1rem; text-align: left;">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Count</strong></td>
                        <td style="padding: 1rem;">Just the number of cases (no denominator).</td>
                        <td style="padding: 1rem;">"5 cases of measles"</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Proportion</strong></td>
                        <td style="padding: 1rem;">Numerator is PART of the denominator. (Usually %).</td>
                        <td style="padding: 1rem;">"20% of students are sick"</td>
                    </tr>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Rate</strong></td>
                        <td style="padding: 1rem;">Frequency of event over TIME.</td>
                        <td style="padding: 1rem;">"50 cases per 100,000 per year"</td>
                    </tr>
                </tbody>
            </table></div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Rate vs. Proportion
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Attack Rate" is technically a <strong>PROPORTION</strong>, not a rate!</p>
                    <p>Why? Because it doesn't strictly include time in the denominator (it's just Ill / Total). However, we still call it a "rate" by convention. Be ready for this semantic trick question.</p>
                </div>
            </div>

            <h2>4.2 Incidence vs. Prevalence</h2>
            <p>This is the most important distinction in descriptive epidemiology.</p>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Study Guide Tip: The Bathtub Analogy
                </div>
                <div class="callout-content">
                    <p>Imagine a bathtub filled with water:</p>
                    
                    <div style="text-align: center; margin: 1.5rem 0;">
                        <svg width="300" height="220" viewBox="0 0 300 220" class="responsive-svg" style="max-width: 100%; height: auto;">
                            <!-- Faucet (Incidence) -->
                            <path d="M50,10 L100,10 L100,30 L80,30 L80,40" fill="#999" stroke="#666" stroke-width="2"/>
                            <text x="75" y="25" font-size="12" fill="#333" font-weight="bold">Incidence</text>
                            
                            <!-- Water Flow In -->
                            <path d="M80,40 L80,100" stroke="#3b82f6" stroke-width="8" stroke-dasharray="5,5" opacity="0.8"/>
                            
                            <!-- The Tub -->
                            <path d="M40,100 L40,180 Q40,200 60,200 L240,200 Q260,200 260,180 L260,100" fill="none" stroke="#333" stroke-width="4"/>
                            
                            <!-- Water (Prevalence) -->
                            <path d="M45,120 L255,120 L255,180 Q255,195 240,195 L60,195 Q45,195 45,180 Z" fill="#bfdbfe" opacity="0.8"/>
                            <text x="150" y="160" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">Prevalence (Burden)</text>

                            <!-- Drain (Death/Recovery) -->
                            <path d="M260,180 L280,180 L280,220" stroke="#3b82f6" stroke-width="6" stroke-dasharray="5,5" opacity="0.6"/>
                            <text x="230" y="215" font-size="12" fill="#333" text-anchor="end">Recovery / Death</text>
                        </svg>
                    </div>

                    <ul>
                        <li><strong>Prevalence (The Water Level):</strong> The total amount of water in the tub (Total existing cases).</li>
                        <li><strong>Incidence (The Faucet):</strong> New water flowing in (New cases).</li>
                        <li><strong>Recovery/Death (The Drain):</strong> Water leaving the tub.</li>
                    </ul>
                    <p><strong>Key Concept:</strong> If you turn on the faucet (high incidence) but the drain is open wide (fast cure or death), the water level (prevalence) stays low!</p>
                </div>
            </div>

            <h3>Incidence Rate</h3>
            <p>Measures the <strong>risk</strong> of developing a disease.</p>
            <p style="background: rgba(57, 204, 204, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--teal-accent);">
                <strong>Incidence = (New Cases / Population at Risk) × Multiplier</strong>
                <br><small class="citation" style="color: #555; font-size: 0.8rem;">Source: CDC Principles of Epidemiology, 3rd Ed.</small>
            </p>
            <p><em>Note: The denominator must exclude people who already have the disease or are immune!</em></p>

            <h3>Prevalence</h3>
            <p>Measures the <strong>burden</strong> of disease in a population.</p>
            <p style="background: rgba(57, 204, 204, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--teal-accent);">
                <strong>Prevalence = (Total Existing Cases / Total Population) × Multiplier</strong>
                <br><small class="citation" style="color: #555; font-size: 0.8rem;">Source: CDC Principles of Epidemiology, 3rd Ed.</small>
            </p>
            <p><em>Includes both new and old cases.</em></p>

            <h2>4.3 Relationship Between I and P</h2>
            <p>For a steady-state condition (rates aren't changing):</p>
            <p style="font-size: 1.2rem; text-align: center; font-weight: bold;">Prevalence ≈ Incidence × Duration</p>
            <p><strong>P ≈ I × D</strong></p>
            
            <ul>
                <li><strong>High Prevalence:</strong> High incidence OR long duration (e.g., Diabetes - people live a long time with it).</li>
                <li><strong>Low Prevalence:</strong> Low incidence OR short duration (e.g., Ebola - rapid death or recovery).</li>
            </ul>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Does a Cure Lower Prevalence?
                </div>
                <div class="callout-content">
                    <p><strong>Scenario:</strong> A new drug prevents death from HIV but doesn't cure it. What happens?</p>
                    <ul>
                        <li><strong>Incidence:</strong> Unchanged (new cases still happening).</li>
                        <li><strong>Duration:</strong> Increases (people live longer).</li>
                        <li><strong>Prevalence:</strong> INCREASES!</li>
                    </ul>
                    <p><strong>Paradox:</strong> Sometimes "better" medical care leads to HIGHER disease prevalence because people stop dying.</p>
                </div>
            </div>

            <h2>4.4 Calculation Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Practice Problem: The Nursing Home
                </div>
                <div class="callout-content">
                    <p><strong>Scenario:</strong> A nursing home has 100 residents. On Jan 1, 10 residents have the flu. During January, 5 NEW residents get the flu. No one died or recovered.</p>
                    
                    <p><strong>1. Calculate Prevalence on Jan 1:</strong></p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Prevalence = Total Cases / Total Pop</strong></p>
                            <p>Total Cases = 10</p>
                            <p>Total Pop = 100</p>
                            <p><strong>Prevalence = 10 / 100 = 10%</strong></p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>2. Calculate Cumulative Incidence for January:</strong></p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Incidence = New Cases / Population AT RISK</strong></p>
                            <p>New Cases = 5</p>
                            <p><strong>Pop at Risk = Total Pop - Existing Cases</strong> (People who already have it aren't at risk!)</p>
                            <p>Pop at Risk = 100 - 10 = 90</p>
                            <p><strong>Incidence = 5 / 90 = 0.055 or 5.5%</strong></p>
                            <p><em>(Common Mistake: Using 100 as the denominator!)</em></p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Incidence:</strong> New cases (Risk). Denominator is "At Risk".</li>
                <li><strong>Prevalence:</strong> All cases (Burden). Denominator is Total Pop.</li>
                <li><strong>Bathtub:</strong> Incidence is the faucet, Prevalence is the water level.</li>
                <li><strong>P ≈ I × D</strong></li>
            </ul>

            <h2>4.5 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Incidence vs Prevalence:</strong> Risk vs Burden. Bathtub analogy.</li>
                        <li><strong>Calculations:</strong> Be ready to calculate Incidence Rate and Prevalence.</li>
                        <li><strong>P ≈ I × D:</strong> Understand how duration affects prevalence.</li>
                    </ul>
                </div>
            </div>
`
    },
    ch5: {
        title: "Chapter 5: Surveillance Systems",
        difficulty: "M",
        content: `
    <h1> Chapter 5: Surveillance Systems</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Public health surveillance is the <strong>ongoing, systematic collection, analysis, interpretation, and dissemination</strong> of health data. It's the "radar" of public health.</p>

            <h2>5.1 Types of Surveillance</h2>

            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 1rem; text-align: left;">Type</th>
                        <th style="padding: 1rem; text-align: left;">Who Initiates?</th>
                        <th style="padding: 1rem; text-align: left;">Pros/Cons</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Passive</strong></td>
                        <td style="padding: 1rem;"><strong>Provider</strong> (Doctor/Lab) reports to Health Dept.</td>
                        <td style="padding: 1rem;">
                            <span style="color: green;">+ Cheap, Easy</span><br>
                            <span style="color: red;">- Under-reporting</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Active</strong></td>
                        <td style="padding: 1rem;"><strong>Health Dept</strong> contacts providers to find cases.</td>
                        <td style="padding: 1rem;">
                            <span style="color: green;">+ Accurate, Complete</span><br>
                            <span style="color: red;">- Expensive, Time-consuming</span>
                        </td>
                    </tr>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Syndromic</strong></td>
                        <td style="padding: 1rem;">Automated data (ER visits, OTC sales).</td>
                        <td style="padding: 1rem;">
                            <span style="color: green;">+ Early warning</span><br>
                            <span style="color: red;">- Non-specific</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Sentinel</strong></td>
                        <td style="padding: 1rem;">Selected sites (specific clinics).</td>
                        <td style="padding: 1rem;">
                            <span style="color: green;">+ High quality data</span><br>
                            <span style="color: red;">- Not representative</span>
                        </td>
                    </tr>
                </tbody>
            </table></div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: "Best" Surveillance
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Which surveillance system is BEST?"</p>
                    <p><strong>ANSWER:</strong> It depends on the goal!</p>
                    <ul>
                        <li>For routine monitoring? <strong>Passive</strong> (Sustainable).</li>
                        <li>For a specific outbreak? <strong>Active</strong> (Need all cases).</li>
                        <li>For early warning of bioterrorism? <strong>Syndromic</strong>.</li>
                    </ul>
                    <p>Don't assume Active is always "better" just because it's more accurate. It's too expensive for everything.</p>
                </div>
            </div>

            <h2>5.2 Syndromic Surveillance</h2>
            <p>Uses data <em>before</em> a diagnosis is confirmed. Looks for patterns of symptoms.</p>
            <p><strong>Data Sources:</strong></p>
            <ul>
                <li>Over-the-counter (OTC) drug sales (flu meds, anti-diarrheals)</li>
                <li>School absenteeism logs</li>
                <li>ER chief complaints ("fever", "cough")</li>
                <li>Google search trends</li>
            </ul>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: NNDSS
                </div>
                <div class="callout-content">
                    <p><strong>National Notifiable Diseases Surveillance System (NNDSS)</strong></p>
                    <p>The CDC system where states report "notifiable" diseases (like Measles, Rabies, Anthrax). It is a <strong>Passive</strong> system mandated by law.</p>
                </div>
            </div>

            <h2>5.3 Major US Surveillance Systems</h2>
            <p>Know these acronyms for the exam. They are the backbone of US public health data.</p>
            <div class="table-container"><table class="table">
                <thead>
                    <tr><th>System</th><th>Full Name</th><th>Type</th><th>Purpose</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>NNDSS</strong></td><td>National Notifiable Diseases Surveillance System</td><td>Passive</td><td>Mandatory reporting of ~120 diseases (e.g., Measles, Rabies) from states to CDC.</td></tr>
                    <tr><td><strong>NHSN</strong></td><td>National Healthcare Safety Network</td><td>Active/Passive</td><td>Tracks Hospital Acquired Infections (HAIs) and antibiotic resistance.</td></tr>
                    <tr><td><strong>BRFSS</strong></td><td>Behavioral Risk Factor Surveillance System</td><td>Active (Phone)</td><td>World's largest telephone survey tracking health risks (smoking, obesity).</td></tr>
                    <tr><td><strong>BioSense</strong></td><td>(Now part of NSSP)</td><td>Syndromic</td><td>Tracks ER visits and other real-time data for early warning.</td></tr>
                    <tr><td><strong>Vital Stats</strong></td><td>NVSS (National Vital Statistics System)</td><td>Passive</td><td>Birth and death certificates. Definitive source for mortality data.</td></tr>
                </tbody>
            </table></div>

            <h2>5.5 One Health Surveillance</h2>
            <div class="neo-card" style="border-left: 4px solid #166534; background: #f0fdf4; margin: 2rem 0;">
                <h3 style="color: #14532d; margin-top:0;"><i class="ph-bold ph-globe"></i> One Health</h3>
                <p>The concept that <strong>human health</strong> is connected to the health of <strong>animals</strong> and the <strong>environment</strong>.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div style="background: white; padding: 1rem; border-radius: 8px;">
                        <strong>Sentinel Surveillance in One Health:</strong>
                        <ul>
                            <li><strong>Dead Crow Testing:</strong> Using birds to detect West Nile Virus <em>before</em> humans get sick.</li>
                            <li><strong>Canary in a Coal Mine:</strong> Animals often show symptoms first.</li>
                        </ul>
                    </div>
                    <div style="background: white; padding: 1rem; border-radius: 8px;">
                        <strong>Zoonotic Disease Tracking:</strong>
                        <p>60% of infectious diseases in humans are spread from animals (Zoonotic).</p>
                    </div>
                </div>
            </div>

            <h2>5.6 Surveillance Data Flow</h2>
            <p>How does a case of Salmonella get to the CDC? It follows a chain of command.</p>
            <div class="neo-card" style="text-align: center; background: white;">
                <div style="font-weight: bold; font-size: 1.2rem;">1. Clinician / Lab</div>
                <div style="color: var(--muted);">Diagnoses patient or identifies bacteria.</div>
                <i class="ph-bold ph-arrow-down" style="font-size: 1.5rem; color: var(--accent-color);"></i>
                <div style="font-weight: bold; font-size: 1.2rem;">2. Local Health Dept (County/City)</div>
                <div style="color: var(--muted);">Investigates immediate risks (restaurants, contacts).</div>
                <i class="ph-bold ph-arrow-down" style="font-size: 1.5rem; color: var(--accent-color);"></i>
                <div style="font-weight: bold; font-size: 1.2rem;">3. State Health Dept</div>
                <div style="color: var(--muted);">Aggregates data, looks for cross-county clusters.</div>
                <i class="ph-bold ph-arrow-down" style="font-size: 1.5rem; color: var(--accent-color);"></i>
                <div style="font-weight: bold; font-size: 1.2rem;">4. CDC (Federal)</div>
                <div style="color: var(--muted);">National aggregation (NNDSS), multi-state outbreaks.</div>
                <i class="ph-bold ph-arrow-down" style="font-size: 1.5rem; color: var(--accent-color);"></i>
                <div style="font-weight: bold; font-size: 1.2rem;">5. WHO (Global)</div>
                <div style="color: var(--muted);">Only for PHEIC (Public Health Emergency of International Concern).</div>
            </div>

            <h2>5.5 Surveillance Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Identify the System
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> A health department calls every hospital in the city daily to ask about new E. coli cases during an outbreak.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Active Surveillance</strong></p>
                            <p>The Health Department is initiating the contact to actively find cases.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> A doctor diagnoses a patient with Salmonella and fills out a case report form to send to the state.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Passive Surveillance</strong></p>
                            <p>The provider initiated the report. This is the standard method.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> Public health officials monitor sales of Imodium (anti-diarrheals) at local pharmacies to detect a potential waterborne outbreak.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Syndromic Surveillance</strong></p>
                            <p>They are tracking a proxy (drug sales) for symptoms, not confirmed diagnoses.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Passive:</strong> Provider reports (Cheap, Routine).</li>
                <li><strong>Active:</strong> Health Dept calls (Expensive, Outbreaks).</li>
                <li><strong>Syndromic:</strong> Symptoms/Proxy data (Early Warning).</li>
                <li><strong>NNDSS:</strong> The core passive system for reportable diseases.</li>
            </ul>

            <h2>5.4 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Passive vs Active:</strong> Provider-initiated vs Health Dept-initiated.</li>
                        <li><strong>Syndromic:</strong> Early warning using proxy data (OTC sales).</li>
                        <li><strong>Sentinel:</strong> High quality data from selected sites.</li>
                    </ul>
                </div>
            </div>
`
    },
    ch6: {
        title: "Chapter 6: Natural History of Disease",
        difficulty: "B",
        content: `
            <h1>Chapter 6: Natural History of Disease</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 2px solid #166534; font-weight: bold; box-shadow: 0 2px 4px rgba(21, 128, 61, 0.2); opacity: 1;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Disease is not a static event; it is a process. Understanding the <strong>timeline</strong> of this process is essential for identifying the source of an outbreak.</p>

            <h2>6.1 Core Timing Concepts</h2>
            <p>Division B exams frequently test the conceptual difference between these terms:</p>
            
            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 1rem; text-align: left;">Term</th>
                        <th style="padding: 1rem; text-align: left;">Definition</th>
                        <th style="padding: 1rem; text-align: left;">Disease Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Incubation Period</strong></td>
                        <td style="padding: 1rem;">Time from <strong>exposure</strong> to first <strong>symptoms</strong>.</td>
                        <td style="padding: 1rem;">Infectious diseases (Flu, Salmonella)</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Latency Period</strong></td>
                        <td style="padding: 1rem;">Time from <strong>exposure</strong> to <strong>detectable disease</strong>.</td>
                        <td style="padding: 1rem;">Chronic diseases (Cancer, Heart Disease)</td>
                    </tr>
                </tbody>
            </table></div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Mnemonic: LIV
                </div>
                <div class="callout-content">
                    <p><strong>"LIV" - The three key periods:</strong></p>
                    <ul>
                        <li><strong>L</strong>atent period – Chronic disease.</li>
                        <li><strong>I</strong>ncubation period – Infectious disease.</li>
                        <li><strong>V</strong>iral shedding period – When infectious to others.</li>
                    </ul>
                </div>
            </div>

            <h2>6.2 The Natural History Timeline</h2>
            <div style="text-align: center; margin: 3rem 0;">
                <svg width="700" height="280" viewBox="0 0 700 280" class="responsive-svg" style="max-width: 100%; height: auto; background: white; border: 2px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
                    <defs>
                        <marker id="arrowhead-timeline" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
                        </marker>
                    </defs>
                    <!-- Timeline Arrow -->
                    <line x1="50" y1="200" x2="650" y2="200" stroke="#333" stroke-width="3" marker-end="url(#arrowhead-timeline)"/>
                    <text x="660" y="205" font-size="12" font-weight="bold" fill="#333">TIME</text>

                    <!-- Stage 1: SUSCEPTIBILITY -->
                    <rect x="50" y="60" width="110" height="110" fill="#e0f7fa" stroke="#006064" stroke-width="2" rx="6"/>
                    <text x="105" y="90" text-anchor="middle" font-weight="bold" fill="#006064" font-size="12">SUSCEPTIBILITY</text>
                    <text x="105" y="110" text-anchor="middle" font-size="10" fill="#006064">Healthy</text>
                    <text x="105" y="130" text-anchor="middle" font-size="9" fill="#006064" font-style="italic">No disease</text>

                    <!-- Event: EXPOSURE -->
                    <line x1="160" y1="25" x2="160" y2="210" stroke="#dc2626" stroke-width="3" stroke-dasharray="5,3"/>
                    <rect x="130" y="10" width="60" height="20" fill="#dc2626" rx="4"/>
                    <text x="160" y="23" text-anchor="middle" fill="white" font-weight="bold" font-size="11">EXPOSURE</text>

                    <!-- Stage 2: SUBCLINICAL -->
                    <rect x="170" y="60" width="150" height="110" fill="#fff3e0" stroke="#e65100" stroke-width="2" rx="6"/>
                    <text x="245" y="90" text-anchor="middle" font-weight="bold" fill="#e65100" font-size="12">SUBCLINICAL</text>
                    <text x="245" y="110" text-anchor="middle" font-size="10" fill="#e65100">(Incubation Period)</text>
                    <text x="245" y="130" text-anchor="middle" font-size="9" fill="#e65100">Pathologic</text>
                    <text x="245" y="145" text-anchor="middle" font-size="9" fill="#e65100">Changes</text>

                    <!-- Event: SYMPTOMS -->
                    <line x1="320" y1="25" x2="320" y2="210" stroke="#dc2626" stroke-width="3" stroke-dasharray="5,3"/>
                    <rect x="290" y="10" width="60" height="20" fill="#dc2626" rx="4"/>
                    <text x="320" y="23" text-anchor="middle" fill="white" font-weight="bold" font-size="11">SYMPTOMS</text>

                    <!-- Stage 3: CLINICAL DISEASE -->
                    <rect x="330" y="60" width="150" height="110" fill="#fef2f2" stroke="#b91c1c" stroke-width="2" rx="6"/>
                    <text x="405" y="90" text-anchor="middle" font-weight="bold" fill="#7f1d1d" font-size="12">CLINICAL</text>
                    <text x="405" y="105" text-anchor="middle" font-weight="bold" fill="#7f1d1d" font-size="12">DISEASE</text>
                    <text x="405" y="125" text-anchor="middle" font-size="9" fill="#7f1d1d">Diagnosis</text>
                    <text x="405" y="140" text-anchor="middle" font-size="9" fill="#7f1d1d">Treatment</text>

                    <!-- Stage 4: RECOVERY -->
                    <rect x="490" y="60" width="110" height="110" fill="#e8f5e9" stroke="#1b5e20" stroke-width="2" rx="6"/>
                    <text x="545" y="90" text-anchor="middle" font-weight="bold" fill="#1b5e20" font-size="12">RECOVERY</text>
                    <text x="545" y="110" text-anchor="middle" font-size="9" fill="#1b5e20">Disability or</text>
                    <text x="545" y="125" text-anchor="middle" font-size="9" fill="#1b5e20">Death or</text>
                    <text x="545" y="140" text-anchor="middle" font-size="9" fill="#1b5e20">Full Recovery</text>

                    <!-- Period of Communicability Bar -->
                    <rect x="220" y="185" width="220" height="25" fill="#9333ea" opacity="0.3" stroke="#9333ea" stroke-width="2" rx="4"/>
                    <text x="330" y="202" text-anchor="middle" font-size="11" fill="#7c3aed" font-weight="bold">PERIOD OF COMMUNICABILITY</text>
                    
                    <!-- Note -->
                    <text x="350" y="245" text-anchor="middle" font-size="10" fill="#666" font-style="italic">(Infectiousness period may start before or during symptoms)</text>
                </svg>
            </div>

            <!-- Incubation Period Diagram -->
            <div style="background: white; padding: 1rem; border: 1px solid #eee; margin: 2rem 0; border-radius: 8px;">
                <h4 style="text-align: center; margin-top: 0; color: var(--navy-primary); font-weight:800;">Visualizing Incubation</h4>
                <svg viewBox="0 0 400 100" style="width: 100%; max-width: 500px; height: auto; margin: 1rem auto; display: block;">
                    <text x="10" y="25" font-size="12" font-weight="bold" fill="#444">Exposure</text>
                    <line x1="50" y1="50" x2="350" y2="50" stroke="#333" stroke-width="4" marker-end="url(#arrow)"/>
                    <rect x="100" y="40" width="200" height="20" fill="rgba(255, 165, 0, 0.3)" stroke="orange" stroke-width="2"/>
                    <text x="200" y="32" font-size="13" font-weight="900" text-anchor="middle" fill="#333" style="text-transform:uppercase;">Incubation Period</text>
                    <circle cx="50" cy="50" r="8" fill="#dc2626"/>
                    <circle cx="350" cy="50" r="8" fill="#16a34a"/>
                    <text x="350" y="25" font-size="12" font-weight="bold" text-anchor="end" fill="#444">Onset</text>
                </svg>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Mnemonic: LIV
                </div>
                <div class="callout-content">
                    <p><strong>Distinguish the Periods:</strong></p>
                    <ul>
                        <li><strong>L</strong>atent: <strong>I</strong>nfectious <strong>V</strong>iral shedding (Time until you become infectious).</li>
                        <li><strong>I</strong>ncubation: Time until <strong>Symptoms</strong> appear.</li>
                    </ul>
                    <p><em>Note: You can be infectious (Latent period over) BEFORE you have symptoms (Incubation period still going). This is why quarantine is hard!</em></p>
                </div>
            </div>

            <h3 style="color: var(--teal-accent);">Crucial Comparison: Incubation vs Latency</h3>
            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 1rem; text-align: left;">Feature</th>
                        <th style="padding: 1rem; text-align: left;">Incubation Period</th>
                        <th style="padding: 1rem; text-align: left;">Latent Period</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Definition</strong></td>
                        <td style="padding: 1rem;">Exposure to <strong>SYMPTOMS</strong></td>
                        <td style="padding: 1rem;">Exposure to <strong>INFECTIOUSNESS</strong></td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Focus</strong></td>
                        <td style="padding: 1rem;">Clinical (Sick people)</td>
                        <td style="padding: 1rem;">Transmission (Spreading it)</td>
                    </tr>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Example (Flu)</strong></td>
                        <td style="padding: 1rem;">2 Days (Feel sick in 48h)</td>
                        <td style="padding: 1rem;">1 Day (Can spread in 24h)</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Implication</strong></td>
                        <td style="padding: 1rem;">Determines quarantine length</td>
                        <td style="padding: 1rem;">Determines contact tracing window</td>
                    </tr>
                </tbody>
            </table></div>

            <h2>6.3 Carriers</h2>
            <p>A <strong>Carrier</strong> is a person who harbors the infectious agent without showing symptoms but can still infect others.</p>

            <div class="table-container"><table class="table">
                 <thead style="background: var(--navy-primary); color: white;">
                    <tr><th style="padding: 1rem;">Type</th><th style="padding: 1rem;">Example Scenario</th></tr>
                 </thead>
                 <tbody>
                    <tr><td style="padding: 1rem;"><strong>Symptomatic Carrier</strong></td><td style="padding: 1rem;">A person with mild flu who goes to work.</td></tr>
                    <tr style="background: var(--gray-bg);"><td style="padding: 1rem;"><strong>Asymptomatic (Healthy) Carrier</strong></td><td style="padding: 1rem;">"Typhoid Mary" - never felt sick but shed bacteria.</td></tr>
                    <tr><td style="padding: 1rem;"><strong>Convalescent Carrier</strong></td><td style="padding: 1rem;">Recovering from Salmonella but still infectious for weeks.</td></tr>
                    <tr style="background: var(--gray-bg);"><td style="padding: 1rem;"><strong>Incubatory Carrier</strong></td><td style="padding: 1rem;">Spreading Chickenpox before the rash appears.</td></tr>
                 </tbody>
            </table></div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Generation Time
                </div>
                <div class="callout-content">
                    <p><strong>Generation Time:</strong> The time interval between infection of host A and infection of host B.</p>
                    <p>If Generation Time &lt; Incubation Period, the disease spreads <em>before</em> it is detected (hard to control!).</p>
                </div>
            </div>

            <h2>6.4 Carrier Drill</h2>
            <div class="drill-box">
                <div class="callout-header"><i class="ph ph-calculator"></i> Identify the Carrier Type</div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> "Typhoid Mary" felt perfectly healthy but spread Typhoid Fever.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content"><p><strong>Answer: Chronic/Asymptomatic Carrier</strong></p></div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Incubation:</strong> Exposure to Symptoms (Infectious).</li>
                <li><strong>Latency:</strong> Exposure to Disease (Chronic).</li>
                <li><strong>Timeline:</strong> Susceptible -> Subclinical -> Clinical -> Outcome.</li>
            </ul>

            <h2>6.5 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Terms:</strong> Don't swap Incubation and Latency.</li>
                        <li><strong>Carriers:</strong> Know the difference between Incubatory (before symptoms) and Convalescent (after symptoms).</li>
                    </ul>
                </div>
            </div>
        `
    },
    ch7: {
        title: "Chapter 7: The Investigation Roadmap",
        difficulty: "M",
        content: `
            <h1>Chapter 7: The Investigation Roadmap</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">The CDC's 13-Step Investigation Sequence is the <strong>systematic approach</strong> to investigating disease outbreaks. Mastering the sequence and understanding when each step occurs is critical for competition success.</p>


            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Step Sequencing
                </div>
                <div class="callout-content">
                    <p><strong>MOST COMMON MISTAKE:</strong> Getting the order of steps wrong!</p>
                    <p>Test writers LOVE to ask: "What should you do FIRST?" or "Which step comes BEFORE hypothesis testing?"</p>
                    <p><strong>Key Traps:</strong></p>
                    <ul>
                        <li>Jumping to hypothesis testing before confirming the outbreak exists</li>
                        <li>Implementing control measures before identifying the source</li>
                        <li>Forgetting to prepare for fieldwork (Step 1)</li>
                    </ul>
                </div>
            </div>

            <h2>The 13 Steps (In Order)</h2>
            
            <!-- Visual Roadmap Placeholder (Injected by visual-enhancements.js) -->
            <div id="visual-investigation-roadmap-placeholder"></div>

            <div class="study-tip">
                <div class="callout-header"><i class="ph ph-list-numbers"></i> The 13 Steps at a Glance</div>
                <div class="callout-content">
                    <ol>
                        <li><strong>P</strong>repare for field work</li>
                        <li><strong>E</strong>stablish existence of outbreak</li>
                        <li><strong>V</strong>erify diagnosis</li>
                        <li><strong>C</strong>onstruct case definition</li>
                        <li><strong>F</strong>ind cases systematically</li>
                        <li><strong>D</strong>escribe epidemic (Person, Place, Time)</li>
                        <li><strong>D</strong>evelop hypotheses</li>
                        <li><strong>E</strong>valuate hypotheses (Epidemiologically)</li>
                        <li><strong>R</strong>econsider, refine, and re-evaluate hypotheses</li>
                        <li><strong>C</strong>ompare and reconcile with lab/environmental studies</li>
                        <li><strong>I</strong>mplement control and prevention measures</li>
                        <li><strong>I</strong>nitiate or maintain surveillance</li>
                        <li><strong>C</strong>ommunicate findings</li>
                    </ol>
                    <p><em>Note: Control measures (Step 11) should be implemented AS SOON AS the source is known, often much earlier in the sequence!</em></p>
                </div>
            </div>

            <h2>Detailed Step Breakdown</h2>

            <h3>Step 1: Prepare for Fieldwork</h3>
            <p><strong>Purpose:</strong> Get ready before going to the outbreak site</p>
            <ul>
                <li>Assemble investigation team</li>
                <li>Gather supplies (forms, lab kits, PPE)</li>
                <li>Review background information</li>
                <li>Establish communication protocols</li>
                <li>Notify local authorities</li>
            </ul>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "The team arrives at the outbreak site. What should they do FIRST?"</p>
                    <p><strong>WRONG:</strong> Start collecting samples</p>
                    <p><strong>RIGHT:</strong> Verify the diagnosis (Step 2) - you should have PREPARED before arriving!</p>
                </div>
            </div>

            <h3>Step 2: Verify the Diagnosis</h3>
            <p><strong>Purpose:</strong> Confirm that reported cases actually have the disease</p>
            <ul>
                <li>Review clinical findings</li>
                <li>Check laboratory results</li>
                <li>Rule out misdiagnosis</li>
                <li>Confirm the disease is what's reported</li>
            </ul>
            <p><strong>Example:</strong> Reports of "meningitis" might actually be influenza with similar symptoms.</p>

            <h3>Step 3: Establish Outbreak Existence</h3>
            <p><strong>Purpose:</strong> Determine if cases exceed expected levels</p>
            <ul>
                <li>Compare current cases to baseline/historical data</li>
                <li>Check if this is truly an outbreak or normal variation</li>
                <li>Rule out reporting artifacts (e.g., new surveillance system)</li>
            </ul>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Quick Check
                </div>
                <div class="callout-content">
                    <p><strong>Scenario:</strong> A school reports 15 flu cases in one week. Last year, they averaged 3 cases per week in the same month. Is this an outbreak?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: YES</strong></p>
                            <p><strong>Rationale:</strong> 15 cases vs. expected 3 cases = 5x increase above baseline. This clearly exceeds normal levels and constitutes an outbreak.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Step 4: Construct Case Definition</h3>
            <p><strong>Purpose:</strong> Create standardized criteria to identify cases</p>
            <p><strong>Components (CPRT + Lab):</strong></p>
            <ul>
                <li><strong>C</strong>linical criteria (symptoms, signs)</li>
                <li><strong>P</strong>erson criteria (age, location, occupation)</li>
                <li><strong>R</strong>estrictions (time, place)</li>
                <li><strong>T</strong>ime period (outbreak dates)</li>
                <li><strong>Lab</strong>oratory confirmation (if available)</li>
            </ul>

            <h3>Step 5: Find Cases & Record Information</h3>
            <p><strong>Purpose:</strong> Systematically identify all cases</p>
            <ul>
                <li>Active case finding (search for cases)</li>
                <li>Create line lists (spreadsheet of cases)</li>
                <li>Record key variables (demographics, symptoms, exposures)</li>
            </ul>

            <h3>Step 6: Perform Descriptive Epidemiology</h3>
            <p><strong>Purpose:</strong> Describe outbreak by Person, Place, Time</p>
            <ul>
                <li><strong>Person:</strong> Who is affected? (age, sex, occupation)</li>
                <li><strong>Place:</strong> Where are cases occurring? (maps, geographic patterns)</li>
                <li><strong>Time:</strong> When did cases occur? (epi curve, timeline)</li>
            </ul>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: The Epi Curve is Key
                </div>
                <div class="callout-content">
                    <p>The epidemic curve (epi curve) created in Step 6 is one of the MOST important tools:</p>
                    <ul>
                        <li><strong>Point source:</strong> Single peak (common exposure)</li>
                        <li><strong>Propagated:</strong> Multiple peaks (person-to-person)</li>
                        <li><strong>Continuous:</strong> Plateau (ongoing exposure)</li>
                    </ul>
                    <p>The epi curve shape helps generate hypotheses in Step 7!</p>
                </div>
            </div>

            <h3>Step 7: Develop Hypotheses</h3>
            <p><strong>Purpose:</strong> Generate educated guesses about source and transmission</p>
            <ul>
                <li>Based on descriptive epi (Step 6)</li>
                <li>Consider: What? Where? When? How?</li>
                <li>Identify potential exposures</li>
                <li>Propose transmission mechanisms</li>
            </ul>

            <h3>Step 8: Evaluate Hypotheses Epidemiologically</h3>
            <p><strong>Purpose:</strong> Use statistics to confirm or refute hypotheses</p>
            <ul>
                <li>Calculate attack rates for exposed vs. unexposed</li>
                <li>Compute relative risk (RR) or odds ratio (OR)</li>
                <li>Determine if associations are statistically significant</li>
            </ul>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Hypothesis Testing Timing
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Should you test hypotheses before or after creating the epi curve?"</p>
                    <p><strong>WRONG:</strong> Before (you need descriptive epi to generate hypotheses!)</p>
                    <p><strong>RIGHT:</strong> After Step 6 (descriptive epi) and Step 7 (hypothesis development)</p>
                    <p><strong>Sequence:</strong> Describe → Hypothesize → Test</p>
                </div>
            </div>

            <h3>Step 9: Reconsider, Refine, and Re-evaluate Hypotheses</h3>
            <p><strong>Purpose:</strong> If analytical epidemiology (Step 8) doesn't find a significant association, go back!</p>
            <ul>
                <li>Is the hypothesis wrong?</li>
                <li>Is the case definition wrong?</li>
                <li>Consider new vehicles or modes of transmission</li>
                <li>Conduct new studies if needed</li>
            </ul>

            <h3>Step 10: Compare and Reconcile with Lab & Environmental Studies</h3>
            <p><strong>Purpose:</strong> Verification of the epidemiological findings</p>
            <ul>
                <li>Test food, water, air samples (Environmental)</li>
                <li>Genomic sequencing of pathogen (Laboratory)</li>
                <li>Do the lab results match the statistical results?</li>
                <li>Example: Epi data points to chicken, lab finds Salmonella on the cutting board.</li>
            </ul>

            <h3>Step 11: Implement Control and Prevention Measures</h3>
            <p><strong>Purpose:</strong> Stop the outbreak and prevent future ones</p>
            <ul>
                <li>Remove contaminated source (recall food, close restaurant)</li>
                <li>Isolate sick individuals / Quarantine exposed</li>
                <li>Vaccinate susceptible population</li>
                <li>Improve sanitation/hygiene</li>
            </ul>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Critical Timing Note
                </div>
                <div class="callout-content">
                    <p><strong>Control measures can occur at ANY time!</strong></p>
                    <p>If you identify the source early (e.g., contaminated water pump), implement controls immediately. Don't wait to complete all 13 steps!</p>
                </div>
            </div>

            <h3>Step 12: Initiate or Maintain Surveillance</h3>
            <p><strong>Purpose:</strong> Monitor for additional cases and ensure control effectiveness</p>
            <ul>
                <li>Continue tracking cases to ensure the outbreak is declining</li>
                <li>Watch for recurrence or secondary spread</li>
                <li>Measure the success of control efforts</li>
            </ul>

            <h3>Step 13: Communicate Findings</h3>
            <p><strong>Purpose:</strong> Share investigation results with stakeholders and the public</p>
            <ul>
                <li><strong>Report to authorities:</strong> Inform health departments and CDC</li>
                <li><strong>Inform the community:</strong> Update affected populations to prevent panic</li>
                <li><strong>Publish findings:</strong> Write formal reports (e.g., MMWR)</li>
                <li><strong>Provide recommendations:</strong> Share lessons learned</li>
            </ul>

            <h2>7.1 Integrated Case Study: The Picnic Outbreak</h2>
            <div class="neo-card">
                 <h3>Follow the Steps in Action!</h3>
                 <p><strong>Scenario:</strong> 20 people report vomiting after a church picnic.</p>
                 <ol>
                     <li><strong>Prepare:</strong> Gather questionnaires and stool kits.</li>
                     <li><strong>Verify:</strong> Doctor confirms it's not "stomach flu" but Salmonella.</li>
                     <li><strong>Define Case:</strong> "Any picnic attendee with vomiting/diarrhea onset within 48h."</li>
                     <li><strong>Find Cases:</strong> Call all 50 attendees. (Don't just wait for them to call!)</li>
                     <li><strong>Describe:</strong> Epi curve shows a Point Source peak.</li>
                     <li><strong>Hypothesize:</strong> "Potato salad (left in sun) caused illness."</li>
                     <li><strong>Evaluate:</strong> 90% of sick people ate salad; only 10% of well people did. (High Risk Ratio).</li>
                     <li><strong>Reconcile:</strong> Lab confirms Salmonella in leftover salad.</li>
                     <li><strong>Control:</strong> Stop serving food. Educate food handlers.</li>
                     <li><strong>Communicate:</strong> Issue alert to attendees.</li>
                 </ol>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Communication Best Practices
                </div>
                <div class="callout-content">
                    <p><strong>Tailor your message to your audience:</strong></p>
                    <ul>
                        <li><strong>Public Health Authorities:</strong> Technical details, statistical findings, data tables</li>
                        <li><strong>Affected Community:</strong> Simple language, clear actions, what to do/avoid</li>
                        <li><strong>Media:</strong> Key facts, main findings, public health message (avoid jargon)</li>
                        <li><strong>Scientific Community:</strong> Methodology, detailed results, peer-reviewed format</li>
                    </ul>
                    <p><strong>Timing matters:</strong> Communicate early and often. Don't wait for perfect data—share what you know and update as you learn more.</p>
                </div>
            </div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: When to Communicate
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Should you wait until all lab results are back before communicating findings?"</p>
                    <p><strong>ANSWER: NO!</strong></p>
                    <p>Communication should happen throughout the investigation, not just at the end. Early communication:</p>
                    <ul>
                        <li>Warns the public about ongoing risks</li>
                        <li>Helps find additional cases</li>
                        <li>Prevents panic by showing you're taking action</li>
                    </ul>
                    <p><strong>Example:</strong> In the 2014 Ebola outbreak, early communication helped identify contacts and prevent further spread, even before complete epidemiological analysis.</p>
                </div>
            </div>

            <h2>High-Yield Sequencing Practice</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Sequencing Drill
                </div>
                <div class="callout-content">
                    <p><strong>Question 1:</strong> What should you do BEFORE creating a case definition?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer:</strong> Verify diagnosis (Step 2) and establish outbreak existence (Step 3)</p>
                            <p>You need to confirm what disease you're dealing with and that an outbreak actually exists before defining cases.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1.5rem;"><strong>Question 2:</strong> Can you implement control measures before testing hypotheses?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: YES!</strong></p>
                            <p>Step 10 (control measures) can occur at ANY time once you identify the source. You don't need to wait for statistical confirmation if the source is obvious.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1.5rem;"><strong>Question 3:</strong> What comes FIRST: hypothesis development or descriptive epidemiology?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer:</strong> Descriptive epidemiology (Step 6) comes BEFORE hypothesis development (Step 7)</p>
                            <p>You need to describe the outbreak (person, place, time) before you can generate hypotheses about the source.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary: The Critical Sequence</h2>
            <ol>
                <li>Prepare → Verify → Confirm outbreak exists</li>
                <li>Define cases → Find cases → Describe (PPT)</li>
                <li>Hypothesize → Test → Additional studies</li>
                <li>Control (anytime!) → Communicate → Maintain surveillance</li>
            </ol>

            <h2>7.4 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Sequence:</strong> Memorize the 13 steps. "Prepare" is Step 1.</li>
                        <li><strong>Verification:</strong> Verify diagnosis BEFORE creating case definition.</li>
                        <li><strong>Control:</strong> Can happen ANY time.</li>
                    </ul>
                </div>
            </div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Final Exam Trap
                </div>
                <div class="callout-content">
                    <p><strong>Most Tested Sequence Errors:</strong></p>
                    <ol>
                        <li>Testing hypotheses BEFORE descriptive epi</li>
                        <li>Creating case definition BEFORE verifying diagnosis</li>
                        <li>Thinking control measures must wait until Step 10</li>
                        <li>Forgetting Step 1 (preparation) exists</li>
                    </ol>
                    <p><strong>Remember:</strong> The sequence is logical - each step builds on the previous one!</p>
                </div>
            </div>
`
    },
    ch8: {
        title: "Chapter 8: Case Definition Mastery",
        difficulty: "M",
        content: `
    <h1> Chapter 8: Case Definition Mastery</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">A Case Definition is a set of standard criteria for deciding whether a person has a particular disease or other health-related condition. It is the <strong>foundation</strong> of any outbreak investigation.</p>

            <h2>8.1 Components of a Case Definition</h2>
            <p>A complete case definition must include four components:</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                <div style="border: 2px solid var(--navy-primary); padding: 1rem; border-radius: 8px;">
                    <h3 style="color: var(--teal-accent); margin-top: 0;"><i class="ph ph-stethoscope"></i> Clinical Criteria</h3>
                    <p>Symptoms (e.g., fever > 101°F, cough) or Lab results (e.g., positive PCR).</p>
                </div>
                <div style="border: 2px solid var(--navy-primary); padding: 1rem; border-radius: 8px;">
                    <h3 style="color: var(--teal-accent); margin-top: 0;"><i class="ph ph-user"></i> Person</h3>
                    <p>Who is affected? (e.g., Students at High School X).</p>
                </div>
                <div style="border: 2px solid var(--navy-primary); padding: 1rem; border-radius: 8px;">
                    <h3 style="color: var(--teal-accent); margin-top: 0;"><i class="ph ph-map-pin"></i> Place</h3>
                    <p>Where were they? (e.g., Attended the football game).</p>
                </div>
                <div style="border: 2px solid var(--navy-primary); padding: 1rem; border-radius: 8px;">
                    <h3 style="color: var(--teal-accent); margin-top: 0;"><i class="ph ph-clock"></i> Time</h3>
                    <p>When did it happen? (e.g., Onset between Sept 1 and Sept 30).</p>
                </div>
            </div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Risk Factors
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Should you include the suspected source (e.g., 'ate the potato salad') in the case definition?"</p>
                    <p><strong>ANSWER: NO!</strong></p>
                    <p>If you include the risk factor in the definition, you can't test the hypothesis later because you've already assumed everyone sick ate the salad. Keep it neutral.</p>
                </div>
            </div>

            <h2>8.2 Classification Levels</h2>
            <p>Case definitions often have levels of certainty:</p>

            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 1rem; text-align: left;">Level</th>
                        <th style="padding: 1rem; text-align: left;">Criteria</th>
                        <th style="padding: 1rem; text-align: left;">Use Case</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Suspected</strong></td>
                        <td style="padding: 1rem;">Clinical symptoms only.</td>
                        <td style="padding: 1rem;">Early outbreak, cast a wide net.</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Probable</strong></td>
                        <td style="padding: 1rem;">Clinical symptoms + Epidemiologic link (contact with a case).</td>
                        <td style="padding: 1rem;">Typical for many investigations.</td>
                    </tr>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Confirmed</strong></td>
                        <td style="padding: 1rem;">Laboratory verification (Positive test).</td>
                        <td style="padding: 1rem;">Required for final counts/reporting.</td>
                    </tr>
                </tbody>
            </table></div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Mnemonic: Case Definition Components (PPTC)
                </div>
                <div class="callout-content">
                    <p><strong>"PPTC" - Person, Place, Time, Clinical</strong></p>
                    <p>Every case definition must specify these four components:</p>
                    <ul>
                        <li><strong>P</strong>erson – Who? (Age, sex, occupation, risk factors)</li>
                        <li><strong>P</strong>lace – Where? (Geographic location, facility)</li>
                        <li><strong>T</strong>ime – When? (Onset date, duration of illness)</li>
                        <li><strong>C</strong>linical – What symptoms/lab criteria?</li>
                    </ul>
                    <p><strong>Exam Tip:</strong> If a question asks "What's missing from this case definition?", check if all four PPTC elements are present.</p>
                </div>
            </div>

            <h2>8.3 Sensitivity vs. Specificity</h2>
            <p>There is always a trade-off when designing a definition:</p>
            <ul>
                <li><strong>Sensitive (Loose):</strong> "Anyone with a cough." Captures all cases, but also many false positives. Good for <em>early</em> stages (don't miss anyone).</li>
                <li><strong>Specific (Strict):</strong> "PCR positive only." Captures only true cases, but misses many (false negatives). Good for <em>late</em> stages (confirming the cause).</li>
            </ul>

            <div class="neo-card" style="margin: 2rem 0; padding: 1.5rem;">
                <h3 style="margin-top: 0; border-bottom: 2px solid #ddd; padding-bottom: 0.5rem;">Calculating Validity</h3>
                
                <div class="table-container"><table class="table" style="text-align: center;">
                    <tr>
                        <th colspan="2" rowspan="2"></th>
                        <th colspan="2" style="background: #f3f4f6; border: 1px solid #ddd;">True Disease Status (Gold Standard)</th>
                        <th rowspan="2"></th>
                    </tr>
                    <tr>
                        <th style="background: #fee2e2; width: 30%;">Sick (+)</th>
                        <th style="background: #dcfce7; width: 30%;">Healthy (-)</th>
                    </tr>
                    <tr>
                        <th rowspan="2" style="background: #f3f4f6; width: 50px; border: 1px solid #ddd; vertical-align: middle;"><div style="writing-mode: vertical-rl; transform: rotate(180deg); margin: 0 auto;">Test Result</div></th>
                        <th style="background: #fee2e2; padding: 0.5rem;">Pos (+)</th>
                        <td style="border: 2px solid #333; background: #fff0f0; font-weight: bold; font-size: 1.2rem;">TP</td>
                        <td style="border: 2px solid #333; background: #f0fdf4; font-weight: bold; font-size: 1.2rem;">FP</td>
                        <td style="background: #f9fafb; font-size: 0.9rem;">→ PPV</td>
                    </tr>
                    <tr>
                        <th style="background: #dcfce7; padding: 0.5rem;">Neg (-)</th>
                        <td style="border: 2px solid #333; background: #fff0f0; font-weight: bold; font-size: 1.2rem;">FN</td>
                        <td style="border: 2px solid #333; background: #f0fdf4; font-weight: bold; font-size: 1.2rem;">TN</td>
                        <td style="background: #f9fafb; font-size: 0.9rem;">→ NPV</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td style="background: #f9fafb; font-size: 0.9rem;">↓ Sensitivity</td>
                        <td style="background: #f9fafb; font-size: 0.9rem;">↓ Specificity</td>
                        <td></td>
                    </tr>
                </table></div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <!-- Sensitivity / Specificity -->
                    <div style="background: #f8fafc; padding: 1rem; border-radius: 6px;">
                        <h4 style="margin-top: 0; color: var(--navy-primary);">Intrinsic Properties</h4>
                        <div style="margin-bottom: 0.5rem;">
                            <strong>Sensitivity</strong> (True Positive Rate)<br>
                            Ability to correctly identify those <em>with</em> disease.<br>
                            <code style="background: white; padding: 2px 4px; border: 1px solid #ccc;">TP / (TP + FN)</code>
                        </div>
                        <div>
                            <strong>Specificity</strong> (True Negative Rate)<br>
                            Ability to correctly identify those <em>without</em> disease.<br>
                            <code style="background: white; padding: 2px 4px; border: 1px solid #ccc;">TN / (TN + FP)</code>
                        </div>
                    </div>

                    <!-- PPV / NPV -->
                    <div style="background: #f8fafc; padding: 1rem; border-radius: 6px;">
                        <h4 style="margin-top: 0; color: var(--navy-primary);">Predictive Values</h4>
                        <div style="margin-bottom: 0.5rem;">
                            <strong>PPV</strong> (Pos Predictive Value)<br>
                            If I trust positive, does he have it?<br>
                            <code style="background: white; padding: 2px 4px; border: 1px solid #ccc;">TP / (TP + FP)</code>
                        </div>
                        <div>
                            <strong>NPV</strong> (Neg Predictive Value)<br>
                            If I test negative, am I safe?<br>
                            <code style="background: white; padding: 2px 4px; border: 1px solid #ccc;">TN / (TN + FN)</code>
                        </div>
                        <div style="margin-top: 0.5rem; font-size: 0.8rem; font-style: italic; color: #dc2626;">
                            *Dependent on Prevalence!
                        </div>
                    </div>
                </div>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Mnemonics: SNOUT & SPIN
                </div>
                <div class="callout-content">
                    <ul>
                        <li><strong>SnNout:</strong> A Highly <strong>S</strong>e<strong>n</strong>sitive test, when <strong>N</strong>egative, rules <strong>OUT</strong> disease. (No false negatives).</li>
                        <li><strong>SpPin:</strong> A Highly <strong>Sp</strong>ecific test, when <strong>P</strong>ositive, rules <strong>IN</strong> disease. (No false positives).</li>
                    </ul>
                </div>
            </div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Changing the Definition
                </div>
                <div class="callout-content">
                    <p>It is standard practice to <strong>change</strong> the case definition during an investigation.</p>
                    <p>Start <strong>Sensitive</strong> (Loose) to find everyone. Then become more <strong>Specific</strong> (Strict) as you get lab results to avoid analyzing non-cases.</p>
                </div>
                </div>
            </div>

            <div class="neo-card small" style="background: #eef2ff; border-left: 4px solid var(--accent-purple); margin-top: 2rem;">
                 <h3><i class="ph-bold ph-trend-up"></i> Real World Example: H1N1 (2009)</h3>
                 <p>Case definitions evolve!</p>
                 <ul>
                     <li><strong>April 26 (Early):</strong> "Acute respiratory illness AND travel to Mexico." (Specific, to find source).</li>
                     <li><strong>June 1 (Pandemic):</strong> "Acute respiratory illness." (Sensitive, dropped travel criteria as it spread everywhere).</li>
                 </ul>
            </div>

            <h2>8.4 Classification Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Classify the Case
                </div>
                <div class="callout-content">
                    <p><strong>Definition:</strong><br>
                    1. Fever > 100°F (Suspected)<br>
                    2. Fever + Contact with case (Probable)<br>
                    3. Positive Blood Culture (Confirmed)</p>

                    <p style="margin-top: 1rem;"><strong>Patient A:</strong> Has a fever of 102°F. No known contacts. No lab test yet.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Suspected</strong></p>
                            <p>Meets clinical criteria only.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Patient B:</strong> Has a fever of 101°F and sits next to Patient A in class.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Probable</strong></p>
                            <p>Meets clinical criteria + Epi link.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Patient C:</strong> No fever, but has a positive blood culture.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Confirmed</strong></p>
                            <p>Lab evidence usually trumps symptoms for confirmation (though some definitions require symptoms too).</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>8.5 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Components:</strong> Person + Place + Time + Clinical = Complete case definition.</li>
                        <li><strong>Levels:</strong> Suspected → Probable → Confirmed (increasing certainty).</li>
                        <li><strong>Sensitivity vs Specificity:</strong> Broad case def = High sensitivity. Narrow = High specificity.</li>
                        <li><strong>Mnemonic:</strong> "SPC" = Suspected, Probable, Confirmed.</li>
                    </ul>
                </div>
            </div>

            <div class="study-tip">
                <div class="callout-header"><i class="ph ph-warning"></i> Exam Trap</div>
                <div class="callout-content">
                    <p><strong>Changing the case definition mid-investigation</strong> changes your case count! A broader definition early helps find more cases; a narrower definition later increases accuracy.</p>
                </div>
            </div>
        `
    },
    ch9: {
        title: "Chapter 9: Line Lists & Data Cleaning",
        difficulty: "M",
        content: `
            <h1>Chapter 9: Line Lists & Data Cleaning</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">A <strong>Line List</strong> is a table where each row represents a single case and each column represents a variable of interest. It is the primary way epidemiologists organize data during an outbreak.</p>

            <h2>9.1 Structure of a Line List</h2>
            <div style="overflow-x: auto; margin: 2rem 0; border: 2px solid var(--navy-primary); border-radius: 8px;">
                <div class="table-container"><table class="table" style="min-width: 600px;">
                    <thead style="background: var(--navy-primary); color: white;">
                        <tr>
                            <th style="padding: 0.75rem; text-align: left;">Case ID</th>
                            <th style="padding: 0.75rem; text-align: left;">Onset Date</th>
                            <th style="padding: 0.75rem; text-align: left;">Age</th>
                            <th style="padding: 0.75rem; text-align: left;">Sex</th>
                            <th style="padding: 0.75rem; text-align: left;">Symptoms</th>
                            <th style="padding: 0.75rem; text-align: left;">Lab Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background: var(--gray-bg);">
                            <td style="padding: 0.75rem;">001</td>
                            <td style="padding: 0.75rem;">2023-09-01</td>
                            <td style="padding: 0.75rem;">14</td>
                            <td style="padding: 0.75rem;">M</td>
                            <td style="padding: 0.75rem;">Fever, Rash</td>
                            <td style="padding: 0.75rem;">Positive</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;">002</td>
                            <td style="padding: 0.75rem;">2023-09-02</td>
                            <td style="padding: 0.75rem;">13</td>
                            <td style="padding: 0.75rem;">F</td>
                            <td style="padding: 0.75rem;">Fever</td>
                            <td style="padding: 0.75rem;">Pending</td>
                        </tr>
                        <tr style="background: var(--gray-bg);">
                            <td style="padding: 0.75rem;">003</td>
                            <td style="padding: 0.75rem;">2023-09-02</td>
                            <td style="padding: 0.75rem;">14</td>
                            <td style="padding: 0.75rem;">M</td>
                            <td style="padding: 0.75rem;">Vomiting</td>
                            <td style="padding: 0.75rem;">Negative</td>
                        </tr>
                    </tbody>
                </table></div>
            </div>

            <p><strong>Key Components:</strong></p>
            <ul>
                <li><strong>Identifying Info:</strong> Name (usually removed for privacy), ID number.</li>
                <li><strong>Clinical Info:</strong> Symptoms, onset date/time, lab results.</li>
                <li><strong>Descriptive Info:</strong> Age, sex, occupation.</li>
                <li><strong>Risk Factors:</strong> Foods eaten, water sources, contacts.</li>
            </ul>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: PII (Personally Identifiable Information)
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Should you share the Line List with the media?"</p>
                    <p><strong>ANSWER: NO!</strong></p>
                    <p>Line lists contain PII (Names, DOBs, Addresses). You must <strong>de-identify</strong> the data (remove names, keep IDs) before sharing it outside the investigation team.</p>
                </div>
            </div>

            <h2>9.2 Data Cleaning</h2>
            <p>Before analyzing, you must "clean" the data to fix errors.</p>
            <ul>
                <li><strong>Duplicates:</strong> Did the same person get reported twice? (Check Name/DOB).</li>
                <li><strong>Inconsistencies:</strong> Is a male listed as "Pregnant"? Is the Onset Date <em>before</em> the Exposure Date?</li>
                <li><strong>Missing Data:</strong> Are there blanks? (Try to call the patient back).</li>
            </ul>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: The "Unknown" Category
                </div>
                <div class="callout-content">
                    <p>When calculating percentages, handle missing data carefully.</p>
                    <p>If 50 people are sick, 20 ate salad, 20 didn't, and 10 "Don't Know":</p>
                    <ul>
                        <li><strong>Conservative:</strong> Treat "Don't Know" as "No" (20/50 = 40% exposure).</li>
                        <li><strong>Exclusion:</strong> Remove them from the denominator (20/40 = 50% exposure).</li>
                    </ul>
                    <p><em>Usually, we exclude them or report them separately.</em></p>
                </div>
            </div>

            <h2>9.3 Data Cleaning Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Find the Error
                </div>
                <div class="callout-content">
                    <p><strong>Entry 1:</strong> Case ID: 104 | Sex: M | Age: 16 | Symptoms: Ovarian Cyst</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Error: Biological Impossibility</strong></p>
                            <p>Males do not have ovaries. Check if Sex or Diagnosis is wrong.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Entry 2:</strong> Case ID: 105 | Onset: 2023-08-01 | Exposure: 2023-08-05</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Error: Temporal Inconsistency</strong></p>
                            <p>You cannot get sick <em>before</em> you are exposed.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Entry 3:</strong> Case ID: 106 | Age: 152</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Error: Outlier/Typo</strong></p>
                            <p>Likely a typo for 15 or 52. Verify with the source.</p>
                        </div>
                    </div>
                </div>
            <!-- Example Line List -->
            <div class="neo-card" style="margin: 2rem 0; overflow-x: auto;">
                <h3 style="margin-top: 0; color: var(--navy-primary);">9.3 Example: The Completed Line List</h3>
                <p>This is what your spreadsheet should look like before analysis:</p>
                <div class="table-container"><table class="table" style="min-width: 600px; font-size: 0.9rem;">
                    <thead style="background: var(--navy-primary); color: white;">
                        <tr>
                            <th style="padding: 0.5rem; text-align: left;">ID</th>
                            <th style="padding: 0.5rem; text-align: left;">Onset (Time)</th>
                            <th style="padding: 0.5rem; text-align: left;">Age/Sex (Person)</th>
                            <th style="padding: 0.5rem; text-align: left;">Symptoms (Clinical)</th>
                            <th style="padding: 0.5rem; text-align: center;">Ate Salad?</th>
                            <th style="padding: 0.5rem; text-align: center;">Ate Chicken?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background: var(--gray-bg);">
                            <td style="padding: 0.5rem;">001</td>
                            <td style="padding: 0.5rem;">May 1, 12:00</td>
                            <td style="padding: 0.5rem;">34 M</td>
                            <td style="padding: 0.5rem;">Nausea, Vomiting</td>
                            <td style="padding: 0.5rem; text-align: center; color: red; font-weight: bold;">Y</td>
                            <td style="padding: 0.5rem; text-align: center;">N</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.5rem;">002</td>
                            <td style="padding: 0.5rem;">May 1, 14:30</td>
                            <td style="padding: 0.5rem;">29 F</td>
                            <td style="padding: 0.5rem;">Diarrhea, Fever</td>
                            <td style="padding: 0.5rem; text-align: center; color: red; font-weight: bold;">Y</td>
                            <td style="padding: 0.5rem; text-align: center;">Y</td>
                        </tr>
                        <tr style="background: var(--gray-bg);">
                            <td style="padding: 0.5rem;">003</td>
                            <td style="padding: 0.5rem;">May 2, 09:00</td>
                            <td style="padding: 0.5rem;">65 F</td>
                            <td style="padding: 0.5rem;">Vomiting</td>
                            <td style="padding: 0.5rem; text-align: center; color: red; font-weight: bold;">Y</td>
                            <td style="padding: 0.5rem; text-align: center;">N</td>
                        </tr>
                         <tr>
                            <td style="padding: 0.5rem;">004</td>
                            <td style="padding: 0.5rem;">--</td>
                            <td style="padding: 0.5rem;">40 M</td>
                            <td style="padding: 0.5rem;">None (Well)</td>
                            <td style="padding: 0.5rem; text-align: center;">N</td>
                            <td style="padding: 0.5rem; text-align: center;">Y</td>
                        </tr>
                    </tbody>
                </table></div>
                <p style="font-size: 0.85rem; color: #666; margin-top: 0.5rem;">Note: Case 004 is a control (well). Everyone who got sick (001-003) ate the Salad. This is your clue!</p>
            </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Line List:</strong> Row = Case, Column = Variable.</li>
                <li><strong>Cleaning:</strong> Fix typos, duplicates, and impossible values.</li>
                <li><strong>Privacy:</strong> Protect PII.</li>
            </ul>

            <div class="neo-card small" style="background: #fdf2f8; border-left: 4px solid var(--pink-500); margin: 2rem 0;">
                <h3><i class="ph-bold ph-table"></i> Advanced: Three-Way Tables</h3>
                <p>When analyzing data (Person/Place/Time), you might need a Stratified Analysis.</p>
                <p><strong>Scenario:</strong> Are older people more likely to get sick at the picnic?</p>
                <ul>
                    <li><strong>Table 1 (Young < 18):</strong> AR for Salad = 50%</li>
                    <li><strong>Table 2 (Old > 65):</strong> AR for Salad = 90%</li>
                </ul>
                <p>Stratifying by Age (the 3rd variable) reveals the interaction.</p>
            </div>

            <h2>9.4 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Line List:</strong> Row = Case, Column = Variable.</li>
                        <li><strong>Cleaning:</strong> Check for typos, duplicates, and impossible values (e.g., male with ovarian cyst).</li>
                        <li><strong>Privacy:</strong> Remove PII before sharing.</li>
                    </ul>
                </div>
            </div>
`
    },
    ch10: {
        title: "Chapter 10: Epi Curves & Timing",
        difficulty: "A",
        content: `
            <h1>Chapter 10: Epi Curves & Timing</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">An Epidemic Curve (Epi Curve) is a histogram that shows the course of an outbreak by plotting the number of cases by time of onset. The <strong>shape</strong> of the curve tells you the <strong>mode of spread</strong>.</p>

            <h2>10.1 Types of Epi Curves</h2>
            
            <div class="epi-curve-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                <!-- Point Source -->
                <div class="neo-card">
                    <h3 style="color: var(--teal-accent); margin-top: 0;">1. Point Source</h3>
                    <p><strong>Shape:</strong> Sharp rise, sharp fall. All cases occur within one incubation period.</p>
                    <svg viewBox="0 0 200 100" style="width: 100%; max-width: 280px; height: auto; background: #f0f0f0; border-radius: 4px; margin: 0 auto; display: block;">
                        <line x1="10" y1="90" x2="190" y2="90" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                        <line x1="10" y1="90" x2="10" y2="10" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                        <rect x="30" y="80" width="15" height="10" fill="var(--navy-primary)"/>
                        <rect x="45" y="60" width="15" height="30" fill="var(--navy-primary)"/>
                        <rect x="60" y="20" width="15" height="70" fill="var(--navy-primary)"/>
                        <rect x="75" y="50" width="15" height="40" fill="var(--navy-primary)"/>
                        <rect x="90" y="80" width="15" height="10" fill="var(--navy-primary)"/>
                    </svg>
                </div>
                <!-- Continuous -->
                <div class="neo-card">
                    <h3 style="color: var(--teal-accent); margin-top: 0; font-weight:800;">2. Continuous Common Source</h3>
                    <p><strong>Shape:</strong> Rise to a plateau, stays high, then falls when source is removed.</p>
                    <svg viewBox="0 0 200 100" style="width: 100%; max-width: 280px; height: auto; background: #f0f0f0; border-radius: 4px; margin: 0 auto; display: block;">
                        <line x1="10" y1="90" x2="190" y2="90" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                        <line x1="10" y1="90" x2="10" y2="10" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                        <rect x="30" y="70" width="15" height="20" fill="var(--navy-primary)"/>
                        <rect x="45" y="30" width="15" height="60" fill="var(--navy-primary)"/>
                        <rect x="60" y="30" width="15" height="60" fill="var(--navy-primary)"/>
                        <rect x="75" y="25" width="15" height="65" fill="var(--navy-primary)"/>
                        <rect x="90" y="30" width="15" height="60" fill="var(--navy-primary)"/>
                        <rect x="105" y="70" width="15" height="20" fill="var(--navy-primary)"/>
                    </svg>
                </div>
                 <!-- Propagated -->
                <div class="neo-card">
                    <h3 style="color: var(--teal-accent); margin-top: 0;">3. Propagated</h3>
                    <p><strong>Shape:</strong> Series of progressively taller peaks, one incubation period apart.</p>
                    <svg viewBox="0 0 200 100" style="width: 100%; max-width: 280px; height: auto; background: #f0f0f0; border-radius: 4px; margin: 0 auto; display: block;">
                         <line x1="10" y1="90" x2="190" y2="90" stroke="#333" stroke-width="2"/>
                        <line x1="10" y1="90" x2="10" y2="10" stroke="#333" stroke-width="2"/>
                        <rect x="20" y="80" width="10" height="10" fill="var(--navy-primary)"/>
                        <rect x="50" y="70" width="10" height="20" fill="var(--navy-primary)"/>
                        <rect x="60" y="60" width="10" height="30" fill="var(--navy-primary)"/>
                        <rect x="100" y="50" width="10" height="40" fill="var(--navy-primary)"/>
                        <rect x="110" y="30" width="10" height="60" fill="var(--navy-primary)"/>
                        <rect x="120" y="40" width="10" height="50" fill="var(--navy-primary)"/>
                    </svg>
                </div>
                 <!-- Intermittent -->
                <div class="neo-card">
                    <h3 style="color: var(--teal-accent); margin-top: 0;">4. Intermittent</h3>
                    <p><strong>Shape:</strong> Irregular peaks. Source is not constant.</p>
                    <svg viewBox="0 0 200 100" style="width: 100%; max-width: 280px; height: auto; background: #f0f0f0; border-radius: 4px; margin: 0 auto; display: block;">
                         <line x1="10" y1="90" x2="190" y2="90" stroke="#333" stroke-width="2"/>
                        <line x1="10" y1="90" x2="10" y2="10" stroke="#333" stroke-width="2"/>
                         <rect x="30" y="60" width="15" height="30" fill="var(--navy-primary)"/>
                        <rect x="80" y="50" width="15" height="40" fill="var(--navy-primary)"/>
                        <rect x="130" y="70" width="15" height="20" fill="var(--navy-primary)"/>
                    </svg>
                </div>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Study Guide Tip: Outliers
                </div>
                <div class="callout-content">
                    <p><strong>Outlier:</strong> A case that stands apart from the rest.</p>
                    <ul>
                        <li><strong>Early Outlier:</strong> Likely the "Index Case" (Patient Zero) or an unrelated background case.</li>
                        <li><strong>Late Outlier:</strong> Likely a secondary case (someone who got it from a sick person) or unrelated.</li>
                    </ul>
                    <p><em>Always investigate outliers! They tell a story.</em></p>
                </div>
            </div>

            <h2>10.2 Exposure Window & Logic</h2>
            <p>For Point Source outbreaks, the Epi Curve is a mathematical tool. By using the known incubation period of a disease, you can calculate exactly when the exposure happened.</p>
            <p>The most critical use of the incubation period is reverse-engineering the <strong>Exposure Window</strong>—the definitive time frame during which the source of the outbreak was active.</p>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-function"></i>
                    Formulas: The Reverse-Engineering Logic
                </div>
                <div class="callout-content">
                    <p>To determine the window, use the extreme values:</p>
                    <p style="background: rgba(57, 204, 204, 0.1); padding: 0.5rem; border-radius: 4px; margin: 0.5rem 0;">
                        <strong>Earliest Exposure = Earliest Onset - Maximum Incubation</strong>
                    </p>
                    <p><em>(To get sick earliest, you must have been exposed at the earliest possible time relative to the long incubation).</em></p>
                    
                    <p style="background: rgba(57, 204, 204, 0.1); padding: 0.5rem; border-radius: 4px; margin: 0.5rem 0;">
                        <strong>Latest Exposure = Latest Onset - Minimum Incubation</strong>
                    </p>
                    <p><em>(To be the last case, you must have been exposed at the latest possible time relative to the short incubation).</em></p>
                </div>
            </div>

            <h2>10.3 Identifying Cases</h2>
            <ul>
                <li><strong>Index Case:</strong> The very first case to come to the attention of health authorities.</li>
                <li><strong>Primary Case:</strong> The person who brings the disease into a population.</li>
                <li><strong>Secondary Case:</strong> Persons who get the disease from the Primary Case (person-to-person spread).</li>
            </ul>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Outliers
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Should you include outliers in your calculation?"</p>
                    <p><strong>ANSWER:</strong> Generally, <strong>NO</strong>.</p>
                    <p>If there is a single case that occurred 2 weeks before everyone else, it is likely the Index Case or unrelated. Focus on the main cluster for the exposure window of the general outbreak.</p>
                </div>
            </div>

            <h2>10.4 Exposure Window Drill Set</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Calculate the Window
                </div>
                <div class="callout-content">
                    <p><strong>Scenario:</strong> An outbreak has a known Incubation Period of <strong>1 to 3 days</strong>.</p>
                    <p><strong>Line List Data:</strong></p>
                    <ul>
                        <li>Earliest Onset: <strong>June 10</strong> (12:00 PM)</li>
                        <li>Latest Onset: <strong>June 14</strong> (12:00 PM)</li>
                    </ul>

                    <p style="margin-top: 1rem;"><strong>Question 1:</strong> Calculate the Earliest Possible Exposure.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Formula: Earliest Onset - Max Incubation</strong></p>
                            <p>June 10 - 3 days = <strong>June 7</strong></p>
                            <p><em>(Specifically June 7 at 12:00 PM)</em></p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 2:</strong> Calculate the Latest Possible Exposure.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Formula: Latest Onset - Min Incubation</strong></p>
                            <p>June 14 - 1 day = <strong>June 13</strong></p>
                            <p><em>(Specifically June 13 at 12:00 PM)</em></p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 3:</strong> A team dinner was held on <strong>June 6</strong>. Could this be the source?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: NO</strong></p>
                            <p>The exposure window is <strong>June 7 to June 13</strong>.</p>
                            <p>June 6 is outside this window. Even if the food was bad, it couldn't have caused <em>this</em> specific cluster of cases based on the incubation period.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Start Window:</strong> First Case - Max Incubation.</li>
                <li><strong>End Window:</strong> Last Case - Min Incubation.</li>
                <li><strong>Logic:</strong> Rule out any events outside this calculated window.</li>
            </ul>

            <!-- Practice tip for Epi Curve and Exposure Window tools -->
            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Practice Tip: Use the Epi Curve & Exposure Tools
                </div>
                <div class="callout-content">
                    <p>
                        Bring the math to life by plotting your own epidemic curves and calculating exposure windows using the
                        <strong>Epi Curve Generator</strong> and <strong>Exposure&nbsp;Window Calculator</strong> in the Interactive Tools section.
                        Enter the dates from an outbreak scenario to observe how the curve shape distinguishes between point‑source and propagated
                        outbreaks, then use the calculator to pinpoint the likely exposure interval. Experimenting with these tools will make the
                        formulas and logic in this chapter tangible.
                    </p>
                </div>
            </div>

            <h2>10.5 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Exposure Window:</strong> Earliest Onset - Max Incubation TO Latest Onset - Min Incubation.</li>
                        <li><strong>Outliers:</strong> Usually exclude from window calculation.</li>
                        <li><strong>Logic:</strong> If an event is outside the window, it's NOT the source.</li>
                    </ul>
                </div>
            </div>
        `
    }, ch11: {
        title: "Chapter 11: Outbreak Math I: AR & RR",

        difficulty: "M",
        content: `
    <h1>Chapter 11: Outbreak Math I: AR & RR</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Analytic epidemiology uses math to test hypotheses. The core tools for this are the <strong>2x2 Table</strong>, <strong>Attack Rates (AR)</strong>, and <strong>Relative Risk (RR)</strong>.</p>

            <h2>11.1 The Standard 2x2 Table</h2>
            <p>Always set up your table the same way to avoid calculation errors.</p>

            <div class="table-container"><table class="table" style="text-align: center;">
                <thead>
                    <tr style="background: var(--navy-primary); color: white;">
                        <th style="padding: 1rem; border: 1px solid white;">Exposure</th>
                        <th style="padding: 1rem; border: 1px solid white;">Ill (Cases)</th>
                        <th style="padding: 1rem; border: 1px solid white;">Well (Controls)</th>
                        <th style="padding: 1rem; border: 1px solid white;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 1rem; font-weight: bold; background: var(--gray-bg);">Exposed</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-size: 1.2rem;">a</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-size: 1.2rem;">b</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-weight: bold;">a + b</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; font-weight: bold; background: var(--gray-bg);">Unexposed</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-size: 1.2rem;">c</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-size: 1.2rem;">d</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-weight: bold;">c + d</td>
                    </tr>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem; font-weight: bold;">Total</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-weight: bold;">a + c</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-weight: bold;">b + d</td>
                        <td style="padding: 1rem; border: 1px solid #ddd; font-weight: bold;">N</td>
                    </tr>
                </tbody>
            </table></div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Table Orientation
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> Tests sometimes flip the table (putting Disease on the left and Exposure on top).</p>
                    <p><strong>STRATEGY:</strong> ALWAYS re-draw the table in the standard format (Exposure on Left, Disease on Top) before calculating. The formulas (a/a+b) only work if the table is standard!</p>
                </div>
            </div>

            <h2>11.2 Attack Rate (AR)</h2>
            <p>An Attack Rate is actually a <strong>proportion</strong> (risk), not a true rate. It represents the probability of getting sick.</p>
            
            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-function"></i>
                    Formula: Attack Rate
                </div>
                <div class="callout-content">
                    <p style="font-size: 1.2rem; text-align: center; margin: 1rem 0;">
                        <strong>AR = (Number of Ill / Total Number in Group) × 100</strong>
                    </p>
                    <ul>
                        <li><strong>AR (Exposed):</strong> a / (a + b)</li>
                        <li><strong>AR (Unexposed):</strong> c / (c + d)</li>
                    </ul>
                </div>
            </div>

            <h2>11.3 Relative Risk (RR)</h2>
            <p>Relative Risk compares the risk of disease in the exposed group to the risk in the unexposed group. It is used in <strong>Cohort Studies</strong>.</p>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-function"></i>
                    Formula: Relative Risk
                </div>
                <div class="callout-content">
                    <p style="font-size: 1.2rem; text-align: center; margin: 1rem 0;">
                        <strong>RR = (AR Exposed) / (AR Unexposed)</strong>
                    </p>
                    <p style="text-align: center;">
                        <em>or</em><br>
                        <strong>RR = [a / (a + b)] / [c / (c + d)]</strong>
                    </p>
                </div>
            </div>

            </div>

            <div class="neo-card small" style="border: 2px solid var(--accent-orange); margin: 2rem 0;">
                <h3><i class="ph-bold ph-clock"></i> Advanced: Incidence Density (Person-Time)</h3>
                <p>When people are at risk for different lengths of time (e.g., some leave the study early), use <strong>Incidence Density</strong>.</p>
                <p><strong>Formula:</strong> New Cases / Total Person-Time Observed</p>
                <p><em>Example:</em> 5 cases per 100 person-years.</p>
            </div>

            <h3>Interpreting RR</h3>
            <ul>
                <li><strong>RR = 1.0:</strong> No association (Null hypothesis). Risk is same in both groups.</li>
                <li><strong>RR > 1.0:</strong> Positive association (Risk factor). Exposure increases risk.</li>
                <li><strong>RR < 1.0:</strong> Negative association (Protective factor). Exposure decreases risk (e.g., vaccines).</li>
            </ul>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Magnitude Matters
                </div>
                <div class="callout-content">
                    <p>A statistical association doesn't prove causation, but a <strong>strong</strong> association makes it more likely.</p>
                    <ul>
                        <li>RR = 1.2 (Weak association)</li>
                        <li>RR = 3.0 (Moderate association)</li>
                        <li>RR = 10.0 (Strong association)</li>
                    </ul>
                    <p>In a foodborne outbreak, look for the food item with the <strong>highest RR</strong> (and usually a high AR in the exposed).</p>
                </div>
            </div>

            <h2>11.4 Calculation Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Practice Problem: The Church Picnic
                </div>
                <div class="callout-content">
                    <p><strong>Scenario:</strong> At a church picnic, 100 people ate potato salad, and 60 of them got sick. 50 people did NOT eat potato salad, and 5 of them got sick.</p>
                    
                    <p style="margin-top: 1rem;"><strong>1. Set up the 2x2 Table:</strong></p>
                    <div class="accordion">
                        <div class="accordion-header">Show Table</div>
                        <div class="accordion-content">
                            <div class="table-container"><table class="table" style="text-align: center;">
                                <tr style="background:#f0f0f0;">
                                    <th style="padding:0.5rem; border:1px solid #ccc;"></th>
                                    <th style="padding:0.5rem; border:1px solid #ccc;">Ill</th>
                                    <th style="padding:0.5rem; border:1px solid #ccc;">Well</th>
                                    <th style="padding:0.5rem; border:1px solid #ccc;">Total</th>
                                </tr>
                                <tr>
                                    <td style="padding:0.5rem; border:1px solid #ccc; font-weight:bold;">Exposed (Salad)</td>
                                    <td style="padding:0.5rem; border:1px solid #ccc;">60 (a)</td>
                                    <td style="padding:0.5rem; border:1px solid #ccc;">40 (b)</td>
                                    <td style="padding:0.5rem; border:1px solid #ccc;">100</td>
                                </tr>
                                <tr>
                                    <td style="padding:0.5rem; border:1px solid #ccc; font-weight:bold;">Unexposed</td>
                                    <td style="padding:0.5rem; border:1px solid #ccc;">5 (c)</td>
                                    <td style="padding:0.5rem; border:1px solid #ccc;">45 (d)</td>
                                    <td style="padding:0.5rem; border:1px solid #ccc;">50</td>
                                </tr>
                            </table></div>
                            <p style="font-size: 0.9rem; color: #666;">Note: You usually have to calculate the "Well" column (Total - Ill).</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>2. Calculate AR (Exposed):</strong></p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>AR Exposed = a / (a + b)</strong></p>
                            <p>Ill Exposed (a) = 60</p>
                            <p>Total Exposed (a + b) = 100</p>
                            <p><strong>AR = 60 / 100 = 0.60 or 60%</strong></p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>3. Calculate AR (Unexposed):</strong></p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>AR Unexposed = c / (c + d)</strong></p>
                            <p>Ill Unexposed (c) = 5</p>
                            <p>Total Unexposed (c + d) = 50</p>
                            <p><strong>AR = 5 / 50 = 0.10 or 10%</strong></p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>4. Calculate Relative Risk (RR):</strong></p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>RR = AR Exposed / AR Unexposed</strong></p>
                            <p>RR = 0.60 / 0.10</p>
                            <p><strong>RR = 6.0</strong></p>
                            <p><strong>Interpretation:</strong> People who ate potato salad were <strong>6 times more likely</strong> to get sick than those who did not.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>11.4 Advanced: Person-Time Incidence</h2>
            <div class="callout-header" style="background: var(--gold-accent); color: var(--navy-primary);">
                <i class="ph ph-star"></i> National Level Concept
            </div>
            <p>In standard Attack Rate calculations (Cumulative Incidence), we assume everyone started at the same time and was followed for the entire outbreak. But what if people join or leave the study at different times?</p>
            <p><strong>Incidence Rate (Incidence Density)</strong> uses "Person-Time" in the denominator.</p>

            <div class="neo-card small" style="background: #e0f2f1; border-left: 4px solid var(--teal-accent); margin: 1rem 0;">
                <p style="font-size: 1.1rem; text-align: center;"><strong>Incidence Rate = New Cases / Total Person-Time</strong></p>
            </div>

            <p><strong>What is Person-Time?</strong> It is the sum of time that each person remained "at risk" (disease-free).</p>
            <p><em>Example:</em> You follow 3 people for a year:</p>
            <ul>
                <li>Person A: Specific disease-free for 10 years.</li>
                <li>Person B: Gets sick after 2 years.</li>
                <li>Person C: Moves away (lost to follow-up) after 5 years.</li>
            </ul>
            <p><strong>Total Person-Time calculation:</strong> 10 + 2 + 5 = 17 Person-Years.</p>
            <p>If Person B was the only case, rate = 1 / 17 = 0.058 cases per person-year.</p>

            <h2>Summary</h2>
            <ul>
                <li>Always set up the 2x2 table: Exposure Left, Disease Top.</li>
                <li>AR = Ill / Total (for that group).</li>
                <li>RR = AR Exposed / AR Unexposed.</li>
                <li>RR > 1 indicates a risk factor.</li>
            </ul>

            <!-- Practice tip for interactive calculator -->
            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Practice Tip: Use the 2×2 Calculator
                </div>
                <div class="callout-content">
                    <p>
                        Reinforce your understanding of Attack Rates and Relative Risk by experimenting with the
                        <strong>Interactive&nbsp;2×2 Table&nbsp;Calculator</strong> in the Interactive Tools section. Enter different
                        values for <em>a</em>, <em>b</em>, <em>c</em> and <em>d</em> to see how AR and RR change. Hands‑on practice with
                        real numbers makes these formulas stick.
                    </p>
                </div>
            </div>

            <h2>11.5 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>2×2 Setup:</strong> Exposure on LEFT, Disease on TOP.</li>
                        <li><strong>AR:</strong> Cases / Total in group.</li>
                        <li><strong>RR:</strong> AR Exposed / AR Unexposed.</li>
                        <li><strong>RR > 1:</strong> Risk factor. RR < 1: Protective.</li>
                    </ul>
                </div>
            </div>
        `
    },
    ch12: {
        title: "Chapter 12: Outbreak Math II: Advanced",
        difficulty: "A",
        content: `
    <h1>Chapter 12: Outbreak Math II <span class="advanced-topic-badge">Extension</span></h1>
            
            <div class="advanced-section">
                <h4><i class="ph-bold ph-graduation-cap"></i> Note for Division B Students</h4>
                <p style="margin-bottom:0;">Core Division B rules focus on Attack Rates and Risk Ratios (Chapter 11). The concepts in this chapter (Odds Ratios, Confidence Intervals) are typically Division C topics but often appear as tie-breakers or in advanced invitationals. Learn this to master the "why" and gain a competitive edge.</p>
            </div>

            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2);">Advanced</span>
                </div>
            </div>

            <div style="text-align: center; margin: 2rem 0;">
                <h3 style="color: var(--navy-primary); margin-bottom: 1rem;">📊 Study Design Decision Flowchart</h3>
                <svg width="600" height="650" viewBox="0 0 600 650" class="responsive-svg" style="max-width: 600px; height: auto; display: block; margin: 0 auto; background: white; border: 2px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
                    <defs>
                        <marker id="arrow-flow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                            <polygon points="0 0, 8 3, 0 6" fill="#374151" />
                        </marker>
                    </defs>

                    <!-- Title -->
                    <text x="300" y="25" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e40af">When to Choose Each Study Type</text>

                    <!-- Q1: Can you assign exposure? -->
                    <g transform="translate(300, 55)">
                        <rect x="-110" y="-20" width="220" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
                        <text x="0" y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">Can you ASSIGN/CONTROL</text>
                        <text x="0" y="10" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">who gets exposed?</text>
                    </g>

                    <!-- YES -> RCT/Clinical Trial -->
                    <line x1="190" y1="55" x2="110" y2="55" stroke="#059669" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="145" y="50" font-size="9" font-weight="bold" fill="#059669">YES</text>
                    
                    <g transform="translate(70, 55)">
                        <rect x="-60" y="-20" width="120" height="56" rx="8" fill="#dcfce7" stroke="#059669" stroke-width="3"/>
                        <text x="0" y="-4" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">RCT / Clinical</text>
                        <text x="0" y="8" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Trial</text>
                        <text x="0" y="22" text-anchor="middle" font-size="7" fill="#059669" font-style="italic">Gold Standard</text>
                        <text x="0" y="32" text-anchor="middle" font-size="7" fill="#6b7280">Ex: Vaccine trials</text>
                    </g>

                    <!-- NO -> Q2 -->
                    <line x1="300" y1="75" x2="300" y2="110" stroke="#6b7280" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="310" y="95" font-size="9" font-weight="bold" fill="#6b7280">NO</text>

                    <!-- Q2: Analyzing individuals or groups? -->
                    <g transform="translate(300, 135)">
                        <rect x="-110" y="-20" width="220" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
                        <text x="0" y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">Data on INDIVIDUALS</text>
                        <text x="0" y="10" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">or population GROUPS?</text>
                    </g>

                    <!-- GROUPS -> Ecological -->
                    <line x1="410" y1="135" x2="490" y2="135" stroke="#9333ea" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="440" y="130" font-size="9" font-weight="bold" fill="#9333ea">GROUPS</text>
                    
                    <g transform="translate(530, 135)">
                        <rect x="-50" y="-20" width="100" height="56" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="3"/>
                        <text x="0" y="-4" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">ECOLOGICAL</text>
                        <text x="0" y="10" text-anchor="middle" font-size="8" fill="#9333ea">Population data</text>
                        <text x="0" y="22" text-anchor="middle" font-size="7" fill="#6b7280" font-style="italic">Ex: Country-level</text>
                        <text x="0" y="32" text-anchor="middle" font-size="7" fill="#6b7280">smoking rates</text>
                    </g>

                    <!-- INDIVIDUALS -> Q3 -->
                    <line x1="300" y1="155" x2="300" y2="190" stroke="#6b7280" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="270" y="175" font-size="9" font-weight="bold" fill="#6b7280">INDIVIDUALS</text>

                    <!-- Q3: Follow over time? -->
                    <g transform="translate(300, 215)">
                        <rect x="-110" y="-20" width="220" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
                        <text x="0" y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">Follow subjects</text>
                        <text x="0" y="10" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">OVER TIME?</text>
                    </g>

                    <!-- YES -> Q4 -->
                    <line x1="190" y1="215" x2="130" y2="260" stroke="#059669" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="155" y="235" font-size="9" font-weight="bold" fill="#059669">YES</text>

                    <!-- Q4: Start with exposure? -->
                    <g transform="translate(110, 285)">
                        <rect x="-90" y="-18" width="180" height="36" rx="6" fill="#fff3e0" stroke="#ea580c" stroke-width="2"/>
                        <text x="0" y="-2" text-anchor="middle" font-size="9" fill="#7c2d12">Classify by EXPOSURE</text>
                        <text x="0" y="10" text-anchor="middle" font-size="9" fill="#7c2d12">status first?</text>
                    </g>

                    <!-- YES -> Cohort -->
                    <line x1="110" y1="303" x2="110" y2="345" stroke="#6b7280" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="120" y="325" font-size="8" font-weight="bold" fill="#6b7280">YES</text>
                    
                    <g transform="translate(110, 380)">
                        <rect x="-70" y="-24" width="140" height="68" rx="8" fill="#dcfce7" stroke="#059669" stroke-width="3"/>
                        <text x="0" y="-6" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">COHORT</text>
                        <text x="0" y="6" text-anchor="middle" font-size="8" fill="#059669">Exposed → Disease</text>
                        <text x="0" y="18" text-anchor="middle" font-size="7" fill="#059669" font-weight="bold">Use: RR, AR</text>
                        <text x="0" y="30" text-anchor="middle" font-size="7" fill="#6b7280" font-style="italic">Ex: Framingham</text>
                        <text x="0" y="40" text-anchor="middle" font-size="7" fill="#6b7280">Heart Study</text>
                    </g>

                    <!-- NO from Q3 -> Q5 -->
                    <line x1="300" y1="235" x2="300" y2="270" stroke="#6b7280" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="310" y="255" font-size="9" font-weight="bold" fill="#6b7280">NO</text>

                    <!-- Q5: Start with disease? -->
                    <g transform="translate(300, 295)">
                        <rect x="-90" y="-18" width="180" height="36" rx="6" fill="#fff3e0" stroke="#ea580c" stroke-width="2"/>
                        <text x="0" y="-2" text-anchor="middle" font-size="9" fill="#7c2d12">Classify by DISEASE</text>
                        <text x="0" y="10" text-anchor="middle" font-size="9" fill="#7c2d12">status first?</text>
                    </g>

                    <!-- YES -> Case-Control -->
                    <line x1="390" y1="295" x2="455" y2="345" stroke="#059669" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="415" y="318" font-size="8" font-weight="bold" fill="#059669">YES</text>
                    
                    <g transform="translate(480, 380)">
                        <rect x="-70" y="-24" width="140" height="68" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
                        <text x="0" y="-6" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">CASE-CONTROL</text>
                        <text x="0" y="6" text-anchor="middle" font-size="8" fill="#dc2626">Cases vs Controls</text>
                        <text x="0" y="18" text-anchor="middle" font-size="7" fill="#dc2626" font-weight="bold">Use: OR</text>
                        <text x="0" y="30" text-anchor="middle" font-size="7" fill="#6b7280" font-style="italic">Ex: Lung cancer</text>
                        <text x="0" y="40" text-anchor="middle" font-size="7" fill="#6b7280">& smoking study</text>
                    </g>

                    <!-- NO -> Cross-Sectional -->
                    <line x1="300" y1="313" x2="300" y2="350" stroke="#6b7280" stroke-width="2" marker-end="url(#arrow-flow)"/>
                    <text x="310" y="333" font-size="8" font-weight="bold" fill="#6b7280">NO</text>
                    
                    <g transform="translate(300, 385)">
                        <rect x="-75" y="-24" width="150" height="68" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/>
                        <text x="0" y="-6" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">CROSS-SECTIONAL</text>
                        <text x="0" y="6" text-anchor="middle" font-size="8" fill="#3b82f6">Snapshot in time</text>
                        <text x="0" y="18" text-anchor="middle" font-size="7" fill="#3b82f6" font-weight="bold">Prevalence</text>
                        <text x="0" y="30" text-anchor="middle" font-size="7" fill="#6b7280" font-style="italic">Ex: NHANES</text>
                        <text x="0" y="40" text-anchor="middle" font-size="7" fill="#6b7280">survey</text>
                    </g>

                    <!-- Exam Tips Box -->
                    <g transform="translate(300, 485)">
                        <rect x="-280" y="-50" width="560" height="130" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
                        <text x="0" y="-32" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">🎯 EXAM QUICK GUIDE</text>
                        
                        <g transform="translate(-250, -12)">
                            <text x="0" y="0" text-anchor="start" font-size="9" fill="#78350f" font-weight="bold">When to Choose:</text>
                            <text x="0" y="14" text-anchor="start" font-size="8" fill="#78350f">✓ RCT: Testing intervention, ethical</text>
                            <text x="0" y="26" text-anchor="start" font-size="8" fill="#78350f">✓ Cohort: Common disease, $ available</text>
                            <text x="0" y="38" text-anchor="start" font-size="8" fill="#78350f">✓ Case-Control: RARE disease, fast</text>
                            <text x="0" y="50" text-anchor="start" font-size="8" fill="#78350f">✓ Cross-Sect: Prevalence, hypothesis</text>
                            <text x="0" y="62" text-anchor="start" font-size="8" fill="#78350f">✓ Ecological: Population trends</text>
                        </g>

                        <g transform="translate(30, -12)">
                            <text x="0" y="0" text-anchor="start" font-size="9" fill="#78350f" font-weight="bold">Key Clues:</text>
                            <text x="0" y="14" text-anchor="start" font-size="8" fill="#78350f">• "Randomized" → RCT</text>
                            <text x="0" y="26" text-anchor="start" font-size="8" fill="#78350f">• "Followed over time" → Cohort</text>
                            <text x="0" y="38" text-anchor="start" font-size="8" fill="#78350f">• "Cases and controls" → Case-Control</text>
                            <text x="0" y="50" text-anchor="start" font-size="8" fill="#78350f">• "Survey at one time" → Cross-Sect</text>
                            <text x="0" y="62" text-anchor="start" font-size="8" fill="#78350f">• "Country-level data" → Ecological</text>
                        </g>

                        <text x="0" y="85" text-anchor="middle" font-size="8" fill="#92400e" font-style="italic">Memory Trick: "Really Cool Cohorts Create Cross-Sectional Ecological Evidence"</text>
                    </g>
                </svg>
            </div>

            <div class="exam-trap" style="margin: 2rem 0;">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    EXAM TRAP: Understanding TIME in Study Designs
                </div>
                <div class="callout-content">
                    <h4 style="color: var(--danger); margin-top: 0;">Time Direction = Key to Study Type</h4>
                    
                    <div style="background: #fef3c7; padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                        <p><strong>🕐 PROSPECTIVE (Forward in Time):</strong></p>
                        <ul>
                            <li><strong>RCT:</strong> Assign exposure → Follow → Measure outcome</li>
                            <li><strong>Cohort:</strong> Identify exposed/unexposed → Follow → See who gets disease</li>
                            <li><strong>Exam Clue:</strong> "Followed for 5 years" = Prospective</li>
                        </ul>
                    </div>

                    <div style="background: #fee2e2; padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                        <p><strong>🕙 RETROSPECTIVE (Backward in Time):</strong></p>
                        <ul>
                            <li><strong>Case-Control:</strong> Start with disease status → Look back at exposures</li>
                            <li><strong>Exam Clue:</strong> "Researchers interviewed cases about past exposure" = Retrospective</li>
                        </ul>
                    </div>

                    <div style="background: #dbeafe; padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                        <p><strong>📸 NO TIME ELEMENT (Snapshot):</strong></p>
                        <ul>
                            <li><strong>Cross-Sectional:</strong> Measure exposure AND disease at SAME time</li>
                            <li><strong>Exam Clue:</strong> "Survey taken in March 2024" = Cross-Sectional</li>
                            <li><strong>TRAP:</strong> Cannot determine if exposure caused disease or disease caused exposure!</li>
                        </ul>
                    </div>

                    <h4 style="color: var(--danger); margin-top: 1.5rem;">Common Exam Traps:</h4>
                    <ol>
                        <li><strong>TRAP:</strong> "Study followed 100 smokers and 100 non-smokers for lung cancer"
                            <br><strong>Answer:</strong> Cohort (following forward = prospective)</li>
                        
                        <li style="margin-top: 0.5rem;"><strong>TRAP:</strong> "Compared 50 cancer patients with 50 healthy controls for smoking history"
                            <br><strong>Answer:</strong> Case-Control (looking back = retrospective)</li>
                        
                        <li style="margin-top: 0.5rem;"><strong>TRAP:</strong> "Can you calculate attack rate?"
                            <br><strong>Answer:</strong> ONLY if you know the total population at risk (Cohort/RCT only!)</li>
                        
                        <li style="margin-top: 0.5rem;"><strong>TRAP:</strong> "Survey found 30% of smokers have cough"
                            <br><strong>Answer:</strong> Cross-Sectional (snapshot). Cannot say smoking CAUSED cough!</li>
                    </ol>

                    <div style="background: #fffbeb; border: 2px solid #f59e0b; padding: 1rem; margin-top: 1rem; border-radius: 6px;">
                        <p style="margin: 0;"><strong>🎯 MASTER TIP:</strong> If the question asks "What measure can be calculated?" → TIME DIRECTION tells you the study type → Study type tells you the measure!</p>
                    </div>
                </div>
            </div>

            <!-- Additional learning box below flowchart -->
            <div class="study-tip" style="margin: 2rem 0;">
                <div class="callout-header">
                    <i class="ph ph-brain"></i>
                    Mnemonic: "Really Cool Cohorts Can Cross-check Evidence"
                </div>
                <div class="callout-content">
                    <ul>
                        <li><strong>R</strong>CT - Randomized Control Trial (best evidence)</li>
                        <li><strong>C</strong>ohort - Follow exposed vs unexposed forward</li>
                        <li><strong>C</strong>ase-Control - Start with cases, look back</li>
                        <li><strong>C</strong>ross-Sectional - One point in time snapshot</li>
                        <li><strong>E</strong>cological - Population-level, exploratory</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Key Exam Question:</strong> "Which measure can you calculate?" → Depends on study type!</p>
                    <ul style="margin-top: 0.5rem;">
                        <li>Cohort → Attack Rate, RR, Risk Difference</li>
                        <li>Case-Control → Odds Ratio (OR) ONLY</li>
                        <li>Cross-Sectional → Prevalence ONLY</li>
                    </ul>
                </div>
            </div>

            <div style="margin: 2rem 0;">
                <h3 style="color: var(--navy-primary);">Study Design Cheat Sheet</h3>
                <div class="table-container"><table class="table">
                             <th style="padding: 1rem; border: 1px solid white;">Feature</th>
                             <th style="padding: 1rem; border: 1px solid white;">Cohort</th>
                             <th style="padding: 1rem; border: 1px solid white;">Case-Control</th>
                             <th style="padding: 1rem; border: 1px solid white;">Cross-Sectional</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold; background: #eee;">Direction</td>
                            <td style="padding: 1rem;">Forward (Exposure -> Disease)</td>
                            <td style="padding: 1rem;">Backward (Disease -> Exposure)</td>
                            <td style="padding: 1rem;">Snapshot (Present)</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold; background: #eee;">Starting Group</td>
                            <td style="padding: 1rem;">Exposed vs Unexposed</td>
                            <td style="padding: 1rem;">Sick (Case) vs Well (Control)</td>
                            <td style="padding: 1rem;">Total Sample</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold; background: #eee;">Measure</td>
                            <td style="padding: 1rem;">Relative Risk (RR) / AR</td>
                            <td style="padding: 1rem;">Odds Ratio (OR)</td>
                            <td style="padding: 1rem;">Prevalence Ratio</td>
                        </tr>
                         <tr>
                            <td style="padding: 1rem; font-weight: bold; background: #eee;">Best For</td>
                            <td style="padding: 1rem;">Rare Exposures</td>
                            <td style="padding: 1rem;">Rare Diseases, Outbreaks</td>
                            <td style="padding: 1rem;">Surveys, Burden of Disease</td>
                        </tr>
                         <tr>
                            <td style="padding: 1rem; font-weight: bold; background: #eee;">Cost/Time</td>
                            <td style="padding: 1rem;">High / Long</td>
                            <td style="padding: 1rem;">Low / Fast</td>
                            <td style="padding: 1rem;">Medium</td>
                        </tr>
                    </tbody>
                </table></div>
            </div>

            <p class="lead">In Case-Control studies (where you start with sick people and look back), you cannot calculate Attack Rates because you don't know the total population. Instead, you calculate the <strong>Odds Ratio (OR)</strong>.</p>

            <h2>12.1 The Odds Ratio (OR)</h2>
            <p><strong>Formula:</strong> (A × D) / (B × C)</p>
            
            <!-- High Contrast 2x2 Table -->
            <div style="overflow-x: auto; margin: 1.5rem 0;">
                <div class="table-container"><table class="table" style="border: 3px solid black;">
                    <thead>
                        <tr style="background: black; color: white;">
                            <th style="padding: 1rem; border: 1px solid #555;">Exposure Group</th>
                            <th style="padding: 1rem; border: 1px solid #555;">Case (Sick)</th>
                            <th style="padding: 1rem; border: 1px solid #555;">Control (Not Sick)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold; background: #eee; border: 1px solid black;">Exposed</td>
                            <td style="padding: 1rem; text-align: center; font-size: 1.5rem; border: 2px solid black; font-weight: 900;">A</td>
                            <td style="padding: 1rem; text-align: center; font-size: 1.5rem; border: 2px solid black; font-weight: 900;">B</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold; background: #eee; border: 1px solid black;">Unexposed</td>
                            <td style="padding: 1rem; text-align: center; font-size: 1.5rem; border: 2px solid black; font-weight: 900;">C</td>
                            <td style="padding: 1rem; text-align: center; font-size: 1.5rem; border: 2px solid black; font-weight: 900;">D</td>
                        </tr>
                    </tbody>
                </table></div>
            </div>

            <p>Using the standard 2x2 table:</p>
            <ul>
                <li><strong>A:</strong> Exposed Case</li>
                <li><strong>B:</strong> Exposed Control</li>
                <li><strong>C:</strong> Unexposed Case</li>
                <li><strong>D:</strong> Unexposed Control</li>
            </ul>

            <div style="background: white; border: 3px solid var(--navy-primary); color: var(--navy-primary); padding: 1.5rem; border-radius: 8px; text-align: center; margin: 2rem 0;">
                <h3 style="margin-top: 0; color: var(--navy-primary); font-size: 1.5rem;">OR = (A × D) / (B × C)</h3>
                <p style="font-size: 1.1rem; font-weight: bold;"><em>"Cross-multiply the table!"</em></p>
            </div>

            <h2>12.2 Interpreting the Result</h2>
            <ul>
                <li><strong>OR = 1:</strong> No association. (Exposure has no effect).</li>
                <li><strong>OR > 1:</strong> Positive association. (Exposure is a <strong>Risk Factor</strong>).</li>
                <li><strong>OR < 1:</strong> Negative association. (Exposure is <strong>Protective</strong>, like a vaccine).</li>
            </ul>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Confidence Intervals (CI)
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Is the result statistically significant?"</p>
                    <p><strong>RULE:</strong> Look at the 95% Confidence Interval (e.g., OR=2.5, CI: 0.8 - 4.2).</p>
                    <ul>
                        <li>If the range <strong>includes 1.0</strong>, it is <strong>NOT</strong> statistically significant. (It could be chance).</li>
                        <li>If the range is entirely above or below 1.0 (e.g., 1.2 - 5.0), it <strong>IS</strong> significant.</li>
                    </ul>
                </div>
            </div>

            <h2>12.3 Advanced Math Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Calculate & Interpret
                </div>
                <div class="callout-content">
                    <p><strong>Data:</strong></p>
                    <ul>
                        <li>A (Ate Fish, Sick) = 20</li>
                        <li>B (Ate Fish, Not Sick) = 10</li>
                        <li>C (No Fish, Sick) = 5</li>
                        <li>D (No Fish, Not Sick) = 30</li>
                    </ul>

                    <p style="margin-top: 1rem;"><strong>Question 1:</strong> Calculate the Odds Ratio.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: 12.0</strong></p>
                            <p>OR = (20 × 30) / (10 × 5) = 600 / 50 = 12.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 2:</strong> Interpret the result.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Strong Risk Factor</strong></p>
                            <p>People who ate fish were 12 times more likely to get sick than those who didn't.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 3:</strong> If the CI is 0.9 - 15.0, is it significant?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: NO</strong></p>
                            <p>The interval includes 1.0, so the result could be due to chance.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 12.4 Study Design Cheat Sheet -->
            <h2>12.4 Study Design Cheat Sheet</h2>
            <p>Different analytic study designs answer different questions and use different measures.  Division B exams may ask you to identify the design or choose the correct measure.  Use this cheat sheet to keep them straight:</p>
            <div class="table-container"><table class="table">
                <thead>
                    <tr>
                        <th>Design</th>
                        <th>When to Use</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Cohort Study</strong></td>
                        <td>Follow exposed &amp; unexposed groups forward in time to compare disease incidence</td>
                        <td>Attack Rate, Risk Ratio (RR), Risk Difference</td>
                    </tr>
                    <tr>
                        <td><strong>Case–Control Study</strong></td>
                        <td>Start with cases &amp; controls; look back to see exposures</td>
                        <td>Odds Ratio (OR) – use <em>when disease is rare</em></td>
                    </tr>
                    <tr>
                        <td><strong>Cross‑Sectional Study</strong></td>
                        <td>Snapshot of exposure &amp; disease at one time</td>
                        <td>Prevalence, cannot distinguish cause vs effect</td>
                    </tr>
                </tbody>
            </table></div>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-warning"></i> Exam Trap: Wrong Measure</div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> Calculating a Risk Ratio for a case–control study or an Odds Ratio for a cohort study.</p>
                    <p><strong>TIPS:</strong></p>
                    <ul>
                        <li><strong>Cohort = Attack Rates &amp; Risk Ratios:</strong> Because you know the population at risk.</li>
                        <li><strong>Case–Control = Odds Ratios:</strong> Because you do not know the total number of exposed/unexposed in the source population.</li>
                        <li><strong>Cross‑Sectional = Prevalence:</strong> Measures existing disease; cannot infer causality.</li>
                    </ul>
                </div>
                </div>
            </div>

            <h2>12.5 Advanced Study Designs & Pitfalls (ADVANCED)</h2>
            <div class="neo-card small" style="background: #fff0f0; border-left: 4px solid var(--danger);">
                <h3><i class="ph-bold ph-scales"></i> Matched Case-Control & Mantel-Haenszel</h3>
                <p><strong>Matched Analysis:</strong> If you matched controls to cases by age/sex to prevent confounding, you cannot use the normal OR formula.</p>
                <ul>
                    <li><strong>Formula:</strong> b / c (Ratio of discordant pairs).</li>
                </ul>
                <p><strong>Mantel-Haenszel:</strong> A statistical technique to combine results from multiple strata (e.g., combining age groups) to get an "Adjusted OR". It removes the effect of the confounder.</p>
            </div>

            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-warning"></i> Ecological Fallacy</div>
                <div class="callout-content">
                    <p><strong>Ecological Study:</strong> Compares groups (nations), not individuals.</p>
                    <p><strong>The Trap:</strong> Assuming a correlation at the group level applies to individuals.</p>
                    <p><em>Example:</em> "Rich countries breastfeed less." Does NOT mean "Rich women breastfeed less." (Maybe poor women in rich countries drive the trend).</p>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Case-Control Study:</strong> Use Odds Ratio (OR).</li>
                <li><strong>Formula:</strong> AD / BC.</li>
                <li><strong>Significance:</strong> CI must NOT cross 1.0.</li>
            </ul>

            <!-- Practice tip for case-control math -->
            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Practice Tip: Explore Odds Ratios
                </div>
                <div class="callout-content">
                    <p>
                        For a deeper understanding of Odds Ratios, enter sample values into the
                        <strong>Interactive&nbsp;2×2 Table&nbsp;Calculator</strong> in the Interactive Tools section.
                        Since case–control studies don't provide attack rates, experiment with different combinations of A,
                        B, C, and D and watch how the OR changes. Try to adjust the numbers so that the 95&nbsp;%
                        confidence interval crosses 1.0 and see how that affects significance.
                    </p>
                </div>
            </div>

            <h2>12.4 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Case-Control Study:</strong> Use Odds Ratio (OR). Formula: (A×D)/(B×C).</li>
                        <li><strong>Significance:</strong> If 95% CI includes 1.0, it is NOT significant.</li>
                        <li><strong>Interpretation:</strong> OR > 1 is a Risk Factor, OR < 1 is Protective.</li>
                    </ul>
                </div>
            </div>
`
    },
    ch13: {
        title: "Chapter 13: Hypothesis Testing",
        difficulty: "A",
        content: `
    <h1>Chapter 13: Hypothesis Testing</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">Epidemiology is a science of testing ideas. We don't just guess; we form hypotheses and test them with data to see if they hold up.</p>

            <h2>13.1 The Hypotheses</h2>
            <p>Every study has two competing hypotheses:</p>
            <ul>
                <li><strong>Null Hypothesis (H₀):</strong> There is <strong>NO</strong> association between the exposure and the disease. (The "Boring" hypothesis).</li>
                <li><strong>Alternative Hypothesis (H₁ or Hₐ):</strong> There <strong>IS</strong> an association. (The "Interesting" hypothesis).</li>
            </ul>

            <div style="background: #eef2ff; color: #1e1b4b; padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border: 2px solid #312e81;">
                <h3 style="margin-top: 0; color: #312e81;">The P-Value</h3>
                <p>The probability that the results occurred by <strong>chance</strong> alone.</p>
                <ul>
                    <li><strong>p < 0.05:</strong> Statistically Significant. (Reject H₀).</li>
                    <li><strong>p > 0.05:</strong> Not Significant. (Fail to reject H₀).</li>
                </ul>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Mnemonic: RARE
                </div>
                <div class="callout-content">
                    <p><strong>When P is Low, the Null Must Go!</strong></p>
                    <p>Think <strong>RARE</strong>:</p>
                    <p>If the outcome is <strong>RARE</strong> (p < 0.05) due to chance, you <strong>REJECT</strong> the Null Hypothesis.</p>
                </div>
            </div>

            <h2>13.2 Errors in Testing</h2>
            <p>Sometimes the math leads us to the wrong conclusion.</p>

            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 1rem; text-align: left;">Reality</th>
                        <th style="padding: 1rem; text-align: left;">Study Says "Yes"</th>
                        <th style="padding: 1rem; text-align: left;">Study Says "No"</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>There IS an association</strong></td>
                        <td style="padding: 1rem;"><span style="color: green;">Correct</span></td>
                        <td style="padding: 1rem;"><strong>Type II Error</strong> (False Negative)</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>There is NO association</strong></td>
                        <td style="padding: 1rem;"><strong>Type I Error</strong> (False Positive)</td>
                        <td style="padding: 1rem;"><span style="color: green;">Correct</span></td>
                    </tr>
                </tbody>
            </table></div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Study Guide Tip: Mnemonics
                </div>
                <div class="callout-content">
                    <p><strong>Type I (False Positive):</strong> Telling a man he is pregnant. (You found something that isn't there).</p>
                    <p><strong>Type II (False Negative):</strong> Telling a clearly pregnant woman she isn't pregnant. (You missed something that is there).</p>
                </div>
            </div>

            <h2>13.3 Advanced Statistics (National Level)</h2>
            <div class="callout-header" style="background: var(--gold-accent); color: var(--navy-primary);">
                <i class="ph ph-star"></i> National Level Concept
            </div>
            <p>At the National level, you must go beyond just "p < 0.05". You need to understand <strong>Chi-Square</strong> and <strong>Confidence Intervals</strong>.</p>

            <h3>1. Chi-Square (χ²) Test</h3>
            <p>Used to test if the observed data differs from what we would expect by chance.</p>
            <p style="background: rgba(57, 204, 204, 0.1); padding: 0.5rem; border-radius: 4px; margin: 0.5rem 0;">
                <strong>χ² = Σ [ (Observed - Expected)² / Expected ]</strong>
            </p>
            <ul>
                <li><strong>Observed:</strong> The actual numbers in your 2x2 table.</li>
                <li><strong>Expected:</strong> The numbers if there was NO association (Null Hypothesis).</li>
                <li><strong>Rule:</strong> High χ² value (> 3.84 for 1 degree of freedom) -> Low p-value (< 0.05) -> Significant.</li>
            </ul>

            <h3>2. Confidence Intervals (CI)</h3>
            <p>The CI tells you the <strong>precision</strong> of your estimate. A narrow CI is precise; a wide CI is not.</p>
            <ul>
                <li><strong>95% CI:</strong> If we repeated the study 100 times, the true value would be in this range 95 times.</li>
                <li><strong>Standard Error (SE):</strong> Used to calculate CI. Larger sample size = Smaller SE = Narrower CI = More Precision.</li>
            </ul>

            <h2>13.4 Advanced Concepts (National)</h2>
            <div class="neo-card small" style="background: #eef2ff; border-left: 4px solid var(--accent-purple);">
                 <h3><i class="ph-bold ph-chart-bar-horizontal"></i> Power & Sample Size</h3>
                 <ul>
                     <li><strong>Power (1 - β):</strong> The ability to detect a difference if one exists. Usually aim for 80%.</li>
                     <li><strong>Sample Size:</strong> To detect a <em>smaller</em> difference, you need a <em>larger</em> sample size.</li>
                 </ul>
                 <h3><i class="ph-bold ph-warning-octagon"></i> Multiplicity & Errors</h3>
                 <ul>
                     <li><strong>Type III Error:</strong> Getting the right answer to the wrong question (asking the wrong research question).</li>
                     <li><strong>Bonferroni Correction:</strong> If you test 20 hypotheses, 1 will be significant by chance (p=0.05). To fix this, divide p-value by number of tests (0.05 / 20).</li>
                 </ul>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Mnemonic: Hypothesis Testing (RARE)
                </div>
                <div class="callout-content">
                    <p><strong>"RARE" - Remember hypothesis testing concepts:</strong></p>
                    <ul>
                        <li><strong>R</strong>eject null when p < α (usually 0.05)</li>
                        <li><strong>A</strong>lpha (α) = Type I error = False positive (rejecting true null)</li>
                        <li><strong>R</strong>are event = Type II error (β) = False negative (accepting false null)</li>
                        <li><strong>E</strong>ffect size matters (statistical significance ≠ clinical significance)</li>
                    </ul>
                    <p><strong>Exam Tip:</strong> Remember that a "significant" p-value (p < 0.05) means you <em>reject</em> the null hypothesis, not accept it!</p>
                    <p><strong>Bonus:</strong> Type III error = Getting the right answer to the wrong question (asking wrong research question)</p>
                </div>
            </div>

            <h2>13.5 Hypothesis Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Identify the Concept
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> "There is no difference in illness rates between those who ate spinach and those who didn't."</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Null Hypothesis (H₀)</strong></p>
                            <p>It assumes no association.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> You calculate a p-value of 0.03.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Significant</strong></p>
                            <p>Since 0.03 < 0.05, you reject the Null Hypothesis. The association is likely real.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> Your study says the spinach is safe, but it actually caused the outbreak.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Type II Error</strong></p>
                            <p>False Negative. You missed the truth.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>H₀:</strong> No difference.</li>
                <li><strong>p < 0.05:</strong> Significant.</li>
                <li><strong>Type I:</strong> False Positive.</li>
                <li><strong>Type II:</strong> False Negative.</li>
            </ul>

            <h2>13.4 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Null Hypothesis (H₀):</strong> "No association" (Boring).</li>
                        <li><strong>P-Value:</strong> < 0.05 means Significant (Reject H₀).</li>
                        <li><strong>Errors:</strong> Type I (False Positive - Man Pregnant), Type II (False Negative - Missed it).</li>
                    </ul>
                </div>
            </div>
`
    },
    ch14: {
        title: "Chapter 14: Patterns & Data Synthesis",
        difficulty: "M",
        content: `
    <h1>Chapter 14: Patterns & Data Synthesis</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Real outbreaks are messy. You rarely get a perfect Epi Curve or a single obvious risk factor. You must synthesize data from <strong>Person</strong>, <strong>Place</strong>, and <strong>Time</strong> to see the whole picture.</p>

            <h2>14.1 Triangulation</h2>
            <p><strong>Triangulation</strong> is the process of using multiple data sources to confirm a hypothesis. If the Epi Curve suggests a point source, the Map shows clustering around a specific restaurant, and the Line List shows everyone ate there, you have strong evidence.</p>

            <div class="table-container"><table class="table" style="text-align: center;">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="width: 33%; padding: 1rem;">Time</th>
                        <th style="width: 33%; padding: 1rem;">Place</th>
                        <th style="width: 33%; padding: 1rem;">Person</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 1.5rem; vertical-align: top;">
                            <i class="ph ph-clock" style="font-size: 2rem; color: var(--navy-primary); display: block; margin-bottom: 0.5rem;"></i>
                            <div style="font-weight: bold; margin-bottom: 0.25rem;">Epi Curve</div>
                            <div style="font-size: 0.9rem; color: #666;">(Point Source?)</div>
                        </td>
                        <td style="padding: 1.5rem; vertical-align: top;">
                            <i class="ph ph-map-pin" style="font-size: 2rem; color: var(--navy-primary); display: block; margin-bottom: 0.5rem;"></i>
                            <div style="font-weight: bold; margin-bottom: 0.25rem;">Spot Map</div>
                            <div style="font-size: 0.9rem; color: #666;">(Clustering?)</div>
                        </td>
                        <td style="padding: 1.5rem; vertical-align: top;">
                            <i class="ph ph-users" style="font-size: 2rem; color: var(--navy-primary); display: block; margin-bottom: 0.5rem;"></i>
                            <div style="font-weight: bold; margin-bottom: 0.25rem;">Demographics</div>
                            <div style="font-size: 0.9rem; color: #666;">(Age/Sex?)</div>
                        </td>
                    </tr>
                </tbody>
            </table></div>

            <h2>14.2 Vital Statistics & Demography</h2>
            <p>Beyond basic rates, you need advanced measures to compare populations and quantify impact.</p>

            <div class="neo-card" style="margin-bottom: 2rem;">
                <h3 style="margin-top:0; border-bottom: 2px solid var(--accent-orange); display:inline-block;">SMR (Standardized Mortality Ratio)</h3>
                <p>Used in occupational studies to compare a workforce to the general population.</p>
                <div class="formula-box">SMR = Observed Deaths / Expected Deaths</div>
                <p class="text-sm"><strong>Interpretation:</strong></p>
                <ul>
                    <li>SMR = 1.0: Risk is same as general population.</li>
                    <li>SMR > 1.0: Higher risk (e.g., SMR 1.5 = 50% excess deaths).</li>
                    <li>SMR < 1.0: Lower risk (often seeing the "Healthy Worker Effect").</li>
                </ul>
            </div>

            <div class="neo-card" style="margin-bottom: 2rem;">
                <h3 style="margin-top:0; border-bottom: 2px solid var(--accent-orange); display:inline-block;">YPLL (Years of Potential Life Lost)</h3>
                <p>Measures the impact of premature death. Weighted by age (younger deaths count more).</p>
                <div class="formula-box">YPLL = &Sigma; (Reference Age - Age at Death)</div>
                <p class="text-sm"><strong>Example:</strong> Reference age 65.<br>Person dies at 60 -> 5 YPLL.<br>Person dies at 10 -> 55 YPLL.<br>Person dies at 70 -> 0 YPLL.</p>
            </div>

            <h3 style="color: var(--navy-primary);">Crude vs. Age-Adjusted Rates</h3>
            <p><strong>Crude Rate:</strong> The actual rate in the population. Good for burden of disease.</p>
            <p><strong>Age-Adjusted Rate:</strong> A statistical "what if" rate used to compare populations with different age structures (e.g., Florida vs. Alaska).</p>
            <p><strong>Rule:</strong> If Population A is older than Population B, A will likely have a higher <em>Crude</em> death rate even if health care is equal. <em>Adjusting</em> removes the age bias.</p>

            <h2>14.3 Identifying Patterns</h2>
            <ul>
                <li><strong>Clustering:</strong> Cases grouped closely in time or space. (e.g., A cluster of cancer cases in one neighborhood).</li>
                <li><strong>Seasonality:</strong> Disease spikes at certain times of year (e.g., Flu in winter, West Nile in summer).</li>
                <li><strong>Secular Trends:</strong> Long-term changes over years (e.g., Decrease in smoking, increase in diabetes).</li>
            </ul>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: The "Artifact"
                </div>
                <div class="callout-content">
                    <p>Sometimes a "pattern" isn't real. It's an <strong>artifact</strong> of how data was collected.</p>
                    <p><strong>Example:</strong> A sudden spike in cases might just be because a new testing lab opened, or the case definition changed. Always ask: "Did surveillance change?"</p>
                </div>
            </div>

            <h2>14.4 Synthesis Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Connect the Dots
                </div>
                <div class="callout-content">
                    <p><strong>Data Points:</strong></p>
                    <ul>
                        <li><strong>Time:</strong> Cases started June 1st, peaked June 15th, ended June 30th.</li>
                        <li><strong>Place:</strong> All cases live near "Lake X".</li>
                        <li><strong>Person:</strong> Only children aged 5-12 are affected.</li>
                    </ul>

                    <p style="margin-top: 1rem;"><strong>Question 1:</strong> What is the likely Mode of Transmission?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Vehicle (Waterborne) or Vector (Mosquitoes)</strong></p>
                            <p>The location (Lake) suggests water or bugs. The age group suggests swimming or playing outside.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 2:</strong> Why aren't adults sick?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Behavioral or Immunity</strong></p>
                            <p>Adults might not swim in the lake, or they might have prior immunity.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 3:</strong> Is this a Propagated outbreak?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Unlikely</strong></p>
                            <p>It looks more like a Continuous Common Source (exposure to the lake over summer) or a Point Source with a wide range.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Triangulate:</strong> Use Time, Place, and Person together.</li>
                <li><strong>Artifacts:</strong> Check if data collection changed.</li>
                <li><strong>Context:</strong> Seasonality and trends matter.</li>
            </ul>

            <h2>14.4 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Triangulation:</strong> Use Time, Place, and Person together to confirm a hypothesis.</li>
                        <li><strong>Artifacts:</strong> Sudden spikes often mean a change in reporting/testing, not a real outbreak.</li>
                        <li><strong>Context:</strong> Always consider seasonality (Flu in winter) and long-term trends.</li>
                    </ul>
                </div>
            </div>
`
    },
    ch15: {
        title: "Chapter 15: Levels of Prevention",
        difficulty: "M",
        content: `
    <h1>Chapter 15: Levels of Prevention</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Public health interventions are classified into three levels based on <strong>when</strong> they occur in the disease process. Mastering this classification is a guaranteed way to pick up points on the exam.</p>

            <h2>15.1 The Three Levels (P-S-T)</h2>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Study Guide Tip: P-S-T Mnemonic
                </div>
                <div class="callout-content">
                    <p><strong>P</strong>rimary = <strong>P</strong>revent (Before disease)</p>
                    <p><strong>S</strong>econdary = <strong>S</strong>creen (Early disease)</p>
                    <p><strong>T</strong>ertiary = <strong>T</strong>reat (Established disease)</p>
                </div>
            </div>

            <div class="neo-card" style="margin: 2rem 0; padding: 1rem; border: none; background: #fff;">
                <h3 style="text-align: center; color: var(--navy-primary); margin-bottom: 2rem;">Visualizing the Levels of Prevention</h3>
                <svg viewBox="0 0 800 320" class="responsive-svg" style="width: 100%; max-width: 900px; height: auto; font-family: 'Inter', sans-serif; display: block; margin: 0 auto;">
                    <!-- Definitions -->
                    <defs>
                        <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#555"/>
                        </marker>
                    </defs>
                    
                    <!-- TIME ARROW -->
                    <line x1="50" y1="30" x2="750" y2="30" stroke="#555" stroke-width="2" marker-end="url(#arrowHead)"/>
                    <text x="750" y="22" text-anchor="end" font-size="11" font-weight="bold" fill="#555">TIME →</text>

                    <!-- Stage Labels (Top) -->
                    <text x="150" y="52" text-anchor="middle" font-size="10" fill="#666">Before Risk Factors</text>
                    <text x="300" y="52" text-anchor="middle" font-size="10" fill="#666">Susceptibility</text>
                    <text x="500" y="52" text-anchor="middle" font-size="10" fill="#666">Subclinical</text>
                    <text x="680" y="52" text-anchor="middle" font-size="10" fill="#666">Clinical Disease</text>

                    <!-- PREVENTION BOXES -->
                    
                    <!-- Primordial -->
                    <g transform="translate(40, 70)">
                        <rect x="0" y="0" width="160" height="180" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                        <rect x="0" y="0" width="160" height="35" rx="8" fill="#0284c7"/>
                        <text x="80" y="22" text-anchor="middle" font-weight="bold" fill="white" font-size="12">PRIMORDIAL</text>
                        
                        <text x="80" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">Prevent Risk Factors</text>
                        <line x1="15" y1="65" x2="145" y2="65" stroke="#0284c7" stroke-width="1" opacity="0.3"/>
                        
                        <text x="80" y="85" text-anchor="middle" font-size="10" fill="#333">Policy: Ban trans fats</text>
                        <text x="80" y="100" text-anchor="middle" font-size="10" fill="#333">Urban planning</text>
                        <text x="80" y="115" text-anchor="middle" font-size="10" fill="#333">Social programs</text>
                        <text x="80" y="135" text-anchor="middle" font-size="9" font-style="italic" fill="#666">Population-level</text>
                        <text x="80" y="150" text-anchor="middle" font-size="9" font-style="italic" fill="#666">before exposure</text>
                    </g>

                    <!-- Primary -->
                    <g transform="translate(220, 70)">
                        <rect x="0" y="0" width="160" height="180" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
                        <rect x="0" y="0" width="160" height="35" rx="8" fill="#059669"/>
                        <text x="80" y="22" text-anchor="middle" font-weight="bold" fill="white" font-size="12">PRIMARY</text>
                        
                        <text x="80" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">PREVENT Disease</text>
                        <line x1="15" y1="65" x2="145" y2="65" stroke="#059669" stroke-width="1" opacity="0.3"/>
                        
                        <text x="80" y="85" text-anchor="middle" font-size="10" fill="#333">Vaccines</text>
                        <text x="80" y="100" text-anchor="middle" font-size="10" fill="#333">Health education</text>
                        <text x="80" y="115" text-anchor="middle" font-size="10" fill="#333">Sanitation</text>
                        <text x="80" y="135" text-anchor="middle" font-size="9" font-style="italic" fill="#666">Healthy people</text>
                        <text x="80" y="150" text-anchor="middle" font-size="9" font-style="italic" fill="#666">at risk</text>
                    </g>

                    <!-- Secondary -->
                    <g transform="translate(400, 70)">
                        <rect x="0" y="0" width="160" height="180" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
                        <rect x="0" y="0" width="160" height="35" rx="8" fill="#d97706"/>
                        <text x="80" y="22" text-anchor="middle" font-weight="bold" fill="white" font-size="12">SECONDARY</text>
                        
                        <text x="80" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">SCREEN Early</text>
                        <line x1="15" y1="65" x2="145" y2="65" stroke="#d97706" stroke-width="1" opacity="0.3"/>
                        
                        <text x="80" y="85" text-anchor="middle" font-size="10" fill="#333">Mammograms</text>
                        <text x="80" y="100" text-anchor="middle" font-size="10" fill="#333">BP checks</text>
                        <text x="80" y="115" text-anchor="middle" font-size="10" fill="#333">Contact tracing</text>
                        <text x="80" y="135" text-anchor="middle" font-size="9" font-style="italic" fill="#666">Sick but</text>
                        <text x="80" y="150" text-anchor="middle" font-size="9" font-style="italic" fill="#666">asymptomatic</text>
                    </g>

                    <!-- Tertiary -->
                    <g transform="translate(580, 70)">
                        <rect x="0" y="0" width="160" height="180" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
                        <rect x="0" y="0" width="160" height="35" rx="8" fill="#dc2626"/>
                        <text x="80" y="22" text-anchor="middle" font-weight="bold" fill="white" font-size="12">TERTIARY</text>
                        
                        <text x="80" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">TREAT & Manage</text>
                        <line x1="15" y1="65" x2="145" y2="65" stroke="#dc2626" stroke-width="1" opacity="0.3"/>
                        
                        <text x="80" y="85" text-anchor="middle" font-size="10" fill="#333">Rehab / PT</text>
                        <text x="80" y="100" text-anchor="middle" font-size="10" fill="#333">Surgery</text>
                        <text x="80" y="115" text-anchor="middle" font-size="10" fill="#333">Medications</text>
                        <text x="80" y="135" text-anchor="middle" font-size="9" font-style="italic" fill="#666">Sick with</text>
                        <text x="80" y="150" text-anchor="middle" font-size="9" font-style="italic" fill="#666">symptoms</text>
                    </g>

                    <!-- Event Markers -->
                    <line x1="210" y1="15" x2="210" y2="280" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="210" y="12" text-anchor="middle" font-size="9" fill="#0284c7" font-weight="bold">Risk Exposure</text>
                    
                    <line x1="390" y1="15" x2="390" y2="280" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="390" y="12" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">Infection</text>
                    
                    <line x1="570" y1="15" x2="570" y2="280" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="570" y="12" text-anchor="middle" font-size="9" fill="#d97706" font-weight="bold">Symptoms</text>

                    <!-- Bottom Note -->
                    <text x="400" y="295" text-anchor="middle" font-size="10" fill="#666" font-style="italic">← Earlier = More Effective & Less Costly →</text>
                </svg>
            </div>

            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr>
                        <th style="padding: 1rem; text-align: left;">Level</th>
                        <th style="padding: 1rem; text-align: left;">Goal</th>
                        <th style="padding: 1rem; text-align: left;">Target Population</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Primordial</strong></td>
                        <td style="padding: 1rem;">Prevent risk factors from developing in the first place.</td>
                        <td style="padding: 1rem;">Entire populations (before risk exposure)</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Primary</strong></td>
                        <td style="padding: 1rem;">Prevent disease from occurring at all.</td>
                        <td style="padding: 1rem;">Healthy people (Susceptible)</td>
                    </tr>
                    <tr style="background: var(--gray-bg);">
                        <td style="padding: 1rem;"><strong>Secondary</strong></td>
                        <td style="padding: 1rem;">Detect disease early for better outcome.</td>
                        <td style="padding: 1rem;">Sick but asymptomatic (Subclinical)</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem;"><strong>Tertiary</strong></td>
                        <td style="padding: 1rem;">Reduce severity/disability.</td>
                        <td style="padding: 1rem;">Sick and symptomatic (Clinical)</td>
                    </tr>
                </tbody>
            </table></div>

            <h2>15.2 Primary Prevention</h2>
            <p><strong>Action:</strong> Intervene before the disease process starts.</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Vaccination (Immunization)</li>
                <li>Health education (e.g., "Don't smoke")</li>
                <li>Sanitation and clean water</li>
                <li>Vector control (spraying for mosquitoes)</li>
                <li>Wearing a seatbelt</li>
            </ul>

            <h2>15.3 Secondary Prevention</h2>
            <p><strong>Action:</strong> Detect disease early (Screening) to stop progression.</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Mammograms (Breast cancer screening)</li>
                <li>Blood pressure checks</li>
                <li>Pap smears</li>
                <li>Colonoscopies</li>
                <li>Contact tracing (finding exposed people)</li>
            </ul>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Screening is Secondary
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "A doctor gives a patient a mammogram to prevent breast cancer death. What level is this?"</p>
                    <p><strong>WRONG:</strong> Primary (It doesn't prevent the <em>disease</em>, it prevents <em>death</em> from the disease).</p>
                    <p><strong>RIGHT:</strong> Secondary (It detects the disease early).</p>
                    <p><strong>Rule:</strong> If it's a TEST or SCREENING, it's usually Secondary.</p>
                </div>
            </div>

            <h2>15.4 Tertiary Prevention</h2>
            <p><strong>Action:</strong> Manage existing disease to prevent complications/disability.</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Physical therapy after a stroke</li>
                <li>Insulin for a diabetic</li>
                <li>Support groups for alcoholics</li>
                <li>Surgery to repair damage</li>
            </ul>

            <h2>15.5 Advanced Prevention Levels (National)</h2>
            <div class="callout-header" style="background: var(--gold-accent); color: var(--navy-primary);">
                <i class="ph ph-star"></i> National Level Concept
            </div>
            
            <p>Beyond the standard Primary/Secondary/Tertiary, advanced epidemiology (especially for Policy stations) adds two more levels.</p>

            <div class="neo-card" style="margin: 2rem 0; background: #f0fdf4;">
                <h3 style="color: var(--teal-accent); margin-top: 0;">Primordial Prevention</h3>
                <p><strong>Goal:</strong> Prevent the <em>emergence</em> of risk factors in the first place (Calculated at the Population Level).</p>
                <p><strong>Difference from Primary:</strong> Primary targets individuals who have risk factors (e.g., "Stop smoking"). Primordial targets the societal structure so smoking never becomes a habit (e.g., "Ban cigarette ads").</p>
                <p><strong>Examples:</strong></p>
                <ul>
                    <li>National policy to reduce salt in processed foods (prevents hypertension risk factor).</li>
                    <li>Urban planning to encourage walking (prevents obesity risk factor).</li>
                </ul>
            </div>

            <div class="neo-card" style="margin: 2rem 0; background: #fff1f2;">
                <h3 style="color: #be123c; margin-top: 0;">Quaternary Prevention (P4)</h3>
                <p><strong>Goal:</strong> Protect patients from medical harm (Over-medicalization).</p>
                <p><strong>Context:</strong> "First, do no harm." Preventing unnecessary tests, treatments, and over-diagnosis.</p>
                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Refusing to prescribe antibiotics for a viral cold.</li>
                    <li>Stopping routine screenings (like PSA) in very elderly patients where the harm of treatment outweighs benefits.</li>
                    <li>Protecting patients from "labeling" (stigma).</li>
                </ul>
            </div>

            <h2>15.5 Classification Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Classify the Intervention
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> A city adds fluoride to the water supply to prevent cavities.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Primary Prevention</strong></p>
                            <p>It prevents the disease (cavities) from ever happening.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> A diabetic patient takes medication to prevent foot ulcers.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Tertiary Prevention</strong></p>
                            <p>The patient already has the disease (diabetes). The goal is to prevent complications (ulcers).</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> A school nurse checks students' hair for lice.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Secondary Prevention</strong></p>
                            <p>This is screening/detection. It doesn't prevent lice from landing on them, but catches it early.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Primary:</strong> Prevent onset (Vaccines).</li>
                <li><strong>Secondary:</strong> Early detection (Screening).</li>
                <li><strong>Tertiary:</strong> Minimize damage (Rehab).</li>
            </ul>

            <h2>15.6 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Primary:</strong> Prevent BEFORE it happens (Vaccines, Education).</li>
                        <li><strong>Secondary:</strong> SCREENING and Early Detection (Mammograms, Contact Tracing).</li>
                        <li><strong>Tertiary:</strong> TREAT and Rehab (PT, Insulin).</li>
                    </ul>
                </div>
            </div>

            <!-- New Section 15.7: Beyond P‑S‑T -->
            <h2>15.7 Beyond P‑S‑T: Comprehensive Prevention Strategies</h2>
            <p>Real‑world disease control involves more than three discrete levels. Additional strategies cut across stages and focus on the population and environment:</p>
            <ul>
                <li><strong>Vector control:</strong> Reduce exposure to mosquitoes and ticks through habitat removal, insecticides, bed nets and personal protection.</li>
                <li><strong>Quarantine & Isolation:</strong> Separate exposed or ill individuals to prevent onward transmission. Quarantine applies to exposed but asymptomatic people; isolation applies to sick patients.</li>
                <li><strong>Contact tracing:</strong> Identify and monitor contacts of cases to interrupt chains of transmission. Digital tools can assist with rapid notifications.</li>
                <li><strong>Environmental interventions:</strong> Improve sanitation, housing quality, air and water safety. These primordial actions reduce multiple diseases simultaneously.</li>
                <li><strong>Policy & social change:</strong> Legislation (e.g., smoking bans, seat belt laws) and cultural shifts can prevent risk factors from arising in the first place.</li>
            </ul>
`
    },
    ch16: {
        title: "Chapter 16: Control Measures & Hierarchy",
        difficulty: "M",
        content: `
    <h1>Chapter 16: Control Measures & Hierarchy</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Once an outbreak is identified, the goal is to stop it. Public health uses a specific hierarchy to determine the most effective ways to control a hazard.</p>

            <h2>16.1 The Hierarchy of Controls</h2>
            <p>From <strong>MOST</strong> effective to <strong>LEAST</strong> effective:</p>

            <div style="margin: 2rem 0; display: flex; flex-direction: column; gap: 0.5rem;">
                <div style="background: #001f3f; color: white; padding: 1rem; border-radius: 4px; text-align: center; width: 100%;">
                    <strong>1. Elimination</strong> (Physically remove the hazard)
                    <br><span style="font-size: 0.9rem; opacity: 0.8;">Most Effective</span>
                </div>
                <div style="background: #003366; color: white; padding: 1rem; border-radius: 4px; text-align: center; width: 90%; align-self: center;">
                    <strong>2. Substitution</strong> (Replace the hazard)
                </div>
                <div style="background: #004080; color: white; padding: 1rem; border-radius: 4px; text-align: center; width: 80%; align-self: center;">
                    <strong>3. Engineering Controls</strong> (Isolate people from the hazard)
                </div>
                <div style="background: #0059b3; color: white; padding: 1rem; border-radius: 4px; text-align: center; width: 70%; align-self: center;">
                    <strong>4. Administrative Controls</strong> (Change the way people work)
                </div>
                <div style="background: #39CCCC; color: #001f3f; padding: 1rem; border-radius: 4px; text-align: center; width: 60%; align-self: center;">
                    <strong>5. PPE</strong> (Protect the worker with Personal Protective Equipment)
                    <br><span style="font-size: 0.9rem; opacity: 0.8;">Least Effective</span>
                </div>
            </div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: PPE is the Last Resort
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "What is the most effective way to protect nurses from Ebola?"</p>
                    <p><strong>Student Answer:</strong> "Give them full hazmat suits (PPE)."</p>
                    <p><strong>CORRECT Answer:</strong> "Engineering controls (Negative pressure rooms) or Administrative controls (Limit number of staff)."</p>
                    <p><strong>Why?</strong> PPE relies on human behavior. If you take it off wrong, you get infected. Engineering controls work automatically.</p>
                </div>
            </div>

            <h2>16.2 Non-Pharmaceutical Interventions (NPIs)</h2>
            <p>Actions, apart from getting vaccinated and taking medicine, that people and communities can take to help slow the spread of illnesses like pandemic influenza.</p>
            <ul>
                <li><strong>Personal:</strong> Hand washing, staying home when sick, covering coughs.</li>
                <li><strong>Community:</strong> Social distancing, school closures, teleworking, cancelling mass gatherings.</li>
                <li><strong>Policy & social change:</strong> Legislation (e.g., smoking bans, seat belt laws) and cultural shifts can prevent risk factors from arising in the first place.</li>
            </ul>

            <div class="neo-card small" style="background: #fdf2f8; border-left: 4px solid var(--pink-500); margin-top: 2rem;">
                 <h3><i class="ph-bold ph-table"></i> Control Strategy Matrix</h3>
                 <p>Different diseases require different targets:</p>
                 <div class="table-container"><table class="table">
                     <thead><tr><th>Target</th><th>Action</th><th>Example</th></tr></thead>
                     <tbody>
                         <tr><td><strong>Source</strong></td><td>Remove/Inactivate</td><td>Pasteurizing milk, treating water.</td></tr>
                         <tr style="background: #fff;"><td><strong>Transmission</strong></td><td>Block/Interrupt</td><td>Mosquito nets, hand washing.</td></tr>
                         <tr><td><strong>Susceptible</strong></td><td>Protect/Modify</td><td>Vaccination, chemoprophylaxis.</td></tr>
                     </tbody>
                 </table></div>
            </div>



            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Mnemonic: Chain of Infection (RET EH)
                </div>
                <div class="callout-content">
                    <p><strong>"RET EH" - Remember the 5 links in the chain:</strong></p>
                    <ul>
                        <li><strong>R</strong>eservoir – Source of the pathogen (humans, animals, environment)</li>
                        <li><strong>E</strong>xit – Portal of exit (respiratory, fecal, blood)</li>
                        <li><strong>T</strong>ransmission – Mode of spread (direct, indirect, airborne, vector)</li>
                        <li><strong>E</strong>ntry – Portal of entry (respiratory, GI, skin)</li>
                        <li><strong>H</strong>ost – Susceptible host (unvaccinated, immunocompromised)</li>
                    </ul>
                    <p><strong>Exam Tip:</strong> To control an outbreak, you can break <em>any</em> link in the chain. Questions may ask "Which link is being broken?" when describing a control measure.</p>
                    <p><strong>Example:</strong> Mosquito nets break the <strong>T</strong>ransmission link (vector-borne). Vaccination protects the <strong>H</strong>ost.</p>
                </div>
            </div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Ring Vaccination
                </div>
                <div class="callout-content">
                    <p>Instead of vaccinating everyone (Mass Vaccination), you vaccinate:</p>
                    <ol>
                        <li>The contacts of confirmed cases.</li>
                        <li>The contacts of those contacts.</li>
                    </ol>
                    <p>This creates a "ring" of immunity around the virus, trapping it. This strategy eradicated <strong>Smallpox</strong>.</p>
                </div>
            </div>

            <h2>16.3 Control Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Classify the Control Measure
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> Installing a plexiglass barrier between a cashier and customers.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Engineering Control</strong></p>
                            <p>You are physically isolating people from the hazard without relying on their behavior.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> Requiring all hospital staff to attend a training on hand hygiene.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Administrative Control</strong></p>
                            <p>You are changing the way people work (policies/training).</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> Discontinuing the use of a toxic chemical in a lab and using a safer one instead.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Substitution</strong></p>
                            <p>You are replacing the hazard.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2>16.4 Interactive Simulation: Stop the Outbreak</h2>
            <p>Adjust the sliders below to see how interventions affected the reproduction number ($R_0$) during the COVID-19 pandemic. Can you get R < 1.0?</p>

            <div id="control-sim-root" style="margin: 2rem 0;"></div>

            <script>
                if(typeof VisualComponents !== 'undefined' && document.getElementById('control-sim-root')) {
                    VisualComponents.renderControlSimulator('control-sim-root');
                }
            </script>

            <h2>Summary</h2>
            <ul>
                <li><strong>Hierarchy:</strong> Elimination > Substitution > Engineering > Administrative > PPE.</li>
                <li><strong>NPIs:</strong> Social distancing, masks, closures (used when vaccines aren't available).</li>
                <li><strong>Ring Vaccination:</strong> Targeted strategy for eradication.</li>
            </ul>

            <h2>16.4 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Hierarchy:</strong> Elimination > Substitution > Engineering > Admin > PPE.</li>
                        <li><strong>PPE:</strong> The LEAST effective method (relies on humans).</li>
                        <li><strong>Ring Vaccination:</strong> Vaccinate contacts of cases (Smallpox strategy).</li>
                    </ul>
                </div>
            </div>
`
    },
    ch17: {
        title: "Chapter 17: Isolation, Quarantine & Ethics",
        difficulty: "A",
        content: `
    <h1>Chapter 17: Isolation, Quarantine & Ethics</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">Public health often balances individual rights with the safety of the community. The most powerful (and controversial) tools for this are Isolation and Quarantine.</p>

            <h2>17.1 The Critical Distinction</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
                <div style="background: rgba(239, 68, 68, 0.1); border: 2px solid var(--callout-trap); padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: var(--callout-trap); margin-top: 0;">Isolation</h3>
                    <p>Separating <strong>SICK</strong> people from healthy people.</p>
                    <p><em>Example:</em> A hospital ward for TB patients.</p>
                </div>
                <div style="background: rgba(251, 191, 36, 0.1); border: 2px solid var(--callout-tip); padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: #d97706; margin-top: 0;">Quarantine</h3>
                    <p>Separating <strong>EXPOSED</strong> (but not yet sick) people to see if they become sick.</p>
                    <p><em>Example:</em> Asking travelers to stay home for 14 days.</p>
                </div>
            </div>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Study Guide Tip: Mnemonic
                </div>
                <div class="callout-content">
                    <p><strong>I</strong>solation is for <strong>I</strong>ll people.</p>
                    <p><strong>Q</strong>uarantine is for <strong>Q</strong>uestionable people (we don't know if they are sick yet).</p>
                </div>
            </div>

            <h2>17.2 Ethical Principles</h2>
            <ul>
                <li><strong>Autonomy:</strong> The right of an individual to make their own choices. (Public health often overrides this).</li>
                <li><strong>Beneficence:</strong> Acting in the best interest of the patient/public.</li>
                <li><strong>Justice:</strong> Ensuring burdens and benefits are distributed fairly. (e.g., Not just quarantining the poor).</li>
            </ul>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Least Restrictive Means
                </div>
                <div class="callout-content">
                    <p>The law requires using the <strong>least restrictive</strong> method necessary to protect the public.</p>
                    <p><em>Example:</em> If home quarantine works, you cannot force someone into a hospital jail cell.</p>
                </div>
            </div>

            <h2>17.3 Classification Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-check-circle"></i>
                    Isolation or Quarantine?
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> A student with Measles is sent home from school.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Isolation</strong></p>
                            <p>The student is already sick (Ill).</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> The siblings of the Measles patient are told to stay home, even though they feel fine.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Quarantine</strong></p>
                            <p>They are exposed but not yet sick (Questionable).</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> Closing the entire school.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Social Distancing (Community Quarantine)</strong></p>
                            <p>This is a broader measure to reduce contact, often called "Reverse Quarantine" or "Shelter in Place" depending on context, but technically a form of mass quarantine/distancing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Isolation:</strong> Sick people.</li>
                <li><strong>Quarantine:</strong> Exposed people.</li>
                <li><strong>Ethics:</strong> Balance rights vs. safety.</li>
            </ul>

            <h2>17.4 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Isolation:</strong> For SICK people (Ill).</li>
                        <li><strong>Quarantine:</strong> For EXPOSED people (Questionable).</li>
                        <li><strong>Least Restrictive Means:</strong> Don't use a hammer when a scalpel will do.</li>
                    </ul>
                </div>
            </div>
`
    },
    ch18: {
        title: "Chapter 18: Population Immunity & R₀",
        difficulty: "A",
        content: `
    <h1>Chapter 18: Population Immunity & R₀</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">How many people need to be vaccinated to stop an outbreak? The answer lies in the <strong>Basic Reproduction Number (R₀)</strong> and the <strong>Herd Immunity Threshold (HIT)</strong>.</p>

            <h2>18.1 Basic Reproduction Number (R₀)</h2>
            <p><strong>Definition:</strong> The average number of <em>secondary</em> cases produced by one infected individual in a <em>completely susceptible</em> population.</p>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    Study Guide Tip: R₀ Interpretation
                </div>
                <div class="callout-content">
                    <ul>
                        <li><strong>R₀ < 1:</strong> Disease will die out.</li>
                        <li><strong>R₀ = 1:</strong> Disease becomes endemic (stable).</li>
                        <li><strong>R₀ > 1:</strong> Disease will spread (Epidemic potential).</li>
                    </ul>
                    <p><strong>Measles:</strong> R₀ ≈ 12-18 (Highly contagious)</p>
                    <p><strong>Influenza:</strong> R₀ ≈ 1.5-2 (Moderately contagious)</p>
                    <p><strong>Ebola:</strong> R₀ ≈ 1.5-2.5 (Spread requires close contact)</p>
                </div>
            </div>

            <div class="table-container"><table class="table" style="text-align: center;">
                 <thead style="background: var(--navy-primary); color: white;">
                    <tr><th>Disease</th><th>Transmission</th><th>R₀ (Approx)</th><th>HIT</th></tr>
                 </thead>
                 <tbody>
                    <tr><td>Measles</td><td>Airborne</td><td>12-18</td><td>92-95%</td></tr>
                    <tr style="background: var(--gray-bg);"><td>Pertussis</td><td>Airborne</td><td>12-17</td><td>92-94%</td></tr>
                    <tr><td>Chickenpox</td><td>Airborne</td><td>10-12</td><td>90%</td></tr>
                    <tr style="background: var(--gray-bg);"><td>Polio</td><td>Fecal-Oral</td><td>5-7</td><td>80-86%</td></tr>
                    <tr><td>Smallpox</td><td>Droplet</td><td>3.5-6</td><td>80-85%</td></tr>
                    <tr style="background: var(--gray-bg);"><td>SARS-CoV-2 (Omicron)</td><td>Airborne</td><td>9.5 (Est)</td><td>High</td></tr>
                    <tr><td>Ebola</td><td>Direct Contact</td><td>1.5-2.5</td><td>33-60%</td></tr>
                 </tbody>
            </table></div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: R₀ is NOT Constant
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> "Is R₀ a biological constant for a virus?"</p>
                    <p><strong>ANSWER: NO.</strong></p>
                    <p>R₀ depends on:</p>
                    <ol>
                        <li><strong>Duration</strong> of infectiousness</li>
                        <li><strong>Probability</strong> of transmission per contact</li>
                        <li><strong>Rate</strong> of contact between people</li>
                    </ol>
                    <p>Social distancing REDUCES the contact rate, effectively lowering the transmission potential.</p>
                </div>
            </div>

            <h2>18.2 Herd Immunity Threshold (HIT)</h2>
            <p>The percentage of the population that must be immune to prevent an outbreak.</p>

            <div class="study-tip">
                <div class="callout-header">
                    <i class="ph ph-function"></i>
                    Formula: Herd Immunity Threshold
                </div>
                <div class="callout-content">
                    <p style="font-size: 1.2rem; text-align: center; margin: 1rem 0;">
                        <strong>HIT = 1 - (1 / R₀)</strong>
                    </p>
                    <p><em>Result is a decimal. Multiply by 100 for percentage.</em></p>
                </div>
            </div>

            <h2>18.3 Effective Reproduction Number (Rₑ or Rₜ)</h2>
            <p>R₀ assumes everyone is susceptible. In the real world, some people are immune (vaccine or prior infection).</p>
            <p style="background: rgba(57, 204, 204, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--teal-accent);">
                <strong>Rₑ = R₀ × (Fraction Susceptible)</strong>
            </p>
            <p><strong>Goal of Vaccination:</strong> Reduce the fraction susceptible until Rₑ < 1.</p>

            <h2>18.4 Calculation Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Calculate the Threshold
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> A new flu strain has an R₀ of 2. What % of the population must be vaccinated to stop it?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>HIT = 1 - (1 / R₀)</strong></p>
                            <p>HIT = 1 - (1 / 2)</p>
                            <p>HIT = 1 - 0.5 = 0.5</p>
                            <p><strong>Answer: 50%</strong></p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> Measles has an R₀ of 18. What is the HIT?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>HIT = 1 - (1 / R₀)</strong></p>
                            <p>HIT = 1 - (1 / 18)</p>
                            <p>HIT = 1 - 0.055...</p>
                            <p>HIT ≈ 0.944</p>
                            <p><strong>Answer: ~94-95%</strong></p>
                            <p><em>(This is why measles outbreaks happen when vaccination rates drop even slightly!)</em></p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> If R₀ = 4, and 50% of the population is immune, will an outbreak occur?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Calculate Rₑ:</strong></p>
                            <p>Rₑ = R₀ × (Fraction Susceptible)</p>
                            <p>If 50% are immune, then 50% (0.5) are susceptible.</p>
                            <p>Rₑ = 4 × 0.5 = 2</p>
                            <p><strong>Answer: YES</strong></p>
                            <p>Since Rₑ (2) is still > 1, the outbreak will continue to spread, just slower than before.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>R₀:</strong> Transmission potential in a totally susceptible population.</li>
                <li><strong>HIT = 1 - (1/R₀):</strong> Target for vaccination programs.</li>
                <li>Higher R₀ = Higher vaccination coverage needed.</li>
            </ul>

            <h2>18.5 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>R₀:</strong> Average secondary cases in a SUSCEPTIBLE population.</li>
                        <li><strong>HIT Formula:</strong> 1 - (1/R₀). Memorize this!</li>
                        <li><strong>R₀ Variability:</strong> It is NOT a constant; it changes with behavior (distancing).</li>
                    </ul>
                </div>
            </div>
`
    },
    ch19: {
        title: "Chapter 19: Advanced Evaluation & Confounding",
        difficulty: "A",
        content: `
    <h1>Chapter 19: Advanced Evaluation & Confounding</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">Just because you have data doesn't mean it's good. Advanced epidemiology involves evaluating the quality of your study. Is it valid? Is it biased? Does it prove causation?</p>

            <h2>19.1 Validity</h2>
            <ul>
                <li><strong>Internal Validity:</strong> Did the study measure what it intended to measure <em>for the study population</em>? (Was the math right? Was the design sound?)</li>
                <li><strong>External Validity (Generalizability):</strong> Can the results be applied to the <em>general population</em>? (e.g., A study on only men might not apply to women).</li>
            </ul>
            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Temporality
                </div>
                <div class="callout-content">
                    <p><strong>Temporality</strong> is the ONLY essential criterion.</p>
                    <p><strong>The Cause MUST precede the Effect.</strong></p>
                    <p>If the exposure happened <em>after</em> the disease, it cannot be the cause. All other criteria can be weak, but this one must be true.</p>
                </div>
            </div>

            <div class="neo-card" style="margin: 2rem 0;">
                <h3 style="margin-top:0; color:var(--navy-primary);">Selection Bias: Who is in your study?</h3>
                <p>Selection bias occurs when the people <em>in</em> your study are different from the people <em>not</em> in your study.</p>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; background: #fafafa; border-left: 3px solid #ef4444;">
                        <strong>Healthy Worker Effect:</strong> Workers are generally healthier than the general population (because the sick can't work). Comparing workers to the general public masks occupational risks.
                    </li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; background: #fafafa; border-left: 3px solid #ef4444;">
                        <strong>Volunteer Bias:</strong> People who volunteer for studies are often healthier/more health-conscious than those who don't.
                    </li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; background: #fafafa; border-left: 3px solid #ef4444;">
                        <strong>Non-Response Bias:</strong> If 50% of people refuse to participate, they might be different (e.g., more sick, too busy) than those who said yes.
                    </li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; background: #fafafa; border-left: 3px solid #ef4444;">
                        <strong>Exclusion Bias:</strong> Applying different eligibility rules to cases vs controls.
                    </li>
                </ul>
            </div>

            <h2>19.2 The Criteria for Causation</h2>
            <p>How do we know if an association is actually Causal? We use the <strong>Bradford Hill Criteria</strong>.</p>
            <div class="neo-card" style="margin: 2rem 0; background: #f8fafc;">
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #e2e8f0;"><strong>1. Temporality (Essential):</strong> Cause must come before Effect.</li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #e2e8f0;"><strong>2. Strength:</strong> A large RR or OR (e.g., RR=20 for smoking and lung cancer) suggests causality.</li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #e2e8f0;"><strong>3. Dose-Response:</strong> More exposure = More disease.</li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #e2e8f0;"><strong>4. Consistency:</strong> Different studies, different times, same result.</li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #e2e8f0;"><strong>5. Biological Plausibility:</strong> Does it make sense biologically?</li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #e2e8f0;"><strong>6. Specificity:</strong> One cause leads to one effect (Weakest criterion, often not true).</li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #e2e8f0;"><strong>7. Coherence:</strong> Doesn't contradict known science.</li>
                    <li style="margin-bottom: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #e2e8f0;"><strong>8. Experiment:</strong> Removal of the exposure reduces the disease.</li>
                    <li style="padding: 0.5rem;"><strong>9. Analogy:</strong> Similar to other known associations.</li>
                </ul>
            </div>

            <h2>19.3 Advanced Analytics (National Level)</h2>
            <div class="callout-header" style="background: var(--gold-accent); color: var(--navy-primary);">
                <i class="ph ph-star"></i> National Level Concept
            </div>

            <div style="margin: 1.5rem 0;">
                <h3 style="color: var(--teal-accent);">1. Survival Analysis</h3>
                <p>Used when time-to-event is the outcome. Covers <strong>Kaplan-Meier Curves</strong> and <strong>Cox Proportional Hazards</strong>.</p>
                <div style="background: white; padding: 1rem; border: 1px solid #eee; border-radius: 8px;">
                    <p><strong>Censoring:</strong> When a subject leaves the study (or the study ends) before the event happens. We don't know if they <em>ever</em> got sick, only that they were healthy <em>until</em> the end.</p>
                    <p><strong>Kaplan-Meier Curve:</strong> A "step-down" graph showing the % of people still surviving over time. Each step down is an event (death).</p>
                </div>
            </div>

            <div style="margin: 1.5rem 0;">
                <h3 style="color: var(--teal-accent);">2. Meta-Analysis & Forest Plots</h3>
                <p>A "study of studies". Combines data from multiple similar studies to get a statistically stronger result.</p>
                <div class="neo-card small" style="display: flex; gap: 1rem; align-items: center;">
                    <div style="flex: 1;">
                        <p><strong>The Forest Plot:</strong></p>
                        <ul>
                            <li><strong>Squares:</strong> Individual study results (Size = Weight/Sample Size).</li>
                            <li><strong>Horizontal Lines:</strong> Confidence Intervals for each study.</li>
                            <li><strong>Diamond (at bottom):</strong> The pooled (combined) result.</li>
                            <li><strong>Vertical Line (at 1):</strong> Line of No Effect. If the Diamond touches this, result is not significant.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2>19.4 Advanced Biases (National Level)</h2>
            <p>Beyond Selection and Recall bias, National exams test these specific, nuanced biases:</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 8px;">
                    <h4 style="color: var(--navy-primary); margin-top: 0;">Berkson's Bias</h4>
                    <p><strong>Type:</strong> Selection Bias (Hospital-based).</p>
                    <p><strong>Definition:</strong> Hospital patients are more likely to have multiple diseases than the general public. This creates a false association between two diseases.</p>
                </div>
                <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 8px;">
                    <h4 style="color: var(--navy-primary); margin-top: 0;">Neyman Bias</h4>
                    <p><strong>Type:</strong> Selection Bias (Prevalence-Incidence).</p>
                    <p><strong>Definition:</strong> If a disease kills quickly (high mortality), a study will miss the severe cases and only see the survivors (mild cases). This skews the data.</p>
                </div>
                <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 8px;">
                    <h4 style="color: var(--navy-primary); margin-top: 0;">Hawthorne Effect</h4>
                    <p><strong>Type:</strong> Measurement Bias.</p>
                    <p><strong>Definition:</strong> People change their behavior just because they know they are being watched.</p>
                </div>
                <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 8px;">
                    <h4 style="color: var(--navy-primary); margin-top: 0;">Ecological Fallacy</h4>
                    <p><strong>Type:</strong> Interpretation Error.</p>
                    <p><strong>Definition:</strong> Assuming that a group-level correlation applies to individuals. (e.g., "Rich countries eat more fat and have more cancer" does NOT prove "Eating fat causes cancer").</p>
                </div>
            </div>

            <!-- Confounding Triangle Visual -->
            <div style="background: white; padding: 2rem; border: 2px solid var(--navy-primary); border-radius: 12px; margin: 2rem 0; text-align: center;">
                <h3 style="margin-top: 0; color: var(--navy-primary);">Visualizing Confounding</h3>
                <p>The "Third Variable" Problem</p>
                <svg width="500" height="300" viewBox="0 0 500 300" class="responsive-svg" style="max-width: 100%; height: auto; margin: 1rem auto;">
                    <defs>
                        <marker id="arrowhead-conf" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                        </marker>
                    </defs>

                    <!-- Nodes -->
                    <g transform="translate(100, 250)">
                        <circle cx="0" cy="0" r="42" fill="#e0f2f1" stroke="#004d40" stroke-width="4"/>
                        <text x="0" y="5" text-anchor="middle" font-weight="900" fill="#004d40" font-size="14" style="text-transform:uppercase;">Exposure</text>
                        <text x="0" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#004d40">(Coffee)</text>
                    </g>

                    <g transform="translate(400, 250)">
                         <circle cx="0" cy="0" r="42" fill="#ffebee" stroke="#b71c1c" stroke-width="4"/>
                         <text x="0" y="5" text-anchor="middle" font-weight="900" fill="#b71c1c" font-size="14" style="text-transform:uppercase;">Disease</text>
                         <text x="0" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#b71c1c">(Heart Attack)</text>
                    </g>

                    <g transform="translate(250, 80)">
                         <circle cx="0" cy="0" r="52" fill="#fff3e0" stroke="#e65100" stroke-width="4"/>
                         <text x="0" y="-5" text-anchor="middle" font-weight="900" fill="#e65100" font-size="16" style="text-transform:uppercase;">Confounder</text>
                         <text x="0" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#e65100">(Smoking)</text>
                    </g>

                    <!-- Arrows -->
                    <!-- Exp -> Disease (The apparent relationship) -->
                    <path d="M145,250 L355,250" fill="none" stroke="#333" stroke-width="3" stroke-dasharray="8,5" marker-end="url(#arrowhead-conf)"/>
                    <text x="250" y="275" text-anchor="middle" fill="#555" font-weight="bold" font-style="italic">Apparent Association?</text>

                    <!-- Confounder -> Exp -->
                    <path d="M220,110 L130,220" fill="none" stroke="#e65100" stroke-width="3" marker-end="url(#arrowhead-conf)"/>
                     <text x="135" y="145" text-anchor="middle" fill="#e65100" font-size="12" font-weight="bold" transform="rotate(-45 140,150)">Associated with Exp</text>

                    <!-- Confounder -> Disease -->
                    <path d="M280,110 L370,220" fill="none" stroke="#e65100" stroke-width="3" marker-end="url(#arrowhead-conf)"/>
                    <text x="365" y="145" text-anchor="middle" fill="#e65100" font-size="12" font-weight="bold" transform="rotate(45 360,150)">Risk Factor for Dis</text>
                </svg>
                <div style="text-align: left; background: #fafafa; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <p><strong>The Logic:</strong></p>
                    <ul>
                        <li>Does Coffee cause Heart Attacks? Maybe.</li>
                        <li><strong>BUT:</strong> Coffee drinkers are also more likely to <strong>Smoke</strong> (Confounder).</li>
                        <li><strong>AND:</strong> Smoking causes Heart Attacks.</li>
                        <li>Therefore, the Coffee-Heart Attack link might be fake. Smoking is the real culprit!</li>
                    </ul>
                </div>
            </div>

            <h2>19.3 Evaluation Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Name That Bias
                </div>
                <div class="callout-content">
                    <p><strong>Scenario 1:</strong> You study the health of factory workers. You find they are healthier than the general population.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Healthy Worker Effect (Selection Bias)</strong></p>
                            <p>To be a worker, you have to be healthy enough to work. The severely ill are not in the workforce, so comparing workers to the general public (which includes the sick) is biased.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 2:</strong> In a study on alcohol and heart disease, you don't account for smoking.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Confounding</strong></p>
                            <p>Smoking is associated with alcohol use AND heart disease. It confuses the result.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Scenario 3:</strong> Mothers of children with birth defects try very hard to remember every medicine they took, while other mothers don't.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Recall Bias (Information Bias)</strong></p>
                            <p>The "Cases" have a different memory accuracy than the "Controls".</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Internal Validity:</strong> Study is done right.</li>
                <li><strong>External Validity:</strong> Applies to real world.</li>
                <li><strong>Temporality:</strong> Cause comes before Effect.</li>
            </ul>

            <h2>19.5 Exam Focus & Tips</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Internal Validity:</strong> The study was done correctly (no bias/confounding).</li>
                        <li><strong>External Validity:</strong> The results apply to the real world.</li>
                        <li><strong>Temporality:</strong> The ONLY essential criterion for causation (Cause -> Effect).</li>
                    </ul>
                </div>
            </div>
`
    },
    ch20: {
        title: "Chapter 20: Integrative Case Studies",
        difficulty: "A",
        content: `
    <h1>Chapter 20: Integrative Case Studies</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">This is the final test. In a real outbreak (and on the exam), you won't get questions in order. You'll get a mess of data and have to make sense of it.</p>

            <h2>20.1 Case Study 1: The Church Picnic</h2>
            <p><strong>Scenario:</strong> 50 people attended a picnic. 20 got sick with vomiting and diarrhea 4 hours later.</p>
            <ul>
                <li><strong>Step 1 (Verify):</strong> Is it an outbreak? Yes (20 cases > expected).</li>
                <li><strong>Step 2 (Case Def):</strong> Person at picnic + Vomiting/Diarrhea + Onset within 6 hours.</li>
                <li><strong>Step 3 (Epi Curve):</strong> Point Source (everyone ate at the same time).</li>
                <li><strong>Step 4 (Agent):</strong> Incubation 4 hours + Symptoms = Likely <em>Staph aureus</em> (toxin).</li>
                <li><strong>Step 5 (Action):</strong> Educate food handlers on temperature control.</li>
            </ul>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Red Herrings
                </div>
                <div class="callout-content">
                    <p><strong>Red Herring:</strong> A piece of information intended to distract you.</p>
                    <p><strong>Example:</strong> "The water fountain was broken." (If everyone drank soda, this doesn't matter!). Focus on the data, not the noise.</p>
                </div>
            </div>

            <h2>20.2 Case Study 2: The Mystery Fever</h2>
            <p><strong>Scenario:</strong> Hikers in Connecticut developing bullseye rashes and joint pain in July.</p>
            <ul>
                <li><strong>Step 1 (Verify):</strong> Verify diagnosis (Lyme disease?).</li>
                <li><strong>Step 2 (Person/Place/Time):</strong> Hikers (Person), Woods (Place), Summer (Time).</li>
                <li><strong>Step 3 (Transmission):</strong> Vector-borne (Ticks).</li>
                <li><strong>Step 4 (Prevention):</strong> Secondary (Check for ticks), Primary (Wear long pants/DEET).</li>
            </ul>

            <h2>20.3 Case Study 3: The National Nightmare (Advanced)</h2>
            <div class="neo-card small" style="border: 2px solid var(--accent-orange);">
                <h3><i class="ph-bold ph-skull"></i> Stratified Analysis Required!</h3>
                <p><strong>Scenario:</strong> A study links Coffee to Pancreatic Cancer (OR = 3.0).</p>
                <p><strong>The Twist:</strong> Coffee drinkers also smoke more. Smoking causes cancer.</p>
                <p><strong>Stratification:</strong> Split data into Smokers vs Non-Smokers.</p>
                <ul>
                    <li><strong>Smokers Only:</strong> Coffee OR = 1.0 (No association).</li>
                    <li><strong>Non-Smokers Only:</strong> Coffee OR = 1.0 (No association).</li>
                </ul>
                <p><strong>Conclusion:</strong> Use the <strong>Adusted OR</strong> (1.0). The crude OR (3.0) was due to <strong>Confounding</strong> by smoking.</p>
            </div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: The "Red Herring"
                </div>
                <div class="callout-content">
                    <p>Exam writers love to give you useless data.</p>
                    <p><em>Example:</em> "The patient ate chicken, beef, and salad. They also have a new puppy."</p>
                    <p>If the symptoms are respiratory (coughing), the food doesn't matter! Focus on the puppy (Zoonotic?). <strong>Filter the noise.</strong></p>
                </div>
            </div>

            <h2>20.4 Synthesis Drill</h2>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Solve the Outbreak
                </div>
                <div class="callout-content">
                    <p><strong>Data:</strong></p>
                    <ul>
                        <li><strong>Symptoms:</strong> Bloody diarrhea, kidney failure.</li>
                        <li><strong>Exposure:</strong> County Fair petting zoo.</li>
                        <li><strong>Incubation:</strong> 3-4 days.</li>
                    </ul>

                    <p style="margin-top: 1rem;"><strong>Question 1:</strong> What is the likely agent?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: E. coli O157:H7</strong></p>
                            <p>Bloody diarrhea + Kidney Failure (HUS) + Petting Zoo = Classic E. coli.</p>
                        </div>
                    </div>

                    <h2>20.4 Exam Focus & Tips</h2>
                    <div class="exam-trap">
                        <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                        <div class="callout-content">
                            <ul>
                                <li><strong>Red Herrings:</strong> Ignore information that doesn't fit the clinical picture.</li>
                                <li><strong>Synthesis:</strong> Combine Incubation Period + Symptoms + Exposure to find the agent.</li>
                                <li><strong>Speed:</strong> Don't get stuck on one detail; look at the whole picture.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: E. coli O157:H7</strong></p>
                            <p>Bloody diarrhea + Kidney failure (HUS) + Animals = Classic E. coli.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 2:</strong> What is the Mode of Transmission?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Direct Contact (Zoonotic) or Indirect (Fecal-Oral)</strong></p>
                            <p>Touching animals or contaminated railings, then touching mouth.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 3:</strong> What is the best control measure?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Handwashing Stations</strong></p>
                            <p>Engineering control (installing sinks) + Administrative (signage).</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>20.5 Advanced Analysis & Statistical Methods</h2>
            <p>Interpretation of observational data often requires analytic techniques beyond simple attack rate calculations. For high‑level competitions, you must understand:</p>
            <ul>
                <li><strong>Confounding:</strong> When a third factor distorts the apparent association between an exposure and an outcome. Control it through restriction, matching, or adjustment.</li>
                <li><strong>Effect modification:</strong> When the strength or direction of an association differs across levels of a third variable. Report interaction terms explicitly.</li>
                <li><strong>Logistic regression:</strong> A multivariate model that estimates odds ratios while adjusting for multiple covariates simultaneously. The coefficient exponentials (<em>e</em><sup>&beta;</sup>) represent adjusted odds ratios.</li>
                <li><strong>Model checking:</strong> Assess goodness of fit with residuals and calibration plots; avoid overfitting by limiting the number of predictors relative to the number of events.</li>
            </ul>
            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Controlling Confounding
                </div>
                <div class="callout-content">
                    <p><strong>Tip:</strong> After stratifying by a potential confounder, compare stratum‑specific estimates to the crude estimate.</p>
                    <p>If they differ materially, confounding is present. Use Mantel–Haenszel or regression models to compute adjusted measures.</p>
                </div>
            </div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap: Misreading Regression
                </div>
                <div class="callout-content">
                    <p><strong>TRAP:</strong> Logistic regression output reports <em>odds ratios</em>, not relative risks. When the outcome is common (>10%), odds ratios will overestimate risk ratios.</p>
                    <p><strong>TIP:</strong> Always report confidence intervals and p‑values. Check whether covariates are confounders or effect modifiers. Use adjusted odds ratios (<em>e</em><sup>β</sup>) only after controlling for all relevant variables.</p>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Synthesize:</strong> Combine symptoms, timing, and exposure.</li>
                <li><strong>Filter:</strong> Ignore irrelevant data.</li>
                <li><strong>Apply:</strong> Use the 13 Steps.</li>
            </ul>
`
    },

    // OFFICIAL RULES 2026
    rules_2026: {
        title: "Official Rules (2026)",
        difficulty: "Ref",
        content: `
    <h1>Official 2026 Division B Rules</h1>
            <span class="difficulty-badge difficulty-advanced">Must Know</span>
            <p class="lead">Critical updates for the 2026 season. These rules for Symptom Interpretation and Elimination are high-yield for the exam.</p>

            <h2>1. High-Level Rules for Symptom Interpretation</h2>
            <div class="grid-2">
                <div class="callout study-tip">
                    <div class="callout-header"><i class="ph ph-check-circle"></i> Rule 1: Symptoms + Timing</div>
                    <div class="callout-content">
                        <p><strong>Formula:</strong> Symptoms + Incubation Period = Narrow down agent.</p>
                        <p><em>Example:</em> Vomiting within 2 hours? Preformed toxin (Staph/Bacillus).</p>
                    </div>
                </div>
                <div class="callout study-tip">
                    <div class="callout-header"><i class="ph ph-check-circle"></i> Rule 2: Curve Shape</div>
                    <div class="callout-content">
                        <p><strong>Formula:</strong> Curve Shape = Detect exposure type.</p>
                        <p><em>Example:</em> Sharp rise and fall? Point Source.</p>
                    </div>
                </div>
                <div class="callout study-tip">
                    <div class="callout-header"><i class="ph ph-check-circle"></i> Rule 3: Maps</div>
                    <div class="callout-content">
                        <p><strong>Formula:</strong> Spot Map = Find exposure location.</p>
                        <p><em>Example:</em> Clusters around a water tower? Legionella.</p>
                    </div>
                </div>
                <div class="callout study-tip">
                    <div class="callout-header"><i class="ph ph-check-circle"></i> Rule 4: Attack Rates</div>
                    <div class="callout-content">
                        <p><strong>Formula:</strong> High AR in exposed vs. Low AR in unexposed = Confirm hypothesis.</p>
                    </div>
                </div>
            </div>

            <h2>2. High-Yield Elimination Rules</h2>
            <p>Use these rules to eliminate false leads quickly (eliminates 80% of distractors).</p>
            <ul class="feature-list">
                <li><i class="ph ph-x-circle" style="color: var(--danger);"></i> <strong>Rule 1:</strong> If many sick students did NOT eat a food &rarr; <strong>NOT the cause.</strong></li>
                <li><i class="ph ph-x-circle" style="color: var(--danger);"></i> <strong>Rule 2:</strong> If many healthy students DID eat a food &rarr; <strong>NOT the cause.</strong></li>
                <li><i class="ph ph-x-circle" style="color: var(--danger);"></i> <strong>Rule 3:</strong> If onset time is too short/long for the agent &rarr; <strong>NOT the cause.</strong></li>
                <li><i class="ph ph-x-circle" style="color: var(--danger);"></i> <strong>Rule 4:</strong> If symptoms don't match (e.g., respiratory symptoms for a foodborne pathogen) &rarr; <strong>NOT the cause.</strong></li>
                <li><i class="ph ph-x-circle" style="color: var(--danger);"></i> <strong>Rule 5:</strong> If the Epi Curve shape doesn't match the exposure type &rarr; <strong>NOT the cause.</strong></li>
            </ul>

            <h2>3. Integration Example</h2>
            <div class="champion-concept">
                <div class="callout-header"><i class="ph ph-trophy"></i> Scenario: School Banquet</div>
                <div class="callout-content">
                    <p><strong>Data:</strong> Vomiting 6-10 hours after eating.</p>
                    <p><strong>Analysis:</strong></p>
                    <ul>
                        <li><strong>Symptom:</strong> Vomiting (Upper GI) &rarr; Likely Toxin.</li>
                        <li><strong>Timing:</strong> 6-10 hours &rarr; Too slow for Staph (2-4 hrs), perfect for <em>B. cereus</em> or <em>C. perfringens</em>.</li>
                        <li><strong>Elimination:</strong> Eliminate Salmonella (12-72 hrs incubation).</li>
                    </ul>
                </div>
            </div>
    `
    },

    // TOOLS & DRILLS
    drills: {
        title: "Interactive Drills & Tools",
        difficulty: "Tool",
        content: `
    <h1>Interactive Drills & Tools</h1>
            <p class="lead">Master the math and logic of epidemiology with these interactive calculators.</p>

            <div class="tool-tabs">
                <button class="tool-tab active" data-tool="2x2">
                    <i class="ph ph-calculator"></i> 2x2 Calculator
                </button>
                <button class="tool-tab" data-tool="curve">
                    <i class="ph ph-chart-bar"></i> Epi Curve
                </button>
                <button class="tool-tab" data-tool="exposure">
                    <i class="ph ph-clock-counter-clockwise"></i> Exposure Window
                </button>
                <button class="tool-tab" data-tool="notesheet">
                    <i class="ph ph-file-text"></i> Notesheet
                </button>
                <button class="tool-tab" data-tool="proctor">
                    <i class="ph ph-timer"></i> Proctor Timer
                </button>
                <button class="tool-tab" data-tool="drills">
                    <i class="ph ph-lightning"></i> Flash Drills
                </button>
            </div>

            <div class="tool-container">
                <!-- 2x2 Calculator -->
                <div id="tool-container-2x2" class="tool-content active">
                    <!-- Injected by calculator-2x2.js -->
                </div>

                <!-- Epi Curve Generator -->
                <div id="tool-container-curve" class="tool-content">
                    <!-- Injected by epi-curve.js -->
                </div>

                <!-- Exposure Window Calculator -->
                <div id="tool-container-exposure" class="tool-content">
                    <!-- Injected by exposure-calculator.js -->
                </div>

                <!-- Notesheet Generator -->
                <div id="tool-container-notesheet" class="tool-content">
                    <!-- Injected by notesheet-generator.js -->
                </div>

                <!-- Proctor Timer -->
                <div id="tool-container-proctor" class="tool-content">
                    <!-- Injected by proctor-tools.js -->
                </div>

                <!-- Flash Drills -->
                <div id="tool-container-drills" class="tool-content">
                    <!-- Injected by flash-drills.js -->
                </div>
            </div>

            <script>
                // Trigger initialization when this content loads
                if (typeof onToolsChapterLoaded === 'function') {
                    onToolsChapterLoaded();
                }
            <\/script>
`
    },

    // QUIZZES

    'quiz-part1': {
        title: "Part I Quiz: Foundation & Surveillance",
        difficulty: "Quiz",
        content: `
    <h1>Part I Comprehensive Quiz</h1>
            <p class="lead">Test your knowledge of Chapters 1-6. This quiz contains questions covering the basics of epidemiology, surveillance, and patterns.</p>
            
            <div id="quiz-container-part1" class="quiz-container">
                <div class="text-center">
                    <div style="margin-bottom: 1rem;">
                        <label for="difficulty-part1" style="font-weight: bold; margin-right: 0.5rem;">Difficulty:</label>
                        <select id="difficulty-part1" class="neo-select" style="padding: 0.5rem;">
                            <option value="balanced">Balanced (Mix)</option>
                            <option value="beginner">Beginner Only</option>
                            <option value="intermediate">Intermediate Only</option>
                            <option value="advanced">Advanced Only</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" onclick="startQuiz('part1')">Start Quiz</button>
                </div>
            </div>
`
    },
    'quiz-part2': {
        title: "Part II Quiz: Investigation & Analysis",
        difficulty: "Quiz",
        content: `
    <h1>Part II Comprehensive Quiz</h1>
            <p class="lead">Test your knowledge of Chapters 7-13. This quiz covers outbreak investigation steps, study design, and statistical analysis.</p>
            
            <div id="quiz-container-part2" class="quiz-container">
                <div class="text-center">
                    <div style="margin-bottom: 1rem;">
                        <label for="difficulty-part2" style="font-weight: bold; margin-right: 0.5rem;">Difficulty:</label>
                        <select id="difficulty-part2" class="neo-select" style="padding: 0.5rem;">
                            <option value="balanced">Balanced (Mix)</option>
                            <option value="beginner">Beginner Only</option>
                            <option value="intermediate">Intermediate Only</option>
                            <option value="advanced">Advanced Only</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" onclick="startQuiz('part2')">Start Quiz</button>
                </div>
            </div>
`
    },
    'quiz-part3': {
        title: "Part III Quiz: Control & Prevention",
        difficulty: "Quiz",
        content: `
    <h1>Part III Comprehensive Quiz</h1>
            <p class="lead">Test your knowledge of Chapters 14-20. This quiz covers control measures, ethics, and advanced evaluation.</p>
            
            <div id="quiz-container-part3" class="quiz-container">
                <div class="text-center">
                    <div style="margin-bottom: 1rem;">
                        <label for="difficulty-part3" style="font-weight: bold; margin-right: 0.5rem;">Difficulty:</label>
                        <select id="difficulty-part3" class="neo-select" style="padding: 0.5rem;">
                            <option value="balanced">Balanced (Mix)</option>
                            <option value="beginner">Beginner Only</option>
                            <option value="intermediate">Intermediate Only</option>
                            <option value="advanced">Advanced Only</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" onclick="startQuiz('part3')">Start Quiz</button>
                </div>
            </div>
`
    },

    // SIMULATION
    simulation: {
        title: "Simulation Exams",
        difficulty: "Exam",
        content: `
    <h1>Disease Detectives Simulation Exam</h1>
            <p class="lead">A full 50-minute, 50-question simulated competition exam. Questions are drawn randomly from all topics and difficulties to mimic a real test environment.</p>
            
            <div class="exam-intro">
                <div class="callout study-tip">
                    <div class="callout-header"><i class="ph ph-clock"></i> Exam Rules</div>
                    <div class="callout-content">
                        <ul>
                            <li><strong>Time Limit:</strong> 50 Minutes</li>
                            <li><strong>Questions:</strong> 50 Multiple Choice</li>
                            <li><strong>Scoring:</strong> +2 for Correct, 0 for Incorrect (No penalty)</li>
                            <li><strong>Topics:</strong> All Parts (I, II, III)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="exam-container" class="exam-container" style="margin-top: 2rem;">
                <p>Select one of the four practice exams below. Each exam consists of 50 timed questions drawn from across the curriculum.</p>
                <div style="margin-bottom: 2rem; display: flex; justify-content: center; align-items: center; gap: 1rem;">
                     <label for="difficulty-sim" style="font-weight: bold;">Difficulty Mix:</label>
                     <select id="difficulty-sim" class="neo-select" style="padding: 0.5rem; width: 200px;">
                        <option value="balanced" selected>National (Balanced)</option>
                        <option value="beginner">Regionals (Easier)</option>
                        <option value="advanced">Nationals Finals (Hard)</option>
                     </select>
                </div>
                <div class="simulation-grid" style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
                    <button class="btn btn-primary btn-lg" onclick="startSimulationExam(1)">
                        <i class="ph ph-play-circle"></i> Exam&nbsp;1
                    </button>
                    <button class="btn btn-primary btn-lg" onclick="startSimulationExam(2)">
                        <i class="ph ph-play-circle"></i> Exam&nbsp;2
                    </button>
                    <button class="btn btn-primary btn-lg" onclick="startSimulationExam(3)">
                        <i class="ph ph-play-circle"></i> Exam&nbsp;3
                    </button>
                    <button class="btn btn-primary btn-lg" onclick="startSimulationExam(4)">
                        <i class="ph ph-play-circle"></i> Exam&nbsp;4
                    </button>
                </div>
            </div>
`
    },

    // APPENDICES
    'appendix-a': {
        title: "Appendix A: Cheat Sheet",
        difficulty: "Ref",
        content: `
    <h1>Appendix A: The Ultimate Cheat Sheet</h1>
            <p class="lead">A condensed summary of the most critical formulas and lists for the exam.</p>

            <h2>1. The 13 Steps of Outbreak Investigation</h2>
            <p><strong>Mnemonic: "Please Verify Cases Find Description Hypotheses Evaluate Review Compare Implement Monitor Communicate"</strong></p>
            <ol class="two-column-list">
                <li><strong>P</strong>repare for field work</li>
                <li><strong>V</strong>erify outbreak existence</li>
                <li><strong>V</strong>erify diagnosis</li>
                <li><strong>C</strong>ase definition (Confirmed/Probable/Possible)</li>
                <li><strong>F</strong>ind cases systematically (line listing)</li>
                <li><strong>D</strong>escribe epidemic (time/place/person)</li>
                <li><strong>D</strong>evelop hypotheses (agent/host/environment)</li>
                <li><strong>E</strong>valuate hypotheses (analytical epi)</li>
                <li><strong>R</strong>e-evaluate as needed</li>
                <li><strong>C</strong>ompare with lab/environmental studies</li>
                <li><strong>I</strong>mplement control measures (ASAP!)</li>
                <li><strong>M</strong>aintain surveillance</li>
                <li><strong>C</strong>ommunicate findings</li>
            </ol>

            <!-- Advanced concept: Causation criteria -->
            <h2>Advanced: Hill's Criteria for Causation</h2>
            <ul>
                <li><strong>Strength:</strong> High RR or OR.</li>
                <li><strong>Consistency:</strong> Repeated by others.</li>
                <li><strong>Specificity:</strong> One cause, one effect.</li>
                <li><strong>Temporality:</strong> Cause precedes effect (Essential!).</li>
                <li><strong>Biological Gradient:</strong> Dose-response.</li>
                <li><strong>Plausibility:</strong> Makes biological sense.</li>
                <li><strong>Coherence:</strong> Fits with known facts.</li>
                <li><strong>Experiment:</strong> Intervention works.</li>
                <li><strong>Analogy:</strong> Similar to other known associations.</li>
            </ul>
`
    },
    'appendix-b': {
        title: "Appendix B: Formulas",
        difficulty: "Ref",
        content: `
            <h1>Appendix B: Essential Formulas</h1>

            <!-- Study priority guidance for formulas -->
            <p class="lead" style="margin-top: 1rem;">
                Focus your study on the first six formulas below—<strong>Attack Rate</strong>, <strong>Relative Risk</strong>, <strong>Odds Ratio</strong>,
                <strong>Attributable Risk</strong>, <strong>Attributable Risk&nbsp;%</strong> and <strong>Vaccine Efficacy</strong>—as these measures are most
                commonly tested in Division&nbsp;B competition. Measures like Sensitivity, Specificity and Predictive Values are also important
                but can be considered secondary. Any remaining or more complex measures may be treated as advanced topics.
            </p>
            <div class="formula-grid">
                <div class="formula-card">
                    <h3>Attack Rate (Risk)</h3>
                    <div class="formula-body">
                        <div class="fraction">
                            <span class="numerator">Ill</span>
                            <span class="denominator">Total in Group</span>
                        </div>
                        &times; 100
                    </div>
                    <p class="formula-desc">Percentage of a group that becomes ill.</p>
                </div>

                <div class="formula-card">
                    <h3>Relative Risk (RR)</h3>
                    <div class="formula-body">
                        <div class="fraction">
                            <span class="numerator">Incidence in Exposed</span>
                            <span class="denominator">Incidence in Unexposed</span>
                        </div>
                        =
                        <div class="fraction">
                            <span class="numerator">a / (a + b)</span>
                            <span class="denominator">c / (c + d)</span>
                        </div>
                    </div>
                    <p class="formula-desc">Used for Cohort Studies. Measures how much more likely exposed are to get sick.</p>
                </div>

                <div class="formula-card">
                    <h3>Odds Ratio (OR)</h3>
                    <div class="formula-body">
                        <div class="fraction">
                            <span class="numerator">a &times; d</span>
                            <span class="denominator">b &times; c</span>
                        </div>
                    </div>
                    <p class="formula-desc">Used for Case-Control Studies. Estimates RR when disease is rare.</p>
                </div>

                <div class="formula-card">
                    <h3>Attributable Risk (AR)</h3>
                    <div class="formula-body">
                        I<sub>exposed</sub> - I<sub>unexposed</sub>
                    </div>
                    <p class="formula-desc">The excess risk due to the exposure.</p>
                </div>

                <div class="formula-card">
                    <h3>Attributable Risk % (AR%)</h3>
                    <div class="formula-body">
                        <div class="fraction">
                            <span class="numerator">RR - 1</span>
                            <span class="denominator">RR</span>
                        </div>
                        &times; 100
                    </div>
                    <p class="formula-desc">Proportion of disease in exposed group due to exposure.</p>
                </div>

                <div class="formula-card">
                    <h3>Vaccine Efficacy (VE)</h3>
                    <div class="formula-body">
                        <div class="fraction">
                            <span class="numerator">AR<sub>unvax</sub> - AR<sub>vax</sub></span>
                            <span class="denominator">AR<sub>unvax</sub></span>
                        </div>
                        &times; 100
                    </div>
                    <p class="formula-desc">Percentage reduction in disease incidence in vaccinated group.</p>
                </div>

                <div class="formula-card">
                    <h3>Sensitivity</h3>
                    <div class="formula-body">
                        <div class="fraction">
                            <span class="numerator">True Positives (a)</span>
                            <span class="denominator">Total Sick (a + c)</span>
                        </div>
                    </div>
                    <p class="formula-desc">Ability to correctly identify those WITH the disease.</p>
                </div>

                <div class="formula-card">
                    <h3>Specificity</h3>
                    <div class="formula-body">
                        <div class="fraction">
                            <span class="numerator">True Negatives (d)</span>
                            <span class="denominator">Total Healthy (b + d)</span>
                        </div>
                    </div>
                    <p class="formula-desc">Ability to correctly identify those WITHOUT the disease.</p>
                </div>

                <div class="formula-card">
                    <h3>Positive Predictive Value (PPV)</h3>
                    <div class="formula-body">
                        <div class="fraction">
                            <span class="numerator">a</span>
                            <span class="denominator">a + b</span>
                        </div>
                    </div>
                    <p class="formula-desc">Probability that a positive test means you are sick.</p>
                </div>

                <div class="formula-card">
                    <h3>Negative Predictive Value (NPV)</h3>
                    <div class="formula-body">
                            <span class="numerator">True Negatives (d)</span>
                            <span class="denominator">Total Negative Tests (c + d)</span>
                        </div>
                    </div>
                    <p class="formula-desc">Probability that a negative test means you are truly healthy.</p>
                </div>
            </div>
`
    },

    'appendix-c': {
        title: "Appendix C: Diagnostic Methods",
        difficulty: "Ref",
        content: `
            <h1>Appendix C: Diagnostic Methods</h1>
            <p class="lead">Common laboratory techniques used to identify pathogens.</p>
            
            <div class="table-container"><table class="table">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr><th>Method</th><th>Target</th><th>Speed</th><th>Pros/Cons</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>PCR</strong> (Polymerase Chain Reaction)</td><td>DNA/RNA</td><td>Fast (Hours)</td><td>High sensitivity, but can't distinguish live vs dead bacteria.</td></tr>
                    <tr style="background: var(--gray-bg);"><td><strong>Culture</strong></td><td>Live Bacteria</td><td>Slow (Days)</td><td>The "Gold Standard". Allows for antibiotic resistance testing.</td></tr>
                    <tr><td><strong>ELISA</strong> (Serology)</td><td>Antibodies (IgM/IgG)</td><td>Fast (Hours)</td><td>Detects immune response (past or recent infection).</td></tr>
                    <tr style="background: var(--gray-bg);"><td><strong>PFGE</strong></td><td>DNA fragments</td><td>Slow</td><td>"DNA Fingerprinting" (Old standard).</td></tr>
                    <tr><td><strong>WGS</strong> (Whole Genome Sequencing)</td><td>Entire DNA</td><td>Slow/Med</td><td>The new standard. Highest resolution for linking cases.</td></tr>
                </tbody>
            </table></div>
        `
    },


    quiz_master: {
        title: "Master Quiz: Comprehensive Exam",
        content: `
    <div class="comprehensive-quiz-container">
                <h1>Master Quiz: Comprehensive Exam</h1>
                <p class="lead">The ultimate test. 100 questions covering the entire curriculum (Chapters 1-20).</p>
                <div class="neo-card" style="text-align: center; padding: 3rem;">
                    <i class="ph ph-trophy" style="font-size: 4rem; color: var(--accent-orange); margin-bottom: 1rem;"></i>
                    <h2>Ready to prove your mastery?</h2>
                    <p>This exam simulates the National competition experience.</p>
                    <button class="neo-btn" onclick="window.startQuiz('master')">Start Master Exam</button>
                </div>
                <div id="quiz-container-master"></div>
            </div>
    `
    },
    quiz_part1: {
        title: "Part I Quiz: Foundation & History",
        content: `
    <div class="comprehensive-quiz-container">
                <h1>Part I Quiz: Foundation, History & Surveillance</h1>
                <p class="lead">Test your knowledge of Chapters 1-6, plus Definitions & History.</p>
                
                <div class="neo-card" style="text-align: center; max-width: 600px; margin: 2rem auto; padding: 2rem;">
                    <i class="ph ph-sliders-horizontal" style="font-size: 3rem; color: var(--navy-primary); margin-bottom: 1rem;"></i>
                    <h3>Configure Quiz</h3>
                    <p>Select difficulty level:</p>
                    <div style="display: flex; justify-content: center; margin-bottom: 1.5rem;">
                        <select id="difficulty-part1" class="neo-select" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; width: 200px;">
                            <option value="beginner">Beginner (Recall)</option>
                            <option value="intermediate">Intermediate (Application)</option>
                            <option value="advanced">Advanced (Analysis)</option>
                            <option value="balanced" selected>Balanced (Mixed)</option>
                        </select>
                    </div>
                    <button class="neo-btn" onclick="window.startQuiz('part1')">Start Quiz</button>
                </div>

                <div id="quiz-container-part1"></div>
            </div>
    `
    },
    quiz_part2: {
        title: "Part II Quiz: Investigation",
        content: `
    <div class="comprehensive-quiz-container">
                <h1>Part II Quiz: Investigation & Analysis</h1>
                <p class="lead">Test your knowledge of Chapters 7-13.</p>

                <div class="neo-card" style="text-align: center; max-width: 600px; margin: 2rem auto; padding: 2rem;">
                    <i class="ph ph-sliders-horizontal" style="font-size: 3rem; color: var(--navy-primary); margin-bottom: 1rem;"></i>
                    <h3>Configure Quiz</h3>
                    <p>Select difficulty level:</p>
                    <div style="display: flex; justify-content: center; margin-bottom: 1.5rem;">
                        <select id="difficulty-part2" class="neo-select" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; width: 200px;">
                            <option value="beginner">Beginner (Recall)</option>
                            <option value="intermediate">Intermediate (Application)</option>
                            <option value="advanced">Advanced (Analysis)</option>
                            <option value="balanced" selected>Balanced (Mixed)</option>
                        </select>
                    </div>
                    <button class="neo-btn" onclick="window.startQuiz('part2')">Start Quiz</button>
                </div>

                <div id="quiz-container-part2"></div>
            </div>
    `
    },
    quiz_part3: {
        title: "Part III Quiz: Control",
        content: `
    <div class="comprehensive-quiz-container">
                <h1>Part III Quiz: Control & Prevention</h1>
                <p class="lead">Test your knowledge of Chapters 14-20.</p>

                <div class="neo-card" style="text-align: center; max-width: 600px; margin: 2rem auto; padding: 2rem;">
                    <i class="ph ph-sliders-horizontal" style="font-size: 3rem; color: var(--navy-primary); margin-bottom: 1rem;"></i>
                    <h3>Configure Quiz</h3>
                    <p>Select difficulty level:</p>
                    <div style="display: flex; justify-content: center; margin-bottom: 1.5rem;">
                        <select id="difficulty-part3" class="neo-select" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; width: 200px;">
                            <option value="beginner">Beginner (Recall)</option>
                            <option value="intermediate">Intermediate (Application)</option>
                            <option value="advanced">Advanced (Analysis)</option>
                            <option value="balanced" selected>Balanced (Mixed)</option>
                        </select>
                    </div>
                    <button class="neo-btn" onclick="window.startQuiz('part3')">Start Quiz</button>
                </div>

                <div id="quiz-container-part3"></div>
            </div>
    `
    },
    simulation: {
        title: "Simulation Exams",
        content: `
    <div class="comprehensive-quiz-container">
                <h1>National Simulation Exams</h1>
                <p class="lead">Full-length, timed practice exams generated from our 300+ question bank.</p>
                <div id="exam-container"></div>
                <div style="text-align: center; margin-top: 2rem;">
                    <p>Select one of the four simulation exams:</p>
                    <div style="display:flex; justify-content:center; flex-wrap: wrap; gap: 1rem;">
                        <button class="neo-btn" onclick="window.startSimulationExam(1)">
                            <i class="ph-bold ph-play"></i> Exam&nbsp;1
                        </button>
                        <button class="neo-btn" onclick="window.startSimulationExam(2)">
                            <i class="ph-bold ph-play"></i> Exam&nbsp;2
                        </button>
                        <button class="neo-btn" onclick="window.startSimulationExam(3)">
                            <i class="ph-bold ph-play"></i> Exam&nbsp;3
                        </button>
                        <button class="neo-btn" onclick="window.startSimulationExam(4)">
                            <i class="ph-bold ph-play"></i> Exam&nbsp;4
                        </button>
                    </div>
                </div>
            </div>
    `
    },
    case_library: {
        title: "Disease Case Library",
        content: `
    <div class="neo-card">
                <h2>Disease Case Library</h2>
                <p>A collection of 40+ case studies with counterfactuals and spot maps.</p>
                <div id="case-library-container" class="grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
                    <!-- Cases will be rendered here -->
                </div>
            </div>
    `
    },
    interactive_scenarios: {
        title: "Interactive Scenarios",
        content: `
    <div id="interactive-cases-root" style="margin-top: 1rem;"></div>
        `
    },
    'appendix-g': {
        title: "Glossary",
        content: `
        <div class="comprehensive-quiz-container">
                <h1>Epidemiology Glossary</h1>
                <p class="lead">Searchable definitions of epidemiological terms.</p>
                <div id="glossary-root"></div>
            </div>
    `
    },
    'appendix-f': {
        title: "Flashcards",
        content: `
    <div class="comprehensive-quiz-container">
                <h1>Flashcards</h1>
                <p class="lead">Test your recall of key terms and concepts.</p>
                <div id="flashcard-root"></div>
            </div>
    `
    },






    my_progress: {
        title: "My Progress",
        content: `
    <h1>My Progress</h1>
            <p class="lead">Track your performance across quizzes and exams. Data is stored locally on this device.</p>
            <div id="analytics-dashboard">
                <div class="neo-card">
                    <h3>Recent Activity</h3>
                    <div id="analytics-history-list">Loading...</div>
                </div>
                <div class="neo-card" style="margin-top: 1rem;">
                    <button class="neo-btn outline small" id="clear-history-btn">Clear History</button>
                </div>
            </div>
`
    },
    coach_resources: {
        title: "Coach Resources",
        content: `
    <div class="neo-card" style="border: 2px solid var(--accent-orange);">
                <h1><i class="ph-bold ph-chalkboard-teacher"></i> Coach Resources</h1>
                <p class="lead">Restricted Access: Answer keys and lesson guides.</p>
                <div class="alert alert-info">
                    <strong>Coach Mode Active:</strong> You can see answer explanations during quizzes.
                </div>
                <h3>Answer Keys</h3>
                <p>Coming soon: PDF downloads for printable quizzes.</p>
            </div >
    `
    },
    // Old 'about' block removed in favor of the consolidated one at the end of file.
    appendix: {
        title: "Appendix & Resources",
        content: `
    <div class="neo-card">
                <h2>Appendix & Resources</h2>
                <div class="tabs" style="margin-bottom: 1rem;">
                    <button class="neo-btn small active" onclick="showTab('rules')">Rules</button>
                    <button class="neo-btn small" onclick="showTab('strategy')">Strategy</button>
                    <button class="neo-btn small" onclick="showTab('diagnostic')">Diagnostics</button>
                    <button class="neo-btn small" onclick="showTab('biases')">Biases</button>
                    <button class="neo-btn small" onclick="showTab('mnemonics')">Mnemonics</button>
                    <button class="neo-btn small" onclick="showTab('formulas')">Formulas</button>
                    <button class="neo-btn small" onclick="showTab('tables')">Tables</button>
                    <button class="neo-btn small" onclick="showTab('flashcards')">Flashcards</button>
                    <button class="neo-btn small" onclick="showTab('glossary')">Glossary</button>
                </div>
                
                <div id="rules" class="tab-content active">
                    <h3>Competition Rules</h3>
                    <div id="rules-container"></div>
                </div>
                
                <div id="biases" class="tab-content" style="display:none;">
                    <h3>Bias Catalog</h3>
                    <div id="biases-container" class="grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;"></div>
                </div>
                
                <div id="mnemonics" class="tab-content" style="display:none;">
                    <h3>Mnemonic Bank</h3>
                    <div id="mnemonics-container"></div>
                </div>

                <div id="formulas" class="tab-content" style="display:none;">
                    <h3>Essential Formulas</h3>
                    <p class="lead">Quick reference for all epidemiological calculations.</p>
                    <div id="formulas-root"></div>
                </div>

                <div id="tables" class="tab-content" style="display:none;">
                     <h3>Statistical Tables</h3>
                     <p class="lead">Critical values for Chi-Square and Z-scores.</p>
                     <div id="tables-root"></div>
                </div>

                <div id="flashcards" class="tab-content" style="display:none;">
                    <h3>Flashcards</h3>
                    <p class="lead">Interactive flashcards for key epidemiology concepts.</p>
                    <div id="flashcard-root"></div>
                </div>

                <div id="glossary" class="tab-content" style="display:none;">
                    <h3>Epidemiology Glossary</h3>
                    <p class="lead">Searchable definitions of epidemiological terms.</p>
                    <div id="glossary-root"></div>
                </div>

                <div id="strategy" class="tab-content" style="display:none;">
                    <h3>Competition Strategy Guide</h3>
                    <p class="lead"><strong>"Knowledge is power, but strategy wins medals."</strong> Use these proven tactics for Division B Success.</p>
                    
                    <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                        <div class="neo-card small" style="border-left: 4px solid var(--accent-blue);">
                            <h4><i class="ph-bold ph-clock"></i> Time Management</h4>
                            <ul style="padding-left: 1.2rem; margin-top:0.5rem;">
                                <li><strong>The 50/50 Rule:</strong> You have ~50 minutes for 50-100 questions. That's 30-60 seconds per item.</li>
                                <li><strong>Triage First:</strong> Scan the test. Do the quick "Vocabulary Matching" or "Simple Math" sections first to bank points.</li>
                                <li><strong>Don't Stall:</strong> If a tough case study stumps you, mark it and move on. Return only if time permits.</li>
                            </ul>
                        </div>

                        <div class="neo-card small" style="border-left: 4px solid var(--accent-orange);">
                            <h4><i class="ph-bold ph-trophy"></i> Scoring & Tie-Breakers</h4>
                            <ul style="padding-left: 1.2rem; margin-top:0.5rem;">
                                <li><strong>Show Your Work!</strong> Partial credit is common. Even if the answer is wrong, the right formula gets points.</li>
                                <li><strong>Explain "Why":</strong> "The curve suggests a point source <em>because</em> it has a sharp peak." The "because" earns the quality points.</li>
                                <li><strong>Hunt Tie-Breakers:</strong> Often the last question or the hardest math problem. Spend extra care here; it decides the medal color.</li>
                            </ul>
                        </div>

                        <div class="neo-card small" style="border-left: 4px solid var(--accent-green);">
                            <h4><i class="ph-bold ph-read-cv-logo"></i> The Cheat Sheet</h4>
                            <ul style="padding-left: 1.2rem; margin-top:0.5rem;">
                                <li><strong>Don't Print the Internet:</strong> Your sheet should be a <em>reminder</em>, not a textbook.</li>
                                <li><strong>What to Include:</strong> Formulas (RR, OR, AR), 13 Steps Mnemonic, List of Biases, Z-Score Table.</li>
                                <li><strong>Map It:</strong> Know exactly where "Incubation Periods" are located on your sheet so you don't waste time searching.</li>
                            </ul>
                        </div>

                        <div class="neo-card small" style="border-left: 4px solid var(--accent-pink);">
                            <h4><i class="ph-bold ph-brain"></i> Mental Game</h4>
                            <ul style="padding-left: 1.2rem; margin-top:0.5rem;">
                                <li><strong>Read Carefully:</strong> Circle key words: "EXCEPT", "NOT", "MOST LIKELY". Misreading is the #1 cause of lost points.</li>
                                <li><strong>Collaborate:</strong> Divide and conquer! Split the packet. Check each other's math if time allows.</li>
                                <li><strong>Assume Success:</strong> If a question looks impossible, it's impossible for everyone. Just write <em>something</em> logical.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="diagnostic" class="tab-content" style="display:none;">
                    <h3>Diagnostic & Readiness Hub</h3>
                    <p class="lead">Master test metrics and track your preparation status.</p>
                    <div id="diagnostic-container"></div>
                </div>
            </div>
    `
    }
    ,

    about: {
        title: "About Epidemic Engine",
        content: `
            <style>
                .about-hero {
                    background: linear-gradient(135deg, var(--navy-primary) 0%, #2563eb 100%);
                    color: white;
                    padding: 4rem 2rem;
                    border-radius: 24px;
                    text-align: center;
                    margin-bottom: 3rem;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    position: relative;
                    overflow: hidden;
                }
                .about-hero::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-image: radial-gradient(circle at 20% 150%, rgba(255,255,255,0.1) 0%, transparent 50%);
                }
                .profile-card {
                    background: white;
                    border-radius: 16px;
                    padding: 2rem;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.2s;
                }
                .profile-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .tech-badge {
                    background: #f1f5f9;
                    color: #475569;
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    display: inline-block;
                    margin: 0.25rem;
                }
            </style>

            <!-- Hero Section -->
            <div class="about-hero">
                <div style="position: relative; z-index: 2;">
                    <img src="assets/logo.png" alt="Logo" style="width: 96px; height: 96px; border-radius: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.2); background: white; padding: 4px;">
                    <h1 style="margin: 1.5rem 0 0.5rem; font-size: 3rem; font-weight: 800; letter-spacing: -0.025em; color: white;">Epidemic Engine</h1>
                    <div style="display: inline-flex; align-items: center; background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); padding: 0.5rem 1rem; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.3);">
                        <span style="width: 8px; height: 8px; background: #4ade80; border-radius: 50%; margin-right: 0.5rem; box-shadow: 0 0 8px #4ade80;"></span>
                        <span style="font-weight: 600; font-size: 0.9rem; letter-spacing: 0.5px;">v3.0.0 GRANDMASTER EDITION</span>
                    </div>
                </div>
            </div>

            <!-- Mission -->
            <div style="max-width: 800px; margin: 0 auto 4rem; text-align: center;">
                <h2 style="font-size: 2rem; color: var(--navy-primary); margin-bottom: 1rem;">Democratizing Epidemiology</h2>
                <p style="font-size: 1.25rem; color: #64748b; line-height: 1.6;">
                    The Epidemic Engine is built on a single belief: <strong style="color: var(--navy-primary);">Every student deserves National-level training tools.</strong> By combining medical expertise with advanced simulation technology, we are leveling the playing field for future Disease Detectives.
                </p>
            </div>

            <!-- Credits Grid -->
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                
                <!-- Architect Profile -->
                <div class="profile-card">
                    <div style="width: 80px; height: 80px; background: var(--navy-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem;">
                        <i class="ph-bold ph-user"></i>
                    </div>
                    <h3 style="margin: 0; font-size: 1.5rem; color: var(--navy-primary);">Naveen Minumula, MD</h3>
                    <div style="color: var(--accent-orange); font-weight: 600; font-size: 0.9rem; letter-spacing: 1px; margin-top: 0.25rem; text-transform: uppercase;">Lead Architect & Creator</div>
                    <p style="color: #64748b; margin: 1.5rem 0; font-size: 0.95rem;">
                        Leveraging clinical experience to create medically accurate, high-fidelity outbreak simulations.
                    </p>
                    <div style="display: flex; gap: 0.5rem; justify-content: center;">
                        <a href="mailto:contact@epidemicengine.com" class="neo-btn small outline"><i class="ph-bold ph-envelope"></i> Contact</a>
                    </div>
                </div>

                <!-- Technology Stack -->
                <div class="profile-card" style="text-align: left;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 48px; height: 48px; background: #f8fafc; color: var(--navy-primary); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                            <i class="ph-bold ph-code"></i>
                        </div>
                        <div>
                            <h3 style="margin: 0; font-size: 1.25rem;">Technology Stack</h3>
                            <div style="color: #64748b; font-size: 0.9rem;">Powered by Antigravity</div>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 1rem;">
                        <strong style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">Core Engine</strong>
                        <span class="tech-badge">Vanilla JS (ES6+)</span>
                        <span class="tech-badge">Service Workers</span>
                        <span class="tech-badge">Canvas API</span>
                    </div>

                    <div style="margin-bottom: 1rem;">
                        <strong style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">Design System</strong>
                        <span class="tech-badge">Neo-Brutalist UI</span>
                        <span class="tech-badge">CSS Grid</span>
                        <span class="tech-badge">Phosphor Icons</span>
                    </div>

                    <div>
                        <strong style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">Infrastructure</strong>
                        <span class="tech-badge">Vercel Edge</span>
                        <span class="tech-badge">PWA Standards</span>
                    </div>
                </div>
            </div>

            <!-- Version History (Timeline) -->
            <div class="neo-card" style="margin-bottom: 4rem;">
                <h3 style="border-bottom: 2px solid #eee; padding-bottom: 1rem; margin-top: 0;">
                    <i class="ph-bold ph-git-commit"></i> Release History
                </h3>
                <div style="display: grid; gap: 1.5rem;">
                    <div style="display: flex; gap: 1rem;">
                        <div style="font-weight: 700; color: var(--navy-primary); min-width: 80px;">v3.0.0</div>
                        <div>
                            <strong style="display: block; color: #0f172a;">Grandmaster Edition</strong>
                            <div style="color: #64748b; font-size: 0.95rem;">Added "Infinite Outbreak" Procedural Engine. Optimized for Vercel deployment.</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <div style="font-weight: 700; color: #64748b; min-width: 80px;">v2.6.0</div>
                        <div>
                            <strong style="display: block; color: #334155;">Tier 2 Enhancements</strong>
                            <div style="color: #64748b; font-size: 0.95rem;">Herd Immunity Calculator, Environmental Toxins (Ch 21), Mega Scenarios (Potluck, Wedding, Cruise).</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <div style="font-weight: 700; color: #64748b; min-width: 80px;">v2.5.3</div>
                        <div>
                            <strong style="display: block; color: #334155;">Mega Cases</strong>
                            <div style="color: #64748b; font-size: 0.95rem;">Introduced complex multi-step case studies (C1-C50) with line lists using the Case Library engine.</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Resources Footer -->
            <h2 style="text-align: center; margin-bottom: 2rem;">Official Resources</h2>
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 4rem;">
                <a href="https://www.soinc.org" target="_blank" class="neo-card small action-card" style="text-decoration:none; color:inherit; text-align: center; display:block; transition:transform 0.2s;">
                    <div style="color:var(--navy-primary); font-size:2.5rem; margin-bottom:0.5rem;"><i class="ph-bold ph-student"></i></div>
                    <div style="font-weight:700; font-size:1.1rem;">Science Olympiad</div>
                    <div style="color:#64748b; font-size:0.9rem;">Official Rules</div>
                </a>
                <a href="https://www.cdc.gov/eis/field-epi-manual/index.html" target="_blank" class="neo-card small action-card" style="text-decoration:none; color:inherit; text-align: center; display:block; transition:transform 0.2s;">
                    <div style="color:var(--accent-blue); font-size:2.5rem; margin-bottom:0.5rem;"><i class="ph-bold ph-book-open"></i></div>
                    <div style="font-weight:700; font-size:1.1rem;">CDC Field Manual</div>
                    <div style="color:#64748b; font-size:0.9rem;">The "Bible" of Epi</div>
                </a>
                <a href="https://www.who.int" target="_blank" class="neo-card small action-card" style="text-decoration:none; color:inherit; text-align: center; display:block; transition:transform 0.2s;">
                    <div style="color:var(--accent-orange); font-size:2.5rem; margin-bottom:0.5rem;"><i class="ph-bold ph-globe"></i></div>
                    <div style="font-weight:700; font-size:1.1rem;">WHO Global</div>
                    <div style="color:#64748b; font-size:0.9rem;">Outbreak News</div>
                </a>
            </div>

            <div style="text-align: center; margin-bottom: 2rem;">
                 <button onclick="if(confirm('WARNING: This will permanently delete ALL your progress. Are you sure?')) { localStorage.clear(); location.reload(); }" class="neo-btn danger">
                    <i class="ph-bold ph-trash"></i> Factory Reset Application
                </button>
            </div>
        `
    }
};

// Make globally available
// End of Content

const QUIZ_BANKS = {
    "part2":  {
                  "intermediate":  [
                                       {
                                           "q":  "Exposed AR = 30%, unexposed AR = 10%. Risk difference?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 7",
                                           "options":  [
                                                           "20%",
                                                           "3.0",
                                                           "0.33",
                                                           "Cannot compute"
                                                       ],
                                           "explain":  "Correct: RD = 30% - 10% = 20%. (Note: 3.0 is the Risk Ratio).",
                                           "chapter":  "ch7"
                                       },
                                       {
                                           "q":  "Risk difference is most useful when:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 7",
                                           "options":  [
                                                           "Measuring strength only",
                                                           "Planning impact / cases prevented",
                                                           "Calculating OR",
                                                           "Genetic studies"
                                                       ],
                                           "explain":  "Correct: RD gives absolute excess/reduction.",
                                           "chapter":  "ch7"
                                       },
                                       {
                                           "q":  "Why use OR instead of RR?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 7",
                                           "options":  [
                                                           "RR never valid",
                                                           "OR works when population at risk unknown",
                                                           "OR always more accurate",
                                                           "RR only for vaccines"
                                                       ],
                                           "explain":  "Correct: OR works in case-control studies.",
                                           "chapter":  "ch7"
                                       },
                                       {
                                           "q":  "Identify the outbreak pattern shown in the diagram below:\u003cbr\u003e\u003cbr\u003e\u003csvg width=\u0027240\u0027 height=\u0027120\u0027 viewBox=\u00270 0 240 120\u0027 style=\u0027background:#f9fafb; border:1px solid #e5e7eb; border-radius:4px; display:block; margin:0.5rem auto;\u0027\u003e\u003crect x=\u002740\u0027 y=\u002790\u0027 width=\u002720\u0027 height=\u002710\u0027 fill=\u0027#2d3e50\u0027/\u003e\u003crect x=\u002765\u0027 y=\u002760\u0027 width=\u002720\u0027 height=\u002740\u0027 fill=\u0027#2d3e50\u0027/\u003e\u003crect x=\u002790\u0027 y=\u002720\u0027 width=\u002720\u0027 height=\u002780\u0027 fill=\u0027#2d3e50\u0027/\u003e\u003crect x=\u0027115\u0027 y=\u002750\u0027 width=\u002720\u0027 height=\u002750\u0027 fill=\u0027#2d3e50\u0027/\u003e\u003crect x=\u0027140\u0027 y=\u002780\u0027 width=\u002720\u0027 height=\u002720\u0027 fill=\u0027#2d3e50\u0027/\u003e\u003cline x1=\u002710\u0027 y1=\u0027110\u0027 x2=\u0027230\u0027 y2=\u0027110\u0027 stroke=\u0027#374151\u0027 stroke-width=\u00272\u0027/\u003e\u003ctext x=\u0027120\u0027 y=\u0027118\u0027 text-anchor=\u0027middle\u0027 font-size=\u002710\u0027 fill=\u0027#6b7280\u0027\u003eTime\u003c/text\u003e\u003c/svg\u003e",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 8",
                                           "options":  [
                                                           "Point-source outbreak",
                                                           "Continuous common-source outbreak",
                                                           "Propagated outbreak",
                                                           "Random variation"
                                                       ],
                                           "explain":  "Correct: A. Classic spike then taper. Trap: not propagated.",
                                           "chapter":  "ch8"
                                       },
                                       {
                                           "q":  "Initial spike followed by waves. Pattern?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 8",
                                           "options":  [
                                                           "Point-source",
                                                           "Mixed outbreak",
                                                           "Continuous source",
                                                           "Propagated only"
                                                       ],
                                           "explain":  "Correct: B. Mixed = common source + propagation.",
                                           "chapter":  "ch8"
                                       },
                                       {
                                           "q":  "Propagated outbreaks generally produce:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 8",
                                           "options":  [
                                                           "Single narrow peak",
                                                           "Multiple peaks spaced by incubation",
                                                           "Flat line",
                                                           "Plateau with no peaks"
                                                       ],
                                           "explain":  "Correct: B.",
                                           "chapter":  "ch8"
                                       },
                                       {
                                           "q":  "Which pattern suggests a slowly leaking water source?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 8",
                                           "options":  [
                                                           "Several spaced peaks",
                                                           "Prolonged plateau with slow rise and fall",
                                                           "Sharp spike",
                                                           "Single classroom cases"
                                                       ],
                                           "explain":  "Correct: B.",
                                           "chapter":  "ch8"
                                       },
                                       {
                                           "q":  "Which is NOT part of a standard case definition?",
                                           "answer":  3,
                                           "type":  "mc",
                                           "topic":  "Chapter 9",
                                           "options":  [
                                                           "Clinical criteria",
                                                           "Person/place/time",
                                                           "Lab confirmation",
                                                           "Personal opinions"
                                                       ],
                                           "explain":  "Correct: Case definitions require objective criteria.",
                                           "chapter":  "ch9"
                                       },
                                       {
                                           "q":  "Descriptive epidemiology summarizes:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 9",
                                           "options":  [
                                                           "Risk ratios",
                                                           "Person, place, time",
                                                           "Final reports",
                                                           "Lab protocols"
                                                       ],
                                           "explain":  "Correct: Classic descriptive triad.",
                                           "chapter":  "ch9"
                                       },
                                       {
                                           "q":  "Most appropriate EARLY control measure?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 9",
                                           "options":  [
                                                           "Publish report",
                                                           "Remove contaminated food",
                                                           "Wait for full lab results",
                                                           "Re-interview cases"
                                                       ],
                                           "explain":  "Correct: Early control occurs immediately with credible evidence.",
                                           "chapter":  "ch9"
                                       },
                                       {
                                           "q":  "Researchers follow exposed and unexposed students over 3 days to record new illness. Study design?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 10",
                                           "options":  [
                                                           "Cohort",
                                                           "Case-control",
                                                           "Randomized trial",
                                                           "Cross-sectional"
                                                       ],
                                           "explain":  "Correct: Cohort = forward direction based on exposure.",
                                           "chapter":  "ch10"
                                       },
                                       {
                                           "q":  "Case-control studies primarily use which measure?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 10",
                                           "options":  [
                                                           "Risk ratio",
                                                           "Odds ratio",
                                                           "Risk difference",
                                                           "Incidence rate"
                                                       ],
                                           "explain":  "Correct: OR required because denominators forced.",
                                           "chapter":  "ch10"
                                       },
                                       {
                                           "q":  "Which design is best for measuring prevalence?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 10",
                                           "options":  [
                                                           "Cohort",
                                                           "Cross-sectional",
                                                           "Case-control",
                                                           "Clinical trial"
                                                       ],
                                           "explain":  "Correct: Cross-sectional measures prevalence.",
                                           "chapter":  "ch10"
                                       },
                                       {
                                           "q":  "Major strength of cohort studies:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 10",
                                           "options":  [
                                                           "Cheap/quick",
                                                           "Clear temporal sequence",
                                                           "Proof of causation",
                                                           "Best for rare diseases"
                                                       ],
                                           "explain":  "Correct: Temporal clarity.",
                                           "chapter":  "ch10"
                                       },
                                       {
                                           "q":  "Study uses volunteers from a \u0027Healthy Lifestyle Club.\u0027 Bias?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 11",
                                           "options":  [
                                                           "Volunteers differ from general population",
                                                           "Sample too small",
                                                           "Uses surveys",
                                                           "Descriptive study"
                                                       ],
                                           "explain":  "Correct: Volunteers ? source population ? selection bias.",
                                           "chapter":  "ch11"
                                       },
                                       {
                                           "q":  "Non-differential misclassification usually:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 11",
                                           "options":  [
                                                           "Moves RR/OR toward 1",
                                                           "Moves RR/OR away from 1",
                                                           "Eliminates association",
                                                           "Reverses direction"
                                                       ],
                                           "explain":  "Correct: Dilutes association.",
                                           "chapter":  "ch11"
                                       },
                                       {
                                           "q":  "Random error example:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 11",
                                           "options":  [
                                                           "Small sample ? unstable estimates",
                                                           "Different recall",
                                                           "Selective recruitment",
                                                           "Confounding"
                                                       ],
                                           "explain":  "Correct: Instability = random error.",
                                           "chapter":  "ch11"
                                       },
                                       {
                                           "q":  "A rapid test correctly identifies 90 of 100 true cases. Sensitivity?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 12",
                                           "options":  [
                                                           "90%",
                                                           "10%",
                                                           "100%",
                                                           "Cannot determine"
                                                       ],
                                           "explain":  "Sensitivity = TP / (TP + FN) = 90%.",
                                           "chapter":  "ch12"
                                       },
                                       {
                                           "q":  "PPV answers:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 12",
                                           "options":  [
                                                           "Probability positive truly has disease",
                                                           "Probability negative has disease",
                                                           "Ability to detect disease",
                                                           "Avoid false positives"
                                                       ],
                                           "explain":  "PPV = P(disease | positive test).",
                                           "chapter":  "ch12"
                                       },
                                       {
                                           "q":  "TP=50, FP=10, FN=5, TN=35. Specificity?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 12",
                                           "options":  [
                                                           "35/(35+10)",
                                                           "35/(35+5)",
                                                           "50/60",
                                                           "50/55"
                                                       ],
                                           "explain":  "Specificity = TN/(TN+FP) = 35/45 = 78%.",
                                           "chapter":  "ch12"
                                       },
                                       {
                                           "q":  "Main purpose of screening:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 12",
                                           "options":  [
                                                           "Detect disease early",
                                                           "Prove causation",
                                                           "Replace diagnostics",
                                                           "Eliminate disease"
                                                       ],
                                           "explain":  "Screening = early detection.",
                                           "chapter":  "ch12"
                                       },
                                       {
                                           "q":  "Risk ratio comparing chicken eaters to non-eaters?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 13",
                                           "options":  [
                                                           "(9/30)/(2/20)",
                                                           "(2/20)/(9/30)",
                                                           "9/30",
                                                           "2/20"
                                                       ],
                                           "explain":  "RR = 0.30 / 0.10 = 3.0.",
                                           "chapter":  "ch13"
                                       },
                                       {
                                           "q":  "Odds ratio formula:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 13",
                                           "options":  [
                                                           "(a×d)/(b×c)",
                                                           "(a/c)/(b/d)",
                                                           "a+b+c+d",
                                                           "(a+b)/(c+d)"
                                                       ],
                                           "explain":  "OR = ad/bc.",
                                           "chapter":  "ch13"
                                       },
                                       {
                                           "q":  "Correct 2×2 layout:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 13",
                                           "options":  [
                                                           "Exposure on rows, outcome on columns",
                                                           "Outcome on rows, exposure on columns",
                                                           "Symptoms on rows",
                                                           "Invalid"
                                                       ],
                                           "explain":  "Standard orientation.",
                                           "chapter":  "ch13"
                                       }
                                   ],
                  "beginner":  [
                                   {
                                       "q":  "In an outbreak, exposed AR = 40%, unexposed AR = 20%. Risk ratio?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "2.0",
                                                       "0.5",
                                                       "20%",
                                                       "40%"
                                                   ],
                                       "explain":  "Correct: 40% ÷ 20% = 2. Trap: difference ? ratio.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "RR = 1.0 means:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "Harmful",
                                                       "No association",
                                                       "Protective",
                                                       "Causal"
                                                   ],
                                       "explain":  "Correct: Null association.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "Odds among exposed is:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "Sick/Total exposed",
                                                       "Sick/Not sick",
                                                       "Sick exposed/Sick unexposed",
                                                       "Exposed/Unexposed"
                                                   ],
                                       "explain":  "Correct: Odds = sick ÷ not sick.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "Which RR indicates strongest association?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "1.2",
                                                       "3.0",
                                                       "0.9",
                                                       "1.0"
                                                   ],
                                       "explain":  "Correct: Highest distance from 1.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "Which feature best identifies a propagated outbreak?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "Single tall peak",
                                                       "Sequential peaks separated by incubation periods",
                                                       "Flat line",
                                                       "Only meal-related cases"
                                                   ],
                                       "explain":  "Correct: B. Propagated = waves.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Which statement about epidemic curves is correct?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "They show exact cause",
                                                       "They show number of cases by onset time",
                                                       "They show incubation directly",
                                                       "They show exposure dose"
                                                   ],
                                       "explain":  "Correct: B.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Curves help determine all EXCEPT:",
                                       "answer":  3,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "Pattern of spread",
                                                       "Possible exposure period",
                                                       "Incubation distribution",
                                                       "Exact bacterial species"
                                                   ],
                                       "explain":  "Correct: D.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Which step comes FIRST in the outbreak investigation sequence?",
                                       "answer":  2,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Develop hypotheses",
                                                       "Define and identify cases",
                                                       "Prepare for field work",
                                                       "Implement control measures"
                                                   ],
                                       "explain":  "Correct: Prepare for field work precedes all other steps. Common error: students pick \u0027define cases\u0027 as #1.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Case finding typically involves:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Only hospitalized patients",
                                                       "Records, lab reports, provider contact",
                                                       "Testing whole community",
                                                       "Removing mild cases"
                                                   ],
                                       "explain":  "Correct: Broad capture across systems.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Case-control studies identify:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Treatment effectiveness",
                                                       "Exposures associated with illness",
                                                       "Symptoms with longest duration",
                                                       "Temperature changes"
                                                   ],
                                       "explain":  "Correct: Purpose = find associations.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Environmental investigation may include:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Interviewing teachers",
                                                       "Food prep observation, temperatures, storage",
                                                       "Textbook review",
                                                       "Student drawings"
                                                   ],
                                       "explain":  "Correct: Direct assessment of exposure environment.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Survey asks students, \u0027Do you currently vape?\u0027 Study design?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Cohort",
                                                       "Cross-sectional",
                                                       "Case-control",
                                                       "Randomized trial"
                                                   ],
                                       "explain":  "Correct: Cross-sectional snapshot.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Which is an RCT example?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Students choose vitamin C",
                                                       "Researchers randomly assign vitamin C",
                                                       "Interview after outbreak",
                                                       "Compare sick vs not sick"
                                                   ],
                                       "explain":  "Correct: Random assignment = RCT.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Case-control studies are best for:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Common diseases",
                                                       "Rare diseases",
                                                       "Experimental treatments",
                                                       "Determining incidence"
                                                   ],
                                       "explain":  "Correct: Efficient for rare outcomes.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "A case-control study asks sick and non-sick students to recall what they ate last week. Main bias?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Recall bias",
                                                       "Selection bias",
                                                       "Confounding",
                                                       "Random error"
                                                   ],
                                       "explain":  "Correct: Cases remember exposures differently ? recall bias.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Validity means:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Cheap",
                                                       "Measures what intended",
                                                       "Consistent",
                                                       "Cohort design"
                                                   ],
                                       "explain":  "Correct: Validity = accuracy.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Exercise ? better grades, but exercise linked to more sleep. Confounder?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Exercise",
                                                       "Sleep",
                                                       "Grades",
                                                       "None"
                                                   ],
                                       "explain":  "Correct: Sleep linked to both exposure and outcome.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Consistent but incorrect survey answers indicate:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "High validity",
                                                       "High reliability, low validity",
                                                       "Low reliability, high validity",
                                                       "Both high"
                                                   ],
                                       "explain":  "Correct: Consistent error.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "If specificity = 80%, false positive rate = ?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "20%",
                                                       "80%",
                                                       "10%",
                                                       "5%"
                                                   ],
                                       "explain":  "FPR = 1 - specificity = 20%.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "Increasing disease prevalence generally:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "Increases PPV",
                                                       "Decreases PPV",
                                                       "No effect",
                                                       "Increases sensitivity"
                                                   ],
                                       "explain":  "Higher prevalence = more true positives ? higher PPV.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "If a test labels many healthy students positive, problem is:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "Low sensitivity",
                                                       "Low specificity",
                                                       "Low NPV",
                                                       "High reliability"
                                                   ],
                                       "explain":  "Low specificity = high false positives.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "At a school picnic, 30 ate chicken (9 sick) and 20 did not eat chicken (2 sick). AR(exposed)?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "9/30",
                                                       "2/20",
                                                       "11/50",
                                                       "30/9"
                                                   ],
                                       "explain":  "Attack rate (exposed) = sick_exposed / total_exposed = 9/30 = 30%.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "Risk difference?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "20%",
                                                       "3.0",
                                                       "10%",
                                                       "40%"
                                                   ],
                                       "explain":  "RD = 30% - 10% = 20%.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "Vaccine effectiveness: vaccinated 2/50 sick, unvaccinated 10/50 sick.",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "1 - (2/50)/(10/50)",
                                                       "1 - (10/50)/(2/50)",
                                                       "(2/50) - (10/50)",
                                                       "2/50"
                                                   ],
                                       "explain":  "VE = 1 - (.04/.20) = 80%.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "Water park: exposed 40 (12 sick), unexposed 60 (6 sick). AR(exposed)?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "12/40",
                                                       "6/60",
                                                       "18/100",
                                                       "40/12"
                                                   ],
                                       "explain":  "AR(exposed) = 12/40 = 30%.",
                                       "chapter":  "ch13"
                                   }
                               ],
                  "advanced":  [
                                   {
                                       "q":  "A study finds RR = 3.0 for eating tuna salad. Interpretation?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "Tuna causes illness",
                                                       "3× the risk for eaters",
                                                       "3 more people got sick",
                                                       "No association"
                                                   ],
                                       "explain":  "Correct: RR shows association, not causation.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "2×2 table: 18/12 exposed; 4/16 unexposed. Risk ratio?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "(18/30)/(4/20)",
                                                       "(18/30)/(16/20)",
                                                       "(4/20)/(18/30)",
                                                       "Cannot compute"
                                                   ],
                                       "explain":  "Correct: Exposed AR = .6; unexposed AR = .2; RR = 3.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "RR = 0.25 for a vaccine means:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "Risk reduced 75%",
                                                       "Risk increased 4×",
                                                       "No effect",
                                                       "Eliminates all risk"
                                                   ],
                                       "explain":  "Correct: RR \u003c 1 = protective.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "Rate ratio: 40/5000 vs 10/5000. Rate ratio?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "(40/5000)/(10/5000)",
                                                       "40/10",
                                                       "10/40",
                                                       "Cannot compute"
                                                   ],
                                       "explain":  "Correct: Rate ratio = 4.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "2×2: 9/3 exposed; 6/12 unexposed. OR?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "(9×12)/(3×6)",
                                                       "(9×3)/(6×12)",
                                                       "(9×6)/(3×12)",
                                                       "Cannot compute"
                                                   ],
                                       "explain":  "Correct: OR = 6.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "RR = 4.0 and OR = 5.0 imply:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "Both show strong positive association",
                                                       "No association",
                                                       "Protective",
                                                       "Inconclusive"
                                                   ],
                                       "explain":  "Correct: Direction same.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "Exposed AR=0.50; unexposed AR=0.10. Excess cases per 100 exposed?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "40",
                                                       "50",
                                                       "10",
                                                       "90"
                                                   ],
                                       "explain":  "Correct: RD = .40 ? 40 per 100.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "Which statement is correct?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 7",
                                       "options":  [
                                                       "RR\u003e1 and RD\u003e0 indicate harmful association",
                                                       "RR\u003e1 and RD\u003c0 indicate harm",
                                                       "RR\u003c1 always harmful",
                                                       "RD=0 means strong association"
                                                   ],
                                       "explain":  "Correct: Direction alignment.",
                                       "chapter":  "ch7"
                                   },
                                   {
                                       "q":  "Cases rise over 10 days, plateau 10 days, drop when water filter repaired. Pattern?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "Continuous common source",
                                                       "Point source",
                                                       "Propagated",
                                                       "Mixed"
                                                   ],
                                       "explain":  "Correct: A. Long plateau + abrupt stop indicates continuous exposure.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Exposure at noon Friday. Onsets: 6 PM, 9 PM, midnight. Incubation range?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "6-12 hours",
                                                       "3-6 hours",
                                                       "12-24 hours",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Correct: A. Short incubation typical of toxin.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Slow rise, broad peak for weeks, slow decline. Pattern?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "Continuous common source",
                                                       "Point source",
                                                       "Mixed",
                                                       "Propagated"
                                                   ],
                                       "explain":  "Correct: A. Prolonged exposure produces broad curve.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Median onset = 36h; incubation = 24-72h. Approx exposure?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "36h before median onset",
                                                       "72h before onset",
                                                       "24h before onset",
                                                       "Cannot tell"
                                                   ],
                                       "explain":  "Correct: A.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Sharp initial peak (food event) + two peaks 4 days apart. Pattern?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "Mixed",
                                                       "Propagated",
                                                       "Point-source",
                                                       "Continuous"
                                                   ],
                                       "explain":  "Correct: A.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Exposure 8 AM. Onsets: 2 PM, 3 PM, 5 PM, 6 PM. Incubation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "6-10 hours",
                                                       "2-4 hours",
                                                       "8-12 hours",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Correct: A.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Wide onset window without peaks suggests:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "Variable exposure timing",
                                                       "Point-source",
                                                       "Propagated",
                                                       "Mixed"
                                                   ],
                                       "explain":  "Correct: A.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "Gradual rise, long plateau, sharp decline after well closure suggests:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 8",
                                       "options":  [
                                                       "Continuous common source",
                                                       "Point-source",
                                                       "Propagated",
                                                       "Mixed"
                                                   ],
                                       "explain":  "Correct: A.",
                                       "chapter":  "ch8"
                                   },
                                   {
                                       "q":  "A clinic reports \u0027more strep cases than usual.\u0027 What is the correct next action?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Interview all patients",
                                                       "Confirm outbreak by comparing to baseline",
                                                       "Skip confirmation and jump to control",
                                                       "Declare emergency"
                                                   ],
                                       "explain":  "Correct: Must confirm \u003e expected level before calling it an outbreak.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Best \u0027probable case\u0027 definition for E. coli outbreak?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Any abdominal pain",
                                                       "Bloody diarrhea + known exposure",
                                                       "Ate cafeteria food last week",
                                                       "Any student absent"
                                                   ],
                                       "explain":  "Correct: Probable = strong clinical + epi link; no lab required.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Essential columns of a line list include:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "ID, onset date, symptoms, exposure",
                                                       "Height, weight, BP",
                                                       "Parent names",
                                                       "Enrollment date"
                                                   ],
                                       "explain":  "Correct: Line lists summarize case data, not full medical records.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "A good outbreak hypothesis must include:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Agent, source, mode",
                                                       "Only incubation period",
                                                       "Only risk ratio",
                                                       "Only suspected food"
                                                   ],
                                       "explain":  "Correct: Minimum structure = agent + source + exposure + mode.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Case-control picnic outbreak: 22/30 cases ate potato salad vs 5/30 controls. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Strong association; likely source",
                                                       "Weak association",
                                                       "No association",
                                                       "Protective"
                                                   ],
                                       "explain":  "Correct: Large OR difference indicates strong association.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Closing a kitchen while investigating shows which principle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Control does not wait for complete proof",
                                                       "Control must wait for labs",
                                                       "Investigation finishes before intervention",
                                                       "Intervention optional"
                                                   ],
                                       "explain":  "Correct: Critical nuance tested often.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Several early stool samples negative but epi evidence strong. Correct interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Epi evidence may override early negative labs",
                                                       "Labs supersede epi",
                                                       "Hypothesis must be discarded",
                                                       "Outbreak is fake"
                                                   ],
                                       "explain":  "Correct: Strong epi can override early negative tests.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Final step in outbreak investigation is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 9",
                                       "options":  [
                                                       "Communicate findings",
                                                       "Implement control",
                                                       "Environmental sampling",
                                                       "Analyze curves"
                                                   ],
                                       "explain":  "Correct: Final = communicate/report findings.",
                                       "chapter":  "ch9"
                                   },
                                   {
                                       "q":  "Investigators select 20 sick (cases) and 40 not sick (controls) and look backward at food exposures. Design?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Case-control",
                                                       "Cohort",
                                                       "Cross-sectional",
                                                       "Randomized trial"
                                                   ],
                                       "explain":  "Correct: Case-control starts with outcome.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Which study can directly calculate risk ratios?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Cohort",
                                                       "Case-control",
                                                       "Cross-sectional",
                                                       "None"
                                                   ],
                                       "explain":  "Correct: Only cohorts produce incidence.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Campers tracked 7 days with multiple exposure data. Design?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Prospective cohort",
                                                       "Case-control",
                                                       "Cross-sectional",
                                                       "Randomized trial"
                                                   ],
                                       "explain":  "Correct: Prospective follow-up = cohort.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Study starts with disease status and looks back at exposures. Direction?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Backward",
                                                       "Forward",
                                                       "Simultaneous",
                                                       "Neither"
                                                   ],
                                       "explain":  "Correct: Case-control direction.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Which pairing is correct?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Cohort ? incidence ? risk ratio",
                                                       "Case-control ? incidence ? risk ratio",
                                                       "Cross-sectional ? incidence rate ? OR",
                                                       "RCT ? cannot estimate effect"
                                                   ],
                                       "explain":  "Correct: Cohort can compute incidence and RR.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Case-control diet recall most vulnerable to:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Recall bias",
                                                       "Loss to follow-up",
                                                       "Randomization failure",
                                                       "Incidence misclassification"
                                                   ],
                                       "explain":  "Correct: Memory-dependent.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Retrospective cohort differs from case-control because:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Defined by exposure",
                                                       "Defined by disease",
                                                       "Uses OR only",
                                                       "One time point only"
                                                   ],
                                       "explain":  "Correct: Exposure groups define cohort.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "OR approximates RR when:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 10",
                                       "options":  [
                                                       "Disease is rare",
                                                       "Disease common",
                                                       "Study prospective",
                                                       "Incidence high"
                                                   ],
                                       "explain":  "Correct: Rare disease assumption.",
                                       "chapter":  "ch10"
                                   },
                                   {
                                       "q":  "Cases exaggerate eating a suspected food. Effect on association?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Biases OR upward",
                                                       "Biases OR downward",
                                                       "No change",
                                                       "OR becomes 1"
                                                   ],
                                       "explain":  "Correct: Differential recall inflates association.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Energy drink study: irritability actually driven by sleep. Sleep is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Confounder",
                                                       "Bias",
                                                       "Outcome",
                                                       "Random error"
                                                   ],
                                       "explain":  "Correct: Confounder associated with both exposure and outcome.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Thermometer always 2° too high. It is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Reliable but not valid",
                                                       "Valid but not reliable",
                                                       "Both",
                                                       "Neither"
                                                   ],
                                       "explain":  "Correct: Consistent error = reliable, not valid.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Differential misclassification means:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Misclassification differs by group",
                                                       "Equal misclassification",
                                                       "Only controls misclassify",
                                                       "Only cases misclassify"
                                                   ],
                                       "explain":  "Correct: Unequal error can bias any direction.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Which reduces confounding?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Stratification",
                                                       "Increasing sample size",
                                                       "Random misclassification",
                                                       "Change recall period"
                                                   ],
                                       "explain":  "Correct: Stratification adjusts for confounders.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Sick students more likely to respond ? measured prevalence is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Overestimated",
                                                       "Underestimated",
                                                       "Unbiased",
                                                       "More reliable"
                                                   ],
                                       "explain":  "Correct: Differential response inflates prevalence.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Confounder positively associated with exposure and outcome biases association:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Upward",
                                                       "Downward",
                                                       "To 1",
                                                       "Reversal"
                                                   ],
                                       "explain":  "Correct: Strengthens false association.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "Which reduces recall bias?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 11",
                                       "options":  [
                                                       "Use records instead of self-report",
                                                       "Increase sample size",
                                                       "More questions",
                                                       "Short surveys"
                                                   ],
                                       "explain":  "Correct: Objective data removes memory error.",
                                       "chapter":  "ch11"
                                   },
                                   {
                                       "q":  "A test correctly identifies 360 of 400 healthy students as negative. Specificity?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "360/400",
                                                       "40/400",
                                                       "400/360",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Specificity = TN / (TN + FP) = 90%.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "A test has sensitivity of 70%. False negative rate?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "30%",
                                                       "70%",
                                                       "Cannot determine",
                                                       "100%"
                                                   ],
                                       "explain":  "FNR = 1 - sensitivity = 30%.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "NPV indicates:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "Probability negative test is truly negative",
                                                       "Probability positive is true",
                                                       "Sensitivity",
                                                       "Specificity"
                                                   ],
                                       "explain":  "NPV = P(no disease | negative test).",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "Increasing disease prevalence will:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "Decrease NPV",
                                                       "Increase NPV",
                                                       "No effect",
                                                       "Increase specificity"
                                                   ],
                                       "explain":  "More disease = fewer true negatives ? lower NPV.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "TP=50, FN=5. Sensitivity?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "50/(50+5)",
                                                       "35/(35+10)",
                                                       "10/(50+35)",
                                                       "Cannot compute"
                                                   ],
                                       "explain":  "Sensitivity = TP/(TP+FN) = 91%.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "PPV for TP=50, FP=10?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "50/(50+10)",
                                                       "35/(35+10)",
                                                       "50/(50+35)",
                                                       "60/(50+35)"
                                                   ],
                                       "explain":  "PPV = TP/(TP+FP) = 83%.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "Lowering cutoff value generally:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "Increases sensitivity, decreases specificity",
                                                       "Decreases sensitivity, increases specificity",
                                                       "Increases both",
                                                       "Decreases both"
                                                   ],
                                       "explain":  "Lower cutoff ? more positives ? higher sensitivity.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "Test gives consistent but incorrect results. Means:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 12",
                                       "options":  [
                                                       "High reliability, low validity",
                                                       "Low reliability, high validity",
                                                       "Both high",
                                                       "Both low"
                                                   ],
                                       "explain":  "Consistent error = reliable but invalid.",
                                       "chapter":  "ch12"
                                   },
                                   {
                                       "q":  "Using same data: AR(unexposed)?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "2/20",
                                                       "9/30",
                                                       "11/50",
                                                       "20/2"
                                                   ],
                                       "explain":  "Unexposed attack rate = 2/20 = 10%.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "RR = 3.0 means:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "Exposure triples risk",
                                                       "Exposure prevents illness",
                                                       "No association",
                                                       "Protective"
                                                   ],
                                       "explain":  "RR \u003e 1 = harmful.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "AR% with RR = 3.0? (AR% = (RR-1)/RR ×100)",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "67%",
                                                       "200%",
                                                       "33%",
                                                       "3%"
                                                   ],
                                       "explain":  "AR% = (3-1)/3 = 67%.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "Compute OR: 12/8 exposed, 3/27 unexposed.",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "(12×27)/(8×3)",
                                                       "(12×3)/(8×27)",
                                                       "(12/20)/(3/30)",
                                                       "Cannot compute"
                                                   ],
                                       "explain":  "OR = 108/24 = 4.5.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "Interpretation trap: \u0027VE=80% means zero risk.\u0027 Correct response?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "VE reduces risk 80%, not to zero",
                                                       "Eliminates disease",
                                                       "Same risk",
                                                       "80% get sick"
                                                   ],
                                       "explain":  "VE ? zero risk.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "RR = 0.25 and OR = 0.20 ? exposure is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "Strongly protective",
                                                       "Strongly harmful",
                                                       "Neutral",
                                                       "Uninterpretable"
                                                   ],
                                       "explain":  "Ratios \u003c 1 = protective.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "RR for water park data?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "(12/40)/(6/60)",
                                                       "(6/60)/(12/40)",
                                                       "12/60",
                                                       "40/12"
                                                   ],
                                       "explain":  "RR = 0.30 / 0.10 = 3.0.",
                                       "chapter":  "ch13"
                                   },
                                   {
                                       "q":  "RR=3.0, OR=4.0, RD=20% - which is true?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 13",
                                       "options":  [
                                                       "All indicate harmful association",
                                                       "All protective",
                                                       "Only OR harmful",
                                                       "None harmful"
                                                   ],
                                       "explain":  "RR\u003e1, OR\u003e1, RD\u003e0 all show harm.",
                                       "chapter":  "ch13"
                                   }
                               ]
              },
    "part1":  {
                  "intermediate":  [
                                       {
                                           "q":  "In a town of 100 people, 5 new cases of flu occur in January. The Incidence Rate is:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "5%",
                                                           "95%",
                                                           "100%",
                                                           "0.05%"
                                                       ],
                                           "explain":  "Correct: Incidence = New Cases / Population at Risk (5/100 = 5%).",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "Which measure includes both new and existing cases?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "Incidence",
                                                           "Prevalence",
                                                           "Attack Rate",
                                                           "Mortality Rate"
                                                       ],
                                           "explain":  "Correct: Prevalence counts everyone who currently has the disease.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "If a disease has a long duration (chronic) but low incidence, Prevalence will be:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "High",
                                                           "Low",
                                                           "Zero",
                                                           "Negative"
                                                       ],
                                           "explain":  "Correct: P ≈ I × D. Long Duration increases Prevalence.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "In the Bathtub Analogy, what represents Incidence?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "Water flowing from the faucet",
                                                           "Water in the tub",
                                                           "Water draining out",
                                                           "Evaporation"
                                                       ],
                                           "explain":  "Correct: New water entering = New cases (Incidence).",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "10 people get sick. 2 of them die. The Case Fatality Rate is:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "20%",
                                                           "2%",
                                                           "10%",
                                                           "50%"
                                                       ],
                                           "explain":  "Correct: CFR = Deaths / Cases = 2/10 = 20%.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "Attack Rate is technically a type of:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "Incidence Proportion",
                                                           "Prevalence",
                                                           "Mortality Rate",
                                                           "Odds Ratio"
                                                       ],
                                           "explain":  "Correct: It measures new cases in a specific outbreak period.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "Which is best for determining the \u0027burden\u0027 of disease for resource planning?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "Incidence",
                                                           "Prevalence",
                                                           "Case Fatality",
                                                           "Risk Ratio"
                                                       ],
                                           "explain":  "Correct: Prevalence shows how many people need care right now.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "Which is best for identifying the Cause (Etiology) of a disease?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "Incidence",
                                                           "Prevalence",
                                                           "Mortality",
                                                           "Count"
                                                       ],
                                           "explain":  "Correct: Incidence tracks new cases, linking them directly to recent exposures.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "Which question is MOST clearly a question for descriptive epidemiology?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 1",
                                           "options":  [
                                                           "Do students who eat salad have a higher risk of food poisoning than those who do not?",
                                                           "What is the attack rate of vomiting among students who ate lunch in the cafeteria on Monday?",
                                                           "Does drinking unpasteurized milk cause more Salmonella infections?",
                                                           "Is there an association between pet ownership and asthma?"
                                                       ],
                                           "explain":  "Correct (B): Descriptive epidemiology describes the amount and pattern of disease in terms of person, place, and time without testing a cause. Calculating an attack rate in a defined group on a specific day is describing distribution.\r\nA, C, D: All compare exposed vs unexposed groups and ask if an exposure changes risk ? analytic epidemiology.\r\nExam frequency: High.\r\nExam tip: If there is a comparison of two groups (exposed vs not), it is almost always analytic, not descriptive.",
                                           "chapter":  "ch1"
                                       },
                                       {
                                           "q":  "Which situation BEST shows epidemiologists focusing on populations rather than individuals?",
                                           "answer":  2,
                                           "type":  "mc",
                                           "topic":  "Chapter 1",
                                           "options":  [
                                                           "A doctor adjusting the medication dose for one child with asthma.",
                                                           "A nurse teaching one patient how to use an inhaler correctly.",
                                                           "A team studying asthma rates in different neighborhoods of a city.",
                                                           "A pharmacist checking drug interactions for a single prescription."
                                                       ],
                                           "explain":  "Correct (C): Comparing asthma rates between neighborhoods is a population-level question ? classic epidemiology.\r\nA, B, D: All focus on individual patient care (clinical medicine, nursing, pharmacy).\r\nExam frequency: Medium.\r\nExam tip: Population comparisons or rates across groups almost always point to epidemiology.",
                                           "chapter":  "ch1"
                                       },
                                       {
                                           "q":  "Which of the following is LEAST likely to be considered a \"health-related state or event\" in epidemiology?",
                                           "answer":  3,
                                           "type":  "mc",
                                           "topic":  "Chapter 1",
                                           "options":  [
                                                           "Injuries from car crashes.",
                                                           "Asthma attacks in schoolchildren.",
                                                           "Use of seatbelts among drivers.",
                                                           "Favorite ice cream flavors among students."
                                                       ],
                                           "explain":  "Correct (D): Favorite ice cream flavor is not directly health-related. It could be studied, but it is not a typical outcome in Disease Detectives.\r\nA, B, C: Injuries, asthma, and safety behaviors are all common health-related states/events.\r\nExam frequency: Low-medium (but easy points).\r\nExam tip: Health-related includes diseases, injuries, behaviors, and even positive states like wellness-but not random preferences.",
                                           "chapter":  "ch1"
                                       },
                                       {
                                           "q":  "What is the BEST definition of the incubation period?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 2",
                                           "options":  [
                                                           "Time from infection until a person becomes infectious.",
                                                           "Time between exposure and onset of symptoms.",
                                                           "Time from symptoms to recovery.",
                                                           "Time between recovery and reinfection."
                                                       ],
                                           "explain":  "Correct (B): Classic definition - exposure ? symptoms.\r\nA: Infectiousness timing = latent period.\r\nC/D: Irrelevant to incubation.",
                                           "chapter":  "ch2"
                                       },
                                       {
                                           "q":  "Which sequence is correct?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 2",
                                           "options":  [
                                                           "Susceptibility ? clinical ? recovery",
                                                           "Exposure ? incubation ? symptoms ? outcome",
                                                           "Outcome ? incubation",
                                                           "Clinical ? exposure"
                                                       ],
                                           "explain":  "Correct (B): Classic natural history timeline.",
                                           "chapter":  "ch2"
                                       },
                                       {
                                           "q":  "Wearing a bike helmet is:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 2",
                                           "options":  [
                                                           "Primary prevention",
                                                           "Secondary",
                                                           "Tertiary",
                                                           "Quaternary"
                                                       ],
                                           "explain":  "Correct (A): Prevent injury before occurrence.",
                                           "chapter":  "ch2"
                                       },
                                       {
                                           "q":  "Primary prevention is MOST effective:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 2",
                                           "options":  [
                                                           "After symptoms",
                                                           "Before exposure",
                                                           "During subclinical",
                                                           "After recovery"
                                                       ],
                                           "explain":  "Correct (B): Prevent before exposure.",
                                           "chapter":  "ch2"
                                       },
                                       {
                                           "q":  "A measles case enters a school where 97% of students are vaccinated. Which host factor matters most?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 3",
                                           "options":  [
                                                           "Age",
                                                           "Immunity",
                                                           "Nutrition",
                                                           "Genetics"
                                                       ],
                                           "explain":  "Correct (B): Host immunity is the critical factor.",
                                           "chapter":  "ch3"
                                       },
                                       {
                                           "q":  "Lead poisoning in children is caused by:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 3",
                                           "options":  [
                                                           "Infectious agent",
                                                           "Chemical agent",
                                                           "Biological vector",
                                                           "Physical environment"
                                                       ],
                                           "explain":  "Correct (B). Chemical toxins = agents.",
                                           "chapter":  "ch3"
                                       },
                                       {
                                           "q":  "Primary reservoir for rabies in much of the U.S.?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 3",
                                           "options":  [
                                                           "Mosquitoes",
                                                           "Bats",
                                                           "Dirty water",
                                                           "Humans"
                                                       ],
                                           "explain":  "Correct (B).",
                                           "chapter":  "ch3"
                                       },
                                       {
                                           "q":  "A student gets pinkeye after touching their eye immediately after handling a shared pencil used by an infected classmate. What is the mode of transmission?",
                                           "answer":  2,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "Droplet",
                                                           "Airborne",
                                                           "Indirect contact (fomite)",
                                                           "Vehicle-borne"
                                                       ],
                                           "explain":  "Correct: Indirect contact via fomite. Trap: Students confuse shared objects with droplets.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "Which is vehicle-borne, not fomite?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "Salmonella from chicken salad",
                                                           "MRSA from shoulder pads",
                                                           "Pinkeye from makeup brush",
                                                           "Impetigo from mats"
                                                       ],
                                           "explain":  "Correct: Food/water are vehicles.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "Poor ventilation + coughing ? influenza in nearby students. Mode?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 4",
                                           "options":  [
                                                           "Airborne",
                                                           "Droplet",
                                                           "Indirect contact",
                                                           "Vehicle"
                                                       ],
                                           "explain":  "Correct: Droplet. Ventilation is environment, not a mode.",
                                           "chapter":  "ch4"
                                       },
                                       {
                                           "q":  "Why is surveillance necessary?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 5",
                                           "options":  [
                                                           "To treat patients effectively",
                                                           "To monitor trends, detect outbreaks, and guide control measures",
                                                           "To inspect hospitals",
                                                           "To determine exact causes of every disease"
                                                       ],
                                           "explain":  "Correct: B. Core surveillance function.",
                                           "chapter":  "ch5"
                                       },
                                       {
                                           "q":  "Which is TRUE about reportable diseases?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 5",
                                           "options":  [
                                                           "All diseases are reportable",
                                                           "States determine which diseases must be reported",
                                                           "Federal government mandates one list",
                                                           "Only infectious diseases are reportable"
                                                       ],
                                           "explain":  "Correct: B. States define lists.",
                                           "chapter":  "ch5"
                                       },
                                       {
                                           "q":  "EHR systems automatically sending reportable cases is:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 5",
                                           "options":  [
                                                           "Active surveillance",
                                                           "Passive-enhanced (automated)",
                                                           "Sentinel",
                                                           "Syndromic"
                                                       ],
                                           "explain":  "Correct: B. Automated ? active.",
                                           "chapter":  "ch5"
                                       },
                                       {
                                           "q":  "On January 1, a school of 400 students has 20 currently sick with flu. What is the prevalence?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 6",
                                           "options":  [
                                                           "20/400",
                                                           "20/380",
                                                           "400/20",
                                                           "Cannot calculate"
                                                       ],
                                           "explain":  "Correct: Prevalence = existing cases / total population.",
                                           "chapter":  "ch6"
                                       },
                                       {
                                           "q":  "Why can prevalence increase even if incidence stays constant?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 6",
                                           "options":  [
                                                           "Recovery rate increases",
                                                           "Disease duration increases",
                                                           "Population decreases",
                                                           "More exposures occur"
                                                       ],
                                           "explain":  "Correct: Longer duration inflates prevalence.",
                                           "chapter":  "ch6"
                                       },
                                       {
                                           "q":  "Incidence of 10 per 100 per year means:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 6",
                                           "options":  [
                                                           "Every student will get disease",
                                                           "10 new cases per 100 students yearly",
                                                           "10 sick at all times",
                                                           "10% sick forever"
                                                       ],
                                           "explain":  "Correct: Rate of new cases.",
                                           "chapter":  "ch6"
                                       },
                                       {
                                           "q":  "Which measure most influenced by chronic disease duration?",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 6",
                                           "options":  [
                                                           "Incidence",
                                                           "Prevalence",
                                                           "Risk ratio",
                                                           "Attack rate"
                                                       ],
                                           "explain":  "Correct: Longer duration raises prevalence.",
                                           "chapter":  "ch6"
                                       }
                                   ],
                  "beginner":  [
                                   {
                                       "q":  "Which surveillance type involves the Health Department actively calling hospital staff to find new cases?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Passive Surveillance",
                                                       "Active Surveillance",
                                                       "Syndromic Surveillance",
                                                       "Sentinel Surveillance"
                                                   ],
                                       "explain":  "Correct: Active surveillance involves health agencies reaching out to providers.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "The time interval between exposure to an infectious agent and the first appearance of symptoms is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "Incubation Period",
                                                       "Latency Period",
                                                       "Communicable Period",
                                                       "Generation Time"
                                                   ],
                                       "explain":  "Correct: Incubation is Exposure -\u003e Symptoms.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "In the Chain of Infection, a doorknob contaminated with flu virus is an example of:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Vector",
                                                       "Vehicle (Fomite)",
                                                       "Reservoir",
                                                       "Portal of Exit"
                                                   ],
                                       "explain":  "Correct: Fomites are inanimate vehicles.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "What is the BEST definition of epidemiology?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "The study of how doctors treat sick patients in hospitals.",
                                                       "The study of the distribution and determinants of health-related states or events in specific populations, and the application of this study to control health problems.",
                                                       "The study of germs and how they cause disease in a laboratory.",
                                                       "The study of human anatomy and physiology."
                                                   ],
                                       "explain":  "Correct (B): This is the classic textbook/CDC definition and contains all key parts: distribution (who/where/when), determinants (why/how), populations (not individuals), and application (using findings to control problems).\r\nA: Focuses on treating individual patients ? clinical medicine, not epidemiology.\r\nC: Focuses on germs in a lab ? microbiology, only a slice of epidemiology.\r\nD: Anatomy and physiology are basic sciences about body structure and function, not population patterns.\r\nExam frequency: Very high. This definition is almost guaranteed somewhere.\r\nExam tip: Look for the combination of distribution + determinants + populations + control.",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "In epidemiology, \"distribution\" mainly refers to:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "How germs spread inside one person.",
                                                       "Who is getting the disease, where, and when.",
                                                       "How doctors distribute medicines.",
                                                       "How many germs are in a single droplet."
                                                   ],
                                       "explain":  "Correct (B): Distribution = patterns of disease by person (age, sex, etc.), place (where), and time (when).\r\nA: Within-one-person spread is pathophysiology, not population distribution.\r\nC: That is pharmacy/clinical logistics.\r\nD: Lab measurement, not population distribution.\r\nExam frequency: Medium-high.\r\nExam tip: Whenever you see person/place/time ? think distribution.",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "Which of the following is a typical USE of epidemiology?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "Choosing the best treatment for a specific patient.",
                                                       "Finding out whether a new vaccine reduces the risk of disease in a population.",
                                                       "Designing the blueprint for a new hospital building.",
                                                       "Learning the names of all bacteria that cause disease."
                                                   ],
                                       "explain":  "Correct (B): Evaluating whether a vaccine reduces disease risk in a population is a core use of epidemiology.\r\nA: Individual treatment choice is clinical medicine.\r\nC: Building design is architecture/engineering, not epidemiology.\r\nD: Listing bacteria is microbiology.\r\nExam frequency: Medium.\r\nExam tip: Uses of epi often involve evaluating interventions, describing patterns, or identifying risk factors.",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "Which pair correctly matches the field with its MAIN focus?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "Clinical medicine - patterns in populations",
                                                       "Epidemiology - patterns and causes in populations",
                                                       "Microbiology - choosing public health policies",
                                                       "Pathology - designing community intervention programs"
                                                   ],
                                       "explain":  "Correct (B): Epidemiology focuses on distribution and determinants of health events in populations.\r\nA: Clinical medicine focuses on diagnosis and treatment of individuals.\r\nC: Microbiology studies organisms (bacteria, viruses), not policies.\r\nD: Pathology studies disease mechanisms in tissues, not community programs.\r\nExam frequency: Medium.\r\nExam tip: Always separate \"individual vs population\" in these comparisons.",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "A child infected with hepatitis A has no symptoms but spreads infection. This is:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "Incubation",
                                                       "Subclinical",
                                                       "Latent",
                                                       "Carrier only"
                                                   ],
                                       "explain":  "Correct (B): Subclinical = infected + asymptomatic + may transmit.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "A mild symptomatic COVID infection represents:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "Preclinical",
                                                       "Clinical (mild)",
                                                       "Subclinical",
                                                       "Carrier"
                                                   ],
                                       "explain":  "Correct (B): Symptoms ? clinical disease.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "Return to full health is:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "Exposure window",
                                                       "Recovery/convalescence",
                                                       "Latent",
                                                       "Susceptible"
                                                   ],
                                       "explain":  "Correct (B).",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "A farmer develops leptospirosis after swimming in a pond contaminated by animal urine. What triad element is the pond?",
                                       "answer":  2,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Host",
                                                       "Agent",
                                                       "Environment",
                                                       "Vector"
                                                   ],
                                       "explain":  "Correct (C): The pond represents the environment. Trap: Water is not a vector.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Which is the correct infection chain order?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Portal entry ? portal exit ? reservoir",
                                                       "Reservoir ? portal exit ? mode ? portal entry ? host",
                                                       "Host ? agent ? environment",
                                                       "Environment ? host ? agent ? vector"
                                                   ],
                                       "explain":  "Correct (B): Canonical chain sequence.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Which is an environmental factor?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Bacteria on a cutting board",
                                                       "Overcrowded dormitory",
                                                       "Shared pencil",
                                                       "Sneezing"
                                                   ],
                                       "explain":  "Correct (B): Overcrowding = environment; cutting board = fomite.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Vomiting in norovirus acts as a:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Mode",
                                                       "Portal of exit",
                                                       "Reservoir",
                                                       "Portal of entry"
                                                   ],
                                       "explain":  "Correct (B): Vomiting enables exit; droplets = later mode.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Campers develop fever after tick bites. What is the mode?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 4",
                                       "options":  [
                                                       "Vehicle-borne",
                                                       "Vector-borne",
                                                       "Droplet",
                                                       "Airborne"
                                                   ],
                                       "explain":  "Correct: Vector-borne.",
                                       "chapter":  "ch4"
                                   },
                                   {
                                       "q":  "Ringworm after wrestling (skin-to-skin). What is the mode?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 4",
                                       "options":  [
                                                       "Indirect",
                                                       "Direct",
                                                       "Droplet",
                                                       "Airborne"
                                                   ],
                                       "explain":  "Correct: Direct contact.",
                                       "chapter":  "ch4"
                                   },
                                   {
                                       "q":  "Public health surveillance is best defined as:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Tracking individual patients in hospitals",
                                                       "Continuous, systematic collection, analysis, and interpretation of health data",
                                                       "A one-time survey of disease rates",
                                                       "Lab testing of bacteria and viruses"
                                                   ],
                                       "explain":  "Correct: B. Requires continuous, systematic collection + analysis + interpretation + dissemination.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "Reporting fever + cough before confirmation is:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Passive",
                                                       "Syndromic",
                                                       "Sentinel",
                                                       "Active"
                                                   ],
                                       "explain":  "Correct: B. Uses symptom clusters.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "A spike in ER vomiting visits most clearly shows:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Passive surveillance failure",
                                                       "Potential outbreak signal",
                                                       "Better lab reporting",
                                                       "Data error"
                                                   ],
                                       "explain":  "Correct: B. Surveillance detects anomalies.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "Surveillance differs from outbreak investigation because surveillance is:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "One-time and targeted",
                                                       "Ongoing and population-based",
                                                       "Only used during outbreaks",
                                                       "Focused on lab confirmation"
                                                   ],
                                       "explain":  "Correct: B. Ongoing system vs focused investigation.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "A survey asks, \"Do you currently have asthma symptoms?\" This measures:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "Period prevalence",
                                                       "Point prevalence",
                                                       "Incidence",
                                                       "Attack rate"
                                                   ],
                                       "explain":  "Correct: \u0027Currently\u0027 = point prevalence.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "Which situation uses attack rate correctly?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "Diabetes diagnoses yearly",
                                                       "Illness in defined group during outbreak",
                                                       "Lifetime cancer risk",
                                                       "Injuries per 10k"
                                                   ],
                                       "explain":  "Correct: Outbreak measure.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "Which describes incidence rate, not proportion?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "10 new cases per 100",
                                                       "2 cases per 100 person-years",
                                                       "5 new cases per semester",
                                                       "25% sick"
                                                   ],
                                       "explain":  "Correct: Rate must include time.",
                                       "chapter":  "ch6"
                                   }
                               ],
                  "advanced":  [
                                   {
                                       "q":  "Which of the following BEST represents a \"determinant\" in epidemiology?",
                                       "answer":  2,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "Weekly number of new COVID-19 cases in a county.",
                                                       "The age distribution of all residents in a city.",
                                                       "Exposure to contaminated well water used for drinking.",
                                                       "The shape of the epidemic curve for a measles outbreak."
                                                   ],
                                       "explain":  "Correct (C): A determinant is any factor that increases or decreases the risk of a health event. Contaminated well water is a clear exposure that can cause disease.\r\nA: Number of new cases = measure of frequency, not a determinant.\r\nB: Age distribution is a person characteristic used to describe distribution; it can modify risk but by itself is not a specific exposure.\r\nD: Epidemic curve shape is a descriptive visualization of time pattern, not a determinant.\r\nExam frequency: Medium.\r\nExam tip: Determinants are about WHY or WHAT CAUSES disease (risk factors, exposures).",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "Which question BEST fits the PUBLIC HEALTH APPROACH sequence (problem ? cause ? strategy ? action)?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "How many students are in the school band?",
                                                       "How can we reduce asthma attacks among students living near a busy road by changing traffic or air quality?",
                                                       "What is the scientific name of the bacteria that cause strep throat?",
                                                       "Which brand of cough syrup works fastest in one specific patient?"
                                                   ],
                                       "explain":  "Correct (B): This asks about reducing asthma (problem), links to air pollution (cause), and considers strategies (changing traffic/air quality) ? full public health approach.\r\nA: Pure counting; not about a health problem.\r\nC: Microbiology, not full public health approach.\r\nD: Individual treatment decision, not population-level strategy.\r\nExam frequency: Medium.\r\nExam tip: The public health approach always includes both understanding causes AND applying a control strategy.",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "A study measures how many students in each grade have had chickenpox and maps the rates by classroom. Which TWO main tasks of epidemiology does this MOST directly represent?",
                                       "answer":  3,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "Distribution and clinical treatment",
                                                       "Determinants and anatomy",
                                                       "Distribution and application to control",
                                                       "Distribution only"
                                                   ],
                                       "explain":  "Correct (D): This study only describes who has had chickenpox and where (grades/classrooms). It does not test causes or apply control.\r\nA: No treatment is mentioned.\r\nB: Anatomy is irrelevant.\r\nC: No control strategy is being applied-only measurement.\r\nExam frequency: Medium.\r\nExam tip: Many questions try to trick you into thinking any epidemiology work automatically applies control-look for actual interventions.",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "Which of these research questions is MOST clearly analytic epidemiology?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "What is the average age of students who got flu this semester?",
                                                       "Did students who attended the winter dance have a higher risk of flu than those who did not attend?",
                                                       "During which month did most flu cases occur?",
                                                       "In which grade were the most flu cases reported?"
                                                   ],
                                       "explain":  "Correct (B): It compares risk between exposed (dance) and unexposed groups, testing a causal hypothesis.\r\nA, C, D: All describe who/where/when (descriptive), with no comparison of exposure vs non-exposure.\r\nExam frequency: Very high.\r\nExam tip: Analytic = presence of a clear comparison group and a cause-effect question.",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "Which statement about the relationship between epidemiology and public health is MOST accurate?",
                                       "answer":  2,
                                       "type":  "mc",
                                       "topic":  "Chapter 1",
                                       "options":  [
                                                       "Epidemiology is only used after public health actions are finished.",
                                                       "Public health decisions are made without using epidemiologic data.",
                                                       "Epidemiology provides data and evidence that guide public health decisions and policies.",
                                                       "Epidemiology focuses only on lab testing and does not affect real-world actions."
                                                   ],
                                       "explain":  "Correct (C): Epidemiology supplies the evidence base (data on who/where/when/why) that public health officials use to plan and evaluate interventions.\r\nA: Wrong order-epi is used before, during, and after actions.\r\nB: False; decisions that ignore data are poor public health.\r\nD: Lab work is one tool, but epidemiology is directly connected to real-world control.\r\nExam frequency: Medium.\r\nExam tip: When in doubt, link epidemiology ? evidence; public health ? action.",
                                       "chapter":  "ch1"
                                   },
                                   {
                                       "q":  "A point-source outbreak occurred at noon May 10. Onsets on May 11, 12, 13. What is the incubation period range?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "12-48 hours",
                                                       "24-72 hours",
                                                       "48-96 hours",
                                                       "Cannot be estimated"
                                                   ],
                                       "explain":  "Correct (B): 24h ? 72h window.\r\nTrap: Students erroneously add full calendar days.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "Screening detects scoliosis in which stage?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "Preclinical",
                                                       "Clinical",
                                                       "Susceptible",
                                                       "Recovery"
                                                   ],
                                       "explain":  "Correct (A): Screening targets disease before symptoms.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "Which describes the latent period?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "Time from infection until infectious",
                                                       "Time from infection to symptoms",
                                                       "Time from symptoms to recovery",
                                                       "Time after recovery"
                                                   ],
                                       "explain":  "Correct (A): Latent ? incubation.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "Food served 1 PM; onsets 4 PM, 7 PM, 10 PM ? incubation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "3-9 hours",
                                                       "1-2 hours",
                                                       "6-12 hours",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Correct (A): Consistent with short-incubation toxins.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "Which pairing is correct?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "Susceptibility - before exposure",
                                                       "Exposure - recovery",
                                                       "Preclinical - symptom onset",
                                                       "Clinical - asymptomatic"
                                                   ],
                                       "explain":  "Correct (A).",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "Detecting lead exposure before symptoms =",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "Secondary prevention",
                                                       "Tertiary",
                                                       "Treatment",
                                                       "None"
                                                   ],
                                       "explain":  "Correct (A): Screening = secondary.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "Chemical exposure Mon 2 PM; onsets Tues 10 AM, Tues 1 PM, Wed 8 AM. Incubation window?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "20-42 hours",
                                                       "10-24 hours",
                                                       "5-12 hours",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Correct (A): Earliest 20h; latest 42h.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "Various severities + asymptomatic cases describes:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 2",
                                       "options":  [
                                                       "Spectrum of disease",
                                                       "Epicurve",
                                                       "Natural timeline",
                                                       "Sensitivity"
                                                   ],
                                       "explain":  "Correct (A): Full severity range = spectrum.",
                                       "chapter":  "ch2"
                                   },
                                   {
                                       "q":  "A cafeteria stops an outbreak by requiring handwashing before food prep. Which chain link was broken?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Reservoir",
                                                       "Portal of exit",
                                                       "Mode of transmission",
                                                       "Portal of entry"
                                                   ],
                                       "explain":  "Correct (B): Prevents the agent from leaving the infected worker. Trap: Students pick mode incorrectly.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Lead contamination affects children in an old apartment building. Lead represents the:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Agent",
                                                       "Host",
                                                       "Environment",
                                                       "Vector"
                                                   ],
                                       "explain":  "Correct (A): Chemical exposures count as agents. Trap: Students think only microbes qualify.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Campylobacter cases occur only among campers who handled raw chicken and didn\u0027t wash hands. Which links are involved?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Reservoir + portal of entry",
                                                       "Portal exit + vector",
                                                       "Mode + host",
                                                       "Environment + vector"
                                                   ],
                                       "explain":  "Correct (A): Raw chicken = reservoir; ingestion = portal of entry.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Coronavirus outbreak: cough droplets contaminate surfaces ? students touch ? infection. Mode?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Droplet + indirect contact",
                                                       "Airborne",
                                                       "Vehicle",
                                                       "Direct contact"
                                                   ],
                                       "explain":  "Correct (A): Mixed droplet + fomite pathway. Trap: Not airborne.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Warm winter causes rodent reservoirs to increase. Which triad element changed?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Environment",
                                                       "Host",
                                                       "Agent",
                                                       "Vector"
                                                   ],
                                       "explain":  "Correct (A): Climate affecting reservoir levels is environmental.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Two students exposed to same influenza strain; one sick, one not. Which triad link explains difference?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Host",
                                                       "Agent",
                                                       "Environment",
                                                       "Vector"
                                                   ],
                                       "explain":  "Correct (A): Host immunity governs susceptibility.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Helminth-endemic group shows mild disease due to long-term immunity. Triad element?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Host",
                                                       "Agent",
                                                       "Environment",
                                                       "Reservoir"
                                                   ],
                                       "explain":  "Correct (A): Host adaptation modifies severity.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "Hospital reduces MRSA via handwashing, disinfection, isolation. Which links broken?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 3",
                                       "options":  [
                                                       "Portal exit + mode + environment",
                                                       "Reservoir",
                                                       "Portal entry",
                                                       "Host"
                                                   ],
                                       "explain":  "Correct (A): Multi-link disruption.",
                                       "chapter":  "ch3"
                                   },
                                   {
                                       "q":  "During choir practice, multiple people seated \u003e20 ft apart develop measles. What is the most likely mode?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 4",
                                       "options":  [
                                                       "Airborne",
                                                       "Droplet",
                                                       "Indirect contact",
                                                       "Vehicle-borne"
                                                   ],
                                       "explain":  "Correct: Measles is airborne. Trap: Distance reveals the true mode.",
                                       "chapter":  "ch4"
                                   },
                                   {
                                       "q":  "At a party, a sick person vomits; droplets land on food; guests eat contaminated food. Which modes occurred?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 4",
                                       "options":  [
                                                       "Droplet + vehicle-borne",
                                                       "Droplet + airborne",
                                                       "Airborne + vector",
                                                       "Direct + indirect contact"
                                                   ],
                                       "explain":  "Correct: Droplet contamination ? vehicle transmission.",
                                       "chapter":  "ch4"
                                   },
                                   {
                                       "q":  "Which statement is incorrect?",
                                       "answer":  3,
                                       "type":  "mc",
                                       "topic":  "Chapter 4",
                                       "options":  [
                                                       "Airborne involves droplet nuclei",
                                                       "Droplet requires close range",
                                                       "Vehicles include food/water",
                                                       "Fomites include mosquitoes and ticks"
                                                   ],
                                       "explain":  "Correct: D is incorrect. Mosquitoes/ticks = vectors.",
                                       "chapter":  "ch4"
                                   },
                                   {
                                       "q":  "Legionnaires\u0027 disease among hot tub users. Mode?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 4",
                                       "options":  [
                                                       "Vehicle (aerosolized water)",
                                                       "Airborne like measles",
                                                       "Droplet",
                                                       "Indirect contact"
                                                   ],
                                       "explain":  "Correct: Vehicle-borne (aerosolized water). Trap: Not airborne.",
                                       "chapter":  "ch4"
                                   },
                                   {
                                       "q":  "Which disease is correctly matched with its dominant mode?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 4",
                                       "options":  [
                                                       "Tuberculosis ? airborne",
                                                       "COVID-19 ? vector-borne",
                                                       "Lyme disease ? droplet",
                                                       "Influenza ? vehicle-borne"
                                                   ],
                                       "explain":  "Correct: TB is airborne. Others are incorrect.",
                                       "chapter":  "ch4"
                                   },
                                   {
                                       "q":  "Which scenario represents active surveillance?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Clinics voluntarily submit weekly flu reports",
                                                       "Health department staff call hospitals for updated case counts",
                                                       "Labs automatically report positive results",
                                                       "Doctors report only unusual diseases"
                                                   ],
                                       "explain":  "Correct: B. Active = health department initiates contact. Trap: Automated lab reports are passive-enhanced.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "A pediatric clinic reports weekly ILI cases to serve as an early warning system. This is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Sentinel surveillance",
                                                       "Active",
                                                       "Syndromic",
                                                       "Passive"
                                                   ],
                                       "explain":  "Correct: A. Selected sites give high-quality data; not population wide.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "Which is a weakness of passive surveillance?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Underreporting",
                                                       "High cost",
                                                       "Hard to scale",
                                                       "Too much health dept staff"
                                                   ],
                                       "explain":  "Correct: A. Passive is cheap but incomplete.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "Syndromic surveillance is typically:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "More sensitive but less specific",
                                                       "More specific but less sensitive",
                                                       "Highly specific and sensitive",
                                                       "Neither"
                                                   ],
                                       "explain":  "Correct: A. Early detection ? high sensitivity, low specificity.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "Which measure assesses surveillance sensitivity?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Proportion of actual cases captured",
                                                       "Ability to avoid false positives",
                                                       "Time from detection to reporting",
                                                       "Number of facilities included"
                                                   ],
                                       "explain":  "Correct: A. Sensitivity = captured ÷ true cases.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "Syndromic data show increased respiratory visits but low influenza positivity. Explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Syndromic systems detect symptoms, not causes",
                                                       "Labs missed cases",
                                                       "Surveillance too specific",
                                                       "Public health overestimated risk"
                                                   ],
                                       "explain":  "Correct: A. High-yield distinction.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "ML detects unusual prescription patterns predicting a surge. This is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Syndromic",
                                                       "Passive",
                                                       "Sentinel",
                                                       "Not surveillance"
                                                   ],
                                       "explain":  "Correct: A. Uses precursors before diagnoses.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "Which combination gives earliest and broadest detection?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 5",
                                       "options":  [
                                                       "Syndromic + sentinel + lab-confirmed",
                                                       "Passive only",
                                                       "Sentinel only",
                                                       "Active only"
                                                   ],
                                       "explain":  "Correct: A. Integration maximizes coverage.",
                                       "chapter":  "ch5"
                                   },
                                   {
                                       "q":  "During February, 10 new flu cases occur among 380 students who were not sick Feb 1. Incidence proportion?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "10/380",
                                                       "10/400",
                                                       "10/20",
                                                       "380/10"
                                                   ],
                                       "explain":  "Correct: Incidence uses population at risk.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "At a picnic of 100 students, 25 became sick. Attack rate?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "25%",
                                                       "4%",
                                                       "75%",
                                                       "40%"
                                                   ],
                                       "explain":  "Correct: 25/100.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "Start of October: 950 disease-free. 25 new cases in October. Incidence for October?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "25/950",
                                                       "30/950",
                                                       "5/950",
                                                       "Cannot compute"
                                                   ],
                                       "explain":  "Correct: Only October cases included.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "Food poisoning: Exposed=60, sick=24. Attack rate (exposed)?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "24/60",
                                                       "24/40",
                                                       "4/40",
                                                       "60/24"
                                                   ],
                                       "explain":  "Correct: 24/60 = 40%.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "Prevalence ratio: A=10%, B=20%.",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "20/10 = 2",
                                                       "10/20 = 0.5",
                                                       "20/100",
                                                       "Cannot calculate"
                                                   ],
                                       "explain":  "Correct: Straight ratio.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "Camp of 200: 50 currently with swimmer\u0027s itch. Prevalence?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "50/200",
                                                       "150/200",
                                                       "200/50",
                                                       "Cannot compute"
                                                   ],
                                       "explain":  "Correct: Existing cases / total.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "30 new cases over 7,500 person-months. Incidence rate per 1,000 person-months?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "(30/7,500) × 1,000",
                                                       "30/1,000",
                                                       "(7,500/30) × 1,000",
                                                       "Cannot compute"
                                                   ],
                                       "explain":  "Correct: 4 per 1,000 person-months.",
                                       "chapter":  "ch6"
                                   },
                                   {
                                       "q":  "Short-duration disease: correct relationship?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 6",
                                       "options":  [
                                                       "Prevalence ˜ incidence",
                                                       "Prevalence always higher",
                                                       "Incidence = prevalence × duration",
                                                       "Prevalence = incidence × duration"
                                                   ],
                                       "explain":  "Correct: Short duration collapses accumulation.",
                                       "chapter":  "ch6"
                                   }
                               ]
              },
    "part3":  {
                  "intermediate":  [
                                       {
                                           "q":  "Watery diarrhea + muscle cramps + contaminated water suggests:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 14",
                                           "options":  [
                                                           "Cholera",
                                                           "Tetanus",
                                                           "Rabies",
                                                           "Chickenpox"
                                                       ],
                                           "explain":  "Classic cholera symptoms.",
                                           "chapter":  "ch14"
                                       },
                                       {
                                           "q":  "Vomiting/diarrhea 12-48 hours after exposure suggests:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 14",
                                           "options":  [
                                                           "Norovirus",
                                                           "Hepatitis C",
                                                           "Influenza",
                                                           "Malaria"
                                                       ],
                                           "explain":  "Typical norovirus incubation.",
                                           "chapter":  "ch14"
                                       },
                                       {
                                           "q":  "A zoonotic disease is one that:",
                                           "answer":  1,
                                           "type":  "mc",
                                           "topic":  "Chapter 14",
                                           "options":  [
                                                           "Is airborne",
                                                           "Spreads animal ? human",
                                                           "Human ? animal only",
                                                           "Only via vectors"
                                                       ],
                                           "explain":  "Zoonosis = animal to human.",
                                           "chapter":  "ch14"
                                       },
                                       {
                                           "q":  "Students eat cream-filled pastries left unrefrigerated. Four hours later: vomiting, cramps, no fever. Cause?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 15",
                                           "options":  [
                                                           "Staphylococcal toxin",
                                                           "Norovirus",
                                                           "Salmonella",
                                                           "Influenza"
                                                       ],
                                           "explain":  "Short (=4 hr) onset + vomiting = Staph aureus pre-formed toxin.",
                                           "chapter":  "ch15"
                                       },
                                       {
                                           "q":  "Cases appear abruptly within 12 hrs after buffet. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 15",
                                           "options":  [
                                                           "Point-source",
                                                           "Propagated",
                                                           "Continuous",
                                                           "Mixed"
                                                       ],
                                           "explain":  "Sudden cluster ? point source.",
                                           "chapter":  "ch15"
                                       },
                                       {
                                           "q":  "Campers who swam in Lake Bluewater show higher AR. Finding called:",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 15",
                                           "options":  [
                                                           "Association",
                                                           "Causation",
                                                           "Herd immunity",
                                                           "Validity"
                                                       ],
                                           "explain":  "Epi studies identify associations, not causation.",
                                           "chapter":  "ch15"
                                       },
                                       {
                                           "q":  "Diarrhea over 10 days in swimmers using under-chlorinated pool. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 15",
                                           "options":  [
                                                           "Continuous source",
                                                           "Point-source",
                                                           "Propagated",
                                                           "Mixed"
                                                       ],
                                           "explain":  "Long period = continuous exposure.",
                                           "chapter":  "ch15"
                                       },
                                       {
                                           "q":  "Cluster of diarrhea after shared water cooler. Mode?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 16",
                                           "options":  [
                                                           "Vehicle-borne",
                                                           "Airborne",
                                                           "Vector-borne",
                                                           "Fomite"
                                                       ],
                                           "explain":  "Contaminated drink = vehicle.",
                                           "chapter":  "ch16"
                                       },
                                       {
                                           "q":  "8-day slow appearance among swimmers in low-chlorine pool. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 16",
                                           "options":  [
                                                           "Continuous exposure",
                                                           "Point source",
                                                           "Propagated",
                                                           "Mixed"
                                                       ],
                                           "explain":  "Long duration ? continuous source.",
                                           "chapter":  "ch16"
                                       },
                                       {
                                           "q":  "Diarrhea after swimming in lake. Mode?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 16",
                                           "options":  [
                                                           "Waterborne",
                                                           "Droplet",
                                                           "Vector-borne",
                                                           "Airborne"
                                                       ],
                                           "explain":  "Lake ? waterborne.",
                                           "chapter":  "ch16"
                                       },
                                       {
                                           "q":  "Lunch event: 25 ate chicken (15 sick), 35 did not (5 sick). AR(exposed)?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 17",
                                           "options":  [
                                                           "15/25",
                                                           "5/35",
                                                           "20/60",
                                                           "25/15"
                                                       ],
                                           "explain":  "AR(exposed) = 15/25 = 60%.",
                                           "chapter":  "ch17"
                                       },
                                       {
                                           "q":  "Cases begin within 24 hrs after banquet, then stop. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 17",
                                           "options":  [
                                                           "Point-source",
                                                           "Continuous source",
                                                           "Propagated",
                                                           "Mixed"
                                                       ],
                                           "explain":  "Sharp single peak ? point source.",
                                           "chapter":  "ch17"
                                       },
                                       {
                                           "q":  "Diarrhea cluster among users of specific water fountain. Mode?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 17",
                                           "options":  [
                                                           "Waterborne",
                                                           "Droplet",
                                                           "Airborne",
                                                           "Sexual transmission"
                                                       ],
                                           "explain":  "Localized water source.",
                                           "chapter":  "ch17"
                                       },
                                       {
                                           "q":  "Gradual increase over 3-4 days via close contact. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 17",
                                           "options":  [
                                                           "Propagated",
                                                           "Point source",
                                                           "Continuous",
                                                           "Mixed"
                                                       ],
                                           "explain":  "Wave-like ? propagated.",
                                           "chapter":  "ch17"
                                       },
                                       {
                                           "q":  "Illness 30-48 hrs after burritos; diarrhea, fever, cramps. Organism?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 18",
                                           "options":  [
                                                           "Salmonella",
                                                           "Staph toxin",
                                                           "Influenza",
                                                           "Rabies"
                                                       ],
                                           "explain":  "Matches Salmonella profile.",
                                           "chapter":  "ch18"
                                       },
                                       {
                                           "q":  "Diarrhea only among students using a specific faucet. Mode?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 18",
                                           "options":  [
                                                           "Waterborne",
                                                           "Droplet",
                                                           "Fomite",
                                                           "Vector"
                                                       ],
                                           "explain":  "Localized water contamination.",
                                           "chapter":  "ch18"
                                       },
                                       {
                                           "q":  "Dorm outbreak rises gradually over days among roommates. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 18",
                                           "options":  [
                                                           "Propagated",
                                                           "Point source",
                                                           "Waterborne",
                                                           "Chemical"
                                                       ],
                                           "explain":  "Person-to-person sustained spread.",
                                           "chapter":  "ch18"
                                       },
                                       {
                                           "q":  "Tournament lunch ARs: Pasta 20/60, Salad 18/40, Fruit cups 8/50. Strongest association?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 19",
                                           "options":  [
                                                           "Salad",
                                                           "Pasta",
                                                           "Fruit cups",
                                                           "All equal"
                                                       ],
                                           "explain":  "AR(salad)=45% ? highest.",
                                           "chapter":  "ch19"
                                       },
                                       {
                                           "q":  "Steady increase over 9 days among swimmers in poorly chlorinated pool. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 19",
                                           "options":  [
                                                           "Continuous source",
                                                           "Point source",
                                                           "Propagated",
                                                           "Mixed"
                                                       ],
                                           "explain":  "Long exposure ? continuous source.",
                                           "chapter":  "ch19"
                                       },
                                       {
                                           "q":  "Vomiting?diarrhea, 12-48hr incubation, secondary household cases. Most likely?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 19",
                                           "options":  [
                                                           "Norovirus",
                                                           "Salmonella",
                                                           "Staph toxin",
                                                           "Hepatitis A"
                                                       ],
                                           "explain":  "Norovirus spreads easily.",
                                           "chapter":  "ch19"
                                       },
                                       {
                                           "q":  "Party: early vomiting (4-6 hr), later diarrhea (24-36 hr), no spread. Most likely?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 19",
                                           "options":  [
                                                           "Mixed foodborne outbreak",
                                                           "Pure norovirus",
                                                           "Pure Salmonella",
                                                           "Airborne"
                                                       ],
                                           "explain":  "Two incubation windows ? mixed.",
                                           "chapter":  "ch19"
                                       },
                                       {
                                           "q":  "12-48 hr incubation; vomiting ? diarrhea. Most likely pathogen?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 20",
                                           "options":  [
                                                           "Norovirus",
                                                           "Salmonella",
                                                           "Staph toxin",
                                                           "Influenza"
                                                       ],
                                           "explain":  "Vomiting-first, 12-48 hrs matches norovirus.",
                                           "chapter":  "ch20"
                                       },
                                       {
                                           "q":  "Pool with intermittent chlorination produces cases over 11 days. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 20",
                                           "options":  [
                                                           "Continuous",
                                                           "Point-source",
                                                           "Mixed",
                                                           "Propagated"
                                                       ],
                                           "explain":  "Ongoing exposure = continuous.",
                                           "chapter":  "ch20"
                                       },
                                       {
                                           "q":  "4-6 day wave-like dorm spread. Pattern?",
                                           "answer":  0,
                                           "type":  "mc",
                                           "topic":  "Chapter 20",
                                           "options":  [
                                                           "Propagated",
                                                           "Point-source",
                                                           "Continuous",
                                                           "Fomite"
                                                       ],
                                           "explain":  "Close-contact wave spread ? propagated.",
                                           "chapter":  "ch20"
                                       }
                                   ],
                  "beginner":  [
                                   {
                                       "q":  "A student becomes ill 4 hours after eating food left out at room temperature. Most likely transmission?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Vehicle-borne (foodborne)",
                                                       "Airborne",
                                                       "Vector-borne",
                                                       "Person-to-person"
                                                   ],
                                       "explain":  "Short incubation + food ? pre-formed toxin ? vehicle-borne.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Closing a kitchen after an outbreak is which type of prevention?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Primary",
                                                       "Secondary",
                                                       "Tertiary",
                                                       "Screening"
                                                   ],
                                       "explain":  "Primary = removing exposure source.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Malaria spreads by:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Mosquito vector",
                                                       "Contaminated water",
                                                       "Aerosol",
                                                       "Person-to-person"
                                                   ],
                                       "explain":  "Mosquito transmitted.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Fever + cough + rash starting on face and spreading down suggests:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Measles",
                                                       "Chickenpox",
                                                       "Norovirus",
                                                       "Salmonella"
                                                   ],
                                       "explain":  "Classic measles rash (cephalocaudal).",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Students vomit after drinking from unrefrigerated punch bowl. Vehicle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "The punch",
                                                       "The cups",
                                                       "Door handles",
                                                       "Classroom"
                                                   ],
                                       "explain":  "Vehicle = contaminated food/drink.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Influenza cluster after sick student attends class. Transmission mode?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "Droplet",
                                                       "Vector",
                                                       "Airborne",
                                                       "Waterborne"
                                                   ],
                                       "explain":  "Influenza spreads by droplets.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Vomiting 24-48 hrs after hike sandwiches suggests:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "Norovirus",
                                                       "Influenza",
                                                       "Hepatitis B",
                                                       "Rabies"
                                                   ],
                                       "explain":  "Norovirus incubation is 12-48 hrs.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Field trip lunch: 18 students sick in 12-24 hours. ARs: Pizza 10/50, Salad 16/40, Cookies 3/45. Most associated?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Salad",
                                                       "Pizza",
                                                       "Cookies",
                                                       "All equal"
                                                   ],
                                       "explain":  "Salad has highest AR = 40% ? strongest association.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "Picnic: 20 ate melon (8 sick); 25 did not (5 sick). AR(exposed)?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "8/20",
                                                       "5/25",
                                                       "13/45",
                                                       "25/8"
                                                   ],
                                       "explain":  "AR(exposed) = 8/20 = 40%.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "24-36 hr onset after tacos; diarrhea, cramps, low fever. Most likely?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Salmonella",
                                                       "Norovirus",
                                                       "Staph toxin",
                                                       "Influenza"
                                                   ],
                                       "explain":  "Salmonella matches timeline + symptoms.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "Sudden vomiting 8 hrs after party. Most likely?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Point-source foodborne",
                                                       "Propagated",
                                                       "Continuous",
                                                       "Vector"
                                                   ],
                                       "explain":  "Short onset ? toxin foodborne.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "Vomiting 3-6 hrs after cafeteria party suggests:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Staph aureus toxin",
                                                       "Norovirus",
                                                       "Salmonella",
                                                       "Hepatitis A"
                                                   ],
                                       "explain":  "Short incubation ? Staph toxin.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Exposed AR = 15/30; Unexposed AR = 3/20. RR?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "3.33",
                                                       "0.30",
                                                       "5.00",
                                                       "0.15"
                                                   ],
                                       "explain":  "RR = 0.50 / 0.15 = 3.33.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Vomiting + mild fever 24-48 hrs after eating suggests:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Norovirus",
                                                       "Influenza",
                                                       "Rabies",
                                                       "Staph toxin"
                                                   ],
                                       "explain":  "Norovirus incubation window.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Festival lunch: Pizza 12/60, Nachos 18/50, Lemonade 3/70. Strongest association?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Nachos",
                                                       "Pizza",
                                                       "Lemonade",
                                                       "All equal"
                                                   ],
                                       "explain":  "Nachos AR = 36% ? highest.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "7-10 day rising cases among swimmers in low-chlorine pool. Pattern?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Continuous source",
                                                       "Point source",
                                                       "Propagated",
                                                       "Mixed"
                                                   ],
                                       "explain":  "Long exposure ? continuous.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "Vomiting ? diarrhea; 12-36 hr incubation; secondary household cases. Most likely?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Norovirus",
                                                       "Salmonella",
                                                       "Staph toxin",
                                                       "Influenza"
                                                   ],
                                       "explain":  "Norovirus spreads readily ? secondary cases.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "Party: vomiting 4-6 hrs; diarrhea 24-36 hrs; no secondary spread. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Mixed foodborne outbreak",
                                                       "Propagated",
                                                       "Continuous",
                                                       "Pure norovirus"
                                                   ],
                                       "explain":  "Two incubation windows ? mixed outbreak.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "20-30 hr incubation; diarrhea + cramps + low fever. Pathogen?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Salmonella",
                                                       "Staph toxin",
                                                       "Norovirus",
                                                       "Influenza"
                                                   ],
                                       "explain":  "Classic Salmonella profile.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Diarrhea only in students using lower hallway fountain. Mode?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Waterborne",
                                                       "Airborne",
                                                       "Droplet",
                                                       "Vector"
                                                   ],
                                       "explain":  "Localized water contamination.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Dorm: gradual rise over 4-5 days via close contact. Pattern?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Propagated",
                                                       "Point source",
                                                       "Continuous",
                                                       "Mixed"
                                                   ],
                                       "explain":  "Person-to-person waves.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Conference lunch ARs: Pasta 30/70, Chicken 14/50, Fruit cups 10/60. Strongest association?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Pasta",
                                                       "Chicken",
                                                       "Fruit cups",
                                                       "All equal"
                                                   ],
                                       "explain":  "Pasta AR = 43% ? highest signal.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Only students using right hallway fountain have diarrhea. Mode?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Waterborne",
                                                       "Droplet",
                                                       "Airborne",
                                                       "Vector"
                                                   ],
                                       "explain":  "Localized fountain exposure = waterborne.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Vomiting?diarrhea; 14-36 hr incubation; sibling AR 45%. Pathogen?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Norovirus",
                                                       "Salmonella",
                                                       "Staph toxin",
                                                       "Hepatitis A"
                                                   ],
                                       "explain":  "High secondary household transmission = norovirus.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Party: vomiting 4-6 hr, diarrhea 20-30 hr, no secondary spread. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Mixed foodborne outbreak",
                                                       "Pure norovirus",
                                                       "Pure Salmonella",
                                                       "Airborne"
                                                   ],
                                       "explain":  "Two incubation windows = mixed outbreak.",
                                       "chapter":  "ch20"
                                   }
                               ],
                  "advanced":  [
                                   {
                                       "q":  "Which disease is airborne, not droplet?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Measles",
                                                       "Influenza",
                                                       "COVID-19 (typical spread)",
                                                       "Pertussis"
                                                   ],
                                       "explain":  "Measles is truly airborne and extremely contagious.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Parotitis (swollen salivary glands) is characteristic of:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Mumps",
                                                       "Measles",
                                                       "Rubella",
                                                       "Norovirus"
                                                   ],
                                       "explain":  "Signature mumps sign.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Treating a patient to prevent long-term complications is:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Tertiary prevention",
                                                       "Primary",
                                                       "Secondary",
                                                       "Environmental control"
                                                   ],
                                       "explain":  "Tertiary = reduce impact after disease.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Students ate Monday noon; cases Tues 6 PM-Wed AM. Likely agent?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Bacterial toxin-mediated",
                                                       "Vector-borne",
                                                       "Airborne viral",
                                                       "Parasite"
                                                   ],
                                       "explain":  "18-36 hr ? bacterial foodborne (not pre-formed toxin).",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Which intervention interrupts the reservoir?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Treat infected individuals to eliminate carriage",
                                                       "Masks",
                                                       "Improve water sanitation",
                                                       "Close gatherings"
                                                   ],
                                       "explain":  "Removing reservoir = treating carriers.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Handwashing breaks which link in chain of infection?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Mode of transmission",
                                                       "Susceptible host",
                                                       "Reservoir",
                                                       "Portal of entry"
                                                   ],
                                       "explain":  "Interrupts spread pathway.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Sore throat + fever + sandpaper rash + positive strep suggests:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Scarlet fever",
                                                       "Rubella",
                                                       "Hepatitis A",
                                                       "Shigella"
                                                   ],
                                       "explain":  "Scarlet fever = strep + rash.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Respiratory disease spreading by droplets with 1-4 day incubation is likely:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 14",
                                       "options":  [
                                                       "Influenza",
                                                       "Measles",
                                                       "TB",
                                                       "Rabies"
                                                   ],
                                       "explain":  "Influenza = droplet + short incubation.",
                                       "chapter":  "ch14"
                                   },
                                   {
                                       "q":  "Chicken salad eaten; onset 10-36 hrs; diarrhea + cramps + low fever. Most likely agent?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "Salmonella",
                                                       "Staph aureus toxin",
                                                       "Norovirus",
                                                       "Hepatitis A"
                                                   ],
                                       "explain":  "10-36 hr range matches Salmonella/non-toxin bacterial illness.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Picnic: 40 ate potato salad (16 sick); 30 did not (3 sick). AR(exposed)?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "16/40",
                                                       "3/30",
                                                       "19/70",
                                                       "40/16"
                                                   ],
                                       "explain":  "AR(exposed) = 16/40 = 40%.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Using picnic data: RR? (16/40 vs 3/30)",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "4.0",
                                                       "0.25",
                                                       "0.10",
                                                       "0.40"
                                                   ],
                                       "explain":  "RR = 0.40 / 0.10 = 4.0.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Chicken wraps eaten at noon; cases 8 PM-2 AM; vomiting \u003e diarrhea. Cause?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "Staph aureus toxin",
                                                       "Salmonella",
                                                       "Hepatitis A",
                                                       "Influenza"
                                                   ],
                                       "explain":  "Short incubation + vomiting-dominant ? Staph toxin.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Only students using Sink #4 (very cold water) have diarrhea. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "Contaminated water source",
                                                       "Person-to-person",
                                                       "Vector",
                                                       "Droplet"
                                                   ],
                                       "explain":  "Local water contamination likely.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Best probable case definition for taco-day outbreak:",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "Any diarrhea",
                                                       "Vomiting + ate tacos Friday",
                                                       "Anyone in school",
                                                       "Cramps only"
                                                   ],
                                       "explain":  "Probable = symptoms + exposure link.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Only students who ate bananas from same bowl are sick; contamination under peel. Cause?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "Contaminated food surface/handling",
                                                       "Airborne viral",
                                                       "Vector bite",
                                                       "Droplet spread"
                                                   ],
                                       "explain":  "Bacterial contamination via handling.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Daycare: vomiting ? diarrhea; onset 14-30 hrs; secondary cases in siblings later. Most likely?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 15",
                                       "options":  [
                                                       "Mixed outbreak",
                                                       "Propagated",
                                                       "Point-source",
                                                       "Parasite"
                                                   ],
                                       "explain":  "Initial foodborne + secondary person-to-person spread.",
                                       "chapter":  "ch15"
                                   },
                                   {
                                       "q":  "Festival outbreak ARs: Hamburgers 12/80, Ice cream 22/30, Lemonade 14/60. Vehicle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Ice cream",
                                                       "Hamburgers",
                                                       "Lemonade",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Ice cream AR = 73% ? most likely vehicle.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "Wraps eaten at noon; onset 6 PM-4 AM; vomiting \u003e diarrhea. Likely cause?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Staph toxin",
                                                       "Norovirus",
                                                       "Salmonella",
                                                       "Hepatitis A"
                                                   ],
                                       "explain":  "Short incubation + vomiting dominant ? Staph toxin.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "RR with AR(exposed)=40% and AR(unexposed)=20%?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "2.0",
                                                       "0.5",
                                                       "20%",
                                                       "60%"
                                                   ],
                                       "explain":  "RR = 0.40 / 0.20 = 2.0.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "Food event cluster within 24 hrs, then household cases after 2-3 days. Pattern?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Mixed",
                                                       "Propagated",
                                                       "Continuous",
                                                       "Point source"
                                                   ],
                                       "explain":  "Foodborne initial cluster + secondary spread.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "Best probable case definition for pasta outbreak?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Vomiting AND ate pasta Tuesday",
                                                       "Any vomiting",
                                                       "Any diarrhea",
                                                       "Any cafeteria student"
                                                   ],
                                       "explain":  "Probable = symptoms + exposure.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "AR(exp)=60%, AR(unexp)=15%. RR?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "4.0",
                                                       "0.25",
                                                       "15%",
                                                       "45%"
                                                   ],
                                       "explain":  "RR = 0.60 / 0.15 = 4.0.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "Cases only in students filling bottles from construction-area faucet. Cause?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Local water contamination",
                                                       "Droplet",
                                                       "Person-to-person",
                                                       "Vector"
                                                   ],
                                       "explain":  "Localized environmental source.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "ARs: Fruit salad 14/50, Chicken bites 3/40, Chocolate milk 18/30. Source?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 16",
                                       "options":  [
                                                       "Chocolate milk",
                                                       "Fruit salad",
                                                       "Chicken bites",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Chocolate milk AR = 60% ? strongest association.",
                                       "chapter":  "ch16"
                                   },
                                   {
                                       "q":  "Potluck ARs: Pasta salad 14/40; Fruit cups 12/30; Brownies 5/50. Strongest association?",
                                       "answer":  1,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Pasta salad",
                                                       "Fruit cups",
                                                       "Brownies",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Fruit cups AR = 40%, higher than pasta salad (35%).",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Tacos eaten 12 PM; symptoms 4 AM next day (16 hrs); diarrhea first. Cause?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Salmonella",
                                                       "Norovirus",
                                                       "Staph toxin",
                                                       "Influenza"
                                                   ],
                                       "explain":  "16 hrs + diarrhea dominant ? Salmonella.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Banquet cases ? household cases 2 days later. Pattern?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Mixed",
                                                       "Point source",
                                                       "Continuous",
                                                       "Never mixed"
                                                   ],
                                       "explain":  "Foodborne initial + secondary spread.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "AR punch 16%; AR macaroni 68%. All macaroni eaters drank punch. True vehicle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Macaroni",
                                                       "Fruit punch",
                                                       "Both",
                                                       "Neither"
                                                   ],
                                       "explain":  "Punch is confounded by macaroni exposure.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Illness only in students using left spigot; right spigot users fine. Explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Left spigot contaminated",
                                                       "Entire water supply contaminated",
                                                       "Person-to-person",
                                                       "Airborne"
                                                   ],
                                       "explain":  "Localized contamination at single spigot.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Best probable case definition for multi-day burrito outbreak:",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Vomiting AND ate burrito Mon-Wed",
                                                       "Any vomiting",
                                                       "Any diarrhea",
                                                       "Any cafeteria visitor"
                                                   ],
                                       "explain":  "Probable = symptoms + exposure link.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Catered lunch: sandwiches 18/55 (12-hr onset); fruit cups 9/40 (24-48 hr onset). Interpret?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Two overlapping outbreaks",
                                                       "Fruit cups true source",
                                                       "Sandwiches true source",
                                                       "Bottled water source"
                                                   ],
                                       "explain":  "Two different incubation patterns ? two agents.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Macaroni meal: early vomiting cases (6-8 hr) + later diarrhea (18-36 hr), no secondary spread. Explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 17",
                                       "options":  [
                                                       "Two agents in same meal",
                                                       "Pure norovirus",
                                                       "Pure Salmonella",
                                                       "Propagated outbreak"
                                                   ],
                                       "explain":  "Distinct incubation and symptoms ? dual-agent foodborne outbreak.",
                                       "chapter":  "ch17"
                                   },
                                   {
                                       "q":  "Picnic: Watermelon 10/30, Sandwiches 20/40, but all sick watermelon eaters also ate sandwiches. Source?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Sandwiches",
                                                       "Watermelon",
                                                       "Both",
                                                       "Neither"
                                                   ],
                                       "explain":  "Watermelon exposure nested inside sandwich exposure ? sandwiches true vehicle.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "Dinner 6 PM; onset 4-30 hrs; early vomiting + later diarrhea; no secondary cases. Explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Two agents in same meal",
                                                       "Single norovirus",
                                                       "Single Salmonella",
                                                       "Propagated outbreak"
                                                   ],
                                       "explain":  "Bimodal incubation + symptoms ? dual agents.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "Camp: 30 ate chili (18 sick); 40 did not (6 sick). RR?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "4.0",
                                                       "3.0",
                                                       "2.0",
                                                       "1.0"
                                                   ],
                                       "explain":  "RR = (18/30)/(6/40) = 0.60/0.15 = 4.0.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "6th graders eat at 10:30 AM; 7th graders at 12:30 PM. Two peaks but identical incubation. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Single food source with staggered exposure",
                                                       "Two outbreaks",
                                                       "Only 6th graders affected",
                                                       "Only 7th graders affected"
                                                   ],
                                       "explain":  "Same exposure, different meal times ? false two-peak illusion.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "Potluck: Pasta 14/40, Brownies 12/30, Salad 22/25, salad served by ill volunteer. Vehicle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Salad",
                                                       "Pasta",
                                                       "Brownies",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Extreme AR + ill food-handler ? salad.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "20-30 hr incubation; chicken 12/30, rice 10/30, salad 7/20; rice eaters mostly chicken eaters; many chicken-only eaters sick. Source?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Chicken",
                                                       "Rice",
                                                       "Salad",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Chicken retains strongest association independent of rice.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "Carnival: Cotton candy 22%, Hot dogs 40%, Chips 41% but chip eaters clustered with known sick classmate. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Hot dogs are true vehicle",
                                                       "Chips true vehicle",
                                                       "Cotton candy",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Chip AR inflated by propagated cluster ? hot dogs true driver.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "Banquet: early vomiting (5-7 hrs), mid diarrhea (14-20 hrs), late diarrhea (30-48 hrs), secondary siblings 2 days later. Best explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 18",
                                       "options":  [
                                                       "Mixed: Staph + Salmonella + secondary norovirus",
                                                       "Single norovirus",
                                                       "Single Salmonella",
                                                       "Fruit cups only"
                                                   ],
                                       "explain":  "Three distinct patterns ? triple mechanism.",
                                       "chapter":  "ch18"
                                   },
                                   {
                                       "q":  "All salad eaters also ate pasta; many pasta eaters did NOT eat salad and got sick. True vehicle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Pasta",
                                                       "Salad",
                                                       "Both",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Salad signal inflated by pasta co-exposure ? pasta true source.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Dinner with 3 waves: 6-8 hr vomiting, 18-24 hr diarrhea, 36-48 hr fever/diarrhea. Explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Multiple agents in same meal",
                                                       "Single pathogen irregular incubation",
                                                       "Propagated",
                                                       "Airborne"
                                                   ],
                                       "explain":  "Triple peak ? multiple agents.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Lasagna: 35 ate (21 sick); 55 did not (11 sick). RR?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "3.0",
                                                       "2.5",
                                                       "1.5",
                                                       "4.0"
                                                   ],
                                       "explain":  "RR = (21/35)/(11/55) = 0.60/0.20 = 3.0.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Two peaks: 12 hrs \u0026 36 hrs after same snack; symptoms differ. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Same exposure, two pathogens",
                                                       "Pure norovirus",
                                                       "Pure Salmonella",
                                                       "Propagated"
                                                   ],
                                       "explain":  "Dual agents ? two peaks.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Fruit cups AR inflated by pasta co-exposure; pasta eaters sick without fruit cups. Vehicle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Pasta",
                                                       "Fruit cups",
                                                       "Sandwiches",
                                                       "None"
                                                   ],
                                       "explain":  "Pasta retains independent signal.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "School event: Chips AR inflated by classroom cluster; Pizza 22/45 unaffected by cluster. True vehicle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Pizza",
                                                       "Chips",
                                                       "Fruit salad",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Pizza signal remains independent of cluster.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Catered lunch: Pasta 28/35; both tables served by sick food handler; compatible symptoms. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Pasta true vehicle",
                                                       "Sandwiches",
                                                       "Two outbreaks",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Extremely high AR + common exposure source.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Banquet: early vomiting (6-8 hr), mid diarrhea (18-28 hr), late fever/diarrhea (36-52 hr), plus household spread. Explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 19",
                                       "options":  [
                                                       "Staph + Salmonella + secondary norovirus",
                                                       "Single norovirus",
                                                       "Single Salmonella",
                                                       "Fruit trays only"
                                                   ],
                                       "explain":  "Three distinct incubation/symptom patterns + secondaries ? triple mechanism.",
                                       "chapter":  "ch19"
                                   },
                                   {
                                       "q":  "Pasta at 11:00 AM, Chicken at 12:45 PM. Onset clusters match times, but pasta AR higher within each time block. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Pasta true vehicle",
                                                       "Chicken true vehicle",
                                                       "Timing confounding only",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Time-adjusted AR confirms pasta effect independent of timing.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Trip event: early vomiting (6-8 hr), mid diarrhea (20-28 hr), late diarrhea+fever (32-48 hr), secondary household cases only in late group. Explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Staph + Salmonella + secondary norovirus",
                                                       "Pure norovirus",
                                                       "Pure Salmonella",
                                                       "Continuous environmental exposure"
                                                   ],
                                       "explain":  "Three distinct incubation patterns + household spread.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Camp tacos: 50 ate (30 sick); 70 did not (14 sick). RR?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "3.0",
                                                       "2.1",
                                                       "0.5",
                                                       "4.0"
                                                   ],
                                       "explain":  "RR = (30/50) / (14/70) = 0.60 / 0.20 = 3.0.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Fruit salad 12/40, Pizza 20/45, Chips 9/12 but chips group was pre-exposed to vomiting classmate. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Pizza true vehicle",
                                                       "Chips true vehicle",
                                                       "Fruit salad",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Chip AR inflated by unrelated propagated cluster.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Banquet ARs: Pasta 25/40, Burgers 12/50, Fruit bowls 22/30. Fruit bowl eaters all ate pasta; many pasta-only eaters sick. Vehicle?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Pasta",
                                                       "Fruit bowls",
                                                       "Burgers",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Fruit AR inflated by pasta co-exposure; pasta retains signal.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Tacos Mon-Tue: only Tuesday group sick; substitute cook symptomatic. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Tuesday tacos true vehicle",
                                                       "Monday tacos true vehicle",
                                                       "Both days equal",
                                                       "Classmate spread"
                                                   ],
                                       "explain":  "Clear link to Tuesday cook with GI symptoms.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Catered lunch: Pasta 26/35; two sick servers at pasta table; symptoms Salmonella-like. Interpretation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Pasta overwhelmingly likely vehicle",
                                                       "Salad possible",
                                                       "Sandwiches implicated",
                                                       "Cannot determine"
                                                   ],
                                       "explain":  "Very high AR + direct food-handler contamination.",
                                       "chapter":  "ch20"
                                   },
                                   {
                                       "q":  "Banquet of 450: early vomiting, mid diarrhea, late diarrhea+fever, secondary household spread only in late group. Food ARs: Pasta 60/110, Chicken 25/120, Fruit 70/100. Explanation?",
                                       "answer":  0,
                                       "type":  "mc",
                                       "topic":  "Chapter 20",
                                       "options":  [
                                                       "Staph + Salmonella + secondary norovirus",
                                                       "Single norovirus",
                                                       "Single Salmonella",
                                                       "Fruit trays only"
                                                   ],
                                       "explain":  "Three incubation/symptom waves + household spread ? triple mechanism.",
                                       "chapter":  "ch20"
                                   }
                               ]
              }
};

// Make globally available
if (typeof window !== 'undefined') {
    window.QUIZ_BANKS = QUIZ_BANKS;
}
if (typeof module !== 'undefined') {
    module.exports = QUIZ_BANKS;
}
/*
 * quiz_phase2_additions.js
 *
 * This module augments the existing QUIZ_BANKS with additional
 * advanced questions and combination questions to support Phase 2
 * improvements. It runs immediately when loaded and will do
 * nothing if QUIZ_BANKS is undefined. Each new question includes
 * a clear explanation and is placed into the appropriate part’s
 * advanced array. Multi‑topic questions are encoded as single
 * multiple‑choice items by combining correct answers. If you add
 * more questions here, ensure they are comprehensive and align
 * with the curriculum.
 */

(function() {
    // Guard: only run if the global quiz bank exists.
    if (typeof window === 'undefined' || typeof QUIZ_BANKS === 'undefined') {
        console.warn('quiz_phase2_additions.js: QUIZ_BANKS not available – new questions not loaded');
        return;
    }

    // Helper to ensure part and difficulty arrays exist
    function ensureArray(part, level) {
        if (!QUIZ_BANKS[part]) {
            QUIZ_BANKS[part] = {};
        }
        if (!Array.isArray(QUIZ_BANKS[part][level])) {
            QUIZ_BANKS[part][level] = [];
        }
        return QUIZ_BANKS[part][level];
    }

    // Part I (Foundations) – advanced
    const part1Advanced = ensureArray('part1', 'advanced');
    part1Advanced.push(
        {
            q: 'Which Hill criterion requires that the exposure occurs before the disease?',
            answer: 0,
            type: 'mc',
            topic: 'Chapter 3',
            options: [
                'Temporality',
                'Strength of association',
                'Consistency',
                'Dose–response (Biological gradient)'
            ],
            explain: 'Temporality is the only Hill criterion that insists the cause precedes the effect. Without it, an association cannot imply causation.'
        },
        {
            q: 'Public health ethics: which Belmont principle emphasizes respect for persons and the requirement for informed consent?',
            answer: 0,
            type: 'mc',
            topic: 'Chapter 3',
            options: [
                'Respect for Persons (Autonomy)',
                'Beneficence',
                'Justice',
                'Non‑maleficence'
            ],
            explain: 'The Belmont Report outlines three principles: respect for persons (autonomy), beneficence, and justice. Respect for persons emphasises voluntary informed consent and treating individuals as autonomous agents.'
        }
    );

    // Part II (Investigation & Analysis) – advanced
    const part2Advanced = ensureArray('part2', 'advanced');
    part2Advanced.push(
        {
            q: 'At a potluck, 50 people attend. Thirty ate the tuna salad; 20 of these reported gastroenteritis. Twenty did not eat tuna salad; 2 reported illness. Based on attack rates, is the tuna salad the likely source?',
            answer: 0,
            type: 'mc',
            topic: 'Chapter 8',
            options: [
                'Yes – AR_exposed≈67% vs AR_unexposed=10%',
                'No – AR_exposed≈10% vs AR_unexposed=67%',
                'No – AR_exposed=50% vs AR_unexposed=50%',
                'Cannot determine without RR'
            ],
            explain: 'Attack rate among those who ate tuna salad (20/30) = 66.7%. Among those who didn’t eat (2/20) = 10%. Because AR_exposed ≫ AR_unexposed, tuna salad is likely the culprit. Tip: practise calculating attack rates and risk ratios using the 2×2 Table Calculator found in the Interactive Drills.'
        },
        {
            q: 'A study collects exposure information incorrectly for both cases and controls, causing bias toward the null. What type of misclassification is this?',
            answer: 0,
            type: 'mc',
            topic: 'Chapter 10',
            options: [
                'Non‑differential misclassification of exposure',
                'Differential misclassification of exposure',
                'Selection bias',
                'Information bias due to recall'
            ],
            explain: 'Non‑differential misclassification occurs when exposure status is measured with the same error in both cases and controls. It typically biases effect measures toward the null.'
        }
    );

    // Part III (Control & Prevention) – advanced
    const part3Advanced = ensureArray('part3', 'advanced');
    part3Advanced.push(
        {
            q: 'Which of the following combinations represents examples of primary prevention?',
            answer: 0,
            type: 'mc',
            topic: 'Chapter 15',
            options: [
                'Vaccination and health education',
                'Cancer screening and cholesterol testing',
                'Physical therapy after a stroke',
                'All of the above'
            ],
            explain: 'Primary prevention aims to prevent disease before it occurs, such as through vaccination and health education. Screening detects disease early (secondary prevention), and therapy after illness is tertiary.'
        },
        {
            q: 'If the basic reproduction number (R₀) of measles is approximately 18, what proportion of the population must be immune to achieve herd immunity?',
            answer: 0,
            type: 'mc',
            topic: 'Chapter 18',
            options: [
                '≈94%',
                '50%',
                '18%',
                '5%'
            ],
            explain: 'Herd immunity threshold ≈ 1 – 1/R₀. For R₀ = 18, the threshold is 1 – 1/18 ≈ 0.944, or 94% of the population.'
        },
        {
            q: 'Which set contains only Hill\'s criteria for causation?',
            answer: 2,
            type: 'mc',
            topic: 'Chapter 18',
            options: [
                'Strength, p‑value, plausibility',
                'P‑value, dose–response, temporality',
                'Temporality, consistency, dose–response',
                'Specificity, p‑value, consistency'
            ],
            explain: 'Hill\'s criteria include temporality, strength, consistency, dose–response, plausibility, coherence, experiment and analogy. P‑value is not among the criteria. The only option containing three actual criteria is option C.'
        }
    );

    // Part I (Modes of Transmission) – multi‑select style advanced question
    const part1AdvancedMulti = ensureArray('part1', 'advanced');
    part1AdvancedMulti.push({
        q: 'Vector‑borne diseases include which of the following combinations?',
        answer: 0,
        type: 'mc',
        topic: 'Chapter 5',
        options: [
            'Malaria & Lyme disease',
            'Malaria, Lyme disease & Influenza',
            'Cholera & Influenza',
            'All of the above'
        ],
        explain: 'Vector‑borne diseases are transmitted by arthropods such as mosquitoes or ticks. Malaria (mosquito‑borne) and Lyme disease (tick‑borne) are vector‑borne. Cholera and influenza are primarily transmitted via contaminated water and respiratory droplets, respectively, not by insects.'
    });
})();
(function () {
    if (typeof QUIZ_BANKS === 'undefined') {
        console.warn('QUIZ_BANKS not loaded, Phase 3 additions skipped.');
        return;
    }

    // console.log('[Phase 3] Injecting Advanced Content & Visuals...');

    const newQuestions = {
        part1: [
            {
                q: "Analyze this Epi Curve:<br><pre style='font-family:monospace; line-height:10px;'>\n   #\n   #\n  ###\n #####   #\n----------\n1 2 3 4 5 6</pre>Which pattern is most consistent with this single sharp peak?",
                answer: 0,
                type: "mc",
                topic: "Chapter 4",
                options: ["Point Source", "Propagated", "Continuous Common Source", "Intermittent"],
                explain: "Correct: A. A single sharp peak with a rapid decline suggests a point source exposure (e.g., a single contaminated meal)."
            },
            {
                q: "Compare Study Designs:<br><table class='neo-table small'><tr><td>A</td><td>Start with Disease</td><td>Look Back</td></tr><tr><td>B</td><td>Start with Exposure</td><td>Follow Forward</td></tr></table><br>Which row describes a Cohort Study?",
                answer: 1,
                type: "mc",
                topic: "Chapter 10",
                options: ["Row A", "Row B", "Both", "Neither"],
                explain: "Correct: B. Cohort studies classify by exposure status first, then track outcomes."
            },
            {
                q: "<strong>Visual Analogy:</strong><br>Identifying 'sick' people against a noisy background of 'healthy' people is best described by measures of:",
                answer: 0,
                type: "mc",
                topic: "Chapter 1",
                options: ["Validity (Sensitivity/Specificity)", "Reliability", "Representativeness", "Generalizability"],
                explain: "Correct: A. Signal-to-noise detection is the core concept of Sensitivity (finding the signal) and Specificity (ignoring the noise)."
            }
        ],
        part2: [
            {
                q: "<div style='font-family:monospace; border:1px solid #ccc; padding:5px;'>ID | Ate Salad | Sick<br>1  | Yes       | Yes<br>2  | No        | No<br>3  | Yes       | No</div><br>Calculate the Attack Rate for Salad Eaters.",
                answer: 0,
                type: "mc",
                topic: "Chapter 13",
                options: ["50% (1/2)", "33% (1/3)", "100% (2/2)", "0%"],
                explain: "Correct: A. Two people ate salad (ID 1, ID 3). Of them, only ID 1 got sick. 1/2 = 50%."
            },
            {
                q: "Risk Ratio Interpretation:<br><strong>RR = 0.6 (95% CI: 0.4 - 0.9)</strong><br>How should you interpret this?",
                answer: 1,
                type: "mc",
                topic: "Chapter 13",
                options: ["Exposure is a Risk Factor", "Exposure is Protective", "Result is Not Statistically Significant", "Bias is present"],
                explain: "Correct: B. RR < 1 indicates protection. Since the CI (0.4-0.9) does NOT include 1.0, it is statistically significant."
            },
            {
                q: "<strong>Visual Bias Drill:</strong><br>Two groups are compared. Group A has mean age 20. Group B has mean age 60. You find higher death rates in B. This is likely:",
                answer: 0,
                type: "mc",
                topic: "Chapter 11",
                options: ["Confounding by Age", "Selection Bias", "Recall Bias", "Observer Bias"],
                explain: "Correct: A. Age is related to both the group assignment and the outcome (death), making it a classic confounder."
            }
        ],
        part3: [
            {
                q: "<strong>Chain of Infection Visual:</strong><br>Reservoir -> Portal of Exit -> ??? -> Portal of Entry.<br>What is the missing link?",
                answer: 0,
                type: "mc",
                topic: "Chapter 15",
                options: ["Mode of Transmission", "Susceptible Host", "Agent", "Vector"],
                explain: "Correct: A. The agent must travel from the exit to the entry via a Mode of Transmission."
            },
            {
                q: "Ethical Dilemma:<br>A student has active Measles (Airborne). Which action is least restrictive but effective?",
                answer: 1,
                type: "mc",
                topic: "Chapter 17",
                options: ["Quarantine the whole school", "Isolate the student at home", "Monitor temperature only", "Do nothing"],
                explain: "Correct: B. Isolation restricts the sick individual. Quarantine restricts healthy/exposed. Whole school quarantine is too restrictive initially."
            }
        ]
    };

    // Inject
    if (QUIZ_BANKS.part1) QUIZ_BANKS.part1.advanced.push(...newQuestions.part1);
    if (QUIZ_BANKS.part2) QUIZ_BANKS.part2.intermediate.push(...newQuestions.part2);
    if (QUIZ_BANKS.part3) QUIZ_BANKS.part3.beginner.push(...newQuestions.part3);

})();

/**
 * SCIENCE OLYMPIAD 2026 - DISEASE DETECTIVES (DIV B)
 * RULES COMPLIANCE MATRIX & SCHEMA
 * 
 * This file acts as the pedagogical source of truth.
 * It maps App Content (Chapters, Tools) to Official Rule IDs.
 */

const RULES_DATA = {
    meta: {
        version: "2026-Draft",
        division: "B"
    },
    // The Core Rules (Simplified for Logic)
    rules: {
        "1.a": "Scientific Inquiry: Hypothesis Generation",
        "1.b": "Scientific Inquiry: Study Design (Cross-Sectional)",
        "1.c": "Scientific Inquiry: Study Design (Case-Control)",
        "1.d": "Scientific Inquiry: Study Design (Cohort)",
        "2.a": "Pattern Recognition: Person, Place, Time",
        "2.b": "Pattern Recognition: Epi Curves (Point Source)",
        "2.c": "Pattern Recognition: Epi Curves (Propagated)",
        "2.d": "Pattern Recognition: Maps & Clustering",
        "3.a": "Etiology: Agents (Bacteria, Virus, Fungi, Prions)",
        "3.b": "Etiology: Modes of Transmission",
        "3.c": "Etiology: Chain of Infection",
        "4.a": "Calculation: Attack Rate",
        "4.b": "Calculation: Relative Risk (Risk Ratio)",
        "4.c": "Calculation: Odds Ratio",
        "4.d": "Calculation: Confidence Intervals (Basic)",
        "5.a": "Prevention: Levels (Prim, Sec, Tert)",
        "5.b": "Prevention: Strategies (Vector, Env, etc.)",
        "5.c": "Prevention: Herd Immunity & R0",
        "6.a": "Public Health: Surveillance Systems",
        "6.b": "Public Health: Outbreak Investigation Steps (13)",
        "6.c": "Public Health: Ethics, Laws, & Privacy"
    },
    // Mapping: Which Chapter Covers Which Rule?
    mapping: {
        "ch1": ["1.a", "6.b"],           // Frameworks -> Inquiry, Steps
        "ch2": ["6.c"],                  // History often touches on ethics/laws context
        "ch3": ["3.a", "3.b", "3.c"],    // Triad & Chain covers Etiology
        "ch4": ["4.a"],                  // Measures of Freq -> Basics
        "ch5": ["6.a", "3.b"],           // Surveillance
        "ch6": ["2.a"],                  // Natural History -> PPT
        "ch7": ["6.b"],                  // Investigation Roadmap -> Steps
        "ch8": ["2.a"],                  // Case Definitions
        "ch9": ["2.a", "2.d"],           // Line Lists -> Data Organization
        "ch10": ["2.b", "2.c"],          // Epi Curves
        "ch11": ["4.a", "4.b"],          // Math I -> AR, RR
        "ch12": ["4.c", "4.d"],          // Math II -> OR, CI
        "ch13": ["1.b", "1.c", "1.d"],   // Hypothesis Testing -> Study Designs
        "ch14": ["2.d"],                 // Data Synthesis
        "ch15": ["5.a"],                 // Prevention Levels
        "ch16": ["5.b"],                 // Control Measures
        "ch17": ["6.c"],                 // Isolation & Ethics
        "ch18": ["5.c"],                 // Pop Dynamics -> Herd Immunity
        "drills": ["2.b", "2.c", "4.b", "4.c"], // Tools cover curves and math
        "simulation": ["*"]              // Exams cover all
    }
};

/**
 * Rules Engine
 * Provides helper functions to check compliance.
 */
window.RulesEngine = {
    /**
     * Returns an array of Rule Objects {id, desc} for a given chapter.
     */
    getRulesForChapter(chapterId) {
        const ruleIds = RULES_DATA.mapping[chapterId];
        if (!ruleIds) return [];
        if (ruleIds[0] === "*") return [{ id: "ALL", desc: "Comprehensive Coverage" }];

        return ruleIds.map(id => ({
            id: id,
            desc: RULES_DATA.rules[id] || "Unknown Rule"
        }));
    },

    /**
     * Generates an HTML badge string for display in the header.
     */
    renderBadges(chapterId) {
        const rules = this.getRulesForChapter(chapterId);
        if (rules.length === 0) return '';

        return `
            <div class="rules-badge-container" style="margin-top: 0.5rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
                ${rules.map(r => `
                    <span class="neo-badge small" title="${r.desc}" style="background:var(--accent-blue); color:var(--text-color); cursor:help;">
                        <i class="ph-bold ph-check-circle"></i> Rule ${r.id}
                    </span>
                `).join('')}
            </div>
        `;
    }
};

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

const CASE_SCENARIOS = [
    {
        id: "case1",
        title: "Case 1: The Science Fair",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> 7th graders attended a science fair. 4 hours later, many students reported vomiting (92%) and nausea (87%). None had fever.",
                question: "Based on the symptoms and incubation period (4 hours), what is the most likely agent?",
                options: ["Norovirus", "Staphylococcus aureus toxin", "Salmonella", "E. coli O157:H7"],
                answer: 1,
                feedback: "<b>Correct!</b> Rapid onset (4h) + vomiting without fever strongly suggests a preformed toxin like Staph aureus. Norovirus usually takes 12-48h."
            },
            {
                text: "<b>Investigation:</b> You interview the students. Attack Rates: Chicken Salad (80% vs 33%), Mac & Cheese (80% vs 33%), Fruit (67% vs 60%).",
                question: "Both Chicken Salad and Mac & Cheese have the same Attack Rates. Which is the more likely vehicle for Staph aureus?",
                options: ["Chicken Salad", "Mac & Cheese", "Fruit", "Both are equally likely"],
                answer: 0,
                feedback: "<b>Correct!</b> Chicken Salad is a high-risk food for Staph (hand contact + temperature abuse). Mac & Cheese is less likely to support Staph toxin formation."
            },
            {
                text: "<b>Conclusion:</b> The food handler for the Chicken Salad had a cut on their finger.",
                question: "What type of outbreak source is this?",
                options: ["Point Source", "Continuous Source", "Propagated", "Intermittent"],
                answer: 0,
                feedback: "<b>Correct!</b> This is a Point Source outbreak: single exposure event, rapid onset, and tight clustering of cases."
            }
        ]
    },
    {
        id: "case2",
        title: "Case 2: The Middle School Cluster",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> A cluster of respiratory illness is reported in a middle school. The Epi Curve shows multiple small peaks separated by 1-4 days over a 10-day period.",
                question: "What pattern does this Epi Curve suggest?",
                options: ["Point Source", "Common Source", "Propagated", "Environmental"],
                answer: 2,
                feedback: "<b>Correct!</b> Multiple waves or peaks separated by incubation periods indicates person-to-person transmission (propagated)."
            },
            {
                text: "<b>Data Analysis:</b> You calculate Attack Rates by Homeroom: C1 (67%), C2 (100%), C3 (33%), C4 (25%).",
                question: "What does this distribution suggest?",
                options: ["Cafeteria food is the cause", "Transmission is occurring in classrooms (C1, C2)", "Ventilation system failure", "Water fountain contamination"],
                answer: 1,
                feedback: "<b>Correct!</b> Clustering in specific homerooms (C1, C2) suggests close-contact transmission (droplet) is happening within those rooms."
            },
            {
                text: "<b>Further Investigation:</b> You find that students in C1 and C2 share a choir class.",
                question: "How does this support your hypothesis?",
                options: ["It doesn't", "Singing increases droplet spread, supporting person-to-person transmission", "It suggests a waterborne source in the choir room", "It proves airborne transmission"],
                answer: 1,
                feedback: "<b>Correct!</b> Singing is a high-risk activity for droplet spread, reinforcing the propagated/person-to-person hypothesis."
            }
        ]
    },
    {
        id: "case3",
        title: "Case 3: The Wedding Banquet",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Background:</b> Guests at a wedding banquet fall ill. Onset times vary from 12 to 36 hours after the meal.",
                question: "Which agent fits this incubation period?",
                options: ["Staph aureus", "Salmonella", "Botulism", "Chemical toxin"],
                answer: 1,
                feedback: "<b>Correct!</b> Salmonella typically has an incubation period of 6-72 hours (average 12-36h). Staph is much faster (2-4h)."
            },
            {
                text: "<b>Epi Curve:</b> The curve shows a log-normal distribution with a single peak.",
                question: "What does this curve shape imply?",
                options: ["Propagated outbreak", "Point source outbreak", "Continuous source", "Endemic disease"],
                answer: 1,
                feedback: "<b>Correct!</b> A single peak with a log-normal (steep up, gradual down) shape is characteristic of a Point Source outbreak."
            },
            {
                text: "<b>Outlier:</b> One case had onset 2 hours before the meal.",
                question: "How do you interpret this outlier?",
                options: ["The vehicle was served earlier", "This is likely the primary case (index) or a background case", "The incubation period is shorter than thought", "It proves the food wasn't the cause"],
                answer: 1,
                feedback: "<b>Correct!</b> A case occurring before the exposure is likely a background case (unrelated) or the index case who contaminated the food/environment."
            }
        ]
    },
    {
        id: "case4",
        title: "Case 4: The Basketball Game",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> Several students fell ill after a basketball game. You survey attendees.",
                question: "Data: Sick/Total (3/4) vs Not Sick/Total (3/4). What is the Risk Ratio?",
                options: ["2.0", "0.5", "1.0", "1.5"],
                answer: 2,
                feedback: "<b>Correct!</b> AR(exposed) = 75%, AR(unexposed) = 75%. RR = 0.75 / 0.75 = 1.0. The game is NOT the cause."
            },
            {
                text: "<b>Re-evaluation:</b> You look for other common exposures. All sick students ate at a specific concession stand.",
                question: "What is your next step?",
                options: ["Close the school", "Calculate AR for specific food items at the stand", "Test the water", "Interview the basketball players"],
                answer: 1,
                feedback: "<b>Correct!</b> You need to identify the specific vehicle. Calculate Attack Rates for each food item served at the stand."
            }
        ]
    },
    {
        id: "case5",
        title: "Case 5: The Picnic Salad",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> A potato salad is suspected in an outbreak. AR(eaten) = 80%, AR(not eaten) = 10%.",
                question: "Calculate the Relative Risk (RR).",
                options: ["8.0", "0.8", "7.0", "80%"],
                answer: 0,
                feedback: "<b>Correct!</b> RR = 80% / 10% = 8.0. This is a strong association."
            },
            {
                text: "<b>Context:</b> The salad was left out in the sun for 5 hours.",
                question: "What factor contributed most to this outbreak?",
                options: ["Acidic ingredients", "Temperature abuse", "Cross-contamination", "Improper cooking"],
                answer: 1,
                feedback: "<b>Correct!</b> Leaving food in the 'Danger Zone' (40-140°F) for >2 hours allows bacteria to multiply. This is Temperature Abuse."
            }
        ]
    },
    {
        id: "case6",
        title: "Case 6: The Swimming Pool",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> Kids report diarrhea after swimming. Cryptosporidium is suspected.",
                question: "Why is 'Crypto' a common pool pathogen?",
                options: ["It multiplies in water", "It is chlorine-resistant", "It is airborne", "It comes from algae"],
                answer: 1,
                feedback: "<b>Correct!</b> Cryptosporidium has a thick outer shell that makes it highly resistant to standard chlorine levels."
            },
            {
                text: "<b>Control:</b> The pool operator wants to shock the pool with chlorine.",
                question: "Is this sufficient?",
                options: ["Yes, standard shock works", "No, hyperchlorination is required for Crypto", "No, the pool must be drained", "Yes, if done overnight"],
                answer: 1,
                feedback: "<b>Correct!</b> Crypto requires Hyperchlorination (very high levels for long time) or UV treatment to kill. Standard shock is often not enough."
            }
        ]
    },
    {
        id: "case7",
        title: "Case 7: The Unknown Toxin",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Background:</b> Diners report numbness and tingling in lips after eating fish.",
                question: "What is the likely agent?",
                options: ["Scombroid", "Ciguatera", "Salmonella", "Norovirus"],
                answer: 1,
                feedback: "<b>Correct!</b> Numbness/tingling (paresthesia) and temperature reversal are classic signs of Ciguatera toxin from reef fish."
            },
            {
                text: "<b>Prevention:</b> The chef asks how to cook the fish to destroy the toxin.",
                question: "What do you tell them?",
                options: ["Cook to 165°F", "Freeze for 24 hours", "The toxin is heat-stable and cannot be destroyed", "Marinate in lime juice"],
                answer: 2,
                feedback: "<b>Correct!</b> Ciguatoxin is heat-stable. Cooking or freezing does NOT destroy it. Prevention relies on not eating large reef fish from risky areas."
            }
        ]
    },
    {
        id: "case8",
        title: "Case 8: The Camping Trip",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> Campers develop bloody diarrhea after drinking from a stream.",
                question: "Which pathogen is most likely?",
                options: ["Giardia", "E. coli O157:H7", "Norovirus", "Staph aureus"],
                answer: 1,
                feedback: "<b>Correct!</b> Bloody diarrhea (dysentery) is a hallmark of E. coli O157:H7 (or Shigella/Campylobacter). Giardia causes greasy, non-bloody stool."
            },
            {
                text: "<b>Treatment:</b> A parent wants to give antibiotics.",
                question: "Is this recommended for E. coli O157:H7?",
                options: ["Yes, immediately", "No, it increases risk of HUS", "Yes, but only penicillin", "No, it causes resistance"],
                answer: 1,
                feedback: "<b>Correct!</b> Antibiotics can increase the release of Shiga toxin, raising the risk of Hemolytic Uremic Syndrome (HUS). Supportive care is best."
            }
        ]
    },
    {
        id: "case9",
        title: "Case 9: The Daycare",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> Shigella outbreak in a daycare. Transmission is rapid.",
                question: "Why does Shigella spread so easily?",
                options: ["It is airborne", "It has a very low infectious dose", "It survives on dry surfaces for years", "It is vector-borne"],
                answer: 1,
                feedback: "<b>Correct!</b> Shigella has a very low infectious dose (10-100 bacteria), making person-to-person (fecal-oral) transmission very efficient."
            },
            {
                text: "<b>Control:</b> What is the most critical control measure?",
                question: "Select the best option.",
                options: ["Handwashing supervision", "Closing the kitchen", "Spraying for bugs", "Testing the water"],
                answer: 0,
                feedback: "<b>Correct!</b> Since it's fecal-oral and low dose, supervised Handwashing is the most effective intervention in a daycare setting."
            }
        ]
    },
    {
        id: "case10",
        title: "Case 10: The Cruise Ship",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> Hundreds of passengers vomit. The ship returns to port.",
                question: "What is the classic 'Cruise Ship Virus'?",
                options: ["Influenza", "Norovirus", "Rotavirus", "Adenovirus"],
                answer: 1,
                feedback: "<b>Correct!</b> Norovirus is the most common cause of outbreaks on cruise ships due to close quarters and environmental persistence."
            },
            {
                text: "<b>Cleanup:</b> The crew uses alcohol sanitizer.",
                question: "Is this effective for Norovirus?",
                options: ["Yes, highly effective", "No, Norovirus is resistant to alcohol", "Only if 90% alcohol", "Yes, if hands are dry"],
                answer: 1,
                feedback: "<b>Correct!</b> Norovirus is non-enveloped and resistant to alcohol. Bleach or soap and water (mechanical removal) are required."
            }
        ]
    },
    {
        id: "case11",
        title: "Case 11: The Farm Visit",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> Children visit a petting zoo. Some develop diarrhea and fever.",
                question: "What is a common zoonotic pathogen here?",
                options: ["Salmonella", "Hepatitis A", "Norovirus", "Measles"],
                answer: 0,
                feedback: "<b>Correct!</b> Salmonella (and E. coli, Campylobacter) are common in reptile/amphibian/poultry/livestock feces at petting zoos."
            },
            {
                text: "<b>Risk Factor:</b> One child ate a sandwich without washing hands.",
                question: "What mode of transmission is this?",
                options: ["Direct contact", "Indirect contact (Fecal-Oral)", "Vector-borne", "Airborne"],
                answer: 1,
                feedback: "<b>Correct!</b> This is Indirect Contact (Fecal-Oral) via hand-to-mouth transfer."
            }
        ]
    },
    {
        id: "case12",
        title: "Case 12: The Church Supper",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Background:</b> Canned green beans are served. People develop double vision and difficulty swallowing.",
                question: "This is a medical emergency. What is the disease?",
                options: ["Botulism", "Guillain-Barre", "Stroke", "Listeria"],
                answer: 0,
                feedback: "<b>Correct!</b> Double vision (diplopia), dysphagia, and descending paralysis are classic signs of Botulism neurotoxin."
            },
            {
                text: "<b>Mechanism:</b> How did the beans become dangerous?",
                question: "Select the cause.",
                options: ["Not cooked long enough", "Improper home canning (anaerobic environment)", "Left out too long", "Contaminated by flies"],
                answer: 1,
                feedback: "<b>Correct!</b> C. botulinum spores germinate in anaerobic (oxygen-free) environments like improper home canning, producing the toxin."
            }
        ]
    },
    {
        id: "case13",
        title: "Case 13: The Hospital Wing",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Background:</b> Patients with open wounds develop infections. MRSA is identified.",
                question: "What type of transmission is most likely?",
                options: ["Airborne via vents", "Contact via healthcare workers' hands", "Waterborne", "Foodborne"],
                answer: 1,
                feedback: "<b>Correct!</b> MRSA in hospitals is primarily spread via the hands of healthcare workers or contaminated equipment (fomites)."
            },
            {
                text: "<b>Intervention:</b> Rates remain high despite hand hygiene.",
                question: "What is the next level of precaution?",
                options: ["Contact Precautions (Gown/Glove)", "Airborne Precautions (N95)", "Droplet Precautions (Mask)", "Standard Precautions"],
                answer: 0,
                feedback: "<b>Correct!</b> Contact Precautions (Gowns and Gloves for all interactions) are necessary for MDROs like MRSA."
            }
        ]
    },
    {
        id: "case14",
        title: "Case 14: The Dormitory",
        difficulty: "Intermediate",
        steps: [
            {
                text: "<b>Background:</b> A college student has stiff neck, fever, and rash. Meningitis is suspected.",
                question: "What is the immediate public health action?",
                options: ["Wait for lab confirmation", "Prophylaxis for close contacts", "Quarantine the entire dorm", "Vaccinate everyone immediately"],
                answer: 1,
                feedback: "<b>Correct!</b> Bacterial meningitis is rapid and deadly. Chemoprophylaxis (antibiotics) for close contacts is urgent, even before final lab confirmation."
            },
            {
                text: "<b>Type:</b> The rash is petechial (non-blanching).",
                question: "This points to which pathogen?",
                options: ["Neisseria meningitidis", "Viral meningitis", "Fungal meningitis", "Tuberculosis"],
                answer: 0,
                feedback: "<b>Correct!</b> Meningococcal disease (Neisseria) causes the characteristic petechial/purpuric rash."
            }
        ]
    },
    {
        id: "case15",
        title: "Case 15: The Mosquito Bite",
        difficulty: "Beginner",
        steps: [
            {
                text: "<b>Background:</b> A traveler returns from the tropics with high fever and joint pain.",
                question: "Which vector is likely responsible?",
                options: ["Anopheles mosquito", "Aedes aegypti mosquito", "Tick", "Flea"],
                answer: 1,
                feedback: "<b>Correct!</b> Aedes mosquitoes carry Dengue, Chikungunya, and Zika, which cause fever and joint pain. Anopheles carries Malaria."
            },
            {
                text: "<b>Control:</b> How do we control Aedes mosquitoes?",
                question: "Select the best method.",
                options: ["Bed nets at night", "Eliminate standing water (containers)", "Spray forests", "Avoid animals"],
                answer: 1,
                feedback: "<b>Correct!</b> Aedes breed in small containers (tires, pots) around homes and bite during the day. Eliminating standing water is key. Bed nets help less since they are day-biters."
            }
        ]
    },
    {
        id: "case16",
        title: "Mastery Case: The National Nightmare",
        difficulty: "Advanced",
        steps: [
            {
                text: "<b>Data Cleaning:</b> You receive a line list for a wedding outbreak. <br>Case A: Onset 12:00 PM, Meal 2:00 PM.<br>Case B: Onset 6:00 PM, Meal 2:00 PM.<br>Case C: Onset 7:00 PM, Meal 2:00 PM.",
                question: "Which record should be excluded from analysis?",
                options: ["Case A", "Case B", "Case C", "None"],
                answer: 0,
                feedback: "<b>Correct!</b> Case A has an onset time <i>before</i> the exposure time. This is logically impossible for a foodborne outbreak and is likely a data entry error or a background case."
            },
            {
                text: "<b>Confounding Check:</b> You calculate the Crude OR for 'Beef' as 4.5. You suspect Gender is a confounder. You stratify by Gender.<br>Male OR = 1.2<br>Female OR = 1.1",
                question: "What does this suggest?",
                options: ["Effect Modification", "Confounding", "No Association", "Selection Bias"],
                answer: 1,
                feedback: "<b>Correct!</b> The stratum-specific ORs (1.2 and 1.1) are similar to each other but significantly different from the Crude OR (4.5). This is the definition of Confounding."
            },
            {
                text: "<b>Adjustment:</b> Since Confounding is present, the Crude OR is invalid.",
                question: "Which statistical method should you use to calculate the true association?",
                options: ["Chi-Square Test", "Mantel-Haenszel Adjusted OR", "Fisher's Exact Test", "T-Test"],
                answer: 1,
                feedback: "<b>Correct!</b> The Mantel-Haenszel method calculates a weighted average of the stratum-specific ORs to provide an Adjusted OR that removes the confounding effect."
            },
            {
                text: "<b>Bias Hunt:</b> You find that the 'Controls' were selected from a group of health-conscious gym members.",
                question: "What type of bias does this introduce?",
                options: ["Recall Bias", "Berkson's Bias", "Selection Bias (Healthy Worker)", "Information Bias"],
                answer: 2,
                feedback: "<b>Correct!</b> Selecting controls that are systematically different (healthier) from the general population or the case population introduces Selection Bias, specifically a variant of the Healthy Worker Effect."
            }
        ]
    }
];

window.CASE_SCENARIOS = CASE_SCENARIOS;

window.APPENDIX_DATA = {
    RULES: [
        ["Outbreak steps", ["#learning", "#cases", "#tools", "#quiz"],
            "<strong>The 10-Step Method:</strong> Mastery of the CDC's investigation sequence is critical. <br><br>1. Prepare<br>2. Verify Diagnosis<br>3. Confirm Outbreak<br>4. Case Definition<br>5. Descriptive Epi<br>6. Hypothesize<br>7. Test Hypothesis (Analytic)<br>8. Refine/Add Studies<br>9. Control Measures<br>10. Communicate Findings."],

        ["Study designs", ["#learning", "#quiz"],
            "<strong>Design Selection:</strong> Knowing which study fits the situation.<br><ul><li><strong>Cohort:</strong> Best for rare exposures. Calculates Relative Risk.</li><li><strong>Case-Control:</strong> Best for rare diseases or food/outbreaks. Calculates Odds Ratio.</li><li><strong>Cross-Sectional:</strong> Snapshot in time (Prevalence).</li></ul>"],

        ["Measures (AR, RR, OR, RD)", ["#tools", "#quiz", "#notesheet"],
            "<strong>Quantitative Epidemiology:</strong><br><ul><li><strong>Attack Rate:</strong> The percentage of an at-risk group that becomes ill.</li><li><strong>Relative Risk (RR):</strong> Risk in exposed / Risk in unexposed.</li><li><strong>Odds Ratio (OR):</strong> Odds of exposure in cases / Odds of exposure in controls.</li></ul>"],

        ["Epi curves/spot maps", ["#tools", "#cases", "#quiz"],
            "<strong>Descriptive Epi (Time & Place):</strong><br><ul><li><strong>Point Source:</strong> Single sharp peak, one incubation period.</li><li><strong>Propagated:</strong> Multiple peaks, growing waves, person-to-person spread.</li><li><strong>Spot Map:</strong> Geographic clustering of cases.</li></ul>"],

        ["Bias/confounding/EM", ["#learning", "#quiz"],
            "<strong>Systematic Errors:</strong><br><ul><li><strong>Selection Bias:</strong> Groups differ in ways other than exposure.</li><li><strong>Information Bias:</strong> Measurement error (Recall, Interviewer).</li><li><strong>Confounding:</strong> A third variable distorts the true association.</li></ul>"],

        ["Screening (Se/Sp, PPV, NPV)", ["#tools", "#quiz"],
            "<strong>test Validity:</strong><br><ul><li><strong>Sensitivity:</strong> Ability to identify positives (TP / All Sick).</li><li><strong>Specificity:</strong> Ability to identify negatives (TN / All Healthy).</li><li><strong>PPV:</strong> Probability a +test is actually sick.</li></ul>"],

        ["Control & prevention", ["#cases", "#learning"],
            "<strong>Public Health Action:</strong><br><ul><li><strong>Primary:</strong> Prevent before it happens (Vaccine).</li><li><strong>Secondary:</strong> catch it early (Screening).</li><li><strong>Tertiary:</strong> Treat/Rehab to prevent worsening.</li></ul>"],

        ["Communication/reporting", ["#learning"],
            "<strong>The Final Step:</strong> Communicating to stakeholders, ensuring privacy (HIPAA), and documenting findings for future reference."]
    ],
    BIASES: [
        ["Selection – Nonresponse", "Participants differ from nonparticipants", "Track response, weight, simplify sampling frame"],
        ["Selection – Healthy worker", "Employed groups look healthier", "Compare to appropriate worker referent"],
        ["Selection – Berkson", "Hospital cases/controls distort exposure", "Prefer population controls"],
        ["Survivorship", "Long-term survivors overrepresented", "Use inception cohorts"],
        ["Loss to follow-up", "Differential attrition", "Retention protocols; sensitivity analysis"],
        ["Recall", "Cases remember exposures better", "Use records; blinding; neutral prompts"],
        ["Interviewer", "Probing differs by status", "Training; blinding; scripts"],
        ["Misclassification – Non-diff", "Equal error in groups → bias to null", "Improve measurement; validation subsample"],
        ["Misclassification – Diff", "Error differs by group", "Standardize ascertainment; blinding"],
        ["Confounding", "Third variable distorts association", "Randomize, restrict, match, adjust, stratify"],
        ["Effect modification", "True heterogeneity", "Report stratum-specific; no adjustment"],
        ["Instrumentation", "Tool drift over time", "Calibration schedule"],
        ["Maturation", "Natural change over time", "Controls; interrupted time series"],
        ["History", "External events alter outcomes", "Document and adjust; ITS"],
        ["Regression to mean", "Extremes move toward mean", "Multiple baselines; controls"],
        ["Hawthorne", "Behavior changes when observed", "Run-in period; unobtrusive measures"],
        ["Placebo", "Expectations alter response", "Placebo control, blinding"],
        ["Contamination", "Controls receive intervention", "Cluster design; separation"],
        ["Carryover", "Prior period affects next", "Washout; parallel design"],
        ["Observer expectancy", "Coder expectations skew coding", "Double blinding; dual coding"],
        ["Publication", "Positive results overrepresented", "Pre-registration; report nulls"],
        ["Ecological", "Group-level effects misapplied to individuals", "Analyze at individual level"],
        ["Aggregation", "Combining heterogeneous groups hides truth", "Stratify; random effects"],
        ["Collinearity", "Predictors correlated", "Dimension reduction; penalization"],
        ["Overfitting", "Model captures noise", "Holdout/regularization"],
        ["Multiple testing", "Inflated Type I error", "Adjust alpha; pre-specify"],
        ["P-hacking", "Data dredging", "Analysis plan; transparency"],
        ["Outcome switching", "Change outcomes post-hoc", "Pre-register; version control"],
        ["Data leakage", "Train on test info", "Strict splits; audit"],
        ["Simpson’s paradox", "Trend reverses after stratification", "Stratify; causal diagrams"]
    ],
    MNEMS: [
        ["PVC-CDHACC", "Prepare, Verify, Case-def, Describe, Hypothesize, Analyze, Refine, Control, Communicate"],
        ["SPEC", "Sensitivity, PPV; Error types; Cutoffs"],
        ["METRIC", "Mean, Error, Trend, Rate, Incidence, CI"],
        ["CURVES", "Choose bin, Understand shape, Reconstruct exposure, Verify window, Explain spread, Summarize"],
        ["SNOUT", "Sensitivity => SeNsitive rules OUT (High sensitivity is good for ruling out disease)"],
        ["SPIN", "Specificity => SPecific rules IN (High specificity is good for ruling in disease)"],
        ["DDA", "Data, Design, Analysis (Triad of Epidemiology)"],
        ["RET EH", "Reservoir, Escape, Transmission, Entry, Host (Chain of Infection)"],
        ["P²STQ", "Population, Parameter, Sample, Statistic, Question (Stats Basics)"],
        ["FAIR", "Feasible, Ambitious, Imaginable, Relevant (Research Question)"]
    ],
    RESOURCES: [
        { title: "CDC Current Outbreak List", url: "https://www.cdc.gov/outbreaks/index.html", desc: "Real-time data on active US outbreaks." },
        { title: "Science Olympiad Official Site", url: "https://www.soinc.org/disease-detectives-b", desc: "Rules, clarifications, and official handouts." },
        { title: "WHO Disease Outbreak News", url: "https://www.who.int/emergencies/disease-outbreak-news", desc: "Global alerts and situation reports." },
        { title: "MMWR (Morbidity and Mortality Weekly Report)", url: "https://www.cdc.gov/mmwr/index.html", desc: "The 'Voice of CDC' - primary source for case studies." },
        { title: "Epiville (Columbia University)", url: "http://epiville.ccnmtl.columbia.edu/", desc: "Interactive simulations and learning modules." }
    ],
    flashcards: [
        { front: "Incidence", back: "New cases over a period of time / Population at risk" },
        { front: "Prevalence", back: "Existing cases at a point in time / Total population" },
        { front: "Attack Rate", back: "Ill / (Ill + Well) x 100" },
        { front: "Relative Risk (RR)", back: "[a/(a+b)] / [c/(c+d)]" },
        { front: "Odds Ratio (OR)", back: "(a*d) / (b*c)" },
        { front: "Sensitivity", back: "True Positives / (True Positives + False Negatives)" },
        { front: "Specificity", back: "True Negatives / (True Negatives + False Positives)" },
        { front: "Type I Error", back: "False Positive (Rejecting a true null hypothesis)" },
        { front: "Type II Error", back: "False Negative (Failing to reject a false null hypothesis)" },
        { front: "Confounding", back: "Distortion of association by a third variable related to both exposure and outcome" },
        { front: "Herd Immunity", back: "Resistance of a group to invasion and spread of an infectious agent" },
        { front: "R0 (Basic Reproduction Number)", back: "Average number of secondary cases produced by one case in a completely susceptible population" },
        { front: "Fomite", back: "Inanimate object that can transmit disease (e.g., doorknob)" },
        { front: "Vector", back: "Living organism that transmits disease (e.g., mosquito)" },
        { front: "Zoonosis", back: "Disease transmissible from animals to humans" },
        { front: "Endemic", back: "Constant presence of disease in a population" },
        { front: "Epidemic", back: "Disease occurrence in excess of normal expectancy" },
        { front: "Pandemic", back: "Epidemic occurring over a wide area (crossing international boundaries)" },
        { front: "Incubation Period", back: "Time from exposure to onset of symptoms" },
        { front: "Latent Period", back: "Time from infection to infectiousness" },
        { front: "Hippocrates", back: "First to attempt to explain disease occurrence from a rational rather than supernatural viewpoint (400 BC)" },
        { front: "John Graunt", back: "Published landmark analysis of mortality data in 1662; early vital statistics" },
        { front: "James Lind", back: "Designed first controlled experiment (1747) showing limes prevent scurvy" },
        { front: "Edward Jenner", back: "Developed smallpox vaccine using cowpox (1796)" },
        { front: "John Snow", back: "Father of Epidemiology; investigated cholera in London (1854) using spot maps" },
        { front: "Louis Pasteur", back: "Germ theory; developed vaccines for anthrax and rabies" },
        { front: "Robert Koch", back: "Formalized postulates to identify organisms with infectious diseases" },
        { front: "Joseph Goldberger", back: "Identified pellagra as a nutritional deficiency (1920)" },
        { front: "Mantel & Haenszel", back: "Developed statistical procedure for stratified analysis of case-control studies" },
        { front: "Doll & Hill", back: "Conducted landmark studies linking smoking to lung cancer (1950s)" },
        { front: "Wheel Model", back: "Places the host at the centre with physical, biologic and social environments around it" },
        { front: "Web of Causation", back: "Interconnected network of factors with no single necessary agent" },
        { front: "Rothman’s Causal Pie", back: "Component causes combine to form a sufficient cause (pie) that produces disease" },
        { front: "Healthy Worker Effect", back: "Bias where working populations appear healthier than the general population" },
        { front: "Length‑Time Bias", back: "Screening detects slower‑growing diseases more easily, making prognosis appear better" },
        { front: "Logistic Regression", back: "Multivariate model estimating adjusted odds ratios for binary outcomes" },
        { front: "Mantel-Haenszel OR", back: "Weighted average of strata-specific odds ratios to adjust for confounding" },
        { front: "Survival Analysis", back: "Statistics dealing with time-to-event data (e.g., Kaplan-Meier curves)" },
        { front: "IHR (2005)", back: "International Health Regulations: Legally binding framework for global health security" },
        { front: "Prion", back: "Abnormal protein that triggers other proteins to fold abnormally (e.g., CJD, Kuru)" },
        { front: "Analytic Epidemiology", back: "Study of determinants (Why/How); tests hypotheses" },
        { front: "Descriptive Epidemiology", back: "Study of distribution (Who/Where/When); generates hypotheses" },
        { front: "Vehicle", back: "Non-living intermediary that conveys agent (e.g. food, water, blood)" },
        { front: "Active Surveillance", back: "Health department solicits reports from providers (More expensive, accurate)" },
        { front: "Passive Surveillance", back: "Health department waits for reports (Cheaper, underreporting)" },
        { front: "Sentinel Surveillance", back: "Monitoring key sites to estimate wider trends" },
        { front: "Syndromic Surveillance", back: "Using pre-diagnosis data (e.g. OTC sales) for early warning" },
        { front: "Case Fatality Rate (CFR)", back: "Percentage of cases that result in death (Deaths / Cases)" },
        { front: "Crude Mortality Rate", back: "Total deaths / Total population (Not adjusted)" },
        { front: "Cause-Specific Rate", back: "Deaths from cause X / Total population" },
        { front: "Proportionate Mortality", back: "Deaths from cause X / Total Deaths" },
        { front: "Neonatal Mortality", back: "Deaths in first 28 days of life / Live births" },
        { front: "Infant Mortality", back: "Deaths in first year of life / Live births" },
        { front: "Maternal Mortality", back: "Maternal deaths / Live births" },
        { front: "Hyperendemic", back: "Disease constantly present at high incidence" },
        { front: "Holoendemic", back: "Prevalent disease affecting most children early in life (e.g. Malaria)" },
        { front: "Sporadic", back: "Occurring irregularly and infrequently" },
        { front: "Virulence", back: "Ability to cause SEVERE disease (Case Fatality Rate)" },
        { front: "Infectivity", back: "Ability to enter, survive, and multiply in host" },
        { front: "Pathogenicity", back: "Ability to cause CLINICAL disease (Symptoms)" }
    ],
    glossary: [
        { term: "Agent", definition: "A factor (microorganism, chemical, etc.) whose presence or absence is essential for disease." },
        { term: "Bias", definition: "Systematic deviation of results or inferences from the truth." },
        { term: "Carrier", definition: "Person or animal that harbors a specific infectious agent without discernible clinical disease." },
        { term: "Case-Control Study", definition: "Observational study comparing those with disease (cases) to those without (controls)." },
        { term: "Cluster", definition: "An aggregation of cases over a particular period closely grouped in time and space, regardless of whether the number is more than the expected number." },
        { term: "Cohort Study", definition: "Observational study comparing those exposed to a factor to those unexposed." },
        { term: "Cross-Sectional Study", definition: "Study examining the relationship between diseases and other variables at one point in time." },
        { term: "Epidemic", definition: "The occurrence of more cases of disease than expected in a given area or among a specific group of people over a particular period of time." },
        { term: "Epidemic Curve", definition: "Histogram showing the course of a disease outbreak or epidemic." },
        { term: "Fomite", definition: "An inanimate object that can be the vehicle for transmission of an infectious agent (e.g., bedding, towels, surgical instruments)." },
        { term: "Host", definition: "Person or other living animal that affords subsistence or lodgment to an infectious agent." },
        { term: "Incidence", definition: "A measure of the frequency with which a new case of illness occurs in a population over a period of time." },
        { term: "Index Case", definition: "The first case to come to the attention of the investigator." },
        { term: "Isolation", definition: "Separation of infected persons to prevent transmission." },
        { term: "Morbidity", definition: "Any departure, subjective or objective, from a state of physiological or psychological well-being." },
        { term: "Mortality Rate", definition: "A measure of the frequency of occurrence of death in a defined population." },
        { term: "Outbreak", definition: "Synonymous with epidemic, usually used for a more localized area." },
        { term: "Pandemic", definition: "An epidemic occurring over a very wide area (several countries or continents) and usually affecting a large proportion of the population." },
        { term: "Pathogenicity", definition: "The ability of an agent to cause disease." },
        { term: "Prevalence", definition: "The proportion of cases (new and existing) in a population at a given time." },
        { term: "Quarantine", definition: "Restriction of activities of well persons who have been exposed to a case." },
        { term: "Reservoir", definition: "Habitat in which the agent normally lives, grows, and multiplies." },
        { term: "Risk", definition: "The probability that an individual will be affected by, or die from, an illness or injury within a stated time or age span." },
        { term: "Risk Factor", definition: "Aspect of personal behavior or lifestyle, environmental exposure, or inborn/inherited characteristic associated with health conditions." },
        { term: "Surveillance", definition: "Systematic collection, analysis, interpretation, and dissemination of health data." },
        { term: "Transmission", definition: "Any mode or mechanism by which an infectious agent is spread." },
        { term: "Vector", definition: "An animate intermediary in the indirect transmission of an agent that carries the agent from a reservoir to a susceptible host." },
        { term: "Virulence", definition: "The ability of an infectious agent to cause severe disease." },
        { term: "Zoonosis", definition: "An infectious disease that is transmissible under natural conditions from vertebrate animals to humans." },
        { term: "Wheel Model", definition: "A causation model that emphasises the host at the centre of concentric rings representing physical, biologic and social environments." },
        { term: "Web of Causation", definition: "A representation of disease causation as a network of interconnected factors without a single necessary agent." },
        { term: "Causal Pie", definition: "A model where multiple component causes form a sufficient cause (pie) that produces disease when complete." },
        { term: "Healthy Worker Effect", definition: "A bias arising because employed populations tend to be healthier than the general population, potentially underestimating risk." },
        { term: "Length‑Time Bias", definition: "A bias introduced by screening when slowly progressing diseases are more likely to be detected than aggressive ones." },
        { term: "Logistic Regression", definition: "A statistical model used to estimate adjusted odds ratios for a binary outcome while controlling for multiple variables." },
        { term: "YPLL", definition: "Years of Potential Life Lost: Measure of premature mortality." },
        { term: "SMR", definition: "Standardized Mortality Ratio: Observed deaths / Expected deaths." },
        { term: "Age-Adjustment", definition: "Process to remove the effect of age differences when comparing rates." },
        { term: "Prion Disease", definition: "Disease caused by misfolded proteins (e.g. Mad Cow)." },
        { term: "Recency Bias", definition: "Tendency to weigh recent events more heavily." },
        { term: "Anchoring Bias", definition: "Tendency to rely too heavily on the first piece of information." },
        { term: "Analytic Epidemiology", definition: "Testing hypotheses about relationships (Determinants)." },
        { term: "Descriptive Epidemiology", definition: "Characterizing amount/distribution of disease (Person/Place/Time)." },
        { term: "Vehicle", definition: "Non-living intermediary (e.g. Food, Water, Biologics)." },
        { term: "Active Surveillance", definition: "Health dept contacts providers to solicit reports." },
        { term: "Passive Surveillance", definition: "Health dept waits for reports from providers." },
        { term: "Sentinel Surveillance", definition: "Monitoring key sites to infer general population health." },
        { term: "Syndromic Surveillance", definition: "Using pre-diagnostic data (ER visits, sales) for early warning." },
        { term: "Case Fatality Rate", definition: "Proportion of cases that result in death (Severity)." },
        { term: "Crude Rate", definition: "Summary rate based on actual number of events in total population." },
        { term: "Adjusted Rate", definition: "Rate statistically modified to remove effect of a confounder (e.g. Age)." },
        { term: "Hyperendemic", definition: "Disease present at consistently high levels." },
        { term: "Holoendemic", definition: "Disease affecting most of the population early in life." },
        { term: "Infant Mortality Rate", definition: "Deaths under 1 year of age per 1,000 live births." },
        { term: "Maternal Mortality Ratio", definition: "Maternal deaths per 100,000 live births." },
        { term: "Neonatal Mortality Rate", definition: "Deaths under 28 days of age per 1,000 live births." },
        { term: "Infectivity", definition: "Capacity to enter, survive, and multiply in a host." }
    ],
    FORMULAS: [
        { name: "Attack Rate (AR)", calc: "(Ill / Total Exposed) × 100", use: "% of group that became ill", category: "Frequency" },
        { name: "Relative Risk (RR)", calc: "[a/(a+b)] / [c/(c+d)]", use: "Cohort studies", category: "Association" },
        { name: "Odds Ratio (OR)", calc: "(a × d) / (b × c)", use: "Case-control studies", category: "Association" },
        { name: "Attributable Risk (AR)", calc: "I(exposed) - I(unexposed)", use: "Excess risk from exposure", category: "Impact" },
        { name: "AR% (Attributable Risk %)", calc: "[(RR - 1) / RR] × 100", use: "% of disease due to exposure", category: "Impact" },
        { name: "Vaccine Efficacy (VE)", calc: "[(AR(unvax) - AR(vax)) / AR(unvax)] × 100", use: "% reduction in disease", category: "Impact" },
        { name: "Sensitivity", calc: "a / (a + c)", use: "True positives / All sick", category: "Screening" },
        { name: "Specificity", calc: "d / (b + d)", use: "True negatives / All healthy", category: "Screening" },
        { name: "PPV (Positive Predictive Value)", calc: "a / (a + b)", use: "Probability positive test = sick", category: "Screening" },
        { name: "NPV (Negative Predictive Value)", calc: "d / (c + d)", use: "Probability negative test = healthy", category: "Screening" },
        { name: "Chi-Square", calc: "Σ [(O - E)² / E]", use: "Testing statistical significance", category: "Statistics" },
        { name: "Standard Error (RR)", calc: "√[(1/a) + (1/c) - (1/(a+b)) - (1/(c+d))]", use: "Confidence Intervals for RR", category: "Statistics" }
    ],
    TABLES: {
        chiSqure: {
            title: "Chi-Square Critical Values",
            headers: ["df", "p=0.10", "p=0.05", "p=0.01", "p=0.001"],
            rows: [
                [1, "2.706", "3.841", "6.635", "10.828"],
                [2, "4.605", "5.991", "9.210", "13.816"],
                [3, "6.251", "7.815", "11.345", "16.266"],
                [4, "7.779", "9.488", "13.277", "18.467"],
                [5, "9.236", "11.070", "15.086", "20.515"]
            ]
        },
        zTable: {
            title: "Common Z-Scores (Confidence Levels)",
            headers: ["Confidence Level", "Alpha (α)", "Z-Score (2-sided)"],
            rows: [
                ["90%", "0.10", "1.645"],
                ["95%", "0.05", "1.960"],
                ["99%", "0.01", "2.576"]
            ]
        }
    },
    DIAGNOSTIC: {
        metrics: [
            { name: "Sensitivity (TPR)", calc: "TP / (TP + FN)", desc: "Proportion of diseased people who test positive." },
            { name: "Specificity (TNR)", calc: "TN / (TN + FP)", desc: "Proportion of healthy people who test negative." },
            { name: "PPV", calc: "TP / (TP + FP)", desc: "Among positives, proportion who truly have disease." },
            { name: "NPV", calc: "TN / (TN + FN)", desc: "Among negatives, proportion who truly do not have disease." },
            { name: "Accuracy", calc: "(TP + TN) / Total", desc: "Overall correct classification rate." }
        ],
        checklist: [
            { category: "Foundation", items: ["Triad (Agent/Host/Env)", "Endemic vs Epidemic", "Surveillance Types"] },
            { category: "Math", items: ["2x2 Table Completion", "Sensitivity/Specificity Calc", "Epi Curve Interpretation"] }
        ]
    }
};

// console.log('[APPENDIX DATA] Loaded successfully');
// console.log('[APPENDIX DATA] Flashcards count:', window.APPENDIX_DATA.flashcards ? window.APPENDIX_DATA.flashcards.length : 0);
// console.log('[APPENDIX DATA] Glossary count:', window.APPENDIX_DATA.glossary ? window.APPENDIX_DATA.glossary.length : 0);

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

// Practice Exam Data derived from DD_PRACTICE.html
// Converted Matching questions to Multiple Choice for compatibility

const PRACTICE_EXAM_DATA = {
    "part1": [
        {
            "q": "What is the definition of 'Outbreak'?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "More cases of a particular disease than expected in a given area or among a specialized group of people over a particular period of time",
                "An aggregation of cases over a particular period closely grouped in time and space, regardless of whether the number is more than the expected number",
                "Large numbers of people over a wide geographical area affected",
                "An epidemic occurring over several countries or continents and affected a large proportion of the population"
            ],
            "explain": "Outbreak: more cases of a particular disease than expected in a given area (G)."
        },
        {
            "q": "What is 'Surveillance'?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "The systematic and ongoing collection, analysis, interpretation, and dissemination of health data",
                "Compare people with and without exposures to see what happens to each",
                "Compare people with and without disease to find common exposures",
                "The probability that an individual will be affected by, or die from, an illness or injury"
            ],
            "explain": "Surveillance: systematic and ongoing collection... of health data (H)."
        },
        {
            "q": "What defines a 'Pandemic'?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "An epidemic occurring over several countries or continents and affected a large proportion of the population",
                "Large numbers of people over a wide geographical area affected",
                "More cases of a particular disease than expected in a given area",
                "An aggregation of cases over a particular period closely grouped in time and space"
            ],
            "explain": "Pandemic: epidemic occurring over several countries or continents (I)."
        },
        {
            "q": "What is a 'Vector'?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "An animal that transmits disease",
                "A person or animal that harbors the infectious agent for a disease and can transmit it to others, but does not demonstrate signs of the disease",
                "Comparing people with and without exposures",
                "Systematic collection of health data"
            ],
            "explain": "Vector: an animal that transmits disease (J)."
        },
        {
            "q": "What is a 'Cohort' study?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "Compare people with and without exposures to see what happens to each",
                "Compare people with and without disease to find common exposures",
                "Systematic collection of health data",
                "Analysis of mortality data"
            ],
            "explain": "Cohort: compare people with and without exposures (A)."
        },
        {
            "q": "What is 'Risk'?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "The probability that an individual will be affected by, or die from, an illness or injury within a stated time or age span",
                "More cases of a particular disease than expected",
                "Large numbers of people over a wide geographical area affected",
                "An animal that transmits disease"
            ],
            "explain": "Risk: probability that an individual will be affected (F)."
        },
        {
            "q": "What is a 'Cluster'?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "An aggregation of cases over a particular period closely grouped in time and space, regardless of whether the number is more than the expected number",
                "More cases of a particular disease than expected in a given area",
                "An epidemic occurring over several countries or continents",
                "Large numbers of people over a wide geographical area affected"
            ],
            "explain": "Cluster: aggregation of cases... closely grouped in time and space (B)."
        },
        {
            "q": "What is a 'Carrier'?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "A person or animal that harbors the infectious agent for a disease and can transmit it to others, but does not demonstrate signs of the disease",
                "An animal that transmits disease",
                "A person who has recovered from the disease",
                "An individual who is immune to the disease"
            ],
            "explain": "Carrier: harbors agent... can transmit... does not demonstrate signs (D)."
        },
        {
            "q": "What is an 'Epidemic'?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "Large numbers of people over a wide geographical area affected",
                "More cases of a particular disease than expected in a given area",
                "An epidemic occurring over several countries or continents",
                "An aggregation of cases closely grouped in time and space"
            ],
            "explain": "Epidemic: large numbers of people over a wide geographical area affected (E). Note: Often defined similarly to Outbreak but usually implies larger scale."
        },
        {
            "q": "What is a 'Case-control' study?",
            "answer": 0,
            "type": "mc",
            "topic": "Practice Part 1",
            "options": [
                "Compare people with and without disease to find common exposures",
                "Compare people with and without exposures to see what happens to each",
                "Systematic collection of health data",
                "Analysis of mortality data"
            ],
            "explain": "Case-control: compare people with and without disease (C)."
        }
    ],
    "history": [
        {
            "q": "What was Pasteur's contribution?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Recognized bacterial cause & developed vaccine for anthrax",
                "Father of Epidemiology",
                "Developed small pox vaccine",
                "Formalized Standards (postulates)"
            ],
            "explain": "Pasteur: Recognized bacterial cause & developed vaccine for anthrax (G)."
        },
        {
            "q": "What was Hippocrates' contribution?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Attempted to explain disease as natural rather than supernatural (400 BC)",
                "Father of Epidemiology",
                "Published first epi text",
                "Developed statistical procedure"
            ],
            "explain": "Hippocrates: Attempted to explain disease as natural rather than supernatural (H)."
        },
        {
            "q": "What did Mantel & Haenszel do?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Developed statistical procedure for stratified analysis of case-control studies",
                "Published first epi text",
                "Designed study using control group in studying scurvy",
                "Published a landmark analysis of mortality data"
            ],
            "explain": "Mantel & Haenszel: Developed statistical procedure for stratified analysis (I)."
        },
        {
            "q": "What was Edward Jenner's contribution?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Developed small pox vaccine using cowpox",
                "Recognized bacterial cause & developed vaccine for anthrax",
                "Formalized Standards (postulates)",
                "Designed study using control group in studying scurvy"
            ],
            "explain": "Jenner: Developed small pox vaccine using cowpox (J)."
        },
        {
            "q": "What is John Snow known for?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Father of Epidemiology – tested hypothesis about cholera in London (1854)",
                "Published first epi text",
                "Attempted to explain disease as natural rather than supernatural",
                "Developed statistical procedure for stratified analysis"
            ],
            "explain": "John Snow: Father of Epidemiology (A)."
        },
        {
            "q": "What did James Lind do?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Designed study using control group in studying scurvy (limes)",
                "Developed small pox vaccine",
                "Published a descriptive field study showing origin of pellagra",
                "Recognized bacterial cause & developed vaccine for anthrax"
            ],
            "explain": "James Lind: Scurvy study with limes (F)."
        },
        {
            "q": "What was MacMahon's contribution?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Published first epi text with systematic focus on study design (1960)",
                "Published a landmark analysis of mortality data",
                "Developed statistical procedure for stratified analysis",
                "Attempted to explain disease as natural rather than supernatural"
            ],
            "explain": "MacMahon: Published first epi text (B)."
        },
        {
            "q": "What did John Graunt do?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Published a landmark analysis of mortality data in 1662",
                "Published first epi text",
                "Father of Epidemiology",
                "Designed study using control group in studying scurvy"
            ],
            "explain": "John Graunt: Analysis of mortality data (D)."
        },
        {
            "q": "What was Robert Koch's contribution?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Formalized Standards (postulates) to Identify organisms with Infectious Diseases",
                "Recognized bacterial cause & developed vaccine for anthrax",
                "Developed small pox vaccine",
                "Published a descriptive field study showing origin of pellagra"
            ],
            "explain": "Robert Koch: Koch's Postulates (E)."
        },
        {
            "q": "What did Goldberg do?",
            "answer": 0,
            "type": "mc",
            "topic": "History",
            "options": [
                "Published a descriptive field study showing origin of pellagra (1920)",
                "Designed study using control group in studying scurvy",
                "Developed statistical procedure for stratified analysis",
                "Published first epi text"
            ],
            "explain": "Goldberg: Pellagra study (C)."
        }
    ]
};

// Inject into global QUIZ_BANKS if available
if (typeof QUIZ_BANKS !== 'undefined') {
    QUIZ_BANKS["practice_exam"] = {
        "part1": PRACTICE_EXAM_DATA.part1,
        "history": PRACTICE_EXAM_DATA.history
    };
    // console.log("Practice Exam Data loaded into QUIZ_BANKS");
} else {
    console.warn("QUIZ_BANKS not defined. Practice Exam Data loaded as standalone.");
}

/**
 * Epidemic Engine - Interactive Scenarios Data
 * 20 scenarios covering Investigation, Math, Line Lists, and Graphs.
 */

window.SCENARIO_DB = {
    // --- CATEGORY 1: FIELD INVESTIGATION (5) ---
    'potluck': {
        title: "The Potluck Panic",
        category: "investigation",
        difficulty: "Beginner",
        description: "A community potluck ends in disaster. Can you identify the culprit dish?",
        nodes: {
            'start': {
                text: "Monday Morning. Mrs. Higgins reports 'everyone is throwing up' after yesterday's potluck.",
                choices: [
                    { text: "Ask for a list of foods served.", next: 'food_list', cost: 0, time: 1 },
                    { text: "Ask about symptoms and timing.", next: 'symptoms', cost: 0, time: 1 },
                    { text: "Send inspection team.", next: 'inspection', cost: 200, time: 4 }
                ]
            },
            'food_list': {
                text: "Menu: Potato Salad, BBQ Chicken, Coleslaw, Pudding. Chicken was 'pink'.",
                choices: [
                    { text: "Suspect Chicken (Salmonella?)", next: 'suspect_chicken', cost: 0, time: 0 },
                    { text: "Suspect Potato Salad (Staph?)", next: 'suspect_potato', cost: 0, time: 0 },
                    { text: "Ask about symptoms.", next: 'symptoms', cost: 0, time: 1 }
                ]
            },
            'symptoms': {
                text: "Started 3-4 hours after eating. Vomiting, cramps. No fever.",
                choices: [
                    { text: "Short incubation + Vomiting = Staph.", next: 'hypothesis_staph', cost: 0, time: 0 },
                    { text: "Short incubation + Vomiting = Norovirus.", next: 'hypothesis_noro', cost: 0, time: 0 },
                    { text: "Check Food List.", next: 'food_list', cost: 0, time: 1 }
                ]
            },
            'inspection': {
                text: "Kitchen clean. Potato Salad left out for 5 hours.",
                choices: [
                    { text: "Temp Abuse -> Staph.", next: 'hypothesis_staph', cost: 0, time: 0 },
                    { text: "Check Chicken logs.", next: 'chicken_logs', cost: 50, time: 1 }
                ]
            },
            'hypothesis_staph': {
                text: "Hypothesis: Staphylococcal food poisoning vs Potato Salad. Test?",
                choices: [
                    { text: "Test Salad (Confirm)", next: 'win', cost: 100, time: 2 },
                    { text: "Recall without test.", next: 'win_risky', cost: 0, time: 0 }
                ]
            },
            'win': {
                text: "VICTORY! Lab confirms Staph Enterotoxin. Recall issued.",
                end: true,
                win: true
            },
            'win_risky': {
                text: "VICTORY! You guessed right, but testing would have been safer.",
                end: true,
                win: true
            },
            'hypothesis_noro': { text: "Lab negative for Norovirus. You lost time.", end: true, win: false },
            'suspect_chicken': { text: "Chicken tested negative. It was the salad.", end: true, win: false },
            'suspect_potato': { text: "Good instinct. Why? (Go to Symptoms)", choices: [{ text: "Check symptoms", next: 'symptoms', cost: 0 }] },
            'chicken_logs': { text: "Chicken cooked to 165F. Safe.", choices: [{ text: "Back to inspection", next: 'inspection' }] }
        }
    },
    'wedding': {
        title: "The Wedding Crasher",
        category: "investigation",
        difficulty: "Intermediate",
        description: "Guests at a summer wedding fall ill. Was it the cake or the water?",
        nodes: {
            'start': {
                text: "50 of 100 guests ill. Vomiting/Diarrhea. Incubation 24-48h.",
                choices: [
                    { text: "Inspect the caterer.", next: 'caterer', cost: 50 },
                    { text: "Interview guests (Case-Control).", next: 'interview', cost: 20 }
                ]
            },
            'caterer': {
                text: "Caterer had a sick employee preparing salads.",
                choices: [
                    { text: "Close the kitchen.", next: 'close_kitchen', cost: 500 },
                    { text: "Wait for interviews.", next: 'interview', cost: 0 }
                ]
            },
            'interview': {
                text: "Salad eaters: OR = 12.0. Water drinkers: OR = 1.1. Cake eaters: OR = 0.9.",
                choices: [
                    { text: "Results implicate Salad.", next: 'win', cost: 0 },
                    { text: "Results implicate Water.", next: 'lose', cost: 0 }
                ]
            },
            'win': { text: "Correct. Norovirus via sick food handler in salad.", end: true, win: true },
            'lose': { text: "Incorrect. Stats point to Salad.", end: true, win: false },
            'close_kitchen': { text: "You stopped the outbreak, but interviews confirm Salad was the vector.", end: true, win: true }
        }
    },
    'cruise': {
        title: "The Cruise Ship Crisis",
        category: "investigation",
        difficulty: "Advanced",
        description: "Outbreak on the high seas. Is it the buffet or the air?",
        nodes: {
            'start': {
                text: "High attack rate on Deck 4. Vomiting. 200 cases.",
                choices: [
                    { text: "Quarantine cabins.", next: 'quarantine', cost: 1000 },
                    { text: "Sanitize high-touch surfaces.", next: 'sanitize', cost: 200 }
                ]
            },
            'quarantine': { text: "Cases slowing, but passengers furious.", choices: [{ text: "Analyze data", next: 'analyze' }] },
            'sanitize': { text: "Good first step for Noro.", choices: [{ text: "Analyze data", next: 'analyze' }] },
            'analyze': {
                text: "Curve suggests person-to-person propagation.",
                choices: [
                    { text: "Confirm Norovirus.", next: 'win' },
                    { text: "Suspect Legionella (Air/Water).", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Classic Cruise Noro.", end: true, win: true },
            'lose': { text: "Incorrect. Vomiting points to Noro, not Legionella (Pneumonia).", end: true, win: false }
        }
    },
    'zoo': {
        title: "The Petting Zoo",
        category: "investigation",
        difficulty: "Intermediate",
        description: "Children visiting a petting zoo develop bloody diarrhea.",
        nodes: {
            'start': {
                text: "Bloody diarrhea in 5 kids. HUS in 1. Visited 'Cuddly Farm'.",
                choices: [
                    { text: "Suspect Salmonella.", next: 'salm' },
                    { text: "Suspect E. coli O157.", next: 'ecoli' }
                ]
            },
            'salm': { text: "Poltry/Reptiles? Maybe. But HUS points elsewhere.", choices: [{ text: "Reconsider E. coli", next: 'ecoli' }] },
            'ecoli': {
                text: "Correct. HUS + Bloody Diarrhea = STEC.",
                choices: [
                    { text: "Close the petting zoo.", next: 'win' },
                    { text: "Recommend Antibiotics.", next: 'lose_abx' }
                ]
            },
            'win': { text: "Correct. Zoonotic transmission. Handwashing stations were empty.", end: true, win: true },
            'lose_abx': { text: "CRITICAL ERROR! Antibiotics increase HUS risk in STEC.", end: true, win: false }
        }
    },
    'hospital': {
        title: "The Hospital Wing",
        category: "investigation",
        difficulty: "Advanced",
        description: "Post-surgical infections spiking in Ward B.",
        nodes: {
            'start': {
                text: "Surgical site infections up 300%. MRSA suspected.",
                choices: [
                    { text: "Swab staff noses.", next: 'swab' },
                    { text: "Review sterilization logs.", next: 'logs' }
                ]
            },
            'swab': { text: "One surgeon is MRSA positive (Carrier).", choices: [{ text: "Decolonize surgeon.", next: 'win' }] },
            'logs': { text: "Equipment sterile. It's a person.", choices: [{ text: "Swab staff.", next: 'swab' }] },
            'win': { text: "Correct. Asymptomatic carrier identified.", end: true, win: true }
        }
    },

    // --- CATEGORY 2: CALCULATION DRILLS (5) ---
    'drill_ar_1': {
        title: "Drill: Attack Rate",
        category: "calc",
        difficulty: "Beginner",
        description: "Calculate the Attack Rate (AR).",
        nodes: {
            'start': {
                text: "At a picnic, 50 people ate potato salad. 20 got sick.<br>Calculate the Attack Rate.",
                choices: [
                    { text: "20%", next: 'lose' },
                    { text: "40%", next: 'win' },
                    { text: "50%", next: 'lose' },
                    { text: "2.5", next: 'lose' }
                ]
            },
            'win': { text: "Correct! 20 / 50 = 0.40 (40%).", end: true, win: true },
            'lose': { text: "Incorrect. AR = Sick / Total Exposed.", end: true, win: false }
        }
    },
    'drill_rr': {
        title: "Drill: Risk Ratio",
        category: "calc",
        difficulty: "Intermediate",
        description: "Calculate the Relative Risk (RR).",
        nodes: {
            'start': {
                text: "Exposed AR = 40%. Unexposed AR = 10%.<br>Calculate RR.",
                choices: [
                    { text: "30%", next: 'lose' },
                    { text: "4.0", next: 'win' },
                    { text: "0.25", next: 'lose' }
                ]
            },
            'win': { text: "Correct! RR = 40 / 10 = 4.0.", end: true, win: true },
            'lose': { text: "Incorrect. RR = AR(Exposed) / AR(Unexposed).", end: true, win: false }
        }
    },
    'drill_or': {
        title: "Drill: Odds Ratio",
        category: "calc",
        difficulty: "Intermediate",
        description: "Calculate the Odds Ratio (OR).",
        nodes: {
            'start': {
                text: "Case-Control: a=20, b=10, c=5, d=10.<br>Calculate OR (ad/bc).",
                choices: [
                    { text: "4.0", next: 'win' },
                    { text: "2.0", next: 'lose' },
                    { text: "0.5", next: 'lose' }
                ]
            },
            'win': { text: "Correct! (20*10) / (10*5) = 200 / 50 = 4.0.", end: true, win: true },
            'lose': { text: "Incorrect. Formula is ad/bc.", end: true, win: false }
        }
    },
    'drill_ve': {
        title: "Drill: Vaccine Efficacy",
        category: "calc",
        difficulty: "Advanced",
        description: "Calculate Vaccine Efficacy (VE).",
        nodes: {
            'start': {
                text: "AR(Unvax) = 20%. AR(Vax) = 5%.<br>Calculate VE.",
                choices: [
                    { text: "75%", next: 'win' },
                    { text: "15%", next: 'lose' },
                    { text: "25%", next: 'lose' }
                ]
            },
            'win': { text: "Correct! VE = (ARu - ARv)/ARu = (20-5)/20 = 15/20 = 75%.", end: true, win: true },
            'lose': { text: "Incorrect. Formula is (ARu - ARv) / ARu.", end: true, win: false }
        }
    },
    'drill_test': {
        title: "Drill: Sensitivity",
        category: "calc",
        difficulty: "Advanced",
        description: "Calculate Sensitivity.",
        nodes: {
            'start': {
                text: "100 actually sick people. Test detects 90. Misses 10.<br>Sensitivity?",
                choices: [
                    { text: "90%", next: 'win' },
                    { text: "10%", next: 'lose' },
                    { text: "100%", next: 'lose' }
                ]
            },
            'win': { text: "Correct! TP / (TP + FN) = 90 / 100 = 90%.", end: true, win: true },
            'lose': { text: "Incorrect. Sensitivity is ability to detect disease.", end: true, win: false }
        }
    },

    // --- CATEGORY 3: LINE LISTS (5) ---
    'll_index': {
        title: "Line List: Index Case",
        category: "linelist",
        difficulty: "Beginner",
        description: "Identify the index case from a list.",
        nodes: {
            'start': {
                text: "Case A: Onset Jan 1. Case B: Onset Jan 3. Case C: Onset Dec 28.<br>Who is likely the Index Case?",
                choices: [
                    { text: "Case A", next: 'lose' },
                    { text: "Case B", next: 'lose' },
                    { text: "Case C", next: 'win' }
                ]
            },
            'win': { text: "Correct. Earliest onset suggests Index.", end: true, win: true },
            'lose': { text: "Incorrect. Look for the earliest date.", end: true, win: false }
        }
    },
    'll_exclude': {
        title: "Line List: Case Def",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Who meets the case definition?",
        nodes: {
            'start': {
                text: "Def: Fever AND Rash.<br>Patient 1: Fever only.<br>Patient 2: Fever + Rash.<br>Patient 3: Rash only.<br>Who is a case?",
                choices: [
                    { text: "Patient 1", next: 'lose' },
                    { text: "Patient 2", next: 'win' },
                    { text: "Patient 3", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Meets both criteria.", end: true, win: true },
            'lose': { text: "Incorrect. Must meet full definition.", end: true, win: false }
        }
    },
    'll_outlier': {
        title: "Line List: Outlier",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Spot the data error.",
        nodes: {
            'start': {
                text: "Ages: 12, 13, 14, 120, 13.<br>Which is likely an error?",
                choices: [
                    { text: "120", next: 'win' },
                    { text: "14", next: 'lose' }
                ]
            },
            'win': { text: "Correct. 120 is likely a typo for 12 or 20 (or improbable age).", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    },
    'll_incubation': {
        title: "Line List: Incubation",
        category: "linelist",
        difficulty: "Advanced",
        description: "Calculate incubation period.",
        nodes: {
            'start': {
                text: "Exposure: Jan 1. Onset: Jan 5.<br>Incubation period?",
                choices: [
                    { text: "1 day", next: 'lose' },
                    { text: "4 days", next: 'win' },
                    { text: "5 days", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Jan 5 - Jan 1 = 4 days.", end: true, win: true },
            'lose': { text: "Incorrect. Count days between exposure and onset.", end: true, win: false }
        }
    },
    'll_map': {
        title: "Line List: Mapping",
        category: "linelist",
        difficulty: "Intermediate",
        description: "Visualize the data.",
        nodes: {
            'start': {
                text: "Most cases live on 'Broad St'. Map type?",
                choices: [
                    { text: "Spot Map", next: 'win' },
                    { text: "Epi Curve", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Spot maps show location.", end: true, win: true },
            'lose': { text: "Incorrect. Curves show time.", end: true, win: false }
        }
    },

    // --- CATEGORY 4: GRAPHS (5) ---
    'graph_point': {
        title: "Graph: Point Source",
        category: "graph",
        difficulty: "Beginner",
        description: "Identify the curve type.",
        nodes: {
            'start': {
                text: "Graph Description: Rapid rise to a sharp peak, then rapid decline. All within one incubation period.<br>Type?",
                choices: [
                    { text: "Point Source", next: 'win' },
                    { text: "Propagated", next: 'lose' },
                    { text: "Continuous", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Classic Point Source shape (log-normal).", end: true, win: true },
            'lose': { text: "Incorrect. Propagated has waves. Continuous is flat.", end: true, win: false }
        }
    },
    'graph_prop': {
        title: "Graph: Propagated",
        category: "graph",
        difficulty: "Intermediate",
        description: "Identify the curve type.",
        nodes: {
            'start': {
                text: "Graph Description: Series of progressively taller peaks, separated by incubation periods.<br>Type?",
                choices: [
                    { text: "Point Source", next: 'lose' },
                    { text: "Propagated", next: 'win' }
                ]
            },
            'win': { text: "Correct. Suggests person-to-person transmission.", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    },
    'graph_cont': {
        title: "Graph: Continuous",
        category: "graph",
        difficulty: "Intermediate",
        description: "Identify the curve type.",
        nodes: {
            'start': {
                text: "Graph Description: Rise to a plateau that persists for weeks.<br>Type?",
                choices: [
                    { text: "Point Source", next: 'lose' },
                    { text: "Continuous Common Source", next: 'win' }
                ]
            },
            'win': { text: "Correct. Constant exposure.", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    },
    'graph_outlier': {
        title: "Graph: Outlier",
        category: "graph",
        difficulty: "Advanced",
        description: "Identify the outlier.",
        nodes: {
            'start': {
                text: "Graph: Main peak Days 5-10. One case on Day 1.<br>What is the Day 1 case called?",
                choices: [
                    { text: "Index Case", next: 'win' },
                    { text: "Peak Case", next: 'lose' },
                    { text: "Last Case", next: 'lose' }
                ]
            },
            'win': { text: "Correct. The first case is the Index Case (or Primary Case).", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    },
    'graph_trend': {
        title: "Graph: Secular Trend",
        category: "graph",
        difficulty: "Advanced",
        description: "Long-term changes.",
        nodes: {
            'start': {
                text: "Graph: Data over 50 years showing steady decrease in Tb.<br>Type of trend?",
                choices: [
                    { text: "Seasonal", next: 'lose' },
                    { text: "Secular", next: 'win' },
                    { text: "Cyclical", next: 'lose' }
                ]
            },
            'win': { text: "Correct. Secular = Long term.", end: true, win: true },
            'lose': { text: "Incorrect.", end: true, win: false }
        }
    }
};

(function () {
    // console.log("Initializing MEGA Scenarios...");

    // -------------------------------------------------------------------------
    // MEGA SCENARIOS DATA (MC1 - MC10)
    // -------------------------------------------------------------------------
    const INTERACTIVE_CASES_DATA = [
        {
            id: "MC1",
            title: "The School Cafeteria Outbreak",
            difficulty: "Advanced",
            description: "A multi-day outbreak at a middle school requires comprehensive epidemiological investigation including attack rate calculations, curve analysis, and control measures.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Initial Report</h6><p>On Wednesday, the school nurse reports that 45 of 300 students who ate lunch on Monday developed nausea, vomiting, and diarrhea starting Tuesday morning. Most recovered within 24 hours.</p><p><strong>Calculate the Attack Rate.</strong></p>",
                    options: [
                        { text: "AR = 15%", feedback: "Correct! 45/300 × 100 = 15%", correct: true },
                        { text: "AR = 45%", feedback: "Incorrect. You need to divide cases by total exposed, not just count cases.", correct: false },
                        { text: "AR = 30%", feedback: "Incorrect. Check your calculation: 45/300.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Incubation Period</h6><p>Lunch was served Monday 12:00 PM. First case onset: Monday 11:00 PM (11 hours). Last case onset: Tuesday 2:00 PM (26 hours). Peak: Tuesday 8:00 AM (20 hours).</p><p><strong>Which pathogen fits this incubation period?</strong></p>",
                    options: [
                        { text: "Staphylococcus aureus (1-6 hours)", feedback: "Incorrect. Too short.", correct: false },
                        { text: "Norovirus (12-48 hours)", feedback: "Correct! The 11-26 hour range with peak at 20 hours fits Norovirus perfectly.", correct: true },
                        { text: "Salmonella (6-72 hours, median 12-36)", feedback: "Possible, but Norovirus is more likely given the short duration and vomiting prominence.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Food History</h6><p>Students who ate the chicken salad: 60 students, 40 ill (AR = 67%). Students who did NOT eat chicken salad: 240 students, 5 ill (AR = 2%).</p><p><strong>Calculate the Relative Risk (RR).</strong></p>",
                    options: [
                        { text: "RR = 33.5", feedback: "Correct! RR = 67% / 2% = 33.5. Students who ate chicken salad were 33.5 times more likely to get sick.", correct: true },
                        { text: "RR = 2.0", feedback: "Incorrect. You may have reversed the calculation.", correct: false },
                        { text: "RR = 0.67", feedback: "Incorrect. Check the formula: AR_exposed / AR_unexposed.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Control Measures</h6><p>Investigation reveals the chicken salad was left at room temperature for 3 hours before serving. A food handler was ill the previous week.</p><p><strong>What is the PRIMARY control measure?</strong></p>",
                    options: [
                        { text: "Close the school for deep cleaning", feedback: "Incorrect. Norovirus outbreak is over; this is excessive.", correct: false },
                        { text: "Exclude ill food handlers, enforce time/temperature controls, and educate staff on proper food handling", feedback: "Correct! Multi-pronged approach addresses the source and prevents recurrence.", correct: true },
                        { text: "Administer antibiotics to all students", feedback: "Incorrect. Norovirus is viral; antibiotics don't work.", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC2",
            title: "The Swimming Pool Cryptosporidiosis",
            difficulty: "Advanced",
            description: "A community pool outbreak requires understanding of chlorine-resistant pathogens, prolonged incubation periods, and environmental controls.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Pattern Recognition</h6><p>Over 2 weeks, 80 children who swam at a community pool developed watery diarrhea lasting 1-2 weeks. Onset ranged from 2-10 days after swimming, with most cases appearing 7 days post-exposure.</p><p><strong>What type of outbreak curve would you expect?</strong></p>",
                    options: [
                        { text: "Point Source (sharp peak)", feedback: "Incorrect. The wide range (2-10 days) suggests continuous exposure.", correct: false },
                        { text: "Continuous Common Source (plateau)", feedback: "Correct! Continuous exposure over 2 weeks with a long incubation period creates a plateau pattern.", correct: true },
                        { text: "Propagated (successive waves)", feedback: "Incorrect. Cryptosporidium is waterborne, not person-to-person in this context.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Agent Identification</h6><p>Stool samples show oocysts. The pathogen is resistant to standard chlorine levels. Incubation: 2-10 days (median 7). Duration: 1-2 weeks.</p><p><strong>What is the most likely agent?</strong></p>",
                    options: [
                        { text: "Giardia lamblia", feedback: "Incorrect. Giardia has a longer incubation (1-3 weeks).", correct: false },
                        { text: "Cryptosporidium parvum", feedback: "Correct! Chlorine-resistant, 2-10 day incubation, prolonged diarrhea, and oocysts all point to Crypto.", correct: true },
                        { text: "E. coli O157:H7", feedback: "Incorrect. E. coli is chlorine-sensitive and has shorter incubation.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Attack Rate Calculation</h6><p>Pool attendance records show 400 children swam during the 2-week period. 80 became ill.</p><p><strong>What is the attack rate?</strong></p>",
                    options: [
                        { text: "AR = 20%", feedback: "Correct! 80/400 × 100 = 20%", correct: true },
                        { text: "AR = 25%", feedback: "Incorrect. Recheck: 80/400.", correct: false },
                        { text: "AR = 80%", feedback: "Incorrect. You forgot to divide by total exposed.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Control Measures</h6><p>Standard chlorination failed. What is the MOST effective control?</p>",
                    options: [
                        { text: "Increase chlorine to maximum levels", feedback: "Incorrect. Cryptosporidium is chlorine-resistant even at high levels.", correct: false },
                        { text: "Close pool, hyperchlorinate or use UV treatment, enforce 'no swimming when ill' policy, and improve filtration", feedback: "Correct! Comprehensive approach: UV kills Crypto, policy prevents contamination, filtration removes oocysts.", correct: true },
                        { text: "Ban children under 5 from the pool", feedback: "Incorrect. This doesn't address the contamination source.", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC3",
            title: "The Restaurant Hepatitis A Cluster",
            difficulty: "Advanced",
            description: "A foodborne hepatitis A outbreak with a long incubation period requires understanding of case definitions, secondary transmission, and vaccination strategies.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Case Definition</h6><p>15 patrons of a restaurant developed jaundice, dark urine, and elevated liver enzymes 28-35 days after dining. All tested positive for Hepatitis A IgM.</p><p><strong>What case classification applies?</strong></p>",
                    options: [
                        { text: "Probable cases (clinical symptoms only)", feedback: "Incorrect. They have lab confirmation.", correct: false },
                        { text: "Confirmed cases (clinical + lab confirmation)", feedback: "Correct! Symptoms + positive IgM = confirmed Hepatitis A.", correct: true },
                        { text: "Suspected cases (exposure only)", feedback: "Incorrect. They have both symptoms and lab confirmation.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Source Investigation</h6><p>A food handler tested positive for Hepatitis A. They worked while symptomatic (jaundice) for 3 days before being sent home. They handled ready-to-eat foods without gloves.</p><p><strong>What is the mode of transmission?</strong></p>",
                    options: [
                        { text: "Airborne", feedback: "Incorrect. Hepatitis A is fecal-oral.", correct: false },
                        { text: "Fecal-oral (contaminated food)", feedback: "Correct! Food handler with poor hand hygiene contaminated food.", correct: true },
                        { text: "Bloodborne", feedback: "Incorrect. While Hep A is in blood, transmission here was via contaminated food.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Secondary Transmission Risk</h6><p>Hepatitis A incubation: 15-50 days (average 28). Infectious period: 2 weeks before to 1 week after jaundice onset.</p><p><strong>What is the risk of secondary household transmission?</strong></p>",
                    options: [
                        { text: "Low - Hepatitis A is not contagious person-to-person", feedback: "Incorrect. Hep A IS contagious person-to-person via fecal-oral route.", correct: false },
                        { text: "High - Close contacts are at risk, especially if hygiene is poor", feedback: "Correct! Household members can be infected through shared bathrooms, poor handwashing.", correct: true },
                        { text: "Moderate - Only if blood contact occurs", feedback: "Incorrect. Fecal-oral is the primary route, not blood.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>200 patrons ate at the restaurant during the food handler's infectious period. Most are now past the 2-week window for immune globulin.</p><p><strong>What is the best intervention?</strong></p>",
                    options: [
                        { text: "Hepatitis A vaccine for all exposed patrons (even if >2 weeks post-exposure)", feedback: "Correct! Vaccine can still provide protection and prevent future exposure. Also educate on symptoms and hygiene.", correct: true },
                        { text: "Immune globulin only (even though window passed)", feedback: "Incorrect. IG is only effective within 2 weeks. Vaccine is better at this point.", correct: false },
                        { text: "No intervention needed - too late", feedback: "Incorrect. Vaccine can still help and prevents future infections.", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC4",
            title: "The Legionnaires' Disease Hotel Outbreak",
            difficulty: "Advanced",
            description: "An environmental outbreak requiring understanding of aerosol transmission, environmental sampling, and engineering controls.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Clinical Presentation</h6><p>12 hotel guests developed severe pneumonia 2-10 days after staying at the hotel. All required hospitalization. Urine antigen tests confirmed Legionella pneumophila.</p><p><strong>What is the most likely source?</strong></p>",
                    options: [
                        { text: "Person-to-person transmission from an ill guest", feedback: "Incorrect. Legionnaires' disease is NOT transmitted person-to-person.", correct: false },
                        { text: "Contaminated water system (cooling towers, hot tubs, showers)", feedback: "Correct! Legionella grows in warm water systems and spreads via aerosols.", correct: true },
                        { text: "Contaminated food in the hotel restaurant", feedback: "Incorrect. Legionella is waterborne/airborne, not foodborne.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Environmental Investigation</h6><p>Water samples from the hotel's cooling tower, hot tub, and shower heads are collected. Which is MOST likely to be positive?</p>",
                    options: [
                        { text: "Cooling tower", feedback: "Correct! Cooling towers are the #1 source of Legionnaires' outbreaks due to aerosolization and ideal growth temperature (25-42°C).", correct: true },
                        { text: "Cold water tap", feedback: "Incorrect. Legionella prefers warm water (25-42°C).", correct: false },
                        { text: "Swimming pool (chlorinated)", feedback: "Incorrect. Proper chlorination kills Legionella.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Attack Rate</h6><p>500 guests stayed at the hotel during the exposure period. 12 developed Legionnaires' disease.</p><p><strong>Calculate the attack rate.</strong></p>",
                    options: [
                        { text: "AR = 2.4%", feedback: "Correct! 12/500 × 100 = 2.4%", correct: true },
                        { text: "AR = 12%", feedback: "Incorrect. You forgot to divide by total exposed.", correct: false },
                        { text: "AR = 0.24%", feedback: "Incorrect. Check your percentage calculation.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Control Measures</h6><p>What is the PRIMARY engineering control for Legionella in water systems?</p>",
                    options: [
                        { text: "Antibiotics in the water supply", feedback: "Incorrect. This is not practical or safe.", correct: false },
                        { text: "Superheat water to >60°C and flush system, maintain hot water >50°C and cold <20°C, regular cleaning/disinfection of cooling towers", feedback: "Correct! Temperature control and maintenance are key engineering controls.", correct: true },
                        { text: "Close the hotel permanently", feedback: "Incorrect. Proper remediation can eliminate the risk.", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC5",
            title: "The Daycare E. coli O157:H7 Outbreak",
            difficulty: "Advanced",
            description: "A person-to-person outbreak in a daycare requiring understanding of HUS complications, exclusion policies, and secondary attack rates.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Index Case</h6><p>A 3-year-old develops bloody diarrhea after a petting zoo visit. Stool culture: E. coli O157:H7. The child attends daycare.</p><p><strong>What is the IMMEDIATE action?</strong></p>",
                    options: [
                        { text: "Wait for more cases before acting", feedback: "Incorrect. E. coli O157:H7 is highly dangerous; immediate action is needed.", correct: false },
                        { text: "Exclude the child from daycare immediately, notify parents of all children, and begin active surveillance", feedback: "Correct! Rapid exclusion prevents secondary transmission. E. coli O157:H7 can cause HUS (hemolytic uremic syndrome).", correct: true },
                        { text: "Prescribe antibiotics to all daycare children", feedback: "Incorrect. Antibiotics may INCREASE HUS risk in E. coli O157:H7.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Secondary Cases</h6><p>Over the next week, 5 more children (out of 30 total) develop diarrhea. All test positive for E. coli O157:H7. None visited the petting zoo.</p><p><strong>What is the secondary attack rate?</strong></p>",
                    options: [
                        { text: "SAR = 17.2%", feedback: "Correct! 5 secondary cases / 29 susceptible contacts × 100 = 17.2%", correct: true },
                        { text: "SAR = 16.7%", feedback: "Incorrect. Don't include the index case in the denominator.", correct: false },
                        { text: "SAR = 20%", feedback: "Incorrect. Check your calculation: 5/29.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: HUS Complication</h6><p>One child develops hemolytic uremic syndrome (HUS): hemolytic anemia, thrombocytopenia, and acute kidney injury.</p><p><strong>What percentage of E. coli O157:H7 cases develop HUS?</strong></p>",
                    options: [
                        { text: "5-10%", feedback: "Correct! About 5-10% of E. coli O157:H7 cases progress to HUS, especially in young children.", correct: true },
                        { text: "50%", feedback: "Incorrect. HUS is serious but not that common.", correct: false },
                        { text: "<1%", feedback: "Incorrect. HUS is more common than this in E. coli O157:H7.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Return-to-Daycare Criteria</h6><p>When can an infected child return to daycare?</p>",
                    options: [
                        { text: "After symptoms resolve (no diarrhea for 24 hours)", feedback: "Incorrect. Children can still shed bacteria after symptoms resolve.", correct: false },
                        { text: "After 2 consecutive negative stool cultures, at least 24 hours apart, after diarrhea resolves", feedback: "Correct! This ensures the child is no longer shedding E. coli O157:H7.", correct: true },
                        { text: "After completing a course of antibiotics", feedback: "Incorrect. Antibiotics are NOT recommended for E. coli O157:H7 (may increase HUS risk).", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC6",
            title: "The Measles School Outbreak",
            difficulty: "Advanced",
            description: "A highly contagious airborne outbreak requiring understanding of R0, herd immunity, and vaccination strategies.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Index Case</h6><p>An unvaccinated 12-year-old returns from international travel with fever, cough, and a rash. Diagnosed with measles. The student attended school for 2 days while infectious.</p><p><strong>What is measles' basic reproduction number (R0)?</strong></p>",
                    options: [
                        { text: "R0 = 2-3 (like flu)", feedback: "Incorrect. Measles is MUCH more contagious.", correct: false },
                        { text: "R0 = 12-18 (one of the most contagious diseases)", feedback: "Correct! Measles R0 is 12-18, meaning one case can infect 12-18 susceptible people.", correct: true },
                        { text: "R0 = 5-7 (like chickenpox)", feedback: "Incorrect. Measles is more contagious than chickenpox.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Exposure Assessment</h6><p>The school has 500 students. Vaccination records show 450 are fully vaccinated (2 doses MMR), 30 have 1 dose, and 20 are unvaccinated.</p><p><strong>How many students are susceptible?</strong></p>",
                    options: [
                        { text: "50 students (1 dose + unvaccinated)", feedback: "Correct! 30 with 1 dose + 20 unvaccinated = 50 susceptible. 2 doses = 97% effective.", correct: true },
                        { text: "20 students (only unvaccinated)", feedback: "Incorrect. Students with only 1 dose are also at risk (1 dose = ~93% effective).", correct: false },
                        { text: "500 students (everyone)", feedback: "Incorrect. Vaccinated students have protection.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Herd Immunity Threshold</h6><p>To achieve herd immunity for measles (R0 = 15), what percentage of the population must be immune?</p><p>Formula: HIT = (1 - 1/R0) × 100</p>",
                    options: [
                        { text: "93-95%", feedback: "Correct! HIT = (1 - 1/15) × 100 = 93.3%. This is why measles outbreaks occur when vaccination rates drop below 95%.", correct: true },
                        { text: "70-80%", feedback: "Incorrect. This works for less contagious diseases, but measles needs higher coverage.", correct: false },
                        { text: "50%", feedback: "Incorrect. Much too low for measles.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>Unvaccinated students were exposed 3 days ago. What is the best intervention?</p>",
                    options: [
                        { text: "MMR vaccine within 72 hours of exposure", feedback: "Correct! MMR vaccine within 72 hours can prevent or modify disease. After 72 hours, use immune globulin for high-risk individuals.", correct: true },
                        { text: "Antibiotics", feedback: "Incorrect. Measles is viral; antibiotics don't work.", correct: false },
                        { text: "Quarantine only, no medical intervention", feedback: "Incorrect. Vaccine can still help if given quickly.", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC7",
            title: "The Nursing Home Influenza Outbreak",
            difficulty: "Advanced",
            description: "A respiratory outbreak in a vulnerable population requiring understanding of vaccine effectiveness, antiviral prophylaxis, and cohorting.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Outbreak Recognition</h6><p>A nursing home with 100 residents reports 15 cases of fever, cough, and myalgia over 3 days. Rapid flu tests: positive for Influenza A.</p><p><strong>What is the attack rate so far?</strong></p>",
                    options: [
                        { text: "AR = 15%", feedback: "Correct! 15/100 × 100 = 15%. But this will likely increase as the outbreak progresses.", correct: true },
                        { text: "AR = 30%", feedback: "Incorrect. Currently 15 cases out of 100.", correct: false },
                        { text: "AR = 5%", feedback: "Incorrect. Check your calculation.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Vaccination Status</h6><p>Records show 80 residents received flu vaccine this season. Of the 15 ill residents, 10 were vaccinated and 5 were not.</p><p><strong>Calculate Vaccine Effectiveness (VE).</strong></p><p>VE = (ARu - ARv) / ARu × 100</p>",
                    options: [
                        { text: "VE = 37.5%", feedback: "Correct! ARu = 5/20 = 25%. ARv = 10/80 = 12.5%. VE = (25-12.5)/25 × 100 = 50%. Wait, let me recalculate... ARu=25%, ARv=12.5%, VE=(0.25-0.125)/0.25=0.5=50%.", correct: false },
                        { text: "VE = 50%", feedback: "Correct! ARu = 25%, ARv = 12.5%, VE = (25-12.5)/25 × 100 = 50%", correct: true },
                        { text: "VE = 75%", feedback: "Incorrect. Recheck the formula and calculations.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Antiviral Prophylaxis</h6><p>The outbreak is ongoing. What is the recommendation for uninfected residents?</p>",
                    options: [
                        { text: "No intervention - let it run its course", feedback: "Incorrect. Elderly residents are at high risk for complications.", correct: false },
                        { text: "Antiviral prophylaxis (oseltamivir) for all uninfected residents, especially unvaccinated", feedback: "Correct! Prophylactic antivirals can prevent infection during an outbreak in high-risk settings.", correct: true },
                        { text: "Antibiotics for all residents", feedback: "Incorrect. Influenza is viral; antibiotics don't work (unless treating secondary bacterial pneumonia).", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Infection Control</h6><p>What is the MOST important infection control measure?</p>",
                    options: [
                        { text: "Cohort ill residents together, use droplet precautions, restrict admissions/transfers, vaccinate staff", feedback: "Correct! Multi-pronged approach: cohorting prevents spread, droplet precautions protect staff, vaccination protects everyone.", correct: true },
                        { text: "Airborne isolation for all residents", feedback: "Incorrect. Influenza is droplet, not airborne (except during aerosol-generating procedures).", correct: false },
                        { text: "Close the facility to all visitors", feedback: "Partially correct but not sufficient. Need cohorting and precautions.", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC8",
            title: "The Salmonella Turtle-Associated Outbreak",
            difficulty: "Advanced",
            description: "A multi-state zoonotic outbreak requiring understanding of case-control studies, odds ratios, and public health messaging.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Multi-State Pattern</h6><p>CDC receives reports of Salmonella infections in children across 15 states. All isolates have the same PFGE pattern (genetic fingerprint).</p><p><strong>What does the identical PFGE pattern suggest?</strong></p>",
                    options: [
                        { text: "Unrelated sporadic cases", feedback: "Incorrect. Identical PFGE patterns indicate a common source.", correct: false },
                        { text: "A common source outbreak (same contaminated product/animal)", feedback: "Correct! PFGE (pulsed-field gel electrophoresis) matching indicates cases are related.", correct: true },
                        { text: "Person-to-person transmission chain", feedback: "Incorrect. While possible, the multi-state distribution suggests a distributed product.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Case-Control Study</h6><p>A case-control study is conducted. Cases: 50 ill children. Controls: 100 healthy children matched by age and location.</p><p>Exposure to pet turtles: Cases = 40 exposed, 10 not. Controls = 20 exposed, 80 not.</p><p><strong>Calculate the Odds Ratio (OR).</strong></p>",
                    options: [
                        { text: "OR = 16", feedback: "Correct! OR = (40×80)/(10×20) = 3200/200 = 16. Children with turtles had 16 times the odds of infection.", correct: true },
                        { text: "OR = 4", feedback: "Incorrect. Recheck your calculation: (a×d)/(b×c).", correct: false },
                        { text: "OR = 2", feedback: "Incorrect. Check the 2×2 table setup.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Biological Plausibility</h6><p>Why are small turtles (<4 inches) a Salmonella risk?</p>",
                    options: [
                        { text: "Small turtles are more likely to bite", feedback: "Incorrect. The risk is not from bites.", correct: false },
                        { text: "Small turtles naturally carry Salmonella in their intestines and on their shells; children often put them in their mouths", feedback: "Correct! Reptiles are natural Salmonella carriers. Small turtles are mouthing hazards for young children.", correct: true },
                        { text: "Small turtles are fed contaminated food", feedback: "Incorrect. Turtles naturally carry Salmonella.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Public Health Action</h6><p>What is the appropriate public health response?</p>",
                    options: [
                        { text: "Ban on sale of turtles <4 inches (already exists via FDA), public education on reptile-associated Salmonella, hand hygiene messaging", feedback: "Correct! The FDA banned small turtle sales in 1975, but illegal sales continue. Education is key.", correct: true },
                        { text: "Mandatory Salmonella testing of all pet turtles", feedback: "Incorrect. Not practical; turtles shed Salmonella intermittently.", correct: false },
                        { text: "Antibiotics for all turtle owners", feedback: "Incorrect. Prophylactic antibiotics are not indicated.", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC9",
            title: "The Listeria Cantaloupe Outbreak",
            difficulty: "Advanced",
            description: "A deadly foodborne outbreak requiring understanding of high-risk populations, long incubation periods, and food recalls.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: High-Risk Population</h6><p>33 cases of listeriosis are reported across 12 states. 30 patients are pregnant women, elderly (>65), or immunocompromised. 7 deaths occur.</p><p><strong>What is the case-fatality rate?</strong></p>",
                    options: [
                        { text: "CFR = 21.2%", feedback: "Correct! 7 deaths / 33 cases × 100 = 21.2%. Listeria has one of the highest CFRs of foodborne pathogens.", correct: true },
                        { text: "CFR = 7%", feedback: "Incorrect. You calculated deaths as a percentage of the population, not cases.", correct: false },
                        { text: "CFR = 33%", feedback: "Incorrect. Recheck: 7/33.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Incubation Period</h6><p>Listeria has an unusually long incubation period: 1-4 weeks (can be up to 70 days for invasive disease).</p><p><strong>Why does this complicate outbreak investigation?</strong></p>",
                    options: [
                        { text: "Patients may not remember what they ate weeks ago; contaminated food may be gone", feedback: "Correct! Long incubation makes recall difficult and food may be consumed/discarded.", correct: true },
                        { text: "It doesn't complicate investigation", feedback: "Incorrect. Long incubation is a major challenge.", correct: false },
                        { text: "Patients are no longer infectious", feedback: "Incorrect. Listeria is foodborne, not person-to-person anyway.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Source Identification</h6><p>Whole genome sequencing (WGS) links all cases. Traceback investigation identifies cantaloupes from a single farm.</p><p><strong>Why are cantaloupes a Listeria risk?</strong></p>",
                    options: [
                        { text: "Netted rind can harbor bacteria; often eaten without cooking; can be contaminated by soil", feedback: "Correct! The rough rind traps bacteria, and cantaloupes are eaten raw. Listeria can grow at refrigerator temperatures.", correct: true },
                        { text: "Cantaloupes are acidic", feedback: "Incorrect. Cantaloupes are not particularly acidic, and Listeria can tolerate some acidity.", correct: false },
                        { text: "Cantaloupes are always contaminated", feedback: "Incorrect. Contamination is from poor agricultural/packing practices.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Recall and Prevention</h6><p>What is the appropriate action?</p>",
                    options: [
                        { text: "Voluntary recall of implicated cantaloupes, public warning to high-risk groups, investigation of farm practices (sanitation, water sources)", feedback: "Correct! Recall removes product, warning protects vulnerable populations, farm investigation prevents recurrence.", correct: true },
                        { text: "Ban all cantaloupe sales nationwide", feedback: "Incorrect. Only implicated farm's products need recall.", correct: false },
                        { text: "Antibiotics for all cantaloupe consumers", feedback: "Incorrect. Prophylactic antibiotics not indicated.", correct: false }
                    ]
                }
            ]
        },
        {
            id: "MC10",
            title: "The Pertussis Daycare Outbreak",
            difficulty: "Advanced",
            description: "A vaccine-preventable disease outbreak requiring understanding of waning immunity, cocooning strategy, and antibiotic prophylaxis.",
            steps: [
                {
                    id: "step1",
                    text: "<h6>Step 1: Index Case</h6><p>A 2-month-old infant (too young for full vaccination) develops severe coughing fits (paroxysms) with inspiratory 'whoop' and post-tussive vomiting. PCR confirms Bordetella pertussis.</p><p><strong>Why are young infants at highest risk for severe pertussis?</strong></p>",
                    options: [
                        { text: "They have no maternal antibodies", feedback: "Partially correct, but the main issue is lack of vaccination.", correct: false },
                        { text: "They are too young to be fully vaccinated (DTaP series starts at 2 months) and have the highest risk of complications (apnea, pneumonia, death)", feedback: "Correct! Infants <6 months are most vulnerable; they haven't completed the primary series.", correct: true },
                        { text: "Their immune systems are overactive", feedback: "Incorrect. The opposite is true.", correct: false }
                    ]
                },
                {
                    id: "step2",
                    text: "<h6>Step 2: Source Investigation</h6><p>The infant's 8-year-old sibling attends daycare and has had a mild cough for 3 weeks. PCR: positive for pertussis. The sibling was fully vaccinated as an infant but hasn't had a booster.</p><p><strong>What does this demonstrate?</strong></p>",
                    options: [
                        { text: "Vaccine failure (vaccine doesn't work)", feedback: "Incorrect. The vaccine works but immunity wanes over time.", correct: false },
                        { text: "Waning immunity - pertussis vaccine protection decreases over time, requiring boosters (Tdap at age 11-12)", feedback: "Correct! Pertussis immunity wanes 5-10 years after vaccination. Boosters are essential.", correct: true },
                        { text: "The sibling was never vaccinated", feedback: "Incorrect. The scenario states they were fully vaccinated as an infant.", correct: false }
                    ]
                },
                {
                    id: "step3",
                    text: "<h6>Step 3: Cocooning Strategy</h6><p>What is the 'cocooning' strategy for pertussis prevention?</p>",
                    options: [
                        { text: "Isolating sick infants in a separate room", feedback: "Incorrect. Cocooning refers to vaccination strategy.", correct: false },
                        { text: "Vaccinating all close contacts of infants (parents, siblings, grandparents, caregivers) with Tdap to create a protective 'cocoon'", feedback: "Correct! Cocooning protects vulnerable infants by vaccinating everyone around them.", correct: true },
                        { text: "Giving infants extra vaccine doses", feedback: "Incorrect. Infants follow the standard DTaP schedule.", correct: false }
                    ]
                },
                {
                    id: "step4",
                    text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>20 children at the daycare were exposed. What is the recommendation?</p>",
                    options: [
                        { text: "Azithromycin prophylaxis for all close contacts, regardless of vaccination status; Tdap booster for those due", feedback: "Correct! Antibiotics prevent disease in exposed individuals. Vaccine booster provides long-term protection.", correct: true },
                        { text: "No intervention - pertussis is mild", feedback: "Incorrect. Pertussis can be severe in infants and prophylaxis prevents spread.", correct: false },
                        { text: "Quarantine only", feedback: "Incorrect. Antibiotic prophylaxis is recommended for close contacts.", correct: false }
                    ]
                }
            ]
        }
    ];

    // -------------------------------------------------------------------------
    // MERGE LOGIC
    // -------------------------------------------------------------------------
    const db = window.SCENARIO_DB;
    if (!db) {
        console.error("SCENARIO_DB not found! Make sure interactive-scenarios-data.js is loaded first.");
        return;
    }

    if (db['mc1']) {
        // console.log("MEGA Scenarios already merged.");
        return;
    }

    INTERACTIVE_CASES_DATA.forEach(mc => {
        const caseKey = mc.id.toLowerCase();

        // Transform to Node format
        const scenario = {
            title: mc.title,
            category: "investigation",
            difficulty: mc.difficulty || "Advanced",
            description: mc.description,
            nodes: {}
        };

        mc.steps.forEach((step, index) => {
            const stepNodeId = step.id;
            scenario.nodes[stepNodeId] = {
                text: step.text,
                choices: []
            };

            // Map 'start' to first step
            if (index === 0) {
                scenario.nodes['start'] = {
                    text: step.text,
                    choices: []
                };
            }

            step.options.forEach((opt, optIdx) => {
                const isCorrect = opt.correct;
                const feedbackNodeId = `${stepNodeId}_opt${optIdx}`;

                scenario.nodes[feedbackNodeId] = {
                    text: (isCorrect ? "<strong>Correct!</strong> " : "<strong>Incorrect.</strong> ") + opt.feedback,
                    choices: []
                };

                const choiceObj = {
                    text: opt.text,
                    next: feedbackNodeId,
                    cost: 0,
                    time: 1
                };
                scenario.nodes[stepNodeId].choices.push(choiceObj);

                // Add to start node too
                if (index === 0) {
                    scenario.nodes['start'].choices.push(choiceObj);
                }

                if (isCorrect) {
                    const nextStep = mc.steps[index + 1];
                    if (nextStep) {
                        scenario.nodes[feedbackNodeId].choices.push({
                            text: "Next Step",
                            next: nextStep.id,
                            cost: 0
                        });
                    } else {
                        // Case Closed
                        scenario.nodes[feedbackNodeId].end = true;
                        scenario.nodes[feedbackNodeId].win = true;
                        scenario.nodes[feedbackNodeId].text += "<br><br><strong>Case Closed! Excellent work.</strong>";
                    }
                } else {
                    // Try Again
                    scenario.nodes[feedbackNodeId].choices.push({
                        text: "Try Again",
                        next: stepNodeId,
                        cost: 50
                    });
                }
            });
        });

        db[caseKey] = scenario;
    });

    // console.log(`Merged ${INTERACTIVE_CASES_DATA.length} Mega Scenarios into SCENARIO_DB.`);

})();

