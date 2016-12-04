$(function(){
  var ImageAdder = function ImageAdder(counter){
    this.counter = counter;
    this.$message = $("#page_message");
    this.$useThisButton = $(".use");
    this.$htmlBody = $("html, body");
    this.$useThisButton.click(this.addCurrentImg.bind(this));
    this.imageMap = [];
  };

  ImageAdder.prototype = {
    addCurrentImg: function addCurrentImg(e) {
      e.preventDefault();
      this.imageMap.push(this._counterCurrentImg());
      this.$message.val(this._newMessageVal()).trigger("keyup");
      this.animateScroll();
    },

    animateScroll: function(){
      this.$htmlBody.animate({
        scrollTop: this.$message.offset().top
      }, 1000);
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
  window.imageAdder = new ImageAdder(window.counter);
});
