let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 80,
            slidesPerView: 2,
        },
    },
});


let buttonOpen = document.querySelector('#hamburger');
let buttonClose = document.querySelector('#button-close');
const nav = document.querySelector('.nav');

if (buttonOpen) {
    buttonOpen.addEventListener('click', function() {
        nav.classList.add('is-active');
    });
}


if (buttonClose) {
    buttonClose.addEventListener('click', function() {
        nav.classList.remove('is-active');
    })
}