$(function(){
  var $message = $("#page_message");
  var $previewBox = $(".preview-box");
  var previewPlaceholder = $previewBox.html()

  $message.keyup(function(){
    delay(preview, 1000);
  })

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  var preview = function(){
    var message = $message.val();
    if (message) {
      $.post("/previews", { preview: message }, displayMessage);
    } else {
      displayMessage(previewPlaceholder);
    };
  };

  var displayMessage = function(text){
    $previewBox.html(text);
  };
});
