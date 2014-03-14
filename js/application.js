$(document).ready(function() { 
	$('.btn').click(function() {
		$('#pageOverlay').fadeTo('fast', 0.95);
		$('#getStarted').fadeTo('slow', 0.95);
	});
	$('#pageOverlay').click(function() {
		$('#pageOverlay').fadeOut();
    $('#getStarted').fadeOut();
	});
	$('input[type=submit]').click(function(e) {
		e.preventDefault();
    $('#signatureForm').hide();
    $('.submitted').removeClass('hidden');
	});
});
