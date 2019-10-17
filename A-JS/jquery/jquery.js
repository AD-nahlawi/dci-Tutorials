






$("h1"); 
$("h1").addClass("Class_With_Jquery");
$("h1").removeClass("blue");
$("h1").toggleClass("blue");
$("h1").text("Hello from JQuery !!");
$("#h1_id").css("color","red");

$("ul").addClass("important");
$("ul li:first-child");
$("ul li:first");

$("ul").css({
    "color":"blue",
    "border":"2px solid orange",
    "font-size":"30px",
    "list-style":"none",
    "width":"200px"
});

$("*li").css("color","red");   
$("li:eq(2)").css( {"color":"blue"} )
// let li=document.querySelectorAll("li");
//     for(let i = 0; i < li.length; i++){
//         li[i].style.color="lime";
//     } ;

$('img').attr('src','/IMGs/C-images/Untitled.jpg');


$("[href]");  // All hrefs
$("[value]");  // All values
$("[placeholder]");  // All placeholders

$("input").val("JQuery is Awesome!");



$('button').click(function(){
    $(this).css('background','red');
    $('h1').toggleClass('wrong');


    $('.div').slideToggle(100,function(){
        
        $(this).remove();

    })


    $('.div').css('background','blue');

});



