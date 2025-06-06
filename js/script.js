function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});
