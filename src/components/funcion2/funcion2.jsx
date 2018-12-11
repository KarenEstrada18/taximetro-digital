import React, { Component } from 'react';
import './funcion2.css';

class Funcion2 extends Component {
    render() { 
        return (  
<React.Fragment>
<div className="divisor"></div>
    <div className="container div6">
        <div className="row imagen11">
            <div className="col-md-5 col-sm-12">
                <br/><br/><br/><br/><img className="img-fluid img11" src="./img/11.png" alt= "imagen11"/>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 col-sm-12">
                <h2 className="titulo3 text-center"><br/><br/>Disminuye el desgaste de tu Taxi</h2>
                <p className="funcion"><br/><br/>Conocer las horas en las que tu Unidad se encuentra en Servicio al día y las rutas que recorre, te permitirá comprobar el desgaste de tu Taxi y justificar tu inversión en reparación y mantenimiento del mismo.<br/><br/><br/></p>
                <button type="button" className="trans2 boton2 btn"><b> VER INFORME </b></button> <br/><br/><br/><br/>
            </div>
        </div>
    </div>
</React.Fragment>
        );
    }
}
 
export default Funcion2;