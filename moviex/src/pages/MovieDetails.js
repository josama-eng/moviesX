import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieDetails } from "../services/movie.service";
import { actors } from "../services/movie.service";
import ReactPlayer from "react-player";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [videoUrl, setVideoUrl] = useState(null);
  const [cast, setCast] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    movieDetails(id)
      .then((response) => {
        setMovie(response.data);
        setGenres(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const fetchVideos = async () => {
    try {
      const response = await movieDetails(id);
      setVideoUrl(response.data.videos.results);
    } catch (error) {
      console.error("Error fetching data from API 1:", error);
    }
  };

  const fetchCast = async () => {
    try {
      const response = await actors(id);
      setCast(response.data.cast);
    } catch (error) {
      console.error("Error fetching data from API 2:", error);
    }
  };

  const handleVideosButton = () => {
    fetchVideos();
    setCast(null);
  };

  const handleCastButton = () => {
    fetchCast();
    setVideoUrl(null);
  };

  return (
    <div className="movieDetailsWrapper">
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
          <div className="movieDetails">
            <p>
              <span>Original title: </span> {movie.original_title}
            </p>
            <p>
              <span>Runtime: </span> {movie.runtime}min
            </p>
            <p>
              <span>Release date: </span> {movie.release_date}
            </p>
          </div>
          <div className="genres">
            <h3>Genres: </h3>
            <div>
              {genres?.map((genre, index) => {
                return <h4 key={index}>{genre.name},</h4>;
              })}
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleVideosButton}>Videos</button>
            <button onClick={handleCastButton}>Cast</button>
          </div>
        </div>
      </div>
      <div className="castVideoContainer">
        <div className="videoWrapperOverlay">
          <div className="video-content">
            {videoUrl?.map((video, index) => (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.key}`}
                controls={true}
                autoplay={false}
                width="500px"
                height="300px"
                onEnded={() => console.log("Video ended")}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="castWrapper">
          <div className="cast">
            {cast?.map((actor, index) => {
              return (
                <div key={index}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + actor?.profile_path
                    }
                    alt="profile"
                  />
                  <h4 key={index}>{actor.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
