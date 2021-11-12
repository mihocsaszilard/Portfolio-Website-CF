showPoster = document.getElementById("poster");
mouse = document.getElementById("mouse");
bodyBg = document.querySelector(".image-hero-area");
projectWrapper = document.querySelectorAll(".project-wrapper");
techStack = document.getElementById("techStack");
contact = document.querySelector(".information");

const addProjectBorder = function () {
  const y = window.scrollY;
  projectWrapper.forEach(function (element) {
    if (y >= 1900 && y <= 3500) {
      element.style.boxShadow = "5px 5px 15px rgba(55, 187, 180, 0.3)";
      element.style.transition = "0.3s";
    } else {
      element.style.boxShadow = "none";
      element.style.transition = "0.3s";
    }
  });
};

const opacityScroll = function () {
  const y = window.scrollY;
  if (y <= 500 || y > 1400) {
    showPoster.className = "hidden";
  } else if (y > 500) {
    showPoster.className = "visible";
  }
};

const hideMouse = function () {
  const y = window.scrollY;
  if (y >= 4000) {
    mouse.className = "hidden";
  } else if (y <= 3999) {
    mouse.className = "visible";
  }
};

window.addEventListener("scroll", opacityScroll);
window.addEventListener("scroll", addProjectBorder);
window.addEventListener("scroll", hideMouse);
