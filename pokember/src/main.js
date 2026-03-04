import "./style.css";

const init = function () {
  window.addEventListener("scroll", updateNavBar);
  updateNavBar();
};

const updateNavBar = function () {
  const atTop = window.scrollY === 0;
  const navBar = document.getElementById('navBar');
  const buttons = Array.from(document.getElementsByClassName("navbar-link"));
  const logo = document.getElementById("navLogo");
  if (atTop) {
    navBar.style.backgroundColor = "transparent";
    buttons.forEach(button => {
      button.classList.remove("navbar-link-white");
      button.classList.add("navbar-link-black");
    });
    logo.src = "./public/images/logo-black.png"
  } else {
    navBar.style.backgroundColor = "rgb(0, 0, 0)";
    buttons.forEach(button => {
      button.classList.remove("navbar-link-black");
      button.classList.add("navbar-link-white");
    });
    logo.src = "./public/images/logo-white.png"
  };
};

document.addEventListener("DOMContentLoaded", init);