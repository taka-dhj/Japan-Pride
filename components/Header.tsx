"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useContactModal } from "@/context/ContactModalContext";
import { content } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const { language, toggleLanguage } = useLanguage();
    const { openContactModal } = useContactModal();
    const t = content[language].nav;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.home, href: "/#hero" },
        { name: t.about, href: "/#intro" },
        { name: t.tours, href: "/#tours" },
        { name: t.guides, href: "/#team" },
        { name: t.photo, href: "/#team" },
        { name: t.wedding, href: "/#wedding" },
        { name: t.blog, href: "/blog" },
        { name: t.contact, href: "#", isContact: true },
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[100] w-full bg-white shadow-sm"
            style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                width: '100%',
                backgroundColor: '#ffffff'
            }}
        >
            <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-2 min-h-[60px] md:min-h-[64px]">
                <Link href="/" className="flex items-center gap-2 md:gap-3 text-foreground min-w-0 flex-1 md:flex-initial">
                    <Image 
                        src="/logo.png" 
                        alt="Japan Pride Journeys Logo" 
                        width={36} 
                        height={36} 
                        className="object-contain w-9 h-9 md:w-10 md:h-10 flex-shrink-0"
                    />
                    {/* 
                        フォントサイズ計算:
                        - iPhone SE (375px): 4.5vw = 16.9px → 1行で収まる
                        - 320px以下: 最小1rem(16px)で2行表示を許容
                        - 768px以上: 最大1.5rem(24px)
                    */}
                    <span 
                        className="font-serif font-bold tracking-wide leading-tight"
                        style={{ fontSize: 'clamp(1rem, 4.5vw, 1.5rem)' }}
                    >
                        Japan Pride Journeys
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        link.isContact ? (
                            <button
                                key={link.name}
                                onClick={openContactModal}
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        )
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center text-sm font-medium transition-colors"
                    >
                        <span className={language === "en" ? "text-foreground font-semibold" : "text-foreground/50 hover:text-foreground/70"}>EN</span>
                        <span className="mx-1 text-foreground/30">|</span>
                        <span className={language === "jp" ? "text-foreground font-semibold" : "text-foreground/50 hover:text-foreground/70"}>JA</span>
                    </button>
                </nav>

                {/* Mobile: Language Toggle + Menu Button */}
                <div className="flex md:hidden items-center gap-2 flex-shrink-0">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center text-xs font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                        <span className={language === "en" ? "text-foreground font-semibold" : "text-foreground/50"}>EN</span>
                        <span className="mx-0.5 text-foreground/30">|</span>
                        <span className={language === "jp" ? "text-foreground font-semibold" : "text-foreground/50"}>JA</span>
                    </button>
                    <button
                        className="text-foreground p-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-[101]"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                link.isContact ? (
                                    <button
                                        key={link.name}
                                        onClick={() => {
                                            openContactModal();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-lg font-medium text-foreground hover:text-primary text-left"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-foreground hover:text-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
