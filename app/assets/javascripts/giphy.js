$(function(){
  var Giphy = function Giphy(counter){
    this.counter = counter;
    this.$resultBox = $(".result");
    this.$stepButton = $(".step");
    this.$navigation = $(".navigation");
    this.$gifSearchForm = $(".gif_search");
    this.$gifSearchForm.on("ajax:success", this.setResultBox.bind(this));
    this.$stepButton.click(this.takeStep.bind(this));
  };

  Giphy.prototype = {
    hideNavigation: function(){
      this.$resultBox.hide();
      this.$navigation.hide();
    },

    setResultBox: function(e, data) {
      this.counter.resetData(data);
      this.$resultBox.show();
      if (!data.length) {
        this.$resultBox.css("height", "auto");
        this.$resultBox.html("<p>No Results</p>");
        this.$navigation.hide();
      } else {
        this.$resultBox.css("height", 200);
        this.$navigation.show();
        this._insertCurrentImg();
      }
    },

    takeStep: function(e){
      var increment = parseInt($(e.target).attr("data-value"), 10);
      this.counter.counterStep(increment);
      this._insertCurrentImg();
    },

    _insertCurrentImg: function _insertCurrentImg() {
      this.$resultBox.html(Functions.buildImgTag(this.counter.currentImg()));
    }
  };

  window.Giphy = Giphy;
  window.giphy = new Giphy(window.counter);
});
