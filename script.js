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

/* ===========================
   Contact Form Validation
=========================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill in all fields.");

        return;

    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        alert("Please enter a valid email address.");

        return;

    }

    alert("Message sent successfully! Thank you for contacting me.");

    contactForm.reset();

});