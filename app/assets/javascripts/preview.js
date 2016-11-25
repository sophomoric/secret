$(function(){
  var Preview = function Preview() {
    this.$message = $("#page_message");
    this.$previewBox = $(".preview-box");
    this.previewPlaceholder = this.$previewBox.html();
  };

  Preview.prototype = {
    createPreview: function createPreview(){
      var message = this.$message.val();
      if (message) {
        $.post(
          "/previews",
          { preview: this.finalMessage(message) },
          this.displayMessage.bind(this)
        );
      } else {
        this.displayMessage.bind(this)(this.previewPlaceholder);
      }
    },
    finalMessage: function(message){
      return Functions.insertImgTags(message, imageAdder.imageMap);
    },
    displayMessage: function(text){
      this.$previewBox.html(text);
    }
  };

  window.Preview = Preview;
  window.preview = new Preview();
});
