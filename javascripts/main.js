import { loadMovies } from './data/movieData.js'
import { loadLocations } from './data/locationsData.js'
import { locationSearch, buttonEvents } from './events.js';

const runMyShit = () => {
    loadMovies();
    loadLocations();
    locationSearch();
    buttonEvents();
};

runMyShit();