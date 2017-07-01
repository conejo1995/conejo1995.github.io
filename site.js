/**
 * Created by Conner on 6/27/2017.
 */
$('.scroller').click(function(event) {

      // Figure out element to scroll to
      var target = $('.article1');
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }

  });