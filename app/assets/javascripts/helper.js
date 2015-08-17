var _h = (function(){
  var appendText = function(input, $target){
    var currentValue = $target.val();
    var newValue = currentValue + input;
    $target.val(newValue).keyup();
  };

  var createMenu = function($menu){
    $menu.click(function(e){
      e.preventDefault();
      var $item = $(e.target);
      _selectFromSiblings($item, "active");

      var selector = $item.css("class");
      var matcher = selector + "-input";
      var input = $(matcher);
      _selectFromSiblings($item, "hidden");
    });
  };

  var _selectFromSiblings = function($element, className){
    $element.toggleClass("active");
    $.each($element.siblings(), function(i, el){
    $(el).removeClass("active");
    });
  };

  return {
    appendText: appendText,
    createMenu: createMenu
  };
})();
