// Mobile Menu Navbar
const menu = document.querySelector("#mobile-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
// Toggle Mobile Menu
document.querySelector("#menu-toggle").addEventListener("click", function () {
  menu.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
});
// Close Mobile Menu on Link click
menu.querySelectorAll("a").forEach((e) =>
  e.addEventListener("click", function () {
    menu.classList.remove("open");
    hamburgerIcon.classList.remove("open");
  }),
);
