import * as React from "react";
import type { TabsProps } from "./index.types";

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  rounded = true,
  color = "#fff",
  backgroundColor = "#1f2937",
  borderColor = "#ccc",
  hoverEffect = true,
  fullWidth = false,
  style,
  ...props
}) => {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <div {...props} style={{ ...style }}>
      {/* Tab Headers */}
      <div style={{ display: "flex", borderBottom: `2px solid ${borderColor}` }}>
        {tabs.map((tab) => {
          const isActive = tab.value === value;
          const isHovered = hovered === tab.value;

          const baseStyles: React.CSSProperties = {
            flex: fullWidth ? 1 : "auto",
            padding: "0.5rem 1rem",
            borderRadius: rounded ? "0.5rem 0.5rem 0 0" : "0",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "all 0.3s ease",
            border: `1px solid ${borderColor}`,
            borderBottom: isActive ? "2px solid transparent" : `1px solid ${borderColor}`,
            color: isActive ? color : "#555",
            backgroundColor: isActive ? backgroundColor : "transparent",
          };

          const hoverStyles: React.CSSProperties = hoverEffect
            ? {
                backgroundColor: isActive ? color : backgroundColor,
                color: isActive ? backgroundColor : color,
                border: `1px solid ${isActive ? color : backgroundColor}`,
              }
            : {};

          return (
            <div
              key={tab.value}
              style={{
                ...baseStyles,
                ...(isHovered ? hoverStyles : {}),
              }}
              onClick={() => onChange(tab.value)}
              onMouseEnter={() => setHovered(tab.value)}
              onMouseLeave={() => setHovered(null)}
            >
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
            </div>
          );
        })}
      </div>

      {/* Tab Content */}
      <div style={{ padding: "1rem" }}>
        {tabs.find((t) => t.value === value)?.content}
      </div>
    </div>
  );
};
