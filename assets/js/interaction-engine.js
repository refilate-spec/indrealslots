window.AGS_INTERACTION = {
  getFavorites() {
    return JSON.parse(localStorage.getItem("ags_favorites") || "[]");
  },
  toggleFavorite(id) {
    let favs = this.getFavorites();
    if (favs.includes(id)) {
      favs = favs.filter(item => item !== id);
    } else {
      favs.push(id);
    }
    localStorage.setItem("ags_favorites", JSON.stringify(favs));
    return favs.includes(id);
  },
  trackView(id) {
    let viewed = JSON.parse(localStorage.getItem("ags_recently_viewed") || "[]");
    viewed = viewed.filter(item => item !== id);
    viewed.unshift(id);
    if (viewed > 15) viewed.pop();
    localStorage.setItem("ags_recently_viewed", JSON.stringify(viewed));
  }
};

