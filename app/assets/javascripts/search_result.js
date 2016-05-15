$(function(){
  function SearchResult(data) {
    reset();
    this.data = data;
    this.gifFor = function gifFor(key, index){
      return this.data[key][index];
    }
  }

  window.SearchResult = SearchResult;
});
