var foodImages = [
	'images/food1.jpg',
	'images/food2.jpg',
	'images/food3.jpg',
	'images/food4.jpg',
	'images/food5.jpg',
	'images/food6.jpg',
	'images/food7.jpg',
	'images/food8.jpg'

];

var currentIndex = 0;

// Skip button: When you cick the skip button, display the next image in the array.

$('.btn').click(function(){
	var action = $(this).val();

	if (action == "Skip") {
		if (currentIndex < (foodImages.length - 1) ) {
		//Go to the next image.

		currentIndex = currentIndex + 1;

	} else {
		currentIndex = 0;
	}

		$('#image-to-vote-on').attr('src', foodImages[currentIndex]);
		}
	}

	// Back buttton;  When you click the back button, display the previous image in the array.

	// $('.btn').click(function(){
	// 	var action = $(this).val();

		if (action == "Back"){

			//make sure currentIndex is not on the first image

			if currentIndex > 0) {
			// go to previous image.

			currentIndex = currentIndex - 1;

		} else {
			currentIndex = foodImages.lenth - 1;
		}

			$('#image-to-vote-on').attr('src', foodImages[currentIndex]);
		}
	}
	
});