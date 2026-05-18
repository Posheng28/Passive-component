'use strict';

/* ===== COMPANY DATA ===== */
const COMPANIES = [
  { name:'國巨', ticker:'2327', group:'platform', groupLabel:'綜合平台',
    products:'MLCC、鉭電容、晶片電阻、磁性元件、感測器',
    catalyst:'2026/4 合併營收創單月新高；鉭電容全球市占逾46%',
    highlight:'晶片電阻全球第1；鉭電容全球第1（>46%）',
    ai:5, car:4, price:5, scarce:5, platform:5, color:'#5b6ef5' },
  { name:'華新科', ticker:'2492', group:'platform', groupLabel:'綜合平台',
    products:'陶瓷電容、晶片電阻、電感、RF濾波器、天線、安規電容',
    catalyst:'AI營收約10%，供貨PSU廠與EMS廠',
    highlight:'廣產品線，AI升規全面吃到',
    ai:4, car:4, price:4, scarce:4, platform:4, color:'#4355e8' },
  { name:'禾伸堂', ticker:'3026', group:'platform', groupLabel:'綜合平台',
    products:'高壓高容 NP0/X7S/X8M MLCC、代理線、主動元件',
    catalyst:'啟動第二個4年30億擴產；800V HVDC核心料號',
    highlight:'AI Server Power 800V HVDC 少數供應商之一',
    ai:5, car:3, price:4, scarce:5, platform:3, color:'#e74c3c' },
  { name:'信昌電', ticker:'6173', group:'platform', groupLabel:'綜合平台',
    products:'特殊MLCC、電阻、電感、壓敏/熱敏電阻、介電瓷粉',
    catalyst:'AI交期拉長至16週+，訂單能見度超6個月，新瓷粉廠+50%產能',
    highlight:'MLCC + 上游粉末一體化，AI大尺寸中高壓受惠',
    ai:5, car:4, price:4, scarce:5, platform:4, color:'#c0392b' },
  { name:'光頡', ticker:'5209', group:'res', groupLabel:'電阻',
    products:'薄膜精密電阻、厚膜電阻、電流感測電阻、MLCC、RF/功率電感',
    catalyst:'AI營收占比升至12%；已漲價30-35%；高頻電感送樣SpaceX',
    highlight:'薄膜+電流感測+電感，不只吃一個品類',
    ai:4, car:5, price:4, scarce:4, platform:3, color:'#e67e22' },
  { name:'天二科技', ticker:'3592', group:'res', groupLabel:'電阻',
    products:'晶片電阻、排阻、Metal Strip電阻',
    catalyst:'電阻產業漲價跟進者；IATF 16949車規認證',
    highlight:'車規認證強，電阻漲價循環受益',
    ai:3, car:3, price:3, scarce:2, platform:1, color:'#d35400' },
  { name:'立隆電', ticker:'2472', group:'cap', groupLabel:'電容',
    products:'OP-CAP、Hybrid、SMD鋁電解電容、EDLC超級電容',
    catalyst:'AI GPU板擴大導入Hybrid/Polymer；泰國新廠投產',
    highlight:'AI板近載供電固態/Hybrid核心受益者',
    ai:4, car:5, price:4, scarce:4, platform:3, color:'#3498db' },
  { name:'金山電', ticker:'8042', group:'cap', groupLabel:'電容',
    products:'鋁質電解電容、固態/高值化電容',
    catalyst:'雲端/AI伺服器應用需求強；中國、泰國擴產',
    highlight:'AI伺服器PSU用量與單價同步上行',
    ai:4, car:3, price:3, scarce:3, platform:2, color:'#2980b9' },
  { name:'凱美', ticker:'2486', group:'cap', groupLabel:'電容',
    products:'鋁質電解電容、固態/Hybrid鋁電、風扇',
    catalyst:'三大產品線已有AI客戶導入；記憶體模組與AI電源需求',
    highlight:'電容+風扇雙題材，AI電源與散熱同步',
    ai:3, car:2, price:3, scarce:2, platform:2, color:'#1a6ba0' },
  { name:'鈺邦', ticker:'6449', group:'cap', groupLabel:'電容',
    products:'導電高分子片式固態電容、Hybrid、SMLC',
    catalyst:'啟動擴產，V-Chip/CAP/SMLC/Hybrid全面放量；朝Rubin平台送樣',
    highlight:'近載供電升級，固態/Hybrid高成長',
    ai:5, car:2, price:4, scarce:4, platform:2, color:'#0288d1' },
  { name:'臺慶科', ticker:'3357', group:'ind', groupLabel:'電感/磁材',
    products:'磁性材料、電感元件、TLVR電感',
    catalyst:'官網已直接展示TLVR料號；IEK確認準備量產',
    highlight:'TLVR是AI近載供電最具辨識度的磁性件題材',
    ai:5, car:4, price:4, scarce:5, platform:2, color:'#9b59b6' },
  { name:'鈞寶', ticker:'6155', group:'ind', groupLabel:'電感/磁材',
    products:'EMI/EMC鐵氧體、電感器、共模抗流圈、功率電感',
    catalyst:'對部分客戶調價；高頻電感與EMI元件接單能見度提升',
    highlight:'磁珠/高頻電感跟著AI電力品質要求升級',
    ai:4, car:4, price:4, scarce:3, platform:2, color:'#8e44ad' },
  { name:'千如', ticker:'5215', group:'ind', groupLabel:'電感/磁材',
    products:'車規電感、功率電感、高頻電感、共模濾波、TLVR、LTCC、變壓器',
    catalyst:'2026年推出大電流磁珠、高耐壓模壓電感、雙線圈TLVR新品',
    highlight:'TLVR + 車規功率電感，AI × 車用雙題材',
    ai:4, car:4, price:3, scarce:3, platform:2, color:'#7d3c98' },
  { name:'聯寶', ticker:'6240', group:'ind', groupLabel:'電感/磁材',
    products:'切換式電源變壓器、PFC電感、共模差模電感、RJ45 ICM',
    catalyst:'推出200W LAN Transformer與AI/網通用RJ45 ICM',
    highlight:'資料中心/PoE/衛星升功率，磁性件內容值上升',
    ai:4, car:2, price:3, scarce:3, platform:2, color:'#6c3483' },
  { name:'今展科', ticker:'3362', group:'ind', groupLabel:'電感/磁材',
    products:'電感、Power Inductor、MCU',
    catalyst:'通訊、工業、智能運算、車用、伺服器應用',
    highlight:'電感+MCU混合，AI工業電感受益',
    ai:3, car:3, price:2, scarce:2, platform:1, color:'#5b2c6f' },
  { name:'鈺鎧', ticker:'5228', group:'ind', groupLabel:'電感/磁材',
    products:'積層式晶片電感、磁珠、磁性/陶瓷材料',
    catalyst:'車用與高信賴度應用；AI/車用高頻電感供需轉緊',
    highlight:'車規能力強的利基電感廠',
    ai:3, car:4, price:2, scarce:2, platform:1, color:'#4a235a' },
  { name:'台嘉碩', ticker:'3264', group:'freq', groupLabel:'頻率/RF',
    products:'SAW、BAW、石英振盪晶體、振盪器、壓控/溫補振盪器、天線',
    catalyst:'產品線延伸到天線與模組；Wi-Fi/車用/LEO/GNSS帶動',
    highlight:'高頻通訊升級、SAW/BAW/天線一體化',
    ai:3, car:4, price:2, scarce:3, platform:2, color:'#00bcd4' },
  { name:'希華', ticker:'2484', group:'freq', groupLabel:'頻率/RF',
    products:'XO、TCXO、VCTCXO、高頻振盪器與頻率控制元件',
    catalyst:'官網已明列資料中心、伺服器與交換器應用',
    highlight:'低相噪時脈是AI/高速網通不可或缺配角',
    ai:3, car:4, price:2, scarce:3, platform:2, color:'#0097a7' },
  { name:'安碁', ticker:'6762', group:'freq', groupLabel:'頻率/RF',
    products:'石英晶體、石英振盪器、濾波器',
    catalyst:'汽車、電信、資料傳輸、儀器應用',
    highlight:'伺服器/資料通訊升速，精密timing需求回升',
    ai:2, car:4, price:2, scarce:2, platform:1, color:'#007b83' },
  { name:'泰藝', ticker:'3685', group:'freq', groupLabel:'頻率/RF',
    products:'石英晶體、VCXO、TCXO、OCXO、時間模組、原子鐘',
    catalyst:'航太、電信、汽車、IoT、網通；高精度timing利基',
    highlight:'原子鐘/OCXO在LEO/GNSS/基地台具利基',
    ai:3, car:4, price:2, scarce:3, platform:2, color:'#005f64' },
  { name:'加高', ticker:'3547', group:'freq', groupLabel:'頻率/RF',
    products:'Crystal resonators、crystal oscillators、MEMS振盪器',
    catalyst:'汽車與高精度同步應用；MEMS振盪器',
    highlight:'頻率元件景氣回溫，車用/網通帶動',
    ai:2, car:3, price:2, scarce:2, platform:1, color:'#00474d' },
  { name:'詠業', ticker:'3300', group:'freq', groupLabel:'頻率/RF',
    products:'無線通訊天線/模組、壓電元件、超音波傳感、保護元件',
    catalyst:'藍牙晶片天線累計出貨近3億顆；低軌衛星陣列天線開發',
    highlight:'LEO與高頻天線升級帶來高附加價值',
    ai:3, car:4, price:2, scarce:3, platform:2, color:'#006064' },
  { name:'興勤', ticker:'2428', group:'prot', groupLabel:'保護元件',
    products:'NTC/PTC/PPTC、Varistor、GDT、ESD/TVS、IGBT模組',
    catalyst:'持續推出保護整合新品；高功率系統容錯成本急升',
    highlight:'保護元件龍頭，高電流高密度系統必要配套',
    ai:3, car:5, price:3, scarce:3, platform:2, color:'#e67e22' },
  { name:'聚鼎', ticker:'6224', group:'prot', groupLabel:'保護元件',
    products:'PPTC、Fuse、eFuse、熱管理方案、電流感測電阻',
    catalyst:'eFuse列為新產品核心；最大代工客戶為Littelfuse',
    highlight:'亞洲第一間專業PPTC製造商；升級到eFuse提高單價',
    ai:3, car:4, price:3, scarce:3, platform:2, color:'#d35400' },
  { name:'富致', ticker:'3147', group:'prot', groupLabel:'保護元件',
    products:'PPTC、過電壓保護、複合式保護元件、SiC/GaN功率半導體',
    catalyst:'佈局AI/EV高溫系列保護元件與SiC/GaN',
    highlight:'傳統保護+功率半導體跨界，高功率系統容錯',
    ai:3, car:4, price:3, scarce:3, platform:2, color:'#ba4a00' },
  { name:'九豪', ticker:'9101', group:'upstream', groupLabel:'上游材料',
    products:'氧化物/非氧化物陶瓷基板、電阻基板、氮化鋁基板、氧感材料',
    catalyst:'AlN基板切入AI/光通訊；非電阻基板比重提高',
    highlight:'高階電阻/散熱基板稀缺時，上游材料具槓桿',
    ai:3, car:4, price:3, scarce:4, platform:1, color:'#27ae60' },
  { name:'勤凱', ticker:'3272', group:'upstream', groupLabel:'上游材料',
    products:'電阻端電極銀漿、太陽能背銀膠、IC/LED固晶銀膠、先進封裝/散熱材料',
    catalyst:'銀價上漲調漲銀膏；切入先進封裝與AI材料',
    highlight:'銀價上漲可轉嫁，下游被動件+封裝雙向受惠',
    ai:3, car:3, price:5, scarce:4, platform:1, color:'#229954' },
  { name:'立敦', ticker:'5344', group:'upstream', groupLabel:'上游材料',
    products:'化成鋁箔、電蝕箔、導針、電解液',
    catalyst:'鋁電景氣回升與高值化產品放量時，上游具槓桿',
    highlight:'鋁電關鍵材料，與電容景氣同向放大',
    ai:2, car:3, price:3, scarce:4, platform:1, color:'#1e8449' },
  { name:'日電貿', ticker:'5225', group:'dist', groupLabel:'通路',
    products:'代理陶瓷電容(47%)、固態電容(21%)、電解電容(10%)等',
    catalyst:'2026Q1獲利成長；部分高階被動件交期延長至52週',
    highlight:'台灣最大被動元件代理商，配額與交期管理價值提升',
    ai:4, car:4, price:4, scarce:3, platform:5, color:'#f39c12' },
  { name:'蜜望實', ticker:'6482', group:'dist', groupLabel:'通路',
    products:'MLCC、電感代理(Taiyo Yuden正規經銷商)、MEMS麥克風',
    catalyst:'Taiyo Yuden 2026年起漲價，通路議價與庫存價值提高',
    highlight:'日系高階原廠漲價，配額管理價值放大',
    ai:3, car:3, price:3, scarce:2, platform:4, color:'#e67e22' },
];

const GROUP_COLORS = {
  platform:'#5b6ef5', cap:'#3498db', res:'#e74c3c',
  ind:'#9b59b6', freq:'#00bcd4', prot:'#e67e22',
  upstream:'#27ae60', dist:'#f39c12'
};
const GROUP_LABELS = {
  platform:'綜合平台', cap:'電容', res:'電阻',
  ind:'電感/磁材', freq:'頻率/RF', prot:'保護元件',
  upstream:'上游材料', dist:'通路'
};

/* ===== HEADER SCROLL ACTIVE ===== */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id], div[id]');

function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (s.getBoundingClientRect().top <= 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ===== BACK TO TOP ===== */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

/* ===== MOBILE MENU ===== */
const menuToggle = document.getElementById('menuToggle');
const headerNav  = document.getElementById('headerNav');
menuToggle.addEventListener('click', () => headerNav.classList.toggle('open'));
headerNav.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link')) headerNav.classList.remove('open');
});
document.addEventListener('click', e => {
  if (!e.target.closest('.site-header')) headerNav.classList.remove('open');
});

/* ===== SEARCH ===== */
const searchInput = document.getElementById('searchInput');
const searchBtn   = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');

const SEARCH_INDEX = [
  { id:'hero',       title:'執行摘要',            kw:'被動元件 AI 伺服器 投資 2026' },
  { id:'overview',   title:'產業定義與結構',        kw:'電阻 電容 電感 供應鏈 台灣公司' },
  { id:'whyhot',     title:'為何成為熱門',           kw:'熱門 漲價 Murata Taiyo Yuden 800VDC AI 缺貨' },
  { id:'rcl',        title:'三大元件解析',           kw:'電容 電阻 電感 MLCC 薄膜 固態' },
  { id:'ai-server',  title:'AI伺服器被動元件角色',   kw:'AI Server GPU VRM TLVR 供電 800V PSU' },
  { id:'invest',     title:'各產品線投資邏輯',       kw:'投資 MLCC 鉭電容 鋁電 固態 Hybrid' },
  { id:'companies',  title:'台灣公司圖譜',           kw:'國巨 華新科 禾伸堂 信昌電 光頡 立隆電 臺慶科 鈺邦 日電貿' },
  { id:'radar',      title:'受惠強度雷達圖',         kw:'雷達圖 AI曝險 車用曝險 評分' },
  ...COMPANIES.map(c => ({ id:'companies', title:c.name + ' ' + c.ticker, kw:c.products + ' ' + c.catalyst }))
];

function doSearch(q) {
  q = q.trim().toLowerCase();
  if (!q) { searchResults.classList.add('hidden'); return; }
  const hits = SEARCH_INDEX.filter(s =>
    s.title.toLowerCase().includes(q) || s.kw.toLowerCase().includes(q)
  ).slice(0, 8);
  if (!hits.length) {
    searchResults.innerHTML = '<div class="sr-item">找不到相關內容</div>';
  } else {
    searchResults.innerHTML = hits.map(s =>
      `<a class="sr-item" href="#${s.id}">
        <strong>${s.title}</strong>
      </a>`
    ).join('');
  }
  searchResults.classList.remove('hidden');
}
searchInput.addEventListener('input', () => doSearch(searchInput.value));
searchBtn.addEventListener('click', () => doSearch(searchInput.value));
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') { searchResults.classList.add('hidden'); searchInput.value = ''; }
});
document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap') && !e.target.closest('.search-results'))
    searchResults.classList.add('hidden');
});

/* ===== RCL TABS ===== */
document.querySelectorAll('.rcl-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.rcl-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.rcl-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ===== INVEST ACCORDION ===== */
window.toggleIA = function(btn) {
  const body = btn.nextElementSibling;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  btn.classList.toggle('active', !isOpen);
};

/* ===== IMAGE MODAL ===== */
const imgModal = document.getElementById('imgModal');
const imgModalSrc = document.getElementById('imgModalSrc');
window.openImg = function(src) {
  imgModalSrc.src = src;
  imgModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};
window.closeImg = function() {
  imgModal.classList.add('hidden');
  imgModalSrc.src = '';
  document.body.style.overflow = '';
};
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeImg(); });

/* ===== COMPANY CARDS ===== */
function renderCompanyCards(filter = 'all') {
  const container = document.getElementById('companyCards');
  container.innerHTML = '';
  const list = filter === 'all' ? COMPANIES : COMPANIES.filter(c => c.group === filter);
  list.forEach(c => {
    const total = c.ai + c.car + c.price + c.scarce + c.platform;
    const scores = [
      { label:'AI曝險', val:c.ai },
      { label:'車用', val:c.car },
      { label:'漲價', val:c.price },
      { label:'稀缺', val:c.scarce },
      { label:'通路', val:c.platform },
    ];
    const card = document.createElement('div');
    card.className = 'co-card';
    card.dataset.group = c.group;
    card.innerHTML = `
      <div class="co-header">
        <div>
          <div class="co-name">${c.name}</div>
          <div class="co-ticker">${c.ticker}</div>
        </div>
        <span class="co-badge" style="background:${c.color}22;color:${c.color};border:1px solid ${c.color}44">${c.groupLabel}</span>
      </div>
      <div class="co-products">${c.products}</div>
      <div class="co-catalyst">⚡ ${c.catalyst}</div>
      <div class="co-scores">
        ${scores.map(s => `
          <div class="co-score-wrap">
            <div class="co-score-label">${s.label}</div>
            <div class="co-score-bar"><div class="co-score-fill" style="width:${s.val/5*100}%;background:${c.color}"></div></div>
          </div>`).join('')}
      </div>`;
    container.appendChild(card);
  });
}

document.querySelectorAll('.ftab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCompanyCards(btn.dataset.filter);
  });
});
renderCompanyCards();

/* ===== RADAR CHART ===== */
const TOP_COMPANIES = COMPANIES.slice(0, 12);
const CHART_COLORS = [
  '#5b6ef5','#e74c3c','#27ae60','#f39c12','#9b59b6',
  '#00bcd4','#e67e22','#3498db','#c0392b','#1abc9c','#8e44ad','#d35400'
];

let selectedCompanies = new Set([0, 2, 3, 4, 10]);
let radarChart = null;

function buildRadarSelector() {
  const grid = document.getElementById('radarSelector');
  TOP_COMPANIES.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'rs-item' + (selectedCompanies.has(i) ? ' selected' : '');
    el.dataset.idx = i;
    el.innerHTML = `<div class="rs-dot" style="background:${CHART_COLORS[i]}"></div>${c.name}`;
    el.addEventListener('click', () => {
      if (selectedCompanies.has(i)) {
        if (selectedCompanies.size <= 1) return;
        selectedCompanies.delete(i);
        el.classList.remove('selected');
      } else {
        if (selectedCompanies.size >= 8) return;
        selectedCompanies.add(i);
        el.classList.add('selected');
      }
      updateRadarChart();
    });
    grid.appendChild(el);
  });
}

function buildRadarChart() {
  const ctx = document.getElementById('radarChart').getContext('2d');
  const labels = ['AI曝險', '車用曝險', '漲價轉嫁', '供給稀缺', '通路/平台'];
  const datasets = Array.from(selectedCompanies).map(i => {
    const c = TOP_COMPANIES[i];
    const col = CHART_COLORS[i];
    return {
      label: c.name,
      data: [c.ai, c.car, c.price, c.scarce, c.platform],
      backgroundColor: col + '22',
      borderColor: col,
      pointBackgroundColor: col,
      borderWidth: 2, pointRadius: 4,
    };
  });
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: { labels, datasets },
    options: {
      responsive: true,
      scales: {
        r: {
          min: 0, max: 5, ticks: { stepSize: 1, font: { size: 11 } },
          pointLabels: { font: { size: 12, weight: '700' } },
          grid: { color: 'rgba(0,0,0,.08)' },
        }
      },
      plugins: { legend: { position: 'bottom', labels: { font: { size: 11 } } } }
    }
  });
}

function updateRadarChart() {
  if (!radarChart) return;
  radarChart.data.datasets = Array.from(selectedCompanies).map(i => {
    const c = TOP_COMPANIES[i];
    const col = CHART_COLORS[i];
    return {
      label: c.name,
      data: [c.ai, c.car, c.price, c.scarce, c.platform],
      backgroundColor: col + '22',
      borderColor: col,
      pointBackgroundColor: col,
      borderWidth: 2, pointRadius: 4,
    };
  });
  radarChart.update();
}

function buildScoresTable() {
  const tbody = document.getElementById('scoresBody');
  const sorted = [...COMPANIES].sort((a,b) => (b.ai+b.car+b.price+b.scarce+b.platform) - (a.ai+a.car+a.price+a.scarce+a.platform));
  sorted.forEach(c => {
    const total = c.ai + c.car + c.price + c.scarce + c.platform;
    const sc = v => `<span class="score-cell s${v}">${v}</span>`;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${c.name}</strong><br><span style="font-size:.72rem;color:#999">${c.groupLabel}</span></td>
      <td>${sc(c.ai)}</td><td>${sc(c.car)}</td>
      <td>${sc(c.price)}</td><td>${sc(c.scarce)}</td>
      <td>${sc(c.platform)}</td>
      <td><span class="total-cell">${total}</span></td>`;
    tbody.appendChild(tr);
  });
}

buildRadarSelector();
buildScoresTable();
setTimeout(() => buildRadarChart(), 100);
