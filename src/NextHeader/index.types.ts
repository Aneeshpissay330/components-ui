import React from "react";

export interface NavLink {
  label: string;
  href?: string;
  active?: boolean;
}

export interface HeaderProps {
  logo?: string;
  title: string;
  navLinks?: NavLink[];
  rightContent?: React.ReactNode;
  activeColor?: string;        // text color for active nav link
  inactiveColor?: string;      // text color for inactive nav link
  activeBorderColor?: string;  // border bottom color for active link
}

