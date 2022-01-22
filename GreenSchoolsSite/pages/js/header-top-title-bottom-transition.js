$(document).on('scroll', function(){
    $('.header-title-bottom').css("left", Math.max(0 - 1.5*window.scrollY, -1000) + "px");
})
