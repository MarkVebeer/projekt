'use strict';

    /* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */

    (function($){

      var container = [];

      // Loop over gallery items and push it to the array
      $('#gallery').find('figure').each(function(){
        var $link = $(this).find('a'),
            item = {
              src: $link.attr('href'),
              w: $link.data('width'),
              h: $link.data('height'),
              title: $link.data('caption')
            };
        container.push(item);
      });

      $('#galeriabutton1, #galeriabutton2, #galeriabutton3, #galeriabutton4, #galeriabutton5, #galeriabutton6').click(function(event){

        // Prevent location change
        event.preventDefault();

        // Define object and gallery options
        var $pswp = $('.pswp')[0],
            options = {
              index: $(this).parent('figure').index(),
              bgOpacity: 0.85,
              showHideOpacity: true
            };

        // Initialize PhotoSwipe
        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
        gallery.init();
      });

    }(jQuery));