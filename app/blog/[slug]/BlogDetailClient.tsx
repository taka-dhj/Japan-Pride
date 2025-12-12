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
import ReactMarkdown from "react-markdown";
import { ArticleH2, ArticleH3, ArticleH4, PRIDE_COLORS } from "@/components/ui/ArticleHeadings";

interface BlogDetailClientProps {
    post: BlogPost;
}

export function BlogDetailClient({ post }: BlogDetailClientProps) {
    const { language } = useLanguage();
    const tags = blogTags[language];

    // Process content to convert **Q:** style to proper markdown headings
    const processedContent = post.content[language]
        // Convert **Q: ... ** to ## headings
        .replace(/\*\*Q:\s*([^*]+)\*\*/g, '\n## $1\n')
        // Convert other **bold** patterns that look like headings
        .replace(/\*\*([A-Z][^*]{10,})\*\*/g, '\n### $1\n');

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

                            {/* Content with Markdown */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="prose prose-lg max-w-none
                                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
                                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border/30 prose-h2:pb-4
                                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                                    prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                                    prose-p:text-lg prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
                                    prose-strong:text-foreground prose-strong:font-bold
                                    prose-em:text-foreground prose-em:italic
                                    prose-ul:my-6 prose-ul:pl-6
                                    prose-ol:my-6 prose-ol:pl-6
                                    prose-li:text-lg prose-li:text-foreground prose-li:mb-2
                                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:my-8
                                    prose-a:text-primary prose-a:underline prose-a:hover:text-primary/80
                                "
                            >
                                <ReactMarkdown
                                    components={{
                                        h1: ({ children }) => <ArticleH2>{children}</ArticleH2>,
                                        h2: ({ children }) => <ArticleH2>{children}</ArticleH2>,
                                        h3: ({ children }) => <ArticleH3>{children}</ArticleH3>,
                                        h4: ({ children }) => <ArticleH4>{children}</ArticleH4>,
                                        p: ({ children }) => (
                                            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                                                {children}
                                            </p>
                                        ),
                                        strong: ({ children }) => (
                                            <strong className="font-bold text-primary">
                                                {children}
                                            </strong>
                                        ),
                                        em: ({ children }) => (
                                            <em className="italic text-muted-foreground">{children}</em>
                                        ),
                                        ul: ({ children }) => (
                                            <ul className="my-6 pl-6 space-y-3">
                                                {children}
                                            </ul>
                                        ),
                                        ol: ({ children }) => (
                                            <ol className="my-6 pl-6 list-decimal space-y-3">
                                                {children}
                                            </ol>
                                        ),
                                        li: ({ children }) => (
                                            <li className="text-base md:text-lg text-foreground list-disc ml-4 marker:text-primary">
                                                {children}
                                            </li>
                                        ),
                                        blockquote: ({ children }) => (
                                            <blockquote 
                                                className="pl-6 italic text-muted-foreground my-8 relative"
                                                style={{
                                                    borderLeft: `4px solid`,
                                                    borderImage: `linear-gradient(to bottom, ${PRIDE_COLORS.join(', ')}) 1`
                                                }}
                                            >
                                                {children}
                                            </blockquote>
                                        ),
                                        a: ({ href, children }) => (
                                            <a
                                                href={href}
                                                className="text-primary underline hover:text-primary/80 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {children}
                                            </a>
                                        ),
                                    }}
                                >
                                    {processedContent}
                                </ReactMarkdown>
                            </motion.div>

                            {/* Author Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
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
                                transition={{ duration: 0.6, delay: 0.5 }}
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




