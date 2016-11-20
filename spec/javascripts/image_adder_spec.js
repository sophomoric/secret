//= require image_adder

describe("ImageAdder", function() {
  describe("clicking the 'use' button", function() {
    it("inserts a placeholder on the page imagekey0", function() {
      var $useButton = $("<button class='use'></button>");
      var $pageMessage = $("<textarea id='page_message'></textarea>");
      $("body").append($useButton).append($pageMessage);
      stubCurrentImg("url.currentImg.gif");

      window.imageAdder = new ImageAdder();
      $useButton.trigger("click");

      expect($pageMessage.val()).toEqual(" imgkey0 ");
      expect(imageAdder.imageMap[0]).toEqual("url.currentImg.gif");
    });
  });

  function stubCurrentImg(returnVal){
    window.counter = {
      currentImg: function currentImg(){
        return returnVal;
      }
    };
  }
});