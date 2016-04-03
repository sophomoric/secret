$(function(){
  "use strict";

  window.Secret = window.Secret || {};

  var $resultBox = $(".result");
  var $message = $("#page_message");
  var $useThisButton = $(".use");
  var $stepButton = $(".step");
  var $navigation = $(".navigation");
  var $gifSearchInput = $("#gif_search_phrase");
  var $gifSearchForm = $(".gif_search");

  $gifSearchInput.keypress(function(e) {
    if (e.which == 13) {
      $gifSearchForm.trigger("submit");
    }
  });

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

  $useThisButton.click(addCurrentImg);

  function startInterval() {
    insertCurrentImg();
    window.Secret.intervalId = window.
      setInterval(insertCurrentImgAndIncrement, 5000);
  }

 function addCurrentImg(e) {
    e.preventDefault();
    var imageUrl = currentImg();
    var newValue = $message.val() + buildImgTag(imageUrl);
    $message.val(newValue);
    $message.trigger("keyup");
    $("html, body").animate({
      scrollTop: $message.offset().top
    }, 1000);
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

  function currentImg() {
    if (window.Secret.data.length) {
      return window.Secret.data[window.Secret.currentI];
    } else {
      return "";
    }
  }

  // pure functions

  function buildImgTag(url) {
    return "<img src='" + url + "'>";
  }
});
