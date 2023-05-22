import { useEffect, useState } from "react";
import { popularSeries } from "../services/series.service";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import ArrowComponent from "../components/ArrowComponent";

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    popularSeries(currentPage)
      .then((response) => {
        const sortedSeries = response.data.results.sort(
          (a, b) => b.vote_average - a.vote_average
        );
        setSeries(sortedSeries);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div className="popularSeriesPage">
      <div className="populaSeriesContainer">
        {series.map((serie, index) => (
          <div className="seriesWrapper" key={index}>
            <div className="imgContainer">
              <img
                src={"https://image.tmdb.org/t/p/w500/" + serie.backdrop_path}
                alt=""
              />
            </div>
            <p>{serie.first_air_date}</p>
            <h2>{serie.name}</h2>
            <div className="vote">
              <div className="content">
                <h3>
                  <AiOutlineStar className="star" />
                </h3>
                <p>{serie.vote_average}</p>
              </div>
            </div>
            <Link to={`/series-details/${serie.id}`} className="detailsLink">
              See details
            </Link>
          </div>
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

export default SeriesPage;
