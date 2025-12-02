"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BlogPost, blogTags } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlogDetailClientProps {
    post: BlogPost;
}

export function BlogDetailClient({ post }: BlogDetailClientProps) {
    const { language } = useLanguage();
    const tags = blogTags[language];

    // Split content into paragraphs for better rendering
    const contentParagraphs = post.content[language].split("\n\n").filter((p) => p.trim());

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16 md:pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden" style={{ height: "50vh", minHeight: "400px" }}>
                    <div className="relative w-full h-full">
                        <Image
                            src={post.image}
                            alt={post.title[language]}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white rounded-sm hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">
                            {language === "en" ? "Back to Blog" : "ブログに戻る"}
                        </span>
                    </Link>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                        <div className="container mx-auto">
                            <div className="flex items-center gap-4 mb-4 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-lg font-medium">
                                        {new Date(post.date).toLocaleDateString(
                                            language === "en" ? "en-US" : "ja-JP",
                                            {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }
                                        )}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    <span className="text-lg font-medium">
                                        {post.author.name[language]}
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                                {post.title[language]}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/30 text-sm text-muted-foreground rounded-sm"
                                    >
                                        <Tag className="w-4 h-4" />
                                        {tags[tag as keyof typeof tags] || tag}
                                    </span>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none">
                                {contentParagraphs.map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="text-lg text-foreground leading-relaxed mb-6"
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>

                            {/* Author Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: contentParagraphs.length * 0.1 }}
                                className="mt-16 pt-8 border-t border-border/30"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <User className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                                            {post.author.name[language]}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {post.author.role[language]}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Back to Blog Link */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: contentParagraphs.length * 0.1 + 0.2 }}
                                className="mt-12 text-center"
                            >
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-sm hover:bg-primary/90 transition-colors font-medium"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    {language === "en" ? "Back to All Posts" : "すべての記事に戻る"}
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}


