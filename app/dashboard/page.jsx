"use client";
import { useRouter } from "next/navigation";
export default function Dashboard() {
    const router = useRouter();
    function handleClick() {
        router.push("/")
    }

    return (
        <>
            <h1>Dashboard Page</h1>
            <button onClick={handleClick}>Home Page</button>
        </>
    )
}