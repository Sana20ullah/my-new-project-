const formList = document.querySelector(".form-list");
const ham = document.querySelector(".hamburger");

ham.addEventListener("click", ()=>{
    formList.classList.toggle("active");
})

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".nav-bar1");

    window.addEventListener("scroll", function () {
        console.log("Scroll position:", window.scrollY); // Debugging to check scroll value
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Add transparency effect
        } else {
            navbar.classList.remove("scrolled"); // Remove transparency
        }
    });
});



