// Load locations
$.get('../db/locations.json')
.done((data) => {
    writeLocations(data.locations);
})
.fail((error) => {
    console.log({error});
});