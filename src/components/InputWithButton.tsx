import { Mail as MdEmail, Search, SubscriptIcon } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";

const icons = [
  {
    type: "search",
    icon: <Search className="" />,
  },
  {
    type: "subscribtion",
    icon: <SubscriptIcon />,
  },
  {
    type: "mail",
    icon: <MdEmail />,
  },
];

interface InputWithButtonProps {
  iconType: string;
  inputType: string;
  placeholder: string;
  btnText: string;
  btnType?: "button" | "submit" | "reset";
}

export function InputWithButton({
  iconType,
  inputType,
  placeholder,
  btnText,
  btnType = "submit",
}: InputWithButtonProps) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 justify-between">
      <Input type={inputType} placeholder={placeholder} />
      <Button className="justify-between" type={btnType}>
        {icons.map((icon, i) =>
          icon.type === iconType ? (
            <span key={i}>{icon.type == iconType ? icon.icon : null}</span>
          ) : null,
        )}
        {btnText}
      </Button>
    </div>
  );
}
