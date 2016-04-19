$(document).ready(function(){

//This is the total of my cash register when I load the page.
	var total = 0;

	$('#entry').submit(useRegister);

	function useRegister(event) {
		//Get what the users entered
		event.preventDefault();
		var newEntry = $('#newEntry').val();
		$('#entries').html('<td>' + newEntry + '</td>');

		newEntry = parseInt(newEntry);
		total = total + newEntry;
		console.log(total);

		$('#total').html(total);

	}

});

	