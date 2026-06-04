import Link from "next/link";
import Counter from "./components/Counter";

export default async function Home() {
    // Fetching data on the server
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return (
        <div>
            <h1>Server Components</h1>
            <Link href="/server-client-demo">Go to Server Client Demo</Link>

            {/* Un-comment this whenever you want to display the server data
            <ul>
                {data.map((item: any) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul> 
            */}

            {/* Counter works here as long as "use client" is at the top of Counter.tsx */}
            <Counter />
        </div>
    );
}