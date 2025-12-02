"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    alignment?: "center" | "left";
    className?: string;
    colorIndex?: number; // Index to determine which Pride color to use for first character
}

// Refined pastel Pride colors for dots
const PRIDE_COLORS_DOTS = [
    "#E8A5A5", // Soft red
    "#F5C98E", // Soft orange  
    "#F9E79F", // Soft yellow
    "#A8D5BA", // Soft green
    "#A5C4D4", // Soft blue
    "#C5B3D5", // Soft violet
];

// Vibrant Pride flag colors for text
const PRIDE_COLORS_TEXT = [
    "#E40303", // Red
    "#FF8C00", // Orange
    "#FFED00", // Yellow
    "#008026", // Green
    "#24408E", // Blue
    "#732982", // Violet
];

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    description,
    alignment = "center",
    className,
    colorIndex = 0,
}) => {
    const isCenter = alignment === "center";
    const firstCharColor = PRIDE_COLORS_TEXT[colorIndex % PRIDE_COLORS_TEXT.length];

    return (
        <div className={cn("mb-16 relative", isCenter ? "text-center" : "text-left", className)}>
            <div>
                {/* Minimal Dots */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                        "flex gap-1.5 mb-4",
                        isCenter ? "justify-center" : "justify-start"
                    )}
                >
                    {PRIDE_COLORS_DOTS.map((color, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </motion.div>

                {/* Subtitle */}
                {subtitle && (
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="block text-sm md:text-base font-medium text-primary/70 mb-3 uppercase tracking-wider"
                    >
                        {subtitle}
                    </motion.span>
                )}

                {/* Title - normal color, no rainbow */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-4"
                >
                    {title}
                </motion.h2>

                {/* Simple elegant line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={cn(
                        "h-[1px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 mb-6",
                        isCenter ? "mx-auto w-32 md:w-40" : "w-32 md:w-40"
                    )}
                    style={{ originX: isCenter ? 0.5 : 0 }}
                />

                {/* Description */}
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={cn(
                            "text-muted-foreground leading-relaxed max-w-2xl font-light",
                            isCenter && "mx-auto"
                        )}
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </div>
    );
};
