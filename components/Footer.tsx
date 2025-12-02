"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContactModal } from "@/context/ContactModalContext";
import { content } from "@/lib/data";
import { Instagram, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    const { language } = useLanguage();
    const { openContactModal } = useContactModal();
    const t = content[language].footer;

    return (
        <footer id="footer" className="bg-white">
            {/* CTA Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div 
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, #E8A5A5 0%, #F5C98E 20%, #F9E79F 40%, #A8D5BA 60%, #A5C4D4 80%, #C5B3D5 100%)"
                    }}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 drop-shadow-lg" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
                            {t.cta.heading}
                        </h2>
                        <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md" style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)" }}>
                            {t.cta.subheading}
                        </p>
                        <button
                            onClick={openContactModal}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground font-medium rounded-sm hover:bg-white/90 transition-colors"
                        >
                            {t.cta.button}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Footer Content */}
            <section className="bg-foreground text-white py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
                        {/* Left Column - Brand */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Japan Pride Journeys</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {language === "en"
                                    ? "Authentic, Safe, and Unforgettable Journeys curated for the LGBTQ+ Community."
                                    : "LGBTQ+コミュニティのための、安心で心に残る日本への旅。"}
                            </p>
                        </div>

                        {/* Middle Column - Contact */}
                        <div>
                            <h4 className="text-lg font-serif font-semibold mb-4">{t.contact.title}</h4>
                            <div className="space-y-3">
                                <a
                                    href={`mailto:${t.contact.email}`}
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span className="text-sm">{t.contact.email}</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/japanpridejourneys"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                                >
                                    <Instagram className="w-5 h-5" />
                                    <span className="text-sm">{t.contact.instagram}</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Support */}
                        <div>
                            <h4 className="text-lg font-serif font-semibold mb-4">{t.support.title}</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                                        {t.support.faq}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                                        {t.support.privacy}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                                        {t.support.terms}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-white/10 pt-8">
                        <p className="text-center text-sm text-white/40">
                            &copy; {new Date().getFullYear()} {t.credit}. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
};
