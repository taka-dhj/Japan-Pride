import React from "react";
import { content } from "@/lib/data";
import { TourDetailClient } from "./TourDetailClient";

// 静的生成用のパラメータを生成
export async function generateStaticParams() {
    // すべてのツアーIDを返す（英語と日本語で同じIDを使用）
    const tours = content.en.tours.items;
    return tours.map((tour) => ({
        id: tour.id,
    }));
}

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // デバッグ用: 開発モードでのみコンソールに出力
    if (process.env.NODE_ENV === 'development') {
        console.log('Tour ID:', id);
    }
    return <TourDetailClient tourId={id} />;
}

