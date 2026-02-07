import axios from "axios";

const API_KEY = import.meta.env.VITE_TMBD_KEY;

export const fetchTopRated = async (page = 1, sort = "popularity.desc") => {
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