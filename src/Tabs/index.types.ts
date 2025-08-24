import * as React from "react";

export interface Tab {
  label: string;
  value: string; // unique key
  icon?: React.ReactNode;
  content: React.ReactNode; // 👈 actual content to render when active
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  tabs: Tab[];
  value: string; // which tab is active
  onChange: (value: string) => void;

  rounded?: boolean;
  activeTextColor?: string;   // ✅ instead of color
  activeBgColor?: string;     // ✅ instead of backgroundColor
  inactiveTextColor?: string;    // ✅ new: inactive tab text color
  borderColor?: string;       // border around group
  hoverEffect?: boolean;      // default true
  fullWidth?: boolean;
  sectionBgColor?: string;       // ✅ NEW: background for the whole tab section
}