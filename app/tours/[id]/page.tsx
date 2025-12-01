"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, MapPin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TourDetailPage() {
    const params = useParams();
    const { language } = useLanguage();
    const t = content[language].tours;

    const tour = t.items.find((item) => item.id === params.id);

    if (!tour || !("fullDescription" in tour)) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-serif font-bold mb-4">
                            {language === "en" ? "Tour not found" : "ツアーが見つかりません"}
                        </h1>
                        <Link href="/" className="text-primary hover:underline">
                            {language === "en" ? "Return to home" : "ホームに戻る"}
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    // ローカルのphotoフォルダからランダムに画像を選択
    const galleryImages = getLocalGalleryImages(tour.id);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
            {/* Hero Section with Large Image */}
            <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Back Button */}
                <Link
                    href="/#tours"
                    className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-sm hover:bg-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">{language === "en" ? "Back to Tours" : "ツアー一覧に戻る"}</span>
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <div className="container mx-auto">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span className="text-lg font-medium">{tour.duration}</span>
                            </div>
                            <span className="text-white/60">•</span>
                            <span className="text-lg font-medium">{tour.price}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">
                            {tour.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                            {tour.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className={cn("text-3xl md:text-4xl font-serif mb-6 text-foreground", language === "en" ? "font-bold" : "font-semibold")}>
                                {language === "en" ? "Overview" : "概要"}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {tour.fullDescription}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={cn("text-3xl md:text-4xl font-serif mb-12 text-center text-foreground", language === "en" ? "font-bold" : "font-semibold")}
                        >
                            {language === "en" ? "Gallery" : "ギャラリー"}
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer bg-secondary/30"
                                >
                                    <Image
                                        src={image}
                                        alt={`${tour.title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            {tour.schedule && tour.schedule.length > 0 && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className={cn("text-3xl md:text-4xl font-serif mb-8 text-foreground flex items-center gap-3", language === "en" ? "font-bold" : "font-semibold")}>
                                    <Calendar className="w-8 h-8 text-primary" />
                                    {language === "en" ? "Sample Schedule" : "スケジュール例"}
                                </h2>
                                <div className="space-y-4">
                                    {tour.schedule.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex gap-6 pb-6 border-b border-border/30 last:border-0"
                                        >
                                            <div className="font-bold text-primary min-w-[120px] md:min-w-[160px] text-lg">
                                                {item.time}
                                            </div>
                                            <div className="text-muted-foreground flex-1 text-lg leading-relaxed">
                                                {item.activity}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Locations & Experiences Section */}
            {tour.locations && tour.locations.length > 0 && (
                <section className="py-16 md:py-24 bg-secondary/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-12"
                            >
                                <h2 className={cn("text-3xl md:text-4xl font-serif mb-4 text-foreground flex items-center gap-3", language === "en" ? "font-bold" : "font-semibold")}>
                                    <MapPin className="w-8 h-8 text-primary" />
                                    {language === "en" ? "Locations & Sample Experiences" : "場所と体験内容例"}
                                </h2>
                            </motion.div>

                            <div className="space-y-16">
                                {tour.locations.map((location, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                                    >
                                        {/* Image */}
                                        <div className={cn(
                                            "relative aspect-[4/3] overflow-hidden rounded-sm",
                                            index % 2 === 1 && "md:order-2"
                                        )}>
                                            <Image
                                                src={galleryImages[index % galleryImages.length] || tour.image}
                                                alt={location.name}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className={cn(index % 2 === 1 && "md:order-1")}>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-foreground">
                                                {location.name}
                                            </h3>
                                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                                {location.description}
                                            </p>
                                            {location.experiences && location.experiences.length > 0 && (
                                                <ul className="space-y-3">
                                                    {location.experiences.map((experience, expIndex) => (
                                                        <li key={expIndex} className="flex items-start gap-3">
                                                            <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                                            <span className="text-muted-foreground leading-relaxed">
                                                                {experience}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            </main>
            <Footer />
        </>
    );
}

// ローカルのphotoフォルダからランダムに画像を選択する関数
function getLocalGalleryImages(tourId: string): string[] {
    // 利用可能なローカル画像
    const tAImages = [
        "/photo/t-a/IMG_0326.JPG",
        "/photo/t-a/IMG_1365.JPG",
        "/photo/t-a/IMG_1368.JPG",
        "/photo/t-a/IMG_1814.JPG",
        "/photo/t-a/IMG_1895.JPG",
        "/photo/t-a/IMG_3705.JPG",
        "/photo/t-a/IMG_4173.JPG",
        "/photo/t-a/IMG_6210.JPG",
        "/photo/t-a/IMG_6592.JPG",
        "/photo/t-a/IMG_7177.JPG",
        "/photo/t-a/IMG_9560.JPG",
        "/photo/t-a/IMG_9564.JPG",
    ];

    const weddingImages = [
        "/photo/wedding/IMG_3069.JPG",
        "/photo/wedding/IMG_3117.JPG",
        "/photo/wedding/IMG_3118.JPG",
        "/photo/wedding/IMG_3131.JPG",
        "/photo/wedding/IMG_3146.JPG",
        "/photo/wedding/IMG_3164.JPG",
        "/photo/wedding/IMG_3166.JPG",
    ];

    // すべての画像を結合
    const allImages = [...tAImages, ...weddingImages];

    // ツアーIDに応じて画像を選択（ランダムに6枚）
    const selectedImages: string[] = [];
    const usedIndices = new Set<number>();

    // 6枚の画像をランダムに選択
    while (selectedImages.length < 6 && usedIndices.size < allImages.length) {
        const randomIndex = Math.floor(Math.random() * allImages.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selectedImages.push(allImages[randomIndex]);
        }
    }

    // 6枚に満たない場合は繰り返し使用
    while (selectedImages.length < 6) {
        const randomIndex = Math.floor(Math.random() * allImages.length);
        selectedImages.push(allImages[randomIndex]);
    }

    return selectedImages;
}

