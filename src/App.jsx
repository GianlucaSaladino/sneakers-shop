import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/products" element= {<ItemListContainer />} />
          <Route path="/products/:productType" element= {<ItemListContainer />} />
          <Route path="/item/:productId" element= {<ItemDetailContainer />} />

          <Route path="*" element= {<ItemListContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
