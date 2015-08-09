$(function(){
  var $emoticons = $(".emoticons");
  var $message_input = $("#page_message");

  $emoticons.click(function(event){
    var character = $(event.target).text();
    addChar(character, $message_input);
  });

  var addChar = function(input, $target){
    var currentValue = $target.val();
    var newValue = currentValue + input;
    $target.val(newValue).keyup();
  };
});
