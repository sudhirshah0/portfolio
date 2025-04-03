
var typed= new Typed(".text", {
    strings:["FullStack Developer" , "Graphic Designer","Python Developer" ,"Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme preference in Local Storage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = " 🌝 ";  // Sun icon for Light Mode
}

// Event Listener for Button Click
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌝";  // Light mode icon
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌚";  // Dark mode icon
    }
});

// <.......project section......>
// document.addEventListener("DOMContentLoaded", function() {
//     const cards = document.querySelectorAll(".project-card");
//     cards.forEach((card, index) => {
//         card.style.animationDelay = `${index * 0.2}s`;
//     });
// });


// .....menu icon code..... 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

windiow.onscroll = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.remove('active');
}
//.... get contact information ....

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
