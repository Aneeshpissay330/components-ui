import * as React from "react";

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  rounded?: boolean;
  color?: string; // active color
  backgroundColor?: string; // inactive color
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  size?: number; // diameter of the toggle knob
}
