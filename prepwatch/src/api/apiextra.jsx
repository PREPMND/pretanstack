import axios from "axios";
const API_KEY = import.meta.env.VITE_TMDB_KEY;
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