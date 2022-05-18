import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"

const ItemDetail = ({prods, id}) => {

/* console.log("itemDetail prods", prods); */

const prodElegido = (prods.filter(x => x.id === id))[0];
/* console.log(prodElegido.Precio); */



    return (
    <>


<div className="card" id='card'>
    <img  src={prodElegido.Img} className="card-img-top imgDetail" alt="Card"/> 
    <div className="card-body">
        <h5 className="card-title">{prodElegido.Title}</h5>
        <p className="card-text">{prodElegido.Text}</p>
        <p className="card-text">{'Precio: $ ' + prodElegido.Precio}</p>
        <p className="card-text">{prodElegido.Text2}</p>
        <p className="card-text">Stock: {prodElegido.Stock}</p>
    </div>
    <ul className="list-group list-group-flush">
        
        <li className="list-group-item">
        <ItemCount
        prod={prodElegido}
        stock={prodElegido.Stock}
        /* fn={onAdd} */
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