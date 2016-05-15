$(function(){
 function Navigator(searchResult){

   this.searchResult = searchResult;
   this.currentI = 0;

   this.next = function(increment, word){
     var index = this.currentI + increment;
     var url = searchResult.gifFor(word, index);
     this.currentI = index;
   }
 }
});
