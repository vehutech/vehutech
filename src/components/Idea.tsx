import { Bike, Brain, LucideBlocks, Phone, ShoppingBag } from "lucide-react";
import BlurText from "./BlutText";
import SpotlightCard from "./SpotlightCard";
import { Button } from "./ui/button";

const Idea = () => {
  const bigIdeas = [
    {
      idea: "E-Commerce",
      icon: <ShoppingBag size={120} color="#999999" />,
    },
    {
      idea: "Mobile Development",
      icon: <Phone size={120} color="#999999" />,
    },
    {
      idea: "Blockchain",
      icon: <LucideBlocks size={120} color="#999999" />,
    },
    {
      idea: "Logistics",
      icon: <Bike size={120} color="#999999" />,
    },
    {
      idea: "Artificial Intelligence",
      icon: <Brain size={120} color="#999999" />,
    },
  ];

  // Split ideas into two groups
  const leftScrollingIdeas = bigIdeas.slice(0, Math.ceil(bigIdeas.length / 2));
  const rightScrollingIdeas = bigIdeas.slice(Math.ceil(bigIdeas.length / 2));

  const IdeaCard = ({ idea, icon }) => (
    <SpotlightCard
      className="custom-spotlight-card flex items-center flex-col size-50 justify-center mx-8 flex-shrink-0"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      {icon}
      <span className="mt-4 text-center text-white">{idea}</span>
    </SpotlightCard>
  );

  return (
    <div className="overflow-hidden">
      <BlurText
        text="What's Your Big Idea?"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-8xl mb-4 font-bold text-center"
      />

      {/* Left scrolling row */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex animate-scroll-left">
          {/* Duplicate the array multiple times for seamless loop */}
          {[...Array(6)].map((_, groupIndex) =>
            leftScrollingIdeas.map((item, index) => (
              <IdeaCard
                key={`left-${groupIndex}-${index}`}
                idea={item.idea}
                icon={item.icon}
              />
            )),
          )}
        </div>
      </div>

      {/* Right scrolling row */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right">
          {/* Duplicate the array multiple times for seamless loop */}
          {[...Array(6)].map((_, groupIndex) =>
            rightScrollingIdeas.map((item, index) => (
              <IdeaCard
                key={`right-${groupIndex}-${index}`}
                idea={item.idea}
                icon={item.icon}
              />
            )),
          )}
        </div>
      </div>

      <Button
        variant="link"
        className="cursor-pointer mt-10 flex w-full justify-center  text-4xl"
      >
        Let's Do This!
      </Button>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
          width: max-content;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default Idea;
