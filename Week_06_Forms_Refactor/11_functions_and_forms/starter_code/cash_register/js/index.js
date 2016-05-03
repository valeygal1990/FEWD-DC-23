$(document).ready(function(){
//define total

var total = 0;


// //wait for the 'event' to happen (in this case user submits a form)
//click into the form
//type in a number
//hit enter which submits the form
$('form#entry').submit(addToTotal); //(this is called a submit event)

// //This is where the js kicks in...

function addToTotal(){

		event.preventDefault();
		//find a new entry field
		//get value of field
		var entry = $('#newEntry').val();
		var floatEntry = parseFloat(entry);

		//add value to total

		total = total + floatEntry; 


		//show new total to the user

		$('#total').html(total);

		//clear the form
		$('#newEntry').val('');//(set the value to nothing in order for the form to reset)
			//don't forget to include the blank quotes within the val parenthesis
		//show the each value the user entered
		// $('#entries').html('<tr><td>' + entry + '</td></tr>');
			$('#entries').append('<tr><td>' + entry + '</td></tr>')//instead of using html
			//use append to add the total to the end of whatever is in the parenthesis

} //close the curly braces down here because all of the other stuff happens inside of this function



});