$(document).ready(function(){
    $("#item").onkeydown = function(e){
        if(e.keyCode == 13){
            submitItem();
        }
    };
    $("#add").click(function(){
        submitItem();
    });

    $("li").mouseenter(function(){
       $(".list-body").css("box-shadow", "5px 5px 5px #000");
    }).mouseleave(function(){
        $(".list-body").css("box-shadow", "10ox 10px 5px #000");
    });
});

function submitItem(){
    var itemName = $("#item").val();
    $("#list").append("<li class='list-body'>"+itemName+"</li>");
    $("#item").val('');
}