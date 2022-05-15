import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

const NavBar2 = () => {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://www.google.com/">Käse</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://www.google.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.google.com/">Estacionados</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.google.com/">Blandos</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://www.google.com/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nuestros vinos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="https://www.google.com/">Malbec</a></li>
              <li><a className="dropdown-item" href="https://www.google.com/">Cabernet</a></li>
              <li><a className="dropdown-item" href="https://www.google.com/">Otras cepas</a></li>
            </ul>
          </li> */}
        </ul>
        {/* <CartWidget/> */}
      </div>
    </div>
  </nav>
    
    </>




  )
}

export default NavBar2