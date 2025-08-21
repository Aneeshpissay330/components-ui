import * as React from "react";

export interface Tab {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  tabs: Tab[];
  value: string; // controlled active tab
  onChange: (value: string) => void;

  rounded?: boolean;
  color?: string; // active tab text/icon color
  backgroundColor?: string; // active tab background
  borderColor?: string; // tab border
  hoverEffect?: boolean; // reverse hover
  fullWidth?: boolean; // stretch tabs equally
}
