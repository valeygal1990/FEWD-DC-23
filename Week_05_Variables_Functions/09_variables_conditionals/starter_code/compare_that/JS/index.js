$(document).ready (function(){

	var a;
	var b;
	var myName = 'Bob';
//Defining my function 
	function whatIsMyName (myName){
		console.log(myName);
	}


//Usingmyfunction
	whatIsMyName(myName);




	$('#submit').click(compareNumbers);

	function compareNumbers(){
		a = $('#a').val();
		a = parseFloat(a);

		b = $('#b').val();
		b = parseFloat(b);

		console.log(a);
		console.log(b);
	

	if (a == b){
		$('#comparison').html('=');
		$('body').removeClass('greenBackground');
		$('body').css('backgroundColor','pink');
		console.log('equal to');
	}else if (a>b){
		$('#comparison').html('>');
		$('body').removeClass();
		$('body').addClass('pinkBackground');
		console.log('greater than');
	}else if (a<b){
		$('#comparison').html('<');
		$('body').addClass('greenBackground');
		console.log('less than');
	}

    }


});
