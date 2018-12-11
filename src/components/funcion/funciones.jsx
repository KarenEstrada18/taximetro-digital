import React, { Component } from 'react';
import './funciones.css';

class Funciones extends Component {
    render() { 
        return ( 
<React.Fragment>
<div className="div4 container-fluid"  id="funciones">
    <div className="row imagen9">
        <div className="col-md-5 col-sm-10" >
            <br/><br/><br/><img className="img-fluid" src="./img/9.png" alt= "imagen9"/>
        </div>
        <div className="col-md-6 col-sm-12" >
            <h2 className="titulo"><br/>¿Como Funciona?</h2>
            <p className="funcion"><br/>Taxímetro RETRO es un dispositivo con GPS conectado a Internet que se coloca en la Unidad de Taxi y envía la Geolocalización directamente a la aplicación en tu celular.<br/><br/>
            Para su instalación sólo se necesita acudir al taller de Distribución de Taxímetros con tu celular disponible para descargar la aplicación y vincularla al dispositivo GPS que se conectará en tu Taxi.<br/><br/>
            A partir de que se instala el GPS a tu Taxi, el Taxímetro RETRO  envía toda la información para que puedas consultar los datos generados cuando lo requieras. El GPS envía los datos en forma de código, para ser interpretados por la red y reenviados a tu celular en un formato para aplicación que te es mostrado como un informe claro y detallado.
            <br/><br/></p>
            <a className="trans1 boton5" href="#compra"><b>COMPRAR</b></a>
            <br/>
        </div>  
    </div>
</div>
<div  className="divisor" ></div>
<div  className="divisor" ></div>
<span><a href="#top"><img className="top" src="./img/top.png" alt="Ir arriba"/></a></span>
</React.Fragment>
         );
    }
}
 
export default Funciones;