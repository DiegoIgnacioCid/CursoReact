import React from 'react'
import "./Item.css"

const Item = ({prods}) => {



  /*   console.log(prod.prods) */
  return (

<>


<div className="card" id='card'>
    <img  src={prods.Img} className="card-img-top img" alt="Card"/>
    <div className="card-body">
        <h5 className="card-title">{prods.Title}</h5>
        <p className="card-text">{prods.Text}</p>
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

export default Item