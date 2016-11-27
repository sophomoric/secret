$(function(){
  "use strict";

  var $resultBox = $(".result");
  var $stepButton = $(".step");
  var $navigation = $(".navigation");
  var $gifSearchForm = $(".gif_search");

  $gifSearchForm.on("ajax:success", function(e, data){
    window.counter.resetData(data);
    if (!data.length) {
      $resultBox.css("height", "auto");
      $resultBox.html("<p>No Results</p>");
      $navigation.hide();
    } else {
      $resultBox.css("height", 200);
      $navigation.show();
      insertCurrentImg();
    }
  });

  $stepButton.click(function(e){
    var increment = parseInt($(e.target).attr("data-value"));
    counter.counterStep(increment);
    insertCurrentImg();
  });

  // helpers

  function insertCurrentImg() {
    $resultBox.html(buildImgTag(counter.currentImg()));
  }

  // global functions

  function buildImgTag(url) {
    return "<img src='" + url + "'>";
  }

  function insertImgTags(message, imageMap) {
    imageMap.forEach(function(url, index){
      var key = "imgkey" + index;
      var imgTag = Functions.buildImgTag(url);
      message = message.replace(key, imgTag);
    });
    return message;
  }

  window.Functions.buildImgTag = buildImgTag;
  window.Functions.insertImgTags = insertImgTags;
});
