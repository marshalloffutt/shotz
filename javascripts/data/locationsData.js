// Load locations promise for main view
const loadLocations = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done((data) => {
                const locationsForMovies = data.locations;
                resolve(locationsForMovies);
            })
            .fail((error) => {
                reject(error);
            })
    })
}

// Second locations promise for secondary view. The 'movieLocations' bit comes from
// the second promise on the movieData.js. We call this function on movieComponent.
const loadLocationsOnMovies = (movieLocations) => {
    let newArray = [];
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
        .done((data) => {
            movieLocations.forEach(movieLocation => {
                data.locations.forEach((location) => {
                    if (location.id === movieLocation) {
                        newArray.push(location);
                    }
                })
            })
            resolve(newArray);
        })
        .fail((error) => {
            reject(error);
        })
    })
}


export { loadLocations, loadLocationsOnMovies }