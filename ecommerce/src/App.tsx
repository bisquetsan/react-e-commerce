import { BrowserRouter as Router, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Electronics from "./pages/categories/Electronics";
import HomeGoods from "./pages/categories/HomeGoods";
import Clothing from "./pages/categories/Clothing";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/electronics" element={<Electronics />} />
          <Route path="/home-goods" element={<HomeGoods />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
