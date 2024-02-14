import React, { useState } from "react";
import Icon, { MyIcons } from "../icon/icon";
import { myColors } from "../../../constants/colors";
type ThemeInputs =
  | "primary"
  | "secondary"
  | "dark"
  | "gray-1"
  | "gray-2"
  | "gray-3";
type InputProps = {
  value?: string;
  icon?: MyIcons;
  placeholder?: string;
  theme?: ThemeInputs;
  onChange?: (value: string) => void;
  placeholderClass?: string;
  inputClass?: string;
  name?:string
};

const Input: React.FC<InputProps> = ({
  value,
  icon,
  placeholder = "Ingresar datos",
  theme = "gray-3",
  onChange,
  placeholderClass,
  inputClass,
  name
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [valueState, setValueState] = useState(value);
  const handlerOnFocus = () => setFocus(true);
  const handlerOnBlur = () => setFocus(false);
  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    if (typeof onChange === "function") onChange(event.target.value);
  };

  return (
    <div className="relative">
      {icon && (
        <section className="absolute left-1 top-0">
          <Icon
            name={icon}
            color={
              focus || valueState
                ? myColors["danger-light"]
                : myColors["danger-light"]
            }
            size="18"
          />
        </section>
      )}

      <p
        className={`text-xs absolute left-9 -top-2 tracking-wide pointer-events-none transform ${
          focus || valueState
            ? "-translate-y-3 text-danger-light text-xs11 font-montserrat-bold opacity-80"
            : "translate-y-2 text-gray-300 text-xs10"
        } transition-transform duration-300 ${placeholderClass}`}
      >
        {placeholder}
      </p>
      <input
        onFocus={handlerOnFocus}
        onBlur={handlerOnBlur}
        onChange={handlerOnChange}
        name={name}
        className={`focus:outline-none w-full border-b-2 pl-9 py-1.5 text-xs tracking-wider text-gray-700 ${
          focus || valueState ? "border-danger-light" : `border-danger-light`
        } ${inputClass}`}
        value={valueState}
      />
    </div>
  );
};

export default Input;
