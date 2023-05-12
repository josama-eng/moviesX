import { useEffect, useState } from "react";
import MovieComponent from "../components/MovieComponent";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { popularMovies } from "../services/movie.service";

const PopularMoviesPage = () => {
  const [popularMoviesPage, setPopularMoviesPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    popularMovies(currentPage)
      .then((response) => {
        setPopularMoviesPage(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="popularMoviesPage">
      <div className="popularMovieContainer">
        {popularMoviesPage.map((movie, index) => (
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
      <div className="buttonWrapper">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <AiOutlineArrowLeft className="arrow" />
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <AiOutlineArrowRight className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default PopularMoviesPage;
