"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const { language } = useLanguage();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const translations = {
        en: {
            title: "Contact Form",
            name: "Name",
            namePlaceholder: "John Smith",
            email: "Email Address",
            emailPlaceholder: "example@email.com",
            category: "Inquiry Type",
            categoryPlaceholder: "Please select",
            categories: [
                { value: "general", label: "General Inquiry" },
                { value: "tour", label: "Tour Inquiry" },
                { value: "wedding", label: "Wedding Inquiry" },
                { value: "others", label: "Others" },
            ],
            message: "Message",
            messagePlaceholder: "Please share your questions or requests...",
            cancel: "Cancel",
            submit: "Send",
            required: "*",
            successTitle: "Thank you!",
            successMessage: "Your message has been sent successfully. We will get back to you soon.",
            close: "Close",
        },
        jp: {
            title: "お問い合わせフォーム",
            name: "お名前",
            namePlaceholder: "田中太郎",
            email: "メールアドレス",
            emailPlaceholder: "example@email.com",
            category: "お問い合わせ種別",
            categoryPlaceholder: "選択してください",
            categories: [
                { value: "general", label: "一般的なお問い合わせ" },
                { value: "tour", label: "ツアーについて" },
                { value: "wedding", label: "ウェディングについて" },
                { value: "others", label: "その他" },
            ],
            message: "お問い合わせ内容",
            messagePlaceholder: "ご質問やご要望をお聞かせください...",
            cancel: "キャンセル",
            submit: "送信する",
            required: "*",
            successTitle: "ありがとうございます！",
            successMessage: "メッセージが送信されました。近日中にご連絡いたします。",
            close: "閉じる",
        },
    };

    const t = translations[language];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Dummy submission - will be replaced with resend.com later
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleClose = () => {
        setFormData({ name: "", email: "", category: "", message: "" });
        setIsSubmitted(false);
        onClose();
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
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[201] flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-border/30"
                                style={{
                                    background: "linear-gradient(to right, #E8A5A5 0%, #F5C98E 20%, #F9E79F 40%, #A8D5BA 60%, #A5C4D4 80%, #C5B3D5 100%)"
                                }}
                            >
                                <h2 className="text-xl font-serif font-bold text-white drop-shadow-md">
                                    {t.title}
                                </h2>
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                            style={{
                                                background: "linear-gradient(to right, #A8D5BA, #A5C4D4)"
                                            }}
                                        >
                                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                                            {t.successTitle}
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            {t.successMessage}
                                        </p>
                                        <button
                                            onClick={handleClose}
                                            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                                        >
                                            {t.close}
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                {t.name} <span className="text-red-500">{t.required}</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder={t.namePlaceholder}
                                                required
                                                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                {t.email} <span className="text-red-500">{t.required}</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder={t.emailPlaceholder}
                                                required
                                                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                            />
                                        </div>

                                        {/* Category Selection */}
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                {t.category}
                                            </label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white"
                                            >
                                                <option value="">{t.categoryPlaceholder}</option>
                                                {t.categories.map((cat) => (
                                                    <option key={cat.value} value={cat.value}>
                                                        {cat.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                {t.message}
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder={t.messagePlaceholder}
                                                rows={4}
                                                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                                            />
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-3 pt-2">
                                            <button
                                                type="button"
                                                onClick={handleClose}
                                                className="flex-1 px-6 py-3 border border-border text-foreground rounded-md hover:bg-secondary/50 transition-colors font-medium"
                                            >
                                                {t.cancel}
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex-1 px-6 py-3 text-white rounded-md transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-70"
                                                style={{
                                                    background: "linear-gradient(to right, #A8D5BA, #A5C4D4)"
                                                }}
                                            >
                                                {isSubmitting ? (
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        {t.submit}
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

