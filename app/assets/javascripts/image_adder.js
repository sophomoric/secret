$(function(){
  var $message = $("#page_message");
  var $useThisButton = $(".use");
  var $htmlBody = $("html, body");

  var ImageAdder = function($message, $useThisButton, $htmlBody){
    this.$message = $message;
    this.$useThisButton = $useThisButton;

    function initialize() {
      $useThisButton.click(addCurrentImg);
    }

    function addCurrentImg(e) {
      e.preventDefault();
      var imageUrl = Functions.currentImg();
      var newValue = $message.val() + Functions.buildImgTag(imageUrl);
      $message.val(newValue);
      $message.trigger("keyup");
      $htmlBody.animate({
        scrollTop: $message.offset().top
      }, 1000);
    }

    return {
      initialize: initialize
    };
  };

  window.imageAdder = new ImageAdder($message, $useThisButton, $htmlBody);
  window.imageAdder.initialize();
});
