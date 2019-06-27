(function () {
    $(".dish__title").on("click", function (event) {
        event.preventDefault()

        var width = $(window).width()
        var thisElement = $(this)
        var minusPx;
        if (width < 930 && width > 800) {
            closeBlock()
            width = width - 300
            changeWidth(thisElement, width)

        } else if (width <= 800 && width > 600) {
            closeBlock()
            width = width - 240
            changeWidth(thisElement, width)
        }
        else if (width <= 600) {
            width = width - 60
            changeWidth(thisElement, width)

            if ($(this).parent(".dish").hasClass("dish_absolute")) {
                $(this).parent(".dish").removeClass("dish_absolute")
            } else {
                $(this).parent(".dish").addClass("dish_absolute")
            }
        }
        else {
            closeBlock()
            minusPx = 102
            changeWidth(thisElement, undefined, minusPx)
        }
    })

    function changeWidth(thisElement, width = 630, minusPx = 72) {
        $(thisElement).siblings(".dish__text").width(width)
        $(thisElement).siblings(".dish__text").children(".dish__text-info").width(width - minusPx)
        if ($(thisElement).siblings(".dish__text").width() > 0) {
            $(thisElement).siblings(".dish__text").width(0)
        }
    }
    function closeBlock() {
        $(".dish__text").each(function () {
            $(".dish__text").width(0)
        })
    }

    $(".dish__text-close").on("click", function () {
        closeBlock()
        $(".dish").each(function () {
            $(this).removeClass("dish_absolute")
        })
    })
})()
