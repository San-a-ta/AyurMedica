/**
 * Component: NCISM Syllabus, Marks Distribution & Reference Books Viewer
 */
window.SyllabusViewer = {
  render: function(containerId, activeYear) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let syllabusList = window.BAMS_SYLLABUS || [];

    // Filter by academic year
    if (activeYear && activeYear !== "All") {
      syllabusList = syllabusList.filter(s => s.year === activeYear);
    }

    container.innerHTML = `
      <div class="space-y-8">
        <!-- Section Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#e8e2d4] dark:border-[#25332b]">
          <div>
            <h2 class="text-2xl font-bold font-serif-ayur text-[#133a27] dark:text-[#74c69d]">
              NCISM Curriculum, Marks Weightage & Reference Books
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Official Ministry of AYUSH syllabus, theory vs practical examination schemes, and comprehensive NCISM prescribed reference books.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-toggle-all-books" class="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#c59b27] text-[#c59b27] hover:bg-[#c59b27] hover:text-white transition-colors">
              Expand All Reference Books
            </button>
            <span class="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f2eee3] dark:bg-[#1c2922] text-[#133a27] dark:text-[#74c69d]">
              AYUSH Standard
            </span>
          </div>
        </div>

        <div class="space-y-10">
          ${syllabusList.map(yObj => `
            <div class="space-y-6">
              <!-- Year Banner -->
              <div class="p-4 rounded-2xl bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] text-white shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span class="text-xs font-bold uppercase tracking-widest text-[#52b788] block">Academic Curriculum & Prescribed Texts</span>
                  <h3 class="text-xl font-bold font-serif-ayur">${yObj.yearTitle}</h3>
                  <p class="text-xs text-emerald-100 mt-1">${yObj.description}</p>
                </div>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur">
                  ${yObj.subjects.length} Subjects
                </span>
              </div>

              <!-- Subjects Grid -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                ${yObj.subjects.map(sub => {
                  const refBooks = sub.referenceBooks || {};
                  const classical = refBooks.classical || [];
                  const modernAyur = refBooks.modernAyurvedic || [];
                  const contemporary = refBooks.contemporaryMedical || [];
                  const totalBooksCount = classical.length + modernAyur.length + contemporary.length;

                  return `
                    <div class="bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between" id="sub-card-${sub.id}">
                      <div>
                        <!-- Subject Title & Code -->
                        <div class="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-[#f2eee3] dark:bg-[#25332b] text-[#1b4332] dark:text-[#74c69d] uppercase">
                              ${sub.code}
                            </span>
                            <h4 class="text-lg font-bold font-serif-ayur text-gray-900 dark:text-white mt-1">
                              ${sub.name}
                            </h4>
                            <span class="text-xs text-[#b58321] block">${sub.translation}</span>
                          </div>
                          <div class="text-right">
                            <span class="text-xs text-gray-500 dark:text-gray-400 block">Total Marks</span>
                            <span class="text-lg font-bold text-[#1b4332] dark:text-[#52b788]">${sub.totalMarks} M</span>
                          </div>
                        </div>

                        <!-- Marks Distribution Bar -->
                        <div class="my-3 p-2.5 rounded-xl bg-[#faf8f5] dark:bg-[#18241e] border border-[#e8e2d4] dark:border-[#25332b] flex items-center justify-around text-xs">
                          <div class="text-center">
                            <span class="text-gray-500 dark:text-gray-400 block text-[10px]">Theory</span>
                            <span class="font-bold text-gray-900 dark:text-gray-100">${sub.theoryMarks} M</span>
                          </div>
                          <div class="h-6 w-px bg-[#e8e2d4] dark:border-[#25332b]"></div>
                          <div class="text-center">
                            <span class="text-gray-500 dark:text-gray-400 block text-[10px]">Practical/Viva</span>
                            <span class="font-bold text-gray-900 dark:text-gray-100">${sub.practicalMarks} M</span>
                          </div>
                          <div class="h-6 w-px bg-[#e8e2d4] dark:border-[#25332b]"></div>
                          <div class="text-center">
                            <span class="text-gray-500 dark:text-gray-400 block text-[10px]">Papers</span>
                            <span class="font-bold text-gray-900 dark:text-gray-100">${sub.papers.length} Papers</span>
                          </div>
                        </div>

                        <!-- Papers Breakdown -->
                        <div class="space-y-2 mb-4">
                          ${sub.papers.map(p => `
                            <div class="text-xs p-2 rounded-lg bg-gray-50 dark:bg-[#19231d] border border-gray-100 dark:border-[#25332b]">
                              <div class="flex justify-between font-bold text-gray-800 dark:text-gray-200 mb-0.5">
                                <span>${p.paper}</span>
                                <span class="text-[#b58321]">${p.marks} Marks</span>
                              </div>
                              <p class="text-gray-600 dark:text-gray-400 leading-snug">${p.topics}</p>
                            </div>
                          `).join('')}
                        </div>

                        <!-- Core Clinical Competencies -->
                        <div class="mb-4">
                          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1b4332] dark:text-[#52b788] block mb-1.5">
                            Core Competency Milestones:
                          </span>
                          <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                            ${sub.competencies.map(c => `
                              <li class="flex items-start gap-1.5">
                                <svg class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>${c}</span>
                              </li>
                            `).join('')}
                          </ul>
                        </div>
                      </div>

                      <!-- NCISM Prescribed Reference Books Section -->
                      <div class="pt-3 border-t border-[#e8e2d4] dark:border-[#25332b]">
                        <div class="flex items-center justify-between cursor-pointer py-1.5 toggle-books-btn" data-target="books-${sub.id}">
                          <span class="text-xs font-bold text-[#1b4332] dark:text-[#74c69d] flex items-center gap-1.5">
                            <svg class="w-4 h-4 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                            Prescribed Reference Books (${totalBooksCount})
                          </span>
                          <span class="text-[11px] font-semibold text-[#b58321] toggle-icon">View Books ▼</span>
                        </div>

                        <!-- Expandable Books Drawer -->
                        <div id="books-${sub.id}" class="books-drawer hidden mt-3 space-y-4 pt-2 border-t border-dashed border-[#e8e2d4] dark:border-[#25332b]">
                          
                          <!-- 1. Classical Samhitas & Commentaries -->
                          ${classical.length > 0 ? `
                            <div>
                              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 block mb-2 w-fit">
                                📜 Classical Samhitas & Commentaries (मूल ग्रन्थ एवं टीका)
                              </span>
                              <div class="space-y-2">
                                ${classical.map(b => `
                                  <div class="p-2.5 rounded-lg bg-[#faf8f5] dark:bg-[#18241e] border border-[#e8e2d4] dark:border-[#25332b] text-xs">
                                    <div class="flex items-start justify-between gap-2">
                                      <div class="font-bold text-gray-900 dark:text-gray-100 font-serif-ayur">${b.title}</div>
                                      ${b.link ? `
                                        <a href="${b.link}" target="_blank" rel="noopener noreferrer" 
                                           class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#1b4332] hover:bg-[#2d6a4f] text-white dark:bg-[#52b788] dark:hover:bg-[#74c69d] dark:text-[#0f1b14] transition-all shadow-xs shrink-0"
                                           title="Open classical text edition">
                                          📖 Read / Ref ↗
                                        </a>
                                      ` : ''}
                                    </div>
                                    <div class="text-gray-600 dark:text-gray-300 mt-0.5">
                                      <span class="font-semibold text-[#1b4332] dark:text-[#52b788]">Author:</span> ${b.author}
                                      ${b.commentary ? ` • <span class="font-semibold text-[#b58321]">Commentary:</span> ${b.commentary}` : ''}
                                    </div>
                                    ${b.publisher ? `<div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Publisher: ${b.publisher}</div>` : ''}
                                  </div>
                                `).join('')}
                              </div>
                            </div>
                          ` : ''}

                          <!-- 2. Modern Ayurvedic Authoritative Textbooks -->
                          ${modernAyur.length > 0 ? `
                            <div>
                              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 block mb-2 w-fit">
                                🌿 Modern Ayurvedic Authoritative Texts (आधुनिक आयुर्वेदीय ग्रन्थ)
                              </span>
                              <div class="space-y-2">
                                ${modernAyur.map(b => `
                                  <div class="p-2.5 rounded-lg bg-[#f0f9f4] dark:bg-[#14231b] border border-emerald-100 dark:border-[#25332b] text-xs">
                                    <div class="flex items-start justify-between gap-2">
                                      <div class="font-bold text-gray-900 dark:text-gray-100">${b.title}</div>
                                      ${b.link ? `
                                        <a href="${b.link}" target="_blank" rel="noopener noreferrer" 
                                           class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-[#52b788] dark:hover:bg-[#74c69d] dark:text-[#0f1b14] transition-all shadow-xs shrink-0"
                                           title="Open modern Ayurvedic textbook">
                                          📖 Read / Ref ↗
                                        </a>
                                      ` : ''}
                                    </div>
                                    <div class="text-gray-600 dark:text-gray-300 mt-0.5">
                                      <span class="font-semibold text-[#1b4332] dark:text-[#52b788]">Author:</span> ${b.author}
                                      ${b.publisher ? ` • <span class="text-gray-500">Publisher: ${b.publisher}</span>` : ''}
                                    </div>
                                    ${b.focus ? `<div class="text-[11px] text-emerald-800 dark:text-emerald-300 italic mt-0.5">Focus: ${b.focus}</div>` : ''}
                                  </div>
                                `).join('')}
                              </div>
                            </div>
                          ` : ''}

                          <!-- 3. Contemporary Allopathic / Scientific Textbooks -->
                          ${contemporary.length > 0 ? `
                            <div>
                              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-900 dark:text-blue-200 block mb-2 w-fit">
                                🔬 Contemporary Medical Science Reference (आधुनिक चिकित्सा विज्ञान)
                              </span>
                              <div class="space-y-2">
                                ${contemporary.map(b => `
                                  <div class="p-2.5 rounded-lg bg-blue-50/50 dark:bg-[#121f29] border border-blue-100 dark:border-blue-900/30 text-xs">
                                    <div class="flex items-start justify-between gap-2">
                                      <div class="font-bold text-gray-900 dark:text-gray-100">${b.title} ${b.edition ? `<span class="text-[10px] font-normal text-blue-700 dark:text-blue-300">(${b.edition})</span>` : ''}</div>
                                      ${b.link ? `
                                        <a href="${b.link}" target="_blank" rel="noopener noreferrer" 
                                           class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-400 dark:hover:bg-blue-300 dark:text-gray-900 transition-all shadow-xs shrink-0"
                                           title="Open contemporary medical reference">
                                          📖 Read / Ref ↗
                                        </a>
                                      ` : ''}
                                    </div>
                                    <div class="text-gray-600 dark:text-gray-300 mt-0.5">
                                      <span class="font-semibold text-blue-800 dark:text-blue-300">Author:</span> ${b.author}
                                      ${b.publisher ? ` • Publisher: ${b.publisher}` : ''}
                                    </div>
                                    ${b.focus ? `<div class="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">Curricular Scope: ${b.focus}</div>` : ''}
                                  </div>
                                `).join('')}
                              </div>
                            </div>
                          ` : ''}

                        </div>
                      </div>

                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Toggle Books Drawer Listeners
    container.querySelectorAll('.toggle-books-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const drawer = document.getElementById(targetId);
        const icon = this.querySelector('.toggle-icon');
        if (!drawer) return;

        if (drawer.classList.contains('hidden')) {
          drawer.classList.remove('hidden');
          icon.textContent = "Hide Books ▲";
        } else {
          drawer.classList.add('hidden');
          icon.textContent = "View Books ▼";
        }
      });
    });

    // Master Toggle Button
    const masterToggleBtn = document.getElementById('btn-toggle-all-books');
    if (masterToggleBtn) {
      masterToggleBtn.addEventListener('click', function() {
        const allDrawers = container.querySelectorAll('.books-drawer');
        const allIcons = container.querySelectorAll('.toggle-icon');
        const anyHidden = Array.from(allDrawers).some(d => d.classList.contains('hidden'));

        allDrawers.forEach(d => {
          if (anyHidden) d.classList.remove('hidden');
          else d.classList.add('hidden');
        });

        allIcons.forEach(i => {
          i.textContent = anyHidden ? "Hide Books ▲" : "View Books ▼";
        });

        masterToggleBtn.textContent = anyHidden ? "Collapse All Reference Books" : "Expand All Reference Books";
      });
    }
  }
};
