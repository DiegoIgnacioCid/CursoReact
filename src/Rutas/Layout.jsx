import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar2 from '../Components/NavBar/NavBar2'

const Layout = () => {
  return (
    
    <>
        <NavBar2/>
            <Outlet></Outlet>
        {/* <Footer/> */}
    </>
  )
}

export default Layout