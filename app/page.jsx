import Image from "next/image";

export default function Home() {
    return (
        <main style={{ padding: "40px" }}>
            <h1>Home Page</h1>

            <Image
                src="/bibek.jpeg"
                alt="profile image"
                width={200}
                height={200}
            />
        </main>
    );
}