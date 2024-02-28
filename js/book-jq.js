$(document).ready(function() {
    // Function to change the opacity of all images and then highlight the clicked one
    function adjustImageOpacity(exceptId) {
        $('img').fadeTo('slow', 0.5); // Fade all images to opacity 0.5
        $(`#${exceptId}`).fadeTo('slow', 1); // Fade the specified image back to opacity 1
    }

    // Event listener for "Don Quixote" image
    $('#don-quixote-img').click(function() {
        adjustImageOpacity('don-quixote-img');
        $('#details').fadeOut(function() {
            $(this).load('https://nfaciano.rhody.dev/labs2/data/cervantes-data.html', function() {
                $(this).fadeIn('slow'); // Ensure you replace the URL with the correct path to your HTML file
            });
        });
    });

    // Event listener for "A Tale of Two Cities" image
    $('#two-cities-img').click(function() {
        adjustImageOpacity('two-cities-img');
        $('#details').fadeOut(function() {
            $(this).load('https://nfaciano.rhody.dev/labs2/data/dickens-data.html', function() {
                $(this).fadeIn('slow'); // Ensure you replace the URL with the correct path to your HTML file
            });
        });
    });

    // Event listener for "The Lord of the Rings" image
    $('#lotr-img').click(function() {
        adjustImageOpacity('lotr-img');
        $('#details').fadeOut(function() {
            $(this).load('https://nfaciano.rhody.dev/labs2/data/tolkien-data.html', function() {
                $(this).fadeIn('slow'); // Ensure you replace the URL with the correct path to your HTML file
            });
        });
    });
});
