$(function () {
  $('a[href="#popular"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(../img/menu-bg1.png)'});
  });
  $('a[href="#season"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(../img/menu-bg1.png)'});
  });
  $('a[href="#hookah"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(../img/menu-bg3.png)'});
  });
  $('a[href="#bar"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(../img/menu-bg4.png)'});
  });
  $('a[href="#food"]').on('click', function() {
    $('.menu-main-screen__bg').css({'background-image' : 'url(../img/menu-bg5.png)'});
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
  });
});