function loadHTML(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML:", error));
}

loadHTML("header", "partials/header.html");
loadHTML("modal", "partials/modal.html");
loadHTML("hero", "partials/hero.html");
loadHTML("about", "partials/about.html");
loadHTML("game", "partials/game.html");
loadHTML("advantages", "partials/advantages.html");
loadHTML("player", "partials/player.html");
loadHTML("gallery", "partials/gallery.html");
loadHTML("footer", "partials/footer.html");
