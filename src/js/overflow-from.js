; (function () {
   $(".form__button-order").on("click", function (e) {
      e.preventDefault()
      $(".delivery__overflow").addClass("delivery__overflow-active");
   });
   $(".message__btn").on("click", function (e) {
      e.preventDefault()
      $(".delivery__overflow").removeClass("delivery__overflow-active");
   });

   $(".delivery__overflow").on("click", function (e) {
      if ($(e.target).hasClass("delivery__overflow")) {
         $(".delivery__overflow").removeClass("delivery__overflow-active");
      }
   });
})()
