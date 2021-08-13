// SHOW HEADER SECTION
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN WE CLICKED NAV-MENU
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");

function linkActive() {
  // link active
  navLink.forEach((e) => e.classList.remove("link-active"));
  this.classList.add("link-active");

  // remove header menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkActive));

// FOOD MENU FILTER
const sectionItem = document.querySelectorAll(".special__item");

function foodActive() {
  sectionItem.forEach((e) => e.classList.remove("food-active"));
  this.classList.add("food-active");
}
sectionItem.forEach((e) => e.addEventListener("click", foodActive));

// ADD BACKGROUND HEADER
const scrollY = window.pageYOffset;
function scrollActive() {
  const header = document.getElementById("header");

  this.scrollY >= 100
    ? header.classList.add("scroll-active")
    : header.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollActive);

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: "2000",
  reset: true,
});

// Home Animation
sr.reveal(".home__title");
sr.reveal(".home__text", { delay: 200 });
sr.reveal(".home__button", { delay: 400 });
sr.reveal(".home__img", { delay: 600, origin: "right" });

// Special Animation
sr.reveal(".special__subtitle");
sr.reveal(".special__title", { delay: 200 });
sr.reveal(".special__item", { delay: 400, interval: 200 });
sr.reveal(".special__card", { delay: 600, interval: 200, origin: "bottom" });

// Testimonial Animation
sr.reveal(".testimonial__text");
sr.reveal(".testimonial__user-img", { delay: 200, origin: "left" });
sr.reveal(".testimonial__user-name", { delay: 400, origin: "right" });
sr.reveal(".testimonial__user-profession", { delay: 600, origin: "right" });

// Statistic Animation
sr.reveal(".statistic__item", { interval: 200 });

// App Animation
sr.reveal(".app__img", { origin: "left" });
sr.reveal(".app__title", { delay: 200 });
sr.reveal(".app__text", { delay: 400 });
sr.reveal(".app__download", { delay: 600 });
