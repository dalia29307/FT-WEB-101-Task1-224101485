const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.querySelector("span").textContent = isDark ? "Light mode" : "Dark mode";
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const visitorName = document.getElementById("name").value.trim();
  formMessage.textContent = `Thanks, ${visitorName}! Your details have been entered successfully.`;
  contactForm.reset();
});
