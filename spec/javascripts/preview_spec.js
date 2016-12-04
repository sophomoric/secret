//= require preview

$(function(){
  describe("Preview", function() {
    describe("createPreview", function() {
      it("displays default text if box is empty", function() {
        var $pageMessage = $("<textarea id='page_message'></textarea>");
        var $previewBox = $("<div class='preview-box'>Default Text!</div>");
        $("#giphy-page").append($pageMessage).append($previewBox);

        var preview = new Preview();
        preview.createPreview();

        var currentPreviewText = $previewBox.html();
        expect(currentPreviewText).toEqual("Default Text!");
      });
    });
  });
});

