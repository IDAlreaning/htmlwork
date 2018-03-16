$(document).ready(function() {

    $(window).bind('scroll',function(){
    	parallaxScroll();

    });
});


function parallaxScroll(){
    var scrolled = $(window).scrollTop();
	$('#bg1').css('top',(0-(scrolled*.25))+'px');
	$('#bg2').css('top',(0-(scrolled*.5))+'px');
} 