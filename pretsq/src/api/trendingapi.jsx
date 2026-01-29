import axios from "axios";

const API_KEY = import.meta.env.VITE_TMBD_KEY;

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