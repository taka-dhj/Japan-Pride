"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Check, Calendar, ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TourModalProps {
    tourId: string | null;
    isOpen: boolean;
    onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tourId, isOpen, onClose }) => {
    const { language } = useLanguage();
    const t = content[language].tours;

    const tour = tourId ? t.items.find((item) => item.id === tourId) : null;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!tour || !("fullDescription" in tour) || !("schedule" in tour)) {
        return null;
    }

    const handleInquire = () => {
        const subject = encodeURIComponent(
            language === "en"
                ? `Inquiry about ${tour.title}`
                : `${tour.title}についてのお問い合わせ`
        );
        const body = encodeURIComponent(
            language === "en"
                ? `I'm interested in learning more about the ${tour.title} tour.\n\nDuration: ${tour.duration}\nPrice: ${tour.price}\n\nPlease provide more information.`
                : `${tour.title}について詳しく知りたいです。\n\n期間: ${tour.duration}\n料金: ${tour.price}\n\n詳細情報をお願いします。`
        );
        window.location.href = `mailto:info@japanpridejourneys.com?subject=${subject}&body=${body}`;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className={cn(
                                "bg-white rounded-sm shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto",
                                "flex flex-col"
                            )}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header with Image */}
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
                                >
                                    <X className="w-5 h-5 text-foreground" />
                                </button>

                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-medium">{tour.duration}</span>
                                        <span className="text-white/60">•</span>
                                        <span className="text-sm font-medium">{tour.price}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold">
                                        {tour.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 space-y-8">
                                {/* 1. 概要 */}
                                <div>
                                    <h3 className={cn("text-xl font-serif mb-4 text-foreground", language === "en" ? "font-bold" : "font-semibold")}>
                                        {language === "en" ? "Overview" : "概要"}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {tour.fullDescription}
                                    </p>
                                </div>

                                {/* 2. スケジュール例 */}
                                {tour.schedule && tour.schedule.length > 0 && (
                                    <div>
                                        <h3 className={cn("text-xl font-serif mb-4 text-foreground flex items-center gap-2", language === "en" ? "font-bold" : "font-semibold")}>
                                            <Calendar className="w-5 h-5" />
                                            {language === "en" ? "Sample Schedule" : "スケジュール例"}
                                        </h3>
                                        <div className="space-y-3">
                                            {tour.schedule.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-4 pb-3 border-b border-border/30 last:border-0"
                                                >
                                                    <div className="font-medium text-primary min-w-[100px] md:min-w-[140px] text-sm">
                                                        {item.time}
                                                    </div>
                                                    <div className="text-muted-foreground flex-1 text-sm leading-relaxed">
                                                        {item.activity}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* 3. 場所と体験内容例 */}
                                {tour.locations && tour.locations.length > 0 && (
                                    <div>
                                        <h3 className={cn("text-xl font-serif mb-6 text-foreground", language === "en" ? "font-bold" : "font-semibold")}>
                                            {language === "en" ? "Locations & Sample Experiences" : "場所と体験内容例"}
                                        </h3>
                                        <div className="space-y-6">
                                            {tour.locations.map((location, index) => (
                                                <div
                                                    key={index}
                                                    className="pb-6 border-b border-border/30 last:border-0 last:pb-0"
                                                >
                                                    <h4 className="text-lg font-serif font-semibold mb-2 text-foreground">
                                                        {location.name}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                                        {location.description}
                                                    </p>
                                                    {location.experiences && location.experiences.length > 0 && (
                                                        <ul className="space-y-2">
                                                            {location.experiences.map((experience, expIndex) => (
                                                                <li key={expIndex} className="flex items-start gap-2">
                                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                                    <span className="text-sm text-muted-foreground leading-relaxed">
                                                                        {experience}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* 4. お問い合わせ */}
                                <div className="pt-6 border-t border-border">
                                    <h3 className={cn("text-xl font-serif mb-4 text-foreground", language === "en" ? "font-bold" : "font-semibold")}>
                                        {language === "en" ? "Inquiry" : "お問い合わせ"}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                        {language === "en"
                                            ? "For more information about this tour or to make a reservation, please contact us."
                                            : "このツアーについての詳細情報やご予約については、お気軽にお問い合わせください。"}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={handleInquire}
                                            className="flex-1 px-6 py-3 bg-foreground text-white font-medium rounded-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Mail className="w-4 h-4" />
                                            {language === "en" ? "Contact Us" : "お問い合わせ"}
                                        </button>
                                        <button
                                            onClick={handleInquire}
                                            className="flex-1 px-6 py-3 border border-foreground text-foreground font-medium rounded-sm hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2"
                                        >
                                            {language === "en" ? "Book This Tour" : "このツアーを予約"}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

