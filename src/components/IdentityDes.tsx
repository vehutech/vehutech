import {
  PenTool,
  Eye,
  Lightbulb,
  Target,
  Layers,
  Users,
} from "lucide-react";
import BlurText from "./util/BlutText";
import SpotlightCard from "./SpotlightCard";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <div
      id="design"
      className="min-h-screen bg-gradient-to-br  text-white overflow-hidden"
    >
      {/* Hero Section */}
      <div className="relative px-8 py-20">
        <div className="max-w-6xl  mx-auto">
          <div className="mb-8">
            <h1 className="text-7xl font-bold text-custom-gradient mb-8 flex justify-start sm:justify-center">
              Design
            </h1>
            <BlurText
              text="Crafting Visual Stories That Resonate"
              delay={200}
              animateBy="words"
              direction="bottom"
              className="text-2xl text-foreground max-w-3xl mx-auto flex justify-start sm:justify-center"
            />
          </div>

          <div className="mt-12 text-lg text-foreground max-w-4xl leading-relaxed flex justify-start sm:justify-center text-start sm:text-center">
            I believe every brand has a unique story waiting to be told. I
            specialize in translating your vision into powerful visual
            narratives that connect, inspire, and drive success. From startups
            to established companies, I create identities that stand the test of
            time.
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-carton" />
            <h2 className="text-4xl text-foreground font-bold mb-4">
              Design Philosophy
            </h2>
            <p className="text-foreground text-lg">
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
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-carton">
                  {item.title}
                </h3>
                <p className="text-whitish text-sm leading-relaxed">
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
          <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Let's collaborate to create a design that captures your essence and
            connects with your audience on a deeper level.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block"
          >
            <Button size="lg" variant="outline" asChild>
              <Link
                to="/contact"
                className="py-2 rounded-lg hover:shadow-custom transition-all duration-300 whitespace-nowrap focus-custom relative overflow-hidden group flex text-4xl !text-custom-gradient !hover:text-custom-gradient font-black"
              >
                Let's do this
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IdentityDes;
