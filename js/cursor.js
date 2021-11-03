"use strict";

const cursor = document.querySelector(".custom-cursor");
const lazy = document.querySelector(".lazy-cursor");
const link = document.querySelector(".link");
window.addEventListener("mousemove", mouseMoveHandler);
window.addEventListener("mousedown", mouseDownHandler);
window.addEventListener("mouseup", mouseUpHandler);
link.addEventListener("mouseenter", linkEnterHandler);
link.addEventListener("mouseleave", linkLeaveHandler);

function mouseMoveHandler(e) {
  cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
  lazy.style.left = e.clientX - lazy.offsetWidth / 2 + "px";
  lazy.style.top = e.clientY - lazy.offsetHeight / 2 + "px";
  cursor.style.opacity = 1;
  cursor.style.transform = "scale(1)";
  lazy.style.opacity = 1;
  lazy.style.transform = "scale(1)";

  if (e.target.classList.contains("link")) {
    cursor.style.transform = "scale(3)";
    lazy.style.transform = "scale(8)";
    lazy.style.background = "rgb(55, 187, 180)";

    cursor.style.boxShadow = "0 0 5px rgb(55, 187, 180)";
  } else {
    cursor.style.boxShadow = "none";
    lazy.style.background = "rgba(55, 187, 180, 0.8)";
  }
}

function mouseUpHandler(e) {
  cursor.style.transform = "scale(1)";

  if (e.target.classList.contains("link")) {
    cursor.style.transform = "scale(5)";
    cursor.style.opacity = 0;
  }
}

function mouseDownHandler() {
  cursor.style.transform = "scale(1.9)";
}

function linkEnterHandler() {
  cursor.style.transform = "scale(1.5)";
  cursor.style.border = "2px solid rgb(55, 187, 180)";
}

function linkLeaveHandler() {
  cursor.style.transform = "scale(1)";
  cursor.style.border = "2px solid rgb(55, 187, 180)";
}
