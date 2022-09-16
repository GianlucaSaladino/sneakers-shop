import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ItemList({ items }) {
  return (
    <ItemListStyled>
      <div className="item-list">
        {items.map((item) => {
          return (
            <div>
              <Link
                style={{ textDecoration: "none" }}
                to={`/item/${item.productId}`}
                key={item.productId}
              >
                <Item item={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </ItemListStyled>
  );
}

export default ItemList;

const ItemListStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .item-list {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    div {
      text-decoration: none;
    }
  }
`;
