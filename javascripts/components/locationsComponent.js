// Add locations info to dom
const writeLocations = (arrayOfLocations) => {
    let domString = '';
    arrayOfLocations.forEach((location) => {
        domString += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${locations.imageUrl}" alt="${locations.name}">
            <div class="card-body">
                <h5 class="card-title">${locations.name}</h5>
                <p class="card-text">${locations.address}</p>
                <p class="card-text ${locations.time}">${locations.time}</p>
            </div>
        </div>
    `
    })
    // Write to the available div
    $("#locations").append(domString);
};

export { writeLocations }