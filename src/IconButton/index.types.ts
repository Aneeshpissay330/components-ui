import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  color?: string; // icon color
  backgroundColor?: string; // button background
  hoverEffect?: boolean; // default true
  size?: number; // width & height in px, default 40
  icon: React.ReactNode; // required icon
}
