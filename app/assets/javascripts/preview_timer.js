$(function(){
  var $message = $("#page_message");

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  }());

  var preview = function(){
    window.preview.createPreview();
  };

  $message.keyup(function(){
    window.preview.loading();
    delay(preview, 1000);
  });
});
