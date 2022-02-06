$(document).ready(function () {
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

    let menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', () => {
        document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
    });

    let modalBtn = $('[data-toggle=modal]');
    let closeModalBtn = $('.modal__close');
    closeModalBtn.on('click', closeModal)
    modalBtn.on('click', openModal);
    function openModal() {
        let modalOverlay = $('.modal__overlay');
        let modalDialog = $('.modal__dialog');
        modalOverlay.addClass('modal__overlay--visible');
        modalDialog.addClass('modal__dialog--visible');
    }
    function closeModal(event) {
        event.preventDefault();
        let modalOverlay = $('.modal__overlay');
        let modalDialog = $('.modal__dialog');
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
    }
    // Обработка форм
    $('.form').validate({
        errorClass: "invalid",
        messages: {
            name: {
                required: "Please provide a name",
                minlength: "The name must be at least 4 letters long"
            },
            phone: {
                required: "Please provide a phone"
            },
            email: {
                required: "Please provide a email"
            }
        }
    });
    AOS.init();
});