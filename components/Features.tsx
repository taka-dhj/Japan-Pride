"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
                            className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
