document.addEventListener("DOMContentLoaded", function(event) {
  window.history.pushState("", "", "/");

  var redirect = function() {
    window.location = "";
  };

  window.setTimeout(redirect, window.duration);
});
