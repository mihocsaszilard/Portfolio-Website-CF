showPoster = document.getElementById("poster");
bodyBg = document.querySelector(".image-hero-area");
projectWrapper = document.querySelectorAll(".project-wrapper");
techStack = document.getElementById("techStack");
contact = document.querySelector(".information");

const addBg = function () {
  const y = window.scrollY;
  if (y >= 1900 && y <= 3500) {
    document.body.style.backgroundColor = "black";
    document.body.style.transition = "1.3s";
    bodyBg.style.opacity = 0;
    bodyBg.style.transition = "1.3s";
  } else if (y >= 1900) {
    bodyBg.style.opacity = 1;
    document.body.style.backgroundColor = "rgba(55, 187, 180, 1)";
  } else if (y < 1900) {
    document.body.style.transition = "1.3s";
    document.body.style.backgroundColor = "transparent";
    bodyBg.style.opacity = 1;
  }
};

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

// const opacityScroll = function () {
//   const y = window.scrollY;
//   if (y >= 2600) {
//     showPoster.className = "visible";
//   } else {
//     showPoster.className = "hidden";
//   }
// };

window.addEventListener("scroll", addBg);
window.addEventListener("scroll", addProjectBorder);
