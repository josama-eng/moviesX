import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import MovieComponent from "../components/MovieComponent";
import { popularMovies } from "../services/movie.service";

const PopularMoviesSliderComponent = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  const options = {
    type: "loop",
    perPage: 3,
    perMove: 3,
    gap: "10px",
    rewind: true,
    pagination: false,
    arrows: false,
    autoWidth: true,
    autoHeight: true,
    autoplay: true,
    type: "loop",
    interval: 3000,
  };

  useEffect(() => {
    popularMovies(1)
      .then((response) => {
        setPopularMovie(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPopularMovie]);
  return (
    <div className="popular">
      <h2>Popular</h2>
      <Splide options={options} hasTrack={false}>
        <SplideTrack>
          {popularMovie.map((movie, index) => (
            <SplideSlide>
              <MovieComponent
                title={movie.title}
                id={movie.id}
                vote={movie.vote_average}
                poster={movie.poster_path}
                description={movie.overview}
                release={movie.release_date}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default PopularMoviesSliderComponent;
