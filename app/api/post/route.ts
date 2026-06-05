import { NextResponse } from "next/server";
const posts = [
    { id: 1, title: "React Js", content: "React Js is a java script library" },
    { id: 2, title: "Next Js", content: "Next Js is a react framework" },
    { id: 3, title: "Tailwind Css", content: "Tailwind Css is a css framework" },
    { id: 4, title: "Node Js", content: "Node Js is a javascript runtime" },
    { id: 5, title: "Express Js", content: "Express Js is a node js framework" },

]


export async function GET() {
    return NextResponse.json(posts);

}