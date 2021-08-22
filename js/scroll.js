showElement = document.getElementById("placeholder");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 500) {
    showElement.className = "placeholder show"
  } else {
    showElement.className = "placeholder hide"
  }
};

window.addEventListener("scroll", myScrollFunc);