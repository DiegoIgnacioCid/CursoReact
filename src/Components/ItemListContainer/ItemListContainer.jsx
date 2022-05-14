import React, { useState, useEffect } from 'react'
import {productos} from "../../Assets/Data/Data"
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"


const ItemListContainer = () => {

    const [dataProds, setdataProds] = useState([]);


    useEffect(() => {
      
     const myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve(productos); }, 2000);
        });

        myPromise.then(function(value) {
    
        /* Aca lo que hacemos con la promesa */
        setdataProds(value);
        /* console.log(value) */
    })
    .catch((err) => console.log('Error: ' + err))
    /* .then(() => console.log(value)); */
      
    }, [])
    
  return (

    <>
    <div className='container'>
      <div className='row'>
        {/* <h1>Hola ItemListContainer</h1> */}
        <ItemList data={dataProds}/>

      </div>
    </div>
    
    </>
  )
}

export default ItemListContainer