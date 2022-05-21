import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {productos} from "../../Assets/Data/Data"
import Cargando from '../Cargando/Cargando';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../Service/firebase';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

const ItemDetailContainer = () => {


    const [dataProds, setdataProds] = useState([]);
    /* const location = useLocation(); */
    const params = useParams();

    /* console.log("location", location);
    console.log("params", params.id); */

    const getData = async () => {
      const col = collection(db, 'Productos')
      try {
        const data = await getDocs(col)
        const result = data.docs.map(doc => doc = {id: doc.id, ...doc.data()})
        setdataProds(result)
        console.log(result)
      } catch (error) {
        console.log("Error")
        console.log(error)
      }
    }


    useEffect(() => {
      
      getData();



     /* const myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve(productos); }, 2000);
        });

        myPromise.then(function(value) {
    
        setdataProds(value);
    })
    .catch((err) => console.log('Error: ' + err)) */
      
    }, [])




  return (
   
    <>
    <div>

    <div className='container'>
      <div className='row'>
        {/* <h1>Hola ItemListContainer</h1> */}

        {dataProds.length > 0 ?  <ItemDetail prods={dataProds} id={params.id}/> : <Cargando/>}

        {/* <ItemDetail prods={dataProds}/> */}

      </div>
    </div>
    
    </div>
    </>
  )
}

export default ItemDetailContainer