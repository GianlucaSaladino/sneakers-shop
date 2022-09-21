import "./Cart.css";
import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
      },
      items: cart.map((product) => ({
        id: product.id,
        title: product.productName,
        price: product.productPrice,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => console.log(id));
    setTimeout(() => {
      alert("Compra realizada con éxito");
      window.location.reload(false);
    }, 3000);
  };

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1>Carrito vacío</h1>
        <Link to="/">
          <button>Seguir comprando</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="totalPrice">
        <p>Total: ${totalPrice()}</p>
      </div>
      <Form style={{ padding: "0px 100px 20px 100px" }} onSubmit={sendOrder}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCellPhone">
          <Form.Control type="number" placeholder="Teléfono" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Confirmar Compra
        </Button>
      </Form>

    </>
  );
};

export default Cart;
