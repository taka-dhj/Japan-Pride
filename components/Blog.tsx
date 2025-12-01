"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Blog = () => {
    const { language } = useLanguage();
    const t = content[language].blog;

    return (
        <section id="blog" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div className="flex-1">
                        <SectionHeader
                            subtitle={t.subtitle}
                            title={t.title}
                            alignment="left"
                            colorIndex={4}
                            className="mb-0"
                        />
                    </div>

                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden md:flex items-center text-sm font-medium text-primary hover:text-foreground transition-colors group"
                    >
                        View All Stories
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.items.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="text-xs font-medium text-muted-foreground mb-2">
                                {post.date}
                            </div>
                            <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-foreground transition-colors group"
                    >
                        View All Stories
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};
