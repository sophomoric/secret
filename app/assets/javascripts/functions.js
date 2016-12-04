(function(){
  window.Functions = {
    insertImgTags: function insertImgTags(message, imageMap) {
      imageMap.forEach(function(url, index){
        var key = "imgkey" + index;
        var imgTag = Functions.buildImgTag(url);
        message = message.replace(key, imgTag);
      });
      return message;
    },
    buildImgTag: function buildImgTag(url) {
      return "<img src='" + url + "'>";
    }
  };
}());
