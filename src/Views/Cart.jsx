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
<div className='container'>
  <div className='row'>
<h2>Carrito: </h2>
      <CartItemList data={{cart}}/>

  </div>
</div>

    </>
  )
}

export default Cart