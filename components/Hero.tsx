"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
    const { language } = useLanguage();
    const t = content[language].hero;

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 hero-bg-mobile"
                style={{ 
                    backgroundImage: `url('/photo/t-a/IMG_6592.JPG')`
                }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-16 md:pt-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-lg"
                >
                    Discover the Hidden Japan with{" "}
                    <span style={{ color: "#E85555" }}>P</span>
                    <span style={{ color: "#FFA033" }}>r</span>
                    <span style={{ color: "#FFF54D" }}>i</span>
                    <span style={{ color: "#33A64D" }}>d</span>
                    <span style={{ color: "#4D5FA8" }}>e</span>
                    <span style={{ color: "#8C4D9E" }}>.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 font-light drop-shadow-md"
                >
                    {t.subhead}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#tours"
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-300 border border-white/30 hover:bg-white/10 hover:border-white/50 rounded-full backdrop-blur-sm"
                    >
                        {t.cta}
                        <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
};
