import React, { useContext } from 'react'
import { BiCart } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { GlobalContext } from '../GlobalStateContext/CartContext';

const Cart = () => {

  const {cart} = useContext(GlobalContext);
  console.log("Cart en cartwidget: ", cart);
  console.log("Cart length en cartwidget: ", cart.length);

  const largo = cart.length;

  return (
<>
    {largo > 0 ? <BsFillCartCheckFill /> : <BiCart />}

    
</>
   
  )}
  

  


export default Cart