import type { Product } from "../types/types";

export const products: Product[] = [
  {
    id: 1,
    title: "iPhone 13",
    price: 999,
    description: "El último iPhone con pantalla Super Retina XDR",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_SX679_.jpg",
    category: "electronics",
    stock: 10,
  },
  {
    id: 2,
    title: "MacBook Pro",
    price: 1999,
    description: "Potente laptop para profesionales",
    image: "https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SX679_.jpg",
    category: "electronics",
    stock: 5,
  },
  {
    id: 3,
    title: "Camiseta básica",
    price: 29,
    description: "Camiseta de algodón 100% en varios colores",
    image: "https://m.media-amazon.com/images/I/61-jBuhtgZL._AC_SX679_.jpg",
    category: "clothing",
    stock: 20,
  },
  {
    id: 4,
    title: "Zapatos deportivos",
    price: 89,
    description: "Zapatos cómodos para correr o caminar",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SX679_.jpg",
    category: "clothing",
    stock: 15,
  },
  {
    id: 5,
    title: "Juego de sábanas",
    price: 49,
    description: "Juego de sábanas de algodón egipcio",
    image: "https://m.media-amazon.com/images/I/91tFw+v8XVL._AC_SX679_.jpg",
    category: "home",
    stock: 8,
  },
  {
    id: 6,
    title: "Lámpara de mesa",
    price: 39,
    description: "Lámpara moderna con luz regulable",
    image: "https://m.media-amazon.com/images/I/61-6Y1pRVeL._AC_SX679_.jpg",
    category: "home",
    stock: 12,
  },
  // ... otros productos
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === Number(id)));
    }, 500);
  });
};

export const getProductsByCategory = (
  categoryId: string
): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categoryMap: Record<string, string> = {
        "1": "electronics",
        "2": "clothing",
        "3": "home",
      };
      const category = categoryMap[categoryId];
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
