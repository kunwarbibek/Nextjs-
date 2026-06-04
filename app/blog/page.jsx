import Link from "next/link";

const blogs = [
    { slug: "Nextjs", title: "Nextjs Learning." },
    { slug: "Reactjs", title: "Reactjs Learning." },
    { slug: "Node", title: "Node Learning." },
];

export default function Blog() {
    return (
        <>
            <h1>Blog Page</h1>
            {blogs.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`}>
                    <h2>{item.title}</h2>
                </Link>
            ))}
        </>
    );
}