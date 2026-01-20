const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

function openUGProject() {
  window.open(
    "https://github.com/sushmitha9902/e-commerce", // replace with UG project repo if different
    "_blank"
  );
}
