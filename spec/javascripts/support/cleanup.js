beforeEach(function(){
  $("#giphy-page").remove();
  $("body").append($("<div id='giphy-page'></div>"));
});
afterEach(function() {
  $("#giphy-page").html("");
});
