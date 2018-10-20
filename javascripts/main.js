import { loadMovie } from './data/movieData.js'
import { loadLocations } from './data/locationsData.js'
import { locationSearch } from './events.js';

const runMyShit = () => {
    loadMovie();
    loadLocations();
    locationSearch();
}

runMyShit();