/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fetch API / Async Functions:
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get search query value
const searchQuery = document.getElementById('searchQuery').value;

// Get hardiness zone value
const hardinessInput = document.getElementById('hardinessZone').value;

// Asynch Function to fetch species list based on search query
async function fetchAndDisplaySpeciesList(searchQuery) {

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    if (!searchQuery) {
        showErrorModal();
        return;
    }

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

// Async Function to fetch species list based on Hardiness Zone value (1-13)
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dynamic Generation Functions:
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to display search results
const displaySearchResults = (results) => {

    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '<h2>Search Results</h2>';

    if (results.length === 0) {
        showErrorModal();
        return;
    }

    const row = document.createElement('div');
    row.classList.add('row');

    results.forEach(species => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');

        const card = createSpeciesCard(species);

        col.appendChild(card);
        row.appendChild(col);
    });

    searchResultsContainer.appendChild(row);
};


// Function to create HTML card for species
const createSpeciesCard = (species) => {

    const card = document.createElement('div');
    card.classList.add('card', 'h-100');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = species.default_image && species.default_image.medium_url ? species.default_image.medium_url : 'https://via.placeholder.com/150';
    img.alt = species.common_name;

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

    const formCheck = document.createElement('div');
    formCheck.classList.add('form-check', 'mt-3');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('form-check-input');
    checkBox.id = `favorite${species.id}`;
    checkBox.addEventListener('change', (event) => {
        if (event.target.checked) {
            addToFavorites(species);
        } else {
            removeFromFavorites(species);
        }
    });

    const label = document.createElement('label');
    label.classList.add('form-check-label');
    label.htmlFor = `favorite${species.id}`;
    label.textContent = 'Add to Favorites';

    formCheck.appendChild(checkBox);
    formCheck.appendChild(label);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(formCheck);
    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
};

// Fetch and display hardiness zones 1-13 on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayHardinessList('1,2,3,4,5,6,7,8,9,10,11,12,13');
});

// Function to display hardiness results
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

        // Add event listener for the checkbox
        document.getElementById(`favorite${index}`).addEventListener('change', (event) => {
            if (event.target.checked) {
                addToFavorites(species);
            } else {
                removeFromFavorites(species);
            }
        });
    });
}

// Favorite array 
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Function to add item to favorites array
const addToFavorites = (species) => {
    if (!favorites.some(fav => fav.id === species.id)) {
        favorites.push(species);
        updateLocalStorage();
        displayFavorites();
    }
};

// Function to remove item from favorites array 
const removeFromFavorites = (species) => {
    favorites = favorites.filter(favorite => favorite.id !== species.id);
    updateLocalStorage();
    displayFavorites();
};

// Function to display favorite items
function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites');
    favoritesContainer.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesContainer.innerHTML += '<p>No favorites added yet.</p>';
        return;
    }
    
    favorites.forEach((species, index) => {
        const favoriteItem = document.createElement('div');
        favoriteItem.classList.add('card', 'mb-3');
    
        favoriteItem.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    ${species.default_image && species.default_image.medium_url ? `<img src="${species.default_image.medium_url}" alt="${species.common_name}" class="img-fluid rounded-start">` : '<img src="https://via.placeholder.com/150" alt="No image available" class="img-fluid rounded-start">'}
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${species.common_name}</h5>
                        <p class="card-text">
                            <strong>Scientific Name:</strong> <em>${species.scientific_name.length > 0 ? species.scientific_name.join(', ') : 'N/A'}</em> <br>
                            <strong>Other Names:</strong> ${species.other_name.length > 0 ? species.other_name.join(', ') : 'N/A'} <br>
                            <strong>Cycle:</strong> ${species.cycle || 'N/A'} <br>
                            <strong>Sunlight:</strong> ${species.sunlight.length > 0 ? species.sunlight.join(', ') : 'N/A'} <br>
                            <strong>Watering:</strong> ${species.watering || 'N/A'} <br>
                        </p>
                        <!-- Remove from favorites checkbox -->
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="removeFavorite${index}" checked>
                            <label class="form-check-label" for="removeFavorite${index}">Remove from Favorites</label>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        favoritesContainer.appendChild(favoriteItem);

        // Add event listener for the remove checkbox
        document.getElementById(`removeFavorite${index}`).addEventListener('change', (event) => {
            if (!event.target.checked) {
                removeFromFavorites(species);
            }
        });
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Modals and Event Listeners:
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to show search form error modal
function showErrorModal() {
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
}

// Function to show hardiness form error modal
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

// Event listener for search button
document.getElementById('searchButton').addEventListener('click', () => {
    const searchQuery = document.getElementById('searchQuery').value;
    fetchAndDisplaySpeciesList(searchQuery);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Local Storage Functionality:
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to update local storage with the current favorites array
const updateLocalStorage = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Load favorites from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayHardinessList('1,2,3,4,5,6,7,8,9,10,11,12,13');
    displayFavorites();
});