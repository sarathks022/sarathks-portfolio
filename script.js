// Optional dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.textContent = "🌙 Toggle Dark Mode";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "10px";
  toggle.style.border = "none";
  toggle.style.borderRadius = "5px";
  toggle.style.backgroundColor = "#333";
  toggle.style.color = "#fff";
  toggle.style.cursor = "pointer";

  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});