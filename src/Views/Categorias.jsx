import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {productos} from "../Assets/Data/Data" 
import ItemList from '../Components/ItemList/ItemList';
import db from '../Service/firebase';
import { doc, getDoc, getDocs, collection, getFirestore, query, where } from "firebase/firestore";

const Categorias = () => {

    const {Categoriaid} = useParams();
    console.log(Categoriaid);
    
    const [dataProds, setdataProds] = useState([]);

    /* const getData = async () => {
      
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
    } */

    const getData2 = async () => {

      try {
        const db = getFirestore();
  
      const q = query(collection(db, "Productos"), where("CategoryId", "==", Categoriaid));
      await getDocs(q).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("no data")
        } else {
          setdataProds(snapshot.docs.map(doc => doc = {id: doc.id, ...doc.data()}));
          console.log(snapshot);
        }
      })
      } catch (error) {
        console.log(error)
      }
  

    };
    


    useEffect(() => {

      /* getData(); */
      getData2();




      /* 
     const myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve(productos); }, 2000);
        });

        myPromise.then(function(value) {
    
        setdataProds(value);
    })
    .catch((err) => console.log('Error: ' + err)) */
      
    }, [])

   /*  console.log(dataProds) */

    /* const catElegida = (dataProds.filter(x => x.CategoryId === Categoriaid));
    console.log(catElegida); */
    
    
  return (
   <>
   <ItemList data={dataProds}/>
   </>
  )
}

export default Categorias