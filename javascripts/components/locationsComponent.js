// Add locations info to dom
const writeLocations = (arrayOfLocations) => {
    let domString = '';
    arrayOfLocations.forEach((location) => {
        domString += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${location.imageUrl}" alt="${location.name}">
            <div class="card-body">
                <h5 class="card-title">${location.name}</h5>
                <p class="card-text">${location.address}</p>
                <p class="card-text ${location.time}">${location.time}</p>
            </div>
        </div>
    `
    })
    // Write to the available div
    $("#locations").append(domString);
};

export { writeLocations }