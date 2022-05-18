import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartItemList = (data) => {
    console.log("cartItemList data: ", data);
    console.log(data.data.cart)
    const datos = data.data.cart
    console.log("Datos en CartItemList: ", datos);
  return (
      <>
    <div>CartItemList</div>
    {datos.length > 0 ? datos.map((prod) => <CartItem key={prod.id} prods={prod}/>) : <h3>El carrito esta vacio</h3>}
      </>
  )
}

export default CartItemList