import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import type { ItemDetailProps } from "../types/types";

const ItemDetail = ({ product }: ItemDetailProps) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useCart();

  const handleAdd = (count: number) => {
    setQuantity(count);
    addItem(product, count);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mb-8 lg:mb-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-h-96 object-contain rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-gray-700 mb-6">${product.price}</p>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Descripción</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            {quantity === 0 ? (
              <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
            ) : (
              <div className="space-y-4">
                <Link
                  to="/cart"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
                >
                  Ir al carrito
                </Link>
                <Link
                  to="/"
                  className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Seguir comprando
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
