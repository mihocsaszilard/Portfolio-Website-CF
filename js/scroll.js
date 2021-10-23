showElement = document.getElementById("placeholder");
showPoster = document.getElementById("poster");

// var myScrollFunc = function () {
//   var y = window.scrollY;
//   if (y >= 1400) {
//     showElement.className = "placeholder show";
//   } else {
//     showElement.className = "placeholder hide";
//   }
// };

var opacityScroll = function () {
  var y = window.scrollY;
  if (y >= 2600) {
    showPoster.className = "visible";
  } else {
    showPoster.className = "hidden";
  }
};

// window.addEventListener("scroll", myScrollFunc);
window.addEventListener("scroll", opacityScroll);
