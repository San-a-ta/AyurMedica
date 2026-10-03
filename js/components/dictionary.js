/**
 * AyurMedica - Chapter-Wise Ayurvedic Shabdakosha Component
 * Features: Chapter/Subject Explorer, Instant Search, A-Z Index, and Clinical Correlates
 */
window.DictionaryViewer = (() => {
  let state = {
    containerId: null,
    activeYear: "All",
    activeSubject: "All",
    activeChapter: "All",
    activeLetter: "All",
    searchQuery: ""
  };

  function getData() {
    return Array.isArray(window.BAMS_DICTIONARY) ? window.BAMS_DICTIONARY : [];
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
    return ["All", ...new Set(data.map(d => d.year).filter(Boolean))];
  }

  function getSubjects(data) {
    let filtered = data;
    if (state.activeYear !== "All" && state.activeYear !== "All Years") {
      filtered = data.filter(d => d.year === state.activeYear);
    }
    return ["All", ...new Set(filtered.map(d => d.subject).filter(Boolean))];
  }

  function getChapters(data) {
    let filtered = data;
    if (state.activeYear !== "All" && state.activeYear !== "All Years") {
      filtered = filtered.filter(d => d.year === state.activeYear);
    }
    if (state.activeSubject !== "All") {
      filtered = filtered.filter(d => d.subject === state.activeSubject);
    }
    return ["All", ...new Set(filtered.map(d => d.chapter || d.module).filter(Boolean))];
  }

  function getFilteredTerms() {
    let items = getData();

    if (state.activeYear && state.activeYear !== "All" && state.activeYear !== "All Years") {
      items = items.filter(d => d.year === state.activeYear);
    }

    if (state.activeSubject && state.activeSubject !== "All") {
      items = items.filter(d => d.subject === state.activeSubject);
    }

    if (state.activeChapter && state.activeChapter !== "All") {
      items = items.filter(d => (d.chapter || d.module) === state.activeChapter);
    }

    if (state.activeLetter && state.activeLetter !== "All") {
      items = items.filter(d => {
        const cleanTerm = (d.transliteration || d.term || "").trim().toUpperCase();
        return cleanTerm.startsWith(state.activeLetter);
      });
    }

    if (state.searchQuery && state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      items = items.filter(d =>
        (d.term && d.term.toLowerCase().includes(q)) ||
        (d.devanagari && d.devanagari.toLowerCase().includes(q)) ||
        (d.transliteration && d.transliteration.toLowerCase().includes(q)) ||
        (d.definition && d.definition.toLowerCase().includes(q)) ||
        (d.modernCorrelate && d.modernCorrelate.toLowerCase().includes(q)) ||
        (d.classicalReference && d.classicalReference.toLowerCase().includes(q)) ||
        (d.subject && d.subject.toLowerCase().includes(q)) ||
        (d.chapter && d.chapter.toLowerCase().includes(q))
      );
    }

    return items;
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
    const filtered = getFilteredTerms();
    const subjects = getSubjects(allData);
    const chapters = getChapters(allData);

    const alphabet = ["All", "A", "B", "C", "D", "G", "H", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y"];

    container.innerHTML = `
      <div class="space-y-6">
        
        <!-- Header Banner -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#e8e2d4] dark:border-[#25332b]">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold font-serif-ayur text-[#133a27] dark:text-[#74c69d]">
              All-Chapter Ayurvedic Shabdakosha
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Comprehensive medical glossary organized by syllabus chapters and subjects with classical citations and modern correlates.
            </p>
          </div>
          <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-[#d8f3dc] dark:bg-[#193325] text-[#1b4332] dark:text-[#74c69d]">
            ${filtered.length} Terms Found
          </span>
        </div>

        <!-- Filter & Search Controls -->
        <div class="p-4 rounded-2xl bg-[#faf8f5] dark:bg-[#151f1a] border border-[#e8e2d4] dark:border-[#25332b] space-y-3">
          
          <!-- Dropdowns Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            
            <!-- Year Selector -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Academic Year</label>
              <select id="dict-year-select" class="w-full text-xs p-2 rounded-lg border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#1c2922] text-gray-800 dark:text-gray-200">
                ${getYears(allData).map(y => `
                  <option value="${escapeHTML(y)}" ${state.activeYear === y ? 'selected' : ''}>${escapeHTML(y === 'All' ? 'All Years' : y)}</option>
                `).join('')}
              </select>
            </div>

            <!-- Subject Selector -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Subject</label>
              <select id="dict-subject-select" class="w-full text-xs p-2 rounded-lg border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#1c2922] text-gray-800 dark:text-gray-200">
                ${subjects.map(s => `
                  <option value="${escapeHTML(s)}" ${state.activeSubject === s ? 'selected' : ''}>${escapeHTML(s === 'All' ? 'All Subjects' : s)}</option>
                `).join('')}
              </select>
            </div>

            <!-- Chapter / Module Selector -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Chapter / Module</label>
              <select id="dict-chapter-select" class="w-full text-xs p-2 rounded-lg border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#1c2922] text-gray-800 dark:text-gray-200">
                ${chapters.map(c => `
                  <option value="${escapeHTML(c)}" ${state.activeChapter === c ? 'selected' : ''}>${escapeHTML(c === 'All' ? 'All Chapters' : c)}</option>
                `).join('')}
              </select>
            </div>

            <!-- Fast Search -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Search Keyword</label>
              <div class="relative">
                <input type="text" id="dict-search-input" value="${escapeHTML(state.searchQuery)}" placeholder="Term, correlate..."
                  class="w-full text-xs p-2 pl-7 rounded-lg border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#1c2922] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#1b4332]">
                <span class="absolute left-2 top-2 text-gray-400 text-xs">🔍</span>
                ${state.searchQuery ? `<button id="dict-clear-search" class="absolute right-2 top-1.5 text-gray-400 hover:text-gray-600 font-bold text-xs">×</button>` : ''}
              </div>
            </div>

          </div>

          <!-- Alphabetical Index Filter Bar -->
          <div class="flex items-center gap-1 overflow-x-auto pt-1 pb-0.5 text-xs scrollbar-none">
            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0 mr-1">Index:</span>
            ${alphabet.map(letter => `
              <button class="dict-letter-btn px-2 py-0.5 rounded text-[11px] font-semibold transition-colors shrink-0 ${state.activeLetter === letter ? 'bg-[#1b4332] text-white' : 'bg-white dark:bg-[#1c2922] text-gray-700 dark:text-gray-300 hover:bg-[#e8e2d4]'}"
                data-letter="${escapeHTML(letter)}">
                ${escapeHTML(letter)}
              </button>
            `).join('')}
            <button id="dict-reset-all" class="text-[10px] font-bold text-[#b58321] hover:underline shrink-0 ml-auto pl-2">Reset All</button>
          </div>

        </div>

        <!-- Dictionary Cards Grid -->
        ${filtered.length === 0 ? `
          <div class="text-center py-16 px-4 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b]">
            <div class="text-4xl mb-3">📖</div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">No Glossary Terms Match Your Filter</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">Try selecting another subject/chapter or clearing search keywords.</p>
            <button id="dict-reset-empty" class="px-4 py-2 rounded-xl bg-[#1b4332] text-white text-xs font-semibold">Show All Terms</button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${filtered.map(d => renderCard(d)).join('')}
          </div>
        `}

      </div>
    `;

    bindEvents(container);
  }

  function renderCard(d) {
    return `
      <div class="p-5 rounded-2xl bg-white dark:bg-[#151f1a] border border-[#e8e2d4] dark:border-[#25332b] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
        
        <!-- Card Header -->
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1b4332] text-white">${escapeHTML(d.year || 'BAMS')}</span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#f2eee3] dark:bg-[#25332b] text-[#133a27] dark:text-[#74c69d]">${escapeHTML(d.subject || 'Ayurveda')}</span>
              ${d.chapter ? `<span class="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">📄 ${escapeHTML(d.chapter)}</span>` : ''}
            </div>
            ${d.classicalReference ? `
              <span class="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/50 text-[#b58321] dark:text-[#d4a373] border border-amber-200/60 dark:border-amber-900/40">
                ${escapeHTML(d.classicalReference)}
              </span>
            ` : ''}
          </div>

          <!-- Term Title -->
          <div class="mb-2">
            <h3 class="text-xl font-bold font-serif-ayur text-gray-900 dark:text-white leading-snug">
              ${escapeHTML(d.term)}
            </h3>
            ${d.transliteration ? `
              <div class="text-xs italic text-gray-500 dark:text-gray-400 font-mono mt-0.5">
                IAST: ${escapeHTML(d.transliteration)}
              </div>
            ` : ''}
          </div>

          <!-- Definition -->
          <p class="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ${escapeHTML(d.definition)}
          </p>
        </div>

        <!-- Footnote: Modern Correlate & Clinical Relevance -->
        <div class="space-y-2 pt-3 border-t border-[#e8e2d4] dark:border-[#25332b]">
          ${d.modernCorrelate ? `
            <div class="text-xs flex items-start gap-1.5 text-blue-900 dark:text-blue-300 bg-blue-50/70 dark:bg-blue-950/30 p-2 rounded-lg border border-blue-100 dark:border-blue-900/40">
              <span class="font-bold shrink-0">🔬 Modern:</span>
              <span class="leading-normal">${escapeHTML(d.modernCorrelate)}</span>
            </div>
          ` : ''}

          ${d.clinicalRelevance ? `
            <div class="text-[11px] text-emerald-800 dark:text-emerald-300 flex items-start gap-1">
              <span class="font-bold shrink-0">🩺 Practice:</span>
              <span>${escapeHTML(d.clinicalRelevance)}</span>
            </div>
          ` : ''}
        </div>

      </div>
    `;
  }

  function bindEvents(container) {
    // Year dropdown
    const yearSel = container.querySelector("#dict-year-select");
    if (yearSel) {
      yearSel.addEventListener("change", (e) => {
        state.activeYear = e.target.value;
        state.activeSubject = "All";
        state.activeChapter = "All";
        render(state.containerId);
      });
    }

    // Subject dropdown
    const subSel = container.querySelector("#dict-subject-select");
    if (subSel) {
      subSel.addEventListener("change", (e) => {
        state.activeSubject = e.target.value;
        state.activeChapter = "All";
        render(state.containerId);
      });
    }

    // Chapter dropdown
    const chapSel = container.querySelector("#dict-chapter-select");
    if (chapSel) {
      chapSel.addEventListener("change", (e) => {
        state.activeChapter = e.target.value;
        render(state.containerId);
      });
    }

    // Search input
    const searchInput = container.querySelector("#dict-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        render(state.containerId);
      });
    }

    const clearSearch = container.querySelector("#dict-clear-search");
    if (clearSearch) {
      clearSearch.addEventListener("click", () => {
        state.searchQuery = "";
        render(state.containerId);
      });
    }

    // Letter buttons
    container.querySelectorAll(".dict-letter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const letter = btn.getAttribute("data-letter");
        state.activeLetter = letter;
        render(state.containerId);
      });
    });

    // Reset buttons
    const resetAll = container.querySelector("#dict-reset-all");
    if (resetAll) {
      resetAll.addEventListener("click", () => {
        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.activeLetter = "All";
        state.searchQuery = "";
        render(state.containerId);
      });
    }

    const resetEmpty = container.querySelector("#dict-reset-empty");
    if (resetEmpty) {
      resetEmpty.addEventListener("click", () => {
        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.activeLetter = "All";
        state.searchQuery = "";
        render(state.containerId);
      });
    }
  }

  return {
    render: render
  };
})();
