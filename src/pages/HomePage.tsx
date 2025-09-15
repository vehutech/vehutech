import Hero from "../components/Hero";
import Idea from "../components/Idea";
import IdentityDes from "../components/IdentityDes";
// import TestimonialsSection from "../components/Testimonials";
import Value from "../components/Value";
import CopyAzaLandingPage from "@/components/AzaCopy";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CopyAzaLandingPage accountNumber={"1232"} businessName={"lol"} />
      <Value />
      <div className="sm:mb-550 md:mb-520 lg:mb-483 mb-450"/>
      <Idea />
      <IdentityDes />
      {/* <TestimonialsSection /> */}
    </div>
  );
};

export default HomePage;
