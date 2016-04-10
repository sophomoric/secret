$(function(){
  "use strict";

  window.Secret = window.Secret || {};

  var $resultBox = $(".result");
  var $stepButton = $(".step");
  var $navigation = $(".navigation");
  var $gifSearchForm = $(".gif_search");

  $gifSearchForm.on("ajax:success", function(e, data){
    reset();
    window.Secret.data = data;
    if (!data.length) {
      $resultBox.css("height", "auto");
      $resultBox.html("<p>No Results</p>");
      $navigation.hide();
    } else {
      $resultBox.css("height", 200);
      $navigation.show();
      startInterval();
    }
  });

  $stepButton.click(function(e){
    clearRunningInterval();
    var increment = parseInt($(e.target).attr("data-value"));
    counterStep(increment);
    insertCurrentImg();
  });

  function startInterval() {
    insertCurrentImg();
    window.Secret.intervalId = window.
      setInterval(insertCurrentImgAndIncrement, 5000);
  }

 // helpers

 function clearRunningInterval() {
   window.clearInterval(window.Secret.intervalId);
 }

 function incrementCounter(num) {
   window.Secret.currentI = window.Secret.currentI + num;
 }

 function reset() {
   clearRunningInterval();
   window.Secret = {};
   window.Secret.currentI = 0;
  }

  function resetCounter(index) {
    window.Secret.currentI = index;
  }

  function counterStep(increment) {
    if ((endOfArray() && increment > 0) || notInitialized()) {
      resetCounter(0);
    } else if (startOfArray() && increment < 0) {
      resetCounter(arrayLength() - 1);
    } else {
      incrementCounter(increment);
    }
  }

  function arrayLength() {
    return window.Secret.data.length;
  }

  function endOfArray() {
    return window.Secret.currentI >= arrayLength() -1;
  }

  function startOfArray() {
    return window.Secret.currentI < 1;
  }

  function notInitialized() {
    return window.Secret.currentI === undefined;
  }

  function insertCurrentImgAndIncrement() {
    insertCurrentImg();
    counterStep(1);
  }

  function insertCurrentImg() {
    $resultBox.html(buildImgTag(currentImg()));
  }

  // global functions

  function currentImg() {
    if (window.Secret.data.length) {
      return window.Secret.data[window.Secret.currentI];
    } else {
      return "";
    }
  }

  function buildImgTag(url) {
    return "<img src='" + url + "'>";
  }

  window.Functions = {};
  window.Functions.currentImg = currentImg;
  window.Functions.buildImgTag = buildImgTag;
});
