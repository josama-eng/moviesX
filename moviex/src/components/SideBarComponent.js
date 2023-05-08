import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { allGenres } from "../services/movie.service";

const SideBarComponent = () => {
  const [showGenres, setShowGenres] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    allGenres()
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setGenres]);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-movies">All movies</Link>
        </li>
        <li>
          <Link>Upcoming</Link>
        </li>
        <li>
          <Link>Popular</Link>
        </li>
        <li>
          <Link>Latest</Link>
        </li>
        <li>
          <Link>Top rated</Link>
        </li>
        <li>
          <Link>Series</Link>
        </li>
        <li>
          <button onClick={toggleGenres}>Genres</button>
          {showGenres && (
            <div>
              <ul>
                {genres.map((genre, index) => (
                  <li key={index}>
                    <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20%;
  background: #1a171e;
  min-height: 100vh;
  color: #dfe4ea;
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 20px 0px;
  @media screen and (max-width: 1000px) {
    width: 30%;
  }
  li {
    font-size: 20px;
    padding: 20px 10px;
    transition: all 0.5s ease;
    &:hover {
      color: #ff4757;
    }
    @media screen and (max-width: 550px) {
      font-size: 15px;
      padding: 20px 5px;
    }
  }
  button {
    background: #ff4757;
    font-size: 20px;
    color: #dfe4ea;
    padding: 10px 15px;
    transition: all 0.5s ease;
    cursor: pointer;
    @media screen and (max-width: 550px) {
      font-size: 15px;
    }
    &:hover {
      background: #ffa502;
    }
  }
`;

export default SideBarComponent;
