
const menuOpen = document.querySelector(".menu-image");
const navMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu")
const overflow = document.querySelector(".body")
menuOpen.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overflow.classList.toggle("active");
  
})
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
})
