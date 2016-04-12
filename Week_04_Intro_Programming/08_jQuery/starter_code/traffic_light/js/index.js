//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function())

$('#stopButton').click(colorStopLight);

function colorStopLight(){
	$('#stopLight').css('backgroundColor','red');
	$('#slowLight, #goLight').css('backgroundColor','black');
}

$('#slowButton').click(colorSlowLight);

function colorSlowLight(){
	$('#slowLight').css('backgroundColor','yellow');
	$('#stopLight, #goLight').css('backgroundColor','black');
}

$('#goButton').click(colorGoLight);

function colorGoLight(){
	$('#goLight').css('backgroundColor','green');
	$('#stopLight, slowLight').css('backgroundColor','black');
}

});