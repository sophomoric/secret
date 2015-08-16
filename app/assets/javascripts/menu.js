$(function(){
  var $menu = $(".menu");

  $menu.click(function(e){
    e.preventDefault();
    $button = $(e.target);
    menu_selector = $button.attr("class");
    $menu_selector = $(menu_selector);
    debugger
  });
});
