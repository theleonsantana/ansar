// show contents once page has loaded. window.load vs document.ready: http://bit.ly/1QT8nIL
$(window).load(function() {
	$('#content-loading').fadeOut(125, function() {
		$('#content-sections').fadeIn(125);
	});
});

$(document).ready(function() {
	onePageNav();
});

function onePageNav() {
	// reveal nav when burger icon clicked
	$('#mobile-menu-btn').click(function() {
		// toggle means switch something on and off
		$('#main-nav').slideToggle();
		// return false means don't execute the HTML, only the JS
		return false;
	});
	// if user expands browser back to desktop size and nav is hidden, show it
	$(window).resize(function() {
		if ($(window).width() >= 760 && $('#main-nav').is(':hidden')) {
			// remove inline style hiding the nav
			$('#main-nav').removeAttr('style');	
		}
	});
}















