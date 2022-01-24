const swiper = new Swiper('.swiper', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
document.addEventListener('click', function Click(e) {
    console.log(e.target);
});

