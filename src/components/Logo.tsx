import { motion } from "framer-motion";
import { ButtonWithImg } from "./ButtonWithImg";

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0"
    >
      <ButtonWithImg
        href="/"
        parentUtilityClasses="flex items-center group border-2 p-2 rounded-2xl bg-background/50"
        imgUtilityClasses="w-8"
        btnTextUtilityClasses="hidden sm:block text-xl lg:text-2xl font-bold text-custom-foreground"
        imgPath="./logo.png"
        imgAltText="logo"
        btnText="@vehutech"
        variant="secondary"
      />
    </motion.div>
  );
};

export default Logo;
