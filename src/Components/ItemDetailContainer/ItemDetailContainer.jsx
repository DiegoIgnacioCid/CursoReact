import React, { useState, useEffect } from 'react'
import {productos} from "../../Assets/Data/Data"
import Cargando from '../Cargando/Cargando';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {


    const [dataProds, setdataProds] = useState([]);


    useEffect(() => {
      
     const myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve(productos); }, 3000);
        });

        myPromise.then(function(value) {
    
        /* Aca lo que hacemos con la promesa */
        setdataProds(value);
        console.log(value)
    })
    .catch((err) => console.log('Error: ' + err))
    /* .then(() => console.log(value)); */
      
    }, [])




  return (
   
    <>
    <div>

    <div className='container'>
      <div className='row'>
        {/* <h1>Hola ItemListContainer</h1> */}

        {dataProds.length > 0 ?  <ItemDetail prods={dataProds}/> : <Cargando/>}

        {/* <ItemDetail prods={dataProds}/> */}

      </div>
    </div>
    
    </div>
    </>
  )
}

export default ItemDetailContainer