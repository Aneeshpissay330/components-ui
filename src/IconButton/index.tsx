import * as React from "react";
import type { IconButtonProps } from "./index.types";

export const IconButton: React.FC<IconButtonProps> = ({
  rounded = true,
  color = "#fff",
  backgroundColor = "#1f2937",
  hoverEffect = true,
  size = 40,
  icon,
  style,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: rounded ? "50%" : "0.25rem",
    backgroundColor,
    color,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    ...style,
  };

  const hoverStyles: React.CSSProperties = hoverEffect
    ? {
        color: backgroundColor,
        backgroundColor: color,
      }
    : {};

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      {...props}
      style={{
        ...baseStyles,
        ...(isHovered ? hoverStyles : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
    </button>
  );
};
