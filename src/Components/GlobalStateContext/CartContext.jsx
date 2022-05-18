import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('');


const CartContext = ({children}) => {
  
  const [cart, setCart] = useState([])
  
  // las funciones pedidas en la consigna.
  
  const isInCart = (producto) => {
    console.log("producto: ", producto, "cart; ", cart);
   cart.find(x => x.id == producto) ? console.log("estaba") : console.log("no estaba");
   cart.map(x => console.log(x));
 }

  const addToCart= (producto, cantidad) => {
      console.log("producto agregado al carrito:", producto, "cantidad: ", cantidad);
      isInCart(producto);
      setCart(...cart, producto);
  }

/*
  function handleAgregarAlCarrito() {
     addToCart({
        id: producto.id,
        cantidad: contador,
    })
    
  } */

  const clear = () => setCart([]);

  return (
      <GlobalContext.Provider value={{cart, setCart, addToCart, clear}}>
        {children}
      </GlobalContext.Provider>
  )
}

export default CartContext