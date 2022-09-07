import "./NavBar.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar text="dark" bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <Nav.Link href="#">
            <Link
              className="logo-brand"
              style={{ color: "#000", textDecoration: "none" }}
              to="/"
            >
              GS SNEAKERS
            </Link>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-links" href="#">
              <Link
                className="product-hover"
                style={{ color: "rgba(0, 0, 0, 0.55)", textDecoration: "none" }}
                to="/products"
              >
                Sneakers
              </Link>
            </Nav.Link>
            <NavDropdown className="product-hover" title="Categories" id="basic-nav-dropdown">
              <Nav.Link className="nav-links" href="#">
                <Link
                  className="dropdown-item-hover"
                  style={{ color: "#000", textDecoration: "none" }}
                  to="/products/high"
                >
                  Jordan
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-links" href="#">
                <Link
                  className="dropdown-item-hover"
                  style={{ color: "#000", textDecoration: "none" }}
                  to="/products/low"
                >
                  Nike
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-links" href="#">
                <Link
                  className="dropdown-item-hover"
                  style={{ color: "#000", textDecoration: "none" }}
                  to="/products/low"
                >
                  Converse
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-links" href="#">
                <Link
                  className="dropdown-item-hover"
                  style={{ color: "#000", textDecoration: "none" }}
                  to="/products/low"
                >
                  Yeezy
                </Link>
              </Nav.Link>
            </NavDropdown>
          </Nav>
          <div style={{ cursor: "pointer", fontSize: "25px" }}>
            <Cart />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
