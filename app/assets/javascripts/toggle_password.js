$(function(){
  var $input = $("#page_require_password");
  var $passwordWrap = $(".page_password");

  $input.change(function(){
    $passwordWrap.toggle();
  });
});
