import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
    title: "Bibek Kunwar",
    description: "My Next.js Website",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header style={{ padding: 12, background: "#a69e9e" }}>

                    <nav style={{ display: "flex", gap: 12 }}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/dashboard">DashBoard</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/products">Products</Link>
                    </nav>
                </header>
                {children}

                <footer>Footer</footer>
            </body>
        </html>
    );
}