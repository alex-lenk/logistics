//= vendor/baguetteBox.min.js
//= vendor/glider.min.js
//= snippet/tab.js
//= snippet/mask.js

/* BEGIN: Menu toggle */
function clickHeaderToggle() {
    document.querySelector('body').classList.toggle('menu-opened');
}

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.menu-toggle').addEventListener("click", clickHeaderToggle);
});
/* END: Menu toggle */


window.addEventListener('load', function () {
    baguetteBox.run('.gallery-wrap');
});

var galleryPrev = document.querySelector('.gallery-prev');

if (document.documentElement.clientWidth < 768 && galleryPrev) {
    new Glider(galleryPrev, {
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

if (document.documentElement.clientWidth < 576 && document.querySelector('.home-company__media .media-wrap')) {
    document.querySelector('.home-company__pre-title').append(document.querySelector('.home-company__media .media-wrap'));
}
