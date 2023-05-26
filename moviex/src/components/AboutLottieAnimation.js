import { useLottie, useLottieInteractivity } from "lottie-react";
import animationData from "../assets/animations/animation2.json";

const style = {
  width: "100%",
};

const options = {
  animationData: animationData,
  loop: 1,
};

const AboutLottieAnimation = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.9],
        type: "play",
        frames: [0, 96],
      },
    ],
  });

  return Animation;
};

export default AboutLottieAnimation;
