import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HomePage/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/context/CartContext";
import Cart from "./components/Cart/Cart";
import FooterComponent from "./components/Footer/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div>
            <CartProvider>
              <Navbar />
              <Routes>
                <Route path="/sneakers" element={<ItemListContainer />} />
                <Route path="/:tipoProducto" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Home />} />
              </Routes>
              <FooterComponent />
            </CartProvider>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
