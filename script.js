// DOM elements
const navBar = document.querySelector("nav");
const navhambuergerBtn = document.getElementById("openBtn");
const navCloseBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");

// variables & constants
let currentScrollDistance = 0;
const navbarClasses = ["drop-shadow-xl", "sticky", "top-0"];

// functions

/**
 * @desc
 This function hides/shows the nav menu on mobile and tablet views.
 To hide the nav menu : the translate-x-full tailwind class is added to the menu
 To show the nav menu : the translate-x-full tailwind class is removed to the menu
 Translate-x-full as the name suggests performs the "transform : translateX(100%)"
 Removing the transform class resets the nav-menu to its default X position i.e 0%
 */
function toggleNavMenu() {
  if (!navMenu) return;
  navMenu.classList.toggle("translate-x-full");
}

/**
 * @desc the navbar isn't made sticky by default which promotes a good UX. However, when
 * the user has scrolled to the middle or the end of the page -- the user might want to access the nav menu
 * to do so, when the page has been scrolled, the user can scroll up once to see the navbar which again disappears
 * on scrolling down
 */
function toggleNavBarVisibility() {
  // prevent running this function if device width is less than the size of tablet (768px)
  const { scrollY, innerWidth } = window;
  const isNavMenuOpen = !navMenu.classList.contains("translate-x-full");
  if (innerWidth < 768 && isNavMenuOpen) {
    return;
  }
  // variable to detect whether user scrolled down or up the page
  const scrollDirection = currentScrollDistance > scrollY ? "up" : "down";
  currentScrollDistance = scrollY;

  if (scrollDirection === "down" || currentScrollDistance === 0) {
    navBar?.classList.remove(...navbarClasses);
    return;
  }
  navBar?.classList.add(...navbarClasses);
}

// Event listeners
navhambuergerBtn?.addEventListener("click", toggleNavMenu);
navCloseBtn?.addEventListener("click", toggleNavMenu);
document?.addEventListener("scroll", toggleNavBarVisibility);
