import { ButtonWithImg } from "./ButtonWithImg";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <ButtonWithImg
        href="/"
        parentUtilityClasses="flex items-center border rounded-md bg-background"
        imgUtilityClasses="h-[1.2rem] w-[1.2rem]"
        btnTextUtilityClasses="hidden sm:block text-base font-bold text-foreground"
        imgPath="./logo.png"
        imgAltText="logo"
        btnText="@vehutech"
        variant="link"
      />
    </div>
  );
};

export default Logo;
