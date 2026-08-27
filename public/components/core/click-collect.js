/* <click-collect sku="S001"></click-collect>
   Compact "Click & Collect" real-time store stock UI. Self-registering web component.
   Deterministic pseudo-stock per sku so it looks live but stays stable per product. */
(function(){
  if (window.customElements && customElements.get('click-collect')) return;

  var STORES = [
    { name:'Coin Gallery (Head Office)', short:'Coin Gallery' },
    { name:'Chinatown Point', short:'Chinatown Point' },
    { name:'Suntec City Mall', short:'Suntec City' }
  ];
  function hash(str){ var h=0; str=String(str||''); for(var i=0;i<str.length;i++){ h=(h*31+str.charCodeAt(i))>>>0; } return h; }
  function stockFor(sku){
    var h = hash(sku||'x');
    return STORES.map(function(s,i){
      var q = (h >> (i*3)) % 9; // 0..8
      return { name:s.name, short:s.short, qty:q };
    });
  }

  var CSS = ''+
  '.cc-root{font-family:var(--font-label,system-ui,sans-serif);margin-top:8px}'+
  '.cc-trigger{display:inline-flex;align-items:center;gap:7px;background:none;border:0;padding:0;cursor:pointer;font-family:inherit;font-weight:600;font-size:11.5px;color:#0a8a4a;letter-spacing:.01em}'+
  '.cc-trigger.out{color:var(--ink-500,#888)}'+
  '.cc-dot{width:7px;height:7px;border-radius:999px;background:#0a8a4a;box-shadow:0 0 0 3px rgba(10,138,74,.16);flex-shrink:0;position:relative}'+
  '.cc-dot::after{content:"";position:absolute;inset:0;border-radius:999px;background:#0a8a4a;animation:ccPulse 1.8s ease-out infinite}'+
  '.cc-dot.out{background:var(--ink-300,#bbb);box-shadow:none}'+
  '.cc-dot.out::after{display:none}'+
  '@keyframes ccPulse{0%{transform:scale(1);opacity:.6}70%,100%{transform:scale(2.6);opacity:0}}'+
  '.cc-trigger .chev{transition:transform .15s}'+
  '.cc-root.open .cc-trigger .chev{transform:rotate(180deg)}'+
  '.cc-pop{margin-top:8px;border:1px solid var(--ink-75,#eee);border-radius:8px;background:#fff;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,.08)}'+
  '.cc-pop .hd{font-size:9.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-500,#888);padding:9px 12px 6px}'+
  '.cc-row{display:flex;align-items:center;gap:8px;padding:7px 12px;border-top:1px solid var(--ink-50,#f2f2f2)}'+
  '.cc-row .nm{flex:1;min-width:0;font-size:12px;font-weight:600;color:var(--ink-900,#222);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
  '.cc-badge{font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:999px;white-space:nowrap}'+
  '.cc-badge.hi{background:#e8f6ec;color:#0a8a4a}'+
  '.cc-badge.lo{background:#fff3e0;color:#c26a00}'+
  '.cc-badge.no{background:var(--ink-25,#f5f5f5);color:var(--ink-400,#aaa)}'+
  '.cc-foot{padding:8px 12px;border-top:1px solid var(--ink-50,#f2f2f2);font-size:10.5px;color:var(--ink-400,#aaa);display:flex;align-items:center;gap:5px}';

  var styleEl = document.createElement('style');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  class ClickCollect extends HTMLElement {
    connectedCallback(){
      if (this._built) return; this._built = true;
      var sku = this.getAttribute('sku') || '';
      var data = stockFor(sku);
      var total = data.reduce(function(a,s){ return a + s.qty; }, 0);
      var count = data.filter(function(s){ return s.qty > 0; }).length;
      var open = false;

      var root = document.createElement('div'); root.className='cc-root';
      var label = total > 0 ? ('In stock at '+count+' store'+(count>1?'s':'')) : 'Out of stock — notify me';
      root.innerHTML =
        '<button type="button" class="cc-trigger'+(total>0?'':' out')+'">'+
          '<span class="cc-dot'+(total>0?'':' out')+'"></span>'+
          '<span class="cc-lbl">'+label+'</span>'+
          '<svg class="chev" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>'+
        '</button>';

      var pop = document.createElement('div'); pop.className='cc-pop'; pop.style.display='none';
      var rows = '<div class="hd">Click & Collect — real-time stock</div>';
      data.forEach(function(s){
        var cls = s.qty >= 3 ? 'hi' : (s.qty > 0 ? 'lo' : 'no');
        var txt = s.qty >= 3 ? 'In stock' : (s.qty > 0 ? ('Low · '+s.qty+' left') : 'Unavailable');
        rows += '<div class="cc-row"><span class="nm">'+s.name+'</span><span class="cc-badge '+cls+'">'+txt+'</span></div>';
      });
      rows += '<div class="cc-foot"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Updated just now · Reserve online, collect in 1–2 hrs</div>';
      pop.innerHTML = rows;

      root.appendChild(pop);
      this.appendChild(root);

      var trigger = root.querySelector('.cc-trigger');
      trigger.addEventListener('click', function(e){
        e.preventDefault(); e.stopPropagation();
        open = !open;
        pop.style.display = open ? 'block' : 'none';
        root.classList.toggle('open', open);
      });
    }
  }
  customElements.define('click-collect', ClickCollect);
})();
