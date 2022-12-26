$(document).on('ready', function () {
  // animation on scroll
  var slideUp = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
    opacity: 0.1,
  };

  ScrollReveal().reveal('.anim', slideUp);
  // handle click on side menu toggler
  var togglerBtn = $('#nav-toggler');
  var sideMenu = $('#side-menu');
  var sideMenuOverlay = $('#side-menu-overlay');
  var closeBtn = $('#side-menu-close');
  togglerBtn.on('click', function () {
    sideMenu.addClass('active');
    if ($(window).width() > 768) {
      $(document).on('mousemove', function (e) {
        closeBtn.css({
          left: e.clientX - 40,
          top: e.clientY - 40,
        });
      });
    }
  });

  sideMenuOverlay.on('click', function (e) {
    sideMenu.removeClass('active');
    $(document).off();
  });

  // image zoom
  $('.img-zoom').magnificPopup({
    type: 'image',
    gallery: { enabled: true },
  });

  // handle close modal video
  $('.modal').on('hidden.bs.modal', function () {
    console.log($('#mount-video-iframe'));
    $('#mount-video-iframe').attr('src', $('#mount-video-iframe').attr('src'));
  });
  var stickyNavTop = $('.bottom-section-wrap').offset().top;
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $('.bottom-section-wrap').addClass('sticky');
    } else {
      $('.bottom-section-wrap').removeClass('sticky');
    }
  });
});
//   // var slideUp = {
//   //   distance: '30px',
//   //   origin: 'bottom',
//   //   duration: 1500,
//   //   opacity: 0.1,
//   // };
//   // ScrollReveal().reveal('.anim', slideUp);
//   // $(document).on('scroll', function () {
//   //   var $nav = $('.navbar');
//   //   $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   // });

//   // // handle click on navbar toggler
//   // $('#navbar-toggler').on('click', function () {
//   //   $('#navbar-menu').addClass('show');
//   //   $('#side-menu-fade').fadeIn();
//   // });
//   // $('#side-menu-fade').on('click', function () {
//   //   $('#navbar-menu').removeClass('show');
//   //   $('#side-menu-fade').fadeOut();
//   // });

//   // $('#header-slider').owlCarousel({
//   //   loop: true,
//   //   margin: 0,
//   //   nav: true,
//   //   dots: false,
//   //   items: 1,
//   //   autoplay: true,
//   //   autoplayTimeout:4000,
//   //   navSpeed:1000,
//   //   autoplaySpeed:1000,
//   //   autoplayHoverPause:true,
//   //   stagePadding:0,
//   //   animateOut: 'slideOutUp',
//   //   animateIn: 'slideInUp',
//   //   rtl: $('body').css('direction') === 'rtl',
//   //   navText: [
//   //     '<svg xmlns="http://www.w3.org/2000/svg" width="13.207" height="25.414" viewBox="0 0 13.207 25.414"><path id="chevron-back-outline" d="M184,112l12,12-12,12" transform="translate(-183.293 -111.293)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
//   //     '<svg xmlns="http://www.w3.org/2000/svg" width="13.207" height="25.414" viewBox="0 0 13.207 25.414"><path id="chevron-back-outline" d="M196,112l-12,12,12,12" transform="translate(-183.5 -111.293)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
//   //   ],
//   // });

//   // $('.modal').on('hidden.bs.modal', function () {
//   //   $('#company-video').attr('src', $('#company-video').attr('src'));
//   // });

//   // // handle click on nav items
//   // $('.nav-item a').on('click', function (t) {
//   //   $('#navbar-menu').removeClass('show');
//   //   $('#side-menu-fade').fadeOut();
//   //   var e = $(this);

//   //   t.preventDefault();

//   //   if (e.attr('href').includes('#') && e.attr('href').split('#')[1]) {
//   //     $('html, body').animate(
//   //       {
//   //         scrollTop: $('#' + e.attr('href').split('#')[1]).offset().top + 'px',
//   //       },
//   //       300
//   //     );
//   //   }
//   // });
// });
