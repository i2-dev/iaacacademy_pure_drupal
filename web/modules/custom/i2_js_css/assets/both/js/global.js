jQuery(function ($) {
    let lang_url = $("html").attr("lang") + "/";

    //Set textbox autocomplete = off
    $(document).ready(function () {
        $('input[type="text"]').attr("autocomplete", "off");
        $('input[type="email"]').attr("autocomplete", "off");
        $('input[type="tel"]').attr("autocomplete", "off");
    });
    $(document).ajaxComplete(function () {
        $('input[type="text"]').attr("autocomplete", "off");
        $('input[type="email"]').attr("autocomplete", "off");
        $('input[type="tel"]').attr("autocomplete", "off");
    });

    $('a').each(function () {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).attr("target", "_blank");
        }

        var link = this.href;
        if (link.indexOf("/attachments") >= 0) {
            $(this).attr("target", "_blank");
        }

        if (link.indexOf("/form") >= 0) {
            if (
                (link.indexOf("google.com") == 0) &&
                (link.indexOf("forms.gle") == 0) &&
                (link.indexOf("goo.gl") == 0)
            ) {
                // $(this).attr("data-lity","");
                $(this).attr("target", "_blank");
            }
        }
    });


    // Permission Redirect
    $(document).ready(function () {
        // var target_path = drupalSettings.path.currentPath;
        var current_uid = 0;
        if ($("html").attr("curr_uid") !== undefined) {
            current_uid = $("html").attr("curr_uid");
        }

        // page = my
        if (current_uid == 0) {
            if ($("nav.my-menu").length > 0) {
                window.location.href = "/" + lang_url;      //redirect homepage for guest
            }
        }

        // Default /user to /my
        if ($(".opigno-user-statistics-page").length > 0) {
            window.location.href = "/" + lang_url + "my";
        }
    });



    //Lang switch
    if ($(".language-switcher-language-url").length > 0) {
        var html = "";
        $('.language-switcher-language-url .links li a').each(function () {
            var title = $.trim($(this).text());
            var href = $(this).attr("href");
            var target = "";
            if ($(this).attr("target") !== undefined) {
                target = $(this).attr("target");
            }

            if ($(this).hasClass("is-active")) {
                $(".lang-switch-bar .curr-lang").text(title);
            } else {
                html += "<li><a href='" + href + "' target='" + target + "'>" + title + "</a></li>";
            }
        });
        html = $.trim(html);
        if (html != "") {
            $(".lang-switch-bar .lang-selection-list").html(html);
        } else {
            $(".lang-switch-bar").addClass("d-none");
        }
    }



    // Date Navigation
    if ($(".date_navigation").length > 0) {
        //.prev_date
        // .target_date
        //.next_date
        let to_link = "/" + lang_url + $(".date_navigation").attr("to-link");

        var target_ts = $("body").attr("now_ts");
        var target_year = $("body").attr("now_y");
        var target_mth = $("body").attr("now_m");
        var target_day = $("body").attr("now_d");

        if (_global_getUrlParameter('ts') !== false) {
            target_ts = _global_getUrlParameter('ts');
            target_mth = _global_getUrlParameter('m');
            target_day = _global_getUrlParameter('d');
        } else {
            //Redirect to today
            let target_date = target_year + target_mth + target_day;
            window.location.replace(to_link + "?ts=" + target_ts + "&m=" + target_mth + "&d=" + target_day + "&date=" + target_date);
        }

        //Display
        $(".target_date").html(target_mth + "月" + target_day + "日");

        //Prev Date
        let prev_day_ts = parseInt(target_ts) - 86400;
        var dt = new Date(prev_day_ts * 1000);
        let prev_year = dt.toLocaleString("en", { year: "numeric" });
        let prev_mth = dt.toLocaleString("en", { month: "2-digit" });
        let prev_day = dt.toLocaleString("en", { day: "2-digit" });

        let prev_date = prev_year + prev_mth + prev_day;

        $(".prev_date").attr("href", to_link + "?ts=" + prev_day_ts + "&m=" + prev_mth + "&d=" + prev_day + "&date=" + prev_date);

        //Prev Date (10 days before)
        let prev10_day_ts = parseInt(target_ts) - (86400 * 10);
        var dt = new Date(prev10_day_ts * 1000);
        let prev10_year = dt.toLocaleString("en", { year: "numeric" });
        let prev10_mth = dt.toLocaleString("en", { month: "2-digit" });
        let prev10_day = dt.toLocaleString("en", { day: "2-digit" });

        let prev10_date = prev10_year + prev10_mth + prev10_day;

        $(".prev_date_step_10").attr("href", to_link + "?ts=" + prev10_day_ts + "&m=" + prev10_mth + "&d=" + prev10_day + "&date=" + prev10_date);



        //Next Date
        let next_day_ts = parseInt(target_ts) + 86400;
        var dt = new Date(next_day_ts * 1000);
        let next_year = dt.toLocaleString("en", { year: "numeric" });
        let next_mth = dt.toLocaleString("en", { month: "2-digit" });
        let next_day = dt.toLocaleString("en", { day: "2-digit" });

        let next_date = next_year + next_mth + next_day;

        $(".next_date").attr("href", to_link + "?ts=" + next_day_ts + "&m=" + next_mth + "&d=" + next_day + "&date=" + next_date);

        //Next Date (10 days after)
        let next10_day_ts = parseInt(target_ts) + (86400 * 10);
        var dt = new Date(next10_day_ts * 1000);
        let next10_year = dt.toLocaleString("en", { year: "numeric" });
        let next10_mth = dt.toLocaleString("en", { month: "2-digit" });
        let next10_day = dt.toLocaleString("en", { day: "2-digit" });

        let next10_date = next10_year + next10_mth + next10_day;

        $(".next_date_step_10").attr("href", to_link + "?ts=" + next10_day_ts + "&m=" + next10_mth + "&d=" + next10_day + "&date=" + next10_date);
    }
    //     $('body').on('click', '.select_all_checkbox', function(e) {
    //         e.preventDefault();
    //         var _fieldset_wrapper = $(this).closest('.form-wrapper').find('.fieldset-wrapper');

    //         _fieldset_wrapper.find(".form-type-checkbox").each(function (index, value) {
    //             if ($(this).css("display") != "none") {
    //                 $(this).find("input").prop('checked', true);
    //             }
    //         });
    //     });


    //     //"DeSelect All" Checkbox
    //     $('body').on('click', '.deselect_all_checkbox', function(e) {
    //         e.preventDefault();
    //         var _fieldset_wrapper = $(this).closest('.form-wrapper').find('.fieldset-wrapper');

    //         _fieldset_wrapper.find(".form-type-checkbox").each(function (index, value) {
    //             // if ($(this).css("display") != "none") {
    //                 $(this).find("input").prop('checked', false);
    //             // }
    //         });
    //     });

    // });


    // Color Box
    $('.box-color-by-cms').each(function () {
        let _color_code = $(this).attr("bg-color");
        $(this).css("background-color", "#" + _color_code);
    })
});