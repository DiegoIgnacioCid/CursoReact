import React from 'react'
import "./Item.css"

const Item = ({prods}) => {



  /*   console.log(prod.prods) */
  return (
/*     <>
   

 */

/* <>
<div className="col-md-4 mb-4">
    <div className="card overflow-hidden shadow"> <img className="card-img-top img" src={prod.prods.Img} alt={prod.prods.Title} />
        <div className="card-body py-4 px-3">
            <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                <h4 className="text-secondary fw-medium"><a className="link-900 text-decoration-none stretched-link" href="#!">{prod.prods.Text}</a></h4><span className="fs-1 fw-medium">$5,42k</span>
            </div>
        <div className="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" width="20" alt="navigation" /><span className="fs-0 fw-medium">10 Days Trip</span></div>
        </div>
    </div>
</div>
</> */

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