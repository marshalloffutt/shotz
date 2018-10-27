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

const loadLocationsOnMovies = (movies) => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done((data) => {
                const moviesWithLocations = movies.map(movie => {
                    const matchingLocations = data.locations.filter(location => location.id === movie.locations);
                    movie.locations = matchingLocations;
                    return movie;
                })
                resolve(moviesWithLocations);
            })
            .fail((error) => {
                reject('error', error);
            })
    })
}

export { loadLocations, loadLocationsOnMovies }