import * as React from "react";
import type { ButtonProps } from "./index.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  rounded = true,
  color = "#fff",
  backgroundColor = "#1f2937",
  hoverEffect = true,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    padding: "0.5rem 1rem",
    borderRadius: rounded ? "0.5rem" : "0.125rem",
    color,
    backgroundColor,
    width: fullWidth ? "100%" : "auto",
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
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
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
