const buttons = document.querySelectorAll(".menu-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");

    setTimeout(() => {
      button.classList.remove("clicked");
    }, 200);
  });
});
