import * as React from "react";
import type { ButtonProps } from "./index.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  // Define variables
  const variables: Record<string, string | number> = {
    "--btn-bg": "#000000",
    "--btn-text": "#ffffff",
    "--btn-hover-bg": "#ffffff",
    "--btn-hover-text": "#000000",
    "--btn-border-color": "#000000",
    "--btn-border-radius": "9999px", // fully rounded
    "--btn-padding-x": "2rem", // px-8
    "--btn-padding-y": "1rem", // py-4
    "--btn-font-weight": "500",
    "--btn-gap": "0.5rem",
    "--btn-transition": "all 0.3s ease",
  };

  const baseStyles: React.CSSProperties = {
    backgroundColor: `var(--btn-bg)`,
    color: `var(--btn-text)`,
    border: "2px solid transparent",
    borderRadius: `var(--btn-border-radius)`,
    padding: `var(--btn-padding-y) var(--btn-padding-x)`,
    fontWeight: Number(variables["--btn-font-weight"]),
    display: "inline-flex",
    alignItems: "center", // centers icons + text vertically
    justifyContent: "center", // keeps spacing even
    gap: `var(--btn-gap)`,
    transition: `var(--btn-transition)`,
    cursor: "pointer",
    ...style,
  };

  const hoverStyles: React.CSSProperties = {
    backgroundColor: `var(--btn-hover-bg)`,
    color: `var(--btn-hover-text)`,
    borderColor: `var(--btn-border-color)`,
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      {...props}
      style={{
        ...variables,
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
