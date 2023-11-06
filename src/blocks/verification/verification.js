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