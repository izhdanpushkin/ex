// $("#test").mouseenter(function(){
//     $("#test").animate({
//         backgroundColor: 'red',
//         opacity: '0.5'
//     });
// });
// $("#test").mouseleave(function(){
//     $("#test").animate({
//             backgroundColor: 'red',
//             opacity: '1'
//         });
// });

overlay = $("#overlay");
// img = $("#test");
// $(document).ready(function(){
//     $(".test").hover(function(){
//         img = $(this)
//         overlay.width(img.css("width"));
//         overlay.height(img.css("height"));
//         overlay.css("top", img.offset().top + "px");
//         overlay.css("left", img.offset().left + "px");
//         // overlay.css("padding", "-10px")
//         // $(this).css("opacity", 0.5);
//     },function(){
//         $(this).css("opacity", 1);
//         overlay.css({"width":"", "height":"", "top": "", "left" : ""});
//     });
// });
$('.test').mouseenter(function(){
    img = $(this);
    width = parseInt(img.css("width")) + 1;
    height = parseInt(img.css("height")) + 1;
    overlay.css("width", width + "px");
    overlay.css("height", height + "px");
    overlay.css("top", img.offset().top + "px");
    overlay.css("left", img.offset().left + "px");
});
$('.test,.overlay').mouseenter(function(){
    // overlay.css({"width":"", "height":"", "top":"", "left":""});
    console.log('entered');
});
$('.overlay').mouseleave(function(){
    overlay.css({"width":"", "height":"", "top":"", "left":""});
    console.log('left');
});