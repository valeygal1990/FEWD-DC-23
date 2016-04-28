var foodImages = [
    'food1.jpg',
    'food2.jpg',
    'food3.jpg',
    'food4.jpg',
    'food5.jpg',
    'food6.jpg',
    'food7.jpg',
    'food8.jpg'
];

var currentIndex = 0;

// Skip button: When you click the button, display the next image in the array.

$('.btn').click(function() {
    var action = $(this).val();

    if (action == "Skip") {
        // Go to the next image.
        currentIndex = currentIndex + 1;
        $('#image-to-vote-on').attr('src', 'images/' + foodImages[currentIndex]);
    }
});