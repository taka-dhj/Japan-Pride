"use client";

import React from "react";

// Pride colors for decorative elements
const PRIDE_COLORS = [
    "#E8A5A5", // Soft red
    "#F5C98E", // Soft orange  
    "#F9E79F", // Soft yellow
    "#A8D5BA", // Soft green
    "#A5C4D4", // Soft blue
    "#C5B3D5", // Soft violet
];

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * H2 見出し - 上下レインボーライン（上は短め）
 * 記事の主要セクションに使用
 */
export const ArticleH2 = ({ children, className = "" }: HeadingProps) => (
    <div className={`mt-12 mb-6 ${className}`}>
        {/* Top rainbow line - shorter */}
        <div 
            className="h-[2px] w-24 mb-3"
            style={{
                background: `linear-gradient(to right, ${PRIDE_COLORS.join(', ')})`
            }}
        />
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground py-1">
            {children}
        </h2>
        {/* Bottom rainbow line - full width */}
        <div 
            className="h-[2px] w-full mt-3"
            style={{
                background: `linear-gradient(to right, ${PRIDE_COLORS.join(', ')})`
            }}
        />
    </div>
);

/**
 * H3 見出し - 細いレインボーライン（下線のみ）
 * サブセクションに使用
 */
export const ArticleH3 = ({ children, className = "" }: HeadingProps) => (
    <div className={`mt-10 mb-4 ${className}`}>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground pb-2 border-b-2"
            style={{
                borderImage: `linear-gradient(to right, ${PRIDE_COLORS.join(', ')}) 1`
            }}
        >
            {children}
        </h3>
    </div>
);

/**
 * H4 見出し - シンプルなスタイル（プライマリカラーのアクセント）
 * 細分化されたセクションに使用
 */
export const ArticleH4 = ({ children, className = "" }: HeadingProps) => (
    <h4 className={`mt-6 mb-3 text-lg md:text-xl font-serif font-bold text-foreground flex items-center gap-2 ${className}`}>
        <span 
            className="w-1 h-5 rounded-full"
            style={{
                background: `linear-gradient(to bottom, ${PRIDE_COLORS[0]}, ${PRIDE_COLORS[5]})`
            }}
        />
        {children}
    </h4>
);

/**
 * ArticleHeadingsのエクスポート
 */
export { PRIDE_COLORS };




