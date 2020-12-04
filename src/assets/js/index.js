require('bootstrap');
require('slick-carousel');
require('magnific-popup');

(function () {
  $('.hamburger').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.nav__list').slideToggle(400);
    $('body').toggleClass('is-modal');
    $('#overlay').toggleClass('active');
  });

  $('#overlay, .nav__list li').on('click', function (event) {
    if ($(window).innerWidth() < 992) {
      $('.hamburger').removeClass('active');
      $('.nav__list').slideUp(400);
      $('body').removeClass('is-modal');
      $('#overlay').removeClass('active');
    }
  });

  // Type Iframe - видео Youtube (или Vimeo), карты Гугл или другой контент в iframe 
  $('.advantage__youtube').magnificPopup({
    type: 'iframe'
  });

  $('.salon__slider').slick({
    slidesToShow: 2,
    infinite: true,
    autoplay: false,
    vertical: true,
    verticalSwiping: true,
    touchThreshold: 100,
    dots: false,
    prevArrow: false,
    nextArrow: false,

    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    // 
    // dotsClass: 'slider__dots'
  });

})();
// $('.slider').slick({
//   slidesToShow: 1,
//   infinite: true,
//   autoplay: false,
//   prevArrow: $(".slick-prev"),
//   nextArrow: $(".slick-next"),
//   dots: true,
//   dotsClass: 'slider__dots'
// });