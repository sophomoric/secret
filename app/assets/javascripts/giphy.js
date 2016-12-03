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
    insertCurrentImg: function insertCurrentImg() {
      this.$resultBox.html(Functions.buildImgTag(this.counter.currentImg()));
    },
    setResultBox: function(e, data) {
      this.counter.resetData(data);
      if (!data.length) {
        this.$resultBox.css("height", "auto");
        this.$resultBox.html("<p>No Results</p>");
        this.$navigation.hide();
      } else {
        this.$resultBox.css("height", 200);
        this.$navigation.show();
        this.insertCurrentImg();
      }
    },
    takeStep: function(e){
      var increment = parseInt($(e.target).attr("data-value"));
      this.counter.counterStep(increment);
      this.insertCurrentImg();
    }
  };

  window.Giphy = Giphy;
  window.giphy = new Giphy(window.counter);
});
