$(function(){
  var ImageAdder = function(counter){
    this.counter = counter;
    this.$message = $("#page_message");
    this.$useThisButton = $(".use");
    this.$htmlBody = $("html, body");
    this.$useThisButton.click(addCurrentImg.bind(this));
    this.imageMap = [];

    function addCurrentImg(e) {
      e.preventDefault();
      var imageUrl = this.counter.currentImg();
      var newValue = this.$message.val() + addImgShortcut(imageUrl);
      this.$message.val(newValue);
      this.$message.trigger("keyup");
      this.$htmlBody.animate({
        scrollTop: this.$message.offset().top
      }, 1000);
    }

    function addImgShortcut(imageUrl) {
      imageAdder.imageMap.push(imageUrl);
      return " imgkey" + (imageAdder.imageMap.length -1) + " ";
    }
  };

  window.ImageAdder = ImageAdder;
  window.imageAdder = new ImageAdder(window.counter);
});
