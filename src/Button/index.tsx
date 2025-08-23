import * as React from "react";
import type { ButtonProps } from "./index.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  // Define CSS variables (inside TSX)
  const variables: Record<string, string | number> = {
    "--btn-bg": "#000000",
    "--btn-text": "#ffffff",
    "--btn-hover-bg": "#1f2937", // gray-800
    "--btn-border-radius": "9999px",
    "--btn-padding-x": "2rem", // px-8
    "--btn-padding-y": "1rem", // py-4
    "--btn-font-weight": "500", // font-medium
    "--btn-gap": "0.5rem",
    "--btn-transition": "all 0.3s ease",
  };

  const baseStyles: React.CSSProperties = {
    backgroundColor: `var(--btn-bg)`,
    color: `var(--btn-text)`,
    borderRadius: `var(--btn-border-radius)`,
    padding: `var(--btn-padding-y) var(--btn-padding-x)`,
    fontWeight: Number(variables["--btn-font-weight"]),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: `var(--btn-gap)`,
    transition: `var(--btn-transition)`,
    cursor: "pointer",
    ...style,
  };

  const hoverStyles: React.CSSProperties = {
    backgroundColor: `var(--btn-hover-bg)`,
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
      {leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
