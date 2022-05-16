import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';



const ItemCount = ({stock, fn}) => {
    
    const [contador, setContador] = useState(0);
    const [carrito, setCarrito] = useState(0);
    const [disable, setDisable] = useState(false);
    
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
    
    function handleAgregarAlCarrito() {
        setCarrito(contador);
        /* console.log("contador: ", contador, "carrito: ", carrito); */
        fn(contador);
        setDisable(true);

       
    }

    


  return (
    
    <>
    {/* <p>Stock actual: {stock}</p> */}
    <div>
        <button disabled={disable} onClick={restar}> - </button>
        <span>{contador}</span>
        <button disabled={disable} onClick={sumar}> + </button>
        <br />
        <button disabled={disable} onClick={handleAgregarAlCarrito}>Agregar al carrito.</button>
        <NavLink to={"/Cart"} className="navbar-brand nav-link">
        <button>Terminar mi compra.</button>
        </NavLink>
    </div>
    </>
    )
}

export default ItemCount