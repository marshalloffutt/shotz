// Load locations
const loadLocationsForMovies = (movieId) => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done((data) => {
                const locationsForMovies = data.locations.filter(location => location.id == movieId);
                console.log(locationsForMovies);
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
//                 reject('you fucked up marshall', error);
//             })
//     })
// }

// loadLocationsOnMovies

export { loadLocationsForMovies }