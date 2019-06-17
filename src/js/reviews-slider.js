;(function () {
    // $('.reviews-list').slick({
    //      appendArrows: false,
    //      dots: true,
    //      appendDots: $('.reviews-list'),
    //      dotsClass: 'reviews-navigation',
    //     // autoplay: true
    // });


    $('.reviews-list').slick({ 
        slidesToShow: 1,  // по одному слайдеру 
        slidesToScroll: 1, // по одному менять
        arrows:false, 
        asNavFor: '.reviews-navigation' // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)
    });


    $('.reviews-navigation').slick({ // настройка навигации
        slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '.reviews-list', // указываем что это навигация для блока выше
        focusOnSelect: true // указываем что бы слайделось по клику
    });


})()


