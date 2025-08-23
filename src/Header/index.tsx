import React from "react";
import type { HeaderProps } from "./index.types";

export const Header: React.FC<HeaderProps> = ({ logo, title, navLinks = [], rightContent }) => {
  return (
    <header
      id="header"
      className="glass-effect border-b border-medium-gray sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Left Side: Logo + Title */}
          <div className="flex items-center space-x-4">
            {logo && (
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            )}
            <h1 className="text-3xl font-bold tracking-tighter">{title}</h1>
          </div>

          {/* Middle: Navigation */}
          {navLinks.length > 0 && (
            <nav className="flex space-x-8 ml-8">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href || "#"}
                  className={`cursor-pointer pb-1 transition-colors ${
                    link.active
                      ? "text-black font-medium border-b-2 border-black"
                      : "text-darker-gray hover:text-black"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right Side: Custom Content */}
          <div className="flex items-center space-x-4">{rightContent}</div>
        </div>
      </div>
    </header>
  );
};