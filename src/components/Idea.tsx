import {
  Bike,
  Brain,
  Link as LinkIcon,
  LucideBlocks,
  Phone,
  ShoppingBag,
} from "lucide-react";
import BlurText from "./util/BlutText";
import SpotlightCard from "./SpotlightCard";
import { Button } from "./ui/button";

const Idea = () => {
  const bigIdeas = [
    {
      idea: "E-Commerce",
      icon: <ShoppingBag className="text-whitish" size={120} />,
    },
    {
      idea: "Mobile Development",
      icon: <Phone className="text-whitish" size={120} />,
    },
    {
      idea: "Blockchain",
      icon: <LucideBlocks className="text-whitish" size={120} />,
    },
    {
      idea: "Logistics",
      icon: <Bike size={120} className="text-whitish" />,
    },
    {
      idea: "Artificial Intelligence",
      icon: <Brain size={120} className="text-whitish" />,
    },
  ];

  // Split ideas into two groups
  const leftScrollingIdeas = bigIdeas.slice(0, Math.ceil(bigIdeas.length / 2));
  const rightScrollingIdeas = bigIdeas.slice(Math.ceil(bigIdeas.length / 2));

  const IdeaCard = ({ idea, icon }) => (
    <SpotlightCard
      className="custom-spotlight-card flex items-center flex-col size-50 justify-center mx-8 flex-shrink-0"
      spotlightColor="rgba(38, 81, 251, 0.8)"
    >
      {icon}
      <span className="mt-4 text-center text-whitish">{idea}</span>
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
        variant="ghost"
        className="flex items-center m-auto p-4 mt-20 justify-center text-4xl mb-4"
      >
        <span className="flex items-center gap-4">
          <LinkIcon className="text-2xl"/>
          Let's Do This
        </span>
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
