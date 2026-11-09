// ==========================================
// Verb Form & Vocabulary English Quiz Engine
// Dựa trên lý thuyết: Giáo Viên Chuyên Anh - Thầy Bùi Văn Vinh
// ==========================================

class EnglishQuizApp {
  constructor() {
    this.data = window.QUIZ_DATA;
    this.currentTab = 'struct'; // 'struct' | 'vocab' | 'theory' | 'bank'
    
    // Quiz State for Structure Mode
    this.structState = {
      category: 'ALL',
      mode: 'practice', // 'practice' | 'exam'
      quizSize: 10,     // 10 | 50 | 'all'
      setIndex: 0,      // 0, 1, 2... or 'random'
      allPool: [],
      currentIndex: 0,
      questions: [],
      score: 0,
      wrongList: [],
      isAnswered: false,
      startTime: null,
      timerInterval: null
    };

    // Quiz State for Vocab Meaning Mode
    this.vocabState = {
      category: 'ALL',
      direction: 'en_vi', // 'en_vi' (Anh -> Việt) | 'vi_en' (Việt -> Anh)
      mode: 'practice',
      quizSize: 10,     // 10 | 50 | 'all'
      setIndex: 0,      // 0, 1, 2... or 'random'
      allPool: [],
      currentIndex: 0,
      questions: [],
      score: 0,
      wrongList: [],
      isAnswered: false,
      startTime: null,
      timerInterval: null
    };

    this.soundEnabled = true;
    this.autoAdvance = false;
    this.audioCtx = null;

    this.init();
  }

  init() {
    this.bindDomElements();
    this.populateCategoryDropdowns();
    this.bindEvents();
    this.setupAudio();
    this.renderTheoryTable();
    this.renderQuestionBank();

    // Start with default Structure Quiz
    this.startStructQuiz();
  }

  // --- AUDIO SYNTHESIZER (Pure Web Audio, 0 delay, 0 external files) ---
  setupAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio not supported", e);
    }
  }

  playSound(type) {
    if (!this.soundEnabled || !this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'wrong') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.2);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  }

  // --- DOM BINDINGS ---
  bindDomElements() {
    // Tabs
    this.tabBtns = document.querySelectorAll('.tab-btn');
    this.tabPanels = {
      struct: document.getElementById('panel-struct'),
      vocab: document.getElementById('panel-vocab'),
      theory: document.getElementById('panel-theory'),
      bank: document.getElementById('panel-bank')
    };

    // Header actions
    this.btnSound = document.getElementById('btn-toggle-sound');
    this.btnAutoNext = document.getElementById('btn-toggle-autonext');

    // Quiz Size & Set Selectors
    this.structSizeBtns = document.querySelectorAll('#panel-struct [data-size]');
    this.structSetSelect = document.getElementById('struct-set-select');
    this.vocabSizeBtns = document.querySelectorAll('#panel-vocab [data-size]');
    this.vocabSetSelect = document.getElementById('vocab-set-select');

    // Structure Mode Elements
    this.structCatSelect = document.getElementById('struct-category-select');
    this.structPillPractice = document.getElementById('struct-mode-practice');
    this.structPillExam = document.getElementById('struct-mode-exam');
    this.structProgress = document.getElementById('struct-progress');
    this.structBadgeCount = document.getElementById('struct-badge-count');
    this.structBadgeCorrect = document.getElementById('struct-badge-correct');
    this.structBadgeTimer = document.getElementById('struct-badge-timer');
    this.structCardTag = document.getElementById('struct-card-tag');
    this.structQuestionText = document.getElementById('struct-question-text');
    this.structOptionsContainer = document.getElementById('struct-options');
    this.structExplanation = document.getElementById('struct-explanation');
    this.structExpContent = document.getElementById('struct-exp-content');
    this.structBtnNext = document.getElementById('struct-btn-next');

    // Vocab Mode Elements
    this.vocabCatSelect = document.getElementById('vocab-category-select');
    this.vocabPillEnVi = document.getElementById('vocab-dir-envi');
    this.vocabPillViEn = document.getElementById('vocab-dir-vien');
    this.vocabProgress = document.getElementById('vocab-progress');
    this.vocabBadgeCount = document.getElementById('vocab-badge-count');
    this.vocabBadgeCorrect = document.getElementById('vocab-badge-correct');
    this.vocabCardTag = document.getElementById('vocab-card-tag');
    this.vocabQuestionText = document.getElementById('vocab-question-text');
    this.vocabOptionsContainer = document.getElementById('vocab-options');
    this.vocabExplanation = document.getElementById('vocab-explanation');
    this.vocabExpContent = document.getElementById('vocab-exp-content');
    this.vocabBtnNext = document.getElementById('vocab-btn-next');

    // Modal
    this.modalOverlay = document.getElementById('result-modal');
    this.modalScore = document.getElementById('modal-score');
    this.modalTotal = document.getElementById('modal-total');
    this.modalPercent = document.getElementById('modal-percent');
    this.modalTime = document.getElementById('modal-time');
    this.modalEvaluation = document.getElementById('modal-evaluation');
    this.modalBtnRestart = document.getElementById('modal-btn-restart');
    this.modalBtnClose = document.getElementById('modal-btn-close');
    this.modalWrongContainer = document.getElementById('modal-wrong-container');
    this.modalWrongList = document.getElementById('modal-wrong-list');
    this.modalBtnRetryWrong = document.getElementById('modal-btn-retry-wrong');
    this.modalBtnNextSet = document.getElementById('modal-btn-next-set');

    // Wrong questions down below
    this.structWrongContainer = document.getElementById('struct-wrong-container');
    this.structWrongCount = document.getElementById('struct-wrong-count');
    this.structWrongList = document.getElementById('struct-wrong-list');
    this.structBtnRetryWrong = document.getElementById('struct-btn-retry-wrong');
    this.structBtnCopyWrong = document.getElementById('struct-btn-copy-wrong');

    this.vocabWrongContainer = document.getElementById('vocab-wrong-container');
    this.vocabWrongCount = document.getElementById('vocab-wrong-count');
    this.vocabWrongList = document.getElementById('vocab-wrong-list');
    this.vocabBtnRetryWrong = document.getElementById('vocab-btn-retry-wrong');
    this.vocabBtnCopyWrong = document.getElementById('vocab-btn-copy-wrong');

    // Shuffle Buttons
    this.structBtnShuffle = document.getElementById('struct-btn-shuffle');
    this.vocabBtnShuffle = document.getElementById('vocab-btn-shuffle');

    // Cards & Hints for click anywhere
    this.structHintText = document.querySelector('#panel-struct .hint-text');
    this.vocabHintText = document.querySelector('#panel-vocab .hint-text');
    this.structQuizCard = document.querySelector('#panel-struct .quiz-card');
    this.vocabQuizCard = document.querySelector('#panel-vocab .quiz-card');

    // Theory & Bank Search
    this.theorySearchInput = document.getElementById('theory-search');
    this.theoryTableBody = document.getElementById('theory-table-body');
    this.bankSearchInput = document.getElementById('bank-search');
    this.bankContainer = document.getElementById('bank-list-container');

    // Mobile config toggles
    this.structConfigToggle = document.getElementById('struct-config-toggle');
    this.structConfigCard = document.getElementById('struct-config-card');
    this.vocabConfigToggle = document.getElementById('vocab-config-toggle');
    this.vocabConfigCard = document.getElementById('vocab-config-card');
  }

  populateCategoryDropdowns() {
    const cats = this.data.categories;
    const makeOptions = () => cats.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    if (this.structCatSelect) this.structCatSelect.innerHTML = makeOptions();
    if (this.vocabCatSelect) this.vocabCatSelect.innerHTML = makeOptions();
  }

  // --- EVENT LISTENERS ---
  bindEvents() {
    // Tab switching
    this.tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Sound toggle
    this.btnSound.addEventListener('click', () => {
      this.soundEnabled = !this.soundEnabled;
      this.btnSound.innerHTML = this.soundEnabled ? '🔊 <span class="btn-lbl">Âm thanh: BẬT</span>' : '🔇 <span class="btn-lbl">Âm thanh: TẮT</span>';
      this.btnSound.style.color = this.soundEnabled ? '#10b981' : '#64748b';
    });

    // Auto next toggle
    this.btnAutoNext.addEventListener('click', () => {
      this.autoAdvance = !this.autoAdvance;
      this.btnAutoNext.innerHTML = this.autoAdvance ? '⚡ <span class="btn-lbl">Tự chuyển: BẬT</span>' : '⚡ <span class="btn-lbl">Tự chuyển: TẮT</span>';
      this.btnAutoNext.style.color = this.autoAdvance ? '#4f46e5' : '#64748b';
    });

    // Mobile config card toggles
    if (this.structConfigToggle && this.structConfigCard) {
      this.structConfigToggle.addEventListener('click', () => {
        this.structConfigCard.classList.toggle('is-open');
      });
    }
    if (this.vocabConfigToggle && this.vocabConfigCard) {
      this.vocabConfigToggle.addEventListener('click', () => {
        this.vocabConfigCard.classList.toggle('is-open');
      });
    }

    // Structure Quiz Size pills (10, 50, all)
    this.structSizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.structSizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const s = btn.dataset.size;
        this.structState.quizSize = (s === 'all') ? 'all' : parseInt(s);
        this.structState.setIndex = 0;
        this.startStructQuiz();
      });
    });

    if (this.structSetSelect) {
      this.structSetSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        this.structState.setIndex = (val === 'random') ? 'random' : parseInt(val);
        this.loadStructCurrentSet();
      });
    }

    // Structure quiz category filter
    this.structCatSelect.addEventListener('change', (e) => {
      this.structState.category = e.target.value;
      this.structState.setIndex = 0;
      this.startStructQuiz();
    });

    // Structure mode pills
    this.structPillPractice.addEventListener('click', () => {
      this.structPillPractice.classList.add('active');
      this.structPillExam.classList.remove('active');
      this.structState.mode = 'practice';
      this.structBadgeTimer.style.display = 'none';
      this.loadStructCurrentSet();
    });

    this.structPillExam.addEventListener('click', () => {
      this.structPillExam.classList.add('active');
      this.structPillPractice.classList.remove('active');
      this.structState.mode = 'exam';
      this.structBadgeTimer.style.display = 'inline-flex';
      this.loadStructCurrentSet();
    });

    this.structBtnNext.addEventListener('click', () => this.nextStructQuestion());

    // Vocab Quiz Size pills (10, 50, all)
    this.vocabSizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.vocabSizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const s = btn.dataset.size;
        this.vocabState.quizSize = (s === 'all') ? 'all' : parseInt(s);
        this.vocabState.setIndex = 0;
        this.startVocabQuiz();
      });
    });

    if (this.vocabSetSelect) {
      this.vocabSetSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        this.vocabState.setIndex = (val === 'random') ? 'random' : parseInt(val);
        this.loadVocabCurrentSet();
      });
    }

    // Vocab direction pills
    this.vocabPillEnVi.addEventListener('click', () => {
      this.vocabPillEnVi.classList.add('active');
      this.vocabPillViEn.classList.remove('active');
      this.vocabState.direction = 'en_vi';
      this.startVocabQuiz();
    });

    this.vocabPillViEn.addEventListener('click', () => {
      this.vocabPillViEn.classList.add('active');
      this.vocabPillEnVi.classList.remove('active');
      this.vocabState.direction = 'vi_en';
      this.startVocabQuiz();
    });

    this.vocabCatSelect.addEventListener('change', (e) => {
      this.vocabState.category = e.target.value;
      this.vocabState.setIndex = 0;
      this.startVocabQuiz();
    });

    this.vocabBtnNext.addEventListener('click', () => this.nextVocabQuestion());

    // Retry Wrong Buttons
    if (this.structBtnRetryWrong) {
      this.structBtnRetryWrong.addEventListener('click', () => this.retryWrongStruct());
    }
    if (this.vocabBtnRetryWrong) {
      this.vocabBtnRetryWrong.addEventListener('click', () => this.retryWrongVocab());
    }
    if (this.modalBtnRetryWrong) {
      this.modalBtnRetryWrong.addEventListener('click', () => {
        this.modalOverlay.classList.remove('open');
        if (this.currentTab === 'struct') this.retryWrongStruct();
        else if (this.currentTab === 'vocab') this.retryWrongVocab();
      });
    }

    // Shuffle Buttons
    if (this.structBtnShuffle) {
      this.structBtnShuffle.addEventListener('click', () => {
        this.shuffleArray(this.structState.allPool);
        this.loadStructCurrentSet();
      });
    }

    if (this.vocabBtnShuffle) {
      this.vocabBtnShuffle.addEventListener('click', () => {
        this.shuffleArray(this.vocabState.allPool);
        this.loadVocabCurrentSet();
      });
    }

    // Copy Wrong Notes Buttons
    if (this.structBtnCopyWrong) {
      this.structBtnCopyWrong.addEventListener('click', () => this.copyWrongNotes('struct'));
    }
    if (this.vocabBtnCopyWrong) {
      this.vocabBtnCopyWrong.addEventListener('click', () => this.copyWrongNotes('vocab'));
    }

    // Modal buttons
    if (this.modalBtnNextSet) {
      this.modalBtnNextSet.addEventListener('click', () => this.loadNextSet());
    }

    this.modalBtnRestart.addEventListener('click', () => {
      this.modalOverlay.classList.remove('open');
      if (this.currentTab === 'struct') this.loadStructCurrentSet();
      else if (this.currentTab === 'vocab') this.loadVocabCurrentSet();
    });

    this.modalBtnClose.addEventListener('click', () => {
      this.modalOverlay.classList.remove('open');
    });

    // Theory search
    this.theorySearchInput.addEventListener('input', (e) => {
      this.filterTheoryTable(e.target.value);
    });

    // Bank search
    this.bankSearchInput.addEventListener('input', (e) => {
      this.filterQuestionBank(e.target.value);
    });

    // CLICK ANYWHERE TO ADVANCE AFTER ANSWERED
    document.addEventListener('click', (e) => {
      // Do not advance if user clicked on interactive config / navigation elements
      if (e.target.closest('.nav-tabs, .header-actions, .config-card, .btn-retry-wrong, .btn-copy-wrong, .modal-card, #result-modal, input, select')) {
        return;
      }

      if (this.currentTab === 'struct' && this.structState.isAnswered) {
        this.nextStructQuestion();
      } else if (this.currentTab === 'vocab' && this.vocabState.isAnswered) {
        this.nextVocabQuestion();
      }
    });

    // KEYBOARD SHORTCUTS (Press any key to advance when answered, or 1/2/3/4 to choose)
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

      // If question is answered, pressing ANY key advances to next!
      if (this.currentTab === 'struct' && this.structState.isAnswered) {
        e.preventDefault();
        this.nextStructQuestion();
        return;
      } else if (this.currentTab === 'vocab' && this.vocabState.isAnswered) {
        e.preventDefault();
        this.nextVocabQuestion();
        return;
      }

      const key = e.key.toUpperCase();
      let optIdx = -1;
      if (['1', 'A'].includes(key)) optIdx = 0;
      else if (['2', 'B'].includes(key)) optIdx = 1;
      else if (['3', 'C'].includes(key)) optIdx = 2;
      else if (['4', 'D'].includes(key)) optIdx = 3;

      if (optIdx !== -1) {
        if (this.currentTab === 'struct' && !this.structState.isAnswered) {
          const btn = this.structOptionsContainer.children[optIdx];
          if (btn) btn.click();
        } else if (this.currentTab === 'vocab' && !this.vocabState.isAnswered) {
          const btn = this.vocabOptionsContainer.children[optIdx];
          if (btn) btn.click();
        }
      }
    });
  }

  switchTab(tab) {
    this.currentTab = tab;
    this.tabBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
    });
    Object.keys(this.tabPanels).forEach(key => {
      this.tabPanels[key].classList.toggle('active', key === tab);
    });

    if (tab === 'struct' && this.structState.questions.length === 0) {
      this.startStructQuiz();
    } else if (tab === 'vocab' && this.vocabState.questions.length === 0) {
      this.startVocabQuiz();
    }
  }

  // ========================================================
  // CƠ CHẾ 1: TRẮC NGHIỆM CẤU TRÚC VERB FORM (V / V-ing / To V)
  // ========================================================
  startStructQuiz() {
    clearInterval(this.structState.timerInterval);
    const cat = this.structState.category;

    // Filter predefined structure questions
    let baseQuestions = this.data.structureQuestions;
    if (cat !== 'ALL') {
      baseQuestions = baseQuestions.filter(q => q.cat === cat);
    }

    // Dynamic generation from vocab items to ensure extensive practice
    let relevantVocab = this.data.vocabList;
    if (cat !== 'ALL') {
      relevantVocab = relevantVocab.filter(v => v.cat === cat);
    }

    const dynamicQuestions = relevantVocab.map((v, i) => {
      let options = ["V-ing", "To V", "V (bare infinitive)", "Cả To V và V-ing"];
      let correctIdx = 0;

      if (v.form.includes("To V") && v.form.includes("V-ing")) {
        correctIdx = 3;
      } else if (v.form.includes("To V")) {
        correctIdx = 1;
      } else if (v.form.includes("bare") || v.form.includes("V (bare)")) {
        correctIdx = 2;
      } else {
        correctIdx = 0; // V-ing
      }

      return {
        id: `dyn_sq_${i}`,
        cat: v.cat,
        question: `Sau động từ / cấu trúc '<span class="highlight-word">${v.word}</span>' (${v.meaning}), động từ theo sau được chia ở dạng nào?`,
        options: options,
        correct: correctIdx,
        explanation: `Theo tài liệu: '${v.word}' (${v.meaning}) đi với dạng **${v.form}**. Ghi chú: ${v.note}`
      };
    });

    const allPool = [...baseQuestions, ...dynamicQuestions];
    this.shuffleArray(allPool); // Xáo trộn ngẫu nhiên toàn bộ câu hỏi
    this.structState.allPool = allPool;
    this.populateStructSetDropdown();
    this.loadStructCurrentSet();
  }

  populateStructSetDropdown() {
    const s = this.structState;
    const total = s.allPool.length;
    const size = s.quizSize;
    const select = this.structSetSelect;
    if (!select) return;

    select.innerHTML = '';
    if (size === 'all') {
      select.innerHTML = `
        <option value="0">Tất cả câu (${total} câu)</option>
        <option value="random">🎲 Xáo trộn tất cả ngẫu nhiên</option>
      `;
    } else {
      const numSets = Math.ceil(total / size);
      let html = '';
      for (let i = 0; i < numSets; i++) {
        const start = i * size + 1;
        const end = Math.min((i + 1) * size, total);
        const label = (size === 10) ? `Bài ${i + 1} (${start} - ${end})` : `Đề Tổng Hợp ${i + 1} (${start} - ${end})`;
        html += `<option value="${i}">${label}</option>`;
      }
      html += `<option value="random">🎲 ${size} câu ngẫu nhiên</option>`;
      select.innerHTML = html;
    }

    if (s.setIndex !== 'random' && typeof s.setIndex === 'number') {
      const maxIdx = (size === 'all') ? 0 : Math.ceil(total / size) - 1;
      if (s.setIndex > maxIdx) s.setIndex = 0;
      select.value = s.setIndex;
    } else {
      select.value = s.setIndex || 0;
    }
  }

  loadStructCurrentSet() {
    clearInterval(this.structState.timerInterval);
    const s = this.structState;
    const pool = s.allPool;
    const size = s.quizSize;
    let questions = [];

    if (size === 'all') {
      questions = [...pool];
      this.shuffleArray(questions);
    } else if (s.setIndex === 'random') {
      let copy = [...pool];
      this.shuffleArray(copy);
      questions = copy.slice(0, size);
    } else {
      const start = s.setIndex * size;
      questions = pool.slice(start, start + size);
      this.shuffleArray(questions);
    }

    // Xáo trộn ngẫu nhiên vị trí các đáp án A, B, C, D của mỗi câu
    s.questions = questions.map(q => this.shuffleQuestionOptions(q));
    s.currentIndex = 0;
    s.score = 0;
    s.wrongList = [];
    s.isAnswered = false;

    if (s.mode === 'exam') {
      s.startTime = Date.now();
      s.timerInterval = setInterval(() => this.updateStructTimer(), 1000);
    }

    if (this.structConfigCard) this.structConfigCard.classList.remove('is-open');
    this.updateMobileConfigSummary('struct');

    this.updateStructWrongUI();
    this.renderStructQuestion();
  }

  updateStructTimer() {
    if (!this.structState.startTime) return;
    const elapsedSec = Math.floor((Date.now() - this.structState.startTime) / 1000);
    const m = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
    const s = String(elapsedSec % 60).padStart(2, '0');
    this.structBadgeTimer.innerHTML = `⏱️ ${m}:${s}`;
  }

  renderStructQuestion() {
    const s = this.structState;
    if (s.currentIndex >= s.questions.length) {
      this.finishStructExam();
      return;
    }

    const q = s.questions[s.currentIndex];
    s.isAnswered = false;

    // Remove answered state from quiz card
    if (this.structQuizCard) this.structQuizCard.classList.remove('answered');
    if (this.structHintText) {
      this.structHintText.innerHTML = 'Mẹo: Nhấn phím <span class="kbd">1</span>, <span class="kbd">2</span>, <span class="kbd">3</span>, <span class="kbd">4</span> (hoặc <span class="kbd">A</span>, <span class="kbd">B</span>, <span class="kbd">C</span>, <span class="kbd">D</span>) để chọn nhanh • <span class="kbd">Enter</span> qua câu';
    }

    // Badges & Progress
    this.structBadgeCount.innerHTML = `Câu <b>${s.currentIndex + 1}</b> / ${s.questions.length}`;
    this.structBadgeCorrect.innerHTML = `Đúng: <b>${s.score}</b>`;
    const pct = ((s.currentIndex) / s.questions.length) * 100;
    this.structProgress.style.width = `${pct}%`;

    // Category tag name & Set name
    const catObj = this.data.categories.find(c => c.id === q.cat);
    let catName = catObj ? catObj.name : "Dạng của Động Từ";
    let setTitle = "";
    if (s.quizSize === 10) {
      setTitle = (s.setIndex === 'random') ? '10 câu ngẫu nhiên' : `Bài ${s.setIndex + 1}`;
    } else if (s.quizSize === 50) {
      setTitle = (s.setIndex === 'random') ? '50 câu ngẫu nhiên' : `Đề Tổng Hợp ${s.setIndex + 1}`;
    }

    let tagHtml = "";
    if (setTitle) {
      tagHtml += `<span class="badge badge-primary" style="margin-right:8px; font-weight:700;">${setTitle}</span>`;
    }
    tagHtml += `<span class="question-tag" style="margin:0;">${catName}</span>`;

    if (q.isRetry) {
      tagHtml += ` <span style="background:#fee2e2; color:#b91c1c; padding:2px 6px; border-radius:4px; font-size:0.75rem; margin-left:6px; font-weight:700;">🔄 Câu làm lại từ dưới</span>`;
    }
    this.structCardTag.innerHTML = tagHtml;

    // Text
    this.structQuestionText.innerHTML = q.question;

    // Options
    this.structOptionsContainer.innerHTML = '';
    const keys = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-key">${keys[idx]}</span>
        <span class="option-text">${opt}</span>
      `;
      btn.addEventListener('click', () => this.handleStructAnswer(idx));
      this.structOptionsContainer.appendChild(btn);
    });

    // Reset explanation
    this.structExplanation.className = 'explanation-box';
    this.structBtnNext.style.display = 'none';
  }

  handleStructAnswer(chosenIdx) {
    const s = this.structState;
    if (s.isAnswered) return;
    s.isAnswered = true;

    // Visual cue for clicking anywhere to advance
    if (this.structQuizCard) this.structQuizCard.classList.add('answered');
    if (this.structHintText) {
      this.structHintText.innerHTML = '👉 <b>Đã trả lời xong!</b> Nhấp vào <b>bất kỳ đâu trên màn hình</b> (hoặc bấm phím bất kỳ / Space / Enter) để sang câu tiếp theo ➜';
    }

    const q = s.questions[s.currentIndex];
    const isCorrect = (chosenIdx === q.correct);
    const buttons = this.structOptionsContainer.querySelectorAll('.option-btn');

    // Highlight options
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === chosenIdx) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      s.score++;
      this.playSound('correct');
      this.structExplanation.className = 'explanation-box show correct';

      const existingWrong = s.wrongList.find(w => w.question.id === q.id || w.question.question === q.question);
      if (existingWrong) {
        existingWrong.resolved = true;
        this.structExplanation.querySelector('.explanation-title').innerHTML = '✅ Chính xác! (Đã sửa đúng câu sai)';
        this.updateStructWrongUI();
      } else {
        this.structExplanation.querySelector('.explanation-title').innerHTML = '✅ Chính xác!';
      }
    } else {
      // ĐẨY CÂU SAI XUỐNG CUỐI DANH SÁCH (Học lặp lại)
      s.questions.push({ ...q, isRetry: true });

      const existingWrong = s.wrongList.find(w => w.question.id === q.id || w.question.question === q.question);
      if (existingWrong) {
        existingWrong.chosen = chosenIdx;
        existingWrong.resolved = false;
      } else {
        s.wrongList.push({ question: q, chosen: chosenIdx, resolved: false });
      }

      this.playSound('wrong');
      this.structExplanation.className = 'explanation-box show wrong';
      this.structExplanation.querySelector('.explanation-title').innerHTML = `❌ Chưa chính xác! Đáp án đúng: <b>${['A','B','C','D'][q.correct]}. ${q.options[q.correct]}</b>`;
      this.updateStructWrongUI();
    }

    let extraNote = "";
    if (!isCorrect) {
      extraNote = `<div style="margin-top:12px; padding:8px 12px; background:#fee2e2; border-left:4px solid #ef4444; border-radius:4px; font-size:0.88rem; color:#991b1b; font-weight:600;">
        ⬇️ Câu này đã được tự động đẩy xuống cuối hàng đợi để bạn làm lại cho nhớ, đồng thời được ghi lại ở danh sách bên dưới!
      </div>`;
    }

    this.structExpContent.innerHTML = q.explanation.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') + extraNote;
    this.structBadgeCorrect.innerHTML = `Đúng: <b>${s.score}</b>`;
    this.structBtnNext.style.display = 'inline-flex';

    if (this.autoAdvance) {
      setTimeout(() => {
        if (s.isAnswered) this.nextStructQuestion();
      }, 1400);
    }
  }

  nextStructQuestion() {
    this.structState.currentIndex++;
    this.renderStructQuestion();
  }

  updateStructWrongUI() {
    if (!this.structWrongContainer || !this.structWrongList) return;
    const s = this.structState;
    if (!s.wrongList || s.wrongList.length === 0) {
      this.structWrongContainer.style.display = 'none';
      return;
    }

    this.structWrongContainer.style.display = 'block';
    const unresolvedCount = s.wrongList.filter(w => !w.resolved).length;
    this.structWrongCount.textContent = unresolvedCount;

    this.structWrongList.innerHTML = s.wrongList.map((item, idx) => {
      const q = item.question;
      const chosenText = q.options[item.chosen] || '';
      const correctText = q.options[q.correct] || '';
      const isResolved = item.resolved;

      return `
        <div class="wrong-card ${isResolved ? 'resolved' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:0.75rem; font-weight:700; color:#ef4444; text-transform:uppercase;">Câu sai #${idx + 1}</span>
            ${isResolved ? '<span style="font-size:0.78rem; font-weight:700; color:#16a34a; background:#dcfce7; padding:2px 8px; border-radius:999px;">✓ Đã làm lại đúng!</span>' : '<span style="font-size:0.78rem; font-weight:600; color:#b91c1c;">(Đã xếp ở cuối)</span>'}
          </div>
          <div class="wrong-card-q">${q.question}</div>
          <div class="wrong-card-ans">
            <div class="ans-line-wrong">❌ Bạn đã chọn: <b>${['A','B','C','D'][item.chosen]}. ${chosenText}</b></div>
            <div class="ans-line-correct">✅ Đáp án đúng: <b>${['A','B','C','D'][q.correct]}. ${correctText}</b></div>
          </div>
          <div class="wrong-card-exp">💡 <b>Ghi nhớ:</b> ${q.explanation.replace(/\*\*(.*?)\*\*/g, '$1')}</div>
        </div>
      `;
    }).join('');
  }

  retryWrongStruct() {
    const s = this.structState;
    const unresolved = s.wrongList.filter(w => !w.resolved);
    const targetList = (unresolved.length > 0) ? unresolved : s.wrongList;
    if (targetList.length === 0) return;

    s.questions = targetList.map(item => this.shuffleQuestionOptions({ ...item.question, isRetry: true }));
    this.shuffleArray(s.questions);
    s.currentIndex = 0;
    s.score = 0;
    s.isAnswered = false;
    this.renderStructQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  finishStructExam() {
    clearInterval(this.structState.timerInterval);
    const s = this.structState;
    const total = s.questions.length;
    const pct = Math.round((s.score / total) * 100);

    let elapsed = "00:00";
    if (s.startTime) {
      const elapsedSec = Math.floor((Date.now() - s.startTime) / 1000);
      const m = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
      const sec = String(elapsedSec % 60).padStart(2, '0');
      elapsed = `${m}:${sec}`;
    }

    let evalText = "Cần ôn tập thêm!";
    if (pct >= 90) evalText = "Xuất sắc! Nắm cực vững kiến thức!";
    else if (pct >= 75) evalText = "Rất tốt! Tiếp tục phát huy!";
    else if (pct >= 50) evalText = "Đạt yêu cầu! Hãy ôn lại các câu sai.";

    this.modalScore.textContent = s.score;
    this.modalTotal.textContent = total;
    this.modalPercent.textContent = `${pct}%`;
    this.modalTime.textContent = elapsed;
    this.modalEvaluation.textContent = evalText;

    // Check if next set is available
    if (this.modalBtnNextSet) {
      const totalSets = (s.quizSize === 'all') ? 1 : Math.ceil(s.allPool.length / s.quizSize);
      if (typeof s.setIndex === 'number' && (s.setIndex + 1) < totalSets) {
        this.modalBtnNextSet.style.display = 'inline-flex';
        const nextNum = s.setIndex + 2;
        this.modalBtnNextSet.textContent = (s.quizSize === 10) ? `Làm Bài ${nextNum} (10 câu) ➜` : `Làm Đề ${nextNum} (50 câu) ➜`;
      } else {
        this.modalBtnNextSet.style.display = 'none';
      }
    }

    // Hiển thị danh sách câu sai trong modal kết quả
    if (this.modalWrongContainer && this.modalWrongList) {
      const wrongItems = s.wrongList;
      if (wrongItems && wrongItems.length > 0) {
        this.modalWrongContainer.style.display = 'block';
        if (this.modalBtnRetryWrong) this.modalBtnRetryWrong.style.display = 'inline-flex';
        this.modalWrongList.innerHTML = wrongItems.map((item, idx) => `
          <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:10px 14px; font-size:0.88rem;">
            <div style="font-weight:700; color:#0f172a; margin-bottom:4px;">${item.question.question}</div>
            <div style="color:#dc2626; font-size:0.85rem;">❌ Bạn đã chọn: <b>${['A','B','C','D'][item.chosen]}. ${item.question.options[item.chosen]}</b></div>
            <div style="color:#16a34a; font-weight:700; font-size:0.85rem;">✅ Đáp án đúng: <b>${['A','B','C','D'][item.question.correct]}. ${item.question.options[item.question.correct]}</b></div>
          </div>
        `).join('');
      } else {
        this.modalWrongContainer.style.display = 'none';
        if (this.modalBtnRetryWrong) this.modalBtnRetryWrong.style.display = 'none';
      }
    }

    this.modalOverlay.classList.add('open');
  }

  // ========================================================
  // CƠ CHẾ 2: TRẮC NGHIỆM CHỌN NGHĨA TỪ VỰNG (VOCABULARY MEANING)
  // ========================================================
  startVocabQuiz() {
    const vState = this.vocabState;
    const cat = vState.category;

    let pool = this.data.vocabList;
    if (cat !== 'ALL') {
      pool = pool.filter(v => v.cat === cat);
      if (pool.length < 4) {
        pool = this.data.vocabList; // fallback if category has too few items
      }
    }

    // Generate questions for all items in the pool
    const allQuestions = pool.map(item => {
      const otherMeanings = this.data.vocabList
        .filter(x => x.meaning !== item.meaning && x.word !== item.word);
      this.shuffleArray(otherMeanings);
      const distractors = otherMeanings.slice(0, 3);

      let questionText = "";
      let options = [];

      if (vState.direction === 'en_vi') {
        questionText = `Nghĩa tiếng Việt của từ / cụm từ '<span class="highlight-word">${item.word}</span>' là gì?`;
        options = [item.meaning, distractors[0].meaning, distractors[1].meaning, distractors[2].meaning];
      } else {
        questionText = `Từ / cụm từ tiếng Anh nào có nghĩa là: '<span class="highlight-word">${item.meaning}</span>'?`;
        options = [item.word, distractors[0].word, distractors[1].word, distractors[2].word];
      }

      const optObjects = options.map((opt, idx) => ({ text: opt, isCorrect: idx === 0 }));
      this.shuffleArray(optObjects);
      const correctIdx = optObjects.findIndex(o => o.isCorrect);

      return {
        word: item.word,
        meaning: item.meaning,
        cat: item.cat,
        form: item.form,
        note: item.note,
        question: questionText,
        options: optObjects.map(o => o.text),
        correct: correctIdx,
        explanation: `<b>${item.word}</b>: ${item.meaning}.<br>Cấu trúc: <b>${item.form}</b>. ${item.note}`
      };
    });

    this.shuffleArray(allQuestions);
    vState.allPool = allQuestions;
    this.populateVocabSetDropdown();
    this.loadVocabCurrentSet();
  }

  populateVocabSetDropdown() {
    const v = this.vocabState;
    const total = v.allPool.length;
    const size = v.quizSize;
    const select = this.vocabSetSelect;
    if (!select) return;

    select.innerHTML = '';
    if (size === 'all') {
      select.innerHTML = `
        <option value="0">Tất cả từ (${total} từ)</option>
        <option value="random">🎲 Xáo trộn tất cả ngẫu nhiên</option>
      `;
    } else {
      const numSets = Math.ceil(total / size);
      let html = '';
      for (let i = 0; i < numSets; i++) {
        const start = i * size + 1;
        const end = Math.min((i + 1) * size, total);
        const label = (size === 10) ? `Bài ${i + 1} (${start} - ${end})` : `Đề Tổng Hợp ${i + 1} (${start} - ${end})`;
        html += `<option value="${i}">${label}</option>`;
      }
      html += `<option value="random">🎲 ${size} từ ngẫu nhiên</option>`;
      select.innerHTML = html;
    }

    if (v.setIndex !== 'random' && typeof v.setIndex === 'number') {
      const maxIdx = (size === 'all') ? 0 : Math.ceil(total / size) - 1;
      if (v.setIndex > maxIdx) v.setIndex = 0;
      select.value = v.setIndex;
    } else {
      select.value = v.setIndex || 0;
    }
  }

  loadVocabCurrentSet() {
    const v = this.vocabState;
    const pool = v.allPool;
    const size = v.quizSize;
    let questions = [];

    if (size === 'all') {
      questions = [...pool];
      if (v.setIndex === 'random') this.shuffleArray(questions);
    } else if (v.setIndex === 'random') {
      let copy = [...pool];
      this.shuffleArray(copy);
      questions = copy.slice(0, size);
    } else {
      const start = v.setIndex * size;
      questions = pool.slice(start, start + size);
      this.shuffleArray(questions);
    }

    v.questions = questions.map(q => this.shuffleQuestionOptions(q));
    v.currentIndex = 0;
    v.score = 0;
    v.wrongList = [];
    v.isAnswered = false;

    if (this.vocabConfigCard) this.vocabConfigCard.classList.remove('is-open');
    this.updateMobileConfigSummary('vocab');

    this.updateVocabWrongUI();
    this.renderVocabQuestion();
  }

  renderVocabQuestion() {
    const v = this.vocabState;
    if (v.currentIndex >= v.questions.length) {
      this.finishVocabExam();
      return;
    }

    const q = v.questions[v.currentIndex];
    v.isAnswered = false;

    // Reset answered cue
    if (this.vocabQuizCard) this.vocabQuizCard.classList.remove('answered');
    if (this.vocabHintText) {
      this.vocabHintText.innerHTML = 'Mẹo: Nhấn phím <span class="kbd">1</span>, <span class="kbd">2</span>, <span class="kbd">3</span>, <span class="kbd">4</span> (hoặc <span class="kbd">A</span>, <span class="kbd">B</span>, <span class="kbd">C</span>, <span class="kbd">D</span>) để chọn nhanh • <span class="kbd">Enter</span> qua câu';
    }

    // Badges & Progress
    this.vocabBadgeCount.innerHTML = `Từ số <b>${v.currentIndex + 1}</b> / ${v.questions.length}`;
    this.vocabBadgeCorrect.innerHTML = `Đúng: <b>${v.score}</b>`;
    const pct = ((v.currentIndex) / v.questions.length) * 100;
    this.vocabProgress.style.width = `${pct}%`;

    const catObj = this.data.categories.find(c => c.id === q.cat);
    let catName = catObj ? catObj.name : "Từ vựng";
    let setTitle = "";
    if (v.quizSize === 10) {
      setTitle = (v.setIndex === 'random') ? '10 từ ngẫu nhiên' : `Bài ${v.setIndex + 1}`;
    } else if (v.quizSize === 50) {
      setTitle = (v.setIndex === 'random') ? '50 từ ngẫu nhiên' : `Đề Tổng Hợp ${v.setIndex + 1}`;
    }

    let tagHtml = "";
    if (setTitle) {
      tagHtml += `<span class="badge badge-primary" style="margin-right:8px; font-weight:700;">${setTitle}</span>`;
    }
    tagHtml += `<span class="question-tag" style="margin:0;">${catName}</span>`;

    if (q.isRetry) {
      tagHtml += ` <span style="background:#fee2e2; color:#b91c1c; padding:2px 6px; border-radius:4px; font-size:0.75rem; margin-left:6px; font-weight:700;">🔄 Từ làm lại từ dưới</span>`;
    }
    this.vocabCardTag.innerHTML = tagHtml;
    this.vocabQuestionText.innerHTML = q.question;

    this.vocabOptionsContainer.innerHTML = '';
    const keys = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-key">${keys[idx]}</span>
        <span class="option-text">${opt}</span>
      `;
      btn.addEventListener('click', () => this.handleVocabAnswer(idx));
      this.vocabOptionsContainer.appendChild(btn);
    });

    this.vocabExplanation.className = 'explanation-box';
    this.vocabBtnNext.style.display = 'none';
  }

  handleVocabAnswer(chosenIdx) {
    const v = this.vocabState;
    if (v.isAnswered) return;
    v.isAnswered = true;

    // Visual cue for clicking anywhere to advance
    if (this.vocabQuizCard) this.vocabQuizCard.classList.add('answered');
    if (this.vocabHintText) {
      this.vocabHintText.innerHTML = '👉 <b>Đã trả lời xong!</b> Nhấp vào <b>bất kỳ đâu trên màn hình</b> (hoặc bấm phím bất kỳ / Space / Enter) để sang từ tiếp theo ➜';
    }

    const q = v.questions[v.currentIndex];
    const isCorrect = (chosenIdx === q.correct);
    const buttons = this.vocabOptionsContainer.querySelectorAll('.option-btn');

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === chosenIdx) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      v.score++;
      this.playSound('correct');
      this.vocabExplanation.className = 'explanation-box show correct';

      const existingWrong = v.wrongList.find(w => w.question.question === q.question);
      if (existingWrong) {
        existingWrong.resolved = true;
        this.vocabExplanation.querySelector('.explanation-title').innerHTML = '✅ Chính xác! (Đã sửa đúng từ vựng sai)';
        this.updateVocabWrongUI();
      } else {
        this.vocabExplanation.querySelector('.explanation-title').innerHTML = '✅ Chính xác!';
      }
    } else {
      // ĐẨY TỪ SAI XUỐNG CUỐI DANH SÁCH (Học lặp lại)
      v.questions.push({ ...q, isRetry: true });

      const existingWrong = v.wrongList.find(w => w.question.question === q.question);
      if (existingWrong) {
        existingWrong.chosen = chosenIdx;
        existingWrong.resolved = false;
      } else {
        v.wrongList.push({ question: q, chosen: chosenIdx, resolved: false });
      }

      this.playSound('wrong');
      this.vocabExplanation.className = 'explanation-box show wrong';
      this.vocabExplanation.querySelector('.explanation-title').innerHTML = `❌ Chưa chính xác! Đáp án đúng: <b>${['A','B','C','D'][q.correct]}. ${q.options[q.correct]}</b>`;
      this.updateVocabWrongUI();
    }

    let extraNote = "";
    if (!isCorrect) {
      extraNote = `<div style="margin-top:12px; padding:8px 12px; background:#fee2e2; border-left:4px solid #ef4444; border-radius:4px; font-size:0.88rem; color:#991b1b; font-weight:600;">
        ⬇️ Từ này đã được tự động đẩy xuống cuối hàng đợi để bạn làm lại cho nhớ, đồng thời được ghi lại ở danh sách bên dưới!
      </div>`;
    }

    this.vocabExpContent.innerHTML = q.explanation + extraNote;
    this.vocabBadgeCorrect.innerHTML = `Đúng: <b>${v.score}</b>`;
    this.vocabBtnNext.style.display = 'inline-flex';

    if (this.autoAdvance) {
      setTimeout(() => {
        if (v.isAnswered) this.nextVocabQuestion();
      }, 1400);
    }
  }

  nextVocabQuestion() {
    this.vocabState.currentIndex++;
    this.renderVocabQuestion();
  }

  finishVocabExam() {
    const v = this.vocabState;
    const total = v.questions.length;
    const pct = Math.round((v.score / total) * 100);

    let evalText = "Cần ôn tập thêm!";
    if (pct >= 90) evalText = "Xuất sắc! Nắm cực vững từ vựng!";
    else if (pct >= 75) evalText = "Rất tốt! Tiếp tục phát huy!";
    else if (pct >= 50) evalText = "Đạt yêu cầu! Hãy ôn lại các từ sai.";

    this.modalScore.textContent = v.score;
    this.modalTotal.textContent = total;
    this.modalPercent.textContent = `${pct}%`;
    this.modalTime.textContent = "--:--";
    this.modalEvaluation.textContent = evalText;

    if (this.modalBtnNextSet) {
      const totalSets = (v.quizSize === 'all') ? 1 : Math.ceil(v.allPool.length / v.quizSize);
      if (typeof v.setIndex === 'number' && (v.setIndex + 1) < totalSets) {
        this.modalBtnNextSet.style.display = 'inline-flex';
        const nextNum = v.setIndex + 2;
        this.modalBtnNextSet.textContent = (v.quizSize === 10) ? `Làm Bài ${nextNum} (10 từ) ➜` : `Làm Đề ${nextNum} (50 từ) ➜`;
      } else {
        this.modalBtnNextSet.style.display = 'none';
      }
    }

    if (this.modalWrongContainer && this.modalWrongList) {
      const wrongItems = v.wrongList;
      if (wrongItems && wrongItems.length > 0) {
        this.modalWrongContainer.style.display = 'block';
        if (this.modalBtnRetryWrong) this.modalBtnRetryWrong.style.display = 'inline-flex';
        this.modalWrongList.innerHTML = wrongItems.map((item, idx) => `
          <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:10px 14px; font-size:0.88rem;">
            <div style="font-weight:700; color:#0f172a; margin-bottom:4px;">${item.question.question}</div>
            <div style="color:#dc2626; font-size:0.85rem;">❌ Bạn đã chọn: <b>${['A','B','C','D'][item.chosen]}. ${item.question.options[item.chosen]}</b></div>
            <div style="color:#16a34a; font-weight:700; font-size:0.85rem;">✅ Đáp án đúng: <b>${['A','B','C','D'][item.question.correct]}. ${item.question.options[item.question.correct]}</b></div>
          </div>
        `).join('');
      } else {
        this.modalWrongContainer.style.display = 'none';
        if (this.modalBtnRetryWrong) this.modalBtnRetryWrong.style.display = 'none';
      }
    }

    this.modalOverlay.classList.add('open');
  }

  loadNextSet() {
    this.modalOverlay.classList.remove('open');
    if (this.currentTab === 'struct') {
      const s = this.structState;
      const totalSets = (s.quizSize === 'all') ? 1 : Math.ceil(s.allPool.length / s.quizSize);
      if (typeof s.setIndex === 'number' && (s.setIndex + 1) < totalSets) {
        s.setIndex++;
        if (this.structSetSelect) this.structSetSelect.value = s.setIndex;
        this.loadStructCurrentSet();
      }
    } else if (this.currentTab === 'vocab') {
      const v = this.vocabState;
      const totalSets = (v.quizSize === 'all') ? 1 : Math.ceil(v.allPool.length / v.quizSize);
      if (typeof v.setIndex === 'number' && (v.setIndex + 1) < totalSets) {
        v.setIndex++;
        if (this.vocabSetSelect) this.vocabSetSelect.value = v.setIndex;
        this.loadVocabCurrentSet();
      }
    }
  }

  updateVocabWrongUI() {
    if (!this.vocabWrongContainer || !this.vocabWrongList) return;
    const v = this.vocabState;
    if (!v.wrongList || v.wrongList.length === 0) {
      this.vocabWrongContainer.style.display = 'none';
      return;
    }

    this.vocabWrongContainer.style.display = 'block';
    const unresolvedCount = v.wrongList.filter(w => !w.resolved).length;
    this.vocabWrongCount.textContent = unresolvedCount;

    this.vocabWrongList.innerHTML = v.wrongList.map((item, idx) => {
      const q = item.question;
      const chosenText = q.options[item.chosen] || '';
      const correctText = q.options[q.correct] || '';
      const isResolved = item.resolved;

      return `
        <div class="wrong-card ${isResolved ? 'resolved' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:0.75rem; font-weight:700; color:#ef4444; text-transform:uppercase;">Từ vựng sai #${idx + 1}</span>
            ${isResolved ? '<span style="font-size:0.78rem; font-weight:700; color:#16a34a; background:#dcfce7; padding:2px 8px; border-radius:999px;">✓ Đã làm lại đúng!</span>' : '<span style="font-size:0.78rem; font-weight:600; color:#b91c1c;">(Đã xếp ở cuối)</span>'}
          </div>
          <div class="wrong-card-q">${q.question}</div>
          <div class="wrong-card-ans">
            <div class="ans-line-wrong">❌ Bạn đã chọn: <b>${['A','B','C','D'][item.chosen]}. ${chosenText}</b></div>
            <div class="ans-line-correct">✅ Đáp án đúng: <b>${['A','B','C','D'][q.correct]}. ${correctText}</b></div>
          </div>
          <div class="wrong-card-exp">💡 <b>Ghi nhớ:</b> ${q.explanation}</div>
        </div>
      `;
    }).join('');
  }

  retryWrongVocab() {
    const v = this.vocabState;
    const unresolved = v.wrongList.filter(w => !w.resolved);
    const targetList = (unresolved.length > 0) ? unresolved : v.wrongList;
    if (targetList.length === 0) return;

    v.questions = targetList.map(item => this.shuffleQuestionOptions({ ...item.question, isRetry: true }));
    this.shuffleArray(v.questions);
    v.currentIndex = 0;
    v.score = 0;
    v.isAnswered = false;
    this.renderVocabQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ========================================================
  // SỔ TAY TRA CỨU LÝ THUYẾT & TỪ VỰNG
  // ========================================================
  renderTheoryTable(filterText = '') {
    const tbody = this.theoryTableBody;
    if (!tbody) return;
    tbody.innerHTML = '';

    const query = filterText.trim().toLowerCase();
    const list = this.data.vocabList.filter(v => {
      if (!query) return true;
      return v.word.toLowerCase().includes(query) ||
             v.meaning.toLowerCase().includes(query) ||
             v.form.toLowerCase().includes(query) ||
             (v.note && v.note.toLowerCase().includes(query));
    });

    list.forEach((item, i) => {
      const tr = document.createElement('tr');
      let formBadgeClass = 'ving';
      if (item.form.includes('To V') && item.form.includes('V-ing')) formBadgeClass = 'both';
      else if (item.form.includes('To V')) formBadgeClass = 'tov';
      else if (item.form.includes('bare') || item.form.includes('V (bare)')) formBadgeClass = 'bare';

      const catObj = this.data.categories.find(c => c.id === item.cat);
      const catCode = catObj ? catObj.code : '';

      tr.innerHTML = `
        <td><span class="word-pill">${item.word}</span></td>
        <td>${item.meaning}</td>
        <td><span class="form-pill ${formBadgeClass}">${item.form}</span></td>
        <td><small style="color:#64748b">${item.note || ''}</small></td>
        <td><span class="badge" style="font-size:0.75rem">Phần ${catCode}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  filterTheoryTable(text) {
    this.renderTheoryTable(text);
  }

  // ========================================================
  // NGÂN HÀNG CÂU HỎI VIEWER
  // ========================================================
  renderQuestionBank(filterText = '') {
    const container = this.bankContainer;
    if (!container) return;
    container.innerHTML = '';

    const query = filterText.trim().toLowerCase();
    const qList = this.data.structureQuestions.filter(q => {
      if (!query) return true;
      return q.question.toLowerCase().includes(query) ||
             q.explanation.toLowerCase().includes(query);
    });

    qList.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.style.marginBottom = '16px';
      card.style.padding = '20px';

      const catObj = this.data.categories.find(c => c.id === q.cat);
      const catName = catObj ? catObj.name : '';

      const optionsHtml = q.options.map((opt, i) => {
        const isCorr = (i === q.correct);
        return `<div style="padding: 6px 12px; margin: 4px 0; border-radius: 6px; font-size: 0.92rem; background: ${isCorr ? 'var(--success-bg)' : '#f8fafc'}; color: ${isCorr ? '#065f46' : '#1e293b'}; font-weight: ${isCorr ? '700' : '500'}; border: 1px solid ${isCorr ? 'var(--success)' : 'var(--border)'}">
          ${['A','B','C','D'][i]}. ${opt} ${isCorr ? '✓ (Đáp án đúng)' : ''}
        </div>`;
      }).join('');

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
          <span class="question-tag" style="margin:0">${catName}</span>
          <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted)">Câu ${idx + 1}</span>
        </div>
        <div style="font-size:1.05rem; font-weight:700; margin-bottom:12px; color:#0f172a">${q.question}</div>
        <div style="margin-bottom:12px">${optionsHtml}</div>
        <div style="font-size:0.88rem; background:#f1f5f9; padding:10px 14px; border-radius:8px; color:#334155;">
          💡 <b>Giải thích:</b> ${q.explanation}
        </div>
      `;
      container.appendChild(card);
    });
  }

  filterQuestionBank(text) {
    this.renderQuestionBank(text);
  }

  // --- UTILITY ---
  shuffleQuestionOptions(question) {
    if (!question) return question;
    const q = { ...question };
    if (!q.options || q.options.length <= 1) return q;

    const correctOptionText = q.options[q.correct];
    const mapped = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.correct }));
    this.shuffleArray(mapped);

    q.options = mapped.map(item => item.text);
    q.correct = mapped.findIndex(item => item.isCorrect);
    return q;
  }

  copyWrongNotes(tab) {
    const isStruct = tab === 'struct';
    const list = isStruct ? this.structState.wrongList : this.vocabState.wrongList;
    const btn = isStruct ? this.structBtnCopyWrong : this.vocabBtnCopyWrong;

    if (!list || list.length === 0) {
      alert('Hiện chưa có câu hỏi nào làm sai trong phiên này!');
      return;
    }

    const title = isStruct ? 'DANH SÁCH CÂU HỎI CẤU TRÚC LÀM SAI' : 'DANH SÁCH TỪ VỰNG LÀM SAI';
    let text = `=== ${title} ===\n`;
    text += `Thời gian xuất: ${new Date().toLocaleString('vi-VN')}\n`;
    text += `Tổng số câu sai: ${list.length} câu\n\n`;

    list.forEach((item, idx) => {
      const q = item.question;
      const cleanQ = q.question.replace(/<[^>]*>/g, '');
      const chosenText = q.options[item.chosen] || '';
      const correctText = q.options[q.correct] || '';
      const cleanExp = q.explanation.replace(/<[^>]*>/g, '').replace(/\*\*/g, '');

      text += `${idx + 1}. ${cleanQ}\n`;
      text += `   ❌ Bạn đã chọn: ${['A','B','C','D'][item.chosen]}. ${chosenText}\n`;
      text += `   ✅ Đáp án đúng: ${['A','B','C','D'][q.correct]}. ${correctText}\n`;
      text += `   💡 Ghi nhớ: ${cleanExp}\n\n`;
    });

    const markSuccess = () => {
      if (btn) {
        const oldHtml = btn.innerHTML;
        btn.innerHTML = '<span>✓</span> Đã sao chép vào bộ nhớ tạm!';
        btn.style.background = '#10b981';
        btn.style.color = '#ffffff';
        setTimeout(() => {
          btn.innerHTML = oldHtml;
          btn.style.background = '';
          btn.style.color = '';
        }, 2500);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(markSuccess).catch(err => {
        console.error('Lỗi clipboard API:', err);
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }

    function fallbackCopy(str) {
      const ta = document.createElement('textarea');
      ta.value = str;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
        markSuccess();
      } catch (err) {
        alert('Không thể sao chép tự động. Vui lòng thử lại!');
      }
      document.body.removeChild(ta);
    }
  }

  updateMobileConfigSummary(tab) {
    if (tab === 'struct') {
      const s = this.structState;
      const sizeText = (s.quizSize === 'all') ? 'Tất cả' : `${s.quizSize} câu`;
      let setText = "Bài 1";
      if (s.setIndex === 'random') setText = "🎲 Ngẫu nhiên";
      else if (typeof s.setIndex === 'number') {
        setText = (s.quizSize === 10) ? `Bài ${s.setIndex + 1}` : `Đề ${s.setIndex + 1}`;
      }
      const catObj = this.data.categories.find(c => c.id === s.category);
      let catText = 'Tất cả CĐ';
      if (catObj && s.category !== 'ALL') {
        catText = catObj.code ? `Phần ${catObj.code}` : catObj.name;
      }

      const bSize = document.getElementById('struct-cfg-size-badge');
      const bSet = document.getElementById('struct-cfg-set-badge');
      const bCat = document.getElementById('struct-cfg-cat-badge');
      if (bSize) bSize.textContent = sizeText;
      if (bSet) bSet.textContent = setText;
      if (bCat) bCat.textContent = catText;
    } else if (tab === 'vocab') {
      const v = this.vocabState;
      const sizeText = (v.quizSize === 'all') ? 'Tất cả' : `${v.quizSize} từ`;
      let setText = "Bài 1";
      if (v.setIndex === 'random') setText = "🎲 Ngẫu nhiên";
      else if (typeof v.setIndex === 'number') {
        setText = (v.quizSize === 10) ? `Bài ${v.setIndex + 1}` : `Đề ${v.setIndex + 1}`;
      }
      const dirText = (v.direction === 'en_vi') ? 'Anh ➔ Việt' : 'Việt ➔ Anh';

      const bSize = document.getElementById('vocab-cfg-size-badge');
      const bSet = document.getElementById('vocab-cfg-set-badge');
      const bCat = document.getElementById('vocab-cfg-cat-badge');
      if (bSize) bSize.textContent = sizeText;
      if (bSet) bSet.textContent = setText;
      if (bCat) bCat.textContent = dirText;
    }
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

// Khởi chạy ứng dụng khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  window.app = new EnglishQuizApp();
});

