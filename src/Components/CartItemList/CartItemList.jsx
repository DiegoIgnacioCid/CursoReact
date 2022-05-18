import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartItemList = (data) => {
    console.log("cartItemList data: ", data);
  return (
      <>
    <div>CartItemList</div>
    {data.data.length > 0 ? data.data.map((prod) => <CartItem key={prod.id} prods={prod}/>) : <h3>El carrito esta vacio</h3>}
      </>
  )
}

export default CartItemList