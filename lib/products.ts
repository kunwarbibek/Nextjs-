export type Product = {
    id: number,
    name: string,
    category: string,
}
export const products: Product[] = [{ id: 1, name: "Reactjs", category: "web" },
{ id: 2, name: "Flutter", category: "mobile" },
{ id: 3, name: "Python", category: "AI" },
{ id: 4, name: "Java", category: "backend" },
{ id: 5, name: "Angular", category: "web" },
{ id: 6, name: "React Native", category: "mobile" },
{ id: 7, name: "TensorFlow", category: "AI" },
{ id: 8, name: "Nodejs", category: "backend" },
{ id: 9, name: "Vuejs", category: "web" },
{ id: 10, name: "React Native", category: "mobile" },
{ id: 11, name: "TensorFlow", category: "AI" },
{ id: 12, name: "Nodejs", category: "backend" }
];
export function getProducts() {
    return products;
}
export function getProductById(id: number) {
    return products.find((product) => product.id === id);
}

