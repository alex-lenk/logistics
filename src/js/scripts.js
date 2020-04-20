//= vendor/jquery-3.5.0.slim.min.js
//= vendor/jquery.maskedinput.min.js

$(document).ready(function () {
    $('#call-form__tel').mask("+7 (999) 999-99-99");

    $('.menu-toggle').click(function () {
        $('body').toggleClass('menu-opened');
    });

    if ($(window).width() < 575) {
        $('.home-company__media .media-wrap').appendTo('.home-company__pre-title');
    }
});
