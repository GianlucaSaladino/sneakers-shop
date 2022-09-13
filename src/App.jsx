import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterComponent from "./components/Footer/FooterComponent";
import CartProvider from "./components/context/CartContext";

function App() {
  return (
    <Router>
      <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/sneakers" element={<ItemListContainer />} />
          <Route
            path="/sneakers/:productBrand"
            element={<ItemListContainer />}
          />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Home />} />
        </Routes>
        <FooterComponent />
    </CartProvider>
      </div>
    </Router>
  );
}

export default App;
