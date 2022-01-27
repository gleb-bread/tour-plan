const hotelSwiper = new Swiper('.hotel-swiper', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.hotel-swiper__button--next',
        prevEl: '.hotel-swiper__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
const reviewSwiper = new Swiper('.reviews-slider', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    }
});

document.addEventListener('click', function Click(e) {
    console.log(e.target);
});

