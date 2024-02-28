document.addEventListener('DOMContentLoaded', function() {
    // Function to change the opacity of all images
    function changeImagesOpacity() {
        const images = document.querySelectorAll('img');
        images.forEach(image => {
            image.style.opacity = 0.5;
        });
    }

    // Function to trigger an Ajax request to load data from an XML file
    function loadBookData(filePath, bookIndex) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                updateDetailsFromXML(xhr.responseXML, bookIndex);
            }
        };
        xhr.open('GET', filePath, true);
        xhr.send();
    }

    // Function to update the details section from XML data
    function updateDetailsFromXML(xml, bookIndex) {
        const detailsDiv = document.getElementById('details');
        detailsDiv.innerHTML = ''; // Clear existing details

        // Accessing the specific book based on the provided index
        const book = xml.getElementsByTagName('book')[bookIndex];
        const title = book.getElementsByTagName('title')[0].childNodes[0].nodeValue;
        const author = book.getElementsByTagName('author')[0].childNodes[0].nodeValue;
        const sold = book.getElementsByTagName('sold')[0].childNodes[0].nodeValue;
        const description = book.getElementsByTagName('description')[0].childNodes[0].nodeValue;

        // Creating new elements to add to the details div
        detailsDiv.innerHTML += `<h3>${title}</h3>`;
        detailsDiv.innerHTML += `<p><b>Author:</b> ${author}</p>`;
        detailsDiv.innerHTML += `<p><b>Copies Sold:</b> ${sold} million</p>`;
        detailsDiv.innerHTML += `<p>${description}</p>`;
    }

    // Dictionary of book images, corresponding XML file paths, and their indexes
    const bookImages = [
        { id: 'don-quixote-img', filePath: 'data/book-data.xml', index: 0 },
        { id: 'two-cities-img', filePath: 'data/book-data.xml', index: 1 },
        { id: 'lotr-img', filePath: 'data/book-data.xml', index: 2 }
    ];

    // Adding click event listeners to each book image
    bookImages.forEach(book => {
        const imgElement = document.getElementById(book.id);
        if (imgElement) {
            imgElement.addEventListener('click', function() {
                loadBookData(book.filePath, book.index);
                changeImagesOpacity();
                this.style.opacity = 1;
            });
        }
    });
});
