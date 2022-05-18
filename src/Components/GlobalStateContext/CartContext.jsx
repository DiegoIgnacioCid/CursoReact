import React, { createContext, useEffect, useState } from 'react'


export const GlobalContext = createContext('');


const CartContext = ({children}) => {
  
  const [cart, setCart] = useState([])
  /* const [cartTotal, setcartTotal] = useState([]) */
  
  // las funciones pedidas en la consigna.
  
  const isInCart = (producto) => {
    console.log("producto: ", producto, "cart; ", cart);
    return cart.findIndex(x => x.id === producto) /* ? console.log("estaba") : console.log("no estaba"); */
   /* cart.map(x => console.log(x)); */
 }

  const addToCart= (producto, cantidad, precio) => {
      console.log("producto agregado al carrito:", producto, "cantidad: ", cantidad);
      if (isInCart(producto) == -1) {
        const nuevoObj = {
          id: producto,
          cantidad: cantidad,
          precio: precio, 
          precioTotal: (precio * cantidad)
        }
        console.log(nuevoObj);
        setCart([... cart, nuevoObj]); 
        console.log("Nuevo estado del carrito (if):", cart);

      } else {
        const cantNueva = cart[isInCart(producto)].cantidad + cantidad;
        const newArray = [...cart];
        newArray[isInCart(producto)].cantidad = cantNueva;
        console.log(newArray);
        setCart(newArray); 
        console.log("Nuevo estado del carrito (else):", cart);

      }
      /* setCart(prevCart => [...prevCart, producto]) */
      /* console.log("Nuevo estado del carrito:", cart);
      console.log("Nuevo estado del carrito tyope:",typeof cart); */
  }

useEffect(() => {
  console.log("Nuevo estado del carrito (useEffect):", cart);
  

  
}, [])


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