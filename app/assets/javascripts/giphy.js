$(function(){
  "use strict";

  window.Secret = window.Secret || {};

  var $resultBox = $(".result");
  var $message = $("#page_message");
  var $useThisButton = $(".use");

  $(".gif_search").on("ajax:success", function(e, data){
    reset();
    window.Secret.data = data;
    if (!data.length) {
      $resultBox.css("height", "auto");
      $resultBox.html("<p>No Results</p>");
    } else {
      $resultBox.css("height", 200);
      startInterval();
    }
  });

  $useThisButton.click(addCurrentImg);

  function startInterval() {
    insertCurrentImg();
    window.Secret.intervalId = window.
      setInterval(insertCurrentImgAndIncrement, 5000);
  }

 function addCurrentImg(e) {
    e.preventDefault();
    var image = currentImg();
    var newValue = $message.val() + image;
    $message.val(newValue);
    $message.trigger("keyup");
 }

 // helpers

 function incrementCounter(num) {
   window.Secret.currentI = window.Secret.currentI + num;
 }

  function reset() {
    window.clearInterval(window.Secret.intervalId);
    window.Secret = {};
    window.Secret.currentI = 0;
  }

  function resetCounter(index) {
    window.Secret.currentI = index;
  }

  function counterStep() {
    if (endOfArray() || notInitialized() || lessThanTwoImages()) {
      resetCounter(0);
    } else {
      incrementCounter(1);
    }
  }

  function endOfArray() {
    return window.Secret.currentI === window.Secret.data.length;
  }

  function lessThanTwoImages() {
    return window.Secret.data.length < 2;
  }

  function notInitialized() {
    return window.Secret.currentI === undefined;
  }

  function insertCurrentImgAndIncrement() {
    insertCurrentImg();
    counterStep();
  }

  function insertCurrentImg() {
    $resultBox.html(buildImg(currentImg()));
  }

  function currentImg() {
    if (window.Secret.data.length) {
      return window.Secret.data[window.Secret.currentI];
    } else {
      return "";
    }
  }

  // pure functions

  function buildImg(url) {
    return "<img src='" + url + "'>";
  }
});
