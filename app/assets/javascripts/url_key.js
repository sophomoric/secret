$(function(){
  var $input = $("#page_url_key");
  var $previewLabel = $(".page_url_key label");
  var previewPlaceholder = $previewLabel.text();

  Functions.modifyLabelText = function modifyLabelText(currentText, urlKey) {
    var split = currentText.split("/");
    var oldText = split.slice(0, split.length - 1);
    return oldText.join("/") + "/" + encodeURI(urlKey);
  };

  $input.keyup(function(){
    var labelText = Functions.modifyLabelText(previewPlaceholder, $input.val());
    $previewLabel.text(labelText);
  });
});
