import React, { Component } from 'react';
import './ventajas2.css';

class Ventajas2 extends Component {
    render() { 
        return ( 
<React.Fragment>
<div className="divisor"></div>
<div className="container div3">
<div className="row zoom2">
    <div className="col-md-6 col-sm-12">
        <div className="card">
            <div className="card-body">
              <img className="cartas cuadritos" src="./img/6.png" alt="desgaste"/>
              <h4 className="card-title"> Interpreta el desgaste de tu unidad</h4>
              <br/><p>Visualiza las horas trabajadas y los kilómetros recorridos </p>
            </div>
        </div>
    </div>
    <div className="col-md-6 col-sm-12">
        <div className="card">
            <div className="card-body">
                <img className="cartas cuadritos" src="./img/7.png" alt="accidentes"/>
                <h4 className="card-title"> Ideal para evitar accidentes</h4>
                <br/><p>Monitorea el comportamiento de tu conductor al volante</p>
              </div>
          </div>
        </div>
    </div>
</div>
<div className="divisor"></div>   
<div className="div3">
    <br/><img className= "img8 img-fluid" src="./img/8.png" alt= "Imagen8" width="380" height="150"/><br/><br/>
</div> 
    </React.Fragment>
         );
    }
}
 
export default Ventajas2;