$(function(){
  var UrlKey = function() {
    this.$input = $("#page_url_key");
    this.$previewLabel = $(".page_url_key label");
    this.placeholder = this.$previewLabel.text();

    this.modifyLabelText = function modifyLabelText(currentText, key) {
      var split = currentText.split("/");
      var oldText = split.slice(0, split.length - 1);
      return oldText.join("/") + "/" + encodeURI(key);
    };

    this.$input.keyup(function(){
      var currentInput = this.$input.val();
      var labelText = this.modifyLabelText(this.placeholder, currentInput);
      this.$previewLabel.text(labelText);
    });
  };

  window.UrlKey = UrlKey;
  window.urlKey = new UrlKey();
});
