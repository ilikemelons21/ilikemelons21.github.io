// NAVIGATION WITH ANIMATION
const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});

// COPY USERNAMES
document.querySelectorAll(".profile[data-user]").forEach(p => {
  p.addEventListener("click", () => {
    navigator.clipboard.writeText(p.dataset.user);
    alert("Kopirano: " + p.dataset.user);
  });
});
