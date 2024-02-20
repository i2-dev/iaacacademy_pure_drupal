jQuery(function ($) {
    var frontpageNewsSwiper = new Swiper(".frontpageNews-Swiper", {
        autoplay: {
            delay: 3000,
        },
        slidesPerView: "auto",
        spaceBetween: 20,
        // fadeEffect: {
        //     crossFade: true,
        // },
        watchOverflow: true,
        loop: true,
        pagination: {
            el: ".frontpageNews-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".frontpageNews-button-next",
            prevEl: ".frontpageNews-button-prev",
        },
        breakpoints: {
            768: {
                spaceBetween: 26,
            },
        },
    });
    var ProgList1Swiper = new Swiper(".prog1-Swiper", {
        autoplay: {
            delay: 3000,
        },
        // centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 26,
        speed: 1000,
        fadeEffect: {
            crossFade: true,
        },
        watchOverflow: true,
        loop: true,
        pagination: {
            el: ".swiper-prog1-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-prog1-button-next",
            prevEl: ".swiper-prog1-button-prev",
        },
        breakpoints: {
            320: {  //当屏幕宽度大于等于320
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: { //当屏幕宽度大于等于780
                slidesPerView: 2,
                spaceBetween: 20
            },
            1280: { //当屏幕宽度大于等于1280
                slidesPerView: 3,
                spaceBetween: 26
            },
        },
    });
    var ProgList2Swiper = new Swiper(".prog2-Swiper", {
        autoplay: {
            delay: 3000,
        },
        // centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 26,
        speed: 1000,
        fadeEffect: {
            crossFade: true,
        },
        watchOverflow: true,
        loop: true,
        pagination: {
            el: ".swiper-prog2-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-prog2-button-next",
            prevEl: ".swiper-prog2-button-prev",
        },
        breakpoints: {
            320: {  //当屏幕宽度大于等于320
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: { //当屏幕宽度大于等于780
                slidesPerView: 2,
                spaceBetween: 20
            },
            1280: { //当屏幕宽度大于等于1280
                slidesPerView: 3,
                spaceBetween: 26
            },
        },
    });
});