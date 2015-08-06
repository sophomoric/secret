$(function(){
  $("form").on("ajax:success", function(event, response){
    $(event.target).parent().html(response);
  });

  $("form").on("ajax:error", function(event, response){
    alert("Invalid Password");
  });
});
