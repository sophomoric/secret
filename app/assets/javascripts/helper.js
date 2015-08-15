var _h = (function(){
  var appendText = function(input, $target){
    var currentValue = $target.val();
    var newValue = currentValue + input;
    $target.val(newValue).keyup();
  };

  return {
    appendText: appendText
  };
})();
