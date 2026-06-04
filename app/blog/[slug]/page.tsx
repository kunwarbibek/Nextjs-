import { notFound } from "next/navigation";

interface BlogPageProps {
    params: Promise<{ slug: string }>
}

// 1. Switched keys to lowercase for reliable URL matching
const BlogData: Record<string, { title: string, content: string }> = {
    "nextjs": {
        title: "Nextjs Learning",
        content: "Nextjs is a React framework for building web applications."
    },
    "reactjs": {
        title: "Reactjs Learning",
        content: "Reactjs is a JavaScript library for building user interfaces."
    },
    "node": {
        title: "Node Learning",
        content: "Node is a JavaScript runtime for building web applications."
    }
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
    const { slug } = await params;

    // 2. Convert incoming slug to lowercase to prevent case-mismatch bugs
    const normalizedSlug = slug.toLowerCase();
    const blog = BlogData[normalizedSlug];

    // 3. Recommended: Use Next.js notFound() to trigger your global error/not-found page
    if (!blog) {
        notFound();
    }

    return (
        <>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </>
    )
}