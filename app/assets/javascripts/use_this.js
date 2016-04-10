$(function(){
  var $message = $("#page_message");
  var $useThisButton = $(".use");
  $useThisButton.click(addCurrentImg);

  function addCurrentImg(e) {
    e.preventDefault();
    var imageUrl = Functions.currentImg();
    var newValue = $message.val() + Functions.buildImgTag(imageUrl);
    $message.val(newValue);
    $message.trigger("keyup");
    $("html, body").animate({
      scrollTop: $message.offset().top
    }, 1000);
  }
});
