document.addEventListener('DOMContentLoaded', function() {
    // Function to change the opacity of all images
    function changeImagesOpacity() {
        const images = document.querySelectorAll('img');
        images.forEach(image => {
            image.style.opacity = 0.5;
        });
    }

    // Function to trigger an Ajax request to load data from an XML file
    function loadBookData(filePath) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                updateDetailsFromXML(xhr.responseXML);
            }
        };
        xhr.open('GET', filePath, true);
        xhr.send();
    }

    // Function to update the details section from XML data
    function updateDetailsFromXML(xml) {
        const detailsDiv = document.getElementById('details');
        detailsDiv.innerHTML = ''; // Clear existing details

        // Assuming your XML structure matches the expected format
        const book = xml.documentElement; // Gets the root element, assuming there's only one book per XML
        const title = book.getElementsByTagName('title')[0].textContent;
        const author = book.getElementsByTagName('author')[0].textContent;
        const sold = book.getElementsByTagName('sold')[0].textContent;
        const description = book.getElementsByTagName('description')[0].textContent;

        // Creating new elements to add to the details div
        detailsDiv.innerHTML += `<h3>${title}</h3>`;
        detailsDiv.innerHTML += `<p><b>Author:</b> ${author}</p>`;
        detailsDiv.innerHTML += `<p><b>Copies Sold:</b> ${sold} million</p>`;
        detailsDiv.innerHTML += `<p>${description}</p>`;
    }

    // Dictionary of book images and corresponding XML file paths
    const bookImages = [
        { id: 'don-quixote-img', filePath: 'data/book-data.xml' }, // Assuming each book has a unique XML
        { id: 'two-cities-img', filePath: 'data/book-data.xml' }, // Update filePaths as per actual XML file locations
        { id: 'lotr-img', filePath: 'data/book-data.xml' }
    ];

    // Adding click event listeners to each book image
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
