$(document).on('scroll', function(){
    $('.header-title-top').css("left", Math.max(0 + 1.5*window.scrollY, 0) + "px");
})
