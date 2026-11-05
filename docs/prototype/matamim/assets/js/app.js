/* מטעמים — shared shell (header, assistant, toasts, modals, renderers) */
(function(){
const MT = window.MT;

/* ---------- Icons ---------- */
const I = {
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c1.8.8 3 2.6 3.5 5.2"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 20s-7.5-4.6-9.2-9.2C1.6 7.4 3.8 4 7.2 4c2 0 3.5 1 4.8 2.7C13.3 5 14.8 4 16.8 4c3.4 0 5.6 3.4 4.4 6.8C19.5 15.4 12 20 12 20z"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="18" height="18"><path d="M20 12H5M11 5l-7 7 7 7"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 5v14M5 12h14"/></svg>',
  side:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="18" height="18"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2l1.8 5.6L19.5 9l-5.7 1.6L12 16l-1.8-5.4L4.5 9l5.7-1.4z"/><path d="M19 15l.8 2.3 2.2.7-2.2.7L19 21l-.8-2.3-2.2-.7 2.2-.7z"/></svg>',
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M3 4h2l2.2 11h11l2-8H6.2"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8 5v14l11-7z"/></svg>',
  swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M7 4L3 8l4 4M3 8h13M17 20l4-4-4-4M21 16H8"/></svg>',
  reroll:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>',
  speaker:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><rect x="6" y="14" width="12" height="7"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>'
};
MT.I = I;

const LOGO = `<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
  <circle cx="20" cy="20" r="19" fill="#2C1840"/>
  <circle cx="20" cy="20" r="12.5" fill="none" stroke="#F2A922" stroke-width="2.5" stroke-dasharray="6 3.2"/>
  <path d="M14 23.5c1.6 3 3.6 4.5 6 4.5s4.4-1.5 6-4.5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="15.5" cy="16.5" r="2" fill="#F2A922"/><circle cx="24.5" cy="16.5" r="2" fill="#F2A922"/></svg>`;
MT.LOGO = LOGO;

/* ---------- Renderers ---------- */
MT.BASE = location.pathname.includes('/docs/') ? '../' : '';
MT.IMGS = ['r1','r2','r3','r4','r5','r6','r7','r8','r9','r10','r11','r12','eggplant','pappardelle'];
MT.art = (r, cls='') => { const key = r.img || r.id;
  if (key && MT.IMGS.includes(key)) return `<div class="art photo ${cls}" role="img" aria-label="${r.title||''}"><img src="${MT.BASE}assets/img/${key}.svg" alt="" loading="lazy" decoding="async"></div>`;
  return MT.artEmoji(r, cls); };
MT.artEmoji = (r, cls='') => `<div class="art ${cls}" style="--h:${r.h}" role="img" aria-label="${r.title||''}">
  <span class="garnish g1" aria-hidden="true">${(r.g||[])[0]||''}</span>
  <span class="plate"></span><span class="food" aria-hidden="true">${r.e}</span>
  <span class="garnish g2" aria-hidden="true">${(r.g||[])[1]||''}</span></div>`;
MT.kchip = k => `<span class="k-chip ${MT.KASHRUT[k].cls}">${MT.KASHRUT[k].label}</span>`;
MT.card = (r, opts={}) => `<article class="card recipe-card" data-k="${r.k}" data-src="${r.src}">
  <a href="recipe.html?id=${r.id}" class="art-wrap" aria-label="${r.title}">
    <span class="src">${MT.SOURCE[r.src]}</span>${MT.art(r)}</a>
  <button class="fav ${opts.fav?'on':''}" aria-label="שמירה למועדפים" aria-pressed="${!!opts.fav}" data-fav>${I.heart}</button>
  <div class="body">
    <div style="display:flex;gap:6px;flex-wrap:wrap">${MT.kchip(r.k)}<span class="tag">${MT.DISH[r.dish]}</span></div>
    <h3><a href="recipe.html?id=${r.id}">${r.title}</a></h3>
    <p style="color:var(--muted);font-size:.9rem">${r.desc}</p>
    <div class="meta"><span>${I.clock}${r.prep + r.cook >= 60 ? Math.floor((r.prep+r.cook)/60)+' ש׳ '+((r.prep+r.cook)%60? (r.prep+r.cook)%60+' ד׳':'') : (r.prep+r.cook)+' דק׳'}</span><span>${I.users}${r.serv} מנות</span>${opts.ago?`<span style="margin-inline-start:auto">${r.ago}</span>`:''}</div>
  </div></article>`;

/* ---------- Toast ---------- */
MT.toast = (html, icon='✓') => {
  let box = document.querySelector('.toasts');
  if(!box){box=document.createElement('div');box.className='toasts';box.setAttribute('role','status');box.setAttribute('aria-live','polite');document.body.appendChild(box);}
  const t=document.createElement('div');t.className='toast';t.innerHTML=`<span>${icon}</span><span>${html}</span>`;
  box.appendChild(t);setTimeout(()=>{t.style.transition='opacity .3s';t.style.opacity='0';setTimeout(()=>t.remove(),300)},3600);
};

/* ---------- Modal ---------- */
MT.modal = (id, open=true) => {
  const m=document.getElementById(id); if(!m) return;
  m.classList.toggle('open',open);
  if(open){ const f=m.querySelector('button,input,select'); f&&setTimeout(()=>f.focus(),60); }
};
document.addEventListener('click',e=>{
  const c=e.target.closest('[data-close]'); if(c){ c.closest('.modal-backdrop').classList.remove('open'); }
  if(e.target.classList.contains('modal-backdrop')) e.target.classList.remove('open');
  const f=e.target.closest('[data-fav]');
  if(f){ e.preventDefault(); const on=!f.classList.contains('on'); f.classList.toggle('on',on); f.setAttribute('aria-pressed',on);
    MT.toast(on?'המתכון נשמר במועדפים <a href="favorites.html">למועדפים</a>':'הוסר מהמועדפים', on?'❤':'·'); }
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape') document.querySelectorAll('.modal-backdrop.open').forEach(m=>m.classList.remove('open')); });

/* ---------- Typewriter / stream ---------- */
MT.stream = (el, text, speed=14) => new Promise(res=>{
  el.classList.add('caret'); el.textContent=''; let i=0;
  const step=()=>{ i+=Math.max(1,Math.round(Math.random()*3)); el.textContent=text.slice(0,i);
    if(i<text.length) setTimeout(step,speed); else {el.classList.remove('caret');res();} };
  step();
});
MT.wait = ms => new Promise(r=>setTimeout(r,ms));
MT.qs = new URLSearchParams(location.search);

/* ---------- Shell ---------- */
const NAV = [
  ['index','index.html','בית'],['wheel','wheel.html','גלגל האתגר'],['fusion','fusion.html','מיזוג מטבחים'],
  ['request','request.html','לפי בקשה'],['pantry','pantry.html','מה יש לי'],['menu','menu-planner.html','תפריט שבת וחג'],['shopping','shopping.html','רשימות קניות'],['favorites','favorites.html','מועדפים']
];

function header(active){
  const logged = localStorageSafe('mt_logged') !== '0';
  return `<header class="topbar"><div class="container">
    <button class="burger" aria-label="תפריט" data-drawer>${I.menu}</button>
    <a href="index.html" class="logo" aria-label="מטעמים – לעמוד הבית">${LOGO}<span>מטעמים</span></a>
    <nav class="nav" aria-label="ניווט ראשי">${NAV.map(n=>`<a href="${n[1]}" ${n[0]===active?'aria-current="page"':''}>${n[2]}</a>`).join('')}</nav>
    <div class="topbar-tools">
      <div class="lang" role="group" aria-label="שפה"><button aria-pressed="true">עב</button><button aria-pressed="false" data-lang-en>EN</button></div>
      ${logged? `<a href="favorites.html" class="avatar" title="החשבון שלי" aria-label="החשבון שלי">י״כ</a>`
              : `<a href="login.html" class="btn btn-primary btn-sm">התחברות</a>`}
    </div></div></header>
  <div class="drawer" id="drawer"><div class="scrim" data-drawer></div><nav aria-label="ניווט">
    <a href="index.html" class="logo" style="margin-bottom:16px">${LOGO}<span>מטעמים</span></a>
    ${NAV.map(n=>`<a href="${n[1]}" ${n[0]===active?'aria-current="page"':''}>${n[2]}</a>`).join('')}
    <a href="login.html">התחברות / הרשמה</a><a href="admin.html">ניהול</a></nav></div>`;
}
function footer(){
  return `<footer class="footer"><div class="container">
    <a href="index.html" class="logo" style="font-size:1.25rem">${LOGO}<span>מטעמים</span></a>
    <p style="max-width:60ch">סיווג הכשרות (בשרי/חלבי/פרווה) נעשה באופן אוטומטי. יש לבדוק את הכשרות של המוצרים עצמם, ולשאלות הלכתיות יש לפנות לרב.</p>
    <nav><a href="presentation.html">מפת מסכים</a><a href="docs/design-document.html">מסמך עיצוב</a><a href="admin.html">ניהול</a><a href="states.html">מצבי מערכת</a></nav>
  </div></footer>`;
}
function localStorageSafe(k,v){ try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k,v);}catch(e){return null} }
MT.ls = localStorageSafe;

/* ---------- Assistant ---------- */
const CTX = {index:'עמוד הבית', wheel:'גלגל האתגר', fusion:'מיזוג מטבחים', menu:'מתכנן התפריט', pantry:'מה יש לי במטבח', request:'מתכון לפי בקשה', recipe:'עמוד מתכון', shopping:'רשימות קניות', favorites:'מועדפים'};
const SUGGEST = {
  index:['תכין לי ארוחת ליל שבת ל-12','משהו פרווה ומאתגר','מיזוג מרוקאי ואיטלקי'],
  recipe:['אין לי סילאן','תכפיל ל-16 מנות','איך יודעים שהבשר מוכן?','בוא נתחיל לבשל'],
  wheel:['תעביר לרמה מטורפת','רק חלבי'],
  fusion:['תימני עם יפני, קינוח','מה זה מיזוג?'],
  menu:['סעודת יום שבת ל-8, חלבי','תוסיף עוד תוספת'],
  shopping:['תוסיף חלות','תסדר לי לפי מחלקות'],
  request:['עוגת יום הולדת לילד בן 6','משהו קל לארוחת ערב'],
  pantry:['יש לי עוף, תפוחי אדמה ובצל','רק פרווה','בלי לקנות כלום'],
  favorites:['תבנה רשימת קניות מהמועדפים']
};
function assistant(page){
  return `<aside class="assistant" id="assistant" aria-label="עוזר הניווט">
    <span class="grab" aria-hidden="true"></span>
    <div class="as-head"><span class="orb" aria-hidden="true"></span>
      <div><b>העוזר של מטעמים</b><small>מכיר את ${CTX[page]||'האתר'}</small></div>
      <div class="actions">
        <button class="new-chat" title="שיחה חדשה" aria-label="שיחה חדשה" data-newchat>${I.plus}</button>
        <button class="collapse" title="כיווץ הפאנל" aria-label="כיווץ או הרחבת העוזר" data-collapse>${I.side}</button>
        <button class="close-sheet" title="סגירה" aria-label="סגירת העוזר" data-sheet style="display:none">${I.close}</button>
      </div></div>
    <div class="as-body" id="asBody" aria-live="polite"></div>
    <div class="as-suggest" id="asSuggest">${(SUGGEST[page]||SUGGEST.index).map(s=>`<button type="button">${s}</button>`).join('')}</div>
    <div class="as-input"><form id="asForm" autocomplete="off">
      <input id="asInput" maxlength="300" placeholder="מה בא לך לבשל היום?" aria-label="הודעה לעוזר">
      <button class="send" aria-label="שליחה">${I.send}</button></form>
      <div class="quota">נותרו 87 הודעות היום · העוזר מכין, אתם לוחצים</div></div>
  </aside>
  <button class="as-fab" aria-label="פתיחת העוזר" data-sheet><span class="orb"></span></button>`;
}

const RULES = [
  {re:/יום הולדת|עוגת|מתכון ל|ארוחת ערב|כיבוד/, say:'מילאתי את הבקשה במסך "מתכון לפי בקשה". לחצו "צור מתכון" כשתהיו מוכנים.', tool:'prepare_request', list:['עוגת יום הולדת שוקולד','אירוע: יום הולדת','פרווה'], go:'request.html?q=עוגת יום הולדת שוקולד', btn:'פתח את המסך'},
  {re:/(^|[^א])יש לי|במקרר|נשאר לי|מה אפשר להכין/, say:'רשמתי את המצרכים שכתבתם במסך "מה יש לי". בדקו את הרשימה ולחצו "צור מתכון".', tool:'prepare_pantry', list:['חזה עוף, תפוחי אדמה, בצל, שום, לימון','בשרי','בלי מצרכים חסרים'], go:'pantry.html?preset=1', btn:'פתח את המסך'},
  {re:/שבת|תפריט|חג|סעודה|ארוחת שבת/, say:'הכנתי לך את מתכנן התפריט עם ההגדרות. נשאר רק ללחוץ על "בנה תפריט".', tool:'prepare_menu', list:['ליל שבת','12 סועדים','בשרי','מאמץ: חגיגית'], go:'menu-planner.html?preset=1', btn:'פתח את המתכנן'},
  {re:/מיזוג|מרוקאי|איטלקי|תימני|יפני|פרסי|הודי/, say:'שמתי את שני המטבחים על השולחן. לחיצה על "מזג!" תיצור את המנה.', tool:'prepare_fusion', list:['מרוקאי + איטלקי','עיקרית','בשרי'], go:'fusion.html?a=moroccan&b=italian', btn:'פתח את המיזוג'},
  {re:/גלגל|אתגר|מטורף|פרווה|הפתע/, say:'הגלגל מוכן עם ההגדרות שביקשת. סובבו כשתהיו מוכנים.', tool:'prepare_wheel', list:['פרווה','רמה: מטורף'], go:'wheel.html?k=parve&d=hard', btn:'פתח את הגלגל'},
  {re:/אין לי|תחליף|להחליף/, say:'פתחתי הצעות תחליף לסילאן במתכון הפתוח. כל ההצעות שומרות על סיווג בשרי.', tool:'suggest_substitute', list:['מצרך: סילאן','3 הצעות'], go:'recipe.html?sub=i4', btn:'הצג תחליפים'},
  {re:/תכפיל|מנות|כמויות|16/, say:'עדכנתי את בורר המנות ל-16. הכמויות יחושבו מחדש בעמוד.', tool:'prepare_conversion', list:['שינוי כמויות','16 מנות'], go:'recipe.html?servings=16', btn:'עבור למתכון'},
  {re:/המר|חלבי|לפרווה/, say:'הכנתי המרה לפרווה. תראו השוואת לפני ואחרי לפני האישור.', tool:'prepare_conversion', list:['המרת סוג כשרות','יעד: פרווה'], go:'recipe.html?convert=parve', btn:'פתח המרה'},
  {re:/קניות|חלות|תוסיף|רשימה/, say:'פתחתי את חלון ההוספה לרשימת הקניות. אשרו כדי להוסיף.', tool:'prepare_shopping_list', list:['רשימה: שבת פרשת השבוע'], go:'shopping.html', btn:'לרשימת הקניות'},
  {re:/לבשל|נתחיל|בישול/, say:'מצב בישול מוכן: 7 שלבים, עם טיימרים והקראה קולית.', tool:'start_cooking_mode', list:['8 מנות','הקראה אוטומטית'], go:'cook.html', btn:'התחל לבשל'},
  {re:/מוכן|יודעים|כמה זמן/, say:'הבשר מוכן כשמזלג נכנס בקלות ויוצא בלי התנגדות. אם הוא עדיין קשיח, החזירו לתנור ל-30 דקות נוספות ובדקו שוב.'},
  {re:/מועדפים|שמרתי/, say:'מעביר אותך למועדפים.', tool:'open_favorites', list:[], go:'favorites.html', btn:'למועדפים'}
];

function bubble(role, html){
  const b=document.getElementById('asBody'); const d=document.createElement('div');
  d.className='msg '+role; d.innerHTML=html; b.appendChild(d); b.scrollTop=b.scrollHeight; return d;
}
async function reply(text){
  bubble('user', text.replace(/</g,'&lt;'));
  const b=document.getElementById('asBody');
  const t=document.createElement('div'); t.className='msg bot typing'; t.innerHTML='<i></i><i></i><i></i>'; b.appendChild(t); b.scrollTop=b.scrollHeight;
  await MT.wait(900);
  t.remove();
  const r = RULES.find(x=>x.re.test(text)) || {say:'אני יכול להעביר אתכם לכל מקום באתר ולמלא את ההגדרות: תפריט לשבת או לחג, סיבוב בגלגל האתגר, מיזוג מטבחים, החלפת מצרך או רשימת קניות. מה מתאים לכם?'};
  const d=bubble('bot','<span class="txt"></span>');
  await MT.stream(d.querySelector('.txt'), r.say, 12);
  if(r.go){
    const card=document.createElement('div'); card.className='action-card';
    card.innerHTML=`<div class="ac-title">${I.spark} הוכן עבורך</div>${r.list.length?`<ul>${r.list.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}<a class="btn btn-accent btn-sm is-ready" href="${r.go}">${r.btn}</a>`;
    d.appendChild(card); b.scrollTop=b.scrollHeight;
  }
}
function initAssistant(page){
  const body=document.getElementById('asBody'); if(!body) return;
  const greet = {
    recipe:'אני רואה שאתם על <b>'+((MT.recipes.find(r=>r.id===(MT.qs.get('id')||'r1'))||{}).title||'המתכון')+'</b>. אפשר לשאול אותי על המתכון, לבקש תחליף למצרך או להתחיל לבשל.',
    menu:'ספרו לי איזו סעודה מתכננים, כמה סועדים ואיזה סוג כשרות, ואמלא את הטופס בשבילכם.'
  }[page] || 'שלום! ספרו לי מה בא לכם לבשל, ואכין לכם את העמוד המתאים עם כל ההגדרות.';
  bubble('bot', greet);
  if(page==='index'){
    bubble('user','משהו חגיגי לליל שבת, בשרי, בערך 12 איש');
    const d=bubble('bot', RULES[0].say);
    const card=document.createElement('div'); card.className='action-card';
    card.innerHTML=`<div class="ac-title">${I.spark} הוכן עבורך · prepare_menu</div><ul>${RULES[0].list.map(x=>`<li>${x}</li>`).join('')}</ul><a class="btn btn-accent btn-sm" href="${RULES[0].go}">${RULES[0].btn}</a>`;
    d.appendChild(card);
  }
  document.getElementById('asForm').addEventListener('submit',e=>{e.preventDefault();const i=document.getElementById('asInput');const v=i.value.trim();if(!v)return;i.value='';reply(v);});
  document.getElementById('asSuggest').addEventListener('click',e=>{const b=e.target.closest('button');if(b)reply(b.textContent);});
}

document.addEventListener('click',e=>{
  if(e.target.closest('[data-collapse]')){ const a=document.querySelector('.app'); a.classList.toggle('assistant-collapsed'); MT.ls('mt_as', a.classList.contains('assistant-collapsed')?'c':'o'); }
  if(e.target.closest('[data-sheet]')){ const s=document.getElementById('assistant'); s.classList.toggle('sheet-open'); s.querySelector('.close-sheet').style.display=s.classList.contains('sheet-open')?'grid':'none'; }
  if(e.target.closest('[data-newchat]')){ document.getElementById('asBody').innerHTML=''; bubble('bot','שיחה חדשה התחילה. במה אפשר לעזור?'); }
  if(e.target.closest('[data-drawer]')){ document.getElementById('drawer').classList.toggle('open'); }
  if(e.target.closest('[data-lang-en]')){ MT.toast('ממשק באנגלית (LTR) יוצג בשלב הפיתוח · ראו מסמך העיצוב, פרק רב-לשוניות','🌐'); }
});

/* Mount */
MT.mount = function(page, opts={}){
  const body=document.body; const content=document.getElementById('content');
  const app=document.createElement('div'); app.className='app'+(opts.assistant===false?' no-assistant':'');
  if(MT.ls('mt_as')==='c') app.classList.add('assistant-collapsed');
  const main=document.createElement('div'); main.className='main';
  main.innerHTML=header(page);
  const pg=document.createElement('main'); pg.className='page'; pg.id='main';
  pg.appendChild(content); content.classList.add('container');
  main.appendChild(pg); main.insertAdjacentHTML('beforeend', footer());
  app.appendChild(main);
  if(opts.assistant!==false) app.insertAdjacentHTML('beforeend', assistant(page));
  body.prepend(app);
  initAssistant(page);
};
})();
