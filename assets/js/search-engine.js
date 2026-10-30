window.AGS_SEARCH = {
  search(query, filters = {}) {
    const q = query.toLowerCase().trim();
    return window.AGS_DATA.products.filter(p => {
      if (p.status !== 'active') return false;
      
      // Type filter
      if (filters.type && p.type !== filters.type) return false;
      
      // Category filter
      if (filters.category && p.category.toLowerCase() !== filters.category.toLowerCase()) return false;
      
      // Price filter
      if (filters.priceType && p.priceType !== filters.priceType) return false;

      if (!q) return true;

      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchDev = p.developer.toLowerCase().includes(q);
      const matchTags = p.tags.some(t => t.toLowerCase().includes(q));

      return matchName || matchDesc || matchCat || matchDev || matchTags;
    });
  }
};

