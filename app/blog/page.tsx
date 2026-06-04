import Link from "next/link";
import type { Metadata } from "next";

// Fake DB function
async function getPostdata(slug: string) {
  return {
    title: `Post about ${slug}`,
    description: `Post description about ${slug}`,
  };
}

// Props
type Props = {
  params: {
    slug: string;
  };
};

// Dynamic Metadata (ONLY ONE allowed)
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = params;

  const postData = await getPostdata(slug);

  return {
    title: postData.title,
    description: postData.description,
  };
}

// Blog list
const blogs = [
  { slug: "Nextjs", title: "Nextjs Learning." },
  { slug: "Reactjs", title: "Reactjs Learning." },
  { slug: "Node", title: "Node Learning." },
];

export default function Blog() {
  return (
    <>
      <h1>Blog Page</h1>

      {blogs.map((item) => (
        <Link key={item.slug} href={`/blog/${item.slug}`}>
          <h2>{item.title}</h2>
        </Link>
      ))}
    </>
  );
}