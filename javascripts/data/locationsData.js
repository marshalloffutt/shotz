// Load locations
const loadLocations = (movieId) => {
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

// const loadLocationsOnMovies = (movies) => {
//     return new Promise((resolve, reject) => {
//         $.get('../db/locations.json')
//             .done((data) => {
//                 const moviesWithLocations = movies.map(movie => {
//                     const matchingLocations = data.locations.filter(location => location.movie_id === movie.id);
//                     movie.locations = matchingLocations;
//                     return movie;
//                 })
//                 resolve(moviesWithLocations);
//             })
//             .fail((error) => {
//                 reject('error', error);
//             })
//     })
// }

// loadLocationsOnMovies

export { loadLocations }