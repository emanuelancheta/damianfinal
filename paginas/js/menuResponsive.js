$(document).ready(function() {
  
  /* CLick BTN (Open and Close) */
	$('.button-nav--toggle').on('click', function(e) {
        e.preventDefault();
		$(this).toggleClass('active');
	});
  
});