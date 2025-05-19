import { useState } from "react";
import type { ItemCountProps } from "../types/types";

const ItemCount = ({ stock, initial = 1, onAdd }: ItemCountProps) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center border border-gray-300 rounded-md w-min">
        <button
          onClick={decrement}
          className="px-3 py-1 text-lg font-medium text-gray-600 hover:bg-gray-100"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="px-4 py-1 text-lg">{quantity}</span>
        <button
          onClick={increment}
          className="px-3 py-1 text-lg font-medium text-gray-600 hover:bg-gray-100"
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(quantity)}
        className="w-full bg-primary hover:bg-secondary text-white py-2 px-4 rounded-md transition-colors"
        disabled={stock === 0}
      >
        {stock > 0 ? "Agregar al carrito" : "Sin stock"}
      </button>

      {stock > 0 ? (
        <p className="text-sm text-gray-500">{stock} disponibles</p>
      ) : (
        <p className="text-sm text-red-500">Sin stock</p>
      )}
    </div>
  );
};

export default ItemCount;
