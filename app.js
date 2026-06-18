const messengerUrl = "https://m.me/105121654214469";

document.querySelectorAll("[data-messenger]").forEach((link) => {
  link.setAttribute("href", messengerUrl);
});

const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll("[data-slide-dot]")];
let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;
  currentSlide = index % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
}

if (slides.length) {
  dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
  setInterval(() => showSlide(currentSlide + 1), 5200);
}

const countryPopup = document.querySelector("[data-country-popup]");
const countryButtons = document.querySelectorAll("[data-country]");

if (countryPopup && !localStorage.getItem("missvillCountry")) {
  window.setTimeout(() => countryPopup.classList.add("show"), 500);
}

countryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem("missvillCountry", button.dataset.country);
    countryPopup?.classList.remove("show");
  });
});
