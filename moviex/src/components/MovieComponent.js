import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

const MovieComponent = ({ title, id, vote, poster, description, release }) => {
  return (
    <DivWapper>
      <div className="imgContainer">
        <img src={"https://image.tmdb.org/t/p/w500/" + poster} alt="" />
      </div>
      <p>{release}</p>
      <h2>{title}</h2>
      <div className="vote">
        <div className="content">
          <h3>
            <AiOutlineStar className="star" />
          </h3>
          <p>{vote}</p>
        </div>
        {/* {vote} */}
      </div>
      <Link to={`/movie-details/${id}`} className="detailsLink">
        See Details
      </Link>
    </DivWapper>
  );
};

const DivWapper = styled.div`
  position: relative;
  width: 300px;
  overflow: hidden;
  border-radius: 20px;
  @media screen and (max-width: 550px) {
    width: 200px;
  }
  .imgContainer {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    background-color: black;
    @media screen and (max-width: 550px) {
      width: 200px;
      height: 200px;
    }
    &::before {
      content: "";
      display: block;
      padding-top: 100%;
      z-index: -1;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
    }
  }

  h2 {
    position: absolute;
    bottom: 40%;
    left: 30px;
    font-size: 25px;
    @media screen and (max-width: 550px) {
      font-size: 18px;
    }
  }

  .vote {
    position: absolute;
    top: 30px;
    left: 30px;
    background: #000;
    width: 60px;
    height: 35px;
    border-radius: 30px;
    font-size: 15px;
    text-align: center;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      h3 {
        padding-right: 25px;
        .star {
          fill: #ffa502;
        }
      }
      p {
        margin-top: 2px;
      }
    }
  }
  p {
    position: absolute;
    bottom: 30%;
    left: 30px;
    @media screen and (max-width: 550px) {
      font-size: 12px;
    }
  }
  .detailsLink {
    background-color: #ff4757;
    position: absolute;
    bottom: 10%;
    left: 30px;
    padding: 10px 15px;
    border-radius: 20px;
    transition: all 0.5s ease;
    @media screen and (max-width: 550px) {
      font-size: 12px;
      bottom: 5%;
    }
    &:hover {
      background: #ffa502;
    }
  }
`;

export default MovieComponent;
