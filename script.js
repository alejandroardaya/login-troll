document.getElementById("login-button").addEventListener("click", () => {
  const flash = document.getElementById("flash");
  flash.style.opacity = 1;

  setTimeout(() => {
    flash.style.opacity = 0;
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("message-screen").classList.remove("hidden");
  }, 500);
});
