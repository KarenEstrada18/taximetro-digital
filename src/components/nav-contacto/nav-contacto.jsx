import React, { Component } from 'react';
import './nav-contacto.css';

class NavContacto extends Component {
    render() { 
        return (  
<React.Fragment>
<nav className="navbar navbar-expand-lg  bg-light sticky-top">
    <a className="navbar-brand" href="index.html#inicio">
      <img src="./img/logo.png" alt="Logo"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><img src= "./img/menu.svg" alt="menu"/></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav  ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#ventajas"> VENTAJAS <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#funciones">FUNCIONES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#compra">COMPRA</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#faqs">FAQ´S</a>
      </li>
    </ul>
  </div>
  </nav>
</React.Fragment>
        );
    }
}
 
export default NavContacto;