document.addEventListener("DOMContentLoaded", function(event) {
  var redirect = function() {
    window.history.pushState("", "", "/");
    window.location = "";
  };

  window.setTimeout(redirect, page.duration);
});
