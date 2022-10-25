// DOM elements
const navhambuergerBtn = document.getElementById("openBtn");
const navCloseBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");

// functions
function toggleNavMenu() {
  if (!navMenu) return;
  console.log("clicked");
  navMenu.classList.toggle("translate-x-full");
}

// Event listeners
navhambuergerBtn?.addEventListener("click", toggleNavMenu);
navCloseBtn?.addEventListener("click", toggleNavMenu);
