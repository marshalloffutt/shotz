import { loadMovies } from './data/movieData.js'
import { loadLocationsForMovies } from './data/locationsData.js'
import { locationSearch, buttonEvents } from './events.js';

const runMyShit = () => {
    loadMovies();
    loadLocationsForMovies();
    locationSearch();
    buttonEvents();
};

runMyShit();