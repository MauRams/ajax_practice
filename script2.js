$(document).ready(function(){

	$('#button').click(function() {
	var word = $('.user-input').val();
	$('.user-text').text(word)

	});

	$('.user-text').click(function(){

		$('p').hide();


	});
});
