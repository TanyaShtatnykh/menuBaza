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