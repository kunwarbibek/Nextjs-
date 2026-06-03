interface BlogPageProps {
    params: Promise<{ slug: string }>
}

const BlogData: Record<string, { title: string, content: string }> = {
    "Nextjs": {
        title: "Nextjs Learning",
        content: "Nextjs is a React framework for building web applications."
    },
    "Reactjs": {
        title: "Reactjs Learning",
        content: "Reactjs is a JavaScript library for building user interfaces."
    },
    "Node": {
        title: "Node Learning",
        content: "Node is a JavaScript runtime for building web applications."
    }
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const blog = BlogData[slug];
    if (!blog) {
        return (
            <>
                <h1>Blog Not Found</h1>
            </>
        )
    }
    return (
        <>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </>
    )
}
