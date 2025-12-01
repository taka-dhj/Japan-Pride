"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const Ambassadors = () => {
    const { language } = useLanguage();
    const t = content[language].intro;

    return (
        <section id="intro" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm shadow-xl"
                    >
                        <Image
                            src="/photo/t-a/IMG_0326.JPG"
                            alt="Taka & Ady"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 flex flex-col justify-center"
                    >
                        <SectionHeader
                            title={t.title}
                            subtitle={t.role}
                            alignment="left"
                            colorIndex={0}
                            className="mb-8"
                        />
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                            &quot;{t.message}&quot;
                        </p>
                        <div className="flex flex-col space-y-2 mb-8">
                            <span className="font-serif text-xl italic text-foreground">{t.names}</span>
                        </div>

                        <a
                            href="https://www.instagram.com/adysacol/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-foreground transition-colors group"
                        >
                            <Instagram className="w-5 h-5 mr-2" />
                            <span className="border-b border-primary/30 group-hover:border-foreground transition-all">
                                {t.instagram}
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
