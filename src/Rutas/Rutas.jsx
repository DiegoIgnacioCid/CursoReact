import React from 'react'
import { BrowserRouter, Routes,  Route} from "react-router-dom"
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
                   {/* <Route path="/Card" element={<Card/>}/>
                    <Route path="/ItemDetail/:id" element={<ItemDetail/>}/>
                    <Route path='/categoria/:categoria' element={<FilterCat />} />
                    <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
 */}
            </Route>

        </Routes>
    </BrowserRouter>

</>

  )
}

export default Rutas