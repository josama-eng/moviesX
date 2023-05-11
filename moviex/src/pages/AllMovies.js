import { useEffect, useState } from "react";
import axios from "axios";
import MovieComponent from "../components/MovieComponent";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

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
    <DivWrapper>
      <div className="movieContainer">
        {movies.map((movie) => (
          // <li key={movie.id}>{movie.title}</li>
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
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media screen and (max-width: 1000px) {
    width: 70%;
  }
  .movieContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .buttonWrapper {
    display: flex;
    gap: 50px;
    padding: 30px 0;
    button {
      padding: 10px 15px;
      background: #ffa502;
      border: none;
      cursor: pointer;
      transition: all 0.5s ease;
      .arrow {
        fill: #fff;
        font-size: 25px;
      }
      &:hover {
        background: #ff4757;
      }
    }
  }
`;
export default HomePage;
