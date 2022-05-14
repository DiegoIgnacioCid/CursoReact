import React from 'react'
import Item from '../Item/Item'

const ItemList = (data) => {
    
    console.log(data)

    console.log(data.data.length)

  return (

    <>
   {/*  <div>Hola ItemList</div> */}
 {/*    {data.data.map(u => console.log(u))} */}
    {data.data.length > 0 ? data.data.map((prod) => <Item key={prod.id} prods={prod}/>) : <p>Cargando....</p>}

    </>
  )
}

export default ItemList