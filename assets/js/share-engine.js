
window.AGS_SHARE = {
  shareProduct(id) {
    const product = window.AGS_DATA.products.find(p => p.id === id);
    if (!product) return;

    const url = `${window.location.origin}/view.html?id=${id}`;
    
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert("Product link copied to clipboard!");
      });
    }
  }
};
