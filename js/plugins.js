/*global $, document, window,*/

$(document).ready(function () {

    "use strict";

    $('.carousel').carousel({

        interval: 5000

    });

});

//NiceScroll

$(document).ready(function () {
    "use strict";
    $("html").niceScroll({
        cursorcolor: "rgb(215, 53, 50)",
        cursorwidth: "8px",
        scrollspeed: 70
    });
    $("#ascrail2000").css("z-index", "9999");
    $("#ascrail2000 div").css("height", "100px");
    $("htm").css("overflow", "hidden");
});

//Color Options Box

$(".gear-check").click(function () {

    "use strict";

    $(".colors").fadeToggle(200);

});

// Option Color

var colorLi = $(".color-option ul li");

$(colorLi).click(function () {
    "use strict";
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});

// Caching The Scroll Top Element

var scrollButton = $("#arr");

$(window).scroll(function () {
    "use strict";

    if ($(this).scrollTop() >= 700) {

        scrollButton.show();

    } else {

        scrollButton.hide();
    }
});

// Click On Button To Scroll Top

scrollButton.click(function () {
    "use strict";

    $("html,body").animate({
        scrollTop: 0
    }, 600);

});

// Page Loading Overlay

$(document).ready(function () {
    "use strict";
    $(".loading-overlay .is-animate").fadeOut(10000,
        function () {
            $(".loading-overlay").fadeOut(2000);
        });
});
