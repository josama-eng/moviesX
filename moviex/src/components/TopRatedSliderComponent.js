import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import MovieComponent from "../components/MovieComponent";
import { topRated } from "../services/movie.service";

const TopRatedSliderComponent = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    topRated(1)
      .then((response) => {
        setTopRatedMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setTopRatedMovies]);

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
    interval: 3000,
    breakpoints: {
      1000: {
        perPage: 2,
        perMove: 2,
      },
    },
  };
  return (
    <div className="topRatedSlider">
      <h2 className="title">Top rated</h2>
      <Splide options={options} hasTrack={false}>
        <SplideTrack>
          {topRatedMovies.map((topMovie, index) => (
            <SplideSlide key={index}>
              <MovieComponent
                title={topMovie.title}
                id={topMovie.id}
                vote={topMovie.vote_average}
                poster={topMovie.poster_path}
                description={topMovie.overview}
                release={topMovie.release_date}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default TopRatedSliderComponent;
