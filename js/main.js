overlay = $("#overlay");

$('.test').mouseenter(function(){
    overlay.css({"width":"", "height":"", "top":"", "left":""});
    img = $(this);
    width = parseInt(img.css("width")) + 1 + 'px';
    height = parseInt(img.css("height")) + 1 + 'px';
    off_top = img.offset().top + "px";
    off_left = img.offset().left + "px";
    overlay.css({"width":width, "height":height, "top":off_top, "left":off_left});
});