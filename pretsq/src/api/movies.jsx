import axios from "axios";

const API_KEY = import.meta.env.VITE_TMBD_KEY;

export const fetchMovies = async (page = 1, sort = "popularity.desc") => {
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
    `https://api.themoviedb.org/3/discover/movie`,
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