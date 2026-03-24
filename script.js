const openMenu = document.getElementById("openMenu");

const closeMenu = document.getElementById("closeMenu");

const sidebar = document.getElementById("sidebar");

openMenu.addEventListener("click", () => {

    sidebar.classList.add("active");

});


closeMenu.addEventListener("click", () => {

    sidebar.classList.remove("active");

});


window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".header");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

});