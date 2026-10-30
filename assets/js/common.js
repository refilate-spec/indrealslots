document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Initialization
  const currentTheme = localStorage.getItem("ags_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Render Global Header & Navigation
  renderHeader();
  renderFooter();
  renderMobileNav();
});

function renderHeader() {
  const headerContainer = document.getElementById("global-header");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header class="sticky top-0 z-50 glass-card border-b border-[var(--border-color)] px-4 lg:px-8 py-3.5 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="index.html" class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-lg">AGS</div>
          <span class="font-bold text-lg tracking-tight hidden sm:inline">AGS Platform</span>
        </a>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="index.html" class="hover:text-emerald-400 transition">Home</a>
        <a href="index.html#games" class="hover:text-emerald-400 transition">Games</a>
        <a href="index.html#apps" class="hover:text-emerald-400 transition">Apps</a>
        <a href="index.html#system" class="hover:text-emerald-400 transition">System</a>
      </nav>
      <div class="flex items-center gap-3">
        <button id="theme-toggle" class="p-2.5 rounded-xl glass-card hover:border-emerald-500 transition cursor-pointer" aria-label="Toggle Theme">
          <i class="fa-solid fa-moon text-emerald-400"></i>
        </button>
      </div>
    </header>
  `;

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ags_theme", next);
    const icon = document.querySelector("#theme-toggle i");
    icon.className = next === "dark" ? "fa-solid fa-moon text-emerald-400" : "fa-solid fa-sun text-amber-500";
  });
}

function renderFooter() {
  const footerContainer = document.getElementById("global-footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="glass-card border-t border-[var(--border-color)] mt-20 py-12 px-4 lg:px-8 text-sm">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold">AGS</div>
            <span class="font-bold">AGS Platform</span>
          </div>
          <p class="text-[var(--text-secondary)] leading-relaxed">Independent digital product discovery and information platform for modern software and applications.</p>
        </div>
        <div>
          <h4 class="font-semibold mb-3 text-[var(--text-primary)]">Quick Links</h4>
          <ul class="space-y-2 text-[var(--text-secondary)]">
            <li><a href="index.html" class="hover:text-emerald-400">Home Dashboard</a></li>
            <li><a href="index.html#games" class="hover:text-emerald-400">Games Directory</a></li>
            <li><a href="index.html#apps" class="hover:text-emerald-400">Applications</a></li>
            <li><a href="index.html#system" class="hover:text-emerald-400">System Utilities</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-3 text-[var(--text-primary)]">Legal & Safety</h4>
          <ul class="space-y-2 text-[var(--text-secondary)]">
            <li><a href="#" class="hover:text-emerald-400">Platform Disclaimer</a></li>
            <li><a href="#" class="hover:text-emerald-400">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-emerald-400">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-3 text-[var(--text-primary)]">System Status</h4>
          <div class="flex items-center gap-2 text-emerald-400 font-medium">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            All Engines Operational
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto border-t border-[var(--border-color)] pt-6 text-center text-[var(--text-secondary)]">
        &copy; 2026 AGS Platform. All third-party trademarks belong to their respective owners.
      </div>
    </footer>
  `;
}

function renderMobileNav() {
  const navContainer = document.getElementById("mobile-bottom-nav");
  if (!navContainer) return;

  navContainer.innerHTML = `
    <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-[var(--border-color)] px-6 py-3 flex justify-between items-center">
      <a href="index.html" class="flex flex-col items-center text-xs text-emerald-400"><i class="fa-solid fa-house text-lg"></i><span>Home</span></a>
      <a href="index.html#games" class="flex flex-col items-center text-xs text-[var(--text-secondary)] hover:text-emerald-400"><i class="fa-solid fa-gamepad text-lg"></i><span>Games</span></a>
      <a href="index.html#apps" class="flex flex-col items-center text-xs text-[var(--text-secondary)] hover:text-emerald-400"><i class="fa-solid fa-mobile-screen text-lg"></i><span>Apps</span></a>
      <a href="index.html#system" class="flex flex-col items-center text-xs text-[var(--text-secondary)] hover:text-emerald-400"><i class="fa-solid fa-server text-lg"></i><span>System</span></a>
    </nav>
  `;
}

