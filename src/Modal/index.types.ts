// Modal.types.ts
import * as React from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  backgroundColor?: string;
  width?: string | number;
  borderRadius?: string | number;
  style?: React.CSSProperties;
}
