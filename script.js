// Tab navigation
document.querySelectorAll(".nav button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.page).classList.add("active");
  };
});

// Copy usernames
document.querySelectorAll(".profile[data-user]").forEach(p => {
  p.onclick = () => {
    navigator.clipboard.writeText(p.dataset.user);
    alert("Copied: " + p.dataset.user);
  };
});
