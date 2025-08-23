import * as React from "react";
import type { TextInputProps } from "./index.types";

const styles = {
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
    backgroundColor: "#f3f4f6", // light-gray
    border: "1px solid #d1d5db", // medium-gray
    borderRadius: "9999px", // fully rounded
    paddingLeft: "1.5rem", // px-6
    paddingRight: "1.5rem",
    paddingTop: "1rem", // py-4
    paddingBottom: "1rem",
    fontSize: "1rem", // text-base
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
  leftIcon,
  rightIcon,
  error,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {leftIcon && (
          <span style={{ position: "absolute", left: 16, display: "flex", alignItems: "center" }}>
            {leftIcon}
          </span>
        )}
        <input
          {...props}
          style={{
            ...styles.input,
            ...(isFocused
              ? {
                  borderColor: "transparent",
                  boxShadow: "0 0 0 2px black", // focus:ring-2 focus:ring-black
                }
              : {}),
            ...style,
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
      {error && <span style={styles.error}>{error}</span>}
    </div>
  );
};
