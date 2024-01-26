jQuery(function ($) {
    var frontpagebannerSwiper = new Swiper(".frontpagebanner-Swiper", {
        // autoplay: {
        //     delay: 3000,
        // },
        speed: 1000,
        fadeEffect: {
            crossFade: true,
        },
        watchOverflow: true,
        loop: true,
        pagination: {
            el: ".frontpageswiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper1-button-next",
            prevEl: ".swiper1-button-prev",
        },
    });
    // banner button
    $(".block-views-blockfrontpage-banner-block-1 .component .swiper-button .swiper-button-play").click(function () {
        $(this).addClass('d-none');
        frontpagebannerSwiper.autoplay.stop();
        $(".block-views-blockfrontpage-banner-block-1 .component .swiper-button .swiper-button-stop").removeClass('d-none');
    });
    $(".block-views-blockfrontpage-banner-block-1 .component .swiper-button .swiper-button-stop").click(function () {
        $(this).addClass('d-none');
        frontpagebannerSwiper.autoplay.start();
        $(".block-views-blockfrontpage-banner-block-1 .component .swiper-button .swiper-button-play").removeClass('d-none');
    });
    var frontpageNewsSwiper = new Swiper(".frontpageNews-Swiper", {
        // autoplay: {
        //     delay: 3000,
        // },
        slidesPerView: "auto",
        spaceBetween: 20,
        // fadeEffect: {
        //     crossFade: true,
        // },
        watchOverflow: true,
        // loop: true,
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
        // autoplay: {
        //     delay: 3000,
        // },
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
        // autoplay: {
        //     delay: 3000,
        // },
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