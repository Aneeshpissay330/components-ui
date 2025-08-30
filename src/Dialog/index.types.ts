// Dialog.types.ts
import * as React from "react";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  backgroundColor?: string;
  borderRadius?: string | number;
  showCloseIcon?: boolean;
  style?: React.CSSProperties;
}
