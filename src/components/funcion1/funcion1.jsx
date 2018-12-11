import React, { Component } from 'react';

import './funcion1.css';

class Funcion1 extends Component {
    render() { 
        return (  
<React.Fragment>
<div  className="divisor" > </div>
<div  className="divisor" > </div>
<div className="div5 container">
    <div className="row">
        <div className="col-md-6 col-sm-12">
            <h2 className="titulo2"><br/><br/>Información en tiempo real</h2>
            <p className="parrafo2"><br/><br/>Podrás localizar tu unidad incluso cuando se encuentre fuera de Servicio.
            Conocerás en tiempo real cuántos viajes realiza tu Taxi durante el día, que kilometraje recorre durante cada uno de esos viajes y el ingreso monetario que generó cada uno de los mismos.                               
            <br/> <br/></p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 imagen10 col-sm-12">
            <br/> <img src="./img/10.png" alt= "imagen10" width="400" height="350"/><br/><br/>                               
             </div>
        </div>
    </div>
</React.Fragment>
        );
    }
}
 
export default Funcion1;