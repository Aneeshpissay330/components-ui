import * as React from "react";
import type { SwitchProps } from "./index.types";

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  rounded = true,
  color = "#4ade80", // green
  backgroundColor = "#d1d5db", // gray
  fullWidth = false,
  leftIcon,
  rightIcon,
  error,
  size = 24,
  style,
  ...props
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const toggle = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  const containerStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    width: fullWidth ? "100%" : "auto",
    gap: 8,
    ...style,
  };

  const trackStyles: React.CSSProperties = {
    width: size * 2,
    height: size,
    borderRadius: rounded ? size / 2 : 4,
    backgroundColor: isChecked ? color : backgroundColor,
    position: "relative",
    transition: "background-color 0.3s ease",
  };

  const knobStyles: React.CSSProperties = {
    width: size - 4,
    height: size - 4,
    borderRadius: "50%",
    backgroundColor: "#fff",
    position: "absolute",
    top: 2,
    left: isChecked ? size : 2,
    transition: "left 0.3s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
  };

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <div style={containerStyles} {...props} onClick={toggle}>
        {leftIcon && <span>{leftIcon}</span>}
        <div style={trackStyles}>
          <div style={knobStyles}></div>
        </div>
        {rightIcon && <span>{rightIcon}</span>}
      </div>
      {error && <span style={{ color: "red", fontSize: 12, marginTop: 4 }}>{error}</span>}
    </div>
  );
};
