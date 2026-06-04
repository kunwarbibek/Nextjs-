import { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";


const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap"
});


export const metadata: Metadata = {
    title: {
        default: "Bibek Kunwar",
        template: "%s | Bibek Kunwar",
    },
    description: "This is my Next.js Project",
    openGraph: {
        siteName: "My Portfolio",
        title: "Bibek Kunwar",
        description: "This is my Next.js Project",
        type: "website",
    },
};
export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header style={{ padding: 12, background: "#a69e9e" }}>

                    <nav style={{ display: "flex", gap: 12 }}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/dashboard">DashBoard</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/posts">Posts</Link>
                    </nav>
                </header>
                {children}

                <footer>Footer</footer>
            </body>
        </html>
    );
}