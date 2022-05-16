import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
/* import ItemCount from '../ItemCount/ItemCount' */

const Item = ({prods}) => {



    /*   console.log(prod.prods) */
    return (
        
        <>

    <div className="card" id='card'>
    <img  src={prods.Img} className="card-img-top img" alt="Card"/>
    <div className="card-body">
        <h5 className="card-title">{prods.Title}</h5>
        <p className="card-text">{prods.Text}</p>
        <Link to={`/ItemDetail/${prods.id}`} style={{ textDecoration: 'none' }}>
        <p className="card-text">Ver Detalle</p>
        </Link>
    </div>
    {/* <ul className="list-group list-group-flush">
    <li className="list-group-item">

    </li> 
    <li className="list-group-item">

    </li>
        
    </ul> */}

    </div>



</>


  )
}

export default Item