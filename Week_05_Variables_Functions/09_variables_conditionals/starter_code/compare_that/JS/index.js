$(document).ready(function() {

    var a;
    var b;

    // Defining my function
    function whatIsMyName(name) {
        console.log(name);
    }


    // Using my function
    whatIsMyName('Jane');
    console.log(name);



    $('#submit').click(compareNumbers);

    function compareNumbers() {
        a = $('#a').val();
        a = parseInt(a);
        b = $('#b').val();
        b = parseInt(b);
        console.log(a);
        console.log(b);

        if (a>b) {
            $('#comparison').html('>');
            $('body').removeClass();
            $('body').addClass('pinkBackground');
        } else if (a<b) {
            $('#comparison').html('<');
            $('body').removeClass();
            $('body').addClass('greenBackground');
        } else if (a == b) {
            $('#comparison').html('=');
        }
    }

});