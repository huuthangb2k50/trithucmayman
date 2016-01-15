jQuery(document).ready(function($) {

    jQuery(".navgoco .nav").navgoco();

    jQuery(".icon-navgovo").each(function(){
        var thisIcon = jQuery(this);

        thisIcon.on('click',function() {
            jQuery(".navgoco .nav").toggleClass("active");
        });
    });

});