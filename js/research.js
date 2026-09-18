document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('[data-research-grid]');
  if (!grid) return;
  const params = new URLSearchParams(location.search);
  const state = { query: params.get('q') || '', category: params.get('category') || '', year: params.get('year') || '', sort: 'newest' };
  const search = document.querySelector('[data-library-search]');
  const category = document.querySelector('[data-filter="category"]');
  const year = document.querySelector('[data-filter="year"]');
  const sort = document.querySelector('[data-filter="sort"]');
  if (search) search.value = state.query;
  populateSelect(category, [...new Set(researches.map((item) => item.category))]);
  populateSelect(year, [...new Set(researches.map((item) => `${item.hijriYear} / ${item.gregorianYear}`))]);
  if (category) category.value = state.category;
  if (year) year.value = state.year;
  [search, category, year, sort].forEach((input) => input?.addEventListener('input', () => { state.query = search?.value || ''; state.category = category?.value || ''; state.year = year?.value || ''; state.sort = sort?.value || 'newest'; render(); }));
  render();

  function render() {
    const normalized = state.query.toLocaleLowerCase('ar');
    let items = researches.filter((item) => {
      const haystack = [item.title, item.titleEnglish, item.author, item.authorEnglish, item.supervisor, item.category, item.hijriYear, item.gregorianYear, ...item.keywords].join(' ').toLocaleLowerCase('ar');
      return (!normalized || haystack.includes(normalized)) && (!state.category || item.category === state.category) && (!state.year || `${item.hijriYear} / ${item.gregorianYear}` === state.year);
    });
    if (state.sort === 'title') items.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
    if (state.sort === 'oldest') items.reverse();
    grid.innerHTML = items.length ? items.map(Mahid.researchCard).join('') : Mahid.emptyState();
    document.querySelector('[data-results-count]').textContent = `${items.length.toLocaleString('ar-EG')} بحوث`;
    requestAnimationFrame(() => document.querySelectorAll('.research-card').forEach((el) => el.classList.add('is-visible')));
  }

  function populateSelect(select, values) { if (!select) return; select.innerHTML += values.map((value) => `<option value="${value}">${value}</option>`).join(''); }
});
