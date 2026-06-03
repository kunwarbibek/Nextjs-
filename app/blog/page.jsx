import Link from "next/link";
import { title } from "node:process";

const blog = [
    { slug: "Nextjs", title: "Nextjs Learning." },
    { slug: "Reactjs", title: "Reactjs Learning." },
    { slug: "Node", title: "Node Learning." },
]

export default function Blog() {
    return (
        <>
            <h1>Blog Page</h1>
            {blog.map((blog) => (
                <Link href={`blog/${blog.slug}`}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </Link>
            ))}
        </>
    )
}