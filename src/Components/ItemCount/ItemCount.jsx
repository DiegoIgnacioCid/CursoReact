import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../GlobalStateContext/CartContext';
import "./ItemCount.css"



const ItemCount = ({prod, stock/* , fn */}) => {
    
    const [contador, setContador] = useState(0);
    const [disable, setDisable] = useState(false);

    const {cart, addToCart} = useContext(GlobalContext);

  /*   console.log(prod);
    console.log(cart); */
    
    function sumar() {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    
    function restar() {
        
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    const handleAgregarCarrito = () => {
        setDisable(true);
        addToCart(prod.id, contador, prod.Precio);
    }
    



  return (
    
    <>
    {/* <p>Stock actual: {stock}</p> */}
    <div>
        <button className="btn btn-success my-4" disabled={disable} onClick={restar}> - </button>
        <span className='span'>{contador}</span>
        <button className="btn btn-success my-4" disabled={disable} onClick={sumar}> + </button>
        <br />
        <button className="btn btn-success my-4" disabled={disable} onClick={handleAgregarCarrito}>Agregar al carrito.</button>
        <NavLink to={"/Cart"} className="navbar-brand nav-link">
        <button className="btn btn-success my-4">Terminar mi compra.</button>
        </NavLink>
    </div>
    </>
    )
}

export default ItemCount