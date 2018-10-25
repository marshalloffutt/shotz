// // Add movie info to dom
// const writeMovie = (arrayOfMovies) => {
//     let domString = '';
//     arrayOfMovies.forEach((movie) => {
//         domString += `
//         <div class="${movie} moviecol-md-6 col-md-offset-3">
//             <h2 id="thumbnail-label">${movie.name}</h2>
//             <p>${movie.genre}</p>
//             <p>${movie.description}</p>
//             <p>Estimated Release Date: ${movie.release}</p>
//         </div>
//     `
//     })
//     // Write to the available div
//     $("#movie").append(domString);
// };

// export { writeMovie }