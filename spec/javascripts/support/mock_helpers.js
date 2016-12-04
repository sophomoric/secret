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

beforeEach(function(){
  window.mockHelpers = {
    Counter: CounterMock
  };
});
