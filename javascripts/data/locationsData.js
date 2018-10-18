import { writeLocations } from '../components/locationsComponent.js'

// Load locations
const loadLocations = () => {
    $.get('../db/locations.json')
    .done((data) => {
        writeLocations(data.locations);
    })
    .fail((error) => {
        console.log({error});
    });
}

export { loadLocations }