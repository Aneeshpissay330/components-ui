// components/RadioGroup.types.ts
import * as React from "react";

export type RadioOption = {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
};

export type RadioGroupProps = {
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
  className?: string;
  /**
   * Override CSS variables per-instance (optional)
   * Example: { '--rg-active-bg': '#000', '--rg-active-text': '#fff' }
   */
  style?: React.CSSProperties;
};
