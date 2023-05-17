import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { seriesDetais } from "../services/series.service";
import { seriesVideos } from "../services/series.service";
import ReactPlayer from "react-player";

const SeriesDetails = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState({});
  const [videoUrl, setVideoUrl] = useState(null);
  const [seasons, setSeasons] = useState(null);

  useEffect(() => {
    seriesDetais(id)
      .then((response) => {
        setSerie(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const fetchVideos = async () => {
    try {
      const response = await seriesVideos(id);
      setVideoUrl(response.data.results);
    } catch (error) {
      console.error("Error fetching data from API 1:", error);
    }
  };

  const fetchSeasons = () => {
    setSeasons(serie.seasons);
  };

  const handleVideosButton = () => {
    fetchVideos();
    setSeasons(null);
  };

  const handleSeasonsBtn = () => {
    fetchSeasons();
    setVideoUrl(null);
  };

  return (
    <div className="serieDetailsWrapper">
      <div className="details">
        <div className="img">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + serie.backdrop_path}
            alt=""
          />
        </div>
        <div className="content">
          <h2>{serie.name}</h2>
          <p>{serie.overview}</p>
          <div className="seriesDetails">
            <p>
              <span>Original title: </span> {serie.original_name}
            </p>
            <p>
              <span>Release date: </span> {serie.first_air_date}
            </p>
            <p>
              <span>Number of seasons: </span> {serie.number_of_seasons}
            </p>
            <p>
              <span>Number of episodes: </span> {serie.number_of_episodes}
            </p>
          </div>
          <div className="genres">
            <h3>Genres: </h3>
            <div>
              {serie.genres?.map((genre, index) => {
                return <h4 key={index}>{genre.name},</h4>;
              })}
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleVideosButton}>Videos</button>
            <button onClick={handleSeasonsBtn}>Seasons details</button>
          </div>
        </div>
      </div>
      <div className="videosSeasonsContainer">
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
        <div className="seasonsWrapper">
          <div className="seasons">
            {seasons?.map((season, index) => {
              return (
                <div key={index}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + season.poster_path
                    }
                    alt=""
                  />
                  <div className="content">
                    <h3>Season name: {season.name}</h3>
                    <p>Air date: {season.air_date}</p>
                    <p>Episodes per season: {season.episode_count}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
