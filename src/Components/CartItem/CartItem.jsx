import React, { useContext, useEffect } from 'react'
import CartContext, { GlobalContext } from '../GlobalStateContext/CartContext';


const CartItem = ({prods}) => {

  const {eliminarProd} = useContext(GlobalContext);
    /* console.log("item en CartItem: ", prods); */


/*   useEffect(() => {
    eliminarProd();
}, []) */

const eliminarBoton = () => {
  eliminarProd(prods.id);
}


    /* const prod = item.prods; */
  return (
    <>
    <div>
    <span>Queso {prods.id}. Cantidad: </span>
    <span>{prods.cantidad}. </span>
    <span>Precio unitario: {prods.precio}. </span>
    <span>Precio total: {prods.precioTotal}.</span>
    <button className="btn btn-success my-4" onClick={eliminarBoton}>Eliminar del carrito.</button>

    </div>
    </>
  )
}

export default CartItem