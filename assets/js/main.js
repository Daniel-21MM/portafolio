// Obtener elementos del DOM
const navMenu = document.querySelector("#nav-menu");
const toggleMenu = document.querySelector("#nav-toggle");
const closeMenu = document.querySelector("#nav-close");
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");

// Funciones de manejo de eventos
const toggleNavMenu = () => navMenu.classList.toggle("show");
const closeNavMenu = () => navMenu.classList.remove("show");
const activateLink = () => {
  navLinks.forEach((link) => link.classList.remove("active"));
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*="${sectionId}"]`)
        .classList.add("active");
    }
  });
};

// Agregar listeners
toggleMenu.addEventListener("click", toggleNavMenu);
closeMenu.addEventListener("click", closeNavMenu);
navLinks.forEach((link) => link.addEventListener("click", closeNavMenu));
window.addEventListener("scroll", activateLink);
