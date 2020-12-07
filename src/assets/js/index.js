// 'use strict';
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
  $(document).ready(function () {
        $('.videobox__youtube, .contacts__map, .videobox__videobutton').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,

              fixedContentPos: false
    });
  });

  $(".reviews__slider").slick({
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    touchThreshold: 100,
    dots: true,
    dotsClass: "reviews__dots",
    prevArrow: false,
    nextArrow: false
  });

  $(".salon__slider").slick({
    slidesToShow: 2,
    infinite: true,
    autoplay: false,
    vertical: true,
    verticalSwiping: true,
    touchThreshold: 100,
    dots: false,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next")
  });

})();
window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function template(event) {
    var matrix = "+39 (___) - ___ - __ - __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
  }

  var phoneForm = document.querySelector(".feedback__tel");

  if (phoneForm) {
    phoneForm.addEventListener("input", template, false);
    phoneForm.addEventListener("focus", template, false);
    phoneForm.addEventListener("blur", template, false);
  }
});