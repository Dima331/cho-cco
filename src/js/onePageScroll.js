(function () {
  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile();

  if (!isMobile) {
    const sections = $(".section");
    const display = $(".maincontent");
    let inscroll = false;

    const switchActiveClassInSideMenu = menuItemIndex => {
      $(".navigation__item")
        .eq(menuItemIndex)
        .addClass("navigation__item-active")
        .siblings()
        .removeClass("navigation__item-active");
    };

    const performTransition = sectionEq => {
      if (inscroll) return;

      const sectionEqNum = parseInt(sectionEq);

      if (!!sectionEqNum === false)
        console.error("не верное значение для аргуемента sectionEq");

      inscroll = true;

      const position = sectionEqNum * -100 + "%";

      sections
        .eq(sectionEq)
        .addClass("active")
        .siblings()
        .removeClass("active");

      display.css({
        transform: `translateY(${position})`
      });

      setTimeout(() => {
        inscroll = false;
        switchActiveClassInSideMenu(sectionEq);
      }, 1000 + 300); // продолжительность транзишна + 300мс - время для завершения инерции тачустройств
    };

    const scrollToSection = direction => {
      const activeSection = sections.filter(".active");
      const nextSection = activeSection.next();
      const prevSection = activeSection.prev();

      if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index());
      }

      if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index());
      }
    };

    $(".wrapper").on("wheel", e => {
      const deltaY = e.originalEvent.deltaY;

      if (deltaY > 0) {
        scrollToSection("next");
      }
      if (deltaY < 0) {
        scrollToSection("prev");
      }
    });

    $('.wrapper').on('touchmove', e => {
      e.preventDefault();
    });

    $(document).on("keydown", e => {
      switch (e.keyCode) {
        case 38:
          scrollToSection("prev");
          break;
        case 40:
          scrollToSection("next");
          break;
      }
    });

    $("[data-scroll-to]").on("click", e => {
      e.preventDefault();
      const target = $(e.currentTarget).attr("data-scroll-to");
      performTransition(target);
    });


  } else {
    $(".wrapper").css("height", "auto")
    $(".maincontent").css("height", "auto")
    $(".navigation").css("display", "none");
    $(window).resize(function () {
      var width = $(window).width();
      if (width > 600) {
        $(".body").removeClass("stop-scrolling");
        $(".overflow").slideUp();
        $(".burger__container").removeClass("burger-active");
        $(".navigation").css("display", "none");

        $("a.nav-list__link").on("click", e => {

          $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
          }, {
              duration: 500,
              easing: "swing"
            });
          return false;
        });
      }
    });
  }
})();