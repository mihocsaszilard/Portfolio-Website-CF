  document.addEventListener("mousemove", parallax);

  function parallax(e){
    document.querySelectorAll(".parallax").forEach(function(move){
      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;
      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }

  showElement = document.getElementById("placeholder");

  var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 500) {
      showElement.className = "placeholder show"
    } else {
      showElement.className = "placeholder hide"
    }
  };

  window.addEventListener("scroll", myScrollFunc);
