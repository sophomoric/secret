//= require giphy

$(function(){
  describe("Giphy", function() {
    describe("taking a step", function() {
      // mock the counter Object
      var CounterMock = function(){
        this.currentImgCalled = false;
      };

      CounterMock.prototype = {
        counterStep: function(increment){
          this.lastCounterStep = increment;
        },
        currentImg: function() {
          this.currentImgCalled = true;
        }
      };

      it("calls the counterStep and currentImg methods on counter", function() {
        var html = $("<div class='navigation'>" +
            "<button class='use'>Use</button>" +
            "<button class='step back' data-value='-1'>Back</button>" +
            "<button class='step next' data-value='1'>Next</button></div>" +
            "</div>");
        $("body").append(html);

        var counterMock = new CounterMock();
        window.giphy = new window.Giphy(counterMock);

        $(".next").trigger("click"); //data-value 1

        expect(counterMock.lastCounterStep).toEqual(1);
        expect(counterMock.currentImgCalled).toEqual(true);
      });
    });
  });
});
