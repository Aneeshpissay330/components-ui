import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 rounded-lg" >
    {children}
  </button>
);
