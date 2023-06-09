import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_API_URL;
const newsApiKey = process.env.GMEWS_API_KEY;

export const allGenres = () =>
  axios.get(`${baseUrl}genre/movie/list?api_key=${apiKey}`);

export const filterGenres = (id, currentPage) =>
  axios.get(
    `${baseUrl}discover/movie?api_key=${apiKey}&with_genres=${id}&language=en-US&page=${currentPage}`
  );

export const movieDetails = (id) =>
  axios.get(
    `${baseUrl}movie/${id}?api_key=${apiKey}&append_to_response=videos`
  );

export const actors = (id) =>
  axios.get(`${baseUrl}movie/${id}/credits?api_key=${apiKey}`);

export const popularMovies = (currentPage) =>
  axios.get(
    `${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`
  );

export const topRated = (currentPage) =>
  axios.get(
    `${baseUrl}movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`
  );

export const upcomingMovie = () =>
  axios.get(`${baseUrl}movie/upcoming?api_key=${apiKey}`);

export const nowPlaying = () =>
  axios.get(`${baseUrl}movie/now_playing?api_key=${apiKey}&language=en-US`);

export const getNews = () =>
  axios.get(
    `https://gnews.io/api/v4/search?q=movie&apikey=03440c853912699331116b381045a6ed`
  );
