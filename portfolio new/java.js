// Scroll animation
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});










