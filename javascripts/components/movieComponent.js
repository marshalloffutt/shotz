import { loadMovies, moviesLocationsArray } from "../data/movieData.js";
import { loadLocationsOnMovies } from "../data/locationsData.js";
import { writeLocationsForMovie } from "./locationsComponent.js";

let movieCardIClicked = '';

// Clicking on a movie card does something
const mainViewEvents = () => {
    $('#movies').on('click', '.movie-card', (e) => {
        movieCardIClicked = $(e.target).closest('.movie-card').attr('id');
        $('#main-view').hide();
        $('#secondary-view').show();
        displayLocationsForMovie(movieCardIClicked);
        loadMovies().then((movies) => {
            writeSingleMovie(movies);
        })
    });
};

// Write movies cards to main view
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
                <p class="card-text">${movie.locations.length} shoot locations</p>
            </div>
        </div>
        `
    });
    $('#movies').html(domString);
};

// Write movie info to secondary view
const writeSingleMovie = (movies) => {
    let domString = '';
    movies.forEach((movie) => {
        if(movie.id == movieCardIClicked) {
            domString += `
            <div id ="${movie.id}" class="card movie-card m-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${movie.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${movie.genre}</h6>
                    <p class="card-text">${movie.description}</p>
                    <p class="card-text">Release Date: ${movie.release}</p>
                    <p class="card-text">${movie.locations.length} shoot locations</p>
                </div>
            </div>
            `
        }
    });
    $('#single-movie').html(domString);
}

const initializeMainView = () => {
    loadMovies().then((movies) => {
        writeMovies(movies);
        mainViewEvents();
    })
}

const displayLocationsForMovie = (movieId) => {
    moviesLocationsArray(movieId)
    // movieLocations comes from movieLocationsArray on movieData
    // loadLocationsOnMovies is the second promise on locationsData
    .then((movieLocations) => {
        return loadLocationsOnMovies(movieLocations)
    })
    // I don't know where moviesWithLocations comes from. I don't understand this part.
    .then((moviesWithLocations) => {
        writeLocationsForMovie(moviesWithLocations);
    })
    .catch((error) => {
        console.error('go home, marshall', error);
    })
}

export { initializeMainView }