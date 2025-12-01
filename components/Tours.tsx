"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Tours = () => {
    const { language } = useLanguage();
    const t = content[language].tours;

    return (
        <section id="tours" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionHeader
                    subtitle={t.subtitle}
                    title={t.title}
                    alignment="center"
                    colorIndex={2}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((tour, index) => (
                        <Link
                            key={tour.id}
                            href={`/tours/${tour.id}`}
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground uppercase tracking-wider rounded-full">
                                        {tour.price}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center text-muted-foreground text-xs font-medium mb-4 space-x-2">
                                        <Clock className="w-3 h-3" />
                                        <span>{tour.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {tour.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {tour.description}
                                    </p>
                                    <div className="inline-flex items-center text-sm font-medium text-primary group-hover:text-foreground transition-colors group/btn">
                                        {t.cta}
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
