import * as React from "react";
import type { TabsProps, Tab } from "./index.types";

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  rounded = true,
  activeTextColor = "#ffffff",
  activeBgColor = "#000000",
  borderColor = "#d1d5db",
  hoverEffect = true,
  fullWidth = true,
  className,
  style,
  ...props
}) => {
  const activeTab = tabs.find((t) => t.value === value);

  return (
    <div id="tab-bar" className={`mb-8 ${className || ""}`} style={style} {...props}>
      <div
        className="bg-white shadow-sm p-2"
        style={{
          border: `1px solid ${borderColor}`,
          borderRadius: rounded ? "1rem" : "0.25rem",
        }}
      >
        <div className="flex space-x-2">
          {tabs.map((tab: Tab) => {
            const isActive = value === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => onChange(tab.value)}
                className="tab-btn flex-1 font-medium transition-all inline-flex items-center justify-center gap-2"
                style={{
                  borderRadius: rounded ? "0.75rem" : "0.25rem",
                  padding: "0.75rem 1.5rem",
                  width: fullWidth ? "100%" : "auto",
                  backgroundColor: isActive ? activeBgColor : "transparent",
                  color: isActive ? activeTextColor : "#374151",
                  ...(hoverEffect && !isActive
                    ? { backgroundColor: "transparent", transition: "all 0.2s ease" }
                    : {}),
                }}
              >
                {tab.icon && <span>{tab.icon}</span>}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active tab content */}
      {activeTab && (
        <div
          style={{
            padding: "1rem",
            border: `1px solid ${borderColor}`,
            borderRadius: "0.5rem",
            marginTop: 16,
          }}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
