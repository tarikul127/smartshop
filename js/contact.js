document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("thankYouMsg").classList.remove("hidden");
  e.target.reset();
});
// Toggle mobile menu
  document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });