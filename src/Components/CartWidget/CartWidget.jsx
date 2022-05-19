import React, { useContext } from 'react'
import { BiCart } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { GlobalContext } from '../GlobalStateContext/CartContext';
import "./CartWidget.css"

const Cart = () => {

  const {cart, cantidadTotal} = useContext(GlobalContext);
  console.log("Cart en cartwidget: ", cart);
  console.log("Cart length en cartwidget: ", cart.length);

  const largo = cart.length;

  return (
<>
    {/* {largo > 0 ? <BsFillCartCheckFill /> : <BiCart />} */}
    {largo > 0 ? <i class="fa badge fa-lg" value={cantidadTotal}>&#xf07a;</i> : <></>}
    

    
</>
   
  )}
  

  


export default Cart