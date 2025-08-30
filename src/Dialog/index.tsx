// Dialog.tsx
import * as React from "react";
import type { DialogProps } from "./index.types";

const base = {
  overlay: {
    position: "fixed" as const,
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  dialog: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    minWidth: "300px",
    maxWidth: "90%",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    position: "relative" as const,
  },
  header: { fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" },
  footer: { marginTop: "1rem", textAlign: "right" as const },
};

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  backgroundColor = "#fff",
  borderRadius = "12px",
  showCloseIcon = true,
  style,
}) => {
  if (!open) return null;

  return (
    <div style={base.overlay} onClick={onClose}>
      <div
        style={{ ...base.dialog, backgroundColor, borderRadius, ...style }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {showCloseIcon && (
          <button
            onClick={onClose}
            style={{ position: "absolute", top: 12, right: 12, cursor: "pointer" }}
          >
            ✕
          </button>
        )}
        {title && <div style={base.header}>{title}</div>}
        <div>{children}</div>
        {footer && <div style={base.footer}>{footer}</div>}
      </div>
    </div>
  );
};
