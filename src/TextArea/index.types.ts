import * as React from "react";

export type TextAreaVariant = "contained" | "outlined" | "underlined";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaVariant;
  fullWidth?: boolean;
  rounded?: boolean;
  color?: string; // text color
  backgroundColor?: string; // for contained variant
  borderColor?: string; // for outlined/underlined
  hoverEffect?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}
