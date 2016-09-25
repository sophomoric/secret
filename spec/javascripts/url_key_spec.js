//= require url_key

describe("Url Key", function() {
  describe("modifyLabelText", function() {
    it("finds a url and swaps in a urlKey", function() {
      var currentText = "Specify url: http://onetimenote.com/example";
      var urlKey = "my-page";

      var result = Functions.modifyLabelText(currentText, urlKey);

      var expectedResult = "Specify url: http://onetimenote.com/my-page";
      expect(result).toEqual(expectedResult);
    });

    it("URI encodes spaces", function() {
      var currentText = "Specify url: http://onetimenote.com/example";
      var urlKey = "in between";

      var result = Functions.modifyLabelText(currentText, urlKey);

      var expectedResult = "Specify url: http://onetimenote.com/in%20between";
      expect(result).toEqual(expectedResult);
    });
  });
});
