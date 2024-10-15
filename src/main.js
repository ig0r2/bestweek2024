// MOBILE MENU NAVBAR
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

// OBSERVER
// Observe elements to show them when they are in the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("obs-hidden");
        setTimeout(() => {
          entry.target.classList.remove(
            ...Array.from(entry.target.classList).filter((className) =>
              className.startsWith("obs-"),
            ),
          );
        }, 3000);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  },
);

document.querySelectorAll(".obs-hidden").forEach((el) => observer.observe(el));
