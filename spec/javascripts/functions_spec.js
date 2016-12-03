//= require functions

describe("Functions", function() {
  describe("insertImgTags", function() {
    it("replaces keys with image tags", function() {
      var message = "imgkey0 cat!";
      var imageMap = ["caturl.gif"];

      var result = Functions.insertImgTags(message, imageMap);

      var finalMessage = "<img src='caturl.gif'> cat!";
      expect(result).toEqual(finalMessage);
    });

    it("does not affect a message without image keys", function() {
      var message = "Hi cat!";
      var imageMap = ["caturl.gif"];

      var result = Functions.insertImgTags(message, imageMap);
      expect(result).toEqual(message);
    });
  });
});
