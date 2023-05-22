import LottieAnimation from "./LottieAnimation";
import { useRef, useEffect } from "react";

const InfoComponent = () => {
  const animationRef = useRef(null);
  return (
    <div className="infoWrapper">
      <div className="animation">
        <LottieAnimation />
      </div>

      <div className="content">
        <h2>About us</h2>
        <p>
          Introducing our new application, "MovieX" a powerful tool that fetches
          data from The Movie Database (TMDb) to provide an exceptional movie
          experience. Dive into the vast world of cinema with MovieX, where you
          can access a comprehensive database of films, TV shows, and actors.
          Discover detailed information about your favorite movies, such as plot
          summaries, release dates, ratings, and trailers, all at your
          fingertips. Stay up-to-date with the latest releases and explore
          curated lists to find hidden gems. With its user-friendly interface
          and reliable data source, MovieX is your ultimate companion for all
          things movies. Embark on a cinematic journey like never before with
          MovieX.
        </p>
      </div>
    </div>
  );
};

export default InfoComponent;
