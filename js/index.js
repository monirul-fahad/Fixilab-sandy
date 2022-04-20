var PATH = {};
(function ($) {
  "use strict";
 

    // TESTIMONIAL SLIDER
    PATH.sliderTestimonial = function () {
      var vswiper = new Swiper(".testimonialSwiper", {
        speed: 2000,
        autoplay: {
          delay: 2000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    };
    
 
  // Window on load function
  $(window).on("load", function () {
    PATH.sliderTestimonial();
  });
})(jQuery);
