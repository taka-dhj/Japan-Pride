import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailClient } from "./BlogDetailClient";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-data";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title.en} | Japan Pride Journeys`,
        description: post.excerpt.en,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogDetailClient post={post} />;
}



