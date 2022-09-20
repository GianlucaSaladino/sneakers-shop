import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavScrollExample from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home/Home";
import FooterComponent from "./components/Footer/FooterComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <CartProvider>
            <NavScrollExample />
            <Routes>
              <Route path="/sneakers" element={<ItemListContainer />} />
              <Route
                path="/sneakers/:tipoProducto"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <FooterComponent />
          </CartProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
