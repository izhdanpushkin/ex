overlay = $("#overlay");
team_buttons = $("#social-buttons");
works_buttons = $("#works-buttons")
$("#works-header").hide()

$('.screened').mouseenter(function(){
    $(this).after(overlay);
    overlay.hide(); // Removes some weird behavior
    overlay.css({"width":"", "height":"", "top":"", "left":""});
    img = $(this);
    // Shrinking 1 px so no overflow occurs
    width = parseInt(img.css("width")) - 1 + 'px';
    height = parseInt(img.css("height")) - 1 + 'px';
    off_top = Math.floor(img.position().top) + "px";
    off_left = Math.floor(img.position().left) + "px";
    overlay.css({"width":width, "height":height, "top":off_top, "left":off_left});
    overlay.show();
});

$(".works .screened, .footer-images .screened").mouseenter(function(){
    $(this).after(works_buttons);
})
$(".team .screened").mouseenter(function(){
    $(this).after(team_buttons);
})

// Get offset of the menu
var menu1 = $("#works-menu-1").offset().top + $("#works-menu-1").outerHeight();
var menu2 = $("#works-menu-2").offset().top + $("#works-menu-2").outerHeight();
var menu2_top = $("#works-menu-2").offset().top;
console.log(menu1, menu2, menu2_top)
$(document).ready(function(){
    $(window).scroll(function(){
        // pos = $(window.scrollTop)
        if($(window).scrollTop() > menu2){
            stuff2 = $("#works-menu-2 ul, #works-menu-2 span");
            $("#works-header").append(stuff2);
            $("#works-header").show();
            console.log('if')
        } else if($(window).scrollTop() > menu2_top) {
            $("#works-header").hide();
            // Release stuff to menu2
            header = $("#works-header ul, #works-header span");
            $("#works-menu-2").append(header);
            console.log('elif1')
        }else if($(window).scrollTop() > menu2_top - 350){
            $("#works-header").hide();
            // Release stuff to menu1
            header = $("#works-header ul, #works-header span");
            $("#works-menu-1").append(header);
        } else if($(window).scrollTop() > menu1 && $(window).scrollTop() < menu2_top) {
            $("#works-header").show();
            // Grab stuff from menu1
            stuff1 = $("#works-menu-1 ul, #works-menu-1 span");
            $("#works-header").append(stuff1);
            $("#works-header").show();
            console.log('elif3');
        }
        else{
            $("#works-header").hide();
            // Release stuff to menu1
            header = $("#works-header ul, #works-header span");
            $("#works-menu-1").append(header);
            console.log('else');
        }
    });

});

// $(document).ready(function(){
//     // Kinda sorta ok workaround for possible 1-2 px gaps between works elements due to weird rounding, should look again later.
//     $('.works-image').each(function(){
//         height = parseInt($(this).css("height")) + 1;
//         width = parseInt($(this).css("width")) + 1;
//         $(this).css("height", height);
//         $(this).css("width", width);
//         console.log(height, width);
//     });
// });

$(document).ready(function() {
    bg = $(".quotes-bg");
    $(".carousel-wrapper").css("height", bg.height);

    $("#quotes").owlCarousel({
    singleItem : true
    });


    $("#news-carousel").owlCarousel({
        singleItem : true
    });

    $("#news-image-carousel").owlCarousel({
        singleItem : true
    });
});
