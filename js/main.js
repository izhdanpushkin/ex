// Overlay stuff
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

// Page navigation
isOn = function(item){
    pos = $(window).scrollTop()
    borders = [item.offset().top, item.offset().top + item.outerHeight(true)]
    if(borders[0] <= pos && pos <= borders[1]){
        return true
    } else {
        return false
    }
}

$(document).ready(function(){
    // Positional markers
    // fuck me it's ugly
    wm1 = $("#works-menu-1");
    wm2 = $("#works-menu-2");
    w1i1 = $("#works-1-1 ");
    w1i2 = $("#works-1-2");
    w1i3 = $("#works-1-3");
    w1i4 = $("#works-1-4");
    w1i5 = $("#works-1-5");
    w2i1 = $("#works-2-1");
    w2i2 = $("#works-2-2");
    w2i3 = $("#works-2-3");
    w2i4 = $("#works-2-4");
    w2i5 = $("#works-2-5");
    wk1 = $("#works-1");
    wk2 = $("#works-2");
    ab = $("#about");
    wk = $("#works");
    sv = $("#services");
    nw = $("#news");
    qt = $("#quote");
    ct = $("#contact");


    // test
    $(window).scroll(function(){
        hd = $("#works-header");
        hd.hide();
        // window.parent = $("#works-menu-1")
        if(isOn(wk)){
            // console.log('on works')
            if(isOn(wk1)){
                hd.show();
                window.parent = $("#works-menu-1");
                window.fallback = $("#works-menu-2");
                if(hd.children().length == 0){
                    hd.append($("#works-menu-1 ul, #works-menu-1 span"));
                } else if(fallback.children().length == 0){
                    hd.contents().appendTo(fallback);
                }
                console.log('on wk1');
            } else if(isOn(wk2)){
                hd.show();
                parent = $("#works-menu-2");
                fallback = $("#works-menu-1");
                if(hd.children().length == 0){
                    hd.append($("#works-menu-2 ul, #works-menu-2 span"));
                }else if(fallback.children().length == 0){
                    hd.contents().appendTo(fallback);
                }
                console.log('on wk2');
            } else {
                hd.hide();
                if(parent.children().length == 0){
                    hd.contents().appendTo(parent);
                } else if(fallback.children().length == 0){
                    hd.contents().appendTo(fallback);
                }
                // hd.empty();
                console.log('fk');
            }


            //////////////
        } else if(isOn(sv)){
            console.log('on services');
        } else if(isOn(nw)){
            console.log('on news');
        } else if(isOn(qt)){
            console.log('on quotes');
        } else if(isOn(ct)){
            console.log('on contact');
        } else if(isOn(ab)){
            console.log('on about');
        } else{}
    });
})







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
