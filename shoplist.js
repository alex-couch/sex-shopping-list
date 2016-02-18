$(document).ready(function(){
   $(".list-body").mouseenter(function(){
      $(this).css("box-shadow", "5px 5px 5px #000");
   }).mouseleave(function(){
      $(this).css("box-shadow", "10px 10px 5px #000");
   });
});