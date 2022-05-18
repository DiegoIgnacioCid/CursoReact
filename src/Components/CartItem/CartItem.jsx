import React from 'react'

const CartItem = ({prods}) => {
    console.log("item en CartItem: ", prods);
    /* const prod = item.prods; */
  return (
    <>
    <div>
    <span>Queso {prods.id}. Cantidad: </span>
    <span>{prods.cantidad}. </span>
    <span>Precio unitario: {prods.precio}. </span>
    <span>Precio total: {prods.precioTotal}.</span>
    <button className="btn btn-success my-4">Eliminar del carrito.</button>

    </div>
    </>
  )
}

export default CartItem