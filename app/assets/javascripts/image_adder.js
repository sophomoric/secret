$(function(){
  var $message = $("#page_message");
  var $useThisButton = $(".use");
  var $htmlBody = $("html, body");

  var ImageAdder = function($message, $useThisButton, $htmlBody){
    this.$message = $message;
    this.$useThisButton = $useThisButton;

    function initialize() {
      $useThisButton.click(addCurrentImg);
      this.imageMap = [];
    }

    function addCurrentImg(e) {
      e.preventDefault();
      var imageUrl = counter.currentImg();
      var newValue = $message.val() + addImgShortcut(imageUrl);
      $message.val(newValue);
      $message.trigger("keyup");
      $htmlBody.animate({
        scrollTop: $message.offset().top
      }, 1000);
    }

    function addImgShortcut(imageUrl) {
      imageAdder.imageMap.push(imageUrl);
      return " imgkey" + (imageAdder.imageMap.length -1) + " ";
    }

    return {
      initialize: initialize
    };
  };

  window.imageAdder = new ImageAdder($message, $useThisButton, $htmlBody);
  window.imageAdder.initialize();
});
