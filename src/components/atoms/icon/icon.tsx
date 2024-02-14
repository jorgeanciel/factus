import React from "react";
import { AiFillFire, AiOutlineInfoCircle } from "react-icons/ai";
import { myColors } from "../../../constants/colors";
import { BsCartDash, BsPersonHearts, BsCartFill } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { HiLogout, HiMenuAlt3 } from "react-icons/hi";
import { HiMapPin } from "react-icons/hi2";
import { TbPointFilled } from "react-icons/tb";
import { BiSearchAlt, BiSolidUserCircle } from "react-icons/bi";

export type MyIcons =
  | "fire"
  | "car"
  | "car-bg"
  | "payment"
  | "menu"
  | "about"
  | "point"
  | "logout"
  | "person"
  | "search"
  | "user"
  | "ubication";

type IconProps = {
  size?: string;
  name: MyIcons;
  color: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ size = "20", name, color, className }) => {
  const icons: Record<MyIcons, any> = {
    fire: <AiFillFire size={size} color={color} />,
    car: <BsCartDash size={size} color={color} />,
    "car-bg": <BsCartFill size={size} color={color} />,
    payment: <MdOutlinePayments size={size} color={color} />,
    menu: <HiMenuAlt3 size={size} color={color} />,
    about: <AiOutlineInfoCircle size={size} color={color} />,
    point: <TbPointFilled size={size} color={color} />,
    logout: <HiLogout size={size} color={color} />,
    person: <BsPersonHearts size={size} color={color} />,
    search: <BiSearchAlt size={size} color={color} />,
    user: <BiSolidUserCircle size={size} color={color} />,
    ubication: <HiMapPin size={size} color={color} />,
  };
  return <div className={`${className}`}>{icons[name as MyIcons]}</div>;
};

export default Icon;

Icon.defaultProps = {
  size: "20",
  name: "fire",
  color: myColors.dark,
};
