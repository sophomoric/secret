$(function(){
  var $pageMessage = $("#page_message");

  $("#new_page").submit(function(){
    var messageText = $pageMessage.val();
    var newVal = Functions.insertImgTags(messageText, imageAdder.imageMap);
    $pageMessage.val(newVal);
  });
});
