import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieDetails } from "../services/movie.service";
import { actors } from "../services/movie.service";
import ReactPlayer from "react-player";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    movieDetails(id)
      .then((response) => {
        setMovie(response.data);
        setGenres(response.data.genres);
        const video = response.data.videos.results[0];
        if (video) {
          setVideoUrl(`https://www.youtube.com/watch?v=${video.key}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(genres);

  useEffect(() => {
    actors(id)
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <DivWrapper>
      <div className="details">
        <div className="img">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            alt=""
          />
        </div>
        <div className="content">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="genres">
            <h3>Genres: </h3>
            <div>
              {genres?.map((genre, index) => {
                return <h4 key={index}>{genre.name},</h4>;
              })}
            </div>
          </div>
          <div className="cast">
            <h3>Cast: </h3>
            <div>
              {cast.map((actor, index) => {
                return <h4 key={index}>{actor.name},</h4>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="video">
        <ReactPlayer
          url={videoUrl}
          playing={true}
          controls={true}
          width="100%"
          height="80vh"
          onEnded={() => console.log("Video ended")}
        />
      </div>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 70%;
    .img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .details {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
    padding-bottom: 20px;
    @media screen and (max-width: 1000px) {
      flex-wrap: wrap;
    }
    h2,
    p {
      padding: 20px 0;
      text-align: center;
    }
    h2 {
      color: #ffa502;
    }
    .genres {
      width: 100%;
      h3 {
        color: #ffa502;
        text-align: center;
        padding: 20px 0;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
    }
    .cast {
      width: 100%;
      h3 {
        color: #ffa502;
        text-align: center;
        padding: 20px 0;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
    }
    /* align-items: center; */
  }
  .video {
    width: 100%;
  }
`;
export default MovieDetails;
