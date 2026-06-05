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