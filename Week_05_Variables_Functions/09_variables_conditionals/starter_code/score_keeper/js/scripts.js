$(document).ready(function(){

	var score = 0;

	$('#add5').click(addFive);

	function addFive(){
		score = score + 5;
		$('#result').html(score);
	}

	$('#add10').click(addTen);

	function addTen(){
		score = score + 10;
		$('#result').html(score);
	}

	$('#sub1').click(subtructOne);

	function subtructOne(){
		score = score - 1;
		$('#result').html(score);
	}

	$('#zero').click(resetScore);

	function resetScore(){
		score = 0;
		$('#result').html(score);
	}

	var number = 4;
	var numberString = number.toString();

	number = number + "hello world";

});

//'Snow is "fun"'
//"I can't go out"
//'I love "Charlotte\'s Web"'
