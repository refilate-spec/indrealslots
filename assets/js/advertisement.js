window.AGS_ADS = {
  renderAd(containerId, format = "banner") {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
      <div class="glass-card border border-dashed border-[var(--border-color)] p-4 rounded-xl text-center text-xs text-[var(--text-secondary)]">
        <span>Sponsored Advertisement</span>
      </div>
    `;
  }
};

