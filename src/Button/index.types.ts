import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  color?: string; // text color
  backgroundColor?: string; // button background
  hoverEffect?: boolean; // default true
  fullWidth?: boolean; // default false
  leftIcon?: React.ReactNode; // icon on left
  rightIcon?: React.ReactNode; // icon on right
}