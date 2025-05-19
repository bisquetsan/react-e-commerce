import { Link } from "react-router";
import type { Product } from "../../types/types";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  noResultsMessage?: React.ReactNode;
}

const ProductGrid = ({
  products,
  loading,
  noResultsMessage,
}: ProductGridProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      noResultsMessage || (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No hay productos disponibles en esta categoría
          </p>
        </div>
      )
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <Link to={`/item/${product.id}`}>
            <div className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {product.title}
                </h3>
                <p className="mt-2 text-gray-600">${product.price}</p>
                {product.stock > 0 ? (
                  <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    En stock
                  </span>
                ) : (
                  <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
                    Agotado
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
