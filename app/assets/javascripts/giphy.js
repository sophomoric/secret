$(function(){
  "use strict";

  window.Secret = window.Secret || {};

  var $resultBox = $(".result");
  var $message = $("#page_message");
  var $useThisButton = $(".use");

  $(".gif_search").on("ajax:success", function(e, data){
    $resultBox.css("height", 200);
    window.Secret.data = data;
    showNextImage();
  });

  $useThisButton.click(addCurrentImg);

  function currentImg() {
    if (window.Secret.data) {
      return window.Secret.data[window.Secret.currentI];
    } else {
      return "";
    }
  }

  function showNextImage() {
    if (shouldResetCounter() || notInitialized() || lessThanTwoImages()) {
      resetCounter(0);
    } else {
      incrementCounter(1);
    }
    insertResults(buildImg(currentImg()));
    window.setTimeout(showNextImage, 5000);
  }

 function addCurrentImg(e) {
    e.preventDefault();
    var url = currentImg();

    if (!url) { return ; }

    var image = buildImg(url);
    var newValue = $message.val() + image;
    $message.val(newValue);
    $message.trigger("keyup");
 }

  // helpers

  function resetCounter(index) {
    window.Secret.currentI = index;
  }

  function incrementCounter(increment) {
    window.Secret.currentI = window.Secret.currentI + increment;
  }

  function shouldResetCounter() {
    return window.Secret.currentI === window.Secret.data.length;
  }

  function lessThanTwoImages() {
    return window.Secret.data.length < 2;
  }

  function notInitialized() {
    return window.Secret.currentI === undefined;
  }

  function insertResults(result) {
    $resultBox.html(result);
  }

  function buildImg(url) {
    return "<img src='" + url + "'>";
  }
});
