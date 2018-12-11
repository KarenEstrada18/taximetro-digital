import React, { Component } from 'react';
import './funcion3.css';

class Funcion3 extends Component {
    render() { 
        return ( 
<React.Fragment>
<div className= "divisor"></div>
<div className= "container div7">
    <div className="row">
        <div className="col-md-6 col-sm-12">
            <h2 className="titulo2"><br/><br/>Elimina riesgos de accidentes y multas innecesarios</h2>
            <p className="parrafo2"><br/><br/>Podrás predecir si el conductor de tu Taxi representa un foco rojo al volante, pues el GPS te enviará la velocidad máxima a la que fue corridor tu Taxi y te ayudará además a conocer cuántas horas al día trabaja, permitiendo con ello analizar la situación de desagaste de tu operados, evitando que maneje si se encuentra cansado para evitar accidentes.
            Mediante un resumen claro y real estarás informado de todo lo relacionado a tu Taxi, permitiendote una administración optima.<br/> <br/></p>
        </div>
        <div className="col-md-1"></div>
            <div className="col-md-5 col-sm-12 imagen12">
                <br/><img className="img-fluid img12"  src="./img/12.png" alt= "imagen12"/><br/><br/>                                
            </div>
    </div>
</div>
</React.Fragment>
         );
    }
}
 
export default Funcion3;