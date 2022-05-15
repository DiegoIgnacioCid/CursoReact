import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar2 = () => {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <NavLink to={"/"} className="navbar-brand nav-link">Käse</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <NavLink to={"/Estacionados"} className="navbar-brand nav-link">Estacionados</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/Blandos"} className="navbar-brand nav-link">Blandos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/Otros"} className="navbar-brand nav-link">Otros</NavLink>
          </li>
         {/*  <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://www.google.com/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Otros
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="https://www.google.com/">Malbec</a></li>
              <li><a className="dropdown-item" href="https://www.google.com/">Cabernet</a></li>
              <li><a className="dropdown-item" href="https://www.google.com/">Otras cepas</a></li>
            </ul>
          </li> */}
        </ul><NavLink to={"/Cart"} className="navbar-brand nav-link">
        <CartWidget/>
        </NavLink>
      </div>
    </div>
  </nav>
    
    </>




  )
}

export default NavBar2