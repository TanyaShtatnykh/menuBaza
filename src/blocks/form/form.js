$(function () {
  $('.form__button').on('click', function(e) {
    e.preventDefault();
    $('.modal').addClass('modal--open');
    setTimeout(function () {
      $('.modal').removeClass('modal--open');
    }, 3000);
  });
});