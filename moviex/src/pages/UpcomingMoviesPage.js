import { useEffect, useState } from "react";
import MovieComponent from "../components/MovieComponent";
import { upcomingMovie } from "../services/movie.service";

const UpcomingMoviesPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    upcomingMovie()
      .then((response) => {
        console.log(response.data.results);
        setUpcomingMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUpcomingMovies]);

  return (
    <div className="upcomingMoviesPage">
      <div className="upcomingMoviesContainer">
        {upcomingMovies.map((movie, index) => (
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
    </div>
  );
};

export default UpcomingMoviesPage;
