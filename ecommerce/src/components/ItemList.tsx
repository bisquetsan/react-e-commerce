import { Link } from "react-router";
import type { ItemListProps } from "../types/types";

const ItemList = ({ products }: ItemListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
