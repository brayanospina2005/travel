
const menuOpen = document.querySelector(".menu-image");
const navMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu")
const overflow = document.querySelector(".body")
menuOpen.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overflow.classList.toggle("hidden");
  
})
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overflow.classList.remove("hidden");

})



 const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});

window.onload = function () {
  let contenedor = document.getElementById('contenedor_carga');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
}