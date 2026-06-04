interface Post {
    id: string,
    title: string,
    body: string,
}
export default async function Home() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });

    const posts: Post[] = await res.json()

    return (
        <div className="">
            <h1> Posts Fetched by server  </h1>
            {posts.slice(0, 3).map((post) => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}