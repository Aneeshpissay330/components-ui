import React from "react";
import type { HeaderProps } from "./index.types";

const styles = {
  header: {
    backdropFilter: "blur(10px)", // glass effect assumption
    borderBottom: "1px solid #d1d5db",
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
  },
  container: {
    maxWidth: "80rem", // max-w-7xl
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  logo: {
    height: "2.5rem",
    width: "2.5rem",
    objectFit: "contain" as const,
  },
  title: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    letterSpacing: "-0.02em",
  },
  nav: {
    display: "flex",
    gap: "2rem",
    marginLeft: "2rem",
  },
  navLinkBase: {
    cursor: "pointer",
    paddingBottom: "0.25rem",
    transition: "color 0.2s",
  },
  navLinkActive: {
    color: "#000",
    fontWeight: 500,
    borderBottom: "2px solid #000",
  },
  navLinkInactive: {
    color: "#4b5563",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
};

export const Header: React.FC<HeaderProps> = ({ logo, title, navLinks = [], rightContent }) => {
  return (
    <header id="header" style={styles.header}>
      <div style={styles.container}>
        <div style={styles.flexBetween}>
          {/* Left Side: Logo + Title */}
          <div style={styles.left}>
            {logo && <img src={logo} alt="Logo" style={styles.logo} />}
            <h1 style={styles.title}>{title}</h1>
          </div>

          {/* Middle: Navigation */}
          {navLinks.length > 0 && (
            <nav style={styles.nav}>
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href || "#"}
                  style={{
                    ...styles.navLinkBase,
                    ...(link.active ? styles.navLinkActive : styles.navLinkInactive),
                  }}
                  onMouseEnter={(e) => {
                    if (!link.active) e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    if (!link.active) e.currentTarget.style.color = "#4b5563";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right Side: Custom Content */}
          <div style={styles.right}>{rightContent}</div>
        </div>
      </div>
    </header>
  );
};
