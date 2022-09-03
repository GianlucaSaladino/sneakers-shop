import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetail />
    </div>
  );
}

export default App;
