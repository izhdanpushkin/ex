// Overlay stuff
overlay = $("#overlay");
team_buttons = $("#social-buttons");
works_buttons = $("#works-buttons");
$("#works-header").hide();

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

// Animate header buttons underline
$(".header-button").hover(function(){
    $(this).find('.underline').animate({
        width: '100%',
        left: 0,
        right: 0
    }, '400')}, function(){
        $(this).find('.underline').animate({
        width: '0',
        left: '50%'
    }, '400')
    }
)


// Page navigation
page = $("html, body");

isOn = function(item){
    pos = $(window).scrollTop()
    borders = [item.offset().top,
        item.offset().top + item.outerHeight(true)]
    if(borders[0] <= pos && pos <= borders[1]){
        return true
    } else {
        return false
    }
}

// Stops the scrolling animation on manual scroll.
page.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
    if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
         page.stop();
    }
});

$(document).ready(function(){
    // Positional markers
    // fuck me it's ugly
    wm1 = $("#works-menu-1");
    wm2 = $("#works-menu-2");
    w1i1 = $("#works-1-1");
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

    // Work-header navigational buttons
    $(".nav-button").click(function() {
        // Get numbers from id
        var numb = this.id.match(/\d/g);
        page.animate({
            scrollTop: $("#works-" + numb[0] + '-' + numb[1]).offset().top + 1
        }, 1000);
    })


    // Header navigational buttons
    $(".header-button,.header-dropdown-button").click(function(e){
        e.stopPropagation();
        var target = $(this).attr('data-page');
        page.animate({
            scrollTop: $("#" + target).offset().top + 1}, 1000);
    });


    // test
    $(window).scroll(function(){
        hd = $("#works-header");
        nav = $("#header");
        hd.hide();

        // Header
        if(!isOn($("#home-test"))){
            nav.addClass("header-vertical");
            $('body').css("margin-left", "65px");
            nav.find(".home-button").hide();
        } else {
            nav.removeClass("header-vertical");
            $('body').css("margin-left", "0");
            nav.find(".home-button").show();
        }
        // Works-header
        if(isOn(wk)){
            if(isOn(wk1)){
                hd.show();
                window.currentMenu = $("#works-menu-1");
                window.fallbackMenu = $("#works-menu-2");
                if(hd.children().length == 0){
                    hd.append($("#works-menu-1 ul, #works-menu-1 span"));
                } else if(fallbackMenu.children().length == 0){
                    hd.contents().appendTo(fallbackMenu);
                }
            } else if(isOn(wk2)){
                hd.show();
                currentMenu = $("#works-menu-2");
                fallbackMenu = $("#works-menu-1");
                if(hd.children().length == 0){
                    hd.append($("#works-menu-2 ul, #works-menu-2 span"));
                }else if(fallbackMenu.children().length == 0){
                    hd.contents().appendTo(fallbackMenu);
                }
            } else {
                hd.hide();
                if(typeof(currentMenu) == 'object'){ // lazy workaround
                    if(currentMenu.children().length == 0){
                        hd.contents().appendTo(currentMenu);
                    } else if(fallbackMenu.children().length == 0){
                        hd.contents().appendTo(fallbackMenu);
                    }
                }
            }
        }
        if(isOn(sv)){
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
