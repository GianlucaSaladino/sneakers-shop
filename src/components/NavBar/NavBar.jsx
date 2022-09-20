import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavScrollExample() {
  return (
    <Navbar text="dark" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ fontWeight: "bold" }}>
          <Nav.Link>
            <Link style={{ color: "#000", textDecoration: "none" }} to="/">
              <img
                style={{ height: "2.5rem", width: "2.5rem" }}
                src="https://www.vectorkhazana.com/assets/images/products/Sneaker.png"
                alt=""
              />{" "}
              GS SNEAKERS
            </Link>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/sneakers"
              >
                Sneakers
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/sneakers/converse"
              >
                Converse
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/sneakers/jordan"
              >
                Jordan
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/sneakers/nike"
              >
                Nike
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/sneakers/yeezy"
              >
                Yeezy
              </Link>
            </Nav.Link>
          </Nav>
          <div style={{ fontSize: "25px" }}>
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
