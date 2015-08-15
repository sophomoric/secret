$(function(){
  var $emoticons = $(".emoticons");
  var $message_input = $("#page_message");

  $emoticons.click(function(event){
    var character = $(event.target).text();
    _h.appendText(character, $message_input);
  });
});
