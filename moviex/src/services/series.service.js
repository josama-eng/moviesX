import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_API_URL;

export const popularSeries = (currentPage) =>
  axios.get(
    `${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`
  );

export const seriesDetais = (id) =>
  axios.get(`${baseUrl}/tv/${id}?api_key=${apiKey}&language=en-US`);

export const seriesVideos = (id) =>
  axios.get(`${baseUrl}/tv/${id}/videos?api_key=${apiKey}&language=en-US`);

// `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchTerm}`
