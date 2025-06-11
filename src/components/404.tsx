import { Button } from "./ui/button";
import FuzzyText from "./util/FuzzyText";

const Error404 = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <FuzzyText fontSize="9rem" baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
        404
      </FuzzyText>
      <div className="mb-4"/>
      <FuzzyText fontSize="2rem" color="red" baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
        not found!
      </FuzzyText>

      <Button variant="link" >
        Go Home
      </Button>
    </div>
  );
};

export default Error404;
