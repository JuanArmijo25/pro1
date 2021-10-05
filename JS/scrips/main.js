window.onload = iniciar;

function iniciar() {
  var navBar = document.getElementById("nav-bar");
  var main = document.getElementsByTagName("main")[0];
  var navButton = document.getElementById("nav-button");

  navButton.addEventListener("click", function () {
    navBar.classList.toggle("nav-bar-hidden");
    main.classList.toggle("main-full");
  });
}