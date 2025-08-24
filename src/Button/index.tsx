import * as React from "react";
import type { ButtonProps } from "./index.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  style,
  color = "#ffffff",            // default text color
  backgroundColor = "#000000",   // default bg color
  hoverEffect = true,
  rounded = true,
  fullWidth = false,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Base styles
  const baseStyles: React.CSSProperties = {
    backgroundColor,
    color,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: backgroundColor, // border matches bg by default
    borderRadius: rounded ? "9999px" : "6px",
    padding: "1rem 2rem", // py-4 px-8
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
    width: fullWidth ? "100%" : "auto",
    ...style,
  };

  // Hover styles
  const hoverStyles: React.CSSProperties = hoverEffect
    ? {
        backgroundColor: color,          // invert colors on hover
        color: backgroundColor,
        borderColor: backgroundColor,
      }
    : {};

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
      {leftIcon && <span style={{ display: "flex", alignItems: "center" }}>{leftIcon}</span>}
      <span style={{ display: "flex", alignItems: "center" }}>{children}</span>
      {rightIcon && <span style={{ display: "flex", alignItems: "center" }}>{rightIcon}</span>}
    </button>
  );
};
