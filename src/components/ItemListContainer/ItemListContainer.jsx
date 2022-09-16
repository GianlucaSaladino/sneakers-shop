import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { products } from "../Database/Database";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const { tipoProducto } = useParams();
  console.log(tipoProducto);
  const [productos, setProductos] = useState([]);

  const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      reject((err) => console.log(err));
    }, 3000);
  });

  useEffect(() => {
    getFetch.then((resultado) => {
      if (!tipoProducto) {
        setProductos(resultado);
      } else {
        const nuevaLista = resultado.filter(
          (item) => item.productCategory === tipoProducto
        );
        setProductos(nuevaLista);
      }
    });
  }, [tipoProducto]);

  return (
    <ItemListContainerStyled>
      <h1>Productos</h1>
      <div className="item-list-container">
        <ItemList items={productos} />
      </div>
    </ItemListContainerStyled>
  );
}

export default ItemListContainer;

const ItemListContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  h1 {
    color: #000;
  }
  .item-list-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
