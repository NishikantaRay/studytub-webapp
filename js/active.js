(function ($) {
  "use strict";
  var $window = $(window);
  $window.on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });
  $window.on("resizeEnd", function () {
    $(".full_height").height($window.height());
  });
  $window
    .on("resize", function () {
      if (this.resizeTO) clearTimeout(this.resizeTO);
      this.resizeTO = setTimeout(function () {
        $(this).trigger("resizeEnd");
      }, 300);
    })
    .trigger("resize");
  $window.on("scroll", function () {
    if ($window.scrollTop() > 20) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
  if ($.fn.owlCarousel) {
    var welcomeSlide = $(".hero-slides");
    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 2000,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
    });
    $(".hero-post-slide").owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3500,
      smartSpeed: 1000,
      center: true,
      responsive: { 0: { items: 1 }, 768: { items: 3 } },
    });
    $(".world-catagory-slider, .world-catagory-slider2").owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3500,
      smartSpeed: 2000,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
    });
  }
  $(".portfolio-menu button.btn").on("click", function () {
    $(".portfolio-menu button.btn").removeClass("active");
    $(this).addClass("active");
  });
  if ($.fn.imagesLoaded) {
    $(".sonar-portfolio").imagesLoaded(function () {
      $(".portfolio-menu").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });
      var $grid = $(".sonar-portfolio").isotope({
        itemSelector: ".single_gallery_item",
        percentPosition: true,
        masonry: { columnWidth: ".single_gallery_item" },
      });
    });
  }
  if ($.fn.magnificPopup) {
    $(".gallery-img").magnificPopup({ type: "image" });
    $(".video-btn").magnificPopup({ type: "iframe" });
  }
  if ($.fn.matchHeight) {
    $(".equalize").matchHeight({ byRow: true, property: "height" });
  }
  if ($.fn.counterUp) {
    $(".counter").counterUp({ delay: 10, time: 2000 });
  }
//   if ($.fn.scrollUp) {
//     $.scrollUp({
//       scrollSpeed: 1000,
//       easingType: "easeInOutQuart",
//       scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
//     });
//   }
  $("a[href='#']").on("click", function ($) {
    $.preventDefault();
  });
  if ($window.width() > 767) {
    new WOW().init();
  }
  var search = document.getElementById("search"),
    searchWrapper = document.getElementById("search-wrapper"),
    closeIcon = document.getElementById("close-icon");
  search.onfocus = function () {
    searchWrapper.classList.add("search-expanded");
    this.addEventListener("transitionend", function () {
      closeIcon.style.display = "block";
    });
  };
  search.onblur = function () {
    searchWrapper.classList.remove("search-expanded");
    closeIcon.classList.add("closing");
    this.addEventListener("transitionend", function () {
      closeIcon.classList.remove("closing");
      closeIcon.style.display = "none";
    });
  };
  closeIcon.onclick = function () {
    this.classList.add("closing");
    document.activeElement.blur();
    setTimeout(function () {
      closeIcon.classList.remove("closing");
    }, 1000);
  };
})(jQuery);
