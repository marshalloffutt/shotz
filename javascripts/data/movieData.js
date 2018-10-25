// Load movie
const loadMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
            .done((data) => {
                resolve(data.movies);
            })
            .fail((error) => {
                reject(error);
            })
    });
}

export { loadMovies }