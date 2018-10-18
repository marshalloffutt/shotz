import { writeMovie } from '../components/movieComponent.js'

// Load movie
$.get('../db/movie.json')
.done((data) => {
    writeMovie(data.movie);
})
.fail((error) => {
    console.log({error});
});