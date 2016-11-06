//= require counter

describe("Counter", function() {
  describe("new", function() {
    it("initializes currentI to zero", function() {
      var counter = new Counter();

      expect(counter.currentI).toEqual(0);
    });
  });

  describe("counterStep", function() {
    it("increments the counter", function() {
      var counter = new Counter(["image0", "image1"]);

      counter.counterStep(1);

      expect(counter.currentI).toEqual(1);
    });

    it("loops back around to zero", function() {
      var data = ["image0", "image1", "image2"];
      var counter = new Counter(data);

      counter.counterStep(1);
      counter.counterStep(1);
      counter.counterStep(1);

      expect(counter.currentI).toEqual(0);
    });

    it("allows a negative increment, and loops back around", function() {
      var data = ["image0", "image1", "image2"];
      var counter = new Counter(data);

      expect(counter.currentI).toEqual(0);

      counter.counterStep(-1);

      expect(counter.currentI).toEqual(2);

      counter.counterStep(-1);
    });
  });

  describe("currentImg", function() {
    it("returns the image from the data array indexed at currentI", function() {
      var counter = new Counter(["image0", "image1"]);

      expect(counter.currentI).toEqual(0);
      expect(counter.currentImg()).toEqual("image0");
    });
  });
});
