$(document).ready(function () {
    var height = $('header > nav').offset().top;
    var stickNav = function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > height) {
            $('header > nav').addClass('fixed-top');
        } else {
            $('header > nav').removeClass('fixed-top');
        }
    };
    $(window).scroll(function () {
        stickNav();
    })
})