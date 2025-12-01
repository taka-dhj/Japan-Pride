"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Wedding = () => {
    const { language } = useLanguage();
    const t = content[language].wedding;

    return (
        <section id="wedding" className="relative py-32 overflow-hidden">
            {/* Background Image with Parallax Effect (Simulated with fixed attachment for simplicity) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url('${t.image}')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="block text-2xl md:text-3xl font-pinyon text-white/90 mb-2"
                    >
                        {t.subtitle}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight uppercase tracking-widest text-white"
                    >
                        {t.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 font-light"
                    >
                        {t.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className="px-10 py-4 bg-white text-foreground font-medium rounded-sm hover:bg-white/90 transition-colors shadow-lg">
                            {t.cta}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
