// Welcome Message
window.onload = function () {
    alert("Welcome to Arav Raj's Portfolio Website!");
};

// Resume Button Click Event
const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Resume download will be available soon!");
});

// Change Hero Title using DOM Manipulation
const heroTitle = document.querySelector(".hero h3");

heroTitle.innerHTML = "Aspiring Software Development Engineer 🚀";

// Scroll-to-Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

// Scroll to Top
topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});