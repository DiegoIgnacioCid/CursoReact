import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({prods}) => {

console.log(prods[0].Img)

    return (
    <>


<div className="card" id='card'>
    <img  src={prods[0].Img} className="card-img-top imgDetail" alt="Card"/> {/* OJO puse prods[0].Img al solo efecto de hacer display de una. Tiene que cambiar por un metodo dinamico de elegir el objeto en cuestion */}
    <div className="card-body">
        <h5 className="card-title">{prods[0].Title}</h5>
        <p className="card-text">{prods[0].Text}</p>
        <p className="card-text">{prods[0].Text2}</p>
        <p className="card-text">Stock: {prods[0].Stock}</p>
    </div>
    <ul className="list-group list-group-flush">
        
        <li className="list-group-item">
        {/* <ItemCount
        stock={prods.Stock}
        ></ItemCount> */}
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