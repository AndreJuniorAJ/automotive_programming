const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active")

});