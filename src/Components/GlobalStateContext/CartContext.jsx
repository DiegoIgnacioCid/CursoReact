import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('');


const CartContext = ({children}) => {

const addToCart= (producto) => {
    setCart(...cart, producto);
}
const [cart, setCart] = useState([])
  return (
      <GlobalContext.Provider value={{cart, setCart, addToCart}}>
        {children}
      </GlobalContext.Provider>
  )
}

export default CartContext