$('.slick-center-dark').slick({
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
     
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
     
        slidesToShow: 1
      }
    }
  ]
});