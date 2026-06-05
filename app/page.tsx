// export default async function Posts() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         // cache: 'no-store' // to disable caching and always fetch fresh da
//     })
//     const posts = await res.json()

//     return (
//         <div style={{ padding: 20 }}>
//             <h1>Posts</h1>
//             {/* <ul>
//                 {posts.map((post: any) => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul> */}
//         </div>
//     )
// }
// for get method 
/*
export default async function HomePage() {
    const res = await fetch("http://localhost:3000/api/post");
    const posts = await res.json();
    console.log(posts);

    return (
        <div className="">
            <h1>Post from get Api</h1>
            <ul>
{posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
    */

"use client";

import { useState, useEffect } from "react";

type Post = {
    id: number;
    title: string;
    content: string;
};

export default function HomePage() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const getPost = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/post");
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        }
    };

    async function createPost() {
        if (!title.trim() || !content.trim()) return;
        try {
            await fetch("http://localhost:3000/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content,
                }),
            });


            setTitle("");
            setContent("");


            getPost();
        } catch (error) {
            console.error("Failed to create post:", error);
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Posts Form</h1>

            <div style={{ margin: "20px 0" }}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", padding: "5px" }}
                />
                <input
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", padding: "5px" }}
                />
                <div style={{ marginTop: 10 }}>
                    <button onClick={createPost}>Create Post</button>
                </div>
            </div>

            <hr />


            <h2>All Posts</h2>
            <ul>
                {posts.map((p) => (
                    <li key={p.id}>
                        <strong>{p.title}</strong>
                        <p>{p.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}