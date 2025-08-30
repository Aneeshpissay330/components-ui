// Modal.tsx
import * as React from "react";
import type { ModalProps } from "./index.types";

const base = {
  overlay: {
    position: "fixed" as const,
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "2rem",
    width: "400px",
    maxWidth: "90%",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
};

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  backgroundColor = "#fff",
  width = "400px",
  borderRadius = "8px",
  style,
}) => {
  if (!open) return null;

  return (
    <div style={base.overlay} onClick={onClose}>
      <div
        style={{ ...base.modal, backgroundColor, width, borderRadius, ...style }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
