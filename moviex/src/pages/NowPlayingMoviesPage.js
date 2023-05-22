import { useEffect, useState } from "react";
import MovieComponent from "../components/MovieComponent";
import { nowPlaying } from "../services/movie.service";
import ArrowComponent from "../components/ArrowComponent";

const LatestMoviesPage = () => {
  const [nowPlayingMovies, setNowPlaying] = useState([]);

  useEffect(() => {
    nowPlaying()
      .then((response) => {
        console.log(response.data.results);
        setNowPlaying(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setNowPlaying]);
  return (
    <div className="nowPlayingMoviesPage">
      <div className="nowPlayingMoviesContainer">
        {nowPlayingMovies.map((movie, index) => (
          <MovieComponent
            title={movie.title}
            id={movie.id}
            vote={movie.vote_average}
            poster={movie.poster_path}
            description={movie.overview}
            release={movie.release_date}
            key={index}
          />
        ))}
      </div>
      <ArrowComponent />
    </div>
  );
};

export default LatestMoviesPage;
