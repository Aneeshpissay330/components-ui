"use client"; // only if you’re using Next.js App Router (pages/ doesn’t need this)

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import type { HeaderProps } from "./index.types"; // reuse the same types

const styles = {
    header: {
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #d1d5db",
        position: "sticky" as const,
        top: 0,
        zIndex: 50,
    },
    container: {
        maxWidth: "80rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1.5rem 2rem",
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

export const NextHeader: React.FC<HeaderProps> = ({
    logo,
    title,
    navLinks = [],
    rightContent,
    activeColor = "#000",        // default = black
    inactiveColor = "#4b5563",   // default = gray-600
    activeBorderColor = "#000",  // default = black
}) => {
    const pathname = usePathname();

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.flexBetween}>
                    {/* Left: Logo + Title */}
                    <div style={styles.left}>
                        {logo && (
                            <Image
                                src={logo}
                                alt="Logo"
                                width={40}
                                height={40}
                                style={{ ...styles.logo }}
                                priority // ensures fast load for header logo
                            />
                        )}
                        <h1 style={styles.title}>{title}</h1>
                    </div>

                    {/* Middle: Navigation */}
                    {navLinks.length > 0 && (
                        <nav style={styles.nav}>
                            {navLinks.map((link, idx) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={idx}
                                        href={link.href || "#"}
                                        style={{
                                            ...styles.navLinkBase,
                                            color: isActive ? activeColor : inactiveColor,
                                            fontWeight: isActive ? 500 : 400,
                                            borderBottom: isActive ? `2px solid ${activeBorderColor}` : "none",
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    )}

                    {/* Right: Custom Content */}
                    <div style={styles.right}>{rightContent}</div>
                </div>
            </div>
        </header>
    );
};
