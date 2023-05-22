import { useEffect, useState } from "react";
import axios from "axios";
import MovieComponent from "../components/MovieComponent";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ArrowComponent from "../components/ArrowComponent";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`;

      const response = await axios.get(url);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    };
    fetchMovies();
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
    <div className="allMoviesWrapper">
      <div className="movieContainer">
        {movies.map((movie) => (
          <MovieComponent
            title={movie.title}
            id={movie.id}
            vote={movie.vote_average}
            poster={movie.poster_path}
            description={movie.overview}
            release={movie.release_date}
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

export default HomePage;
