import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {productos} from "../Assets/Data/Data" 
import ItemList from '../Components/ItemList/ItemList';

const Categorias = () => {

    const {Categoriaid} = useParams();
    console.log(Categoriaid);
    
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

    console.log(dataProds)

    const catElegida = (dataProds.filter(x => x.Categoryid === Categoriaid));
    console.log(catElegida);
    
  return (
   <>
   <ItemList data={catElegida}/>
   </>
  )
}

export default Categorias