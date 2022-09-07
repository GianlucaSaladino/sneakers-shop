import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterComponent from "./components/Footer/FooterComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/products" element={<ItemListContainer />} />
          <Route
            path="/products/:productBrand"
            element={<ItemListContainer />}
          />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />

          <Route path="*" element={<Home />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
