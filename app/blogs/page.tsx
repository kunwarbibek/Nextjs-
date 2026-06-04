import Link from "next/link";
import { getPosts } from "@/lib/post";

export default function BlogsPage() {
    const posts = getPosts();

    return (
        <div>
            <h1>Blog</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blogs/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}