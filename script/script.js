function hamburger() {
  var ham_icon = document.getElementById("toggle");
  if (ham_icon.classList.contains("fa-bars")) {
    ham_icon.classList = ["fa-solid fa-x"];
    var tag = document.getElementById('menu');
    tag.style.left = "-35px";
    tag.style.transition = "all .5s ease";
    var logo = document.getElementById('logo');
    logo.style.justifyContent = 'flex-end';
    logo.style.transition = "all 2s ease";
  } else if (ham_icon.classList.contains("fa-x")) {
    ham_icon.classList = ["fa-solid fa-bars"];
    var tag = document.getElementById('menu');
    tag.style.left = "-100%";
    tag.style.transition = "all .5s ease";
    var logo = document.getElementById('logo');
    logo.style.justifyContent = 'center';
    logo.style.transition = "all 2s ease";
    location.reload();
  }
}

