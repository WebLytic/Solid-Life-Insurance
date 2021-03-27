const menuBar = document.querySelector(".menu");
const ul = document.querySelector(".ul");
const closeMenu = document.querySelector(".close");

menuBar.addEventListener("click", function () {
    ul.classList.add("show-ul");
    menuBar.classList.add("remove-menu");
    closeMenu.classList.add("close-show");
});

closeMenu.addEventListener("click", function () {
    ul.classList.remove("show-ul");
    closeMenu.classList.remove("close-show");
    menuBar.classList.remove("remove-menu")
});