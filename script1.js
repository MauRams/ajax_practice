
//button call to pull in data from the meetup.com api
//the loop will help to display the data from the api itslef


$('#button').click(function(){

	$('.textBox').text('Loading...');
	$.ajax({
		type:'GET',
		url:"https://api.meetup.com/2/cities",
		success: function(data){
			$('.textBox').html('');
			for(var i = 0; i<data.results.length; i++){
				var place = data.results[i].city+", "+
				data.results[i].state
				$('.textBox').append('<p>' + place + '</p>');  
			}
		},
		dataType: 'jsonp',
	});

});

