import { loadLocations } from "../data/locationsData.js";

// Write locations cards to main view
const writeLocations = (locations) => {
    let domString = '';
    locations.forEach(location => {
        domString += `
        <div id="${location.id}" class="card locations ${location.time} m-4" style="width: 18rem;">
            <img class="card-img-top" src="${location.imageUrl}" alt="${location.name}">
            <div class="card-body criteria">
                <h5 class="card-title title">${location.name}</h5>
                <p class="card-text address">${location.address}</p>
            </div>
            <div>
                <p class="card-text ${location.time}">Available Shoot Time: ${location.time}</p>
            </div>  
        </div>
    `
    })
    $("#locations").append(domString);
};

// Write locations cards to secondary view
const writeLocationsForMovie = (locations) => {
    let domString = '';
    locations.forEach(location => {
        domString += `
        <div id="${location.id}" class="card locations ${location.time} m-4" style="width: 18rem;">
            <img class="card-img-top" src="${location.imageUrl}" alt="${location.name}">
            <div class="card-body criteria">
                <h5 class="card-title title">${location.name}</h5>
                <p class="card-text address">${location.address}</p>
            </div>
            <div>
                <p class="card-text ${location.time}">Available Shoot Time: ${location.time}</p>
            </div>  
        </div>
    `
    })
    $("#locations-for-movie").append(domString);
};

const initializeLocationsOnMainView = () => {
    loadLocations().then((locations) => {
        writeLocations(locations);
    });
};

export { initializeLocationsOnMainView, writeLocations, writeLocationsForMovie }