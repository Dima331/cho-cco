
; (function () {
    $(".burger").on("click", function () {
        $(".overflow").slideToggle(500);
        $(".body").toggleClass("stop-scrolling");
    });

    $(window).resize(function () {
        var width = $(window).width();

        if (width > 800) {
            $(".body").removeClass("stop-scrolling");
            $(".overflow").slideUp();
            $(".burger__container").removeClass("burger-active");
            
        }
    });

    $("a.overflow-menu__link").click(function () {
        $(".body").removeClass("stop-scrolling");
        $(".overflow").slideUp();
        $(".burger__container").removeClass("burger-active");

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
                duration: 500,
                easing: "swing"
            });
        return false;
    });
    
})()