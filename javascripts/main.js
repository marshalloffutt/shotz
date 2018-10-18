import { loadMovie } from './data/movieData.js'
import { loadLocations } from './data/locationsData.js'

const runMyShit = () => {
    loadMovie();
    loadLocations();
}

runMyShit();