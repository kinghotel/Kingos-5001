/* KING OS V139 Memory Safe Guard */
(function(){
  if(window.__KING_MEMORY_SAFE_V139__) return;
  window.__KING_MEMORY_SAFE_V139__ = true;
  var START=Date.now(), lastActive=Date.now();
  var IDLE_LIMIT=10*60*1000, SOFT_RELOAD=2*60*60*1000;
  function lang(){try{return new URLSearchParams(location.search).get('lang')||localStorage.getItem('king_lang')||'zh'}catch(e){return 'zh'}}
  function withLang(path){return path+(path.indexOf('?')>-1?'&':'?')+'lang='+encodeURIComponent(lang())+'&_='+Date.now()}
  function mark(){lastActive=Date.now()}
  ['pointerdown','touchstart','mousedown','keydown','wheel'].forEach(function(ev){window.addEventListener(ev,mark,{passive:true,capture:true})});
  function isHome(){var p=(location.pathname||'').split('/').pop()||'';return !p||/^(index|main|zh|cn|ja|en|ko)\.html$/i.test(p)}
  window.setInterval(function(){
    var now=Date.now(), idle=now-lastActive;
    if(idle>IDLE_LIMIT && !isHome()){location.href=withLang('main.html');return}
    if(now-START>SOFT_RELOAD && idle>60000){try{location.reload()}catch(e){location.href=withLang('main.html')}}
  },60000);
  window.addEventListener('pagehide',function(){
    try{document.querySelectorAll('img').forEach(function(img){if(img.naturalWidth>1200){img.removeAttribute('src');img.removeAttribute('srcset')}})}catch(e){}
  });
  var style=document.createElement('style');
  style.textContent='*:focus{outline:none!important}.hotspot,.hotspot:focus,.hotspot.focus-ring,.back,.back:focus{outline:none!important;box-shadow:none!important;background:transparent!important;-webkit-tap-highlight-color:transparent!important}';
  document.head.appendChild(style);
})();