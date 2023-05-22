import Lottie from "lottie-react";
import { useRef, useEffect } from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";
import animationData from "../assets/animations/animation.json";

const style = {
  width: "100%",
};

const options = {
  animationData: animationData,
};

const LottieAnimation = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.9],
        type: "seek",
        frames: [0, 226],
      },
    ],
  });

  return Animation;
};

export default LottieAnimation;
