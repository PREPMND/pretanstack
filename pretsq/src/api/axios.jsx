import axios from 'axios';
const api=axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key='+APIKEY+'&language=en-US&page=1'
});
export default api;