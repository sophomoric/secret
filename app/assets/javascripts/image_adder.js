$(function(){
  var ImageAdder = function(){
    this.$message = $("#page_message");
    this.$useThisButton = $(".use");
    this.$htmlBody = $("html, body");
    this.$useThisButton.click(addCurrentImg.bind(this));
    this.imageMap = [];

    this.$gifResults = $("div.result, div.navigation");

    function addCurrentImg(e) {
      e.preventDefault();
      var imageUrl = counter.currentImg();
      var newValue = this.$message.val() + addImgShortcut(imageUrl);
      this.$message.val(newValue);
      this.$message.trigger("keyup");
      this.$gifResults.hide();
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
  window.imageAdder = new ImageAdder();
});
