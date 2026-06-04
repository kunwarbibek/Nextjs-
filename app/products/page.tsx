import Link from "next/link";
import CurrentFilter from "./CurrentFilter";

interface ProductsPropsPage {
    // searchParams is a Promise in Next.js 15+
    searchParams: Promise<{
        category?: string;
        sort?: string;
    }>;
}

// Fixed spelling to "category" and matched values with the link parameters
const products = [
    { id: 1, name: "Reactjs", category: "react" },
    { id: 2, name: "Nodejs", category: "node" },
    { id: 3, name: "Express", category: "express" },
    { id: 4, name: "MongoDB", category: "mongodb" },
];

export default async function ProductsPage({ searchParams }: ProductsPropsPage) {
    // Await searchParams for modern Next.js versions
    const { category, sort } = await searchParams;

    let filtered = [...products];

    // 1. Handle filtering
    if (category) {
        filtered = filtered.filter((product) => product.category === category);
    }

    // 2. Handle sorting (Mutate the filtered array, not the original products array)
    if (sort === "asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div>
            <div style={{ display: "flex", gap: 12 }}>
                {/* To combine filters, append existing parameters manually or via URLSearchParams */}
                <Link href="/products">All</Link>
                <Link href={`/products?category=react${sort ? `&sort=${sort}` : ''}`}>React</Link>
                <Link href={`/products?category=node${sort ? `&sort=${sort}` : ''}`}>Node</Link>

                <hr style={{ margin: '0 8px' }} />

                {/* Preserve the category when clicking sort */}
                <Link href={`/products?sort=asc${category ? `&category=${category}` : ''}`}>
                    Sort A-Z
                </Link>
            </div>

            <p>
                Current Filter: <b>{category || "All"}</b> | Sort: <b>{sort || "Default"}</b>
            </p>

            <ul>
                {filtered.map(product => (
                    <li key={product.id}>{product.name} - {product.category}</li>
                ))}
            </ul>

            <CurrentFilter />
        </div>
    );
}