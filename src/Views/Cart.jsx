import React, { useContext, useEffect, useState } from 'react'
import CartItemList from '../Components/CartItemList/CartItemList';
import CartContext, { GlobalContext } from '../Components/GlobalStateContext/CartContext';

const Cart = () => {

  const {cart, addToCart} = useContext(GlobalContext);
  



  console.log("data en Cart: ", cart);

/*   const {cart, addToCart} = useContext(GlobalContext);
  console.log("data en Cart: ", cart); */

  return (
    <>
    <div>Cart</div>
<CartContext>

      <CartItemList data={{cart}}/>
</CartContext>
    </>
  )
}

export default Cart