import {
  PenTool,
  Eye,
  Lightbulb,
  Target,
  Layers,
  Users,
  ArrowRight,
} from "lucide-react";
import BlurText from "./BlutText";
import SpotlightCard from "./SpotlightCard";

const IdentityDes = () => {
  const designPhilosophy = [
    {
      title: "Vision & Strategy",
      icon: <Eye size={40} />,
      description:
        "Every brand needs a clear vision. I help you discover and articulate what makes you unique in the marketplace.",
    },
    {
      title: "Creative Excellence",
      icon: <PenTool size={40} />,
      description:
        "From concept to execution, I craft visual identities that are both beautiful and purposeful.",
    },
    {
      title: "Brand Consistency",
      icon: <Layers size={40} />,
      description:
        "Creating cohesive systems that work across all touchpoints, ensuring your brand speaks with one voice.",
    },
    {
      title: "Market Impact",
      icon: <Target size={40} />,
      description:
        "Designs that not only look great but drive real business results and meaningful connections.",
    },
  ];

  return (
    <div id="design" className="min-h-screen bg-gradient-to-br  text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative px-8 py-20">
        <div className="max-w-6xl  mx-auto">
          <div className="mb-8">
            <h1 className="text-7xl font-bold text-primary mb-4 flex justify-start sm:justify-center">
              Design
            </h1>
            <BlurText
              text="Crafting Visual Stories That Resonate"
              delay={200}
              animateBy="words"
              direction="bottom"
              className="text-2xl text-gray-300 max-w-3xl mx-auto flex justify-start sm:justify-center"
            />
          </div>

          <div className="mt-12 text-lg text-gray-400 max-w-4xl leading-relaxed flex justify-start sm:justify-center text-start sm:text-center">
            I believe every brand has a unique story waiting to be told. I specialize in translating your vision into
            powerful visual narratives that connect, inspire, and drive success.
            From startups to established companies, I create identities that
            stand the test of time.
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-4xl font-bold mb-4">Design Philosophy</h2>
            <p className="text-gray-400 text-lg">
              The principles that guide every creative decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPhilosophy.map((item, index) => (
              <SpotlightCard
                key={index}
                className="p-8 h-full hover:scale-105 transition-transform duration-300"
                spotlightColor="rgba(168, 85, 247, 0.15)"
              >
                <div className="text-purple-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-green-400" />
          <h2 className="text-5xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Let's collaborate to create a design that captures your essence
            and connects with your audience on a deeper level.
          </p>
          <button
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 
                             rounded-full text-white font-semibold text-lg hover:scale-105 
                             transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
          >
            Start Your Brand Journey
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentityDes;
