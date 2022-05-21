import React, { useState, useEffect } from 'react'
import {productos} from "../../Assets/Data/Data"
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import db from '../../Service/firebase';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

/* OJO PARA TRAER TODOS LOS DOCUMENTOS ES GET DOCS PARA TRAER UNO SOLO GET DOC */


const ItemListContainer = () => {

    const [dataProds, setdataProds] = useState([]);

    const getData = async () => {
      const col = collection(db, 'Productos')
      try {
        const data = await getDocs(col)
        const result = data.docs.map(doc => doc = {id: doc.id, ...doc.data()})
        setdataProds(result)
        console.log(result)
      } catch (error) {
        
      }
    }


    useEffect(() => {

      getData();




     /*  const item = doc(db, 'Productos', '2nvLAsIy3AFogDWH6NkW');

      try {
        
        getDoc(item).then((snapshot) => {
          if(snapshot.exists){
            setdataProds([...dataProds, {id: snapshot.id, ...snapshot.data()}])
            console.log(dataProds);

          }
        })
        
      } catch (error) {
        console.log('Error: ', error)
      } */
      

/* 
EJEMPLO QUE VIENE DE LOS DOCS DE FIREBASE
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      }); */



      // uso de la promesa con data local comentado para pasar a Firebase
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
        <ItemList data={dataProds}/>

      </div>
    </div>
    
    </div>
    </>
  )
}

export default ItemListContainer