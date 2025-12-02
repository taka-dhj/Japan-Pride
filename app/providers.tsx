"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ContactModalProvider } from "@/context/ContactModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <ContactModalProvider>
                {children}
            </ContactModalProvider>
        </LanguageProvider>
    );
}
