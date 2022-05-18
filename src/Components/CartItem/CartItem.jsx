import React from 'react'

const CartItem = (item) => {
  return (
    <>
    <h5>{item.id}</h5>
    <p>{item.cantidad}</p>
    </>
  )
}

export default CartItem