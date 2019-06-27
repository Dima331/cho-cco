(function () {
    $(".order").click(function () {
        $("html, body").animate({
            scrollTop: $(".delivery").offset().top + "px"
        }, {
                duration: 500,
                easing: "swing"
            });
        return false;
    });
})()