$(function(){
  var $button = $("#more-options");
  var $optionalFieldWrap = $(".optional-fields");
  $button.click(function(){
    $optionalFieldWrap.toggle("hidden");
  });

  var $redirect = $("#page_redirect");
  var $duration = $(".page_duration");
  $redirect.click(function(){
    $duration.toggle("hidden");
  });
});
