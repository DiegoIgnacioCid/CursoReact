import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartItemList = (data) => {
    console.log("cartItemList data: ", data);
    console.log(data.data.cart)
    const datos = data.data.cart
    console.log("Datos en CartItemList: ", datos);
  return (
      <>
    <div className='container'>
<div className='row'>
        {datos.length > 0 ? datos.map((prod) => <CartItem key={prod.id} prods={prod}/>) : <h3>El carrito esta vacio</h3>}

</div>
    </div>
      </>
  )
}

export default CartItemList