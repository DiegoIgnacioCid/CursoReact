import React from 'react'

const CartItem = ({prods}) => {
    /* console.log("item en CartItem: ", item); */
    /* const prod = item.prods; */
  return (
    <>
    <h5>{prods.id}</h5>
    <p>{prods.cantidad}</p>
    </>
  )
}

export default CartItem