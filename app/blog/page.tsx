import { Metadata } from "next";
import { Suspense } from "react";
import { BlogListClient } from "./BlogListClient";
import { blogPosts, getAllTags } from "@/lib/blog-data";

export const metadata: Metadata = {
    title: "Blog | Japan Pride Journeys",
    description: "Stories, guides, and updates from Japan Pride Journeys",
};

function BlogLoading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-lg text-muted-foreground">
                Loading...
            </div>
        </div>
    );
}

export default function BlogPage() {
    const allTags = getAllTags();

    return (
        <Suspense fallback={<BlogLoading />}>
            <BlogListClient allPosts={blogPosts} allTags={allTags} />
        </Suspense>
    );
}





