overlay = $("#overlay");

$('.screened').mouseenter(function(){
    overlay.hide(); // Removes some weird behavior
    overlay.css({"width":"", "height":"", "top":"", "left":""});
    img = $(this);
    width = parseInt(img.css("width")) + 'px';
    height = parseInt(img.css("height")) + 'px';
    // Rounding down so no overflow occurs
    off_top = Math.floor(img.offset().top) + "px";
    off_left = Math.floor(img.offset().left) + "px";
    overlay.css({"width":width, "height":height, "top":off_top, "left":off_left});
    overlay.show();
});

$(document).ready(function() {
    bg = $(".quotes-bg")
    $(".carousel-wrapper").css("height", bg.height)
    console.log(bg.height())

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
