document.addEventListener('DOMContentLoaded', function() {
    // Function to change the opacity of all images
    function changeImagesOpacity() {
        const images = document.querySelectorAll('img');
        images.forEach(image => {
            image.style.opacity = 0.5;
        });
    }

    // Function to trigger an Ajax request
    function loadBookData(filePath) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById('details').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', filePath, true);
        xhr.send();
    }

    // Assumes your images have IDs 'don-quixote-img', 'a-tale-of-two-cities-img', 'the-lord-of-the-rings-img'
    const bookImages = [
        { id: 'don-quixote-img', filePath: 'data/cervantes-data.html' },
        { id: 'two-cities-img', filePath: 'data/dickens-data.html' },
        { id: 'lotr-image', filePath: 'data/tolkien-data.html' }
    ];

    bookImages.forEach(book => {
        const imgElement = document.getElementById(book.id);
        if (imgElement) {
            imgElement.addEventListener('click', function() {
                loadBookData(book.filePath);
                changeImagesOpacity();
                this.style.opacity = 1;
            });
        }
    });
});
