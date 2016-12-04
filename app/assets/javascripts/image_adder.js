$(function(){
  var ImageAdder = function ImageAdder(counter, giphy){
    this.counter = counter;
    this.giphy = giphy;
    this.$message = $("#page_message");
    this.$useThisButton = $(".use");
    this.$useThisButton.click(this.addCurrentImg.bind(this));
    this.imageMap = [];
  };

  ImageAdder.prototype = {
    addCurrentImg: function addCurrentImg(e) {
      e.preventDefault();
      this.imageMap.push(this._counterCurrentImg());
      this.$message.val(this._newMessageVal()).trigger("keyup");
      this.giphy.hideNavigation();
    },

    _lastImgKey: function(){
      return " imgkey" + (this.imageMap.length -1) + " ";
    },

    _newMessageVal: function(){
      return this._currentMessageVal() + this._lastImgKey();
    },

    _counterCurrentImg: function(){
      return this.counter.currentImg();
    },

    _currentMessageVal: function(){
      return this.$message.val();
    }
  };

  window.ImageAdder = ImageAdder;
  window.imageAdder = new ImageAdder(window.counter, window.giphy);
});
