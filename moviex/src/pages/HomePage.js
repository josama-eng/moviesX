import { useEffect, useState } from "react";
import PopularMoviesSliderComponent from "../components/PopularMoviesSliderComponent";
import TopRatedSliderComponent from "../components/TopRatedSliderComponent";
import styled from "styled-components";
import hero from "../assets/images/hero.jpg";

const HomePage = () => {
  return (
    <MainDiv>
      <div className="background"></div>
      <PopularMoviesSliderComponent />
      <TopRatedSliderComponent />
    </MainDiv>
  );
};

const MainDiv = styled.div`
  width: 80%;
  min-height: 100vh;
  .background {
    width: 100%;
    height: 50vh;
    background: url(${hero});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 30px;
  }
`;
export default HomePage;
