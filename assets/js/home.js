document.addEventListener("DOMContentLoaded", () => {
  renderAnnouncements();
  renderRankings();
  renderSectionGrids();
  setupSearchListener();
});

function renderAnnouncements() {
  const banner = document.getElementById("announcement-banner");
  if (!window.AGS_DATA.announcements.length) {
    if (banner) banner.style.display = "none";
    return;
  }
  const ann = window.AGS_DATA.announcements[0];
  banner.innerHTML = `<a href="${ann.link}" class="hover:underline">${ann.text}</a>`;
}

function renderRankings() {
  const container = document.getElementById("top-rankings-grid");
  if (!container) return;

  const top3 = window.AGS_RANKING.getTopThree();
  container.innerHTML = top3.map((p, index) => `
    <div class="glass-card p-5 rounded-2xl relative flex items-center gap-4">
      <div class="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm rank-badge-${index + 1}">
        #${index + 1}
      </div>
      <img src="${p.logo}" alt="${p.name}" class="w-16 h-16 rounded-xl object-cover">
      <div>
        <span class="text-xs font-semibold text-emerald-400 uppercase">${p.category}</span>
        <h3 class="font-bold text-base"><a href="view.html?id=${p.id}" class="hover:underline">${p.name}</a></h3>
        <div class="flex items-center gap-1 text-xs text-[var(--text-secondary)] mt-1">
          <i class="fa-solid fa-star text-amber-400"></i> ${p.rating} &bull; ${p.downloads}
        </div>
      </div>
    </div>
  `).join('');
}

function renderSectionGrids() {
  renderGridForType("game", "games-grid");
  renderGridForType("app", "apps-grid");
  renderGridForType("system", "system-grid");
}

function renderGridForType(type, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = window.AGS_DATA.products.filter(p => p.type === type);
  container.innerHTML = items.map(p => createProductCard(p)).join('');
}

function createProductCard(p) {
  return `
    <div class="glass-card p-5 rounded-2xl flex flex-col justify-between hover:border-emerald-500 transition duration-300">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <img src="${p.logo}" alt="${p.name}" class="w-14 h-14 rounded-xl object-cover">
          <div>
            <h3 class="font-bold text-base leading-snug"><a href="view.html?id=${p.id}" class="hover:text-emerald-400 transition">${p.name}</a></h3>
            <span class="text-xs text-[var(--text-secondary)]">${p.category}</span>
          </div>
        </div>
        <p class="text-xs text-[var(--text-secondary)] line-clamp-2 mb-4">${p.description}</p>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
        <div class="flex items-center gap-1 text-xs font-medium">
          <i class="fa-solid fa-star text-amber-400"></i> ${p.rating}
        </div>
        <a href="view.html?id=${p.id}" class="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition">View Details</a>
      </div>
    </div>
  `;
}

function setupSearchListener() {
  const input = document.getElementById("main-search-input");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const q = e.target.value;
    const results = window.AGS_SEARCH.search(q);
    // Dynamic rendering of filtered search results can be attached here
  });
}

