$(document).ready(function(){
    var writeToLocalStorage = function(){
        var items = $("#list").html();
        localStorage.setItem("item", items);
    };


    $("#add").click(function(){
        if($("#item").val() == ''){
            alert("You can't add nothing!");
        }else{
            submitItem();
            writeToLocalStorage();
        }
    });

    $("li").mouseenter(function(){
       $(".list-body").css("box-shadow", "5px 5px 5px #000");
    }).mouseleave(function(){
        $(".list-body").css("box-shadow", "10ox 10px 5px #000");
    });

    $(document).on("click", ".list-body", function(){
        $(this).fadeOut();
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
    $("#list").append("<li class='list-body'>"+itemName+"</li>");
    $("#item").val('');
}

function deleteAllItems(){
    localStorage.clear();
    location.reload();
    writeToLocalStorage();
}