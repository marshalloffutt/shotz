// Add movie info to dom
const writeMovie = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
        domString += `
        <div class="${movie} movie card col-md-6 col-md-offset-3">
            <h3 id="thumbnail-label">${movie.name}</h3>
            <p>${movie.genre}</p>
            <p>${movie.description}</p>
            <p>Estimated Release Date: ${movie.release}</p>
        </div>
    `
    })
    // Write to the available div
    $("#movie").append(domString);
};

export { writeMovie }