'use strict';

/* ===== DATA ===== */
const COMPANIES = [
  { name:'國巨', ticker:'2327', group:'platform', groupLabel:'綜合平台',
    products:'MLCC、鉭電容、晶片電阻、磁性元件、感測器',
    catalyst:'2026/4 合併營收創單月新高；併購KEMET後鉭電容全球產能市占約40%+（最大供應商）',
    ai:5, car:4, price:5, scarce:5, platform:5, color:'#5b6ef5' },
  { name:'華新科', ticker:'2492', group:'platform', groupLabel:'綜合平台',
    products:'陶瓷電容、晶片電阻、電感、RF濾波器、天線',
    catalyst:'AI相關營收約10%；中高壓MLCC、安規電容與特殊電阻',
    ai:4, car:4, price:4, scarce:4, platform:4, color:'#4355e8' },
  { name:'禾伸堂', ticker:'3026', group:'platform', groupLabel:'綜合平台',
    products:'高壓高容 NP0/X7S/X8M MLCC、代理線',
    catalyst:'啟動第二個4年30億擴產；800V HVDC核心料號少數供應商',
    ai:5, car:3, price:4, scarce:5, platform:3, color:'#e74c3c' },
  { name:'信昌電', ticker:'6173', group:'platform', groupLabel:'綜合平台',
    products:'特殊MLCC、電阻、電感、壓敏/熱敏電阻、介電瓷粉',
    catalyst:'AI交期拉長至16週+；訂單能見度超6個月；新瓷粉廠+50%產能',
    ai:5, car:4, price:4, scarce:5, platform:4, color:'#c0392b' },
  { name:'光頡', ticker:'3624', group:'res', groupLabel:'電阻',
    products:'薄膜精密電阻、厚膜電阻、電流感測電阻、MLCC、RF/功率電感',
    catalyst:'AI伺服器電流感測電阻需求帶動；薄膜電阻與MLCC漲價；切入高頻電感應用',
    ai:4, car:5, price:4, scarce:4, platform:3, color:'#e67e22' },
  { name:'天二科技', ticker:'6834', group:'res', groupLabel:'電阻',
    products:'晶片電阻、排阻、Metal Strip電阻',
    catalyst:'電阻產業漲價跟進；IATF 16949車規認證',
    ai:3, car:3, price:3, scarce:2, platform:1, color:'#d35400' },
  { name:'立隆電', ticker:'2472', group:'cap', groupLabel:'電容',
    products:'OP-CAP、Hybrid、SMD鋁電解電容、EDLC',
    catalyst:'AI GPU板擴大導入Hybrid/Polymer；泰國新廠投產',
    ai:4, car:5, price:4, scarce:4, platform:3, color:'#2980b9' },
  { name:'金山電', ticker:'8042', group:'cap', groupLabel:'電容',
    products:'鋁質電解電容、固態/高值化電容',
    catalyst:'雲端/AI伺服器需求強；中國、泰國擴產',
    ai:4, car:3, price:3, scarce:3, platform:2, color:'#1a6ba0' },
  { name:'凱美', ticker:'2375', group:'cap', groupLabel:'電容',
    products:'鋁質電解電容、固態/Hybrid鋁電、風扇',
    catalyst:'三大產品線已有AI客戶導入',
    ai:3, car:2, price:3, scarce:2, platform:2, color:'#1a5276' },
  { name:'鈺邦', ticker:'6449', group:'cap', groupLabel:'電容',
    products:'導電高分子片式固態電容、Hybrid、SMLC',
    catalyst:'啟動擴產，全面放量；朝NVIDIA B300/新平台積極送樣',
    ai:5, car:2, price:4, scarce:4, platform:2, color:'#0288d1' },
  { name:'臺慶科', ticker:'3357', group:'ind', groupLabel:'電感/磁材',
    products:'磁性材料、電感元件、TLVR電感',
    catalyst:'官網展示TLVR料號；IEK確認準備量產',
    ai:5, car:4, price:4, scarce:5, platform:2, color:'#8e44ad' },
  { name:'鈞寶', ticker:'6155', group:'ind', groupLabel:'電感/磁材',
    products:'EMI/EMC鐵氧體、電感器、共模抗流圈、功率電感',
    catalyst:'對部分客戶調價；高頻電感接單能見度提升',
    ai:4, car:4, price:4, scarce:3, platform:2, color:'#7d3c98' },
  { name:'千如', ticker:'3236', group:'ind', groupLabel:'電感/磁材',
    products:'車規電感、TLVR、共模濾波、LTCC、變壓器',
    catalyst:'2026年推出大電流磁珠、雙線圈TLVR新品',
    ai:4, car:4, price:3, scarce:3, platform:2, color:'#6c3483' },
  { name:'聯寶', ticker:'6240', group:'ind', groupLabel:'電感/磁材',
    products:'切換式電源變壓器、PFC電感、共模差模電感、RJ45 ICM',
    catalyst:'推出200W LAN Transformer與AI/網通用RJ45 ICM',
    ai:4, car:2, price:3, scarce:3, platform:2, color:'#5b2c6f' },
  { name:'今展科', ticker:'3362', group:'ind', groupLabel:'電感/磁材',
    products:'電感、Power Inductor、MCU',
    catalyst:'通訊、工業、智能運算、伺服器應用',
    ai:3, car:3, price:2, scarce:2, platform:1, color:'#4a235a' },
  { name:'鈺鎧', ticker:'5228', group:'ind', groupLabel:'電感/磁材',
    products:'積層式晶片電感、磁珠、磁性/陶瓷材料',
    catalyst:'車用與高信賴度應用；AI/車用高頻電感供需轉緊',
    ai:3, car:4, price:2, scarce:2, platform:1, color:'#3d1a78' },
  { name:'台嘉碩', ticker:'3264', group:'freq', groupLabel:'頻率/RF',
    products:'SAW、BAW、石英振盪晶體、振盪器、天線',
    catalyst:'產品線延伸到天線與模組；Wi-Fi/車用/LEO/GNSS帶動',
    ai:3, car:4, price:2, scarce:3, platform:2, color:'#0097a7' },
  { name:'希華', ticker:'2484', group:'freq', groupLabel:'頻率/RF',
    products:'XO、TCXO、VCTCXO、高頻振盪器',
    catalyst:'官網已明列資料中心、伺服器與交換器應用',
    ai:3, car:4, price:2, scarce:3, platform:2, color:'#00838f' },
  { name:'安碁', ticker:'6762', group:'freq', groupLabel:'頻率/RF',
    products:'石英晶體、石英振盪器、濾波器',
    catalyst:'汽車、電信、資料傳輸、儀器',
    ai:2, car:4, price:2, scarce:2, platform:1, color:'#006064' },
  { name:'泰藝', ticker:'3685', group:'freq', groupLabel:'頻率/RF',
    products:'石英晶體、VCXO、TCXO、OCXO、原子鐘',
    catalyst:'航太、電信、汽車、IoT；高精度timing利基',
    ai:3, car:4, price:2, scarce:3, platform:2, color:'#004d40' },
  { name:'加高', ticker:'3547', group:'freq', groupLabel:'頻率/RF',
    products:'Crystal resonators、crystal oscillators、MEMS振盪器',
    catalyst:'汽車與高精度同步應用',
    ai:2, car:3, price:2, scarce:2, platform:1, color:'#00402a' },
  { name:'詠業', ticker:'3300', group:'freq', groupLabel:'頻率/RF',
    products:'無線通訊天線/模組、壓電元件、超音波傳感、保護元件',
    catalyst:'藍牙晶片天線累計出貨近3億顆；低軌衛星陣列天線開發',
    ai:3, car:4, price:2, scarce:3, platform:2, color:'#1b5e20' },
  { name:'興勤', ticker:'2428', group:'prot', groupLabel:'保護元件',
    products:'NTC/PTC/PPTC、Varistor、GDT、ESD/TVS、IGBT模組',
    catalyst:'高功率系統容錯成本急升；持續推出保護整合新品',
    ai:3, car:5, price:3, scarce:3, platform:2, color:'#e65100' },
  { name:'聚鼎', ticker:'6224', group:'prot', groupLabel:'保護元件',
    products:'PPTC、Fuse、eFuse、熱管理方案、電流感測電阻',
    catalyst:'eFuse列為新產品核心；最大代工客戶Littelfuse',
    ai:3, car:4, price:3, scarce:3, platform:2, color:'#bf360c' },
  { name:'富致', ticker:'3147', group:'prot', groupLabel:'保護元件',
    products:'PPTC、過電壓保護、複合式保護元件、SiC/GaN功率半導體',
    catalyst:'佈局AI/EV高溫系列保護元件與SiC/GaN',
    ai:3, car:4, price:3, scarce:3, platform:2, color:'#b71c1c' },
  { name:'九豪', ticker:'6127', group:'upstream', groupLabel:'上游材料',
    products:'氧化物/非氧化物陶瓷基板、電阻基板、氮化鋁基板',
    catalyst:'AlN基板切入AI/光通訊；非電阻基板比重提高',
    ai:3, car:4, price:3, scarce:4, platform:1, color:'#27ae60' },
  { name:'勤凱', ticker:'4760', group:'upstream', groupLabel:'上游材料',
    products:'電阻端電極銀漿、太陽能背銀膠、先進封裝/散熱材料',
    catalyst:'銀價上漲調漲銀膏；切入先進封裝與AI材料',
    ai:3, car:3, price:5, scarce:4, platform:1, color:'#1e8449' },
  { name:'立敦', ticker:'6175', group:'upstream', groupLabel:'上游材料',
    products:'化成鋁箔、電蝕箔、導針、電解液',
    catalyst:'鋁電景氣回升與高值化產品放量時，上游具槓桿',
    ai:2, car:3, price:3, scarce:4, platform:1, color:'#145a32' },
  { name:'日電貿', ticker:'3090', group:'dist', groupLabel:'通路',
    products:'代理陶瓷電容(47%)、固態電容(21%)、電解電容(10%)等',
    catalyst:'AI料件交期3-4個月+；缺口達5-10倍；自2022起提前布局備貨；CSP漲價已普遍接受',
    ai:4, car:4, price:4, scarce:3, platform:5, color:'#f39c12' },
  { name:'蜜望實', ticker:'8043', group:'dist', groupLabel:'通路',
    products:'MLCC、電感代理（Taiyo Yuden正規經銷商）',
    catalyst:'Taiyo Yuden 2026年起漲價，通路議價與庫存價值提高',
    ai:3, car:3, price:3, scarce:2, platform:4, color:'#e67e22' },
];

const CHART_COLORS = [
  '#5b6ef5','#e74c3c','#27ae60','#f39c12','#9b59b6',
  '#00bcd4','#e67e22','#3498db','#c0392b','#1abc9c','#8e44ad','#d35400'
];

/* ===== ACTIVE NAV ===== */
const navLinks = document.querySelectorAll('.nav-link');
function updateNav() {
  let cur = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (s.getBoundingClientRect().top <= 80) cur = s.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}
window.addEventListener('scroll', updateNav, { passive: true });

/* ===== BACK TO TOP ===== */
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => btt.classList.toggle('visible', scrollY > 500), { passive: true });

/* ===== MOBILE MENU ===== */
const menuToggle = document.getElementById('menuToggle');
const headerNav  = document.getElementById('headerNav');
menuToggle.addEventListener('click', () => headerNav.classList.toggle('open'));
document.addEventListener('click', e => {
  if (!e.target.closest('.site-header')) headerNav.classList.remove('open');
});
headerNav.addEventListener('click', e => { if (e.target.classList.contains('nav-link')) headerNav.classList.remove('open'); });

/* ===== SEARCH ===== */
const searchInput = document.getElementById('searchInput');
const searchBtn   = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');

const IDX = [
  { id:'overview',   title:'被動元件總覽', kw:'主動 被動 電容 電阻 電感 定義' },
  { id:'industry',   title:'產業地圖', kw:'供應鏈 上游 中游 通路 Murata Yageo TDK' },
  { id:'whyhot',     title:'為何成為熱門', kw:'熱門 需求 供給 漲價 ASP EPS AI' },
  { id:'rcl',        title:'三大元件解析', kw:'MLCC 薄膜 固態 Hybrid 電流感測 TLVR' },
  { id:'ai-server',  title:'AI伺服器被動元件', kw:'PSU VRM GPU TLVR DDR5 800VDC' },
  { id:'stocklogic', title:'股價上漲邏輯', kw:'催化 獲利 ASP 毛利 電容 電阻 電感 代理商' },
  { id:'companies',  title:'公司圖譜', kw:'國巨 華新科 禾伸堂 光頡 鈺邦 立隆電 臺慶科 日電貿' },
  { id:'radar',      title:'受惠強度雷達圖', kw:'雷達 評分 AI受惠度 車用受惠度' },
  ...COMPANIES.map(c => ({ id:'companies', title:c.name + ' ' + c.ticker, kw:c.products + ' ' + c.catalyst })),
];

function doSearch(q) {
  q = q.trim().toLowerCase();
  if (!q) { searchResults.classList.add('hidden'); return; }
  const hits = IDX.filter(s => s.title.toLowerCase().includes(q) || s.kw.toLowerCase().includes(q)).slice(0, 8);
  searchResults.innerHTML = hits.length
    ? hits.map(s => `<a class="sr-item" href="#${s.id}"><strong>${s.title}</strong></a>`).join('')
    : '<div class="sr-item">找不到相關內容</div>';
  searchResults.classList.remove('hidden');
}
searchInput.addEventListener('input', () => doSearch(searchInput.value));
searchBtn.addEventListener('click',   () => doSearch(searchInput.value));
searchInput.addEventListener('keydown', e => { if (e.key === 'Escape') { searchResults.classList.add('hidden'); searchInput.value = ''; } });
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap') && !e.target.closest('.search-results')) searchResults.classList.add('hidden'); });

/* ===== RCL TABS ===== */
document.querySelectorAll('.rcl-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.rcl-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.rcl-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ===== COMPANY CARDS ===== */
function renderCards(filter = 'all') {
  const c = document.getElementById('companyCards');
  c.innerHTML = '';
  const list = filter === 'all' ? COMPANIES
    : filter.startsWith('kw:') ? COMPANIES.filter(x => (x.products + ' ' + x.catalyst).includes(filter.slice(3)))
    : COMPANIES.filter(x => x.group === filter);
  list.forEach(co => {
    const scores = [
      { l:'AI受惠', v:co.ai }, { l:'車用受惠', v:co.car },
      { l:'漲價', v:co.price }, { l:'稀缺', v:co.scarce }, { l:'通路', v:co.platform },
    ];
    const div = document.createElement('div');
    div.className = 'co-card'; div.dataset.group = co.group;
    div.innerHTML = `
      <div class="co-header">
        <div><div class="co-name">${co.name}</div><div class="co-ticker">${co.ticker}</div></div>
        <span class="co-badge" style="background:${co.color}22;color:${co.color};border:1px solid ${co.color}44">${co.groupLabel}</span>
      </div>
      <div class="co-products">${co.products}</div>
      <div class="co-catalyst">⚡ ${co.catalyst}</div>
      <div class="co-scores">${scores.map(s => `
        <div class="co-score-wrap">
          <div class="co-score-label">${s.l}</div>
          <div class="co-score-bar"><div class="co-score-fill" style="width:${s.v/5*100}%;background:${co.color}"></div></div>
        </div>`).join('')}
      </div>`;
    c.appendChild(div);
  });
}
document.querySelectorAll('.ftab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
  });
});
renderCards();

function buildScoresTable() {
  const tbody = document.getElementById('scoresBody');
  [...COMPANIES].sort((a,b) => (b.ai+b.car+b.price+b.scarce+b.platform)-(a.ai+a.car+a.price+a.scarce+a.platform))
    .forEach(c => {
      const t = c.ai+c.car+c.price+c.scarce+c.platform;
      const sc = v => `<td><span class="score-cell s${v}">${v}</span></td>`;
      const tr = document.createElement('tr');
      tr.innerHTML = `<td style="text-align:left"><strong>${c.name}</strong><br><span style="font-size:.7rem;color:#999">${c.groupLabel}</span></td>${[c.ai,c.car,c.price,c.scarce,c.platform].map(sc).join('')}<td><span class="total-cell">${t}</span></td>`;
      tbody.appendChild(tr);
    });
}

buildScoresTable();

/* ===== FINANCIAL MODEL ===== */
(function(){
  const BASE = 1329; // 2025 actual revenue (億元)
  const SHARES = 2053; // million shares outstanding

  const ids = {
    rev:'sl-rev', gm:'sl-gm', opex:'sl-opex',
    nonop:'sl-nonop', tax:'sl-tax', pe:'sl-pe'
  };
  const displays = {
    rev:'v-rev', gm:'v-gm', opex:'v-opex',
    nonop:'v-nonop', tax:'v-tax', pe:'v-pe'
  };

  function getVal(id){ return parseFloat(document.getElementById(id).value); }

  function calc(){
    const revGrowth = getVal(ids.rev) / 100;
    const gm        = getVal(ids.gm)   / 100;
    const opexR     = getVal(ids.opex) / 100;
    const nonop     = getVal(ids.nonop);
    const taxR      = getVal(ids.tax)  / 100;
    const pe        = getVal(ids.pe);

    const rev  = BASE * (1 + revGrowth);
    const gp   = rev * gm;
    const op   = gp - rev * opexR;
    const pbt  = op + nonop;
    const np   = pbt * (1 - taxR);
    const eps  = (np * 100) / SHARES; // 億元 → 元 (×1億/百萬股 = ×100)
    const tp   = eps * pe;

    const fmt  = v => (Math.round(v)).toLocaleString();
    const fmt1 = v => v.toFixed(1);

    document.getElementById('out-rev').textContent = fmt(rev) + ' 億';
    document.getElementById('out-gp' ).textContent = fmt(gp)  + ' 億';
    document.getElementById('out-op' ).textContent = fmt(op)  + ' 億';
    document.getElementById('out-pbt').textContent = fmt(pbt) + ' 億';
    document.getElementById('out-np' ).textContent = fmt(np)  + ' 億';
    document.getElementById('out-eps').textContent = 'NT$' + fmt1(eps);
    document.getElementById('out-tp' ).textContent = 'NT$' + fmt(tp);

    // sync comparison column
    document.getElementById('ec-rev').textContent = fmt(rev) + ' 億';
    document.getElementById('ec-gm' ).textContent = (getVal(ids.gm)).toFixed(1) + '%';
    document.getElementById('ec-op' ).textContent = fmt(op) + ' 億';
    document.getElementById('ec-np' ).textContent = fmt(np) + ' 億';
    document.getElementById('ec-eps').textContent = 'NT$' + fmt1(eps);
    document.getElementById('ec-tp' ).textContent = 'NT$' + fmt(tp) + ' (' + pe + 'x)';
  }

  function bindSlider(slId, dispId, suffix){
    const sl = document.getElementById(slId);
    const dp = document.getElementById(dispId);
    if(!sl) return;
    sl.addEventListener('input', () => {
      dp.textContent = sl.value + suffix;
      calc();
    });
  }

  bindSlider('sl-rev',   'v-rev',   '%');
  bindSlider('sl-gm',    'v-gm',    '%');
  bindSlider('sl-opex',  'v-opex',  '%');
  bindSlider('sl-nonop', 'v-nonop', ' 億');
  bindSlider('sl-tax',   'v-tax',   '%');
  bindSlider('sl-pe',    'v-pe',    'x');

  calc(); // initial render
})();

/* ===== CAPACITOR TYPE MODAL ===== */
const CAP_TYPE_MAP = {
  mlcc:     { label:'① MLCC 相關廠商',     fn: c => /MLCC|陶瓷電容/.test(c.products) },
  tantalum: { label:'② 鉭電容 相關廠商',   fn: c => /鉭電容|鉭/.test(c.products) },
  aluminum: { label:'③ 鋁電解 相關廠商',   fn: c => /鋁電解|鋁質電解|電解電容/.test(c.products) },
  film:     { label:'④ 薄膜電容 相關廠商',  fn: c => /薄膜電容/.test(c.products + c.catalyst) },
  super:    { label:'⑤ 超級電容 相關廠商',  fn: c => /EDLC|超級電容/.test(c.products) },
};

const capOverlay = document.getElementById('capModalOverlay');
const capTitle   = document.getElementById('capModalTitle');
const capBody    = document.getElementById('capModalBody');

function openCapModal(type) {
  const cfg = CAP_TYPE_MAP[type];
  if (!cfg) return;
  const list = COMPANIES.filter(cfg.fn);
  capTitle.textContent = cfg.label;
  if (list.length === 0) {
    capBody.innerHTML = '<p style="color:var(--muted);padding:16px">目前資料庫中無台灣上市廠商直接生產此類型，主要由 TDK、KEMET、Vishay 等國際廠供應。</p>';
  } else {
    capBody.innerHTML = list.map(co => `
      <div class="cap-co-row" style="border-left:4px solid ${co.color}">
        <div class="cap-co-top">
          <span class="cap-co-name">${co.name}</span>
          <span class="cap-co-ticker">${co.ticker}</span>
          <span class="cap-co-badge" style="background:${co.color}22;color:${co.color}">${co.groupLabel}</span>
        </div>
        <div class="cap-co-products">${co.products}</div>
        <div class="cap-co-catalyst">⚡ ${co.catalyst}</div>
      </div>`).join('');
  }
  capOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('capModalClose').addEventListener('click', closeCapModal);
capOverlay.addEventListener('click', e => { if (e.target === capOverlay) closeCapModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCapModal(); });

function closeCapModal() {
  capOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.tc[data-captype]').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => openCapModal(card.dataset.captype));
});

/* ===== RESISTOR TYPE MODAL ===== */
const RES_TYPE_MAP = {
  thick:  { label:'① 厚膜電阻 相關廠商',        fn: c => /晶片電阻|厚膜電阻|排阻/.test(c.products) },
  thin:   { label:'② 薄膜電阻 相關廠商',        fn: c => /薄膜精密電阻|薄膜電阻/.test(c.products) },
  metal:  { label:'③ 金屬膜電阻 相關廠商',      fn: c => /金屬膜/.test(c.products) },
  oxide:  { label:'④ 金屬氧化膜電阻 相關廠商',  fn: c => /金屬氧化/.test(c.products) },
  wire:   { label:'⑤ 繞線電阻 相關廠商',        fn: c => /繞線/.test(c.products) },
  shunt:  { label:'⑥ 電流感測電阻 相關廠商',    fn: c => /電流感測電阻|Metal Strip/.test(c.products) },
};

document.querySelectorAll('.rtt-row[data-restype]').forEach(row => {
  row.style.cursor = 'pointer';
  row.addEventListener('click', () => {
    const cfg = RES_TYPE_MAP[row.dataset.restype];
    if (!cfg) return;
    const list = COMPANIES.filter(cfg.fn);
    capTitle.textContent = cfg.label;
    capBody.innerHTML = list.length === 0
      ? '<p style="color:var(--muted);padding:16px">資料庫中無台灣上市廠商直接主打此類型，主要由 Vishay、Yageo（國際線）、Panasonic 等供應。</p>'
      : list.map(co => `
        <div class="cap-co-row" style="border-left:4px solid ${co.color}">
          <div class="cap-co-top">
            <span class="cap-co-name">${co.name}</span>
            <span class="cap-co-ticker">${co.ticker}</span>
            <span class="cap-co-badge" style="background:${co.color}22;color:${co.color}">${co.groupLabel}</span>
          </div>
          <div class="cap-co-products">${co.products}</div>
          <div class="cap-co-catalyst">⚡ ${co.catalyst}</div>
        </div>`).join('');
    capOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

/* ===== INDUCTOR TYPE MODAL ===== */
const IND_TYPE_MAP = {
  power:  { label:'① 功率電感 相關廠商',   fn: c => /功率電感|Power Inductor|電感元件/.test(c.products) },
  molded: { label:'② 一體成型電感 相關廠商', fn: c => /一體成型|模壓電感/.test(c.products + c.catalyst) },
  hf:     { label:'③ 高頻電感 相關廠商',   fn: c => /高頻電感|RF.*電感|積層式晶片電感/.test(c.products) },
  common: { label:'④ 共模電感 相關廠商',   fn: c => /共模/.test(c.products) },
  tlvr:   { label:'⑤ TLVR 電感 相關廠商', fn: c => /TLVR/.test(c.products) },
  bead:   { label:'⑥ 磁珠 相關廠商',      fn: c => /磁珠|鐵氧體/.test(c.products) },
};

document.querySelectorAll('.itg-item[data-indtype]').forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', () => {
    const cfg = IND_TYPE_MAP[item.dataset.indtype];
    if (!cfg) return;
    const list = COMPANIES.filter(cfg.fn);
    capTitle.textContent = cfg.label;
    capBody.innerHTML = list.length === 0
      ? '<p style="color:var(--muted);padding:16px">資料庫中無台灣上市廠商直接主打此類型，主要由 TDK、Murata、Vishay 等國際廠供應。</p>'
      : list.map(co => `
        <div class="cap-co-row" style="border-left:4px solid ${co.color}">
          <div class="cap-co-top">
            <span class="cap-co-name">${co.name}</span>
            <span class="cap-co-ticker">${co.ticker}</span>
            <span class="cap-co-badge" style="background:${co.color}22;color:${co.color}">${co.groupLabel}</span>
          </div>
          <div class="cap-co-products">${co.products}</div>
          <div class="cap-co-catalyst">⚡ ${co.catalyst}</div>
        </div>`).join('');
    capOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
