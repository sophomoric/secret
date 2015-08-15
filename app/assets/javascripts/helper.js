var _h = (function(){
  var addChar = function(input, $target){
    var currentValue = $target.val();
    var newValue = currentValue + input;
    $target.val(newValue).keyup();
  };

  return {
    addChar: addChar
  };
})();
