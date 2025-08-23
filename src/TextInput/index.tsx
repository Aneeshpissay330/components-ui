import * as React from "react";
import type { TextInputProps, TextInputVariant } from "./index.types";

const baseStyles = {
  wrapper: {
    display: "inline-flex",
    flexDirection: "column" as const,
    width: "100%",
  },
  container: {
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#d1d5db", // default medium-gray
    borderRadius: "9999px", // default fully rounded
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.2s ease",
  } as React.CSSProperties,
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
};

export const TextInput: React.FC<TextInputProps> = ({
  variant = "outlined",
  fullWidth = true,
  rounded = true,
  color = "#000000",
  backgroundColor = "#f3f4f6",
  borderColor = "#d1d5db",
  hoverEffect = false,
  leftIcon,
  rightIcon,
  error,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  // compute dynamic styles
  const dynamicStyles: React.CSSProperties = {
    ...baseStyles.input,
    color,
    backgroundColor: variant === "contained" ? backgroundColor : "transparent",
    borderColor: variant === "outlined" ? borderColor : "transparent",
    borderBottomColor: variant === "underlined" ? borderColor : "transparent",
    borderWidth: variant === "underlined" ? "0 0 1px 0" : "1px",
    borderRadius: rounded ? "9999px" : "4px",
    width: fullWidth ? "100%" : "auto",
    ...(hoverEffect && {
      transition: "all 0.2s ease",
    }),
    ...(isFocused
      ? {
          borderColor: "transparent",
          boxShadow: "0 0 0 2px black",
        }
      : {}),
  };

  return (
    <div style={baseStyles.wrapper}>
      <div style={baseStyles.container}>
        {leftIcon && (
          <span style={{ position: "absolute", left: 16, display: "flex", alignItems: "center" }}>
            {leftIcon}
          </span>
        )}
        <input
          {...props}
          style={{
            ...dynamicStyles,
            ...style, // allow external overrides
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {rightIcon && (
          <span style={{ position: "absolute", right: 16, display: "flex", alignItems: "center" }}>
            {rightIcon}
          </span>
        )}
      </div>
      {error && <span style={baseStyles.error}>{error}</span>}
    </div>
  );
};
