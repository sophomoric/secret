$(function(){
  var $button = $("#more-options");
  var $optionalFieldWrap = $(".optional-fields");

  $button.click(function(e){
    e.preventDefault();
    $optionalFieldWrap.toggle("hidden");
  });
});
