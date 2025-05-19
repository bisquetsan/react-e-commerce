import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import ItemCart from "../components/ItemCart";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useCart();

  if (totalQuantity === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tu carrito está vacío
        </h2>
        <p className="text-gray-600 mb-6">Agrega productos para continuar</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Carrito de compras
      </h2>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <ul className="divide-y divide-gray-200">
          {cart.map((item) => (
            <ItemCart key={item.id} item={item} />
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-semibold text-gray-900">
          Total: ${total.toFixed(2)}
        </h3>
        <button
          onClick={clearCart}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Vaciar carrito
        </button>
      </div>

      <div className="flex justify-end">
        <Link
          to="/checkout"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
        >
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
