import React, { Component } from 'react';

import './ventajas.css';

class Ventajas extends Component {
    render() { 
        return ( 
<React.Fragment>
<div className="container div3 "  id="ventajas">
    <div className="row ">
        <div className="col-md-4 col-sm-12">
            <div className="container">
            <div className="divisor"></div>
                <h2><br/> Ventajas <br/></h2>
                <hr/>
                <p>Taxímetro RETRO TX-3 alerta sobre la ubicación en tiempo real de tu Taxi, predice el comportamiento de tu conductor e informa sobre el uso de tu Unidad.</p>
            </div>
        </div>   
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <div className="card-body" >
                    <img className="cuadritos cartas" src="/img/2.png" alt="producto"/>
                    <h4 className="card-title">Producto siempre disponible</h4><br/>
                    <p>Ubica tu Taxi en el momento que lo desees y ten a la mano el reporte de sus ultimas rutas.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img className="cuadritos cartas" src="/img/3.png" alt="tiempo"/>
                    <h4 className="card-title">	Optimización de Tiempos</h4><br/>
                    <p>Identifica las zonas con mayor demanda del servicio y te permite tomar decisiones.</p> 
                </div>  
            </div>
        </div>
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <img className="cuadritos cartas" src="/img/4.png" alt="seguridad"/>
                    <h4 className="card-title"> Incrementa la Seguridad </h4><br/>
                    <p>Permite que tu unidad se encuentre monitoreada 24/7 para una respuesta oportuna en caso de algun percance.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img className="cuadritos cartas" src="/img/5.png" alt="ingresos"/>
                    <h4 className="card-title">Administración de Ingresos</h4><br/>
                    <p>Sabrás cuántos viajes se realizan al día y el ingreso que cada uno generó.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</React.Fragment>
         );
    }
}
 
export default Ventajas;

