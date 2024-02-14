import React from "react";
import { myColors } from "../../constants/colors";
import Icon, { MyIcons } from "../atoms/icon/icon";
import Typography, {
  families,
  spacings,
  variants,
} from "../atoms/typography/typography";

type TextIconProps = {
  label: string;
  labelColor?: string;
  labelSpacing?: spacings;
  icon?: MyIcons;
  iconColor?: string;
  iconSize?: string;
  variant?: variants | undefined;
  family?: families | undefined;
  showBorder?: boolean;
  styles?: string;
};

const TextIcon: React.FC<TextIconProps> = ({
  label,
  labelSpacing,
  icon = "fire",
  iconColor = myColors.secondary,
  iconSize = "25",
  labelColor,
  family,
  variant = "small",
  showBorder = false,
  styles,
}) => {
  return (
    <div
      className={`flex items-center cursor-pointer gap-1.5 relative ${styles}`}
    >
      {showBorder && (
        <div className="bg-danger-light w-1 h-5 rounded-md absolute -left-7"></div>
      )}
      <Icon name={icon as MyIcons} size={iconSize} color={iconColor} />
      <Typography
        label={label}
        variant={variant}
        family={family}
        color={labelColor}
        spacing={labelSpacing}
      />
    </div>
  );
};

export default TextIcon;

TextIcon.defaultProps = {
  label: "My Icon Text",
  icon: "fire",
  iconColor: myColors.secondary,
  iconSize: "25",
  variant: "small",
  family: "regular",
};
