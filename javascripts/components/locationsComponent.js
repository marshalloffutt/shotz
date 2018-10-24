// Add locations info to dom
const writeLocations = (arrayOfLocations) => {
    let domString = '';
    arrayOfLocations.forEach((location) => {
        domString += `
        <div class="card locations ${location.time} m-4" style="width: 18rem;">
            <img class="card-img-top" src="${location.imageUrl}" alt="${location.name}">
            <div class="card-body criteria">
                <h5 class="card-title title">${location.name}</h5>
                <p class="card-text address">${location.address}</p>
            </div>
            <div>
                <p class="card-text ${location.time}">Available Shoot Time: ${location.time}</p>
            </div>  
        </div>
    `
    })
    // Write to the available div
    $("#locations").append(domString);
};

export { writeLocations }