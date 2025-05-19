import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../data/products";
import type { Product } from "../types/types";

const ItemListContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = id ? getProductsByCategory(id) : getProducts();

    fetchProducts
      .then((response) => setProducts(response))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen py-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-8 px-4 sm:px-6 lg:px-8">
            {id ? `Categoría: ${getCategoryName(id)}` : "Todos los productos"}
          </h1>
          <ItemList products={products} />
        </>
      )}
    </div>
  );
};

const getCategoryName = (id: string): string => {
  const categories: Record<string, string> = {
    "1": "Electrónica",
    "2": "Ropa",
    "3": "Hogar",
  };
  return categories[id] || "Categoría";
};

export default ItemListContainer;
