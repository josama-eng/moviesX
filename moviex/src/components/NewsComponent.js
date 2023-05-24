import { useEffect, useState } from "react";
import { getNews } from "../services/movie.service";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const options = {
    type: "loop",
    perPage: 3,
    perMove: 3,
    gap: "10px",
    rewind: true,
    pagination: false,
    autoWidth: true,
    autoHeight: true,
    autoplay: true,
    interval: 3000,
    arrows: false,
  };

  return (
    <div className="newsContainer">
      <h2 className="title">Latest news</h2>
      <Splide options={options} hasTrack={false}>
        <SplideTrack>
          {news.map((article, index) => (
            <SplideSlide key={index}>
              <div className="news">
                <div className="img">
                  <img src={article.image} alt="" />
                </div>
                <div className="content">
                  <h3>{article.title}</h3>
                  <h4>
                    {article.publishedAt.slice(
                      0,
                      article.publishedAt.indexOf("T")
                    )}
                  </h4>
                  <a href={article.url}>Read more</a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default NewsComponent;
