import React, { useContext, useEffect, useState } from 'react'
import CartItemList from '../Components/CartItemList/CartItemList';
import Formulario from '../Components/Formulario/Formulario';
import CartContext, { GlobalContext } from '../Components/GlobalStateContext/CartContext';

const Cart = () => {

  const {cart, addToCart, cartTotal, cantidadTotal, clear} = useContext(GlobalContext);
  



  /* console.log("data en Cart: ", cart); */

/*   const {cart, addToCart} = useContext(GlobalContext);
  console.log("data en Cart: ", cart); */

  return (
    <>
<div className='container'>
  <div className='row mt-4'>
      <div className='col col-12 col-lg-6'>

            <CartItemList data={{cart}}/>
            {cartTotal > 0 ? <h3>Total de la compra: {cartTotal}</h3> : <></>}
            {cartTotal > 0 ?  <h3>Cantidad total de items: {cantidadTotal}</h3> : <></>}
            <button className="btn btn-success my-4" onClick={clear}>Vaciar carrito.</button>
      </div>

    <div className='col col-12 col-lg-6'>
        <Formulario/>
    </div>


  </div>
 


</div>

    </>
  )
}

export default Cart