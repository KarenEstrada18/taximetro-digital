import React, { Component } from 'react';
import './navegacion.css';


class Navegacion extends Component {
    redirect = () =>{
      this.props.history.push(`/contacto#nav-contacto`)
    }

   
    render() {
        return (
<React.Fragment>
        <nav className="navbar sticky-top navbar-expand-md">
        <a className="navbar-brand" href="#inicio">
        <img src="/img/logo.png" alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><img src="/img/menu.svg" alt=""/></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#ventajas">VENTAJAS<span className="sr-only">(current)</span></a>
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
           <li>
           <button href="/formulario.html" className="btn1 trans nav1" onClick={this.redirect} ><b> SOLICITA TU COTIZACION </b></button>
           </li>
          </ul>
        </div>
      </nav>
</React.Fragment>
        );
    }
}

export default Navegacion;