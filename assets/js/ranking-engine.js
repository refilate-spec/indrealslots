window.AGS_RANKING = {
  calculateScore(product) {
    const pop = product.popularityScore || 50;
    const qual = product.qualityScore || 50;
    const rat = (product.rating || 4.0) * 20; // normalize to 100
    const rec = product.recencyScore || 70;
    const ed = product.editorialScore || 80;
    const eng = product.engagementScore || 75;

    return (pop * 0.25) + (qual * 0.20) + (rat * 0.20) + (rec * 0.15) + (ed * 0.10) + (eng * 0.10);
  },

  getTopThree(type = null) {
    let list = window.AGS_DATA.products.filter(p => !p.rankingExcluded);
    if (type) {
      list = list.filter(p => p.type === type);
    }
    list.sort((a, b) => this.calculateScore(b) - this.calculateScore(a));
    return list.slice(0, 3);
  }
};

