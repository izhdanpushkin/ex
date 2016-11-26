overlay = $("#overlay");

$('.test').mouseenter(function(){
    img = $(this);
    overlay.hide(); // Allows to fade in slowly
    width = parseInt(img.css("width")) + 1 + 'px';
    height = parseInt(img.css("height")) + 1 + 'px';
    off_top = img.offset().top + "px";
    off_left = img.offset().left + "px";
    overlay.css({"width":width, "height":height, "top":off_top, "left":off_left}).fadeIn(250);
});
// Find better way to cancel overlay, since quick doesn't trigger entering overlay, thus resulting in no mouseleave event.
$('.overlay').mouseleave(function(){
    overlay.css({"width":"", "height":"", "top":"", "left":""});
    console.log('left overlay');
});
// Using css :hover seems like a nice idea, come back to that later