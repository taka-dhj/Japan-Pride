"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContactModal } from "@/context/ContactModalContext";
import { content } from "@/lib/data";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
        { name: t.tours, href: "/#tours" },
        { name: t.about, href: "/#intro" },
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
            <div className="container mx-auto px-6 py-4 flex justify-between items-center min-h-[64px]">
                <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-foreground">
                    Japan Pride Journeys
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
                        className="flex items-center space-x-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        <span>{language === "en" ? "JP" : "EN"}</span>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
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
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center space-x-2 text-lg font-medium text-foreground hover:text-primary pt-4 border-t"
                            >
                                <Globe className="w-5 h-5" />
                                <span>{language === "en" ? "Switch to Japanese" : "Switch to English"}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
