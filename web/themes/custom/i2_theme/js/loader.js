jQuery(function ($) {
    $(document).ready(function () {
        //loader
        document.onreadystatechange = function () {
            if (document.readyState !== "complete") {
                document.querySelector(
                    "body").style.visibility = "hidden";
                document.querySelector(
                    "#loader").style.visibility = "visible";
            } else {
                document.querySelector(
                    "#loader").style.display = "none";
                document.querySelector(
                    "body").style.visibility = "visible";
            }
        };
        // 遮罩是否超過2秒
        setTimeout(() => {
            var displaystyle = $("#loader").attr("style");
            if (displaystyle != "display: none;") {
                document.querySelector(
                    "#loader").style.display = "none";
                document.querySelector(
                    "body").style.visibility = "visible";
            };
        }, "2000");
    });
});
