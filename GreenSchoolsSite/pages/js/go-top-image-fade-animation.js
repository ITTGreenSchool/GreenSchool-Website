$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.go-top-image').fadeIn();
    }else {
        $('.go-top-image').fadeOut();
    }
});