
;(function () {
    $(".burger").on("click", function () {
        $(".overflow").slideToggle(500);
        $(".body").toggleClass("stop-scrolling");
    });

    $( window ).resize(function(){ 
	    var width = $( window ).width();
        if(width > 800){
            $(".body").removeClass("stop-scrolling");
            $(".overflow").slideUp();
            $(".burger__container").removeClass("burger-active");
        }
	  });
})()