// JavaScript Document

jQuery(function() {
    jQuery('.dj-main a').click(function() {
        jQuery('html,body').animate({
            scrollTop: jQuery(jQuery(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
});