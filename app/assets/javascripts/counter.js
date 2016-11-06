$(function(){
  "use strict";

  var Counter = function Counter(data){
    this.currentI = 0;
    this.data = data;
  };

  Counter.prototype.currentImg = function currentImg() {
    return this.data[this.currentI];
  };

  Counter.prototype.counterStep = function counterStep(increment) {
    if ((this.endOfArray() && increment > 0) || this.notInitialized()) {
      this.resetCounter(0);
    } else if (this.startOfArray() && increment < 0) {
      this.resetCounter(this.arrayLength() - 1);
    } else {
      this.incrementCounter(increment);
    }
  };

  Counter.prototype.arrayLength = function arrayLength() {
    return this.data.length;
  };

  Counter.prototype.endOfArray = function endOfArray() {
    return this.currentI >= this.arrayLength() -1;
  };

  Counter.prototype.startOfArray = function startOfArray() {
    return this.currentI < 1;
  };

  Counter.prototype.notInitialized = function notInitialized() {
    return this.currentI === undefined;
  };

  Counter.prototype.resetCounter = function resetCounter(index) {
    this.currentI = index;
  };

  Counter.prototype.incrementCounter = function incrementCounter(num) {
    this.currentI = this.currentI + num;
  };

  window.Counter = Counter;
});
