import React from 'react'
import { BrowserRouter, Routes,  Route} from "react-router-dom"
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer'

import Cart from '../Views/Cart'
import Categorias from '../Views/Categorias'
/* import NavBar2 from '../Components/NavBar/NavBar2' */
import Error from '../Views/Error'

import Home from '../Views/Home'

import Layout from './Layout'


const Rutas = () => {
  return (
    
<>
    <BrowserRouter>
    {/* <NavBar2/> */}
        <Routes>
            <Route path="/" element={<Layout/>}>

                     <Route index element={<Home/>}/>
                     <Route path="*" element={<Error/>}/>
                     <Route path="/Cart" element={<Cart/>}/>
                     {/* <Route path="/Blandos" element={<Blandos/>}/>
                     <Route path="/Estacionados" element={<Estacionados/>}/>
                     <Route path="/Otros" element={<Otros/>}/> */}
                     <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>
                     <Route path="/Categoria/:Categoriaid" element={<Categorias/>}/>
                  {/*  <Route path='/categoria/:categoria' element={<FilterCat />} />
                    <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
 */}
            </Route>

        </Routes>
    </BrowserRouter>

</>

  )
}

export default Rutas