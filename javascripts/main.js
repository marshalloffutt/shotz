import { initializeMainView } from './components/movieComponent.js';
import { initializeLocationsOnMainView } from './components/locationsComponent.js';
import { locationSearch, buttonEvents } from './events.js';

const runMyShit = () => {
    initializeMainView();
    initializeLocationsOnMainView();
    locationSearch();
    buttonEvents();
};

runMyShit();