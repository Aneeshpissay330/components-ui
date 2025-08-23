import React from "react";
import type { FooterProps } from "./index.types";

const styles: { [key: string]: React.CSSProperties } = {
    footerContainer: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#ffffff",
        borderTop: "1px solid #d1d5db",
        backdropFilter: "blur(6px)",
        zIndex: 40,
    },
    footerContent: {
        maxWidth: "1280px", // same as max-w-7xl
        margin: "0 auto",
        padding: "1rem 2rem",
    },
    footerText: {
        textAlign: "center",
        fontFamily: "monospace",
        fontSize: "0.875rem", // text-sm
        color: "#374151", // darker gray
    },
};

const Footer: React.FC<FooterProps> = ({ title }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footerContainer}>
            <div style={styles.footerContent}>
                <div style={styles.footerText}>
                    <p>
                        © <span>{currentYear}</span> {title}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;