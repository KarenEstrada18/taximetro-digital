import React, { Component } from 'react';
import './compra.css';

class Compra extends Component {

    render() { 
        return ( 
<React.Fragment>
<div className="div9 container" id="compra">
    <div className="row">
        <div className="col-md-6 col-sm-12">
            <h2 className="titulo6"><br/><br/>¡No te quedes sin tu Taxímetro Digital solicitalo ya!</h2>
            <p className="parrafo4"><br/> El Taxímetro Digital cuenta con 3 años de conectividad gratis.
            Ya está disponible en nuestros Centros de distribución, puedes seleccionar el número de unidades que necesites y realizar tu reserva. Pagarás el 10% ahora y el 90% restante al ser instalados tu GPS en el Taxi y la App en tu móvil. (est. Diciembre 2018).<br/> <br/></p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Unidades</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 unidad</td>
                        <td>$4,500</td>
                    </tr>
                    <tr>
                        <td>A partir de 30</td>
                        <td>$4,200</td>
                    </tr>
                    <tr>
                        <td>A partir de 50</td>
                        <td>$4,000</td>
                    </tr>
                    <tr>
                        <td>Más de 100</td>
                        <td>$3,800</td>
                    </tr>
                </tbody>
            </table>
                <p>IVA incluído. Costos de envío no incluídos.*</p>
        </div>
        <div className="col-sm-12 col-md-1"></div>
        <div className="col-sm-12 col-md-5 formulario">
            <br/><br/><br/><br/><h2>DATOS</h2>
            <form action="/action_page.php">
                <div className="form-group">
                    <br/><br/><label htmlFor="email">Email*/</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Cantidad*</label>
                    <input type="number" className="form-control" id="cantidad" placeholder="1" name="cantidad"/>
                </div>
                <div className="form-group">
                    <label htmlFor="puni">Direcccion</label>
                    <input type="text" className="form-control" id="puni" placeholder="calle olmo #1" name="direccion"/>
                </div><br/><br/>
                <div className="form-group form-check">
                    <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember"/> Acepto la política de privacidad y los términos y condiciones de reserva
                    </label> <br/>
                </div>
            </form>
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <button type="submit" className="trans4 boton4 btn btn-danger btn-block " ><b/> Comprar</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="divisor"></div>
</React.Fragment>
         );
    }
}
 
export default Compra;