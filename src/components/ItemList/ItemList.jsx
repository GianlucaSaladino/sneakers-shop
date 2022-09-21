import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items = [] }) => {
  return (
    items.map((item) => <Item item={item} />)
  )
}

export default ItemList
