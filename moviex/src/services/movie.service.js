import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_API_URL;

export const allGenres = (id) =>
  axios.get(`${baseUrl}discover/movie?api_key=${apiKey}&with_genres=${id}`);
