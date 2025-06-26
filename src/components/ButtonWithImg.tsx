import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ButtonWithImgProps {
  imgPath: string;
  imgAltText: string;
  btnText: string;
  variant:
    | "outline"
    | "default"
    | "gradient"
    | "secondary"
    | "destructive"
    | "link"
    | "ghost";
  parentUtilityClasses: string;
  imgUtilityClasses: string;
  btnTextUtilityClasses: string;
  href: string;
}

export function ButtonWithImg({
  imgAltText,
  imgPath,
  btnText,
  parentUtilityClasses,
  imgUtilityClasses,
  btnTextUtilityClasses,
  variant,
  href,
}: ButtonWithImgProps) {
  return (
    <>
      {href ? (
        <Button asChild variant={variant} className={parentUtilityClasses}>
          <Link to={href} className="flex items-center">
            <img className={imgUtilityClasses} src={imgPath} alt={imgAltText} />
            <span className={btnTextUtilityClasses}>{btnText}</span>
          </Link>
        </Button>
      ) : (
        <Button variant={variant} className={parentUtilityClasses}>
          <span className="flex items-center">
            <img className={imgUtilityClasses} src={imgPath} alt={imgAltText} />
            <span className={btnTextUtilityClasses}>{btnText}</span>
          </span>
        </Button>
      )}
    </>
  );
}
