import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const { totalQuantity } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Mi Tienda
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/electronics"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Electrónica
            </Link>
            <Link
              to="/clothing"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Ropa
            </Link>
            <Link
              to="/home-goods"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Hogar
            </Link>
          </div>

          <div className="flex items-center">
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-primary"
            >
              <CartWidget quantity={totalQuantity} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
