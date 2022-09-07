import "./NavBar.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          GS Sneakers
        </Link>

        <ul>
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/products" className="links">
            Products
          </Link>
          <Link to="/products/high" className="links">
            High
          </Link>
          <Link to="/products/low" className="links">
            Low
          </Link>
        </ul>
        <Cart />
      </nav>
    </>
  );
};

export default NavBar;
