// Load locations
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

// This is garbage, and I don't know what it is doing here
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