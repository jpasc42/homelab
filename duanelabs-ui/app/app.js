(() => {
  const pages = [...document.querySelectorAll('.page')];
  const navItems = [...document.querySelectorAll('.nav-item')];
  const title = document.getElementById('topbarPage');
  const sidebar = document.getElementById('sidebar');

  function navigate() {
    const requested = (location.hash || '#dashboard').slice(1);
    const pageId = pages.some(p => p.id === `page-${requested}`) ? requested : 'dashboard';
    pages.forEach(p => p.classList.toggle('active', p.id === `page-${pageId}`));
    navItems.forEach(item => {
      const active = item.dataset.page === pageId;
      item.classList.toggle('active', active);
      if (active) item.setAttribute('aria-current', 'page');
      else item.removeAttribute('aria-current');
    });
    title.textContent = pages.find(p => p.id === `page-${pageId}`)?.dataset.title || 'Dashboard';
    document.title = `${title.textContent} · DuaneLabs`;
    sidebar.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
    document.getElementById('clockDate').textContent = date;
    document.getElementById('clockTime').textContent = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('todayPill').textContent = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  window.addEventListener('hashchange', navigate);
  document.getElementById('mobileMenu').addEventListener('click', () => sidebar.classList.toggle('open'));
  document.getElementById('refreshBtn').addEventListener('click', () => {
    updateClock();
    const btn = document.getElementById('refreshBtn');
    btn.innerHTML = '<span>✓</span> UI refreshed';
    setTimeout(() => { btn.innerHTML = '<span>↻</span> Refresh UI'; }, 1200);
  });
  document.querySelectorAll('[data-goto]').forEach(btn => btn.addEventListener('click', () => { location.hash = btn.dataset.goto; }));
  updateClock();
  setInterval(updateClock, 30000);
  navigate();
})();
