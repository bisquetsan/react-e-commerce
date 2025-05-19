import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import type { ItemCartProps } from "../types/types";

const ItemCart = ({ item }: ItemCartProps) => {
  const { removeItem } = useCart();

  return (
    <li className="px-4 py-6 sm:px-6">
      <div className="flex items-center">
        <div className="min-w-0 flex-1 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-20 w-20 object-contain"
              src={item.image}
              alt={item.title}
            />
          </div>

          <div className="min-w-0 flex-1 px-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 truncate">
                <Link to={`/item/${item.id}`}>{item.title}</Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Cantidad: {item.quantity}
              </p>
            </div>
          </div>
        </div>

        <div className="ml-4 flex flex-col items-end">
          <p className="text-lg font-medium text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={() => removeItem(item.id)}
            className="mt-2 text-sm text-red-600 hover:text-red-800"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default ItemCart;
