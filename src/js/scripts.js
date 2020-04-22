//= vendor/jquery-3.5.0.slim.min.js
//= vendor/jquery.maskedinput.min.js
//= vendor/baguetteBox.min.js
//= vendor/glider.min.js
//= vendor/tab.js

$(document).ready(function () {
    $('#call-form__tel').mask("+7 (999) 999-99-99");

    $('.menu-toggle').click(function () {
        $('body').toggleClass('menu-opened');
    });

    if ($(window).width() < 575) {
        $('.home-company__media .media-wrap').appendTo('.home-company__pre-title');
    }
});

window.addEventListener('load', function () {
    baguetteBox.run('.gallery-wrap');
});

if (document.documentElement.clientWidth < 576) {
    new Glider(document.querySelector('.gallery-prev'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '.gallery-prev__dots',
        arrows: {
            prev: '.gallery-prev__prev',
            next: '.gallery-prev__next'
        }
    });
}
