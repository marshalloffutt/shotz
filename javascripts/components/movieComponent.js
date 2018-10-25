import { loadMovies } from "../data/movieData.js";

// Add movie info to dom
const writeMovies = (movies) => {
    let domString = '';
    movies.forEach((movie) => {
        domString += `
        <div id ="${movie.id}" class="card m-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${movie.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.genre}</h6>
                <p class="card-text">${movie.description}</p>
                <p class="card-text">Release Date: ${movie.release}</p>
                <p class="card-text">${movie.movieLocations}</p>
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