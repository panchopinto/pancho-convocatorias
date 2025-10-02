
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    const el=document.querySelector(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

// Theme toggle (persistente)
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if(saved){ root.setAttribute('data-theme', saved); }
  function iconFor(theme){ return theme==='light' ? '☀️' : '🌙'; }
  function setTheme(next){
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if(btn) btn.textContent = iconFor(next);
  }
  if(btn){
    btn.textContent = iconFor(root.getAttribute('data-theme')||'dark');
    btn.addEventListener('click', ()=>{
      const cur = root.getAttribute('data-theme')||'dark';
      setTheme(cur==='dark' ? 'light' : 'dark');
    });
  }
})();
