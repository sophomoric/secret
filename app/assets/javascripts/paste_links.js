$(function(){
  var $message_input = $("#page_message");
  var $paste_link = $(".paste-link input");
  var $button = $(".paste-link button");

  $button.click(function(e){
    e.preventDefault();
    var url = $paste_link.val();
    var markdown_link = "<img src='" + url + "'>";
    _h.appendText(markdown_link, $message_input);
    $paste_link.val("");
  });
});
