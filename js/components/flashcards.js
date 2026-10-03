/**
 * AyurMedica - Interactive Syllabus Shlokas Flashcards Engine
 * Architecture: Professional Year -> Subject -> Module / Chapter Folders
 * Dual-View: 3D Flip Card Study Mode + Chapter Shloka Directory List Mode
 */
window.FlashcardsViewer = (() => {
  let state = {
    containerId: null,
    currentIndex: 0,
    isFlipped: false,
    activeYear: "All",
    activeSubject: "All",
    activeChapter: "All",
    searchQuery: "",
    viewMode: "flip", // "flip" or "list"
    mobileFolderOpen: false,
    masteredIds: new Set(JSON.parse(localStorage.getItem("bams_mastered_cards") || "[]"))
  };

  function getData() {
    return Array.isArray(window.BAMS_FLASHCARDS) ? window.BAMS_FLASHCARDS : [];
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
    return ["All", ...new Set(data.map(c => c.year).filter(Boolean))];
  }

  function getFilteredCards() {
    let cards = getData();

    if (state.activeYear && state.activeYear !== "All" && state.activeYear !== "All Years") {
      cards = cards.filter(c => c.year === state.activeYear);
    }

    if (state.activeSubject && state.activeSubject !== "All") {
      cards = cards.filter(c => c.subject === state.activeSubject);
    }

    if (state.activeChapter && state.activeChapter !== "All") {
      cards = cards.filter(c => (c.chapter || c.module) === state.activeChapter);
    }

    if (state.searchQuery && state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      cards = cards.filter(c =>
        (c.front && c.front.toLowerCase().includes(q)) ||
        (c.shloka && c.shloka.toLowerCase().includes(q)) ||
        (c.transliteration && c.transliteration.toLowerCase().includes(q)) ||
        (c.translation && c.translation.toLowerCase().includes(q)) ||
        (c.subject && c.subject.toLowerCase().includes(q)) ||
        (c.chapter && c.chapter.toLowerCase().includes(q)) ||
        (c.topic && c.topic.toLowerCase().includes(q)) ||
        (c.source && c.source.reference && c.source.reference.toLowerCase().includes(q))
      );
    }

    return cards;
  }

  function renderFolderTree(data) {
    const years = getYears(data).filter(y => y !== "All");

    let html = `
      <div class="fc-folder-tree bg-[#faf8f5] dark:bg-[#151f1a] p-3 rounded-2xl border border-[#e8e2d4] dark:border-[#25332b] shadow-xs">
        <div class="flex items-center justify-between pb-3 border-b border-[#e8e2d4] dark:border-[#25332b] mb-3">
          <div class="font-bold text-xs uppercase tracking-wider text-[#1b4332] dark:text-[#74c69d] flex items-center gap-1.5">
            <span>📁</span>
            <span>Shloka Folders</span>
          </div>
          <button id="fc-reset-filters" class="text-[10px] font-bold text-[#b58321] hover:underline">Reset</button>
        </div>

        <div class="space-y-1">
          <button class="fc-folder-node w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${state.activeYear === 'All' && state.activeSubject === 'All' && state.activeChapter === 'All' ? 'bg-[#1b4332] text-white' : 'hover:bg-[#f0ebd9] dark:hover:bg-[#1e2e25] text-gray-700 dark:text-gray-200'}"
            data-set-year="All" data-set-subject="All" data-set-chapter="All">
            <span class="flex items-center gap-1.5">
              <span>🎴</span>
              <span>All Syllabus Shlokas</span>
            </span>
            <span class="text-[10px] px-1.5 py-0.5 rounded ${state.activeYear === 'All' ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-800'}">${data.length}</span>
          </button>
    `;

    years.forEach(year => {
      const yearItems = data.filter(c => c.year === year);
      const subjects = [...new Set(yearItems.map(c => c.subject).filter(Boolean))];
      const isYearActive = state.activeYear === year;

      html += `
        <div class="fc-year-block mt-2">
          <button class="fc-year-toggle w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${isYearActive ? 'bg-[#e8f5e9] dark:bg-[#1a3828] text-[#1b4332] dark:text-[#74c69d]' : 'hover:bg-[#f0ebd9] dark:hover:bg-[#1e2e25] text-gray-800 dark:text-gray-100'}"
            data-year="${escapeHTML(year)}">
            <span class="flex items-center gap-1.5">
              <span>${isYearActive ? '📂' : '📁'}</span>
              <span>${escapeHTML(year)}</span>
            </span>
            <div class="flex items-center gap-1">
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#e8e2d4] dark:bg-[#25332b] text-gray-600 dark:text-gray-300">${yearItems.length}</span>
              <span class="text-[10px] text-gray-400 fc-arrow-icon">${isYearActive ? '▼' : '▶'}</span>
            </div>
          </button>

          <div class="fc-subject-group pl-3 mt-1 space-y-1 ${isYearActive || state.activeYear === 'All' ? '' : 'hidden'}">
      `;

      subjects.forEach(subject => {
        const subItems = yearItems.filter(c => c.subject === subject);
        const isSubjectActive = state.activeSubject === subject && (state.activeYear === year || state.activeYear === 'All');
        const chapters = [...new Set(subItems.map(c => c.chapter || c.module).filter(Boolean))];

        html += `
          <div class="fc-sub-block">
            <button class="fc-subject-toggle w-full text-left px-2 py-1 rounded text-xs font-semibold flex items-center justify-between transition-colors ${isSubjectActive ? 'bg-[#d8f3dc] dark:bg-[#1b4332] text-[#133a27] dark:text-[#74c69d]' : 'hover:bg-[#f2eee3] dark:hover:bg-[#1c2922] text-gray-700 dark:text-gray-300'}"
              data-year="${escapeHTML(year)}" data-subject="${escapeHTML(subject)}">
              <span class="flex items-center gap-1.5 truncate">
                <span>📖</span>
                <span class="truncate">${escapeHTML(subject)}</span>
              </span>
              <span class="text-[9px] px-1 py-0.2 rounded bg-gray-200 dark:bg-gray-800 shrink-0">${subItems.length}</span>
            </button>

            <div class="fc-chapter-list pl-3 mt-0.5 space-y-0.5 ${isSubjectActive ? '' : 'hidden'}">
        `;

        chapters.forEach(chap => {
          const chapItems = subItems.filter(c => (c.chapter || c.module) === chap);
          const isChapActive = state.activeChapter === chap;

          html += `
            <button class="fc-chapter-link w-full text-left px-2 py-1 rounded text-[11px] flex items-center justify-between transition-colors ${isChapActive ? 'bg-[#b58321] text-white font-bold' : 'hover:bg-[#f0ebd9] dark:hover:bg-[#1e2e25] text-gray-600 dark:text-gray-400'}"
              data-year="${escapeHTML(year)}" data-subject="${escapeHTML(subject)}" data-chapter="${escapeHTML(chap)}">
              <span class="truncate flex items-center gap-1">
                <span>📜</span>
                <span class="truncate">${escapeHTML(chap)}</span>
              </span>
              <span class="text-[9px] opacity-70">${chapItems.length}</span>
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

  function renderFlipView(cards) {
    if (cards.length === 0) {
      return renderEmptyState();
    }

    if (state.currentIndex >= cards.length) state.currentIndex = 0;
    if (state.currentIndex < 0) state.currentIndex = cards.length - 1;

    const card = cards[state.currentIndex];
    const isMastered = state.masteredIds.has(card.id);
    const source = card.source || {};

    return `
      <div class="max-w-3xl mx-auto space-y-5">
        
        <!-- Flashcard Progress Bar -->
        <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Card <strong>${state.currentIndex + 1}</strong> of <strong>${cards.length}</strong></span>
          <span>Mastered: <strong class="text-emerald-600 dark:text-emerald-400">${cards.filter(c => state.masteredIds.has(c.id)).length}</strong> / ${cards.length}</span>
        </div>
        <div class="w-full bg-[#e8e2d4] dark:bg-[#25332b] h-1.5 rounded-full overflow-hidden">
          <div class="bg-[#1b4332] dark:bg-[#52b788] h-full transition-all duration-300" style="width: ${((state.currentIndex + 1) / cards.length) * 100}%"></div>
        </div>

        <!-- 3D Flip Card Container -->
        <div class="flip-card-container w-full h-[420px] md:h-[400px] cursor-pointer select-none perspective" id="fc-card-flip-target">
          <div class="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d ${state.isFlipped ? 'is-flipped' : ''}">
            
            <!-- FRONT (Question / Prompt) -->
            <div class="flip-card-front absolute w-full h-full backface-hidden p-6 md:p-8 rounded-2xl bg-white dark:bg-[#151f1a] border-2 border-[#e8e2d4] dark:border-[#25332b] shadow-sm flex flex-col justify-between">
              
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1b4332] text-white">${escapeHTML(card.year)}</span>
                  <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">${escapeHTML(card.subject)}</span>
                </div>
                ${card.category ? `<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200">★ ${escapeHTML(card.category)}</span>` : ''}
              </div>

              <div class="my-auto py-4">
                <div class="text-xs uppercase tracking-widest font-bold text-[#b58321] dark:text-[#d4a373] mb-2">
                  ${escapeHTML(card.topic || "Syllabus Shloka")}
                </div>
                <h3 class="text-xl md:text-2xl font-bold font-serif-ayur text-gray-900 dark:text-white leading-relaxed">
                  ${escapeHTML(card.front || "Recite the classical verse:")}
                </h3>
                ${card.frontHint ? `
                  <div class="mt-3 text-xs italic text-gray-500 dark:text-gray-400">
                    Hint: ${escapeHTML(card.frontHint)}
                  </div>
                ` : ''}
              </div>

              <div class="text-[11px] text-gray-400 dark:text-gray-500 font-medium flex items-center justify-center gap-1">
                <span>🔄 Click or Tap card to reveal Sanskrit Shloka & Meaning</span>
              </div>

            </div>

            <!-- BACK (Classical Shloka & Meaning) -->
            <div class="flip-card-back absolute w-full h-full backface-hidden p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#faf8f5] via-white to-[#f5f0e6] dark:from-[#17221d] dark:via-[#151f1a] dark:to-[#1a2b22] border-2 border-[#b58321] dark:border-[#52b788] shadow-md flex flex-col justify-between text-left overflow-y-auto">
              
              <div class="flex items-center justify-between pb-2 border-b border-[#e8e2d4] dark:border-[#25332b]">
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#1b4332] dark:text-[#74c69d]">
                  📜 Classical Shloka & Meaning
                </span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${isMastered ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}">
                  ${isMastered ? '✓ Mastered' : '○ Reviewing'}
                </span>
              </div>

              <div class="my-auto py-3 space-y-3">
                <!-- Sanskrit Shloka -->
                ${card.shloka ? `
                  <div class="p-3.5 rounded-xl bg-amber-50/70 dark:bg-[#1a2820] border-l-4 border-[#b58321]">
                    <div class="text-[9px] uppercase tracking-wider font-bold text-[#b58321] mb-1">Sanskrit Verse (मूल श्लोक)</div>
                    <p class="sanskrit-text text-base md:text-lg font-bold text-[#133a27] dark:text-[#74c69d] leading-relaxed">
                      ${escapeHTML(card.shloka)}
                    </p>
                  </div>
                ` : ''}

                <!-- Transliteration -->
                ${card.transliteration ? `
                  <div>
                    <div class="text-[9px] uppercase tracking-wider font-bold text-gray-400">IAST Transliteration</div>
                    <div class="text-xs italic text-gray-700 dark:text-gray-300 font-mono">
                      ${escapeHTML(card.transliteration)}
                    </div>
                  </div>
                ` : ''}

                <!-- Translation -->
                ${card.translation ? `
                  <div>
                    <div class="text-[9px] uppercase tracking-wider font-bold text-gray-400">English Meaning</div>
                    <div class="text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
                      ${escapeHTML(card.translation)}
                    </div>
                  </div>
                ` : ''}
              </div>

              <!-- Citation Footer -->
              <div class="pt-2 border-t border-[#e8e2d4] dark:border-[#25332b] flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                <span>Citation: <strong class="text-[#b58321]">${escapeHTML(source.reference || card.frontHint || 'Classical Samhita')}</strong></span>
                <span class="text-[10px] text-gray-400">Tap card to return to question ↻</span>
              </div>

            </div>

          </div>
        </div>

        <!-- Interactive Control Bar -->
        <div class="flex items-center justify-between gap-2 pt-2">
          <button id="fc-prev-btn" class="px-4 py-2 rounded-xl border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#151f1a] text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-[#faf8f5] dark:hover:bg-[#1c2922] transition-colors">
            ← Previous
          </button>

          <div class="flex items-center gap-2">
            <button id="fc-master-btn" class="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${isMastered ? 'bg-[#1b4332] text-white' : 'border border-[#1b4332] text-[#1b4332] dark:text-[#52b788] bg-white dark:bg-[#151f1a]'}">
              ${isMastered ? '✓ Mastered' : 'Mark Mastered'}
            </button>
            <button id="fc-shuffle-btn" class="px-3 py-2 rounded-xl border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#151f1a] text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-[#faf8f5] transition-colors" title="Shuffle Deck">
              🔀 Shuffle
            </button>
          </div>

          <button id="fc-next-btn" class="px-4 py-2 rounded-xl bg-[#1b4332] text-white text-xs font-semibold hover:bg-[#2d6a4f] transition-colors shadow-xs">
            Next →
          </button>
        </div>

      </div>
    `;
  }

  function renderListView(cards) {
    if (cards.length === 0) return renderEmptyState();

    return `
      <div class="space-y-4">
        <div class="flex items-center justify-between pb-2 border-b border-[#e8e2d4] dark:border-[#25332b] text-xs text-gray-500">
          <span>Showing <strong>${cards.length}</strong> Shlokas in this Chapter / Subject</span>
          <span class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">${cards.filter(c => state.masteredIds.has(c.id)).length} Mastered</span>
        </div>

        <div class="space-y-4">
          ${cards.map((c, idx) => {
            const isMastered = state.masteredIds.has(c.id);
            const source = c.source || {};

            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-[#151f1a] border border-[#e8e2d4] dark:border-[#25332b] shadow-xs hover:shadow-md transition-shadow">
                
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1b4332] text-white">${escapeHTML(c.year)}</span>
                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#f2eee3] dark:bg-[#25332b] text-[#133a27] dark:text-[#74c69d]">${escapeHTML(c.subject)}</span>
                    ${c.chapter ? `<span class="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">📄 ${escapeHTML(c.chapter)}</span>` : ''}
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-[#b58321]">${escapeHTML(source.reference || c.frontHint || '')}</span>
                    <button class="fc-copy-shloka-btn text-[11px] px-2 py-1 rounded bg-[#f0ebd9] dark:bg-[#25332b] hover:bg-[#b58321] hover:text-white transition-colors"
                      data-shloka="${escapeHTML(c.shloka || '')}">
                      📋 Copy
                    </button>
                  </div>
                </div>

                <!-- Prompt / Topic -->
                <div class="font-bold text-sm text-gray-900 dark:text-white mb-2">
                  ${idx + 1}. ${escapeHTML(c.front || c.topic || 'Shloka')}
                </div>

                <!-- Sanskrit Shloka Box -->
                ${c.shloka ? `
                  <div class="p-3 rounded-xl bg-amber-50/70 dark:bg-[#1a2820] border-l-4 border-[#b58321] my-2">
                    <p class="sanskrit-text text-base font-bold text-[#133a27] dark:text-[#74c69d] leading-relaxed">
                      ${escapeHTML(c.shloka)}
                    </p>
                  </div>
                ` : ''}

                <!-- Transliteration -->
                ${c.transliteration ? `
                  <div class="text-xs italic text-gray-600 dark:text-gray-400 font-mono my-1">
                    ${escapeHTML(c.transliteration)}
                  </div>
                ` : ''}

                <!-- Translation -->
                ${c.translation ? `
                  <div class="text-xs text-gray-800 dark:text-gray-200 mt-2 leading-relaxed">
                    <strong class="text-gray-600 dark:text-gray-400">Meaning:</strong> ${escapeHTML(c.translation)}
                  </div>
                ` : ''}

              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function renderEmptyState() {
    return `
      <div class="text-center py-16 px-4 bg-white dark:bg-[#151f1a] rounded-2xl border border-[#e8e2d4] dark:border-[#25332b]">
        <div class="text-4xl mb-3">🎴</div>
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">No Flashcards in this Selection</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">Try selecting another chapter or subject from the folder sidebar.</p>
        <button id="fc-reset-empty" class="px-4 py-2 rounded-xl bg-[#1b4332] text-white text-xs font-semibold">Reset to All Shlokas</button>
      </div>
    `;
  }

  function render(containerId, activeYear) {
    const container = document.getElementById(containerId);
    if (!container) return;

    state.containerId = containerId;
    if (activeYear && activeYear !== undefined) {
      state.activeYear = activeYear;
    }

    const allData = getData();
    const filtered = getFilteredCards();

    container.innerHTML = `
      <div class="space-y-6">
        
        <!-- Header Banner -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#e8e2d4] dark:border-[#25332b]">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold font-serif-ayur text-[#133a27] dark:text-[#74c69d]">
              Syllabus Shlokas Flashcards
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Active memorization cards and chapter-wise directory of high-scoring Sanskrit verses with English breakdown.
            </p>
          </div>

          <!-- Mode Toggles & Counter -->
          <div class="flex items-center gap-2">
            <!-- Mobile Drawer Button -->
            <button id="fc-mobile-toggle-btn" class="lg:hidden px-3 py-1.5 rounded-xl bg-[#1b4332] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm">
              <span>📁</span>
              <span>Folders</span>
            </button>

            <!-- Mode Switcher (Flip vs Directory) -->
            <div class="inline-flex p-1 rounded-xl bg-[#f0ebd9] dark:bg-[#1a2922] border border-[#e8e2d4] dark:border-[#25332b]">
              <button id="fc-mode-flip" class="px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${state.viewMode === 'flip' ? 'bg-[#1b4332] text-white shadow-xs' : 'text-gray-600 dark:text-gray-300 hover:text-black'}">
                🎴 3D Flip Mode
              </button>
              <button id="fc-mode-list" class="px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${state.viewMode === 'list' ? 'bg-[#1b4332] text-white shadow-xs' : 'text-gray-600 dark:text-gray-300 hover:text-black'}">
                📋 Chapter List
              </button>
            </div>
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

          <!-- Search Box -->
          <div class="relative w-full sm:w-64">
            <input type="text" id="fc-search-input" value="${escapeHTML(state.searchQuery)}" placeholder="Search Sanskrit or English..."
              class="w-full text-xs px-3 py-1.5 pl-8 rounded-lg border border-[#e8e2d4] dark:border-[#25332b] bg-white dark:bg-[#1c2922] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#1b4332]">
            <span class="absolute left-2.5 top-1.5 text-gray-400 text-xs">🔍</span>
            ${state.searchQuery ? `<button id="fc-clear-search" class="absolute right-2.5 top-1 text-gray-400 hover:text-gray-600 text-xs font-bold">×</button>` : ''}
          </div>
        </div>

        <!-- Main Layout: Folder Sidebar + Content Area -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Folder Sidebar (Desktop: 4 cols) -->
          <div id="fc-sidebar-col" class="lg:col-span-4 ${state.mobileFolderOpen ? 'block' : 'hidden lg:block'} transition-all">
            ${renderFolderTree(allData)}
          </div>

          <!-- Flashcards Area (Desktop: 8 cols) -->
          <div class="lg:col-span-8">
            ${state.viewMode === 'flip' ? renderFlipView(filtered) : renderListView(filtered)}
          </div>

        </div>

      </div>
    `;

    bindEvents(container, filtered);
  }

  function bindEvents(container, filtered) {
    // Mode toggles
    const btnFlip = container.querySelector("#fc-mode-flip");
    if (btnFlip) {
      btnFlip.addEventListener("click", () => {
        state.viewMode = "flip";
        state.isFlipped = false;
        render(state.containerId);
      });
    }

    const btnList = container.querySelector("#fc-mode-list");
    if (btnList) {
      btnList.addEventListener("click", () => {
        state.viewMode = "list";
        render(state.containerId);
      });
    }

    // Reset buttons
    const resetBtn = container.querySelector("#fc-reset-filters");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.searchQuery = "";
        state.currentIndex = 0;
        state.isFlipped = false;
        render(state.containerId);
      });
    }

    const resetEmpty = container.querySelector("#fc-reset-empty");
    if (resetEmpty) {
      resetEmpty.addEventListener("click", () => {
        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.searchQuery = "";
        state.currentIndex = 0;
        state.isFlipped = false;
        render(state.containerId);
      });
    }

    // Search input
    const searchInput = container.querySelector("#fc-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        state.currentIndex = 0;
        render(state.containerId);
      });
    }

    const clearSearch = container.querySelector("#fc-clear-search");
    if (clearSearch) {
      clearSearch.addEventListener("click", () => {
        state.searchQuery = "";
        state.currentIndex = 0;
        render(state.containerId);
      });
    }

    // Mobile toggle
    const mobToggle = container.querySelector("#fc-mobile-toggle-btn");
    if (mobToggle) {
      mobToggle.addEventListener("click", () => {
        state.mobileFolderOpen = !state.mobileFolderOpen;
        const col = container.querySelector("#fc-sidebar-col");
        if (col) {
          if (state.mobileFolderOpen) {
            col.classList.remove("hidden");
          } else {
            col.classList.add("hidden");
          }
        }
      });
    }

    // Folder tree interactions
    container.querySelectorAll(".fc-folder-node").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.currentIndex = 0;
        state.isFlipped = false;
        state.mobileFolderOpen = false;
        render(state.containerId);
      });
    });

    container.querySelectorAll(".fc-year-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const year = btn.getAttribute("data-year");
        state.activeYear = (state.activeYear === year ? "All" : year);
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.currentIndex = 0;
        state.isFlipped = false;
        render(state.containerId);
      });
    });

    container.querySelectorAll(".fc-subject-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const year = btn.getAttribute("data-year");
        const subject = btn.getAttribute("data-subject");
        state.activeYear = year;
        state.activeSubject = (state.activeSubject === subject ? "All" : subject);
        state.activeChapter = "All";
        state.currentIndex = 0;
        state.isFlipped = false;
        render(state.containerId);
      });
    });

    container.querySelectorAll(".fc-chapter-link").forEach(btn => {
      btn.addEventListener("click", () => {
        const year = btn.getAttribute("data-year");
        const subject = btn.getAttribute("data-subject");
        const chapter = btn.getAttribute("data-chapter");
        state.activeYear = year;
        state.activeSubject = subject;
        state.activeChapter = chapter;
        state.currentIndex = 0;
        state.isFlipped = false;
        state.mobileFolderOpen = false;
        render(state.containerId);
      });
    });

    // 3D Flip card click
    const cardEl = container.querySelector("#fc-card-flip-target");
    if (cardEl) {
      cardEl.addEventListener("click", () => {
        state.isFlipped = !state.isFlipped;
        const inner = cardEl.querySelector(".flip-card-inner");
        if (inner) {
          if (state.isFlipped) {
            inner.classList.add("is-flipped");
          } else {
            inner.classList.remove("is-flipped");
          }
        }
      });
    }

    // Previous & Next buttons
    const prevBtn = container.querySelector("#fc-prev-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        state.currentIndex = (state.currentIndex - 1 + filtered.length) % filtered.length;
        state.isFlipped = false;
        render(state.containerId);
      });
    }

    const nextBtn = container.querySelector("#fc-next-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        state.currentIndex = (state.currentIndex + 1) % filtered.length;
        state.isFlipped = false;
        render(state.containerId);
      });
    }

    // Mastered button
    const masterBtn = container.querySelector("#fc-master-btn");
    if (masterBtn && filtered.length > 0) {
      masterBtn.addEventListener("click", () => {
        const card = filtered[state.currentIndex];
        if (!card) return;
        if (state.masteredIds.has(card.id)) {
          state.masteredIds.delete(card.id);
        } else {
          state.masteredIds.add(card.id);
        }
        localStorage.setItem("bams_mastered_cards", JSON.stringify([...state.masteredIds]));
        render(state.containerId);
      });
    }

    // Shuffle button
    const shuffleBtn = container.querySelector("#fc-shuffle-btn");
    if (shuffleBtn && filtered.length > 1) {
      shuffleBtn.addEventListener("click", () => {
        state.currentIndex = Math.floor(Math.random() * filtered.length);
        state.isFlipped = false;
        render(state.containerId);
      });
    }

    // Copy Shloka buttons (in list mode)
    container.querySelectorAll(".fc-copy-shloka-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const shloka = btn.getAttribute("data-shloka");
        if (shloka) {
          navigator.clipboard.writeText(shloka).then(() => {
            const originalText = btn.textContent;
            btn.textContent = "✓ Copied!";
            btn.classList.add("bg-emerald-600", "text-white");
            setTimeout(() => {
              btn.textContent = originalText;
              btn.classList.remove("bg-emerald-600", "text-white");
            }, 1800);
          });
        }
      });
    });
  }

  return {
    render: render
  };
})();
