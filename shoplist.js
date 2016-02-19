$(document).ready(function(){
    $("input").keypressed = function(e){
        if(e.which == 13){
            e.preventDefault();
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

    $(document).on("click", ".close", function(){
        $(this).parent().fadeOut();
    });

    $(document).on("click", ".clear", function(){
        deleteAllItems();
    });

    if(localStorage.getItem('item')){
        $("#list").html(localStorage.getItem('item'));
    }
});

function submitItem(){
    var itemName = $("#item").val();
    var items = $("#list").html();
    $("#list").append("<li class='list-body'>"+itemName+"<button type='button' class='close'>X</li>");
    $("#item").val('');
    localStorage.setItem("item", items);
}

function deleteAllItems(){
    localStorage.clear();
    location.reload();
}