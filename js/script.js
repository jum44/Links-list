/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

/**
 * Scripts
 */
 
(function($) {
    
    $(document).ready(function() {

        /*---------- = Navigation autres sites ----------*/
        var allSibling = $('#block-menu-menu-autres-sites .menu-item:not(.first)');
        allSibling.css('display','none');

        $('#block-menu-menu-autres-sites .menu').addClass('js');
 
        $('#block-menu-menu-autres-sites .menu').hover(
          function() {
            $(this).children().stop( true, true ).fadeIn();
            $(this).children('.first').removeClass('no-active').addClass('active');
          },
          function() {
            $(this).children(':not(".first")').stop( true, true ).fadeOut();
            $(this).children('.first').removeClass('active').addClass('no-active');
          }
        );
         
        $('#block-menu-menu-autres-sites .first a').focus(function() {
            $(this).parents('li').siblings().show();
        });

        $('#block-menu-menu-autres-sites a').focus(function() {
            $(this).parents('ul').addClass('focus');
        });

        $('#block-menu-menu-autres-sites .last a').focusout(function() {
            $(this).parents('ul').removeClass('focus');
            allSibling.css('display','none');
        });
  
    }); /* Fin $(document).ready */
})(jQuery);
