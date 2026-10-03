/**
 * Component: Practical Manual & Viva Voce Viewer
 */
window.PracticalViewer = {
  render: function(containerId, activeYear, searchQuery) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let practicals = window.BAMS_PRACTICALS || [];

    // Filter by year if not 'All'
    if (activeYear && activeYear !== "All") {
      practicals = practicals.filter(p => p.year === activeYear);
    }

    // Filter by search query
    if (searchQuery && searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      practicals = practicals.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.subject.toLowerCase().includes(q) ||
        p.aim.toLowerCase().includes(q) ||
        (p.classicalRef && p.classicalRef.toLowerCase().includes(q)) ||
        p.vivaQuestions.some(v => v.question.toLowerCase().includes(q) || v.answer.toLowerCase().includes(q))
      );
    }

    if (practicals.length === 0) {
      container.innerHTML = `
        <div class="text-center py-16 px-4 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b]">
          <div class="w-16 h-16 mx-auto mb-4 text-[#c59b27] flex items-center justify-center bg-[#fdfbf7] dark:bg-[#1a2922] rounded-full">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">No Practicals Found</h3>
          <p class="text-gray-500 dark:text-gray-400 max-w-md mx-auto">Try adjusting your year selection or search terms to explore other laboratory and clinical procedures.</p>
        </div>
      `;
      return;
    }

    // Read stored completed steps
    const completedSteps = JSON.parse(localStorage.getItem("bams_completed_steps") || "{}");

    container.innerHTML = `
      <div class="space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#e8e2d4] dark:border-[#25332b]">
          <div>
            <h2 class="text-2xl font-bold font-serif-ayur text-[#133a27] dark:text-[#74c69d]">
              Ayurvedic Practical Manual & Viva Voce
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              NCISM-aligned laboratory procedures, classical references, and self-testing viva examination cards.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <button id="btn-reveal-all-viva" class="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#c59b27] text-[#c59b27] hover:bg-[#c59b27] hover:text-white transition-colors">
              Toggle All Viva Answers
            </button>
            <span class="text-xs font-medium px-3 py-1.5 rounded-full bg-[#d8f3dc] dark:bg-[#193325] text-[#1b4332] dark:text-[#74c69d]">
              ${practicals.length} Procedure${practicals.length > 1 ? 's' : ''} Available
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8">
          ${practicals.map((p, idx) => `
            <div class="bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-sm hover:shadow-md transition-shadow overflow-hidden" id="prac-card-${p.id}">
              <!-- Header -->
              <div class="p-6 border-b border-[#e8e2d4] dark:border-[#25332b] bg-gradient-to-r from-[#faf8f5] to-white dark:from-[#17221d] dark:to-[#151f1a]">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#1b4332] text-white">
                      ${p.year}
                    </span>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded bg-[#f2eee3] dark:bg-[#25332b] text-[#133a27] dark:text-[#74c69d]">
                      ${p.subject}
                    </span>
                  </div>
                  ${p.demoVideoId ? `
                    <button onclick="window.App.switchTab('demos', '${p.demoVideoId}')" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 transition-colors">
                      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Launch AI Practical Simulation
                    </button>
                  ` : ''}
                </div>
                <h3 class="text-xl font-bold font-serif-ayur text-gray-900 dark:text-white mb-2">
                  ${p.title}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  <span class="font-semibold text-[#133a27] dark:text-[#52b788]">Aim:</span> ${p.aim}
                </p>
                ${p.classicalRef ? `
                  <div class="mt-3 p-2.5 rounded-lg bg-[#f9f6f0] dark:bg-[#1c2922] border border-[#e8e2d4] dark:border-[#2a3c32]">
                    <span class="text-xs font-semibold text-[#b58321] block mb-1">Classical Reference (ग्रन्थ सन्दर्भ):</span>
                    <p class="sanskrit-text text-sm">${p.classicalRef}</p>
                  </div>
                ` : ''}
              </div>

              <!-- Content Body -->
              <div class="p-6 space-y-6">
                <!-- Apparatus & Principle -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#1a2620] border border-[#f0ebd9] dark:border-[#25332b]">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1.5">
                      <svg class="w-4 h-4 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                      Apparatus & Reagents Required
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">${p.apparatus}</p>
                  </div>
                  <div class="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#1a2620] border border-[#f0ebd9] dark:border-[#25332b]">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1.5">
                      <svg class="w-4 h-4 text-[#52b788]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Ayurvedic Core Principle
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">${p.principle}</p>
                  </div>
                </div>

                <!-- Step-by-Step Procedure with Interactive Checklist -->
                <div>
                  <h4 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center justify-between">
                    <span>Step-by-Step Practical Procedure</span>
                    <span class="text-xs text-gray-500 font-normal lowercase">Check off steps as you practice in lab</span>
                  </h4>
                  <div class="space-y-3">
                    ${p.steps.map((s) => {
                      const stepKey = `${p.id}-step-${s.stepNumber}`;
                      const isChecked = !!completedSteps[stepKey];
                      return `
                        <div class="flex items-start gap-3 p-3.5 rounded-xl border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#18241e] hover:bg-[#faf8f5] dark:hover:bg-[#1d2b24] transition-colors">
                          <input type="checkbox" id="${stepKey}" data-step-key="${stepKey}" class="step-checkbox mt-1 w-4 h-4 text-[#1b4332] rounded focus:ring-[#1b4332] border-gray-300 cursor-pointer" ${isChecked ? 'checked' : ''}>
                          <label for="${stepKey}" class="cursor-pointer select-none flex-1">
                            <span class="text-sm font-bold text-gray-900 dark:text-gray-100 block mb-0.5">
                              Step ${s.stepNumber}: ${s.title}
                            </span>
                            <span class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed block">
                              ${s.detail}
                            </span>
                          </label>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>

                <!-- Observations & Precautions -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-[#18241e] border border-gray-200 dark:border-[#25332b]">
                    <span class="font-bold text-gray-800 dark:text-gray-200 block mb-1">Standard Observations & Results:</span>
                    <p class="text-gray-600 dark:text-gray-400">${p.observations}</p>
                  </div>
                  <div class="p-3.5 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                    <span class="font-bold text-red-800 dark:text-red-400 block mb-1">Precautions & Clinical Safety:</span>
                    <ul class="list-disc list-inside text-red-700 dark:text-red-300 space-y-0.5">
                      ${p.precautions.map(pr => `<li>${pr}</li>`).join('')}
                    </ul>
                  </div>
                </div>

                <!-- Viva Voce Section with Interactive Reveal -->
                <div class="pt-4 border-t border-[#e8e2d4] dark:border-[#25332b]">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-[#c59b27]"></span>
                      Frequently Asked Viva Voce Questions (${p.vivaQuestions.length})
                    </h4>
                    <span class="text-xs text-gray-500 dark:text-gray-400">Click to reveal answer</span>
                  </div>

                  <div class="space-y-3">
                    ${p.vivaQuestions.map((vq, vIdx) => `
                      <div class="viva-box p-4 rounded-xl bg-[#faf8f5] dark:bg-[#18241e] border border-[#e8e2d4] dark:border-[#25332b]">
                        <div class="flex items-start justify-between gap-4 cursor-pointer toggle-viva-btn" data-viva-id="${p.id}-${vIdx}">
                          <div class="flex items-start gap-2.5">
                            <span class="font-bold text-xs text-[#c59b27] px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-950/50">Q${vIdx+1}</span>
                            <span class="text-sm font-semibold text-gray-900 dark:text-gray-100">${vq.question}</span>
                          </div>
                          <span class="text-xs font-semibold text-[#1b4332] dark:text-[#52b788] whitespace-nowrap toggle-label">
                            Show Answer
                          </span>
                        </div>
                        <div class="viva-answer-content" id="viva-ans-${p.id}-${vIdx}">
                          <div class="p-3 bg-white dark:bg-[#141d18] rounded-lg border border-[#f0ebd9] dark:border-[#25332b] text-sm text-gray-700 dark:text-gray-300">
                            <p class="leading-relaxed mb-2">${vq.answer}</p>
                            ${vq.examinerTip ? `
                              <div class="flex items-start gap-1.5 text-xs text-[#b58321] dark:text-[#d4a373] mt-2 pt-2 border-t border-dashed border-[#e8e2d4] dark:border-[#25332b]">
                                <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span><strong>Examiner Scoring Tip:</strong> ${vq.examinerTip}</span>
                              </div>
                            ` : ''}
                          </div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>

              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Attach Viva Toggle Listeners
    container.querySelectorAll('.toggle-viva-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const id = this.getAttribute('data-viva-id');
        const content = document.getElementById(`viva-ans-${id}`);
        const label = this.querySelector('.toggle-label');
        if (!content) return;

        const isRevealed = content.classList.contains('revealed');
        if (isRevealed) {
          content.classList.remove('revealed');
          label.textContent = "Show Answer";
        } else {
          content.classList.add('revealed');
          label.textContent = "Hide Answer";
        }
      });
    });

    // Master Toggle
    const masterBtn = document.getElementById('btn-reveal-all-viva');
    if (masterBtn) {
      masterBtn.addEventListener('click', function() {
        const allAnswers = container.querySelectorAll('.viva-answer-content');
        const allLabels = container.querySelectorAll('.toggle-label');
        const anyHidden = Array.from(allAnswers).some(a => !a.classList.contains('revealed'));

        allAnswers.forEach(a => {
          if (anyHidden) a.classList.add('revealed');
          else a.classList.remove('revealed');
        });

        allLabels.forEach(l => {
          l.textContent = anyHidden ? "Hide Answer" : "Show Answer";
        });
      });
    }

    // Attach Checkbox State Listeners
    container.querySelectorAll('.step-checkbox').forEach(cb => {
      cb.addEventListener('change', function() {
        const key = this.getAttribute('data-step-key');
        const current = JSON.parse(localStorage.getItem("bams_completed_steps") || "{}");
        current[key] = this.checked;
        localStorage.setItem("bams_completed_steps", JSON.stringify(current));
      });
    });
  }
};
