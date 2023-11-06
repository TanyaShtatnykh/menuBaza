$(function () {
  $('.menu__name').on('click', function() {
    if (!$(this).hasClass('menu__name--open')) {
      $('.menu__name').removeClass('menu__name--open');
      $('.menu__slider').removeClass('menu__slider--open');
      $('.menu__photo').removeClass('menu__photo--open');
    }
    $(this).toggleClass('menu__name--open');
    $(this).next('.menu__photo').toggleClass('menu__photo--open');
    $(this).next('.menu__slider').toggleClass('menu__slider--open');
    
    if ($(this).hasClass('menu__name--open')) {
      $('html, body').animate({
        scrollTop: $('.menu__name--open').offset().top
      }, 'fast');
    } else {
      $('html, body').animate({
        scrollTop: $('.menu__title').offset().top
      }, 'fast');
    }

    $('.menu__slider').not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      swipe: true,
      responsive: [
        {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            adaptiveHeight: true,
          }
        }
      ]
    });
  });
});