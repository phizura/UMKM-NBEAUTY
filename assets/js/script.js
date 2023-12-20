document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

const navlinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarText");
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {
  toggle: false,
});
navlinks.forEach((e) => {
  e.addEventListener("click", () => bsCollapse.toggle());
});
