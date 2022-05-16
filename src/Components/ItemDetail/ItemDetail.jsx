import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"

const ItemDetail = ({prods, id}) => {

const [carrito, setCarrito] = useState()

function onAdd(quantityToAdd) {
// Hemos recibido un evento del ItemCount
console.log("Data recibida desde ItemCount: ", quantityToAdd);
setCarrito(quantityToAdd);
    }

console.log("Carrito desde ItemDetail: ", carrito);


/* console.log(prods.filter(x => x.id === id)); */

const prodElegido = (prods.filter(x => x.id === id))[0];



/* useEffect(() => {
  onAdd(5);

  return () => {
    
  }
}, []) */





    return (
    <>


<div className="card" id='card'>
    <img  src={prodElegido.Img} className="card-img-top imgDetail" alt="Card"/> 
    <div className="card-body">
        <h5 className="card-title">{prodElegido.Title}</h5>
        <p className="card-text">{prodElegido.Text}</p>
        <p className="card-text">{prodElegido.Text2}</p>
        <p className="card-text">Stock: {prodElegido.Stock}</p>
    </div>
    <ul className="list-group list-group-flush">
        
        <li className="list-group-item">
        <ItemCount
        stock={prodElegido.Stock}
        fn={onAdd}
        ></ItemCount>
        </li>
        
    </ul>
    {/* <div className="card-body">
        <a href="#" className="card-link">{prods.Link}</a>
    </div> */}
</div>


</>


  )
}

export default ItemDetail