import { initializeMainView } from './components/movieComponent.js';
import { initializeLocationsView } from './components/locationsComponent.js';
import { locationSearch, buttonEvents } from './events.js';

const runMyShit = () => {
    initializeMainView();
    initializeLocationsView();
    locationSearch();
    buttonEvents();
};

runMyShit();