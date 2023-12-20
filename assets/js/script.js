// scrolled
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

// toogler navbar hide
$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});