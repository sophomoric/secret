//= require url_key

$(function(){
  describe("UrlKey", function() {
    describe("modifyLabelText", function() {
      it("finds a url and swaps in a urlKey", function() {
        var currentText = "Specify url: http://onetimenote.com/example";
        var key = "my-page";

        var urlKey = new window.UrlKey();
        var result = urlKey.modifyLabelText(currentText, key);

        var expectedResult = "Specify url: http://onetimenote.com/my-page";
        expect(result).toEqual(expectedResult);
      });

      it("URI encodes spaces", function() {
        var currentText = "Specify url: http://onetimenote.com/example";
        var key = "in between";

        var urlKey = new window.UrlKey();
        var result = urlKey.modifyLabelText(currentText, key);

        var expectedResult = "Specify url: http://onetimenote.com/in%20between";
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
