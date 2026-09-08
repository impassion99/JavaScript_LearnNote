document.getElementById("btn").addEventListener("click", () => {
  alert("Hello World from Chrome Extension!");
});

document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});