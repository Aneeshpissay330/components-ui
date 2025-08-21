import * as React from "react";
import type { TextInputProps } from "./index.types";

export const TextInput: React.FC<TextInputProps> = ({
  variant = "outlined",
  fullWidth = false,
  rounded = true,
  color = "#000",
  backgroundColor = "#fff",
  borderColor = "#ccc",
  hoverEffect = true,
  leftIcon,
  rightIcon,
  error,
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Base input styles
  const baseStyles: React.CSSProperties = {
    width: fullWidth ? "100%" : "auto",
    padding: leftIcon || rightIcon ? "0.5rem 1rem" : "0.5rem",
    paddingLeft: leftIcon ? "2.5rem" : undefined,
    paddingRight: rightIcon ? "2.5rem" : undefined,
    borderRadius: rounded ? "0.5rem" : "0.25rem",
    color,
    outline: "none",
    transition: "all 0.2s ease",
    backgroundColor: variant === "contained" ? backgroundColor : "transparent",
    border:
      variant === "outlined"
        ? `1px solid ${isHovered && hoverEffect ? color : borderColor}`
        : variant === "underlined"
        ? "none"
        : undefined,
    borderBottom:
      variant === "underlined"
        ? `1px solid ${isHovered && hoverEffect ? color : borderColor}`
        : undefined,
    display: "inline-flex",
    alignItems: "center",
    position: "relative",
    ...style,
  };

  return (
    <div style={{ width: fullWidth ? "100%" : "auto", display: "inline-flex", flexDirection: "column" }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {leftIcon && (
          <span style={{ position: "absolute", left: 8, display: "flex", alignItems: "center" }}>{leftIcon}</span>
        )}
        <input
          {...props}
          style={baseStyles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {rightIcon && (
          <span style={{ position: "absolute", right: 8, display: "flex", alignItems: "center" }}>{rightIcon}</span>
        )}
      </div>
      {error && <span style={{ color: "red", fontSize: 12, marginTop: 4 }}>{error}</span>}
    </div>
  );
};
