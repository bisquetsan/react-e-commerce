import { useEffect, useState } from "react";
import CategoryHero from "../../components/categories/CategoryHero";
import ProductGrid from "../../components/categories/ProductGrid";
import SearchAndFilter from "../../components/categories/SearchAndFilter";
import { getProductsByCategory } from "../../data/products";
import type { Product } from "../../types/types";

const Electronics = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductsByCategory("1")
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHero
        title="Electrónica"
        description="Los últimos dispositivos tecnológicos al mejor precio"
        imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Productos de electrónica
          </h2>
          <p className="text-gray-600 mt-2">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "producto" : "productos"}{" "}
            disponible{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <SearchAndFilter
          products={allProducts}
          onFilter={setFilteredProducts}
        />

        <ProductGrid
          products={filteredProducts}
          loading={loading}
          noResultsMessage={
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">
                No se encontraron productos
              </h3>
              <p className="mt-2 text-gray-600">
                Intenta con otros términos de búsqueda
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Electronics;
