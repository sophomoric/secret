$(function(){
  var $input = $("#page_url_key");
  var $previewLabel = $(".page_url_key label");
  var previewPlaceholder = $previewLabel.text();

  $input.keyup(function(){
    var labelText = previewPlaceholder.split("url-key-example")[0];
    var newText = labelText + $input.val();
    $previewLabel.text(newText);
  })
});
