// Toogle Navbar Menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Navbar Scroll Sections Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when scrolling
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .project-box, .contact form ", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Type Writing
const typed = new Typed(".multiple-text", {
  strings: ["Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

// Read More About Me
document.getElementById("read-more-btn").addEventListener("click", function (event) {
  event.preventDefault();
  var extraContent = document.getElementById("extra-content");
  if (extraContent.classList.contains("hidden")) {
    extraContent.classList.remove("hidden");
    this.textContent = "Read Less";
  } else {
    extraContent.classList.add("hidden");
    this.textContent = "Read More";
  }
});
