$(document).ready(function() {
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		// redrawDotNav();
    });
});

/* Scroll the background layers */
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
	$('#bg1').css('top',(0-(scrolled*.25))+'px');
	$('#bg2').css('top',(0-(scrolled*.5))+'px');
}