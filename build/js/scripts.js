
$('.available__options').slick({
  slidesToShow: 7,
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1199.98,
      settings: {
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 460,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
});


$(function () {
  $('.form__button').on('click', function(e) {
    e.preventDefault();
    $('.modal').addClass('modal--open');
    setTimeout(function () {
      $('.modal').removeClass('modal--open');
    }, 3000);
  });
});
$(function() {
  $('.header__menu-link').on('click', function() {
    $('main').addClass('open__page');
  });
});
$(function () {
  $('a[href="#popular"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(./img/menu-bg1.png)'});
  });
  $('a[href="#season"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(./img/menu-bg1.png)'});
  });
  $('a[href="#hookah"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(./img/menu-bg3.png)'});
  });
  $('a[href="#bar"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(./img/menu-bg4.png)'});
  });
  $('a[href="#food"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(./img/menu-bg5.png)'});
  });

  var subcategoryBtn = $('.main__subcategory-title');

  $(subcategoryBtn).on('click', function () {
    if ($(this).hasClass('main__subcategory-title--open')) {
      $(this).removeClass('main__subcategory-title--open');
      $(this).next('.main__products').removeClass('main__products--open');
    } else {
      $('.main__subcategory-title').removeClass('main__subcategory-title--open');
      $('.main__products').removeClass('main__products--open');
      $(this).addClass('main__subcategory-title--open');
      $(this).next('.main__products').addClass('main__products--open');
    }
    if ($(this).hasClass('main__subcategory-title--open')) {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 'fast');
    };
  });
  if ($(window).width() < 768) {
    $('.main__menu-link').on('click', function () {
      $('.main__menu-link').parent('.main__menu-item').toggleClass('main__menu-item--open');
      $('.main__menu-list').toggleClass('main__menu-list--open');
    });
  };
});




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

$( function() {
  $("#tabs").tabs();


  if ($(window).width() < 768) {
    $('a[href="#menu"]').parent('.header__menu-item').addClass('header__menu-item--menu');
  }
  


  $('.header__menu-item--menu').on('click', function () {
    $('.header__menu-item').toggleClass('header__menu-item--open');
    $('.header__menu-item--menu').toggleClass('header__menu-item--menu--open');
  })
});


$(function () {
  $('.product').on('click', function () {
    if ($(this).hasClass('product--visible')) {
      $(this).removeClass('product--visible');
    } else {
      $('.product').removeClass('product--visible');
      $(this).addClass('product--visible');
    }
  });
});

$('.slider__slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    swipe: true,
    adaptiveHeight: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});
$(document).ready(function () {
  $('.verification').addClass('verification--open');
  // $('body').css({'overflow-y' : 'hidden', 'height' : '100vh'});
  
  $('.verification__btn').on('click', function() {
    if ($(this).hasClass('verification__btn--yes')) {
      $('.verification').removeClass('verification--open');
      $('body').css({'overflow-y' : '', 'height' : ''});
    } else {
      $(location).attr('href', "https://www.google.ru/")
    }
  });
})
$(function() {
  $('.welcome__link-scroll').on('click', function() {
    $('main').addClass('open__page');
  });
});