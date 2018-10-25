import { loadMovies } from "../data/movieData.js";

// Add movie info to dom
const writeMovies = (movies) => {
    let domString = '';
    movies.forEach((movie) => {
        domString += `
        <div id="${movie.id}" class="movie-card p-2">
                <div class="card-body">
                        <h5 class="card-title">${movie.name}</h5>
                        <p>${movie.genre}</p>
                        <p>${movie.description}</p>
                        <p>Estimated Release Date: ${movie.release}</p>
                        <p class="card-text">${movie.movieLocations} Locations</p>
                </div>
          </div>
            `
    });
    $('#movies').html(domString);
}

const initializeMainView = () => {
    loadMovies().then((movies) => {
        writeMovies(movies);
    })
}

export { initializeMainView }