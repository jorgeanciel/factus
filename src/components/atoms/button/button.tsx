import React from "react";

type Theme = "primary" | "secondary" | "white";
type Type= "submit" | "undefined" | "reset" | "button"
type ButtonProps = {
  theme?: Theme;
  label: string;
  disabled?: boolean;
  expanded?: boolean;
  outlined?: boolean;
  className?: string;
  onClick?: () => void;
  type?: Type
};
const Button: React.FC<ButtonProps> = ({
  label,
  theme = "",
  disabled,
  expanded,
  outlined,
  className,
  onClick,
  type= ""
}) => {
  const themes: any = {
    white: {
      bgColor: "bg-white hover:bg-slate-200",
      textColor: "text-dark front-extrabold text-sm",
    },
    primary: {
      bgColor: `${
        outlined
          ? "border-2 border-indigo-500 hover:border-indigo-700"
          : "bg-indigo-500 hover:bg-indigo-700"
      }`,
      textColor: `${
        outlined ? "text-indigo-500" : "text-white"
      } font-extrabold text-sm`,
    },
    secondary: {
      bgColor: `${
        outlined ? "border-2 border-rose-500" : "bg-rose-500 hover:bg-rose-700"
      }`,
      textColor: `${
        outlined ? "text-rose-500" : "text-white"
      } font-bold text-sm`,
    },
  };

  const twTransition =
    "transition duration-300 ease-in-out transform active:scale-90 active:opacity-75";

  const twDisabled = "opacity-60 text-white-700 pointer-events-none";

  const twExpanded = "w-full";

  return (
    <button
      className={`${className} ${disabled && twDisabled} ${
        themes[theme].bgColor
      } ${themes[theme]?.textColor} ${twTransition} ${
        expanded && twExpanded
      } px-3.5 py-1.5 rounded-md font-montserrat-bold shadow-lg`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  theme: "primary",
  label: "My Button",
  disabled: false,
  expanded: false,
  outlined: false,
};
