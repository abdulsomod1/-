document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = 'ar';
  document.documentElement.dir = 'rtl';
  applyTheme();
  renderShell();
  bindShellEvents();
  renderLatestResearch();
  renderHomepageLists();
  renderCategoriesPage();
  renderYearArchive();
  revealOnScroll();
  animateCounters();
});

function applyTheme() {
  const saved = localStorage.getItem('mahid-theme') || 'light';
  document.documentElement.dataset.theme = saved;
}

function renderShell() {
  const page = document.body.dataset.page || '';
  document.querySelectorAll('[data-site-logo]').forEach((image) => {
    image.src = SITE_CONFIG.logo;
    image.alt = `شعار ${SITE_CONFIG.instituteArabic}`;
    image.addEventListener('error', () => {
      image.hidden = true;
      image.parentElement.classList.add('logo-fallback');
    }, { once: true });
  });
  document.querySelectorAll('[data-site-name]').forEach((el) => { el.textContent = SITE_CONFIG.instituteArabic; });
  document.querySelectorAll('[data-academic-year]').forEach((el) => { el.textContent = SITE_CONFIG.academicYear; });
  document.querySelectorAll('[data-site-date]').forEach((el) => { el.textContent = SITE_CONFIG.date; });
  document.querySelectorAll('[data-current-page]').forEach((el) => { el.textContent = page; });
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => { button.setAttribute('aria-label', document.documentElement.dataset.theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'); });
}

function bindShellEvents() {
  document.querySelector('[data-menu-toggle]')?.addEventListener('click', () => {
    const nav = document.querySelector('[data-mobile-nav]');
    const open = nav?.classList.toggle('is-open');
    document.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => button.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('mahid-theme', theme);
    button.setAttribute('aria-label', theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
  }));
  document.querySelector('[data-global-search]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get('q')?.toString().trim();
    window.location.href = `research.html${query ? `?q=${encodeURIComponent(query)}` : ''}`;
  });
}

function renderLatestResearch() {
  const target = document.querySelector('[data-latest-research]');
  if (target) target.innerHTML = researches.slice(0, 3).map(researchCard).join('');
}

function renderHomepageLists() {
  const categoryTarget = document.querySelector('[data-home-categories]');
  if (categoryTarget) categoryTarget.innerHTML = categories.slice(0, 6).map((category, index) => `<a class="category-tile" href="research.html?category=${encodeURIComponent(category)}"><span>0${index + 1}</span><strong>${category}</strong><small>استكشف البحوث ←</small></a>`).join('');
  const yearTarget = document.querySelector('[data-home-years]');
  if (yearTarget) yearTarget.innerHTML = years.slice(0, 4).map((year, index) => `<a class="year-item ${year.current ? 'current' : ''}" href="research.html?year=${encodeURIComponent(`${year.hijri} / ${year.gregorian}`)}"><span>0${index + 1}</span><strong>${year.hijri} <i>/</i> ${year.gregorian}</strong>${year.current ? '<small>العام الحالي</small>' : ''}</a>`).join('');
  const graduandTarget = document.querySelector('[data-home-graduands]');
  if (graduandTarget) graduandTarget.innerHTML = graduands.map((person) => `<a href="graduands.html" class="mini-person"><span class="mini-avatar">${person.id}</span><strong>${person.arabicName}</strong><small>${person.englishName}</small></a>`).join('');
}

function renderCategoriesPage() {
  const target = document.querySelector('[data-category-grid]');
  if (!target) return;

  const rows = categories.map((category, index) => {
    const count = researches.filter((item) => item.category === category).length;
    return `<a class="category-card" href="research.html?category=${encodeURIComponent(category)}">
      <span class="category-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="category-symbol">✦</span>
      <h2>${category}</h2>
      <p>${count} بحوث <small>${count ? 'قائمة حاليًا' : 'لا توجد بحوث'}</small></p>
      <b>تصفح التصنيف ←</b>
    </a>`;
  }).join('');

  target.innerHTML = rows;
}

function renderYearArchive() {
  const target = document.querySelector('[data-year-archive]');
  if (!target) return;
  target.innerHTML = years.map((year, index) => `<a class="archive-year ${year.current ? 'current' : ''}" href="research.html?year=${encodeURIComponent(`${year.hijri} / ${year.gregorian}`)}"><span class="archive-index">${String(index + 1).padStart(2, '0')}</span><div><small>${year.current ? 'العام الحالي' : 'أرشيف تجريبي'}</small><h2>${year.hijri} <i>/</i> ${year.gregorian}</h2><p>تصفح البحوث المرتبطة بهذا العام <b>←</b></p></div><span class="archive-arrow">↗</span></a>`).join('');
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const timer = setInterval(() => { current = Math.min(target, current + step); counter.textContent = current.toLocaleString('ar-EG'); if (current === target) clearInterval(timer); }, 25);
      observer.disconnect();
    });
    observer.observe(counter);
  });
}

function researchCard(research) {
  return `<article class="research-card reveal"><div class="cover-wrap"><img src="${research.cover}" alt="غلاف تجريبي: ${research.title}" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add('cover-missing')"><span class="demo-ribbon">تجريبي</span></div><div class="card-body"><span class="eyebrow">${research.category}</span><h3>${research.title}</h3><p class="meta-line"><span>الباحث</span>${research.author}</p><p class="meta-line"><span>إشراف</span>${research.supervisor}</p><p class="year-line">${research.hijriYear} <i></i> ${research.gregorianYear}</p><div class="card-actions"><a class="button button-primary" href="research-details.html?id=${research.id}">عرض البحث</a>${research.pdf ? `<a class="button button-ghost" href="${research.pdf}" download>تحميل PDF</a>` : '<span class="pdf-note">PDF غير متوفر حالياً</span>'}</div></div></article>`;
}

function emptyState(message = 'لم يتم العثور على بحوث مطابقة لبحثك.') { return `<div class="empty-state"><span class="empty-icon">⌕</span><h3>${message}</h3><p>جرّب تغيير كلمات البحث أو الفلاتر.</p></div>`; }

window.Mahid = { researchCard, emptyState };
