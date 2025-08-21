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
  color?: string; // active tab text/icon color
  backgroundColor?: string; // active tab background
  borderColor?: string; // tab border
  hoverEffect?: boolean; // reverse hover
  fullWidth?: boolean; // stretch tabs equally
}
