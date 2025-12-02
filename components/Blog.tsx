"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Blog = () => {
    const { language } = useLanguage();
    const t = content[language].blog;

    // Get latest 3 blog posts
    const latestPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

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

                    <Link
                        href="/blog"
                        className="hidden md:flex items-center text-sm font-medium text-primary hover:text-foreground transition-colors group"
                    >
                        {language === "en" ? "View All Stories" : "すべての記事を見る"}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                                    <Image
                                        src={post.image}
                                        alt={post.title[language]}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="text-xs font-medium text-muted-foreground mb-2">
                                    {new Date(post.date).toLocaleDateString(
                                        language === "en" ? "en-US" : "ja-JP",
                                        { year: "numeric", month: "long", day: "numeric" }
                                    )}
                                </div>
                                <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                                    {post.title[language]}
                                </h3>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-foreground transition-colors group"
                    >
                        {language === "en" ? "View All Stories" : "すべての記事を見る"}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
