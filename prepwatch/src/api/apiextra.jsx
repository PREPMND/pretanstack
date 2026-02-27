import axios from "axios";
const API_KEY = import.meta.env.VITE_TMBD_KEY;
export const fetchMovieCredits = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    { params: { api_key: API_KEY } }
  );
  return res.data;
};

export const fetchMovieVideos = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    { params: { api_key: API_KEY } }
  );
  return res.data;
};
xport const fetchMovies = async (page = 1, sort = "popularity.desc") => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie`,
    {
      params: {
        api_key: API_KEY,
        page: page,
        sort_by: sort,
      },
    }
  );

  return res.data.results; 
};
export const fetchSearch = async (search) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        api_key: API_KEY,
        type:"search",
        query:search,
      },
    }
  );

  return res.data.results; 
};
export const fetchPopularMovies = async (page = 1) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular`,
    {
      params: {
        api_key: API_KEY,
        page: page,
      },
    }
  );

  return res.data.results; 
};
export const fetchTopRated = async (page = 1) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated`,
    {
      params: {
        api_key: API_KEY,
        page: page,
      },
    }
  );

  return res.data.results; 
};