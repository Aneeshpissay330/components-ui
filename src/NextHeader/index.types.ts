import React from "react";

export interface NavLink {
  label: string;
  href?: string;
  active?: boolean;
}

export interface HeaderProps {
  logo?: string; // optional image url
  title: string;
  navLinks?: NavLink[];
  rightContent?: React.ReactNode; // custom content (buttons, avatar, etc.)
}
