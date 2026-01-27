import axios from 'axios';
const APIKEY=import.meta.env.KEY;
const api=axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key='+APIKEY+'&language=en-US&page=1'
});
export 
export default api;