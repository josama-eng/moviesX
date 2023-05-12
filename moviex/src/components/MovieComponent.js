import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const MovieComponent = ({
  title,
  id,
  vote,
  poster,
  description,
  release,
  key,
}) => {
  return (
    <section key={key}>
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
      </div>
      <Link to={`/movie-details/${id}`} className="detailsLink">
        See Details
      </Link>
    </section>
  );
};

export default MovieComponent;
