import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllMovies from "./pages/AllMovies";
import GenresPage from "./pages/GenresPage";
import MovieDetails from "./pages/MovieDetails";
import HomePage from "./pages/HomePage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/NowPlayingMoviesPage";
import TopRatedPage from "./pages/TopRatedPage";
import SeriesPage from "./pages/SeriesPage";
import SeriesDetails from "./components/SeriesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-movies",
        element: <AllMovies />,
      },
      {
        path: "/genres/:id",
        element: <GenresPage />,
      },
      {
        path: "/movies-details/:id",
        element: <MovieDetails />,
      },
      {
        path: "/popular",
        element: <PopularMoviesPage />,
      },
      {
        path: "/upcoming",
        element: <UpcomingMoviesPage />,
      },
      {
        path: "/now-playing",
        element: <NowPlayingMoviesPage />,
      },
      {
        path: "/top-rated",
        element: <TopRatedPage />,
      },
      {
        path: "/series",
        element: <SeriesPage />,
      },
      {
        path: "/series-details/:id",
        element: <SeriesDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
