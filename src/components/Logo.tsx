import { ButtonWithImg } from "./ButtonWithImg";

interface LogoProp {
  rigid: boolean
}

const Logo = ({ rigid }: LogoProp) => {
  return (
    <div className="flex-shrink-0">
      <ButtonWithImg
        href="/"
        parentUtilityClasses="flex items-center border rounded-md hover:no-underline w-fit"
        imgUtilityClasses="h-[1.2rem] w-[1.2rem]"
        btnTextUtilityClasses={`${rigid ? '' : 'hidden' } sm:block text-base font-bold`}
        imgPath="./logo.png"
        imgAltText="logo"
        btnText="@vehutech"
        variant="gradient"
      />
    </div>
  );
};

export default Logo;
