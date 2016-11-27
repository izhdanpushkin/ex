overlay = $("#overlay");

$('.test').mouseenter(function(){
    overlay.css({"width":"", "height":"", "top":"", "left":""});
    img = $(this);
    width = parseInt(img.css("width")) + 1 + 'px';
    height = parseInt(img.css("height")) + 1 + 'px';
    off_top = img.offset().top - 1 + "px";
    off_left = img.offset().left - 1 + "px";
    overlay.css({"width":width, "height":height, "top":off_top, "left":off_left});
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
