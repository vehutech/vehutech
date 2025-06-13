import Squares from "./util/Squares";
import BlurText from "./util/BlutText";
import { useState } from "react";
import TrueFocus from "./util/TrueFocus";
import { Button } from "./ui/button";
import { useTheme } from "./util/theme-provider";

const Hero = () => {
  const { resolvedTheme } = useTheme();

  const [isAnimationComplete, setIsAnimationCOmplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationCOmplete((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="absolute w-full flex items-center justify-between">
        {/* texts */}
        <div className="w-[65%] sm:px-40 px-4">
          {!isAnimationComplete ? (
            <BlurText
              text="Welcome"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-8xl mb-4 font-bold"
              onAnimationComplete={handleAnimationComplete}
            />
          ) : (
            <TrueFocus
              sentence="Let's Build"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          )}
          <Button
            className="text-2xl font-extrabold py-4"
            variant="gradient"
          >
            Something Cool
          </Button>
        </div>

        {/* Image */}
        <div className="">
          <img className="h-screen" src="/ai.png" alt="Ai " />
        </div>
      </div>

      <div className="w-full h-screen z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor={resolvedTheme === "light" ? "#fff" : "#ccc"}
          hoverFillColor="#222"
        />
      </div>

      <img className="absolute top-0 opacity-40" src="/herobg.png" alt="" />
    </div>
  );
};

export default Hero;
