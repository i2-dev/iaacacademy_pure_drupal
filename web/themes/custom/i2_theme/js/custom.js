jQuery(function ($) {
    $(document).ready(function () {
        /////////// common
        var url = window.location.href;
        // header fixed
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                // 當滾動位置大於 0 時，添加類
                $('body').addClass('scrolled-fixed');
            } else {
                // 當滾動位置等於 0 時，移除類
                $('body').removeClass('scrolled-fixed');
            }
        });
        // add login button
        var SearchlinkContent = `
                <div id="block-i2-theme-headerlogin">
                    <section class="header-login" title="login">
                        <a href="javascript:void(0);" target="_blank">
                            <img src="/themes/custom/i2_theme/image/icon/login.svg" alt="login">
                            <span>Login</span>
                        </a>
                    </section>
                </div>
                 `;
        $('#block-i2-theme-searchlink').after(SearchlinkContent);
        var currentUrl = window.location.href;
        if (currentUrl.indexOf('https://iaacd10.i2hk.net') !== -1) {
            $('header .header-login>a').attr('href', 'https://iaacmoodle.i2hk.net');
        } else if (currentUrl.indexOf('https://iaacacademyd.dev.i2hk.net/') !== -1) {
            $('header .header-login>a').attr('href', 'https://moodle43-v2.dev.i2hk.net/login/index.php');
        } else {
            // 执行其他情况下的功能
        }
        // languageswitcher 點擊
        $(function () {
            var text_active = $('header #block-i2-theme-languageswitcher ul[data-block="nav_additional"] .is-active>a').text();
            $('header #block-i2-theme-languageswitcher ul[data-block="nav_additional"]').before('<div class="dropdown-toggle">' + text_active + '</div>');
            $('header #block-i2-theme-languageswitcher ul[data-block="nav_additional"]').addClass('dropdown-menu');
            $("#block-i2-theme-languageswitcher .dropdown-toggle").click(function () {
                $("#block-i2-theme-languageswitcher .dropdown-menu").slideToggle("500");
            });
        });
        var frontpagebannerSwiper = new Swiper(".frontpagebanner-Swiper", {
            autoplay: {
                delay: 6000,
            },
            speed: 1000,
            effect: 'fade',
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
        $(".block-views-blockfrontpage-banner-block-1 .swiper-button-play").click(function () {
            $(this).addClass('d-none');
            frontpagebannerSwiper.autoplay.stop();
            $(".block-views-blockfrontpage-banner-block-1 .swiper-button-stop").removeClass('d-none');
        });
        $(".block-views-blockfrontpage-banner-block-1 .swiper-button-stop").click(function () {
            $(this).addClass('d-none');
            frontpagebannerSwiper.autoplay.start();
            $(".block-views-blockfrontpage-banner-block-1 .swiper-button-play").removeClass('d-none');
        });
        // header-search
        $(function () {
            $(".header-search .header-search-header").click(function () {
                $(".header-search .dropdown-menu").slideToggle("500");
            });
        });
        $('header .header-search .ld-search-form input').on('input', function () {
            var inputValue = $(this).val();
            $(document).keypress(function (e) {
                if (e.which == 13) {
                    if (url.indexOf("/zh-hant") >= 0) {
                        window.location.href = ('/zh-hant/search-0?keys=' + inputValue);
                    } else if (url.indexOf("/zh-hans") >= 0) {
                        window.location.href = ('/zh-hans/search-0?keys=' + inputValue);
                    } else {
                        window.location.href = ('/search-0?keys=' + inputValue);
                    };
                }
            });
        });
        // header navnbar 手機端
        var frontpagevideoSwiper = new Swiper(".video-Swiper", {
            autoplay: {
                delay: 5000,
            },
            speed: 1000,
            fadeEffect: {
                crossFade: true,
            },
            watchOverflow: true,
            loop: true,
            pagination: {
                el: ".videoswiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".videoswiper-button-next",
                prevEl: ".videoswiper-button-prev",
            },
        });
        // $('nav#block-i2-theme-main-navigation>ul.navbar-nav').prepend('<li class="nav-item"><a href="/" class="nav-link" data-drupal-link-system-path="node/1">Home</a></li>');
        $("#block-i2-theme-main-navigation>ul ul.dropdown-menu").each(function () {
            $(this).removeClass('navbar-nav');
            $(this).before('<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">X</button>');
        });
        //  frontpage video
        $('#academyModal .modal-header .modal-title').text('Video');
        $(".video-Swiper .video-content-wrap").click(function () {
            var title = $.trim($(this).find('.video-content-title').text());
            var img_link = $(this).find('>div>img').attr('src');
            var video_link = $.trim($(this).find('.video-link').text());
            $('#academyModal .modal-header .modal-title').text(title);
            $('#academyModal .modal-body video').attr('poter', img_link);
            $('#academyModal .modal-body video').attr({
                'poter': img_link,
                "src": video_link
            });
            setTimeout(function () {
                var video = $("#academyModal video")[0];
                if (video.paused) {
                    $('#academyModal video').trigger('play');
                    frontpagebannerSwiper.autoplay.stop();
                };
            }, 200);
        });
        $('#academyModal').on('hidden.bs.modal', function (e) {
            $('#academyModal video').trigger('pause');
            frontpagebannerSwiper.autoplay.start();
        });
        ////////////// about us
        $('.block-views-blockblock-news-block-2 .view-content .swiper-slide').addClass('col-12 col-md-6 col-lg-4');
        ////////////// update footer date
        $(function () {
            var year = new Date().getFullYear();
            $("#year_time").html(year);
        });
        $('.block-views-blockblock-news-block-2 .view-content .views-row').removeClass('swiper-slide');
        // news Details
        var NewsModalSwiper = new Swiper(".NewsModalSwiper", {
            // loop: true,
            pagination: {
                el: ".NewsModalswiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".NewsModalswiper-button-next",
                prevEl: ".NewsModalswiper-button-prev",
            },
        });
        $('.page-node-type-feed .block-field-blocknodefeedfield-content').addClass('row');
        $('.page-node-type-feed .block-field-blocknodefeedfield-content>div').each(function () {
            $(this).addClass('col-12 col-md-6 col-lg-4 col-xl-3').attr({
                'data-bs-toggle': 'modal',
                'data-bs-target': '#NewsModal'
            });
            var img_url = $(this).find('.field--name-bp-image-field img').attr('src');
            var text = $.trim($(this).find('.field--name-bp-header').text());
            NewsModalSwiper.appendSlide('<div class="swiper-slide"><img loading="lazy" src="' + img_url + '" class="img-fluid"/><p>' + text + '</p></div>'); //加到Swiper的最后
        });
        $(".page-node-type-feed .block-field-blocknodefeedfield-content>div").click(function () {
            var index = $(".page-node-type-feed .block-field-blocknodefeedfield-content>div").index(this);
            NewsModalSwiper.slideTo(index);
        });
        // links
        $('.paragraph--type--links').addClass('container-xxl');
        $('.paragraph--type--links>div.paragraph__column').addClass('row');
        $('.paragraph--type--links>div.paragraph__column>div').addClass('col-12 col-sm-6 col-lg-3');
        // back to top
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#block-i2-theme-backtotop').css('opacity', '1');
            } else {
                $('#block-i2-theme-backtotop').css('opacity', '0');
            }
        });
        $('.sidebar-back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 200);
            return false;
        });
        // translate
        setTimeout(function () {
            if (url.indexOf("/zh-hant") >= 0) {
                $('.block-system-breadcrumb-block ol.breadcrumb>li:nth-child(1)>a').text('首頁');
                $('header .header-login span').text('登入');
            } else if (url.indexOf("/zh-hans") >= 0) {
                $('.block-system-breadcrumb-block ol.breadcrumb>li:nth-child(1)>a').text('首页');
                $('header .header-login span').text('登入');
            } else { };
        }, 200);
        // AOS
        AOS.init({
            duration: 1000,
            delay: 100,
            once: true
        });
    });
});