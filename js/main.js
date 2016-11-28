overlay = $("#overlay");
team_buttons = $("#team-buttons")

$('.screened').mouseenter(function(){
    $(this).after(overlay)
    $(this).after(team_buttons)
    overlay.hide(); // Removes some weird behavior
    overlay.css({"width":"", "height":"", "top":"", "left":""});
    img = $(this);
    width = parseInt(img.css("width")) + 'px';
    height = parseInt(img.css("height")) + 'px';
    // Rounding down so no overflow occurs
    off_top = Math.floor(img.position().top) + "px";
    off_left = Math.floor(img.position().left) + "px";
    console.log(off_top, off_left)
    // off_top = '0px'
    // off_left = '0px'
    overlay.css({"width":width, "height":height, "top":off_top, "left":off_left});
    overlay.show();
    // team_buttons.show();
});

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
