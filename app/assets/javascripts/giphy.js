$(function(){
  'use strict';
  var PUBLIC_KEY = 'dc6zaTOxFJmzC';
  var BASE_URL = '//api.giphy.com/v1/gifs/';
  var ENDPOINT = 'search';
  var LIMIT = 1;
  var RATING = 'pg';

  var $queryInput = $('.query');
  var $resultWrapper = $('.result');
  var $loader = $('.loader');
  var $inputWrapper = $('.input-wrapper');
  var $clear = $('.clear');
  var $randomButton = $('.random');
  var $useThisButton = $('.use');
  var currentTimeout;

  var $message = $("#page_message");

  var query = {
    text: null,
    offset: 0,
    request: function request() {
      return BASE_URL + ENDPOINT + '?q=' + this.text + '&limit=' + LIMIT + '&rating=' + RATING + '&offset=' + this.offset + '&api_key=' + PUBLIC_KEY;
    },
    fetch: function fetch(callback) {
      $.getJSON(this.request()).success(function (data) {
        var results = data.data;
        if (results.length) {
          var url = results[0].images.downsized.url;
          callback(url);
        } else {
          callback('');
        }
      }).fail(function (error) {
        console.log(error);
      });
    }
  };

  function buildImg(src) {
    if (!src) {
      srce = '//giphy.com/embed/xv3WUrBxWkUPC'
    }

    return '<img src="' + src + '" alt="gif" />';
  }

  $clear.on('click', function (e) {
    $queryInput.val('');
    $inputWrapper.removeClass('active').addClass('empty');
    $('.gif').addClass('hidden');
    $loader.removeClass('done');
    $randomButton.removeClass('active');
  });
  $randomButton.on('click', function (e) {
    query.offset = Math.floor(Math.random() * 25);
    query.fetch(function (url) {
      if (url.length) {
        $resultWrapper.html(buildImg(url));
        $randomButton.addClass('active');
        $message.trigger("keyup");
      } else {
        $resultWrapper.html('<p class="no-results hidden">No Results found for <strong>' + query.text + '</strong></p>');
        $randomButton.removeClass('active');
      }
      $loader.addClass('done');
      currentTimeout = setTimeout(function () {
        $('.no-results').toggleClass('hidden');
      }, 1000);
    });
  });

  $queryInput.on('keyup', function (e) {
    var key = e.which || e.keyCode;
    query.text = $queryInput.val();
    query.offset = Math.floor(Math.random() * 25);
    if (currentTimeout) {
      clearTimeout(currentTimeout);
      $loader.removeClass('done');
    }
    currentTimeout = setTimeout(function () {
      currentTimeout = null;
      $('.gif').addClass('hidden');
      if (query.text && query.text.length) {
        $inputWrapper.addClass('active').removeClass('empty');
        query.fetch(function (url) {
          if (url.length) {
            $resultWrapper.html(buildImg(url));
            $randomButton.addClass('active');
          } else {
            $resultWrapper.html('<p class="no-results hidden">No Results found for <strong>' + query.text + '</strong></p>');
            $randomButton.removeClass('active');
          }
          $loader.addClass('done');
          currentTimeout = setTimeout(function () {
            $('.no-results').toggleClass('hidden');
          }, 1000);
        });
      } else {
        $inputWrapper.removeClass('active').addClass('empty');
        $randomButton.removeClass('active');
      }
    }, 1000);
  });

  $useThisButton.click(function (e) {
    e.preventDefault();
    var url = $resultWrapper.children().attr("src");

    if (!url) { return ; }

    var image = buildImg(url);
    var newValue = $message.val() + image;
    $message.val(newValue);
    $message.trigger("keyup");
    $clear.trigger("click");
    $resultWrapper.html("");
  });
});
