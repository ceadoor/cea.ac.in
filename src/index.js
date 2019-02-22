import "bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import 'animate.css/animate.css'
import "./sass/main.scss";

$(document).ready(function () {
  $(".student_carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    smartSpeed: 350,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $(".news_carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  });
  $(".organisation_carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: false
      }
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('.home-navbar').addClass('shrink');
      $('#navbar-dropdown-hovered').addClass('shrink-dropdown')
    } else {
      $('nav').removeClass('shrink');
      $('#navbar-dropdown-hovered').removeClass('shrink-dropdown')
    }
  });
});

$(document).ready(function () {
  $('.nav-holder').hover(function () {},
    function () {
      // $('#navbar-dropdown-hovered').html("")
      $('#navbar-dropdown-hovered').animate({
        height: 0
      });
      $('nav').removeClass('nav-change');
    }
  )
  $('.dropdown').on('show.bs.dropdown mouseover', function () {
    $('nav').addClass('nav-change');
    $('#navbar-dropdown-hovered').html($(this).find('.dropdown-menu').html())
    $('#navbar-dropdown-hovered').animate({
      height: $('#navbar-dropdown-hovered').find('.dropdown-content').height() + 180
    });
  });
  $('.dropdown').on('hide.bs.dropdown mouseleave', function () {});
});


var distance = $('.course-navs').offset().top,
  $window = $(window);
$window.scroll(function () {
  if ($window.scrollTop() >= distance) {
    $('.course-navs').css('background', "#fff");
  } else {
    $('.course-navs').css('background', "transparent");
  }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}