//= require giphy

$(function(){
  describe("Giphy", function() {
    describe("taking a step", function() {
      it("calls the counterStep and currentImg methods on counter", function() {
        var html = $("<div class='navigation'>" +
            "<button class='use'>Use</button>" +
            "<button class='step back' data-value='-1'>Back</button>" +
            "<button class='step next' data-value='1'>Next</button></div>" +
            "</div>");
        $("#giphy-page").append(html);

        var counterMock = new window.mockHelpers.Counter();
        window.giphy = new window.Giphy(counterMock);

        $(".next").trigger("click"); //data-value 1

        expect(counterMock.lastCounterStep).toEqual(1);
        expect(counterMock.currentImgCalled).toEqual(true);
      });
    });
  });
});
