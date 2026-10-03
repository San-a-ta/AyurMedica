/**
 * Component: AI-Generated Practical Simulator & Virtual Laboratory Demonstrator
 * Interactive AI Simulation, Virtual Apparatus Visualization, and Real-Time Mentor Q&A
 */
window.DemoPlayer = {
  activeDemoId: null,
  simRunning: false,
  currentStageIndex: 0,
  simInterval: null,
  simSpeed: 1,

  render: function(containerId, activeYear, requestedDemoId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let demos = window.BAMS_AI_SIMULATIONS || window.BAMS_DEMO_VIDEOS || [];

    // Filter by academic year if not 'All'
    if (activeYear && activeYear !== "All") {
      demos = demos.filter(d => d.year === activeYear);
    }

    if (demos.length === 0) {
      container.innerHTML = `
        <div class="text-center py-16 px-4 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b]">
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">No AI Simulations in this Year</h3>
          <p class="text-gray-500 dark:text-gray-400">Switch to 'All Years' or select another professional year to explore AI virtual laboratory procedures.</p>
        </div>
      `;
      return;
    }

    // Set active demo
    if (requestedDemoId && demos.some(d => d.id === requestedDemoId)) {
      this.activeDemoId = requestedDemoId;
    } else if (!this.activeDemoId || !demos.some(d => d.id === this.activeDemoId)) {
      this.activeDemoId = demos[0].id;
    }

    const currentSim = demos.find(d => d.id === this.activeDemoId) || demos[0];
    const stages = currentSim.chapters || [];
    if (this.currentStageIndex >= stages.length) this.currentStageIndex = 0;
    const currentStage = stages[this.currentStageIndex] || stages[0];
    const mentor = currentSim.aiMentor || { name: "Charaka-AI Lab Mentor", badge: "AYUSH Certified System", avatar: "🌿" };
    const checkpoint = currentSim.aiDecisionCheckpoint;

    container.innerHTML = `
      <div class="space-y-6">
        <!-- Section Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#e8e2d4] dark:border-[#25332b]">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                AI Interactive Lab Simulation
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400 font-mono">NCISM Virtual Training</span>
            </div>
            <h2 class="text-2xl font-bold font-serif-ayur text-[#133a27] dark:text-[#74c69d] mt-1">
              AI Practical Simulator & Virtual Clinical Theatre
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Interactive procedural simulations, virtual apparatus modeling, and real-time guidance from the AI Clinical Mentor.
            </p>
          </div>
          <span class="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f2eee3] dark:bg-[#1c2922] text-[#133a27] dark:text-[#74c69d]">
            ${demos.length} Virtual Practical Labs Active
          </span>
        </div>

        <!-- Main Simulation Workbench Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Left: Virtual Experiment Canvas (2 Cols) -->
          <div class="lg:col-span-2 space-y-4">
            
            <!-- Virtual Canvas Frame -->
            <div class="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e1713] via-[#09110d] to-[#040806] border border-[#25382e] shadow-xl text-white p-6 min-h-[380px] flex flex-col justify-between">
              
              <!-- Canvas Header -->
              <div class="flex flex-wrap items-center justify-between gap-2 z-10">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded bg-[#1b4332] text-xs font-bold text-emerald-300 border border-emerald-500/30">
                    ${currentSim.year} • ${currentSim.subject}
                  </span>
                  <span class="text-xs font-mono text-gray-400 bg-black/50 px-2 py-1 rounded">
                    ${currentSim.type || 'Virtual Laboratory'}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono text-emerald-400" id="sim-status-label">
                    ${this.simRunning ? '● SIMULATING LIVE' : '○ READY TO SIMULATE'}
                  </span>
                </div>
              </div>

              <!-- Center Interactive Visual Simulation Stage -->
              <div class="my-auto py-6 text-center z-10">
                <!-- Graphical Virtual Apparatus Representation -->
                <div class="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-amber-500/10 border border-emerald-400/40 flex items-center justify-center relative shadow-inner ${this.simRunning ? 'ring-4 ring-emerald-500/30 animate-pulse' : ''}">
                  <span class="text-4xl">${mentor.avatar}</span>
                  ${this.simRunning ? `
                    <span class="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0e1713] flex items-center justify-center">
                      <span class="w-2 h-2 bg-white rounded-full animate-ping"></span>
                    </span>
                  ` : ''}
                </div>

                <h3 class="text-xl md:text-2xl font-bold font-serif-ayur text-white max-w-xl mx-auto leading-tight">
                  ${currentSim.title}
                </h3>
                
                <!-- Dynamic Active Stage Banner -->
                <div class="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-300">
                  <span class="font-bold text-amber-300">[Stage ${this.currentStageIndex + 1}/${stages.length}]:</span>
                  <span>${currentStage.title}</span>
                </div>

                <!-- Simulation Progress Metric Bar -->
                <div class="max-w-md mx-auto mt-4 px-4">
                  <div class="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden border border-gray-700">
                    <div class="bg-gradient-to-r from-emerald-500 to-amber-400 h-2.5 rounded-full transition-all duration-500" style="width: ${((this.currentStageIndex + 1) / stages.length) * 100}%"></div>
                  </div>
                  <div class="flex justify-between text-[11px] font-mono text-gray-400 mt-1.5">
                    <span>${currentStage.time}</span>
                    <span>Stage Completion: ${Math.round(((this.currentStageIndex + 1) / stages.length) * 100)}%</span>
                  </div>
                </div>
              </div>

              <!-- Simulation Control Bar -->
              <div class="pt-4 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-3 z-10">
                <div class="flex items-center gap-2">
                  <button id="btn-toggle-sim" class="px-4 py-2 rounded-xl text-xs font-bold ${this.simRunning ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-[#1b4332] hover:bg-[#2d6a4f] text-emerald-200'} transition-all shadow-md flex items-center gap-1.5">
                    ${this.simRunning ? `
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                      Pause Simulation
                    ` : `
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                      Run AI Step Simulation
                    `}
                  </button>
                  <button id="btn-prev-sim-stage" class="px-3 py-2 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-xs font-semibold text-gray-300 transition-colors" title="Previous Simulation Stage">
                    ⏮ Step
                  </button>
                  <button id="btn-next-sim-stage" class="px-3 py-2 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-xs font-semibold text-gray-300 transition-colors" title="Next Simulation Stage">
                    Step ⏭
                  </button>
                  <button id="btn-reset-sim" class="px-3 py-2 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-xs font-semibold text-gray-300 transition-colors" title="Restart Simulation">
                    ↺ Reset
                  </button>
                </div>

                <div class="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-gray-700/60">
                  <span class="text-[10px] text-gray-400 px-1 font-mono">Speed:</span>
                  <button class="sim-speed-btn px-2 py-0.5 rounded text-[10px] font-bold ${this.simSpeed === 1 ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'}" data-speed="1">1x</button>
                  <button class="sim-speed-btn px-2 py-0.5 rounded text-[10px] font-bold ${this.simSpeed === 2 ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'}" data-speed="2">2x</button>
                  <button class="sim-speed-btn px-2 py-0.5 rounded text-[10px] font-bold ${this.simSpeed === 4 ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'}" data-speed="4">4x</button>
                </div>
              </div>

              <!-- Ambient Glow Effect -->
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,106,79,0.2)_0%,transparent_75%)] pointer-events-none"></div>
            </div>

            <!-- AI Mentor Real-Time Guidance Card -->
            <div class="p-6 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-sm space-y-4">
              <div class="flex items-center justify-between gap-3 border-b border-[#e8e2d4] dark:border-[#25332b] pb-3">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-lg">
                    ${mentor.avatar}
                  </div>
                  <div>
                    <h4 class="text-sm font-bold font-serif-ayur text-gray-900 dark:text-white">
                      ${mentor.name}
                    </h4>
                    <span class="text-[10px] text-[#b58321] font-semibold">${mentor.badge}</span>
                  </div>
                </div>
                <button onclick="window.App.switchTab('practicals')" class="text-xs font-semibold text-[#1b4332] dark:text-[#74c69d] hover:underline flex items-center gap-1">
                  <span>Open Full Manual Record</span> &rarr;
                </button>
              </div>

              <!-- Live AI Rationale Commentary for Active Stage -->
              <div class="p-4 rounded-xl bg-[#faf8f5] dark:bg-[#18241e] border-l-4 border-emerald-600">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-1">
                  AI Demonstrator Guidance on [${currentStage.title}]:
                </span>
                <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  ${currentSim.overview} The student must pay rigorous attention to the classical parameters of this stage to avoid pharmaceutical degradation or clinical complications.
                </p>
              </div>

              <!-- AI Clinical Decision Checkpoint (Interactive Quiz) -->
              ${checkpoint ? `
                <div class="p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-3" id="ai-checkpoint-box">
                  <div class="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>AI Practical Checkpoint: Test Your Clinical Decision</span>
                  </div>
                  <p class="text-xs text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                    ${checkpoint.scenario}
                  </p>
                  
                  <div class="space-y-2 pt-1">
                    ${checkpoint.options.map((opt, oIdx) => `
                      <button class="w-full text-left p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/50 bg-white dark:bg-[#16221c] text-xs text-gray-700 dark:text-gray-300 hover:bg-amber-100/50 dark:hover:bg-amber-950/40 transition-colors decision-opt-btn" data-opt-idx="${oIdx}">
                        <span class="font-bold mr-1.5 text-amber-800 dark:text-amber-400">${String.fromCharCode(65 + oIdx)}.</span>
                        ${opt}
                      </button>
                    `).join('')}
                  </div>

                  <div id="checkpoint-feedback" class="hidden p-3 rounded-lg text-xs leading-relaxed"></div>
                </div>
              ` : ''}

              <!-- Ask AI Demonstrator (Interactive Quick Q&A) -->
              ${currentSim.aiQuickQA && currentSim.aiQuickQA.length > 0 ? `
                <div class="space-y-2 pt-2 border-t border-dashed border-[#e8e2d4] dark:border-[#25332b]">
                  <span class="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 block mb-2">
                    💡 Ask the AI Demonstrator (Instant Explanations):
                  </span>
                  <div class="space-y-2">
                    ${currentSim.aiQuickQA.map((qa, qIdx) => `
                      <div class="p-3 rounded-xl bg-gray-50 dark:bg-[#18241e] border border-gray-200 dark:border-[#25332b]">
                        <div class="font-bold text-xs text-[#133a27] dark:text-[#74c69d] mb-1 flex items-start gap-1.5">
                          <span class="text-[#c59b27]">Q:</span>
                          <span>${qa.q}</span>
                        </div>
                        <p class="text-xs text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-emerald-500 leading-relaxed">
                          ${qa.a}
                        </p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

            </div>

          </div>

          <!-- Right: Interactive Stages, Checklist & Pearls (1 Col) -->
          <div class="space-y-6">
            
            <!-- Step-by-Step Simulation Stages Navigation -->
            <div class="p-5 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-sm">
              <h4 class="text-sm font-bold font-serif-ayur text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Simulation Stages</span>
                <span class="text-xs text-gray-500 font-sans lowercase">Click to navigate</span>
              </h4>
              <div class="space-y-2">
                ${stages.map((st, sIdx) => `
                  <div class="sim-stage-item p-2.5 rounded-xl border ${sIdx === this.currentStageIndex ? 'bg-[#d8f3dc] dark:bg-[#193325] border-[#52b788] font-bold text-[#133a27] dark:text-[#74c69d]' : 'border-transparent hover:bg-[#faf8f5] dark:hover:bg-[#18241e] text-gray-700 dark:text-gray-300'} cursor-pointer flex items-center justify-between text-xs transition-colors" data-stage-idx="${sIdx}">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-[#b58321] px-1.5 py-0.5 rounded bg-yellow-50 dark:bg-yellow-950/30 text-[10px]">${st.time}</span>
                      <span class="line-clamp-1">${st.title}</span>
                    </div>
                    ${sIdx === this.currentStageIndex ? `<span class="w-2 h-2 rounded-full bg-[#1b4332] dark:bg-[#52b788] flex-shrink-0"></span>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Virtual Lab Skills Checklist -->
            <div class="p-5 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-sm">
              <h4 class="text-sm font-bold font-serif-ayur text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Lab Skill Checklist</span>
                <span class="text-xs text-emerald-600 dark:text-emerald-400 font-sans">NCISM Mastery</span>
              </h4>
              <div class="space-y-2">
                ${currentSim.procedureChecklist.map((item, iIdx) => {
                  const checkKey = `${currentSim.id}-ai-check-${iIdx}`;
                  const isChecked = JSON.parse(localStorage.getItem("bams_ai_checks") || "{}")[checkKey];
                  return `
                    <div class="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#faf8f5] dark:hover:bg-[#18241e] transition-colors">
                      <input type="checkbox" id="${checkKey}" data-check-key="${checkKey}" class="ai-sim-chk mt-0.5 w-4 h-4 text-[#1b4332] rounded focus:ring-[#1b4332] border-gray-300 cursor-pointer" ${isChecked ? 'checked' : ''}>
                      <label for="${checkKey}" class="text-xs text-gray-700 dark:text-gray-300 cursor-pointer select-none leading-relaxed">
                        ${item}
                      </label>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Clinical Pearls Box -->
            <div class="p-5 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-sm">
              <h4 class="text-xs font-bold text-[#b58321] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Crucial Laboratory Safety Pearls:
              </h4>
              <ul class="list-disc list-inside text-xs text-gray-600 dark:text-gray-400 space-y-1.5">
                ${currentSim.clinicalPearls.map(cp => `<li>${cp}</li>`).join('')}
              </ul>
            </div>

          </div>

        </div>

        <!-- Bottom Simulation Selector Carousel -->
        <div class="pt-6 border-t border-[#e8e2d4] dark:border-[#25332b]">
          <h4 class="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
            <span>Select AI Practical Simulation to Run:</span>
            <span class="text-xs text-gray-500 font-normal">(${demos.length} Available across 4 Years)</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            ${demos.map(d => `
              <div class="sim-select-card p-4 rounded-xl border ${d.id === this.activeDemoId ? 'border-[#1b4332] dark:border-[#52b788] bg-[#fdfbf7] dark:bg-[#1a2922] shadow-sm ring-2 ring-[#1b4332]/20' : 'border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#151f1a] hover:bg-[#faf8f5] dark:hover:bg-[#1a241e]'} cursor-pointer transition-all" data-sim-id="${d.id}">
                <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span class="font-bold text-[#1b4332] dark:text-[#74c69d]">${d.year}</span>
                  <span class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">AI SIM</span>
                </div>
                <h5 class="text-xs font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug mb-1">
                  ${d.title}
                </h5>
                <span class="text-[11px] text-[#b58321] block">${d.subject}</span>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;

    // Stage Navigation Listeners
    container.querySelectorAll('.sim-stage-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-stage-idx'));
        this.currentStageIndex = idx;
        this.render(containerId, activeYear, this.activeDemoId);
      });
    });

    // Step Forward / Backward
    const prevBtn = document.getElementById('btn-prev-sim-stage');
    const nextBtn = document.getElementById('btn-next-sim-stage');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentStageIndex > 0) {
          this.currentStageIndex--;
          this.render(containerId, activeYear, this.activeDemoId);
        }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentStageIndex < stages.length - 1) {
          this.currentStageIndex++;
          this.render(containerId, activeYear, this.activeDemoId);
        }
      });
    }

    // Reset Button
    const resetBtn = document.getElementById('btn-reset-sim');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.currentStageIndex = 0;
        this.simRunning = false;
        clearInterval(this.simInterval);
        this.render(containerId, activeYear, this.activeDemoId);
      });
    }

    // Toggle Simulation Play/Pause
    const toggleSimBtn = document.getElementById('btn-toggle-sim');
    if (toggleSimBtn) {
      toggleSimBtn.addEventListener('click', () => {
        this.simRunning = !this.simRunning;
        clearInterval(this.simInterval);

        if (this.simRunning) {
          const stepTime = 3000 / this.simSpeed;
          this.simInterval = setInterval(() => {
            if (this.currentStageIndex < stages.length - 1) {
              this.currentStageIndex++;
              this.render(containerId, activeYear, this.activeDemoId);
            } else {
              this.currentStageIndex = 0;
              this.simRunning = false;
              clearInterval(this.simInterval);
              this.render(containerId, activeYear, this.activeDemoId);
            }
          }, stepTime);
          this.render(containerId, activeYear, this.activeDemoId);
        } else {
          this.render(containerId, activeYear, this.activeDemoId);
        }
      });
    }

    // Speed Controls
    container.querySelectorAll('.sim-speed-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.simSpeed = parseInt(e.target.getAttribute('data-speed'));
        if (this.simRunning) {
          clearInterval(this.simInterval);
          const stepTime = 3000 / this.simSpeed;
          this.simInterval = setInterval(() => {
            if (this.currentStageIndex < stages.length - 1) {
              this.currentStageIndex++;
              this.render(containerId, activeYear, this.activeDemoId);
            } else {
              this.currentStageIndex = 0;
              this.simRunning = false;
              clearInterval(this.simInterval);
              this.render(containerId, activeYear, this.activeDemoId);
            }
          }, stepTime);
        }
        this.render(containerId, activeYear, this.activeDemoId);
      });
    });

    // Checkpoint Decision Options
    if (checkpoint) {
      container.querySelectorAll('.decision-opt-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const selectedIdx = parseInt(this.getAttribute('data-opt-idx'));
          const feedbackBox = document.getElementById('checkpoint-feedback');
          if (!feedbackBox) return;

          feedbackBox.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-900', 'bg-red-100', 'text-red-900', 'border-emerald-300', 'border-red-300');
          if (selectedIdx === checkpoint.correctIndex) {
            feedbackBox.className = "p-3 rounded-lg text-xs leading-relaxed bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 block";
            feedbackBox.innerHTML = `<strong>✓ Correct:</strong> ${checkpoint.aiFeedback}`;
          } else {
            feedbackBox.className = "p-3 rounded-lg text-xs leading-relaxed bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-900 dark:text-red-200 block";
            feedbackBox.innerHTML = `<strong>✕ Incorrect Decision:</strong> Re-evaluate classical indications. ${checkpoint.aiFeedback}`;
          }
        });
      });
    }

    // Simulation Selection Cards
    container.querySelectorAll('.sim-select-card').forEach(card => {
      card.addEventListener('click', () => {
        const sId = card.getAttribute('data-sim-id');
        this.currentStageIndex = 0;
        this.simRunning = false;
        clearInterval(this.simInterval);
        this.render(containerId, activeYear, sId);
      });
    });

    // Checklist Listeners
    container.querySelectorAll('.ai-sim-chk').forEach(chk => {
      chk.addEventListener('change', function() {
        const key = this.getAttribute('data-check-key');
        const state = JSON.parse(localStorage.getItem("bams_ai_checks") || "{}");
        state[key] = this.checked;
        localStorage.setItem("bams_ai_checks", JSON.stringify(state));
      });
    });
  }
};
