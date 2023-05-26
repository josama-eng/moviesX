import { useRef, useEffect } from "react";
import AboutLottieAnimation from "./AboutLottieAnimation";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="content">
        <p>
          Are you a movie enthusiast? Do you love staying up-to-date with the
          latest film releases, exploring diverse genres, and discovering hidden
          cinematic gems? Look no further! MovieX is the must-have app for all
          movie lovers, delivering an unparalleled movie-watching experience
          right at your fingertips.
        </p>
        <p>
          Unleash the Power of MovieX: <br /> 🎥 Explore a Vast Movie Library:
          Dive into an extensive collection of movies spanning various genres,
          from action-packed blockbusters to heartfelt romances, spine-tingling
          thrillers to captivating documentaries. With MovieX, there's something
          for everyone!
        </p>
        <p>
          📅 Stay Up-to-Date: <br /> Stay in the loop with the latest releases,
          upcoming blockbusters, and exclusive sneak peeks. MovieX keeps you
          informed about release dates, trailers, and cast information, ensuring
          you're always in sync with the ever-evolving movie landscape.
        </p>
        <p>
          🔍 Detailed Movie Information: <br /> Dive deep into the world of each
          movie with comprehensive details, including plot summaries, cast and
          crew information, ratings, reviews, and trivia. Movie Magic equips you
          with everything you need to know before hitting that play button.
        </p>
        <p>
          🌐 Multi-Platform Accessibility: <br /> Whether you prefer your
          smartphone, tablet, or computer, MovieX seamlessly syncs across
          multiple devices, allowing you to enjoy the ultimate movie experience
          anywhere, anytime.
        </p>
      </div>
      <div className="animation">
        <AboutLottieAnimation />
      </div>
    </div>
  );
};

export default About;
