document.getElementById("activate").addEventListener("click", () => {
  document.querySelectorAll(".quarter").forEach(q => {
    q.classList.remove("hidden");
  });
});
