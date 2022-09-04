import "./NavBar.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-title">
          GS Sneakers
        </a>
        <ul>
          <li>
            <Link to="/" className="links">Home</Link>
            {/* <a href="/" className="links">Home</a> */}
          </li>
          <li>
            <a href="/products" className="links">Products</a>
          </li>
          <li>
            <a href="/contact" className="links">Contact</a>
          </li>
        </ul>
        <Cart />
      </nav>
    </>
  );
};

export default NavBar;
