import { useEffect, useState } from "react";
import PopularMoviesSliderComponent from "../components/PopularMoviesSliderComponent";
import TopRatedSliderComponent from "../components/TopRatedSliderComponent";
import styled from "styled-components";
import hero from "../assets/images/hero.jpg";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="background">
        <div className="content">
          <h1>Introducing the MovieX: Your Ultimate Film Companion!</h1>
          <p>
            Get up-to-date information on the latest releases, including
            trailers, reviews, and ratings. Our app keeps you in the loop,
            ensuring you never miss out on the hottest movies hitting the big
            screen or streaming platforms. Stay informed and make informed
            choices with ease.
          </p>
        </div>
      </div>
      <PopularMoviesSliderComponent />
      <TopRatedSliderComponent />
    </div>
  );
};

export default HomePage;
