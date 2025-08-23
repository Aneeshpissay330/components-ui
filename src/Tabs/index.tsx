import * as React from "react";
import type { TabsProps, Tab } from "./index.types";

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  rounded = true,
  color = "#fff",           // active text/icon color
  backgroundColor = "#000", // active bg
  borderColor = "#d1d5db",  // gray-300 fallback
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
          // ⬇️ use longhand instead of `border: "1px solid ..."`
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: borderColor,
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
                className={`tab-btn flex-1 font-medium transition-all inline-flex items-center justify-center gap-2 ${
                  isActive ? "bg-black text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"
                }`}
                style={{
                  borderRadius: rounded ? "0.75rem" : "0.25rem",
                  padding: "0.75rem 1.5rem",
                  width: fullWidth ? "100%" : "auto",
                  backgroundColor: isActive ? backgroundColor : "transparent",
                  color: isActive ? color : "#374151", // gray-700
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
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor,
            borderRadius: "0.5rem",
            marginTop: 16,
            maxHeight: "clamp(240px, 55vh, 700px)", // scales with viewport
            overflowY: "auto",
          }}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
