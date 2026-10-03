/**
 * AyurMedica - Summary Viewer with Interactive Folder Explorer
 * Architecture: Professional Year -> Subject -> Module / Chapter
 */
window.SummaryViewer = (() => {
  let state = {
    containerId: null,
    activeYear: "All",
    activeSubject: "All",
    activeChapter: "All",
    searchQuery: "",
    mobileFolderOpen: false
  };

  function getData() {
    return Array.isArray(window.BAMS_SUMMARIES) ? window.BAMS_SUMMARIES : [];
  }

  function escapeHTML(value) {
    if (value === null || value === undefined) return "";
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getYears(data) {
    return ["All", ...new Set(data.map(s => s.year).filter(Boolean))];
  }

  function getSubjects(data) {
    let filtered = data;
    if (state.activeYear !== "All" && state.activeYear !== "All Years") {
      filtered = data.filter(s => s.year === state.activeYear);
    }
    return ["All", ...new Set(filtered.map(s => s.subject).filter(Boolean))];
  }

  function getFilteredSummaries() {
    let items = getData();

    if (state.activeYear && state.activeYear !== "All" && state.activeYear !== "All Years") {
      items = items.filter(s => s.year === state.activeYear);
    }

    if (state.activeSubject && state.activeSubject !== "All") {
      items = items.filter(s => s.subject === state.activeSubject);
    }

    if (state.activeChapter && state.activeChapter !== "All") {
      items = items.filter(s => (s.chapter || s.module) === state.activeChapter);
    }

    if (state.searchQuery && state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      items = items.filter(s =>
        (s.title && s.title.toLowerCase().includes(q)) ||
        (s.subject && s.subject.toLowerCase().includes(q)) ||
        (s.module && s.module.toLowerCase().includes(q)) ||
        (s.chapter && s.chapter.toLowerCase().includes(q)) ||
        (s.summaryQuote && s.summaryQuote.toLowerCase().includes(q)) ||
        (s.mnemonics && s.mnemonics.toLowerCase().includes(q)) ||
        (s.clinicalTakeaway && s.clinicalTakeaway.toLowerCase().includes(q)) ||
        (s.keyPoints && s.keyPoints.some(kp => kp.toLowerCase().includes(q)))
      );
    }

    return items;
  }

  function renderFolderTree(data) {
    const years = getYears(data).filter(y => y !== "All");

    let html = `
      <div class="summary-folder-tree bg-[#faf8f5] dark:bg-[#151f1a] p-3 rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-xs">
        <div class="flex items-center justify-between pb-3 border-b border-[#e8e2d4] dark:border-[#25332b] mb-3">
          <div class="font-bold text-xs uppercase tracking-wider text-[#1b4332] dark:text-[#74c69d] flex items-center gap-1.5">
            <span>📁</span>
            <span>Subject & Chapter Folders</span>
          </div>
          <button id="sum-reset-filters" class="text-[10px] font-bold text-[#b58321] hover:underline">Reset</button>
        </div>

        <div class="space-y-1">
          <button class="sum-folder-node w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${state.activeYear === 'All' && state.activeSubject === 'All' && state.activeChapter === 'All' ? 'bg-[#1b4332] text-white' : 'hover:bg-[#f0ebd9] dark:hover:bg-[#1e2e25] text-gray-700 dark:text-gray-200'}"
            data-set-year="All" data-set-subject="All" data-set-chapter="All">
            <span class="flex items-center gap-1.5">
              <span>📚</span>
              <span>All Subjects & Years</span>
            </span>
            <span class="text-[10px] px-1.5 py-0.5 rounded ${state.activeYear === 'All' ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-800'}">${data.length}</span>
          </button>
    `;

    years.forEach(year => {
      const yearItems = data.filter(s => s.year === year);
      const subjects = [...new Set(yearItems.map(s => s.subject).filter(Boolean))];
      const isYearActive = state.activeYear === year;

      html += `
        <div class="sum-year-block mt-2">
          <button class="sum-year-toggle w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${isYearActive ? 'bg-[#e8f5e9] dark:bg-[#1a3828] text-[#1b4332] dark:text-[#74c69d]' : 'hover:bg-[#f0ebd9] dark:hover:bg-[#1e2e25] text-gray-800 dark:text-gray-100'}"
            data-year="${escapeHTML(year)}">
            <span class="flex items-center gap-1.5">
              <span>${isYearActive ? '📂' : '📁'}</span>
              <span>${escapeHTML(year)}</span>
            </span>
            <div class="flex items-center gap-1">
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#e8e2d4] dark:bg-[#25332b] text-gray-600 dark:text-gray-300">${yearItems.length}</span>
              <span class="text-[10px] text-gray-400 sum-arrow-icon">${isYearActive ? '▼' : '▶'}</span>
            </div>
          </button>

          <div class="sum-subject-group pl-3 mt-1 space-y-1 ${isYearActive || state.activeYear === 'All' ? '' : 'hidden'}" id="sum-group-${escapeHTML(year).replace(/\s+/g, '-')}">
      `;

      subjects.forEach(subject => {
        const subItems = yearItems.filter(s => s.subject === subject);
        const isSubjectActive = state.activeSubject === subject && (state.activeYear === year || state.activeYear === 'All');

        html += `
          <div class="sum-sub-block">
            <button class="sum-subject-toggle w-full text-left px-2 py-1 rounded text-xs font-semibold flex items-center justify-between transition-colors ${isSubjectActive ? 'bg-[#d8f3dc] dark:bg-[#1b4332] text-[#133a27] dark:text-[#74c69d]' : 'hover:bg-[#f2eee3] dark:hover:bg-[#1c2922] text-gray-700 dark:text-gray-300'}"
              data-year="${escapeHTML(year)}" data-subject="${escapeHTML(subject)}">
              <span class="flex items-center gap-1.5 truncate">
                <span>📖</span>
                <span class="truncate">${escapeHTML(subject)}</span>
              </span>
              <span class="text-[9px] px-1 py-0.2 rounded bg-gray-200 dark:bg-gray-800 shrink-0">${subItems.length}</span>
            </button>

            <div class="sum-chapter-list pl-3 mt-0.5 space-y-0.5 ${isSubjectActive ? '' : 'hidden'}" id="sum-chaps-${escapeHTML(year).replace(/\s+/g, '-')}-${escapeHTML(subject).replace(/[^a-zA-Z0-9]/g, '-')}">
        `;

        subItems.forEach(item => {
          const chapName = item.chapter || item.module || item.title;
          const isChapActive = state.activeChapter === chapName;

          html += `
            <button class="sum-chapter-link w-full text-left px-2 py-1 rounded text-[11px] flex items-center justify-between transition-colors ${isChapActive ? 'bg-[#b58321] text-white font-bold' : 'hover:bg-[#f0ebd9] dark:hover:bg-[#1e2e25] text-gray-600 dark:text-gray-400'}"
              data-year="${escapeHTML(year)}" data-subject="${escapeHTML(subject)}" data-chapter="${escapeHTML(chapName)}">
              <span class="truncate flex items-center gap-1">
                <span>📄</span>
                <span class="truncate">${escapeHTML(chapName)}</span>
              </span>
              <span class="text-[9px] opacity-70">${item.readTime || '5m'}</span>
            </button>
          `;
        });

        html += `
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    return html;
  }

  function renderSummaryCard(s) {
    return `
      <div class="bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-xs hover:shadow-md transition-shadow overflow-hidden mb-6" id="summary-card-${s.id}">
        
        <!-- Header Ribbon -->
        <div class="p-5 md:p-6 bg-gradient-to-r from-[#faf8f5] to-white dark:from-[#17221d] dark:to-[#151f1a] border-b border-[#e8e2d4] dark:border-[#25332b]">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#1b4332] text-white">${escapeHTML(s.year)}</span>
              <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#f2eee3] dark:bg-[#25332b] text-[#133a27] dark:text-[#74c69d]">${escapeHTML(s.subject)}</span>
              ${s.module ? `<span class="text-[11px] font-medium px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">📂 ${escapeHTML(s.module)}</span>` : ''}
              ${s.chapter ? `<span class="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">📄 ${escapeHTML(s.chapter)}</span>` : ''}
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">⏱ ${escapeHTML(s.readTime || '5 min read')}</span>
          </div>

          <h3 class="text-xl md:text-2xl font-bold font-serif-ayur text-gray-900 dark:text-white leading-snug">
            ${escapeHTML(s.title)}
          </h3>

          ${s.summaryQuote ? `
            <div class="mt-3 p-3 rounded-xl bg-amber-50/70 dark:bg-[#1a2820] border-l-4 border-[#b58321] text-xs md:text-sm italic font-serif-ayur text-[#133a27] dark:text-[#74c69d]">
              ${escapeHTML(s.summaryQuote)}
            </div>
          ` : ''}
        </div>

        <!-- Body -->
        <div class="p-5 md:p-6 space-y-6">
          
          <!-- Comparative Matrix Table -->
          ${s.tableData && s.tableData.headers ? `
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                <span>📊</span>
                <span>High-Yield Comparative Matrix</span>
              </div>
              <div class="overflow-x-auto rounded-xl border border-[#e8e2d4] dark:border-[#25332b]">
                <table class="w-full text-left text-xs border-collapse">
                  <thead class="bg-[#f7f4ec] dark:bg-[#1a2922] text-[#133a27] dark:text-[#74c69d] font-bold border-b border-[#e8e2d4] dark:border-[#25332b]">
                    <tr>
                      ${s.tableData.headers.map(h => `<th class="p-3 whitespace-nowrap">${escapeHTML(h)}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#f0ebd9] dark:divide-[#25332b] bg-white dark:bg-[#151f1a]">
                    ${s.tableData.rows.map(row => `
                      <tr class="hover:bg-[#faf8f5] dark:hover:bg-[#18241e] transition-colors">
                        ${row.map((cell, cIdx) => `
                          <td class="p-3 ${cIdx === 0 ? 'font-bold text-gray-900 dark:text-gray-100 bg-[#fdfbf7] dark:bg-[#16221c]' : 'text-gray-700 dark:text-gray-300'}">
                            ${escapeHTML(cell)}
                          </td>
                        `).join('')}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- Key High-Scoring Points -->
          ${s.keyPoints && s.keyPoints.length > 0 ? `
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                <span>🎯</span>
                <span>Key Examination Revision Points</span>
              </div>
              <ul class="space-y-2">
                ${s.keyPoints.map(kp => `
                  <li class="flex items-start gap-2.5 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                    <span class="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">•</span>
                    <span>${escapeHTML(kp)}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Mnemonic & Clinical Takeaways Dual Column -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            ${s.mnemonics ? `
              <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-xs">
                <div class="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5 mb-1">
                  <span>💡</span>
                  <span>Memory Mnemonic</span>
                </div>
                <div class="text-amber-800 dark:text-amber-300 font-mono text-[11px] leading-relaxed">
                  ${escapeHTML(s.mnemonics)}
                </div>
              </div>
            ` : ''}

            ${s.clinicalTakeaway ? `
              <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/40 text-xs">
                <div class="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 mb-1">
                  <span>🩺</span>
                  <span>Clinical Application (व्यवहारिक प्रयोग)</span>
                </div>
                <div class="text-emerald-800 dark:text-emerald-300 leading-relaxed">
                  ${escapeHTML(s.clinicalTakeaway)}
                </div>
              </div>
            ` : ''}
          </div>

        </div>
      </div>
    `;
  }

  function render(containerId, activeYear, searchQuery) {
    const container = document.getElementById(containerId);
    if (!container) return;

    state.containerId = containerId;
    if (activeYear && activeYear !== undefined) {
      state.activeYear = activeYear;
    }
    if (searchQuery !== undefined) {
      state.searchQuery = searchQuery;
    }

    const allData = getData();
    const filtered = getFilteredSummaries();

    container.innerHTML = `
      <div class="space-y-6">
        
        <!-- Header Banner -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#e8e2d4] dark:border-[#25332b]">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold font-serif-ayur text-[#133a27] dark:text-[#74c69d]">
              Chapter & Module Summaries
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              High-yield subject notes, comparative tables, and Sanskrit canons categorized by Subjects and Chapters.
            </p>
          </div>

          <!-- Quick Actions -->
          <div class="flex items-center gap-2">
            <!-- Mobile Toggle Folder Drawer Button -->
            <button id="sum-mobile-toggle-btn" class="lg:hidden px-3 py-1.5 rounded-xl bg-[#1b4332] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm">
              <span>📁</span>
              <span>Browse Folders</span>
            </button>
            <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-[#d8f3dc] dark:bg-[#193325] text-[#1b4332] dark:text-[#74c69d]">
              ${filtered.length} Chapters Available
            </span>
          </div>
        </div>

        <!-- Breadcrumbs & Search Row -->
        <div class="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#faf8f5] dark:bg-[#151f1a] border border-[#e8e2d4] dark:border-[#25332b]">
          <div class="flex flex-wrap items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300 font-medium">
            <span>📍 Active:</span>
            <span class="font-bold text-[#1b4332] dark:text-[#74c69d]">${escapeHTML(state.activeYear === 'All' ? 'All Years' : state.activeYear)}</span>
            ${state.activeSubject !== 'All' ? `<span class="text-gray-400">›</span><span class="font-bold text-[#1b4332] dark:text-[#74c69d]">${escapeHTML(state.activeSubject)}</span>` : ''}
            ${state.activeChapter !== 'All' ? `<span class="text-gray-400">›</span><span class="font-bold text-[#b58321]">${escapeHTML(state.activeChapter)}</span>` : ''}
          </div>

          <!-- Fast Summary Filter -->
          <div class="relative w-full sm:w-64">
            <input type="text" id="sum-search-input" value="${escapeHTML(state.searchQuery)}" placeholder="Search chapters, tables..."
              class="w-full text-xs px-3 py-1.5 pl-8 rounded-lg border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#1c2922] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#1b4332]">
            <span class="absolute left-2.5 top-1.5 text-gray-400 text-xs">🔍</span>
            ${state.searchQuery ? `<button id="sum-clear-search" class="absolute right-2.5 top-1 text-gray-400 hover:text-gray-600 text-xs font-bold">×</button>` : ''}
          </div>
        </div>

        <!-- Two Column Layout: Left Folder Tree, Right Content -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Folder Sidebar (Desktop: 4 cols, Mobile: toggleable drawer) -->
          <div id="sum-sidebar-col" class="lg:col-span-4 ${state.mobileFolderOpen ? 'block' : 'hidden lg:block'} transition-all">
            ${renderFolderTree(allData)}
          </div>

          <!-- Summaries List Content (Desktop: 8 cols) -->
          <div class="lg:col-span-8 space-y-6">
            ${filtered.length === 0 ? `
              <div class="text-center py-16 px-4 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b]">
                <div class="text-4xl mb-3">📖</div>
                <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">No Summaries Match Current Selection</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">Try selecting another chapter from the folder sidebar or clearing search terms.</p>
                <button id="sum-reset-empty" class="px-4 py-2 rounded-xl bg-[#1b4332] text-white text-xs font-semibold">Show All Summaries</button>
              </div>
            ` : `
              <div>
                ${filtered.map(s => renderSummaryCard(s)).join('')}
              </div>
            `}
          </div>

        </div>

      </div>
    `;

    bindEvents(container);
  }

  function bindEvents(container) {
    // Reset filters
    const resetBtn = container.querySelector("#sum-reset-filters");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.searchQuery = "";
        render(state.containerId);
      });
    }

    const resetEmpty = container.querySelector("#sum-reset-empty");
    if (resetEmpty) {
      resetEmpty.addEventListener("click", () => {
        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.searchQuery = "";
        render(state.containerId);
      });
    }

    // Search input
    const searchInput = container.querySelector("#sum-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        render(state.containerId);
      });
    }

    const clearSearch = container.querySelector("#sum-clear-search");
    if (clearSearch) {
      clearSearch.addEventListener("click", () => {
        state.searchQuery = "";
        render(state.containerId);
      });
    }

    // Mobile toggle
    const mobToggle = container.querySelector("#sum-mobile-toggle-btn");
    if (mobToggle) {
      mobToggle.addEventListener("click", () => {
        state.mobileFolderOpen = !state.mobileFolderOpen;
        const col = container.querySelector("#sum-sidebar-col");
        if (col) {
          if (state.mobileFolderOpen) {
            col.classList.remove("hidden");
          } else {
            col.classList.add("hidden");
          }
        }
      });
    }

    // Folder node clicks
    container.querySelectorAll(".sum-folder-node").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.mobileFolderOpen = false;
        render(state.containerId);
      });
    });

    // Year toggles
    container.querySelectorAll(".sum-year-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const year = btn.getAttribute("data-year");
        state.activeYear = (state.activeYear === year ? "All" : year);
        state.activeSubject = "All";
        state.activeChapter = "All";
        render(state.containerId);
      });
    });

    // Subject toggles
    container.querySelectorAll(".sum-subject-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const year = btn.getAttribute("data-year");
        const subject = btn.getAttribute("data-subject");
        state.activeYear = year;
        state.activeSubject = (state.activeSubject === subject ? "All" : subject);
        state.activeChapter = "All";
        render(state.containerId);
      });
    });

    // Chapter links
    container.querySelectorAll(".sum-chapter-link").forEach(btn => {
      btn.addEventListener("click", () => {
        const year = btn.getAttribute("data-year");
        const subject = btn.getAttribute("data-subject");
        const chapter = btn.getAttribute("data-chapter");
        state.activeYear = year;
        state.activeSubject = subject;
        state.activeChapter = chapter;
        state.mobileFolderOpen = false;
        render(state.containerId);
      });
    });
  }

  return {
    render: render
  };
})();
