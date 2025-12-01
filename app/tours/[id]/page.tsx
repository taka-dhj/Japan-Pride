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

export default function TourDetailPage({ params }: { params: { id: string } }) {
    return <TourDetailClient tourId={params.id} />;
}

