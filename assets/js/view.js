document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const product = window.AGS_DATA.products.find(p => p.id === id);
  const container = document.getElementById("product-view-container");

  if (!product) {
    container.innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-2xl font-bold mb-2">Product Not Found</h2>
        <p class="text-[var(--text-secondary)] mb-6">The requested product ID does not exist or has been removed.</p>
        <a href="index.html" class="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold">Return Home</a>
      </div>
    `;
    return;
  }

  window.AGS_INTERACTION.trackView(product.id);

  container.innerHTML = `
    <!-- Breadcrumb -->
    <nav class="text-xs text-[var(--text-secondary)] flex items-center gap-2">
      <a href="index.html" class="hover:underline">Home</a> / 
      <span>${product.category}</span> / 
      <span class="text-[var(--text-primary)]">${product.name}</span>
    </nav>

    <!-- Hero Header -->
    <div class="glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
      <div class="flex items-center gap-5">
        <img src="${product.logo}" alt="${product.name}" class="w-24 h-24 rounded-2xl object-cover shadow-lg">
        <div>
          <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider">${product.category} &bull; ${product.subcategory}</span>
          <h1 class="text-2xl md:text-3xl font-black mt-1 mb-2">${product.name}</h1>
          <div class="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
            <span><i class="fa-solid fa-star text-amber-400"></i> ${product.rating} Rating</span>
            <span>&bull;</span>
            <span>${product.downloads} Downloads</span>
            <span>&bull;</span>
            <span>${product.size}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3 w-full md:w-auto">
        <a href="${product.externalUrl}" target="_blank" rel="nofollow" class="flex-1 md:flex-none px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold text-center hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20">Get External Link</a>
        <button onclick="window.AGS_SHARE.shareProduct('${product.id}')" class="p-3.5 rounded-xl glass-card hover:border-emerald-500 transition" aria-label="Share">
          <i class="fa-solid fa-share-nodes"></i>
        </button>
      </div>
    </div>

    <!-- Detailed Information & Requirements -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-2 space-y-6">
        <div class="glass-card p-6 rounded-2xl space-y-4">
          <h2 class="text-lg font-bold">About ${product.name}</h2>
          <p class="text-[var(--text-secondary)] leading-relaxed">${product.fullDescription}</p>
        </div>

        <div class="glass-card p-6 rounded-2xl space-y-4">
          <h2 class="text-lg font-bold">Key Features</h2>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${product.features.map(f => `<li class="flex items-center gap-2 text-sm text-[var(--text-secondary)]"><i class="fa-solid fa-check text-emerald-400"></i> ${f}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="space-y-6">
        <div class="glass-card p-6 rounded-2xl space-y-4">
          <h2 class="text-base font-bold">System Requirements</h2>
          <ul class="space-y-3 text-sm">
            <li class="flex justify-between border-b border-[var(--border-color)] pb-2"><span class="text-[var(--text-secondary)]">Version</span><span class="font-medium">${product.version}</span></li>
            <li class="flex justify-between border-b border-[var(--border-color)] pb-2"><span class="text-[var(--text-secondary)]">Minimum OS</span><span class="font-medium">${product.minOS}</span></li>
            <li class="flex justify-between border-b border-[var(--border-color)] pb-2"><span class="text-[var(--text-secondary)]">RAM Required</span><span class="font-medium">${product.minRAM}</span></li>
            <li class="flex justify-between"><span class="text-[var(--text-secondary)]">Developer</span><span class="font-medium">${product.developer}</span></li>
          </ul>
        </div>

        <div class="glass-card p-6 rounded-2xl border-l-4 border-amber-500 text-xs text-[var(--text-secondary)] space-y-2">
          <h3 class="font-bold text-[var(--text-primary)]">Platform Disclaimer</h3>
          <p>This platform operates as an independent discovery directory. External files and links belong to their respective creators.</p>
        </div>
      </div>
    </div>
  `;
});

