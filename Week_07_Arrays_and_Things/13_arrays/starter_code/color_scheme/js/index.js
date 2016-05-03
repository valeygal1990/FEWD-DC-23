// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

$('#switcher li').click(switchColor);

function switchColor(){
	console.log($(this).attr('data-color'));
	// Gets my color class name from the data-color attr.
	var bodyColor = $(this).attr('data-color');

	//sets the class name to my body.
	$('body').attr('class',bodyColor);
}

// function switchGray() {
//   $('body').attr('class', 'gray');
//   //Its better to use the attribute 
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }