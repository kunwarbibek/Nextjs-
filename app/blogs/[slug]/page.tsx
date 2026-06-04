import { getPostBySlug } from "@/lib/post";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

// 1. NAMED EXPORT: Next.js looks for this exact name for SEO/Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: post.title,
        description: post.description,
    };
}

// 2. DEFAULT EXPORT: Next.js looks for this to render the actual HTML/UI
export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return <div className="p-6">Post not found</div>;
    }

    return (
        <article className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="prose">
                {/* Render your post content here */}
                {post.content}
            </div>
        </article>
    );
}