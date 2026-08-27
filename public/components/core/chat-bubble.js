/* Floating chat bubble — self-injects into every page it's loaded on. */
(function(){
  if (window.__smChatBubbleMounted) return;
  window.__smChatBubbleMounted = true;

  var css = '@keyframes smChatIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}'+
    '.sm-chat-wrap{position:fixed;right:24px;bottom:24px;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;gap:12px;pointer-events:none;font-family:var(--font-body,system-ui,sans-serif)}'+
    '.sm-chat-btn{pointer-events:auto;width:52px;height:52px;border-radius:50%;border:0;background:transparent;padding:0;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.24);display:flex;align-items:center;justify-content:center;transition:transform .15s;overflow:hidden}'+
    '.sm-chat-btn:hover{transform:scale(1.06)}'+
    '.sm-chat-btn img,.sm-chat-btn svg{width:100%;height:100%;display:block;border-radius:50%}'+
    '.sm-chat-panel{pointer-events:auto;width:300px;background:#fff;border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,.18);overflow:hidden;border:1px solid rgba(0,0,0,.06);animation:smChatIn .18s ease-out}'+
    '.sm-chat-head{background:#03363d;color:#fff;padding:14px 16px;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;font-family:var(--font-label,inherit)}'+
    '.sm-chat-close{background:none;border:0;color:#fff;cursor:pointer;padding:4px;display:inline-flex}'+
    '.sm-chat-body{padding:16px;font-size:13px;color:#555;line-height:1.55}'+
    '.sm-chat-row{padding:0 16px 16px;display:flex;gap:8px}'+
    '.sm-chat-row input{flex:1;padding:10px 12px;border:1px solid #e5e5e5;border-radius:6px;font-size:13px;outline:none;font-family:inherit}'+
    '.sm-chat-row button{background:#cf0731;color:#fff;border:0;border-radius:6px;padding:10px 14px;font-weight:700;font-size:12px;cursor:pointer;font-family:var(--font-label,inherit)}'+
    '@media(max-width:600px){.sm-chat-wrap{right:16px;bottom:16px}.sm-chat-btn{width:44px;height:44px}.sm-chat-panel{width:calc(100vw - 32px);max-width:320px}}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Resolve icon path relative to this script's src.
  var here = (document.currentScript && document.currentScript.src) || '';
  var ICON_SVG = '<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="400" cy="400" r="400" fill="#03363d"/><path fill="#fff" d="M383 359V541H236zM383 289q0 61-43 103.5T236 435V289zM417 541q0-61 43-103.5T564 395v146zM417 471 564 289v182z"/></svg>';

  function mount(){
    if (document.querySelector('.sm-chat-wrap')) return;
    var wrap = document.createElement('div');
    wrap.className = 'sm-chat-wrap';
    wrap.innerHTML =
      '<div class="sm-chat-panel" hidden>'+
        '<div class="sm-chat-head"><span>Chat with us</span>'+
          '<button class="sm-chat-close" aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>'+
        '</div>'+
        '<div class="sm-chat-body">Hi! Our team typically replies in a few minutes. How can we help you today?</div>'+
        '<div class="sm-chat-row"><input placeholder="Type a message…"/><button>Send</button></div>'+
      '</div>'+
      '<button class="sm-chat-btn" aria-label="Chat with support">'+ICON_SVG+'</button>';
    document.body.appendChild(wrap);
    var panel = wrap.querySelector('.sm-chat-panel');
    wrap.querySelector('.sm-chat-btn').addEventListener('click', function(){ panel.hidden = !panel.hidden; });
    wrap.querySelector('.sm-chat-close').addEventListener('click', function(){ panel.hidden = true; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
