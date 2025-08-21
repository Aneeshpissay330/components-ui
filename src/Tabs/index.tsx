import * as React from "react";
import type { TabsProps } from "./index.types";

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  rounded = true,
  color = "#fff",
  backgroundColor = "#1f2937",
  borderColor = "#1f2937",
  hoverEffect = true,
  fullWidth = false,
  style,
  ...props
}) => {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <div
      {...props}
      style={{
        display: "flex",
        border: `2px solid ${borderColor}`,
        borderRadius: rounded ? "0.5rem" : "0.125rem",
        overflow: "hidden",
        ...style,
      }}
    >
      {tabs.map((tab) => {
        const isActive = value === tab.value;
        const isHovered = hovered === tab.value;

        const baseStyles: React.CSSProperties = {
          flex: fullWidth ? 1 : "unset",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          transition: "all 0.3s ease",
          borderRight: `2px solid ${borderColor}`,
          color: isActive ? color : backgroundColor,
          backgroundColor: isActive ? backgroundColor : color,
        };

        const hoverStyles: React.CSSProperties = hoverEffect
          ? {
              color: backgroundColor,
              backgroundColor: color,
              borderColor: backgroundColor,
            }
          : {};

        return (
          <div
            key={tab.value}
            onClick={() => onChange(tab.value)}
            onMouseEnter={() => setHovered(tab.value)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...baseStyles,
              ...(isHovered && !isActive ? hoverStyles : {}),
            }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </div>
        );
      })}
    </div>
  );
};
