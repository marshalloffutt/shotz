import { loadMovies } from "../data/movieData.js";

// Clicking on a movie card does something
const mainViewEvents = () => {
    $('#movies').on('click', '.movie-card', (e) => {
        const movieCardIClicked = $(e.target).closest('.movie-card').attr('id');
        $('#main-view').hide();
        $('#secondary-view').show();
    })
}

// Add movie info to dom
const writeMovies = (movies) => {
    let domString = '';
    movies.forEach((movie) => {
        domString += `
        <div id ="${movie.id}" class="card movie-card m-4" style="width: 18rem;">
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
        mainViewEvents();
    })
}

export { initializeMainView }