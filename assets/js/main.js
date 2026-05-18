/* ===== SEARCH ===== */
const searchInput = document.getElementById('searchInput');
const searchBtn   = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');

const sections = [
  { id: 'intro',  title: '課程介紹',          keywords: '被動元件 電子學 入門' },
  { id: 'ch1',    title: '第一章：電阻',        keywords: '電阻 resistor 色碼 ohm 歐姆 V=IR' },
  { id: 'ch1-1',  title: '1-1 電阻基本原理',   keywords: '歐姆定律 V=IR 電壓 電流' },
  { id: 'ch1-2',  title: '1-2 色碼辨識',       keywords: '色碼 棕 紅 橙 金 色環' },
  { id: 'ch1-3',  title: '1-3 電阻應用電路',   keywords: '分壓 串聯 並聯 保護電路' },
  { id: 'ch2',    title: '第二章：電容',        keywords: '電容 capacitor 充電 放電 farad 法拉' },
  { id: 'ch2-1',  title: '2-1 電容基本原理',   keywords: 'Q=CV 電荷 儲電' },
  { id: 'ch2-2',  title: '2-2 電容種類與規格',  keywords: '陶瓷 電解 薄膜 極性' },
  { id: 'ch2-3',  title: '2-3 充放電特性',     keywords: 'RC 時間常數 tau τ 63.2%' },
  { id: 'ch3',    title: '第三章：電感',        keywords: '電感 inductor 線圈 henry 亨利 磁場' },
  { id: 'ch3-1',  title: '3-1 電感基本原理',   keywords: 'V=L dI/dt 磁通量' },
  { id: 'ch3-2',  title: '3-2 電感種類與應用', keywords: '空心 鐵芯 濾波 變壓器' },
  { id: 'quiz',   title: '章節測驗',            keywords: '測驗 考試 練習題' },
  { id: 'resources', title: '學習資源',         keywords: 'PDF 講義 資料下載' },
];

function doSearch(q) {
  q = q.trim().toLowerCase();
  if (!q) { searchResults.classList.add('hidden'); return; }
  const hits = sections.filter(s =>
    s.title.toLowerCase().includes(q) || s.keywords.toLowerCase().includes(q)
  );
  if (!hits.length) {
    searchResults.innerHTML = '<div class="sr-item">找不到相關內容</div>';
  } else {
    searchResults.innerHTML = hits.map(s =>
      `<a class="sr-item" href="#${s.id}" onclick="searchResults.classList.add('hidden');searchInput.value=''">
        <strong>${s.title}</strong>
      </a>`
    ).join('');
  }
  searchResults.classList.remove('hidden');
}

searchInput.addEventListener('input', () => doSearch(searchInput.value));
searchBtn.addEventListener('click',  () => doSearch(searchInput.value));
searchInput.addEventListener('keydown', e => { if (e.key === 'Escape') { searchResults.classList.add('hidden'); searchInput.value = ''; } });
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap') && !e.target.closest('.search-results')) searchResults.classList.add('hidden'); });

/* ===== SIDEBAR TOGGLE (mobile) ===== */
const menuToggle = document.getElementById('menuToggle');
const sidebar    = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
document.addEventListener('click', e => {
  if (!e.target.closest('.sidebar') && !e.target.closest('.menu-toggle'))
    sidebar.classList.remove('open');
});

/* ===== ACTIVE TOC ON SCROLL ===== */
const tocLinks = document.querySelectorAll('.toc-link');
const anchors  = Array.from(document.querySelectorAll('[id]')).filter(el =>
  ['intro','ch1','ch1-1','ch1-2','ch1-3','ch2','ch2-1','ch2-2','ch2-3','ch3','ch3-1','ch3-2','quiz','resources']
  .includes(el.id)
);

function updateTOC() {
  let current = anchors[0]?.id;
  for (const el of anchors) {
    if (el.getBoundingClientRect().top <= 80) current = el.id;
  }
  tocLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateTOC, { passive: true });

/* ===== PROGRESS BAR ===== */
const progressFill = document.getElementById('progressFill');
const progressPct  = document.getElementById('progressPct');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const pct = Math.round((scrollTop / docH) * 100);
  progressFill.style.width = pct + '%';
  progressPct.textContent  = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ===== BACK TO TOP ===== */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* ===== PDF MODAL ===== */
const pdfModal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');

window.openPDF = function(src) {
  pdfFrame.src = src;
  pdfModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};
window.closePDF = function() {
  pdfFrame.src = '';
  pdfModal.classList.add('hidden');
  document.body.style.overflow = '';
};
pdfModal.addEventListener('click', e => { if (e.target === pdfModal) closePDF(); });

/* ===== QUIZ ===== */
const quizData = [
  {
    q: '1. 歐姆定律的公式是？',
    opts: ['V = I × R', 'Q = C × V', 'V = L × dI/dt', 'P = I²R'],
    ans: 0,
  },
  {
    q: '2. 電容的單位是？',
    opts: ['亨利 (H)', '歐姆 (Ω)', '法拉 (F)', '伏特 (V)'],
    ans: 2,
  },
  {
    q: '3. RC 電路中，時間常數 τ = ?',
    opts: ['R + C', 'R × C', 'R / C', 'C / R'],
    ans: 1,
  },
  {
    q: '4. 電感阻止的是？',
    opts: ['電壓變化', '電流變化', '頻率', '電阻'],
    ans: 1,
  },
  {
    q: '5. 色碼「棕黑紅」代表的電阻值是？',
    opts: ['100 Ω', '1 kΩ', '10 kΩ', '100 kΩ'],
    ans: 1,
  },
];

const quizContainer = document.getElementById('quizContainer');
const quizResult    = document.getElementById('quizResult');

function buildQuiz() {
  quizContainer.innerHTML = `
    <div class="content-block">
      ${quizData.map((qd, qi) => `
        <div class="quiz-q" id="qq${qi}">
          <p>${qd.q}</p>
          <div class="quiz-options">
            ${qd.opts.map((opt, oi) => `
              <label class="quiz-opt" id="qo${qi}-${oi}">
                <input type="radio" name="q${qi}" value="${oi}" /> ${opt}
              </label>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <button class="quiz-submit" onclick="submitQuiz()">提交答案</button>
    </div>`;
}

window.submitQuiz = function() {
  let score = 0;
  quizData.forEach((qd, qi) => {
    const sel = document.querySelector(`input[name="q${qi}"]:checked`);
    const val = sel ? parseInt(sel.value) : -1;
    qd.opts.forEach((_, oi) => {
      const el = document.getElementById(`qo${qi}-${oi}`);
      if (oi === qd.ans) el.classList.add('correct');
      else if (oi === val && val !== qd.ans) el.classList.add('wrong');
      const inp = el.querySelector('input');
      if (inp) inp.disabled = true;
    });
    if (val === qd.ans) score++;
  });
  const pct = Math.round(score / quizData.length * 100);
  quizResult.textContent = `你答對了 ${score}/${quizData.length} 題（${pct}%）${pct >= 80 ? ' 🎉 優秀！' : pct >= 60 ? ' 👍 繼續加油！' : ' 📖 建議再複習一次'}`;
  quizResult.className = 'quiz-result ' + (pct >= 60 ? 'pass' : 'fail');
  quizResult.classList.remove('hidden');
  quizResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

buildQuiz();
