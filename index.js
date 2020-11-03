$(function(){
//hides the drinks icon
$(".foods_icon").hide();    
$("#drinks").hide();


// Food selction maroon color && FOOD BLUR

$(".cc").mouseenter(function () { 
    $(this).css("border","solid 10px orangered");
    $("#hiden").toggle(2000);
    $(this).css("filter","blur(3px)");
   $(this).css("height","250px");

});
$(".cc").mouseleave(function () { 
    $(this).css("border","solid 10px gold")
    $("#hiden").hide();
    $(this).css("filter","blur(0px)");
   $(this).css("height","200px");
});

//SCROLL EFFECT

$('.cc').scroll(function () { 
    $(this).hide();
});




  //TOGGLE FOODS AND HIDE DRINKS
$(".drinks_icon").on("click",function(){
$(".foods_icon").show();
$(this).hide();
$(".cc").hide();
$("#drinks").toggle(2500);



});

$(".foods_icon").on("click",function(){
    $(".drinks_icon").show();
    $(this).hide();
    $("#drinks").hide();
    $(".cc").toggle(2500);
    
    
    
    });
      
  

//});


// Food selction maroon color && BLUR Drinks 

$(".Drinks").mouseenter(function () { 
    $(this).css("border","solid 10px maroon");
    //$(this).css("filter","blur(5px)");
    $(this).css("height","250px");

});

$(".Drinks").mouseleave(function () { 
    $(this).css("border","solid 10px gold")
    //$(this).css("filter","blur(0px)");
    $(this).css("height","200px");
});


//$("#change").hide();
//$("#switch").hide();
});