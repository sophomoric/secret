$(function(){
  var $gifSearchInput = $("#gif_search_phrase");
  var $gifSearchForm = $(".gif_search");
  //used twice

  $gifSearchInput.keypress(function(e) {
    if (e.which == 13) {
      $gifSearchForm.trigger("submit");
    }
  });
});
