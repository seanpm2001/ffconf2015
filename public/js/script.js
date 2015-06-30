// Scroll to session
(function() {
  var $ = function (s) {
    try {
      return document.querySelectorAll(s);
    } catch (e) {
      return [];
    }
  };

  var skipNav = false; // if we want to scroll down without showing the menu
  var $nav = $('.nav-main');
  var today = new Date();
  var best = null;
  var isConfDay = (today.getDate() === confDay.getDate()) &&
                  (today.getMonth() === confDay.getMonth()) &&
                  (today.getFullYear() === confDay.getFullYear());

  if (isConfDay) {
    // find the current session
    var sessions = $('.js-session');
    var length = sessions.length;
    best = sessions[0];

    for (var i = 0; i < length; i++) {
      if ((Date.parse(sessions[i].getAttribute('data-date')) - (5 * 1000 * 60)) < today) {
        best = sessions[i];
      }
    }
  }

  // if today is conference day, then scroll the current session in to view
  if (isConfDay && best && !window.location.hash) {
    setTimeout(function () {
      best.scrollIntoView(true);
    }, 750);
  } else if (skipNav) {
    // only scroll the front page
    // && /mobi/i.test(navigator.userAgent)
    $nav.length > 0 && location.pathname === '/' && !location.hash && setTimeout(function () {
      if (!pageYOffset) window.scrollTo(0, $nav[0].offsetHeight);
    }, 750);
  }
})();

// X-Wing
(function() {
  $(document).on('ready', function() {
    var $buttonA = $('.xwing-btn2');
    $buttonA.on('click', function() {
      this.classList.toggle('xwing-btn2-rotate');
    });
  });
  // sticky
  // $('.xwing-wrapper').fixedsticky();
  var $xwing = $('.xwing-wrapper');

  var $xwingHeight = $xwing.height();
  var $xwingDummy = $('<div class="xwing-dummy"></div>');
  $xwingDummy.css('height', $xwingHeight + 'px').hide();
  $xwingDummy.insertAfter($xwing);

  // var vv = new Waypoint({
  //   element: document.getElementById('xwing'),
  //   handler: function(direction) {
  //     console.log(direction + ' hit');
  //     if (direction === 'down') {
  //       $xwing.css('position', 'static');
  //       $xwingDummy.hide();
  //     }
  //     if (direction === 'up') {
  //       $xwing.css('position', 'fixed');
  //       $xwingDummy.show();
  //     }
  //   },
  //   offset: 'bottom-in-view'
  // });
  // window.onload = function() {
  //   setTimeout(function() {
      $xwing.css('position', 'fixed').css('overflow', '');
      $xwingDummy.show();
  //   }, 1000);
  // };
  // var vv = new Waypoint({
  //   element: document.getElementById('bottom'),
  //   handler: function(direction) {
  //     console.log(direction + ' hit');
  //     if (direction === 'down') {
  //       $xwing.css('position', 'static').css('overflow', 'hidden');
  //       $xwingDummy.hide();
  //     }
  //     if (direction === 'up') {
  //       $xwing.css('position', 'fixed').css('overflow', '');
  //       $xwingDummy.show();
  //     }
  //   },
  //   offset: '100%'
  // });
})();