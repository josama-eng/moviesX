import { useEffect, useState } from "react";
import PopularMoviesSliderComponent from "../components/PopularMoviesSliderComponent";
import TopRatedSliderComponent from "../components/TopRatedSliderComponent";
import styled from "styled-components";
import hero from "../assets/images/hero.jpg";

const HomePage = () => {
  return (
    <MainDiv>
      <div className="background">
        <h1>MovieX</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quisquam nam ullam excepturi non minus natus aliquid deleniti illum
          iusto.
        </p>
      </div>
      <PopularMoviesSliderComponent />
      <TopRatedSliderComponent />
    </MainDiv>
  );
};

const MainDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 30px;
  .background {
    width: 100%;
    height: 80vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${hero});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export default HomePage;
