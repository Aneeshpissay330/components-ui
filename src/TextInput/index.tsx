import * as React from "react";
import type { TextInputProps } from "./index.types";

const base = {
  wrapper: { display: "inline-flex", flexDirection: "column" as const, width: "100%" },
  container: { position: "relative" as const, display: "flex", alignItems: "center" },
  input: {
    flex: 1,
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.2s ease",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    borderStyle: "solid" as const,
    borderRadius: "9999px",
  } as React.CSSProperties,
  error: { color: "red", fontSize: 12, marginTop: 4 },
};

export const TextInput: React.FC<TextInputProps> = ({
  variant = "outlined",
  fullWidth = true,
  rounded = true,
  color = "#000",
  backgroundColor = "#f3f4f6",
  borderColor = "#d1d5db",
  leftIcon,
  rightIcon,
  error,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  // Start with properties common to all variants
  const inputStyle: React.CSSProperties = {
    ...base.input,
    color,
    width: fullWidth ? "100%" : "auto",
    borderRadius: rounded ? "9999px" : "4px",
    backgroundColor: variant === "contained" ? backgroundColor : "transparent",
  };

  if (variant === "outlined") {
    // Use ONLY all-sides props; never side-specific here
    Object.assign(inputStyle, {
      borderWidth: "1px",
      borderColor,                 // all sides
    });
    if (isFocused) {
      // keep using only all-sides props
      inputStyle.borderColor = "transparent";
      inputStyle.boxShadow = "0 0 0 2px black";
    }
  } else if (variant === "underlined") {
    // Use ONLY side-specific props; never borderColor here
    Object.assign(inputStyle, {
      borderWidth: "0 0 1px 0",
      borderTopColor: "transparent",
      borderRightColor: "transparent",
      borderLeftColor: "transparent",
      borderBottomColor: borderColor,
      borderRadius: 0, // underlines usually not pill-shaped
    });
    if (isFocused) {
      // change only the bottom border color (no borderColor!)
      inputStyle.borderBottomColor = "black";
      inputStyle.boxShadow = "none";
    }
  } else {
    // contained without outline
    Object.assign(inputStyle, {
      borderWidth: 0,
    });
    if (isFocused) {
      inputStyle.boxShadow = "0 0 0 2px black";
    }
  }

  return (
    <div style={base.wrapper}>
      <div style={base.container}>
        {leftIcon && (
          <span style={{ position: "absolute", left: 16, display: "flex", alignItems: "center" }}>
            {leftIcon}
          </span>
        )}
        <input
          {...props}
          style={{ ...inputStyle, ...style }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {rightIcon && (
          <span style={{ position: "absolute", right: 16, display: "flex", alignItems: "center" }}>
            {rightIcon}
          </span>
        )}
      </div>
      {error && <span style={base.error}>{error}</span>}
    </div>
  );
};
