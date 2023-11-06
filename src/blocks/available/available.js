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