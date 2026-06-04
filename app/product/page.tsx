import Link from "next/link";
import { getProducts, products } from "@/lib/products";

type Products = {
    searchParams: Promise<{
        category?: string;
        page?: string;
    }>
}

const PAGE_SIZE = 2;

export default async function ProductsPage({ searchParams }: Products) {
    const { category, page } = await searchParams;
    let filtered = products;

    if (category) {
        filtered = filtered.filter((p) => p.category === category);
    }

    const currentPage = Number(page || "1");
    // Changed "startIndex" to match the variable used in the "Next" button condition below
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginated = filtered.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div>
            <div style={{ display: 'flex', padding: '10px', gap: '10px' }}>
                <h1>Products</h1>
                {/* Fixed path consistency: Changed './product' to '/products' to match your pagination links */}
                <Link href="/product">All</Link>
                <Link href="/product?category=web">Web</Link>
                <Link href="/product?category=mobile">Mobile</Link>
                <Link href="/product?category=AI">AI</Link>
                <Link href="/product?category=backend">Backend</Link>
            </div>

            <ul>
                {paginated.map((p) => (
                    <li key={p.id}>
                        <h4>{p.name}</h4>
                        <p>{p.category}</p>
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                {currentPage > 1 && (
                    <Link href={`/product?category=${category || ""}&page=${currentPage - 1}`}>
                        Previous
                    </Link>
                )}
                {/* FIXED: Changed 'start' to 'startIndex' */}
                {startIndex + PAGE_SIZE < filtered.length && (
                    <Link href={`/product?category=${category || ""}&page=${currentPage + 1}`}>
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
}