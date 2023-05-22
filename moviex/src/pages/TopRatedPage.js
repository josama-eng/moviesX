import { useEffect, useState } from "react";
import MovieComponent from "../components/MovieComponent";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { topRated } from "../services/movie.service";
import ArrowComponent from "../components/ArrowComponent";

const TopRatedPage = () => {
  const [topRatedMoviesPage, setTopRatedMoviesPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    topRated(currentPage)
      .then((response) => {
        setTopRatedMoviesPage(response.data.results);
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
    <div className="topRatedMoviesPage">
      <div className="topRatedMovieContainer">
        {topRatedMoviesPage.map((movie, index) => (
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
      <ArrowComponent />
    </div>
  );
};

export default TopRatedPage;
