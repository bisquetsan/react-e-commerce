import { createContext, useContext, useState, useEffect } from "react";

import type { ReactNode } from "react";
import type { CartContextType, CartItem, Product } from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);

    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const addItem = (product: Product, quantity: number) => {
    if (isInCart(product.id)) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItem = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId: number) => {
    return cart.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
