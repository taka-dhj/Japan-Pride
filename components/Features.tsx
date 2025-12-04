"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

// パステルカラーのアクセント（各柱に対応）
const pillarColors = [
    "bg-rose-300",
    "bg-amber-300",
    "bg-emerald-300",
    "bg-sky-300",
];

export const Features = () => {
    const { language } = useLanguage();
    const t = content[language].features;

    return (
        <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <SectionHeader
                    subtitle={t.subtitle}
                    title={t.title}
                    alignment="center"
                    colorIndex={1}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center overflow-hidden"
                        >
                            {/* カテゴリラベル（カードの上部） */}
                            <div className={`w-full py-3 ${pillarColors[index]}`}>
                                <span className="text-base font-bold tracking-wider text-white/90">
                                    {item.category}
                                </span>
                            </div>
                            
                            <div className="p-8 flex flex-col items-center">
                                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
