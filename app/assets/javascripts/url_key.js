$(function(){
  var $input = $("#page_url_key");
  var $previewLabel = $(".page_url_key label");
  var previewPlaceholder = $previewLabel.text();

  $input.keyup(function(){
    var split = previewPlaceholder.split("/")
    var oldText = split.slice(0, split.length - 1);
    var newText = oldText.join("/") + "/" + $input.val();
    $previewLabel.text(newText);
  })
});
