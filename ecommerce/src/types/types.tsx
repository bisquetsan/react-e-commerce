// Tipos para productos
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

// Tipo para items en el carrito (extiende Product con quantity)
export interface CartItem extends Product {
  quantity: number;
}

// Tipo para el contexto del carrito
export interface CartContextType {
  cart: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  totalQuantity: number;
  total: number;
}

// Tipo para las props de ItemCount
export interface ItemCountProps {
  stock: number;
  initial?: number;
  onAdd: (quantity: number) => void;
}

// Tipo para las props de ItemDetail
export interface ItemDetailProps {
  product: Product;
}

// Tipo para las props de ItemList
export interface ItemListProps {
  products: Product[];
}

// Tipo para las props de ItemCart
export interface ItemCartProps {
  item: CartItem;
}
