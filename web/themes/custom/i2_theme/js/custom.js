jQuery(function ($) {
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
    // languageswitcher 點擊
    $(function () {
        var text_active = $('header #block-i2-theme-languageswitcher ul[data-block="nav_additional"] .is-active>a').text();
        $('header #block-i2-theme-languageswitcher ul[data-block="nav_additional"]').before('<div class="dropdown-toggle">' + text_active + '</div>');
        $('header #block-i2-theme-languageswitcher ul[data-block="nav_additional"]').addClass('dropdown-menu');
        $("#block-i2-theme-languageswitcher .dropdown-toggle").click(function () {
            $("#block-i2-theme-languageswitcher .dropdown-menu").slideToggle("500");
        });
    });
    // header-search 點擊
    $(function () {
        $(".header-search .header-search-header").click(function () {
            $(".header-search .dropdown-menu").slideToggle("500");
        });
    });
    //  frontpage video
    $('#academyModal').on('hidden.bs.modal', function (event) {
        $('#academyModal video').trigger('pause');
    });
    $('#academyModal').on('show.bs.modal', function (event) {
        $('#academyModal video').trigger('play');
    });
    ////////////// about us
    $('.block-views-blockblock-news-block-2 .view-content .swiper-slide').addClass('col-12 col-md-6 col-lg-4');
    ////////////// update footer date
    $(function () {
        var year = new Date().getFullYear();
        $("#year_time").html(year);
    });
    // AOS
    AOS.init({
        duration: 1000,
        delay: 100,
        once: true
    });
});