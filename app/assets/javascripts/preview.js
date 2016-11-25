$(function(){
  var Preview = function Preview(){
    this.$message = $("#page_message");
    this.$previewBox = $(".preview-box");
    this.previewPlaceholder = this.$previewBox.html()

    this.delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();

    this.$message.keyup(this.delay(preview, 1000).bind(this))



    var preview = function(){
      var message = this.$message.val();
      if (message) {
        var finalMessage = Functions.insertImgTags(message, imageAdder.imageMap);
        $.post("/previews", { preview: finalMessage }, displayMessage);
      } else {
        displayMessage(previewPlaceholder);
      };
    };

    var displayMessage = function(text){
      this.$previewBox.html(text);
    };
  };

  window.Preview = Preview;
  window.preview = new Preview();
});
