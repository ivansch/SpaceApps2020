/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// When the user scrolls down 20px from the top of the document, show the button



window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $(document).ready(function() {

      var counters = $(".count");
      var countersQuantity = counters.length;
      var counter = [];

      for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
      }

      var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
          if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
          }
        }, 40);
      }

      for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
      }
    });

    $(document).ready(function() {

      var counters = $(".count1");
      var counters2 = $(".count2");
      var countersQuantity = counters.length;
      var countersQuantity2 = counters2.length;
      var counter = [];
      var counter2 = [];

      for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
        counter2[i] = parseInt(counters2[i].innerHTML);
      }

      var count1 = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
          if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
          }
        }, 0);
      }
      var count2 = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
          if (localStart < value) {
            localStart++;
            counters2[id].innerHTML = localStart;
          }
        }, 0);
      }

      for (j = 0; j < countersQuantity; j++) {
        count1(27000, counter[j], j);
      }
      for (j = 0; j < countersQuantity2; j++) {
        count2(170, counter2[j], j);
      }
    });
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $(document).ready(function() {
//
//   var counters = $(".count");
//   var countersQuantity = counters.length;
//   var counter = [];
//
//   for (i = 0; i < countersQuantity; i++) {
//     counter[i] = parseInt(counters[i].innerHTML);
//   }
//
//   var count = function(start, value, id) {
//     var localStart = start;
//     setInterval(function() {
//       if (localStart < value) {
//         localStart++;
//         counters[id].innerHTML = localStart;
//       }
//     }, 40);
//   }
//
//   for (j = 0; j < countersQuantity; j++) {
//     count(0, counter[j], j);
//   }
// });

// $(document).ready(function() {
//
//   var counters = $(".count1");
//   var counters2 = $(".count2");
//   var countersQuantity = counters.length;
//   var countersQuantity2 = counters2.length;
//   var counter = [];
//   var counter2 = [];
//
//   for (i = 0; i < countersQuantity; i++) {
//     counter[i] = parseInt(counters[i].innerHTML);
//     counter2[i] = parseInt(counters2[i].innerHTML);
//   }
//
//   var count1 = function(start, value, id) {
//     var localStart = start;
//     setInterval(function() {
//       if (localStart < value) {
//         localStart++;
//         counters[id].innerHTML = localStart;
//       }
//     }, 0);
//   }
//   var count2 = function(start, value, id) {
//     var localStart = start;
//     setInterval(function() {
//       if (localStart < value) {
//         localStart++;
//         counters2[id].innerHTML = localStart;
//       }
//     }, 0);
//   }
//
//   for (j = 0; j < countersQuantity; j++) {
//     count1(17000, counter[j], j);
//   }
//   for (j = 0; j < countersQuantity2; j++) {
//     count2(170, counter2[j], j);
//   }
// });

(function($) {

  var $window = $(window),
    $body = $('body'),
    $wrapper = $('#page-wrapper'),
    $banner = $('#banner'),
    $header = $('#header');

  // Breakpoints.
  breakpoints({
    xlarge: [
      '1281px', '1680px'
    ],
    large: [
      '981px', '1280px'
    ],
    medium: [
      '737px', '980px'
    ],
    small: [
      '481px', '736px'
    ],
    xsmall: [null, '480px']
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Mobile?
  if (browser.mobile)
    $body.addClass('is-mobile');
  else {

    breakpoints.on('>medium', function() {
      $body.removeClass('is-mobile');
    });

    breakpoints.on('<=medium', function() {
      $body.addClass('is-mobile');
    });

  }

  // Scrolly.
  $('.scrolly').scrolly({
    speed: 1500,
    offset: $header.outerHeight()
  });

  // Menu.
  $('#menu').append('<a href="#menu" class="close"></a>').appendTo($body).panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: 'right',
    target: $body,
    visibleClass: 'is-menu-visible'
  });

  // Header.
  if ($banner.length > 0 && $header.hasClass('alt')) {

    $window.on('resize', function() {
      $window.trigger('scroll');
    });

    $banner.scrollex({
      bottom: $header.outerHeight() + 1,
      terminate: function() {
        $header.removeClass('alt');
      },
      enter: function() {
        $header.addClass('alt');
      },
      leave: function() {
        $header.removeClass('alt');
      }
    });

  }

})(jQuery);