// DARK AND LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const responses = document.getElementById("responses");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    responses.textContent = "Please fill in all the fields.";
    return;
  }

  responses.textContent =
    "Thank you, " + name +
    "! Your message has been received in this demo.";

  contactForm.reset();
});


// SMOOTH SCROLL

document.querySelectorAll('.nav-links a, .hero-buttons a')
  .forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });