import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const SideBarComponent = () => {
  const [showGenres, setShowGenres] = useState(false);
  const [genres, setGenres] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}genre/movie/list?api_key=${apiKey}`
        );
        console.log(response.data.genres);
        setGenres(response.data.genres);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenres();
  }, []);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/all-movies">All movies</Link>
        </li>
        <li>
          <Link>Upcoming</Link>
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
  li {
    font-size: 20px;
    padding: 20px;
    transition: all 0.5s ease;
    &:hover {
      color: #ff4757;
    }
  }
  button {
    background: #ff4757;
    font-size: 20px;
    color: #dfe4ea;
    padding: 10px 15px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      background: #ffa502;
    }
  }
`;

export default SideBarComponent;
