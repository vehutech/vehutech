interface ButtonWithImgProps {
  imgPath: string;
  imgAltText: string;
  btnText: string;
  variant: "outline" | "default" | "secondary" | "outline" | "link" | "ghost";
  parentUtilityClasses: string;
  imgUtilityClasses: string;
  btnTextUtilityClasses: string;
  href?: string;
}

export function ButtonWithImg({
  imgAltText,
  imgPath,
  btnText,
  parentUtilityClasses,
  imgUtilityClasses,
  btnTextUtilityClasses,
  href,
}: ButtonWithImgProps) {
  return (
    <button className={parentUtilityClasses + "p-8"}>
      {href ? (
        <a href={href} className="flex items-center">
          <img className={imgUtilityClasses} src={imgPath} alt={imgAltText} />
          <span className={btnTextUtilityClasses}>{btnText}</span>
        </a>

      ) : (
        <>
          <img className={imgUtilityClasses} src={imgPath} alt={imgAltText} />
          <span className={btnTextUtilityClasses}>{btnText}</span>
        </>
      )}
    </button>
  );
}
