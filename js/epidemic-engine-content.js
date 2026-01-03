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
        title: "Chapter 1: Mindset",
        difficulty: "★☆☆☆☆",
        content: `
            <h1>Chapter 1: Mindset</h1>
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

            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> Chapter 1 Exam Focus</div>
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
        difficulty: "★☆☆☆☆",
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
            <div class="callout-info" style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
                <p style="margin:0;"><strong><i class="ph ph-link"></i> See Also:</strong> <a href="#ch6" onclick="event.preventDefault(); loadChapter('ch6');" style="color:#0284c7;text-decoration:underline;">Chapter 6: Natural History of Disease</a> for detailed diagrams and timing concepts (Incubation vs Latency, LIV mnemonic).</p>
            </div>
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
        difficulty: "★☆☆☆☆",
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
        difficulty: "★★★☆☆",
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
                <li><strong>PulseNet:</strong> National laboratory network for genomic surveillance (WGS).</li>
            </ul>

            <h2>5.7 PulseNet (Genomic Surveillance)</h2>
            <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
                <p><strong>What:</strong> CDC's national laboratory network for genomic surveillance of foodborne pathogens.</p>
                <p><strong>How it works:</strong> Labs upload pathogen DNA fingerprints (WGS) to a database. Computer algorithms detect clusters of genetically similar isolates across states.</p>
                <p><strong>Why it matters:</strong> Detects multi-state outbreaks that would be missed by traditional surveillance.</p>
                <p style="margin-bottom: 0;"><strong>Example:</strong> E. coli outbreaks linked to romaine lettuce are often detected first via PulseNet fingerprints.</p>
            </div>

            <h2>5.8 Exam Question Patterns</h2>
            <div style="background: #eff6ff; border: 2px solid #3b82f6; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #1e40af;">Pattern 1: Define Active Surveillance</h4>
                <p><strong>Question:</strong> <em>"Define active surveillance and give an example."</em></p>
                <p><strong>Answer:</strong> Active surveillance is when public health officials actively search for cases by contacting providers or reviewing records. Example: During an outbreak, health officials call hospitals daily to ask about new cases.</p>
            </div>

            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #166534;">Pattern 2: Identify Surveillance Type</h4>
                <p><strong>Question:</strong> <em>"A network of selected clinics reports flu cases weekly. What type of surveillance is this?"</em></p>
                <p><strong>Answer:</strong> Sentinel surveillance (Clue: "Selected clinics" = sentinel sites).</p>
            </div>

            <div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #92400e;">Pattern 3: Advantage/Disadvantage</h4>
                <p><strong>Question:</strong> <em>"What is the main advantage of passive surveillance?"</em></p>
                <p><strong>Answer:</strong> Low cost and sustainable long-term (it doesn't require active searching).</p>
            </div>

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
            <hr style="border: 0; border-top: 2px solid var(--navy-primary); margin: 3rem 0;">

            <h1>Chapter 5B: Surveillance Types</h1>
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 2px solid #166534; font-weight: bold; box-shadow: 0 2px 4px rgba(21, 128, 61, 0.2); opacity: 1;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">A deeper dive into the specific types of surveillance systems and when to use them.</p>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-check-circle"></i>
                    Which System When?
                </div>
                <div class="callout-content">
                    <div class="grid-2">
                        <div class="card p-3 border">
                            <h4 class="text-navy">Routine Monitoring</h4>
                            <p><strong>System:</strong> Passive</p>
                            <p><strong>Why:</strong> Sustainable, cheap, good for long-term trends.</p>
                        </div>
                        <div class="card p-3 border">
                            <h4 class="text-navy">Active Outbreak</h4>
                            <p><strong>System:</strong> Active</p>
                            <p><strong>Why:</strong> Need to find every case to stop transmission.</p>
                        </div>
                        <div class="card p-3 border">
                            <h4 class="text-navy">Early Warning</h4>
                            <p><strong>System:</strong> Syndromic</p>
                            <p><strong>Why:</strong> Detects illness before diagnosis (e.g., ER visits for fever).</p>
                        </div>
                        <div class="card p-3 border">
                            <h4 class="text-navy">High Quality Data</h4>
                            <p><strong>System:</strong> Sentinel</p>
                            <p><strong>Why:</strong> Uses selected, high-quality sites to estimate trends.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Practice Scenarios</h3>
            <div class="accordion">
                <div class="accordion-header">Scenario 1: New flu strain</div>
                <div class="accordion-content">
                    <p><strong>Question:</strong> The CDC asks 100 specific high-performing ERs to swab every patient with flu-like symptoms.</p>
                    <p><strong>Type:</strong> Sentinel (Selected sites, high quality).</p>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Scenario 2: Bioterrorism watch</div>
                <div class="accordion-content">
                    <p><strong>Question:</strong> Automated software scans pharmacy sales for spikes in anti-diarrheal medication.</p>
                    <p><strong>Type:</strong> Syndromic (Proxy data, early warning).</p>
                </div>
            </div>

            <h2>5.5 International Health Regulations (IHR)</h2>
            <div class="callout-header" style="background: var(--gold-accent); color: var(--navy-primary);">
                <i class="ph ph-globe"></i> Global Surveillance
            </div>
            <p><strong>IHR (2005):</strong> A legally binding international law that helps countries work together to save lives while minimizing interference with international trade and travel.</p>
            
            <div class="neo-card" style="margin: 1.5rem 0;">
                <h3 style="margin-top:0; color:var(--navy-primary);">PHEIC (Public Health Emergency of International Concern)</h3>
                <p>The <strong>WHO Director-General</strong> declares a PHEIC if an event is:</p>
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
                    <p><strong>Rule:</strong> If "Yes" to <strong>any 2</strong> questions → Notify WHO within 24 hours.</p>
                    <p><em>(Note: Smallpox, Polio, SARS, and new Influenza are ALWAYS reportable).</em></p>
                </div>
            </div>

            <h2>5.6 Exam Focus: Surveillance</h2>
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-lightning"></i> High Yield Topics</div>
                <div class="callout-content">
                    <ul>
                        <li><strong>Active vs Passive:</strong> Know who initiates contact (Active = health department reaches out).</li>
                        <li><strong>Syndromic:</strong> Uses non-specific symptoms for early warning (e.g., ER visits for fever).</li>
                        <li><strong>Sentinel:</strong> Selected high-quality sites for detailed data.</li>
                        <li><strong>IHR:</strong> WHO must be notified within 24 hours for PHEIC events.</li>
                        <li><strong>Always Reportable:</strong> Smallpox, Polio, SARS, Novel Influenza.</li>
                    </ul>
                </div>
            </div>
        `
    },
    ch6: {
        title: "Chapter 6: Natural History of Disease",
        difficulty: "★☆☆☆☆",
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
            <div class="callout-info" style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
                <p style="margin:0;"><strong><i class="ph ph-link"></i> See Also:</strong> <a href="#ch2" onclick="event.preventDefault(); loadChapter('ch2');" style="color:#0284c7;text-decoration:underline;">Chapter 2: History & Heroes</a> for carrier type drills and the Typhoid Mary case study.</p>
            </div>
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
        difficulty: "★★★☆☆",
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
        difficulty: "★★★☆☆",
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
        difficulty: "★★★☆☆",
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
        difficulty: "★★★★★",
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

        difficulty: "★★★☆☆",
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

            <hr style="border: 0; border-top: 2px solid var(--navy-primary); margin: 3rem 0;">

            <h1>Chapter 11B: Study Design Selector</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">One of the most common exam questions is: <strong>"Which study design should the investigator use?"</strong> This chapter teaches you how to answer these questions with confidence.</p>

            <div class="exam-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    🎯 Exam Strategy
                </div>
                <div class="callout-content">
                    <p>Study design questions test your ability to match the research question to the correct method. Focus on the <strong>outcome frequency</strong> (rare vs. common) and <strong>time direction</strong> (forward vs. backward).</p>
                </div>
            </div>

            <h3>Decision Tree: "RARE-TIME-COST"</h3>
            <div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
                <h4 style="margin-top: 0; color: #92400e;">Step 1: Is the outcome RARE?</h4>
                <ul style="margin-bottom: 0.5rem;">
                    <li><strong>YES (Rare disease/outcome):</strong> → <span style="color: #dc2626; font-weight: bold;">Case-Control Study</span></li>
                    <li><strong>NO (Common outcome):</strong> → Go to Step 2</li>
                </ul>
                <h4 style="color: #92400e;">Step 2: Do you have TIME to follow people?</h4>
                <ul style="margin-bottom: 0.5rem;">
                    <li><strong>YES (Can wait for outcomes):</strong> → <span style="color: #2563eb; font-weight: bold;">Cohort Study</span></li>
                    <li><strong>NO (Need quick snapshot):</strong> → <span style="color: #16a34a; font-weight: bold;">Cross-Sectional Study</span></li>
                </ul>
                <h4 style="color: #92400e;">Step 3: Is COST a major concern?</h4>
                <ul style="margin-bottom: 0;">
                    <li><strong>YES (Limited budget):</strong> → <span style="color: #dc2626; font-weight: bold;">Case-Control</span> (cheaper)</li>
                    <li><strong>NO (Well-funded):</strong> → <span style="color: #2563eb; font-weight: bold;">Cohort</span> (gold standard)</li>
                </ul>
            </div>

            <h3>The Three Main Study Designs</h3>

            <h4>1. Cohort Study (Prospective)</h4>
            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0;">
                <p><strong>Definition:</strong> Follow exposed and unexposed groups <em>forward in time</em> to see who develops disease.</p>
                <p><strong>Direction:</strong> Exposure → Outcome (Forward)</p>
                <p><strong>Measure:</strong> <strong>Relative Risk (RR)</strong></p>
                <p><strong>Example:</strong> "Follow 1,000 smokers and 1,000 non-smokers for 10 years to see who gets lung cancer."</p>
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Can calculate incidence (true risk)</li>
                    <li>Temporal relationship clear (exposure before outcome)</li>
                    <li>Can study multiple outcomes from one exposure</li>
                </ul>
                <p><strong>Disadvantages:</strong></p>
                <ul>
                    <li>Expensive (long follow-up)</li>
                    <li>Time-consuming</li>
                    <li>Inefficient for rare diseases</li>
                </ul>
            </div>

            <h4>2. Case-Control Study (Retrospective)</h4>
            <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; margin: 1rem 0;">
                <p><strong>Definition:</strong> Start with cases (diseased) and controls (not diseased), then look <em>backward</em> to compare exposures.</p>
                <p><strong>Direction:</strong> Outcome → Exposure (Backward)</p>
                <p><strong>Measure:</strong> <strong>Odds Ratio (OR)</strong></p>
                <p><strong>Example:</strong> "Identify 100 lung cancer patients and 100 healthy controls, then ask about smoking history."</p>
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Efficient for rare diseases</li>
                    <li>Quick and cheap</li>
                    <li>Can study multiple exposures for one outcome</li>
                </ul>
                <p><strong>Disadvantages:</strong></p>
                <ul>
                    <li>Cannot calculate incidence (no denominator)</li>
                    <li>Prone to recall bias</li>
                    <li>Temporal relationship less clear</li>
                </ul>
            </div>

            <h4>3. Cross-Sectional Study (Snapshot)</h4>
            <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; margin: 1rem 0;">
                <p><strong>Definition:</strong> Measure exposure and outcome <em>at the same time</em> (one point in time).</p>
                <p><strong>Direction:</strong> Simultaneous</p>
                <p><strong>Measure:</strong> <strong>Prevalence Ratio</strong></p>
                <p><strong>Example:</strong> "Survey 1,000 people today: Who smokes? Who has lung cancer?"</p>
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Quick and cheap</li>
                    <li>Good for prevalence estimates</li>
                    <li>Useful for hypothesis generation</li>
                </ul>
                <p><strong>Disadvantages:</strong></p>
                <ul>
                    <li>Cannot determine causation (chicken vs. egg problem)</li>
                    <li>Misses short-duration diseases</li>
                    <li>Temporal relationship unclear</li>
                </ul>
            </div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap
                </div>
                <div class="callout-content">
                    <p><strong>"A cohort study is always better than case-control."</strong> <strong>FALSE!</strong> For <em>rare diseases</em>, case-control is more efficient. Cohort would require following millions of people for years.</p>
                </div>
            </div>

            <h3>Exam Question Patterns</h3>

            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #166534;">Pattern 1: Rare Disease</h4>
                <p><strong>Question:</strong> <em>"An investigator wants to study risk factors for a rare brain cancer (incidence 1 per 100,000). Which study design is most appropriate?"</em></p>
                <p><strong>Answer:</strong> Case-Control</p>
                <p><strong>Why:</strong> Rare outcome → Case-Control is efficient. A cohort would need to follow millions of people.</p>
            </div>

            <div style="background: #eff6ff; border: 2px solid #3b82f6; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #1e40af;">Pattern 2: Multiple Outcomes</h4>
                <p><strong>Question:</strong> <em>"A researcher wants to study the effects of smoking on lung cancer, heart disease, AND stroke. Which design?"</em></p>
                <p><strong>Answer:</strong> Cohort</p>
                <p><strong>Why:</strong> Cohort allows studying multiple outcomes from one exposure (smoking).</p>
            </div>

            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #991b1b;">Pattern 3: Quick Snapshot</h4>
                <p><strong>Question:</strong> <em>"A health department wants to estimate the current prevalence of diabetes in a city. Which design?"</em></p>
                <p><strong>Answer:</strong> Cross-Sectional</p>
                <p><strong>Why:</strong> Prevalence = snapshot in time. Cross-sectional is perfect for this.</p>
            </div>

            <div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #92400e;">Pattern 4: Calculate Incidence</h4>
                <p><strong>Question:</strong> <em>"An investigator needs to calculate the incidence rate of flu in vaccinated vs. unvaccinated children. Which design?"</em></p>
                <p><strong>Answer:</strong> Cohort</p>
                <p><strong>Why:</strong> Only cohort studies can calculate true incidence (need to follow people over time).</p>
            </div>

            <h3>Comparison Table (Memorize This!)</h3>
            <div class="table-container">
                <table class="table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: var(--navy-primary); color: white;">
                            <th style="padding: 0.75rem; text-align: left;">Feature</th>
                            <th style="padding: 0.75rem; text-align: center;">Cohort</th>
                            <th style="padding: 0.75rem; text-align: center;">Case-Control</th>
                            <th style="padding: 0.75rem; text-align: center;">Cross-Sectional</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background: #f8fafc;">
                            <td style="padding: 0.75rem; font-weight: bold;">Time Direction</td>
                            <td style="padding: 0.75rem; text-align: center;">Forward</td>
                            <td style="padding: 0.75rem; text-align: center;">Backward</td>
                            <td style="padding: 0.75rem; text-align: center;">Simultaneous</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 0.75rem; font-weight: bold;">Measure</td>
                            <td style="padding: 0.75rem; text-align: center;">RR</td>
                            <td style="padding: 0.75rem; text-align: center;">OR</td>
                            <td style="padding: 0.75rem; text-align: center;">Prevalence Ratio</td>
                        </tr>
                        <tr style="background: #f8fafc;">
                            <td style="padding: 0.75rem; font-weight: bold;">Best For</td>
                            <td style="padding: 0.75rem; text-align: center;">Common outcomes</td>
                            <td style="padding: 0.75rem; text-align: center;">Rare outcomes</td>
                            <td style="padding: 0.75rem; text-align: center;">Prevalence</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 0.75rem; font-weight: bold;">Cost</td>
                            <td style="padding: 0.75rem; text-align: center;">High</td>
                            <td style="padding: 0.75rem; text-align: center;">Low</td>
                            <td style="padding: 0.75rem; text-align: center;">Low</td>
                        </tr>
                        <tr style="background: #f8fafc;">
                            <td style="padding: 0.75rem; font-weight: bold;">Time</td>
                            <td style="padding: 0.75rem; text-align: center;">Long</td>
                            <td style="padding: 0.75rem; text-align: center;">Short</td>
                            <td style="padding: 0.75rem; text-align: center;">Very Short</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 0.75rem; font-weight: bold;">Causation</td>
                            <td style="padding: 0.75rem; text-align: center;">✅ Strong</td>
                            <td style="padding: 0.75rem; text-align: center;">⚠️ Moderate</td>
                            <td style="padding: 0.75rem; text-align: center;">❌ Weak</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Practice Scenario
                </div>
                <div class="callout-content">
                    <p><strong>Q:</strong> A researcher wants to investigate whether cell phone use increases brain tumor risk. Brain tumors are rare (5 per 100,000). The researcher has limited funding. Which study design should they use?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>A: Case-Control Study</strong></p>
                            <p><strong>Reasoning:</strong></p>
                            <ol>
                                <li><strong>Rare outcome:</strong> Brain tumors are rare → Case-Control is efficient</li>
                                <li><strong>Limited budget:</strong> Cohort would be too expensive (need to follow millions)</li>
                                <li><strong>Approach:</strong> Identify brain tumor patients (cases) and healthy controls, then compare cell phone use history</li>
                            </ol>
                            <p style="font-style: italic; color: #92400e;"><strong>Exam Tip:</strong> "Rare outcome" is the #1 trigger for Case-Control. If you see "rare disease" or "low incidence," choose Case-Control.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top: 2rem; padding: 1rem; background: #e0f2fe; border-left: 4px solid #0284c7; border-radius: 4px;">
                <strong>📚 Further Reading:</strong> CDC's "Principles of Epidemiology" (Lesson 1) covers study designs in detail.
            </div>
        `
    },
    ch12: {
        title: "Chapter 12: Outbreak Math II: Advanced",
        difficulty: "★★★★★",
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

            <hr style="border: 0; border-top: 2px solid var(--navy-primary); margin: 3rem 0;">

            <h1>Chapter 12B: Genomic Epidemiology</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">Genomic epidemiology combines traditional outbreak investigation with <strong>molecular sequencing</strong> to track pathogen evolution and transmission chains.</p>

            <div class="exam-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    🎯 Exam Strategy
                </div>
                <div class="callout-content">
                    <p>Genomic epidemiology questions test your ability to <em>interpret data</em>, not memorize sequences. Focus on understanding what SNP differences, phylogenetic trees, and molecular clocks <strong>tell you about outbreak relationships</strong>.</p>
                </div>
            </div>

            <div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
                <h4 style="margin-top: 0; color: #92400e;">🧠 Master Mnemonic: "SNIP the TREE"</h4>
                <ul style="margin-bottom: 0;">
                    <li><strong>S</strong>NPs = <strong>S</strong>ingle mutations (closer = related)</li>
                    <li><strong>N</strong>odes = <strong>N</strong>ew branches (common ancestors)</li>
                    <li><strong>I</strong>solates = <strong>I</strong>ndividual samples (tips of tree)</li>
                    <li><strong>P</strong>hylogeny = <strong>P</strong>athogen evolution (NOT direct transmission!)</li>
                    <li><strong>T</strong>MRCA = <strong>T</strong>ime of outbreak start</li>
                    <li><strong>R</strong>elatedness = <strong>R</strong>isk of same source</li>
                    <li><strong>E</strong>pidemiology = <strong>E</strong>vidence still needed (genomics alone isn't enough)</li>
                    <li><strong>E</strong>volution rate = <strong>E</strong>stimates timing (molecular clock)</li>
                </ul>
            </div>

            <h3>Key Concepts</h3>
            
            <h4>1. Whole Genome Sequencing (WGS)</h4>
            <p><strong>Definition:</strong> Reading the complete DNA/RNA sequence of a pathogen isolated from a patient.</p>
            <ul>
                <li><strong>Purpose:</strong> Identify genetic differences (mutations) between isolates to determine if they are related.</li>
                <li><strong>CDC Use:</strong> PulseNet (CDC's molecular surveillance network) uses WGS to detect multi-state outbreaks.</li>
            </ul>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap #1
                </div>
                <div class="callout-content">
                    <p><strong>"Identical sequences = same person infected both patients."</strong> <strong>FALSE!</strong> Identical sequences mean same <em>source</em> (e.g., contaminated food distributed across states), not direct person-to-person transmission.</p>
                </div>
            </div>

            <h4>2. Phylogenetic Trees</h4>
            <p>A <strong>phylogenetic tree</strong> is a diagram showing evolutionary relationships between pathogen isolates based on genetic similarity.</p>
            
            <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
                <h4 style="margin-top: 0; color: var(--navy-primary);">📊 How to Read a Phylogenetic Tree</h4>
                <ul>
                    <li><strong>Branch Length:</strong> Represents genetic distance (number of mutations). <em>Longer branch = more mutations = more time/evolution.</em></li>
                    <li><strong>Nodes:</strong> Points where lineages split (common ancestor).</li>
                    <li><strong>Clusters:</strong> Isolates grouped closely together are genetically similar and likely part of the same outbreak.</li>
                </ul>
            </div>

            <h4>3. SNPs (Single Nucleotide Polymorphisms)</h4>
            <div style="background: #dcfce7; border: 2px solid #22c55e; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
                <h4 style="margin-top: 0; color: #166534;">🔢 SNP Difference Rules</h4>
                <ul style="margin-bottom: 0;">
                    <li><strong>0-5 SNPs:</strong> Nearly identical → Same outbreak, same source</li>
                    <li><strong>6-20 SNPs:</strong> Related → Possibly same outbreak, investigate further</li>
                    <li><strong>21-50 SNPs:</strong> Distant relatives → Different outbreaks or long time gap</li>
                    <li><strong>50+ SNPs:</strong> Unrelated → Definitely different sources</li>
                </ul>
            </div>

            <h4>4. Molecular Clock</h4>
            <p>Pathogens accumulate mutations at a relatively constant rate. This allows estimating the <strong>Time of Most Recent Common Ancestor (TMRCA)</strong>.</p>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-warning"></i>
                    Exam Trap #2
                </div>
                <div class="callout-content">
                    <p><strong>"A phylogenetic tree shows WHO infected whom."</strong> <strong>FALSE!</strong> Trees show <em>evolutionary relationships</em>, NOT direct transmission chains. You need contact tracing + epi data to prove transmission.</p>
                </div>
            </div>

            <h3>Exam Question Patterns</h3>
            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Practice Questions
                </div>
                <div class="callout-content">
                    <p><strong>Q1:</strong> Two patients in different states have Salmonella isolates that differ by only 2 SNPs. What does this suggest?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>A:</strong> The isolates are closely related and likely part of the same outbreak. They probably share a recent common source (e.g., contaminated food distributed across states).</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    ch13: {
        title: "Chapter 13: Hypothesis Testing",
        difficulty: "★★★★★",
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

            <hr style="border: 0; border-top: 2px solid var(--navy-primary); margin: 3rem 0;">

            <h1>Chapter 13B: Predictive Values (PPV & NPV)</h1>
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">Sensitivity and Specificity tell you about the <em>test</em>. Predictive Values tell you about the <em>patient</em>.</p>

            <h3>Core Formulas</h3>
            <div class="formula-box">
                <p><strong>PPV (Positive Predictive Value):</strong> A / (A + B)</p>
                <p><em>"If I test positive, what is the chance I actually have the disease?"</em></p>
            </div>
            <div class="formula-box">
                <p><strong>NPV (Negative Predictive Value):</strong> D / (C + D)</p>
                <p><em>"If I test negative, what is the chance I am actually healthy?"</em></p>
            </div>

            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-warning"></i> Prevalence Trap</div>
                <div class="callout-content">
                    <p><strong>PPV depends on Prevalence!</strong></p>
                    <ul>
                        <li>High Prevalence → High PPV.</li>
                        <li>Low Prevalence → Low PPV (lots of false positives).</li>
                    </ul>
                    <p>Sensitivity and Specificity do NOT change with prevalence.</p>
                </div>
            </div>
        `
    },
    ch14: {
        title: "Chapter 14: Patterns & Data Synthesis",
        difficulty: "★★★☆☆",
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

            <hr style="border: 0; border-top: 2px solid var(--navy-primary); margin: 3rem 0;">

            <h1>Chapter 14B: Bias & Confounding</h1>
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">Bias is a systematic error. Confounding is a mixture of effects. Both can ruin your study.</p>

            <h3>Types of Bias</h3>
            <div class="table-container"><table class="table">
                <thead><tr><th>Bias</th><th>Definition</th><th>Example</th></tr></thead>
                <tbody>
                    <tr><td><strong>Selection Bias</strong></td><td>Wrong people entered the study.</td><td>Surveying only hospital patients about healthy habits.</td></tr>
                    <tr><td><strong>Recall Bias</strong></td><td>Sick people remember exposures better than healthy people.</td><td>Mothers of children with birth defects remember every pill they took; others don't.</td></tr>
                    <tr><td><strong>Information Bias</strong></td><td>Systematic error in measuring data.</td><td>Broken scale weighs everyone 5lbs lighter.</td></tr>
                </tbody>
            </table></div>

            <h3>Confounding</h3>
            <div class="neo-card border-left-orange">
                <p><strong>Definition:</strong> A third variable that distorts the association between Exposure and Outcome.</p>
                <p><strong>Criteria for a Confounder:</strong></p>
                <ol>
                    <li>Related to the Exposure.</li>
                    <li>Related to the Outcome.</li>
                    <li>NOT on the causal pathway.</li>
                </ol>
                <p><strong>Classic Example:</strong> Coffee causes Cancer?</p>
                <ul>
                    <li>Result: Coffee drinkers have higher lung cancer rates.</li>
                    <li>Confounder: <strong>Smoking</strong>. Coffee drinkers smoke more. Smoking causes cancer.</li>
                    <li>Correction: When you <em>stratify</em> by smoking, the link disappears.</li>
                </ul>
            </div>
            
            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-warning"></i> Bias vs. Confounding</div>
                <div class="callout-content">
                    <p><strong>Bias</strong> creates a fake association or hides a real one. It is an error in design/conduct.</p>
                    <p><strong>Confounding</strong> is a real relationship that is misinterpreted. The association exists, but it's not causal.</p>
                </div>
            </div>

            <hr style="border: 0; border-top: 2px solid var(--navy-primary); margin: 3rem 0;">

            <h1>Chapter 14C: Mortality Metrics</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 2px solid #ca8a04; font-weight: bold; box-shadow: 0 2px 4px rgba(202, 138, 4, 0.2); opacity: 1;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 1px solid #c2410c; opacity: 0.3;">Advanced</span>
                </div>
            </div>

            <p class="lead">Mortality metrics measure the <strong>burden of death</strong> from disease. The most commonly confused metrics on exams are <strong>Case Fatality Rate (CFR)</strong> and <strong>Mortality Rate</strong>.</p>

            <div class="exam-tip">
                <div class="callout-header">
                    <i class="ph ph-lightbulb"></i>
                    🎯 Exam Strategy
                </div>
                <div class="callout-content">
                    <p>CFR questions test whether you understand the <strong>denominator</strong>. CFR uses <em>cases</em> (diseased people), while Mortality Rate uses <em>total population</em>. Focus on what you're dividing by!</p>
                </div>
            </div>

            <h3>Key Metrics</h3>

            <h4>1. Case Fatality Rate (CFR)</h4>
            <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; margin: 1rem 0;">
                <p><strong>Definition:</strong> The proportion of people <em>with a disease</em> who die from it.</p>
                <div class="formula-box">CFR = (Deaths from Disease / Total Cases) × 100</div>
                <p><strong>Numerator:</strong> Deaths from disease</p>
                <p><strong>Denominator:</strong> <span style="color: #dc2626; font-weight: bold;">Cases only</span> (people who have the disease)</p>
            </div>

            <h4>2. Mortality Rate (Death Rate)</h4>
            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0;">
                <p><strong>Definition:</strong> The number of deaths in a <em>population</em> over a time period.</p>
                <div class="formula-box">Mortality Rate = (Deaths / Total Population) × 100,000</div>
                <p><strong>Numerator:</strong> Deaths from disease</p>
                <p><strong>Denominator:</strong> <span style="color: #2563eb; font-weight: bold;">Entire population</span> (everyone, sick or not)</p>
            </div>

            <div class="exam-trap">
                <div class="callout-header"><i class="ph ph-warning"></i> CFR vs. Mortality Rate</div>
                <div class="callout-content">
                    <p><strong>CFR</strong> measures disease <strong>severity</strong> (how deadly it is for those infected).</p>
                    <p><strong>Mortality Rate</strong> measures <strong>public health impact</strong> (total deaths in the community).</p>
                </div>
            </div>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-calculator"></i>
                    Practice Problems
                </div>
                <div class="callout-content">
                    <p><strong>Q:</strong> A measles outbreak affects 500 students. 10 students die. Calculate the CFR.</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>A:</strong> CFR = 10 / 500 = 0.02 = <strong>2%</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    ch15: {
        title: "Chapter 15: Levels of Prevention",
        difficulty: "★★★☆☆",
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
        difficulty: "★★★☆☆",
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
        difficulty: "★★★★★",
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
        difficulty: "★★★★★",
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
        difficulty: "★★★★★",
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
        difficulty: "★★★★★",
        content: `
            <h1>Chapter 20: Integrative Case Studies</h1>
            
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead" style="margin-bottom: 2rem;">This is the final test. In a real outbreak (and on the exam), you won't get questions in order. You'll get a mess of data and have to make sense of it.</p>

            <div class="grid" style="gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                
                <!-- Case 1 -->
                <div class="neo-card" style="border-top: 4px solid #ef4444;">
                    <h3 style="color: #b91c1c; margin-top: 0;"><i class="ph-bold ph-fork-knife"></i> Case 1: The Church Picnic</h3>
                    <p style="background: #fef2f2; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;"><strong>Scenario:</strong> 50 people attended a picnic. 20 got sick with vomiting and diarrhea 4 hours later.</p>
                    <div style="margin-top: 1rem;">
                        <div style="font-size: 0.85rem; font-weight: bold; text-transform: uppercase; color: #666; margin-bottom: 0.5rem;">Investigation Steps</div>
                        <ul style="padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.5;">
                            <li><strong>Step 1 (Verify):</strong> Is it an outbreak? Yes (20 cases > expected).</li>
                            <li><strong>Step 2 (Case Def):</strong> Person at picnic + Vomiting/Diarrhea + Onset within 6 hours.</li>
                            <li><strong>Step 3 (Epi Curve):</strong> Point Source (everyone ate at the same time).</li>
                            <li><strong>Step 4 (Agent):</strong> Incubation 4 hours + Symptoms = Likely <em>Staph aureus</em> (toxin).</li>
                            <li><strong>Step 5 (Action):</strong> Educate food handlers on temperature control.</li>
                        </ul>
                    </div>
                </div>

                <!-- Case 2 -->
                <div class="neo-card" style="border-top: 4px solid #22c55e;">
                    <h3 style="color: #15803d; margin-top: 0;"><i class="ph-bold ph-tree"></i> Case 2: The Mystery Fever</h3>
                    <p style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;"><strong>Scenario:</strong> Hikers in Connecticut developing bullseye rashes and joint pain in July.</p>
                    <div style="margin-top: 1rem;">
                        <div style="font-size: 0.85rem; font-weight: bold; text-transform: uppercase; color: #666; margin-bottom: 0.5rem;">Investigation Steps</div>
                        <ul style="padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.5;">
                            <li><strong>Step 1 (Verify):</strong> Verify diagnosis (Lyme disease?).</li>
                            <li><strong>Step 2 (Person/Place/Time):</strong> Hikers (Person), Woods (Place), Summer (Time).</li>
                            <li><strong>Step 3 (Transmission):</strong> Vector-borne (Ticks).</li>
                            <li><strong>Step 4 (Prevention):</strong> Secondary (Check for ticks), Primary (Wear long pants/DEET).</li>
                        </ul>
                    </div>
                </div>

            </div>

             <div class="champion-concept" style="margin: 2rem 0;">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Red Herrings
                </div>
                <div class="callout-content">
                    <p><strong>Red Herring:</strong> A piece of information intended to distract you.</p>
                    <p><strong>Example:</strong> "The water fountain was broken." (If everyone drank soda, this doesn't matter!). Focus on the data, not the noise.</p>
                </div>
            </div>

            <div class="neo-card" style="border: 2px solid var(--accent-orange); max-width: 800px; margin: 0 auto;">
                <div style="display: flex; align-items: start; gap: 1rem;">
                    <div style="font-size: 2rem; color: var(--accent-orange);"><i class="ph-bold ph-warning-octagon"></i></div>
                    <div>
                        <h3 style="margin-top: 0;">Case 3: The National Nightmare (Advanced)</h3>
                        <p><strong>Scenario:</strong> A study links Coffee to Pancreatic Cancer (OR = 3.0). But coffee drinkers also smoke more, and smoking causes cancer.</p>
                        
                        <div style="background: #fff7ed; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                            <strong>Stratified Analysis Required!</strong>
                            <p>Split data into Smokers vs Non-Smokers:</p>
                             <ul style="margin-bottom: 0;">
                                <li><strong>Smokers Only:</strong> Coffee OR = 1.0 (No association).</li>
                                <li><strong>Non-Smokers Only:</strong> Coffee OR = 1.0 (No association).</li>
                            </ul>
                        </div>
                        
                        <p style="margin-top: 1rem;"><strong>Conclusion:</strong> Use the <strong>Adjusted OR</strong> (1.0). The crude OR (3.0) was due to <strong>Confounding</strong> by smoking.</p>
                    </div>
                </div>
            </div>

            <!-- Synthesis Drill -->
            <div class="drill-box" style="margin-top: 3rem;">
               <div class="callout-header"><i class="ph ph-lightning"></i> Synthesis Drill: Solve the Outbreak</div>
               <div class="callout-content">
                    <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 1.5rem;">
                        <div>
                            <strong><i class="ph-bold ph-magnifying-glass"></i> The Clues:</strong>
                             <ul>
                                <li><strong>Symptoms:</strong> Bloody diarrhea, kidney failure (HUS).</li>
                                <li><strong>Exposure:</strong> County Fair petting zoo.</li>
                                <li><strong>Incubation:</strong> 3-4 days.</li>
                            </ul>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <button class="neo-btn outline small" onclick="this.nextElementSibling.style.display='block'">1. Likely Agent?</button>
                            <div style="display:none; background:#f0f9ff; padding:0.5rem; border-radius:4px;"><strong>E. coli O157:H7</strong> (Bloody diarrhea + HUS + Animals)</div>
                            
                            <button class="neo-btn outline small" onclick="this.nextElementSibling.style.display='block'">2. Transmission?</button>
                            <div style="display:none; background:#f0f9ff; padding:0.5rem; border-radius:4px;"><strong>Direct Contact</strong> (Zoonotic) or Fecal-Oral.</div>
                            
                            <button class="neo-btn outline small" onclick="this.nextElementSibling.style.display='block'">3. Control Measure?</button>
                            <div style="display:none; background:#f0f9ff; padding:0.5rem; border-radius:4px;"><strong>Handwashing Stations</strong> (Engineering control).</div>
                        </div>
                    </div>
               </div>
            </div>

            <h2>20.5 Advanced Analysis</h2>
            <p>Interpretation of observational data often requires analytic techniques beyond simple attack rate calculations...</p>
             <ul>
                <li><strong>Confounding:</strong> Control through restriction, matching, or adjustment.</li>
                <li><strong>Effect modification:</strong> Strength of association differs across levels.</li>
                <li><strong>Logistic regression:</strong> Multivariate model (<em>e</em><sup>&beta;</sup> = OR).</li>
            </ul>

            <div class="exam-trap">
                 <div class="callout-header"><i class="ph ph-warning"></i> Exam Trap: Misreading Regression</div>
                 <div class="callout-content">
                    <p><strong>TRAP:</strong> Logistic regression reports <em>odds ratios</em>, not RRs. If outcome >10%, OR overestimates risk.</p>
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

    ch21: {
        title: "Chapter 21: Env. Toxins",
        difficulty: "★★★★★",
        content: `
            <h1>Chapter 21: Env. Toxins & Chemical Epidemiology</h1>
            <!-- Difficulty Scale -->
            <div class="difficulty-scale-box" style="border: 2px solid #333; padding: 1rem; margin: 1rem 0; background: #fafafa; border-radius: 8px;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; color: #555;">Target Audience</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="neo-badge" style="background: #f0fdf4; color: #15803d; border: 1px solid #166534; opacity: 0.3;">Beginner</span>
                    <span class="neo-badge" style="background: #fefce8; color: #a16207; border: 1px solid #ca8a04; opacity: 0.3;">Middle</span>
                    <span class="neo-badge" style="background: #fff7ed; color: #c2410c; border: 2px solid #c2410c; font-weight: bold; box-shadow: 0 2px 4px rgba(194, 65, 12, 0.2); opacity: 1;">Advanced</span>
                </div>
            </div>

            <p class="lead">Not all outbreaks are caused by bacteria or viruses. Environmental toxins can cause clusters of illness that mimic infectious diseases—this is the field of <strong>Chemical Epidemiology</strong>.</p>

            <div class="neo-card" style="border-left: 4px solid var(--accent-orange); margin: 1.5rem 0;">
                <h3><i class="ph-bold ph-warning-octagon"></i> Key Clues for Non-Infectious Outbreaks</h3>
                <ul>
                    <li><strong>No Fever:</strong> Toxins rarely cause fever (unless they are "metal fume fever" from welding fumes).</li>
                    <li><strong>Rapid Onset:</strong> Symptoms often appear minutes to hours after exposure (unlike incubation periods of days).</li>
                    <li><strong>Cluster Pattern:</strong> Case clusters often align with a specific location (building, water source, wind direction) rather than person-to-person transmission.</li>
                    <li><strong>Environmental Link:</strong> Symptoms improve when the person leaves the suspected location (e.g., Sick Building Syndrome).</li>
                </ul>
            </div>

            <h2>21.1 Common Environmental Toxins</h2>
            <div class="table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Agent</th>
                            <th>Common Source</th>
                            <th>Symptoms / Classic Clues</th>
                            <th>Control / Prevention</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Carbon Monoxide (CO)</strong></td>
                            <td>Faulty furnaces, car exhaust, space heaters.</td>
                            <td>Headache, Cherry-red skin (rare/late), Confusion. "Whole family sick in winter."</td>
                            <td>CO detectors, proper ventilation, hyperbaric oxygen therapy.</td>
                        </tr>
                        <tr>
                            <td><strong>Lead (Pb)</strong></td>
                            <td>Old paint (pre-1978), battery recycling, pipes.</td>
                            <td>Developmental delay in children, abdominal pain ("Lead colic"), <strong>Burton's Line</strong> (bluish gum edge).</td>
                            <td>Abatement (remove paint), chelation therapy for high levels.</td>
                        </tr>
                        <tr>
                            <td><strong>Arsenic</strong></td>
                            <td>Contaminated well water, rice, smelting.</td>
                            <td>"Garlic breath", vomiting, "Rice water" diarrhea, <strong>Mees' lines</strong> (white bands on fingernails).</td>
                            <td>Water filtration, testing wells, acute chelation.</td>
                        </tr>
                        <tr>
                            <td><strong>Organophosphates</strong></td>
                            <td>Pesticides, agricultural runoff.</td>
                            <td><strong>SLUDGE Syndrome</strong>, pinpoint pupils (miosis).</td>
                            <td>PPE for farmers, Atropine + Pralidoxime (antidotes).</td>
                        </tr>
                        <tr>
                            <td><strong>Radon</strong></td>
                            <td>Natural soil gas (uranium decay) entering basements.</td>
                            <td><strong>No acute symptoms.</strong> Leading cause of lung cancer in non-smokers.</td>
                            <td>Sub-slab depressurization (ventilation), sealing foundation cracks.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="champion-concept">
                <div class="callout-header">
                    <i class="ph ph-trophy"></i>
                    Champion Concept: Dose-Response Relationship
                </div>
                <div class="callout-content">
                    <p>Unlike many infectious diseases where a single exposure might suffice, toxins often show a <strong>Dose-Response</strong>: more exposure equals more severe symptoms. If people on the 1st floor are sicker than the 4th floor, look for a source in the basement!</p>
                </div>
            </div>

            <h2>21.2 The SLUDGE Mnemonic (Pesticides)</h2>
            <p>Pesticide poisoning (Organophosphates) is a frequent flyer on high-level exams. It causes a "Cholinergic Crisis" by blocking enzymes that clear acetylcholine. Remember <strong>SLUDGE</strong> to identify the overactive "rest and digest" system:</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
                <div class="neo-card small" style="text-align:center; border: 1px solid #e2e8f0;">
                    <div style="font-size: 2rem;">💧</div>
                    <strong>Salivation</strong><br>(Drooling)
                </div>
                <div class="neo-card small" style="text-align:center; border: 1px solid #e2e8f0;">
                    <div style="font-size: 2rem;">😢</div>
                    <strong>Lacrimation</strong><br>(Tearing)
                </div>
                <div class="neo-card small" style="text-align:center; border: 1px solid #e2e8f0;">
                    <div style="font-size: 2rem;">🚽</div>
                    <strong>Urination</strong><br>(Loss of control)
                </div>
                <div class="neo-card small" style="text-align:center; border: 1px solid #e2e8f0;">
                    <div style="font-size: 2rem;">💩</div>
                    <strong>Defecation</strong><br>(Diarrhea)
                </div>
                <div class="neo-card small" style="text-align:center; border: 1px solid #e2e8f0;">
                    <div style="font-size: 2rem;">🤢</div>
                    <strong>GI Upset</strong><br>(Cramping)
                </div>
                <div class="neo-card small" style="text-align:center; border: 1px solid #e2e8f0;">
                    <div style="font-size: 2rem;">🤮</div>
                    <strong>Emesis</strong><br>(Vomiting)
                </div>
            </div>

            <h2>21.3 Environmental Risk Assessment</h2>
            <p>Epidemiologists use a 4-step process to evaluate environmental health risks:</p>
            <ul>
                <li><strong>Hazard Identification:</strong> What health problems are caused by the pollutant?</li>
                <li><strong>Dose-Response Assessment:</strong> What are the health problems at different exposures?</li>
                <li><strong>Exposure Assessment:</strong> How much of the pollutant are people breathing, drinking, or touching?</li>
                <li><strong>Risk Characterization:</strong> What is the extra risk of health problems in the exposed population?</li>
            </ul>

            <div class="drill-box">
                <div class="callout-header">
                    <i class="ph ph-microscope"></i>
                    Environmental Drill: The Winter Cluster
                </div>
                <div class="callout-content">
                    <p><strong>Scenario:</strong> 5 family members present to the ER in January with headaches, nausea, and dizziness. They live in an old apartment building. None have a fever.</p>
                    <p><strong>Question 1:</strong> What is the most likely environmental toxin?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Carbon Monoxide (CO)</strong></p>
                            <p>Headaches + Multiple people + Winter (heating season) + No fever = Classic CO poisoning.</p>
                        </div>
                    </div>

                    <p style="margin-top: 1rem;"><strong>Question 2:</strong> What is the priority intervention for this family?</p>
                    <div class="accordion">
                        <div class="accordion-header">Show Answer</div>
                        <div class="accordion-content">
                            <p><strong>Answer: Immediate evacuation and High-flow Oxygen.</strong></p>
                            <p>Get them out of the house first (remove the source), then treat specifically.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="exam-trap">
                <div class="callout-header">
                    <i class="ph ph-lightning"></i>
                    Exam Focus: The "No Fever" Rule
                </div>
                <div class="callout-content">
                    <ul>
                        <li><strong>TRAP:</strong> Assuming every "outbreak" is a virus. If 10 people get sick 15 minutes after eating at a buffet, it's not a virus (too fast). Think <strong>Preformed Toxins</strong> or <strong>Chemical Contaminants</strong>.</li>
                        <li><strong>TIP:</strong> Always look for the presence or absence of fever. No fever + rapid onset = Toxic/Chemical.</li>
                        <li><strong>TIP:</strong> Radon is for lung cancer (long-term); CO is for immediate headaches. Don't mix them up!</li>
                    </ul>
                </div>
            </div>

            <h2>Summary</h2>
            <ul>
                <li><strong>Chemical Epi:</strong> Often lacks fever and has a much shorter "incubation" (onset).</li>
                <li><strong>Routes:</strong> Inhalation (Radon, CO), Ingestion (Arsenic, Lead), Dermal (Pesticides).</li>
                <li><strong>Action:</strong> Identify the source, remove the source, and monitor the environment.</li>
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
                <h1><i class="ph-bold ph-chalkboard-teacher"></i> Coach & Captain Resources</h1>
                <p class="lead">Specialized guides, scoring frameworks, and team management tools.</p>
                
                <div class="neo-card small" style="background: #fffbeb; border-left: 4px solid var(--warning);">
                    <h4><i class="ph-bold ph-info"></i> Advisor Note</h4>
                    <p>Now accessible to all students to foster peer mentoring. Captains: use these guides to lead your team settings.</p>
                </div>

                <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                    <div class="neo-card">
                        <h3><i class="ph ph-calendar"></i> 8-Week Training Block</h3>
                        <ul style="padding-left: 1.25rem;">
                            <li><strong>Wk 1-2 (Foundations):</strong> Triad, Chain of Infection. <em>Drill:</em> 50 Flashcards/day.</li>
                            <li><strong>Wk 3-4 (Process):</strong> 13 Steps, Case Definitions. <em>Drill:</em> Line List creation speed run.</li>
                            <li><strong>Wk 5 (Math):</strong> 2x2 Tables, AR/RR/OR. <em>Drill:</em> Calculator < 30s per problem.</li>
                            <li><strong>Wk 6 (Visuals):</strong> Epi Curves, Spot Maps. <em>Drill:</em> "Draw the Curve" from scenario descriptions.</li>
                            <li><strong>Wk 7 (Advanced):</strong> Bias, Confounding, Study Design. <em>Drill:</em> "Name that Bias" rapid fire.</li>
                            <li><strong>Wk 8 (Simulation):</strong> Full 50m Exams. <em>Drill:</em> Mock Regionals under strict timing.</li>
                        </ul>
                    </div>

                    <div class="neo-card">
                        <h3><i class="ph ph-users-three"></i> Team Dynamics & Conflict</h3>
                        <p><strong>Science Olympiad is high-stress.</strong> Managing your partnership is key.</p>
                        <ul style="padding-left: 1.25rem;">
                            <li><strong>Role Definition:</strong> Assign roles early. (e.g., Person A = Math/Graphs, Person B = Vocab/Reading).</li>
                            <li><strong>The "Panic Protocol":</strong> If stuck > 60s, switch papers immediately. Recentering focus helps break the block.</li>
                            <li><strong>Post-Mortem:</strong> After every practice test, discuss <em>process</em> failures (e.g., "We misread the question"), not just knowledge gaps.</li>
                        </ul>
                    </div>
                </div>
                
                <h2 style="margin-top: 2rem;">Tournament Readiness</h2>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                    <div class="neo-card small" style="border-left: 4px solid var(--accent-purple);">
                        <h4><i class="ph-bold ph-clipboard-text"></i> The Perfect Cheat Sheet</h4>
                        <ul style="padding-left: 1.25rem; font-size: 0.9rem;">
                            <li><strong>Layout:</strong> 3 Columns. Left=Vocab, Center=Formulas, Right=Lists/Tables.</li>
                            <li><strong>Font:</strong> Size 6-8pt usually readable. Use bolding for headers.</li>
                            <li><strong>Examples:</strong> Include 1 solved 2x2 table example for sanity checking during exam panic.</li>
                        </ul>
                    </div>
                     <div class="neo-card small" style="border-left: 4px solid var(--accent-green);">
                        <h4><i class="ph-bold ph-timer"></i> Mock Tournament Day</h4>
                        <ul style="padding-left: 1.25rem; font-size: 0.9rem;">
                            <li><strong>Environment:</strong> Noisy room (cafeteria style). Hard chairs.</li>
                            <li><strong>Materials:</strong> use the actual calculator/pencils you will bring.</li>
                            <li><strong>Surprise:</strong> Coach should interrupt with "5 minutes remaining" warning unexpectedly to test focus.</li>
                        </ul>
                    </div>
                </div>

                <div class="neo-card" style="margin-top: 1.5rem; background: #f8fafc;">
                    <h3><i class="ph ph-check-square"></i> Captain's High-Yield Cheats</h3>
                    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                        <div>
                            <strong>Must-Know Values:</strong>
                             <ul style="padding-left: 1.25rem; margin-top: 0.5rem;">
                                <li><strong>RR > 1:</strong> Risk Factor.</li>
                                <li><strong>RR < 1:</strong> Protective Factor.</li>
                                <li><strong>p < 0.05:</strong> Significant.</li>
                            </ul>
                        </div>
                         <div>
                            <strong>Tie-Breaker Wins:</strong>
                             <ul style="padding-left: 1.25rem; margin-top: 0.5rem;">
                                <li><strong>Ethics:</strong> Mention "Autonomy" or "Justice".</li>
                                <li><strong>Prevention:</strong> Always suggest <em>primary</em> prevention first.</li>
                                <li><strong>Specificity:</strong> Don't say "clean"; say "sanitize with 10% bleach".</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    `
    },
    // Old 'about' block removed in favor of the consolidated one at the end of file.
    appendix: {
        title: "Appendix & Resources",
        content: `
    <div class="neo-card">
                <h2>Appendix & Resources</h2>
                <div class="tabs" style="margin-bottom: 1rem;">
                    <button class="neo-btn small active" onclick="showTab('rules')">A: Rules</button>
                    <button class="neo-btn small" onclick="showTab('strategy')">B: Strategy</button>
                    <button class="neo-btn small" onclick="showTab('diagnostic')">C: Diagnostics</button>
                    <button class="neo-btn small" onclick="showTab('biases')">D: Biases</button>
                    <button class="neo-btn small" onclick="showTab('mnemonics')">E: Mnemonics</button>
                    <button class="neo-btn small" onclick="showTab('formulas')">F: Formulas</button>
                    <button class="neo-btn small" onclick="showTab('tables')">G: Tables</button>
                    <button class="neo-btn small" onclick="showTab('flashcards')">H: Flashcards</button>
                    <button class="neo-btn small" onclick="showTab('glossary')">I: Glossary</button>
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
                                <li><strong>The "Stuck" Rule:</strong> If you stare at a problem for >45 seconds, circle it and MOVE ON.</li>
                            </ul>
                        </div>

                        <div class="neo-card small" style="border-left: 4px solid var(--accent-orange);">
                            <h4><i class="ph-bold ph-trophy"></i> Scoring & Tie-Breakers</h4>
                            <ul style="padding-left: 1.2rem; margin-top:0.5rem;">
                                <li><strong>Show Your Work!</strong> Formula + Substitution + Answer + Units = Full Credit. Just the answer might get 0.</li>
                                <li><strong>Explain "Why":</strong> "The curve suggests a point source <em>because</em> it has a sharp peak." The "because" earns the quality points.</li>
                                <li><strong>Hunt Tie-Breakers:</strong> Often the last question or the hardest math problem. Spending 3 mins here is worth it.</li>
                            </ul>
                        </div>

                        <div class="neo-card small" style="border-left: 4px solid var(--accent-green);">
                            <h4><i class="ph-bold ph-read-cv-logo"></i> The Cheat Sheet</h4>
                            <ul style="padding-left: 1.2rem; margin-top:0.5rem;">
                                <li><strong>Don't Print the Internet:</strong> Your sheet should be a <em>reminder</em>, not a textbook.</li>
                                <li><strong>Map It:</strong> Know exactly where "Incubation Periods" are located on your sheet so you don't waste time searching.</li>
                                <li><strong>Color Code:</strong> Highlight Formulas in Green, Definitions in Yellow. Visual search is faster than reading.</li>
                            </ul>
                        </div>

                        <div class="neo-card small" style="border-left: 4px solid var(--accent-pink);">
                            <h4><i class="ph-bold ph-brain"></i> Mental Game</h4>
                            <ul style="padding-left: 1.2rem; margin-top:0.5rem;">
                                <li><strong>Read Carefully:</strong> Circle key words: "EXCEPT", "NOT", "MOST LIKELY". Misreading is the #1 cause of lost points.</li>
                                <li><strong>Box Breathing:</strong> If you panic, breathe in 4s, hold 4s, out 4s, hold 4s. Reset your brain.</li>
                                <li><strong>Assume Success:</strong> If a question looks impossible, it's impossible for everyone. Just write <em>something</em> logical.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 style="margin-top: 2rem; border-top: 1px solid #eee; padding-top: 1rem;"><i class="ph-bold ph-key"></i> Keyword Association Map</h4>
                    <p>Memorize these "Buzzwords" for instant points on the exam.</p>
                    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        <div style="background: #f1f5f9; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Rice Water Stool</strong> &rarr; <span style="color: var(--accent-red);">Cholera</span>
                        </div>
                        <div style="background: #f1f5f9; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Rose Spots</strong> &rarr; <span style="color: var(--accent-red);">Typhoid Fever</span>
                        </div>
                         <div style="background: #f1f5f9; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Bullseye Rash</strong> &rarr; <span style="color: var(--accent-red);">Lyme Disease</span>
                        </div>
                        <div style="background: #f1f5f9; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Hydrophobia</strong> &rarr; <span style="color: var(--accent-red);">Rabies</span>
                        </div>
                        <div style="background: #f1f5f9; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Lockjaw</strong> &rarr; <span style="color: var(--accent-red);">Tetanus</span>
                        </div>
                        <div style="background: #f1f5f9; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Koplik Spots</strong> &rarr; <span style="color: var(--accent-red);">Measles</span>
                        </div>
                        <div style="background: #f1f5f9; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Slapped Cheek</strong> &rarr; <span style="color: var(--accent-red);">Fifth Disease</span>
                        </div>
                        <div style="background: #f1f5f9; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Stiff Neck</strong> &rarr; <span style="color: var(--accent-red);">Meningitis</span>
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
                    <h3 style="margin: 0; font-size: 1.5rem; color: var(--navy-primary);">Rishi Reddy</h3>
                    <div style="color: var(--accent-orange); font-weight: 600; font-size: 0.9rem; letter-spacing: 1px; margin-top: 0.25rem; text-transform: uppercase;">Designed, Created & Conceived</div>
                    <p style="color: #64748b; margin: 1.5rem 0; font-size: 0.95rem;">
                        Bringing high-fidelity outbreak simulations to Science Olympiad competition preparation.
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
