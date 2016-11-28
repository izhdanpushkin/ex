overlay = $("#overlay");
team_buttons = $("#social-buttons");
works_buttons = $("#works-buttons")

$('.screened').mouseenter(function(){
    $(this).after(overlay);
    overlay.hide(); // Removes some weird behavior
    overlay.css({"width":"", "height":"", "top":"", "left":""});
    img = $(this);
    // Shrinking 1 px so no overflow occurs
    width = parseInt(img.css("width")) - 1 + 'px';
    height = parseInt(img.css("height")) + 'px';
    console.log(parseFloat(img.css("width")), parseFloat(img.css("height")))
    console.log(width, height)
    off_top = Math.floor(img.position().top) + "px";
    off_left = Math.floor(img.position().left) + "px";
    overlay.css({"width":width, "height":height, "top":off_top, "left":off_left});
    overlay.show();
});

$(".works .screened").mouseenter(function(){
    $(this).after(works_buttons);
})
$(".team .screened").mouseenter(function(){
    $(this).after(team_buttons);
})

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
