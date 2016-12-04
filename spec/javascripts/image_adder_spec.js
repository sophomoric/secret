//= require image_adder

$(function(){
  describe("ImageAdder", function() {
    describe("clicking the 'use' button", function() {
      it("inserts a placeholder on the page imagekey0", function() {
        var $useButton = $("<button class='use'></button>");
        var $pageMessage = $("<textarea id='page_message'></textarea>");
        $("#giphy-page").append($useButton).append($pageMessage);
        var counterStub = {
          currentImg: function currentImg(){ return "url.currentImg.gif"; }
        };
        var giphyStub = {
          hideNavigation: function(){ }
        };

        var imageAdder = new ImageAdder(counterStub, giphyStub);
        $useButton.trigger("click");

        expect($pageMessage.val()).toEqual(" imgkey0 ");
        expect(imageAdder.imageMap[0]).toEqual("url.currentImg.gif");
      });
    });
  });
});
