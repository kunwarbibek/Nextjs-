export type Post =
    {
        slug: string,
        title: string,
        description: string,
        content: string,
    }
export const posts: Post[] = [
    {
        slug: "learn-nextjs",
        title: "Learn Next.js",
        description: "A beginner-friendly guide to building modern web applications with Next.js.",
        content: "Next.js is a React framework that helps developers create fast and scalable web applications."
    },
    {
        slug: "master-react",
        title: "Master React",
        description: "Understand the core concepts of React and component-based development.",
        content: "React allows developers to build reusable UI components and manage application state efficiently."
    },
    {
        slug: "typescript-basics",
        title: "TypeScript Basics",
        description: "Learn how TypeScript improves JavaScript with static typing.",
        content: "TypeScript adds type safety to JavaScript, making code easier to maintain and debug."
    },
    {
        slug: "nodejs-introduction",
        title: "Introduction to Node.js",
        description: "Discover how to run JavaScript on the server using Node.js.",
        content: "Node.js provides a runtime environment for building scalable backend applications."
    },
    {
        slug: "expressjs-guide",
        title: "Express.js Guide",
        description: "Build RESTful APIs quickly using the Express.js framework.",
        content: "Express simplifies server-side development by providing a minimal and flexible framework."
    },
    {
        slug: "mongodb-fundamentals",
        title: "MongoDB Fundamentals",
        description: "Learn how to store and manage data with MongoDB.",
        content: "MongoDB is a NoSQL database that stores data in flexible JSON-like documents."
    },
    {
        slug: "tailwindcss-styling",
        title: "Tailwind CSS Styling",
        description: "Create responsive designs rapidly with utility-first CSS classes.",
        content: "Tailwind CSS speeds up frontend development by providing prebuilt utility classes."
    },
    {
        slug: "seo-for-websites",
        title: "SEO for Websites",
        description: "Improve your website's visibility in search engine results.",
        content: "SEO techniques help websites rank higher and attract more organic traffic."
    },
    {
        slug: "git-and-github",
        title: "Git and GitHub",
        description: "Learn version control and collaboration with Git and GitHub.",
        content: "Git tracks code changes while GitHub enables developers to collaborate on projects."
    },
    {
        slug: "deploy-nextjs-app",
        title: "Deploy a Next.js App",
        description: "Learn the steps required to deploy a Next.js application.",
        content: "Deploying a Next.js app on platforms like Vercel makes it accessible to users worldwide."
    }
];

export function getPosts(): Post[] {
    return posts;
}
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
    return posts.find((post) => post.slug === slug);
}




