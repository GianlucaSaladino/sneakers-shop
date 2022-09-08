import "./CatalogContainer.css";
import { Link } from "react-router-dom";

const CatalogContainer = () => {
  return (
    <div className="image-grid">
      <Link
        className="image-grid-col-2 image-grid-row-2 grid-container"
        to="/products"
      >
        <img
          id="image"
          src="https://www.lillylab.it/wp-content/uploads/2021/04/Jordan-Chicaco-01.jpg"
          alt=""
        />
        <h2 className="text-above">Jordan</h2>
      </Link>
      <Link className="grid-container" to="/products">
        <img
          src="https://images.asos-media.com/products/zapatillas-en-blanco-y-negro-blazer-mid-77-de-nike/14735083-3?$n_640w$&wid=513&fit=constrain"
          alt=""
        />
        <h2 className="text-above">Nike Blazer</h2>
      </Link>
      <Link className="grid-container" to="/products">
        <img
          src="https://media.revistagq.com/photos/624afabbe30884927e59cbc1/1:1/w_1346,h_1346,c_limit/zapatillas-converse-chuck-70-hi-stussy.jpg"
          alt=""
        />
        <h2 className="text-above">Converse</h2>
      </Link>
      <Link className="image-grid-col-2 grid-container" to="/products">
        <img
          src="https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHllZXp5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <h2 className="text-above">Yeezy</h2>
      </Link>
    </div>
  );
};

export default CatalogContainer;
