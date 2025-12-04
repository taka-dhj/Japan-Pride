"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BlogPost, blogTags, POSTS_PER_PAGE } from "@/lib/blog-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

interface BlogListClientProps {
    allPosts: BlogPost[];
    allTags: string[];
}

export function BlogListClient({
    allPosts,
    allTags,
}: BlogListClientProps) {
    const { language } = useLanguage();
    const tags = blogTags[language];
    
    // Client-side state for pagination and filtering
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Filter and paginate posts on the client side
    const { posts, totalPages } = useMemo(() => {
        let filteredPosts = allPosts;

        // Filter by tag if selected
        if (selectedTag) {
            filteredPosts = allPosts.filter((post) => post.tags.includes(selectedTag));
        }

        // Sort by date (newest first)
        filteredPosts = [...filteredPosts].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Calculate pagination
        const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;

        return {
            posts: filteredPosts.slice(startIndex, endIndex),
            totalPages,
        };
    }, [allPosts, selectedTag, currentPage]);

    // Reset to page 1 when tag changes
    const handleTagChange = (tag: string | null) => {
        setSelectedTag(tag);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16 md:pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-secondary/30">
                    <div className="container mx-auto px-6">
                        <SectionHeader
                            subtitle={language === "en" ? "Journal" : "旅の記録"}
                            title={language === "en" ? "Stories & Updates" : "ストーリー & アップデート"}
                            alignment="center"
                            colorIndex={4}
                        />
                    </div>
                </section>

                {/* Tags Filter */}
                <section className="py-8 bg-white border-b border-border/30">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap gap-3 justify-center">
                            <button
                                onClick={() => handleTagChange(null)}
                                className={cn(
                                    "px-4 py-2 rounded-sm text-sm font-medium transition-colors",
                                    !selectedTag
                                        ? "bg-primary text-white"
                                        : "bg-secondary/30 text-foreground hover:bg-secondary/50"
                                )}
                            >
                                {language === "en" ? "All" : "すべて"}
                            </button>
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagChange(selectedTag === tag ? null : tag)}
                                    className={cn(
                                        "px-4 py-2 rounded-sm text-sm font-medium transition-colors",
                                        selectedTag === tag
                                            ? "bg-primary text-white"
                                            : "bg-secondary/30 text-foreground hover:bg-secondary/50"
                                    )}
                                >
                                    {tags[tag as keyof typeof tags] || tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-6">
                        {posts.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-muted-foreground text-lg">
                                    {language === "en"
                                        ? "No posts found."
                                        : "記事が見つかりませんでした。"}
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {posts.map((post, index) => (
                                        <motion.article
                                            key={post.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="group block h-full"
                                            >
                                                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col">
                                                    {/* Image */}
                                                    <div className="relative aspect-[4/3] overflow-hidden">
                                                        <Image
                                                            src={post.image}
                                                            alt={post.title[language]}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-6 flex-1 flex flex-col">
                                                        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-3">
                                                            <Calendar className="w-3 h-3" />
                                                            <span>
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

                                                        <h2 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                            {post.title[language]}
                                                        </h2>

                                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                                                            {post.excerpt[language]}
                                                        </p>

                                                        {/* Tags */}
                                                        <div className="flex flex-wrap gap-2 mt-auto">
                                                            {post.tags.slice(0, 3).map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/30 text-xs text-muted-foreground rounded-sm"
                                                                >
                                                                    <Tag className="w-3 h-3" />
                                                                    {tags[tag as keyof typeof tags] || tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.article>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                            disabled={currentPage === 1}
                                            className={cn(
                                                "px-4 py-2 rounded-sm border border-border/50 transition-colors",
                                                currentPage === 1
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : "hover:bg-secondary/30"
                                            )}
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                            (page) => {
                                                // Show first page, last page, current page, and pages around current
                                                if (
                                                    page === 1 ||
                                                    page === totalPages ||
                                                    (page >= currentPage - 1 && page <= currentPage + 1)
                                                ) {
                                                    return (
                                                        <button
                                                            key={page}
                                                            onClick={() => setCurrentPage(page)}
                                                            className={cn(
                                                                "px-4 py-2 rounded-sm border border-border/50 transition-colors min-w-[40px] text-center",
                                                                currentPage === page
                                                                    ? "bg-primary text-white border-primary"
                                                                    : "hover:bg-secondary/30"
                                                            )}
                                                        >
                                                            {page}
                                                        </button>
                                                    );
                                                } else if (
                                                    page === currentPage - 2 ||
                                                    page === currentPage + 2
                                                ) {
                                                    return (
                                                        <span
                                                            key={page}
                                                            className="px-2 text-muted-foreground"
                                                        >
                                                            ...
                                                        </span>
                                                    );
                                                }
                                                return null;
                                            }
                                        )}

                                        <button
                                            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                                            disabled={currentPage === totalPages}
                                            className={cn(
                                                "px-4 py-2 rounded-sm border border-border/50 transition-colors",
                                                currentPage === totalPages
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : "hover:bg-secondary/30"
                                            )}
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}


