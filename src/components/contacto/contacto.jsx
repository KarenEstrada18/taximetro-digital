import React, { Component } from 'react';
import './contacto.css';


class Contacto extends Component {
  redirect = () =>{
    this.props.history.push(`/principal`)
  }
    render() { 
        return ( 
<React.Fragment>
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <a className="navbar-brand" href="/#inicio">
            <img onClick={this.redirect} src="./img/logo.png" alt="Logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><img src= "./img/menu.svg" alt="menu"/></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#ventajas"> VENTAJAS <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#funciones">FUNCIONES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#compra">COMPRA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#faqs">FAQ´S</a>
              </li>
            </ul>
        </div>
    </nav>
<div className="container">
  <div className="row">
    <div className="col-md-7 col-sm-12">
      <br/><br/><br/><h3 className="titulof">Contacta con nosotros</h3>
      <div className="row container">
        <div className="container col-md-4 col-sm-12 col1f">
          <form action="/action_page.php">
            <div className="form-group"><br/>
             <input type="text" className="form-control" id="nombre" placeholder="Nombre" name="nombre"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="apellido" placeholder="Apellido" name="apellido"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="telefono" placeholder="Telefono" name="telefono"/>
            </div>
            <select className="form-control" placeholder="Tamaño de la Compañia">
              <option>1-50 empleados</option>
              <option>51-200 empleados</option>
              <option>201-500 empleados</option>
              <option>+500 empleados</option>
            </select>
          </form>                                    
      </div>            
      <div className="container col-md-4 col-sm-12">
        <form action="/action_page.php">
          <div className="form-group"><br/>
            <input type="text" className="form-control" id="puesto" placeholder="Puesto" name="puesto"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="Email" name="email"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="compañia" placeholder="Compañia" name="compañia"/>
          </div>
          <select className="form-control" label="Tipo de Consulta">
            <option>Internet of Things</option>
            <option>IOT - Data Science</option>
            <option>Data Science</option>
            <option>Proveedor</option>
            <option>Otro</option>
          </select>
        </form>
      </div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-10">
              <br/><textarea className="form-control" rows="5"></textarea><br/><br/>
              <label className="form-check-label terminos">
              <input className="form-check-input" type="checkbox" name="remember"/> Acepto los términos y condiciones.</label>
            </div> 
        </div>
    </div> 
    <div className="divisor"></div>
      <div className="col-md-3 col-sm-12">
        <br/><br/><br/><h3 className="titulof">Ubicación</h3>
          <img className="cuadritos cartas logou" src="./img/16.png" alt="imagen16"/>
          <h4> Taximetro Digital</h4>
          <p>Cerrada Rosa Verde 35, Molino de Rosas, 01470 Ciudad de México, CDMX</p><br/>
          <img className="cuadritos cartas logou" src="./img/17.png" alt="imagen17"/>
          <h4>  E-mail</h4>
           <p>taximetroretro@gmail.com</p><br/>
           <img className="cuadritos cartas logou" src="./img/18.png" alt="imagen18"/>
           <h4> Télefono</h4>
           <p>01-23-45-67</p> <br/>
           <iframe className= "mapagoogle" title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.896371874276!2d-99.20501718561877!3d19.3736392475849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d200304bdd9f13%3A0xaacdc81660fd8785!2sTaximetro+Digital!5e0!3m2!1ses!2smx!4v1543271475613" frameBorder="0" allowFullScreen></iframe><br/><br/> 
      </div> 
    </div>
</div>
<div className="row">
      <div className="col-md-2 col-sm-12 container-fluid">
         <br/><button type="submit" className="trans btn btn-default btn-block boton6" ><b/> Enviar</button>
        </div>
      </div>
  <div className="divisor"></div>
  <div className="div12"><br/><br/><br/>
      <h5 className="pie">Copyright 2018 Taximetro Digital - Hecho con ❤ por <b>Karen Estrada <br/> Aviso legal - Cookies - Política de Privacidad</b></h5><br/>
   </div>
<span>
<a href="#top"><img className="top" src="./img/top.png" alt="Ir arriba"/></a>
</span>
</React.Fragment>          
         );
    }
}
 
export default Contacto;