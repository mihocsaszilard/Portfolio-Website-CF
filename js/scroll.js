showPoster = document.getElementById("poster");
mouse = document.getElementById("mouse");
bodyBg = document.querySelector(".image-hero-area");
projectWrapper = document.querySelectorAll(".project-wrapper");
techStack = document.getElementById("techStack");
contact = document.querySelector(".information");

// const addBg = function () {
//   const y = window.scrollY;
//   if (y >= 1900 && y <= 3500) {
//     document.body.style.backgroundColor = "black";
//     document.body.style.transition = "1.3s";
//     bodyBg.style.opacity = 0;
//     bodyBg.style.transition = "1.3s";
//   } else if (y >= 1900) {
//     bodyBg.style.opacity = 1;
//     document.body.style.backgroundColor = "#797979";
//   } else if (y < 1900) {
//     document.body.style.transition = "1.3s";
//     document.body.style.backgroundColor = "transparent";
//     bodyBg.style.opacity = 1;
//   }
// };

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
  } else if (y <= 2999) {
    mouse.className = "visible";
  }
};

window.addEventListener("scroll", addBg);
window.addEventListener("scroll", opacityScroll);
window.addEventListener("scroll", addProjectBorder);
window.addEventListener("scroll", hideMouse);
