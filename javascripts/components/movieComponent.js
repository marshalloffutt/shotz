// Add movie info to dom
const writeMovie = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
        domString += `
        <div class="${movie} movie card col-md-6 col-md-offset-3">
            <h3 id="thumbnail-label">${movie.Name}</h3>
            <p>${movie.Genre}</p>
            <p>${movie.Description}</p>
            <p>Estimated Release Date: ${movie.Release}</p>
        </div>
    `
    })
    // Write to the available div
    $("#movie").append(domString);
};

export { writeMovie }