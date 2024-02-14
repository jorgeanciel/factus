import React from "react";

export type variants = "title" | "subtitle" | "body" | "small" | "link";
export type families = "medium" | "regular" | "bold" | "semibold";
export type spacings = "normal" | "wide" | "wider" | "widest";

type TypographyProps = {
  label: string;
  variant: variants;
  family?: families;
  color?: string;
  spacing?: spacings;
  className?: string;
};
const Typography: React.FC<TypographyProps> = ({
  label,
  variant,
  family,
  color,
  spacing,
  className,
}) => {
  const twVariants = {
    title: "text-2xl",
    subtitle: "text-xl",
    body: "text-base",
    small: "text-xs",
    link: "text-base underline cursor-pointer",
  };
  const letterSpacing = `tracking-${spacing}`;
  return (
    <p
      className={`${twVariants[variant]} font-montserrat-${family} ${color}  ${letterSpacing} ${className}`}
    >
      {label}
    </p>
  );
};

export default Typography;

Typography.defaultProps = {
  label: "My Text",
  variant: "body",
  family: "medium",
  color: "text-dark",
  spacing: "normal",
};
