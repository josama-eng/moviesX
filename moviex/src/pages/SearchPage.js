import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchMedia } from "../services/series.service";
import { AiOutlineStar } from "react-icons/ai";
import MovieComponent from "../components/MovieComponent";
import ArrowComponent from "../components/ArrowComponent";

const SearchPage = () => {
  const params = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchMedia(params.id)
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);

  return (
    <div className="searchWrapper">
      <div className="results">
        {results?.map((result, index) => {
          if (result.media_type === "tv") {
            return (
              <div className="seriesWrapper" key={index}>
                <div className="imgContainer">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + result.backdrop_path
                    }
                    alt=""
                  />
                </div>
                <p>{result.first_air_date}</p>
                <h2>{result.name}</h2>
                <div className="vote">
                  <div className="content">
                    <h3>
                      <AiOutlineStar className="star" />
                    </h3>
                    <p>{result.vote_average}</p>
                  </div>
                </div>
                <Link
                  to={`/series-details/${result.id}`}
                  className="detailsLink"
                >
                  See details
                </Link>
              </div>
            );
          } else if (result.media_type === "movie") {
            return (
              <MovieComponent
                title={result.title}
                id={result.id}
                vote={result.vote_average}
                poster={result.poster_path}
                description={result.overview}
                release={result.release_date}
                key={index}
              />
            );
          } else {
            return <h2>No results</h2>;
          }
        })}
      </div>
      <ArrowComponent />
    </div>
  );
};

export default SearchPage;
