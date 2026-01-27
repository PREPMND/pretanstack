import { KEY } from '.././.env';
export function getPopularMovies(){
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}`)
}