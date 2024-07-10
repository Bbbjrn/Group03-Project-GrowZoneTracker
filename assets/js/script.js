// API access key: sk-YLTu6685827296e1c6133

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start Search Bar Functionality
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

let searchQuery = document.getElementById('searchQuery').value;

  fetch(`https://perenual.com/api/species-list?key=sk-YLTu6685827296e1c6133`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
   .catch(error => console.log('error', error));


// Function to fetch species list based on search query
  // Calls 'displaySearchResults' function with the fetched data

async function fetchAndDisplaySpeciesList(searchQuery) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const url = `https://perenual.com/api/species-list?key=sk-YLTu6685827296e1c6133&q=${searchQuery}`;

    try {
        const response = await fetch(url, requestOptions);
        const result = await response.json();
        
        const speciesArray = result.data;

        displaySearchResults(speciesArray);
    } catch (error) {
        console.log('error', error);
        showErrorModal();
    }
}

// Function to display search results
    // Clears results and sets the title
    // Checks if there are no results and displays the title
    // Iterates over the results and creates list items for each species, displaying all relevant information including common_name, scientific_name, other_name, cycle, default_image, sunlight, and watering.
    // Properly handles displaying the image by checking if species.default_image and species.default_image.url exist, and then creating an <img> element with the URL.

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '<h2>Search Results</h2>'; // Clear previous results
    
    if (results.length === 0) {
        showErrorModal();
        return;
    }
    
    const row = document.createElement('div');
    row.classList.add('row');
    
    results.forEach(species => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');
    
        const card = document.createElement('div');
        card.classList.add('card', 'h-100');
    
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
    
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = species.common_name;
    
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerHTML = `
            <strong>Scientific Name:</strong> <em>${species.scientific_name.length > 0 ? species.scientific_name.join(', ') : 'N/A'}</em> <br>
            <strong>Other Names:</strong> ${species.other_name.length > 0 ? species.other_name.join(', ') : 'N/A'} <br>
            <strong>Cycle:</strong> ${species.cycle || 'N/A'} <br>
            <strong>Sunlight:</strong> ${species.sunlight.length > 0 ? species.sunlight.join(', ') : 'N/A'} <br>
            <strong>Watering:</strong> ${species.watering || 'N/A'} <br>
            `;
    
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = species.default_image && species.default_image.medium_url ? species.default_image.medium_url : 'https://via.placeholder.com/150';
        img.alt = species.common_name;
    
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });
    
    searchResultsContainer.appendChild(row);
}

// Function to show error modal
function showErrorModal() {
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
}

// Event listener for search button
document.getElementById('searchButton').addEventListener('click', () => {
    const searchQuery = document.getElementById('searchQuery').value;
    fetchAndDisplaySpeciesList(searchQuery);
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// End of Search Bar Functionality
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Console Log Component for Examining Hardiness Map

const hardinessInput = document.getElementById('hardinessZone').value;

  fetch(`https://perenual.com/api/species-list?key=sk-YLTu6685827296e1c6133&hardiness=${hardinessInput}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
   .catch(error => console.log('error', error));

// Function to fetch species list based on hardiness
    // Calls 'displayHardinessResults' function with the fetched data

async function fetchAndDisplayHardinessList(hardinessInput) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const url = `https://perenual.com/api/species-list?key=sk-YLTu6685827296e1c6133&hardiness=${hardinessInput}`;

    try {
        const response = await fetch(url, requestOptions);
        const result = await response.json();
        
        const speciesArray = result.data;

        displayHardinessResults(speciesArray);
    } catch (error) {
        console.log('error', error);
    }
}


// Function to display hardiness results
    // Clears results and sets the title
    // Checks if there are no results and displays the title
    // Iterates over the results and creates list items for each species, displaying all relevant information including common_name, scientific_name, other_name, cycle, default_image, sunlight, and watering.
    // Properly handles displaying the image by checking if species.default_image and species.default_image.url exist, and then creating an <img> element with the URL.

    function displayHardinessResults(results) {
        const plantAccordion = document.getElementById('plantAccordion');
        plantAccordion.innerHTML = '';
    
        results.forEach((species, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion-item');
    
            const headerId = `heading${index}`;
            const collapseId = `collapse${index}`;
    
            accordionItem.innerHTML = `
                <h2 class="accordion-header" id="${headerId}">
                    <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="${collapseId}">
                        ${species.common_name}
                    </button>
                </h2>
                <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${headerId}" data-bs-parent="#plantAccordion">
                    <div class="accordion-body">
                        <div class="row">
                            <div class="col-md-4">
                                ${species.default_image && species.default_image.medium_url ? `<img src="${species.default_image.medium_url}" alt="${species.common_name}" class="img-fluid rounded mb-3">` : '<img src="https://via.placeholder.com/150" alt="No image available" class="img-fluid rounded mb-3">'}
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><strong>Scientific Name:</strong> <em>${species.scientific_name.length > 0 ? species.scientific_name.join(', ') : 'N/A'}</em></li>
                                    <li class="list-group-item"><strong>Other Names:</strong> ${species.other_name.length > 0 ? species.other_name.join(', ') : 'N/A'}</li>
                                    <li class="list-group-item"><strong>Cycle:</strong> ${species.cycle || 'N/A'}</li>
                                    <li class="list-group-item"><strong>Sunlight:</strong> ${species.sunlight.length > 0 ? species.sunlight.join(', ') : 'N/A'}</li>
                                    <li class="list-group-item"><strong>Watering:</strong> ${species.watering || 'N/A'}</li>
                                </ul>
                            </div>
                        </div>
                        <!--Add to favorites form-check-->
                        <div class="form-check mt-3">
                            <input type="checkbox" class="form-check-input" id="favorite${index}">
                            <label class="form-check-label" for="favorite${index}">Add to Favorites</label>
                        </div>
                    </div>
                </div>
            `;
    
            plantAccordion.appendChild(accordionItem);
        });
    }

// Fetch and display hardiness zones 1-13 on page load

document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayHardinessList('1,2,3,4,5,6,7,8,9,10,11,12,13');
});
    
// Function to show error modal

function showHardinessErrorModal() {
    const hardinessErrorModal = new bootstrap.Modal(document.getElementById('hardinessErrorModal'));
    hardinessErrorModal.show();
}
    
// Event listener for hardiness button

document.getElementById('hardinessButton').addEventListener('click', () => {
   
    const hardinessInput = document.getElementById('hardinessZone').value;
    if (!hardinessInput || hardinessInput === "0") {
        showHardinessErrorModal();
        return;
    }
    fetchAndDisplayHardinessList(hardinessInput);
});