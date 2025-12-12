"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users, Camera } from "lucide-react";

// パステルカラー（Featuresセクションと統一）
const tagColors = [
    "bg-rose-100 text-rose-700",
    "bg-amber-100 text-amber-700",
    "bg-emerald-100 text-emerald-700",
    "bg-sky-100 text-sky-700",
    "bg-violet-100 text-violet-700",
];

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
    tags: string[];
}

interface TeamCardProps {
    member: TeamMember;
    index: number;
    accentColor: string;
}

const TeamCard = ({ member, index, accentColor }: TeamCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
            {/* 画像 */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* オーバーレイグラデーション */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* 名前とロール（画像上） */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-1">{member.name}</h3>
                    <p className={`text-sm font-medium ${accentColor}`}>{member.role}</p>
                </div>
            </div>

            {/* コンテンツ */}
            <div className="p-5">
                {/* プロフィール */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2">
                    {member.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[tagIndex % tagColors.length]}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

interface TeamSectionProps {
    title: string;
    subtitle: string;
    members: TeamMember[];
    icon: React.ReactNode;
    accentColor: string;
    colorIndex: number;
}

const TeamSection = ({ title, subtitle, members, icon, accentColor, colorIndex }: TeamSectionProps) => {
    return (
        <div className="mb-20 last:mb-0">
            {/* セクションヘッダー */}
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className={`p-2 rounded-full ${accentColor}`}>
                    {icon}
                </span>
            </div>
            <SectionHeader
                subtitle={subtitle}
                title={title}
                alignment="center"
                colorIndex={colorIndex}
            />

            {/* カードグリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <TeamCard
                        key={member.name}
                        member={member}
                        index={index}
                        accentColor={accentColor.replace('bg-', 'text-').replace('/20', '')}
                    />
                ))}
            </div>
        </div>
    );
};

export const Team = () => {
    const { language } = useLanguage();
    const t = (content[language] as { team?: typeof content.en.team }).team;

    if (!t) {
        return null;
    }

    return (
        <section id="team" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                {/* ガイドセクション */}
                <TeamSection
                    title={t.guides.title}
                    subtitle={t.guides.subtitle}
                    members={t.guides.members as TeamMember[]}
                    icon={<Users className="w-5 h-5 text-rose-600" />}
                    accentColor="bg-rose-100"
                    colorIndex={2}
                />

                {/* フォトグラファーセクション */}
                <TeamSection
                    title={t.photographers.title}
                    subtitle={t.photographers.subtitle}
                    members={t.photographers.members as TeamMember[]}
                    icon={<Camera className="w-5 h-5 text-sky-600" />}
                    accentColor="bg-sky-100"
                    colorIndex={3}
                />
            </div>
        </section>
    );
};



