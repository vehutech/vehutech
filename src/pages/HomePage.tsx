import Hero from "../components/Hero";
import Idea from "../components/Idea";
import IdentityDes from "../components/IdentityDes";
import TestimonialsSection from "../components/Testimonials";
import Value from "../components/Value";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Value />
      <div className="mb-550"></div>
      <Idea />
      <IdentityDes />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
