(function(){
  function Editor(input, preview) {
    this.update = function () {
      preview.innerHTML = markdown.toHTML(input.value);
    };
  }
  var $ = function (id) { return document.getElementById(id); };
  window.editor = new Editor($("text-input"), $("preview"));
})();
