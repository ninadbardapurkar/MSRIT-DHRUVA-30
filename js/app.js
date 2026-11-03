/**
 * MSRIT 1st Semester B.E. (ECE - Chemistry Cycle) Web App Application Logic
 * Interactive 3D Flashcards, Exam Prep Quiz & RIT Notes Vault
 */

// Application State
const AppState = {
  currentMode: 'home', // 'home' | 'study' | 'grid' | 'quiz' | 'notes'
  selectedSubject: 'all', // 'all' or subjectId
  selectedUnit: 'all', // 'all' or 1..5
  searchQuery: '',
  currentFilter: 'all', // 'all' | 'high-freq' | 'exceptions-derivations' | 'starred' | 'unmastered' | 'mastered'
  currentCardIndex: 0,
  isCardFlipped: false,
  showHint: false,
  gridAnswersVisible: true,
  masteredIds: new Set(),
  starredIds: new Set(),
  
  // Quiz specific state
  quizQuestions: [],
  quizIndex: 0,
  quizAnswers: {}, // questionId -> selectedOptionIndex
  quizScore: 0
};

// Persistence Handlers (localStorage with safe try/catch)
function loadPersistedState() {
  try {
    const mastered = localStorage.getItem('msrit_mastered_ids');
    if (mastered) {
      AppState.masteredIds = new Set(JSON.parse(mastered));
    }
    const starred = localStorage.getItem('msrit_starred_ids');
    if (starred) {
      AppState.starredIds = new Set(JSON.parse(starred));
    }
  } catch (e) {
    console.warn('LocalStorage unavailable or disabled:', e);
  }
}

function savePersistedState() {
  try {
    localStorage.setItem('msrit_mastered_ids', JSON.stringify(Array.from(AppState.masteredIds)));
    localStorage.setItem('msrit_starred_ids', JSON.stringify(Array.from(AppState.starredIds)));
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }
}

// In-Page Toast Notification System
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const bgColors = {
    info: 'bg-slate-800 text-white',
    success: 'bg-emerald-700 text-white',
    warning: 'bg-amber-600 text-white',
    danger: 'bg-rose-700 text-white'
  };

  toast.className = `${bgColors[type] || bgColors.info} px-4 py-2.5 rounded-lg shadow-lg flex items-center space-x-2 text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 select-none`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✓';
  if (type === 'warning') icon = '★';
  if (type === 'danger') icon = '✕';

  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// LaTeX / KaTeX rendering helper
function renderMath(targetElement) {
  if (typeof window !== 'undefined' && window.renderMathInElement && targetElement) {
    try {
      window.renderMathInElement(targetElement, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.warn('KaTeX rendering error:', err);
    }
  }
}

// Filtering Engine
function getFilteredCards() {
  return FLASHCARDS_DATA.filter(card => {
    // Subject filter
    if (AppState.selectedSubject !== 'all' && card.subjectId !== AppState.selectedSubject) {
      return false;
    }

    // Unit filter
    if (AppState.selectedUnit !== 'all' && card.unit !== parseInt(AppState.selectedUnit, 10)) {
      return false;
    }

    // Search query
    if (AppState.searchQuery.trim() !== '') {
      const q = AppState.searchQuery.toLowerCase();
      const matchQ = card.question.toLowerCase().includes(q);
      const matchA = card.answer.toLowerCase().includes(q);
      const matchTip = card.examTip.toLowerCase().includes(q);
      const matchTag = card.pyqTag.toLowerCase().includes(q);
      if (!matchQ && !matchA && !matchTip && !matchTag) {
        return false;
      }
    }

    // Dropdown filters
    if (AppState.currentFilter === 'high-freq') {
      if (card.pyqTag.includes('Practice') || (!card.pyqTag.includes('SEE') && !card.pyqTag.includes('CIE'))) return false;
    } else if (AppState.currentFilter === 'practice') {
      if (!card.pyqTag.includes('Practice')) return false;
    } else if (AppState.currentFilter === 'exceptions-derivations') {
      if (!card.badgeType.includes('Derivation') && !card.badgeType.includes('Exception')) return false;
    } else if (AppState.currentFilter === 'starred') {
      if (!AppState.starredIds.has(card.id)) return false;
    } else if (AppState.currentFilter === 'unmastered') {
      if (AppState.masteredIds.has(card.id)) return false;
    } else if (AppState.currentFilter === 'mastered') {
      if (!AppState.masteredIds.has(card.id)) return false;
    }

    return true;
  });
}

// Update Top Counters & Status
function updateCounters() {
  const filtered = getFilteredCards();
  const total = FLASHCARDS_DATA.length;
  const masteredCount = AppState.masteredIds.size;
  const starredCount = AppState.starredIds.size;

  const countShowing = document.getElementById('countShowing');
  const countMastered = document.getElementById('countMastered');
  const countStarred = document.getElementById('countStarred');

  if (countShowing) countShowing.textContent = filtered.length;
  if (countMastered) countMastered.textContent = `${masteredCount} / ${total}`;
  if (countStarred) countStarred.textContent = starredCount;
}

// Render Top Subject Bar
function renderSubjectBar() {
  const container = document.getElementById('subjectBar');
  if (!container) return;

  let html = `
    <button onclick="setSubject('all')" 
      class="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
        AppState.selectedSubject === 'all'
          ? 'bg-[#1B365D] text-white border-[#1B365D] shadow-sm'
          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
      }">
      All Subjects (${FLASHCARDS_DATA.length})
    </button>
  `;

  SUBJECTS_DATA.forEach(sub => {
    const isSelected = AppState.selectedSubject === sub.id;
    const cardCount = FLASHCARDS_DATA.filter(c => c.subjectId === sub.id).length;
    html += `
      <button onclick="setSubject('${sub.id}')"
        class="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border flex items-center space-x-1.5 ${
          isSelected
            ? 'bg-[#1B365D] text-white border-[#1B365D] shadow-sm'
            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
        }">
        <span class="w-2 h-2 rounded-full inline-block" style="background-color: ${sub.color}"></span>
        <span>${sub.shortName} (${cardCount})</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

// Render Unit Pill Bar
function renderUnitBar() {
  const container = document.getElementById('unitBar');
  if (!container) return;

  const units = [
    { id: 'all', label: 'All Units' },
    { id: 1, label: 'Unit 1' },
    { id: 2, label: 'Unit 2' },
    { id: 3, label: 'Unit 3' },
    { id: 4, label: 'Unit 4' },
    { id: 5, label: 'Unit 5' }
  ];

  let html = '';
  units.forEach(u => {
    const isSelected = String(AppState.selectedUnit) === String(u.id);
    html += `
      <button onclick="setUnit('${u.id}')"
        class="px-3 py-1 rounded-md text-xs font-medium transition-all ${
          isSelected
            ? 'bg-[#F59E0B] text-slate-900 font-bold shadow-sm'
            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
        }">
        ${u.label}
      </button>
    `;
  });

  container.innerHTML = html;
}

// Subject & Unit Selection Handlers
function setSubject(subjectId) {
  AppState.selectedSubject = subjectId;
  AppState.currentCardIndex = 0;
  AppState.isCardFlipped = false;
  AppState.showHint = false;
  renderSubjectBar();
  renderUnitBar();
  renderCurrentView();
  updateCounters();
}

function setUnit(unitId) {
  AppState.selectedUnit = unitId;
  AppState.currentCardIndex = 0;
  AppState.isCardFlipped = false;
  AppState.showHint = false;
  renderUnitBar();
  renderCurrentView();
  updateCounters();
}

// Hash & Deep-Linking Parser
function parseUrlHash() {
  if (typeof window === 'undefined' || !window.location) return;
  const rawHash = (window.location.hash || '').replace('#', '').trim();
  if (!rawHash) return;

  const parts = rawHash.split('&');
  parts.forEach(part => {
    if (['home', 'study', 'grid', 'quiz', 'notes'].includes(part)) {
      AppState.currentMode = part;
    } else if (part.startsWith('subject=')) {
      const sId = part.replace('subject=', '').trim();
      if (typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA.some(s => s.id === sId)) {
        AppState.selectedSubject = sId;
      }
    }
  });
}

// Quick Navigation & Subject Launcher
function launchSubject(subjectId, mode = 'study') {
  AppState.selectedSubject = subjectId;
  AppState.selectedUnit = 'all';
  renderSubjectBar();
  renderUnitBar();
  setMode(mode);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mode Switcher Handlers
function setMode(mode, updateHash = true) {
  AppState.currentMode = mode;
  AppState.isCardFlipped = false;
  AppState.showHint = false;

  if (updateHash && typeof window !== 'undefined' && window.location && window.history) {
    try {
      window.history.replaceState(null, '', '#' + mode);
    } catch (e) {
      // Ignore in restricted environments
    }
  }

  // Update tabs active state
  document.querySelectorAll('.mode-tab-btn').forEach(btn => {
    const btnMode = btn.dataset.mode;
    if (btnMode === mode) {
      btn.className = 'mode-tab-btn px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all bg-white text-[#1B365D] shadow-sm flex items-center space-x-1.5 whitespace-nowrap';
    } else {
      btn.className = 'mode-tab-btn px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all text-slate-300 hover:text-white hover:bg-white/10 flex items-center space-x-1.5 whitespace-nowrap';
    }
  });

  // Toggle mode views
  const homeView = document.getElementById('homeDashboardView');
  const studyView = document.getElementById('studyDeckView');
  const gridView = document.getElementById('allCardsGridView');
  const quizView = document.getElementById('rapidQuizView');
  const notesView = document.getElementById('notesVaultView');
  const filterBar = document.getElementById('filterBar');
  const navBarsSection = document.getElementById('navBarsSection');

  if (homeView) homeView.classList.toggle('hidden', mode !== 'home');
  if (studyView) studyView.classList.toggle('hidden', mode !== 'study');
  if (gridView) gridView.classList.toggle('hidden', mode !== 'grid');
  if (quizView) quizView.classList.toggle('hidden', mode !== 'quiz');
  if (notesView) notesView.classList.toggle('hidden', mode !== 'notes');

  // Filter bar and top sub-navbar visibility
  if (filterBar) {
    filterBar.classList.toggle('hidden', mode === 'home' || mode === 'quiz' || mode === 'notes');
  }
  if (navBarsSection) {
    navBarsSection.classList.toggle('hidden', mode === 'home');
  }

  if (mode === 'quiz') {
    initQuiz();
  }

  renderCurrentView();
}

// Render Master Controller
function renderCurrentView() {
  if (AppState.currentMode === 'home') {
    renderHomeDashboard();
  } else if (AppState.currentMode === 'study') {
    renderStudyDeck();
  } else if (AppState.currentMode === 'grid') {
    renderAllCardsGrid();
  } else if (AppState.currentMode === 'quiz') {
    renderQuizCard();
  } else if (AppState.currentMode === 'notes') {
    renderNotesVault();
  }
}

// ----------------------------------------------------------------------------
// MODE 0: HOME DASHBOARD (DYNAMIC HUB)
// ----------------------------------------------------------------------------
function renderHomeDashboard() {
  const container = document.getElementById('homeSubjectsGrid');
  if (!container) return;

  // Update hero stats
  const homeSubjEl = document.getElementById('homeSubjectCount');
  const homeCardEl = document.getElementById('homeCardCount');
  const homeQuizEl = document.getElementById('homeQuizCount');
  const homeUnitEl = document.getElementById('homeUnitsCount');

  if (homeSubjEl) homeSubjEl.textContent = SUBJECTS_DATA.length;
  if (homeCardEl) homeCardEl.textContent = FLASHCARDS_DATA.length;
  if (homeQuizEl) homeQuizEl.textContent = QUIZ_DATA.length;
  if (homeUnitEl) homeUnitEl.textContent = (SUBJECTS_DATA.length * 5).toString();

  let html = '';
  SUBJECTS_DATA.forEach(sub => {
    const cardCount = FLASHCARDS_DATA.filter(c => c.subjectId === sub.id).length;
    const quizCount = QUIZ_DATA.filter(q => q.subjectId === sub.id).length;
    const practiceCount = FLASHCARDS_DATA.filter(c => c.subjectId === sub.id && c.pyqTag.includes('Practice')).length;

    // Cycle badge
    let cycleBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">Chem Cycle</span>';
    if (sub.cycle === 'p-cycle' || sub.stream.toLowerCase().includes('physics')) {
      cycleBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-200">Physics Cycle</span>';
    } else if (sub.cycle === 'humanities' || sub.id === 'kan') {
      cycleBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">Humanities / Lang</span>';
    }

    html += `
      <div class="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group">
        <div>
          <!-- Top Accent Color Bar -->
          <div class="h-1.5 w-full" style="background-color: ${sub.color}"></div>
          
          <div class="p-4 sm:p-5 space-y-3">
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                ${sub.code}
              </span>
              ${cycleBadge}
            </div>

            <div>
              <h4 class="font-bold text-slate-900 text-sm sm:text-base font-serif-heading group-hover:text-[#1B365D] transition-colors leading-snug">
                ${sub.name}
              </h4>
              <p class="text-xs text-slate-500 mt-1">
                ${sub.stream}
              </p>
            </div>

            <!-- Counters Bar -->
            <div class="flex items-center flex-wrap gap-1.5 pt-1">
              <span class="text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                🃏 ${cardCount} Cards
              </span>
              <span class="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                ⚡ ${quizCount} Tests
              </span>
              <span class="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                🎯 ${practiceCount} Practice
              </span>
            </div>
          </div>
        </div>

        <!-- Direct Action Buttons Footer -->
        <div class="bg-slate-50/80 px-4 py-3 border-t border-slate-100 grid grid-cols-3 gap-2">
          <button onclick="launchSubject('${sub.id}', 'study')"
            class="px-2 py-1.5 bg-[#1B365D] hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-2xs text-center flex items-center justify-center space-x-1 active:scale-95">
            <span>📖</span>
            <span>Cards</span>
          </button>

          <button onclick="launchSubject('${sub.id}', 'quiz')"
            class="px-2 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-lg text-xs font-bold transition-all shadow-2xs text-center flex items-center justify-center space-x-1 active:scale-95">
            <span>⚡</span>
            <span>Quiz</span>
          </button>

          <button onclick="launchSubject('${sub.id}', 'notes')"
            class="px-2 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-bold transition-all shadow-2xs text-center flex items-center justify-center space-x-1 active:scale-95">
            <span>📚</span>
            <span>Notes</span>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Populate featured card preview on Home
  const featContainer = document.getElementById('homeFeaturedCardContainer');
  if (featContainer && typeof FLASHCARDS_DATA !== 'undefined' && FLASHCARDS_DATA.length > 0) {
    const featCard = FLASHCARDS_DATA[0];
    const featSubject = (typeof SUBJECTS_DATA !== 'undefined' ? SUBJECTS_DATA.find(s => s.id === featCard.subjectId) : null) || { shortName: featCard.subjectId, badgeColor: 'bg-blue-100 text-blue-800' };

    featContainer.innerHTML = `
      <div class="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/60 hover:bg-white transition-all space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center space-x-2">
            <span class="px-2.5 py-0.5 rounded text-xs font-bold border ${featSubject.badgeColor}">
              ${featSubject.shortName} • Unit ${featCard.unit}
            </span>
            <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-300">
              ${featCard.pyqTag}
            </span>
          </div>
          <span class="text-xs text-slate-500 font-mono font-semibold">
            ${featCard.badgeLabel}
          </span>
        </div>

        <h4 class="text-sm sm:text-base font-bold text-slate-900 font-serif-heading leading-snug">
          ${featCard.question}
        </h4>

        <!-- Memory cue hint -->
        <div class="bg-amber-50/80 p-3 rounded-lg border border-amber-200 text-xs text-amber-900">
          <span class="font-bold">💡 Memory Cue:</span> ${featCard.hint}
        </div>

        <div class="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60">
          <button onclick="launchSubject('${featCard.subjectId}', 'study')"
            class="px-4 py-2 bg-[#1B365D] hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center space-x-1.5 active:scale-95">
            <span>Flip & Study 3D Card (with full solution)</span>
            <span>→</span>
          </button>
          <span class="text-xs text-slate-400">
            171 Cards Available Across All 10 Subjects
          </span>
        </div>
      </div>
    `;
    renderMath(featContainer);
  }
}

// ----------------------------------------------------------------------------
// MODE 1: STUDY DECK (3D FLIP CARD ENGINE)
// ----------------------------------------------------------------------------
function renderStudyDeck() {
  const container = document.getElementById('studyCardContainer');
  const controls = document.getElementById('studyControls');
  if (!container) return;

  const filtered = getFilteredCards();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-sm max-w-xl mx-auto my-12">
        <div class="text-4xl mb-3">🔍</div>
        <h3 class="text-lg font-bold text-slate-800 mb-1">No Flashcards Match Your Filters</h3>
        <p class="text-sm text-slate-500 mb-4">Try clearing your search query or selecting "All Subjects" and "All Units".</p>
        <button onclick="resetFilters()" class="px-4 py-2 bg-[#1B365D] text-white rounded-lg text-xs font-semibold hover:bg-slate-800">
          Reset All Filters
        </button>
      </div>
    `;
    if (controls) controls.classList.add('hidden');
    return;
  }

  if (controls) controls.classList.remove('hidden');

  // Ensure index in bounds
  if (AppState.currentCardIndex >= filtered.length) {
    AppState.currentCardIndex = 0;
  }

  const card = filtered[AppState.currentCardIndex];
  const subject = SUBJECTS_DATA.find(s => s.id === card.subjectId) || { shortName: card.subjectId, badgeColor: 'bg-blue-100 text-blue-800' };
  const isMastered = AppState.masteredIds.has(card.id);
  const isStarred = AppState.starredIds.has(card.id);

  container.innerHTML = `
    <div class="flip-card-container max-w-3xl mx-auto">
      <div id="activeFlipCard" class="flip-card-inner ${AppState.isCardFlipped ? 'flipped' : ''}" onclick="toggleCardFlip(event)">
        
        <!-- CARD FRONT (Question & Badges) -->
        <div class="flip-card-front p-6 md:p-8 flex flex-col justify-between border-2 ${isMastered ? 'border-emerald-400 bg-emerald-50/20' : 'border-slate-200'}">
          <div>
            <!-- Top Badges Row -->
            <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-1 rounded-md text-xs font-bold border ${subject.badgeColor}">
                  ${subject.shortName} • Unit ${card.unit}
                </span>
                <span class="px-2.5 py-1 rounded-md text-xs font-bold ${
                  card.pyqTag.includes('Practice')
                    ? 'bg-teal-50 text-teal-800 border-teal-300'
                    : 'bg-amber-50 text-amber-800 border-amber-300'
                } border flex items-center space-x-1">
                  <span>${card.pyqTag}</span>
                </span>
                <span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  ${card.badgeLabel}
                </span>
              </div>
              <div class="flex items-center space-x-2 text-xs font-semibold text-slate-400">
                <span>Card ${AppState.currentCardIndex + 1} of ${filtered.length}</span>
              </div>
            </div>

            <!-- Question Heading -->
            <div class="my-4">
              <span class="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">MSRIT Exam Question Prompt</span>
              <h2 class="text-base md:text-xl font-bold text-slate-900 leading-snug font-serif-heading">
                ${card.question}
              </h2>
            </div>

            <!-- Memory Hint Section -->
            <div class="mt-4 pt-2">
              <button onclick="toggleHint(event)" class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300 transition-colors shadow-xs">
                <span>💡</span>
                <span>${AppState.showHint ? 'Hide Memory Hook' : 'Show Memory Hint / Formula Cue'}</span>
              </button>
              
              <div id="cardHintBox" class="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 leading-relaxed ${AppState.showHint ? 'block' : 'hidden'}">
                <strong>Memory Hook / Formula Cue:</strong> ${card.hint}
              </div>
            </div>
          </div>

          <!-- Bottom Action Prompt on Front -->
          <div class="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span class="flex items-center space-x-1">
              <kbd class="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-slate-600 font-mono text-[10px]">Space</kbd>
              <span>or Click Card to Reveal Complete Answer</span>
            </span>
            <div class="flex items-center space-x-2">
              ${isMastered ? '<span class="text-emerald-600 font-bold flex items-center">✓ Mastered</span>' : ''}
              ${isStarred ? '<span class="text-amber-500 font-bold flex items-center">★ Starred</span>' : ''}
            </div>
          </div>
        </div>

        <!-- CARD BACK (Complete MSRIT Exam Answer & Marking Tip) -->
        <div class="flip-card-back p-6 md:p-8 flex flex-col justify-between border-2 border-indigo-200 bg-white">
          <div>
            <!-- Top Status Row -->
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
              <span class="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 flex items-center space-x-1">
                <span>✓</span>
                <span>Full-Marks Model Solution</span>
              </span>
              <span class="text-xs text-slate-400">Card ${AppState.currentCardIndex + 1} of ${filtered.length}</span>
            </div>

            <!-- Full Answer Body -->
            <div class="prose prose-sm max-w-none text-slate-800 text-xs md:text-sm leading-relaxed overflow-y-auto max-h-[360px] pr-2 custom-scrollbar">
              ${card.answer}
            </div>
          </div>

          <!-- Exam Tip Box at Bottom of Back -->
          <div class="mt-4 pt-3 border-t border-slate-100">
            <div class="exam-tip-box p-3 bg-indigo-50/70 rounded-lg border-l-4 border-[#1B365D] text-xs text-indigo-950">
              <strong class="font-bold text-[#1B365D]">🎯 Exam Key Point / Marking Scheme Tip:</strong>
              <p class="mt-0.5">${card.examTip}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  // Render controls status
  const cardIndexDisplay = document.getElementById('cardIndexDisplay');
  if (cardIndexDisplay) {
    cardIndexDisplay.textContent = `${AppState.currentCardIndex + 1} / ${filtered.length}`;
  }

  // Update mastery & star button appearances
  const starBtn = document.getElementById('btnStarCard');
  const masterBtn = document.getElementById('btnMasterCard');

  if (starBtn) {
    if (isStarred) {
      starBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-white shadow-xs flex items-center space-x-1.5';
      starBtn.innerHTML = '<span>★</span><span>Starred</span>';
    } else {
      starBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 flex items-center space-x-1.5';
      starBtn.innerHTML = '<span>☆</span><span>Star for Review</span>';
    }
  }

  if (masterBtn) {
    if (isMastered) {
      masterBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-xs flex items-center space-x-1.5';
      masterBtn.innerHTML = '<span>✓</span><span>Mastered</span>';
    } else {
      masterBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 flex items-center space-x-1.5';
      masterBtn.innerHTML = '<span>○</span><span>Mark Mastered</span>';
    }
  }

  // Trigger KaTeX math parsing
  renderMath(container);
}

// Flip Card Action
function toggleCardFlip(event) {
  // If user clicked hint button, don't flip
  if (event && event.target && (event.target.closest('#cardHintBox') || event.target.closest('button'))) {
    return;
  }
  AppState.isCardFlipped = !AppState.isCardFlipped;
  const flipEl = document.getElementById('activeFlipCard');
  if (flipEl) {
    flipEl.classList.toggle('flipped', AppState.isCardFlipped);
  }
}

function toggleHint(event) {
  if (event) event.stopPropagation();
  AppState.showHint = !AppState.showHint;
  const hintBox = document.getElementById('cardHintBox');
  if (hintBox) {
    hintBox.classList.toggle('hidden', !AppState.showHint);
  }
}

function nextCard() {
  const filtered = getFilteredCards();
  if (filtered.length === 0) return;
  AppState.currentCardIndex = (AppState.currentCardIndex + 1) % filtered.length;
  AppState.isCardFlipped = false;
  AppState.showHint = false;
  renderStudyDeck();
}

function prevCard() {
  const filtered = getFilteredCards();
  if (filtered.length === 0) return;
  AppState.currentCardIndex = (AppState.currentCardIndex - 1 + filtered.length) % filtered.length;
  AppState.isCardFlipped = false;
  AppState.showHint = false;
  renderStudyDeck();
}

function shuffleCards() {
  const filtered = getFilteredCards();
  if (filtered.length <= 1) return;
  const randomIndex = Math.floor(Math.random() * filtered.length);
  AppState.currentCardIndex = randomIndex;
  AppState.isCardFlipped = false;
  AppState.showHint = false;
  renderStudyDeck();
  showToast('Deck shuffled to random card', 'info');
}

function toggleStarCurrent() {
  const filtered = getFilteredCards();
  if (filtered.length === 0) return;
  const card = filtered[AppState.currentCardIndex];
  if (AppState.starredIds.has(card.id)) {
    AppState.starredIds.delete(card.id);
    showToast('Removed from review queue', 'info');
  } else {
    AppState.starredIds.add(card.id);
    showToast('Starred for rapid review ★', 'warning');
  }
  savePersistedState();
  updateCounters();
  renderStudyDeck();
}

function toggleMasterCurrent() {
  const filtered = getFilteredCards();
  if (filtered.length === 0) return;
  const card = filtered[AppState.currentCardIndex];
  if (AppState.masteredIds.has(card.id)) {
    AppState.masteredIds.delete(card.id);
    showToast('Unmarked as mastered', 'info');
  } else {
    AppState.masteredIds.add(card.id);
    showToast('Marked as mastered! Keep going ✓', 'success');
  }
  savePersistedState();
  updateCounters();
  renderStudyDeck();
}

// ----------------------------------------------------------------------------
// MODE 2: ALL CARDS GRID (BROWSE & PRINT)
// ----------------------------------------------------------------------------
function renderAllCardsGrid() {
  const container = document.getElementById('gridCardsList');
  if (!container) return;

  const filtered = getFilteredCards();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-2 bg-white rounded-xl p-8 text-center border border-slate-200">
        <p class="text-slate-500 text-sm">No flashcards found matching active filters.</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach((card, idx) => {
    const subject = SUBJECTS_DATA.find(s => s.id === card.subjectId) || { shortName: card.subjectId, badgeColor: 'bg-blue-100 text-blue-800' };
    const isMastered = AppState.masteredIds.has(card.id);
    const isStarred = AppState.starredIds.has(card.id);

    html += `
      <div class="print-card-item bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div>
          <!-- Header Badges -->
          <div class="flex flex-wrap items-center justify-between gap-1.5 mb-2.5 pb-2 border-b border-slate-100">
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold border ${subject.badgeColor}">
                ${subject.shortName} • U${card.unit}
              </span>
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${
                card.pyqTag.includes('Practice')
                  ? 'bg-teal-50 text-teal-800 border-teal-300'
                  : 'bg-amber-50 text-amber-800 border-amber-300'
              } border">
                ${card.pyqTag}
              </span>
            </div>
            <div class="flex items-center space-x-1.5">
              <button onclick="toggleStarById('${card.id}')" class="text-sm px-1 py-0.5 rounded hover:bg-slate-100 ${isStarred ? 'text-amber-500 font-bold' : 'text-slate-300'}">
                ${isStarred ? '★' : '☆'}
              </button>
              <button onclick="toggleMasterById('${card.id}')" class="text-xs px-1.5 py-0.5 rounded font-bold ${isMastered ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}">
                ${isMastered ? '✓ Done' : '○ Master'}
              </button>
            </div>
          </div>

          <!-- Question Prompt -->
          <h3 class="font-serif-heading font-bold text-slate-900 text-sm md:text-base leading-snug mb-3">
            <span class="text-slate-400 font-sans text-xs mr-1">#${idx + 1}</span>
            ${card.question}
          </h3>

          <!-- Full Answer Section -->
          <div class="print-card-answer ${AppState.gridAnswersVisible ? 'block' : 'hidden'} text-xs md:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
            ${card.answer}
            
            <div class="exam-tip-box mt-3 p-2.5 bg-slate-50 rounded border-l-2 border-[#1B365D] text-[11px] text-slate-800">
              <strong class="text-[#1B365D]">🎯 Exam Key Point:</strong> ${card.examTip}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  renderMath(container);
}

function toggleGridAnswers() {
  AppState.gridAnswersVisible = !AppState.gridAnswersVisible;
  const btn = document.getElementById('btnToggleGridAnswers');
  if (btn) {
    btn.textContent = AppState.gridAnswersVisible ? 'Hide All Answers' : 'Reveal All Answers';
  }
  renderAllCardsGrid();
}

function printAllCards() {
  // Ensure answers are visible for printing
  AppState.gridAnswersVisible = true;
  renderAllCardsGrid();
  window.print();
}

function toggleStarById(cardId) {
  if (AppState.starredIds.has(cardId)) {
    AppState.starredIds.delete(cardId);
  } else {
    AppState.starredIds.add(cardId);
  }
  savePersistedState();
  updateCounters();
  renderCurrentView();
}

function toggleMasterById(cardId) {
  if (AppState.masteredIds.has(cardId)) {
    AppState.masteredIds.delete(cardId);
  } else {
    AppState.masteredIds.add(cardId);
  }
  savePersistedState();
  updateCounters();
  renderCurrentView();
}

// ----------------------------------------------------------------------------
// MODE 3: RAPID EXAM QUIZ (PYQ ACTIVE RECALL ENGINE)
// ----------------------------------------------------------------------------
function initQuiz() {
  // Filter questions based on selected subject/unit if applicable
  let questions = QUIZ_DATA;
  if (AppState.selectedSubject !== 'all') {
    const matching = QUIZ_DATA.filter(q => q.subjectId === AppState.selectedSubject);
    if (matching.length > 0) questions = matching;
  }
  if (AppState.selectedUnit !== 'all') {
    const matching = questions.filter(q => q.unit === parseInt(AppState.selectedUnit, 10));
    if (matching.length > 0) questions = matching;
  }

  AppState.quizQuestions = questions;
  AppState.quizIndex = 0;
  AppState.quizAnswers = {};
  AppState.quizScore = 0;
}

function renderQuizCard() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  const questions = AppState.quizQuestions;
  if (!questions || questions.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-xl p-8 text-center border border-slate-200">
        <p class="text-slate-600">No active recall quiz questions found for this selection.</p>
        <button onclick="setSubject('all')" class="mt-3 px-4 py-2 bg-[#1B365D] text-white rounded text-xs">View All Quiz Questions</button>
      </div>
    `;
    return;
  }

  const q = questions[AppState.quizIndex];
  const subject = SUBJECTS_DATA.find(s => s.id === q.subjectId) || { shortName: q.subjectId, badgeColor: 'bg-blue-100 text-blue-800' };
  const userAnswer = AppState.quizAnswers[q.id];
  const isAnswered = userAnswer !== undefined;

  let optionsHtml = '';
  q.options.forEach((opt, idx) => {
    let btnStyle = 'bg-white border-slate-200 hover:border-slate-300 text-slate-800';
    let badgeStyle = 'bg-slate-100 text-slate-600';
    let icon = '';

    if (isAnswered) {
      if (idx === q.correctIndex) {
        btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500';
        badgeStyle = 'bg-emerald-600 text-white';
        icon = '✓';
      } else if (idx === userAnswer) {
        btnStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-semibold ring-1 ring-rose-500';
        badgeStyle = 'bg-rose-600 text-white';
        icon = '✕';
      } else {
        btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
      }
    }

    const optLetter = String.fromCharCode(65 + idx);

    optionsHtml += `
      <button onclick="selectQuizOption(${idx})" 
        ${isAnswered ? 'disabled' : ''}
        class="w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between mb-2.5 ${btnStyle}">
        <div class="flex items-center space-x-3">
          <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${badgeStyle}">
            ${optLetter}
          </span>
          <span class="text-xs md:text-sm font-medium leading-relaxed">${opt}</span>
        </div>
        ${icon ? `<span class="text-base font-bold ml-2">${icon}</span>` : ''}
      </button>
    `;
  });

  container.innerHTML = `
    <div class="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm max-w-2xl mx-auto">
      <!-- Top Meta -->
      <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div class="flex items-center space-x-2">
          <span class="px-2.5 py-0.5 rounded text-xs font-bold border ${subject.badgeColor}">
            ${subject.shortName} • U${q.unit}
          </span>
          <span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300">
            🔥 ${q.pyqRef}
          </span>
        </div>
        <div class="text-xs font-bold text-slate-500">
          Question ${AppState.quizIndex + 1} of ${questions.length}
        </div>
      </div>

      <!-- Live Score Badge -->
      <div class="mb-4 flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs">
        <span class="text-slate-600 font-medium">Session Live Score:</span>
        <span class="font-bold text-[#1B365D] bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-200">
          ${AppState.quizScore} / ${Object.keys(AppState.quizAnswers).length} Correct
        </span>
      </div>

      <!-- Question Text -->
      <h3 class="font-serif-heading font-bold text-slate-900 text-base md:text-lg leading-snug mb-5">
        ${q.question}
      </h3>

      <!-- Options List -->
      <div class="mb-5">
        ${optionsHtml}
      </div>

      <!-- Answer Explanation Box (Revealed after selection) -->
      ${isAnswered ? `
        <div class="mt-4 p-4 rounded-xl border ${userAnswer === q.correctIndex ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-rose-50 border-rose-300 text-rose-950'} text-xs leading-relaxed animate-fade-in">
          <div class="flex items-center space-x-1.5 font-bold mb-1">
            <span>${userAnswer === q.correctIndex ? '🎉 Correct!' : '⚠️ Incorrect'}</span>
            <span>— Detailed PYQ Solution:</span>
          </div>
          <p>${q.explanation}</p>
        </div>
      ` : ''}

      <!-- Bottom Nav Controls -->
      <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <button onclick="prevQuizQuestion()" 
          ${AppState.quizIndex === 0 ? 'disabled class="opacity-40 cursor-not-allowed text-slate-400 text-xs"' : 'class="text-xs font-bold text-slate-600 hover:text-slate-900"'}>
          ← Previous
        </button>
        <button onclick="restartQuiz()" class="text-xs text-slate-400 hover:text-slate-600 font-medium">
          Restart Quiz
        </button>
        <button onclick="nextQuizQuestion()" 
          class="px-4 py-2 bg-[#1B365D] text-white rounded-lg text-xs font-semibold hover:bg-slate-800 shadow-xs">
          ${AppState.quizIndex === questions.length - 1 ? 'Finish Review' : 'Next Question →'}
        </button>
      </div>
    </div>
  `;

  renderMath(container);
}

function selectQuizOption(index) {
  const q = AppState.quizQuestions[AppState.quizIndex];
  if (AppState.quizAnswers[q.id] !== undefined) return;

  AppState.quizAnswers[q.id] = index;
  if (index === q.correctIndex) {
    AppState.quizScore += 1;
    showToast('Correct answer! +1', 'success');
  } else {
    showToast('Incorrect — review the model explanation', 'danger');
  }

  renderQuizCard();
}

function nextQuizQuestion() {
  if (AppState.quizIndex < AppState.quizQuestions.length - 1) {
    AppState.quizIndex += 1;
    renderQuizCard();
  } else {
    showToast(`Quiz completed! Final Score: ${AppState.quizScore} / ${AppState.quizQuestions.length}`, 'success');
  }
}

function prevQuizQuestion() {
  if (AppState.quizIndex > 0) {
    AppState.quizIndex -= 1;
    renderQuizCard();
  }
}

function restartQuiz() {
  AppState.quizIndex = 0;
  AppState.quizAnswers = {};
  AppState.quizScore = 0;
  renderQuizCard();
  showToast('Quiz reset', 'info');
}

// ----------------------------------------------------------------------------
// MODE 4: RIT NOTES & PYQ VAULT (DEDICATED SECTION)
// ----------------------------------------------------------------------------
function renderNotesVault() {
  const container = document.getElementById('notesVaultContainer');
  if (!container) return;

  const currentSubjectId = AppState.selectedSubject === 'all' ? 'chem' : AppState.selectedSubject;
  const currentSubject = SUBJECTS_DATA.find(s => s.id === currentSubjectId) || SUBJECTS_DATA[0];
  const subjectNotes = RIT_NOTES_DATA[currentSubjectId] || { officialLinks: [], units: {} };

  let unitsHtml = '';
  currentSubject.units.forEach(u => {
    const uData = subjectNotes.units[u.id] || { title: u.name, cheatSheet: [], notesMarkdown: '' };
    const unitCards = FLASHCARDS_DATA.filter(c => c.subjectId === currentSubjectId && c.unit === u.id);

    let cheatSheetList = '';
    (uData.cheatSheet || []).forEach(item => {
      cheatSheetList += `<li class="mb-1 text-slate-800 font-mono text-xs">${item}</li>`;
    });

    unitsHtml += `
      <div class="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden mb-5">
        <div class="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span class="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">
              Unit ${u.id}
            </span>
            <h3 class="font-bold text-slate-900 text-sm md:text-base inline-block ml-2 font-serif-heading">
              ${uData.title}
            </h3>
          </div>
          <button onclick="jumpToFlashcards('${currentSubjectId}', ${u.id})"
            class="px-3 py-1.5 bg-[#1B365D] hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-2xs">
            <span>Practice 3D Flashcards for this Unit</span>
            <span>→</span>
          </button>
        </div>

        <div class="p-5">
          <!-- Formula Cheat Sheet Box -->
          ${uData.cheatSheet && uData.cheatSheet.length > 0 ? `
            <div class="mb-4 bg-amber-50/70 p-4 rounded-lg border border-amber-200">
              <h4 class="text-xs uppercase tracking-wider font-bold text-amber-900 mb-2 flex items-center space-x-1.5">
                <span>⚡</span>
                <span>Unit High-Yield Formulas & Exam Reactions Cheat Sheet:</span>
              </h4>
              <ul class="list-disc list-inside space-y-1">
                ${cheatSheetList}
              </ul>
            </div>
          ` : ''}

          <!-- Concise Revision Notes -->
          <div class="prose prose-sm max-w-none text-slate-800 text-xs md:text-sm leading-relaxed mb-4">
            ${uData.notesMarkdown.replace(/###/g, '<h4 class="font-bold text-slate-800 mt-2 mb-1">').replace(/####/g, '<h5 class="font-semibold text-slate-700 mt-2 mb-1">').replace(/\n\*/g, '<br>•')}
          </div>

          <!-- Solved PYQ Questions Summary for this Unit -->
          <div class="border-t border-slate-100 pt-3">
            <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Solved PYQs Available for Unit ${u.id} (${unitCards.length} Questions):
            </h5>
            <div class="space-y-1.5">
              ${unitCards.map(c => `
                <div class="text-xs text-slate-700 flex items-start space-x-2 py-1 border-b border-slate-50">
                  <span class="text-amber-700 font-bold whitespace-nowrap">${c.pyqTag.split('•')[0]}</span>
                  <span class="font-medium text-slate-900 line-clamp-1">${c.question}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="max-w-4xl mx-auto">
      <!-- Portal Header & Official Access Links -->
      <div class="bg-gradient-to-r from-[#1B365D] to-[#2563EB] text-white rounded-2xl p-6 md:p-8 mb-6 shadow-md">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-white/20 text-white backdrop-blur-xs">
              MSRIT Official Courseware
            </span>
            <h2 class="text-xl md:text-2xl font-bold mt-1.5 font-serif-heading">
              ${currentSubject.name} (${currentSubject.code})
            </h2>
            <p class="text-xs text-blue-100 mt-1">
              Curated Revision Notes, Formula Cheat Sheets & Solved PYQ Banks
            </p>
          </div>
          
          <!-- Direct Portal Links & Google Drive -->
          <div class="flex flex-col sm:flex-row gap-2">
            <a href="https://drive.google.com/drive/folders/1xxqSvT6AOTEsRlWynwbvLyXPW2AIzI34?usp=sharing_eel" target="_blank" rel="noopener noreferrer" 
              class="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-all shadow-sm">
              <span>📂</span>
              <span>Open Google Drive Study Vault</span>
              <span>↗</span>
            </a>
            ${(subjectNotes.officialLinks || []).map(link => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                class="px-3.5 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-white border border-white/20 flex items-center space-x-1.5 transition-all">
                <span>🔗</span>
                <span>${link.name}</span>
                <span>↗</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Subject Switcher Pills inside Notes Mode -->
      <div class="flex items-center space-x-2 overflow-x-auto pb-3 mb-4 custom-scrollbar">
        ${SUBJECTS_DATA.map(sub => `
          <button onclick="setSubject('${sub.id}')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border flex items-center space-x-1.5 ${
              sub.id === currentSubjectId
                ? 'bg-[#1B365D] text-white border-[#1B365D]'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
            }">
            <span class="w-2 h-2 rounded-full" style="background-color: ${sub.color}"></span>
            <span>${sub.shortName}</span>
          </button>
        `).join('')}
      </div>

      <!-- Unit-Wise Accordions -->
      <div>
        ${unitsHtml}
      </div>
    </div>
  `;

  renderMath(container);
}

function jumpToFlashcards(subjectId, unitId) {
  AppState.selectedSubject = subjectId;
  AppState.selectedUnit = unitId;
  AppState.currentCardIndex = 0;
  AppState.isCardFlipped = false;
  AppState.showHint = false;
  setMode('study');
  renderSubjectBar();
  renderUnitBar();
  updateCounters();
  showToast(`Filtered to ${subjectId.toUpperCase()} Unit ${unitId} flashcards`, 'info');
}

// ----------------------------------------------------------------------------
// FILTER & SEARCH HANDLERS
// ----------------------------------------------------------------------------
function handleSearchInput(e) {
  AppState.searchQuery = e.target.value;
  AppState.currentCardIndex = 0;
  updateCounters();
  renderCurrentView();
}

function handleFilterChange(e) {
  AppState.currentFilter = e.target.value;
  AppState.currentCardIndex = 0;
  updateCounters();
  renderCurrentView();
}

function resetFilters() {
  AppState.selectedSubject = 'all';
  AppState.selectedUnit = 'all';
  AppState.searchQuery = '';
  AppState.currentFilter = 'all';
  AppState.currentCardIndex = 0;

  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');
  if (searchInput) searchInput.value = '';
  if (filterSelect) filterSelect.value = 'all';

  renderSubjectBar();
  renderUnitBar();
  updateCounters();
  renderCurrentView();
  showToast('All search and topic filters reset', 'info');
}

function resetAllMarks() {
  AppState.masteredIds.clear();
  AppState.starredIds.clear();
  savePersistedState();
  updateCounters();
  renderCurrentView();
  showToast('All Mastered and Starred cards cleared', 'info');
}

// ----------------------------------------------------------------------------
// KEYBOARD SHORTCUTS CONTROLLER
// ----------------------------------------------------------------------------
document.addEventListener('keydown', (e) => {
  // Ignore if user is currently typing in an input or textarea
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
    return;
  }

  if (AppState.currentMode === 'study') {
    if (e.code === 'Space') {
      e.preventDefault();
      toggleCardFlip();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      nextCard();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      prevCard();
    } else if (e.key.toLowerCase() === 's') {
      e.preventDefault();
      toggleStarCurrent();
    } else if (e.key.toLowerCase() === 'm') {
      e.preventDefault();
      toggleMasterCurrent();
    } else if (e.key.toLowerCase() === 'h') {
      e.preventDefault();
      toggleHint();
    }
  }
});

// ----------------------------------------------------------------------------
// INITIALIZATION ON DOM READY & RESILIENT LIFECYCLE
// ----------------------------------------------------------------------------
function initApp() {
  if (typeof FLASHCARDS_DATA === 'undefined' || typeof SUBJECTS_DATA === 'undefined') {
    console.warn('Academic data is loading... retrying in 50ms');
    setTimeout(initApp, 50);
    return;
  }

  loadPersistedState();
  parseUrlHash();
  renderSubjectBar();
  renderUnitBar();
  updateCounters();
  setMode(AppState.currentMode, false);

  // Setup search & filter listeners
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');

  if (searchInput) {
    searchInput.removeEventListener('input', handleSearchInput);
    searchInput.addEventListener('input', handleSearchInput);
  }
  if (filterSelect) {
    filterSelect.removeEventListener('change', handleFilterChange);
    filterSelect.addEventListener('change', handleFilterChange);
  }
}

// Resilient initialization: handles DOMContentLoaded whether fired before or after script execution
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// KaTeX LaTeX rendering fallback on full window load
window.addEventListener('load', () => {
  renderMath(document.body);
});

// Browser back/forward navigation support
window.addEventListener('hashchange', () => {
  parseUrlHash();
  setMode(AppState.currentMode, false);
});
