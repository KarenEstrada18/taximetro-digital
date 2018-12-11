import React, { Component } from 'react';
import './faqs.css'

class Faqs extends Component {
    render() { 
        return ( 
<React.Fragment>
<div className="div10 container">
    <img className="tituloF img-responsive img-fluid" id="faqs" src="./img/15.png" alt="imagen15"/><br/><br/>
    <h6 className="subtitulo">Resolvemos las dudas más frecuentes</h6><br/>
    <p className="p1">Si requieres más información o asesoría, contáctanos.</p><br/><br/>
</div>
<div className="div11 container">
    <div className="row">
        <div className="col-sm-6 col-md-3">
            <img className="cuadritos" src="./img/14.png" alt= "imagen14" width="32" height="32"/>
            <h5 className="titulocol1"> Características Técnicas</h5><br/>
            <ul className="letras">
                <li type="disc"><b>Tamaño:</b> 22cm x 7cm</li>                 
                <li type="disc">Acrílico ABS de Alto Impacto color gris Oxford con acabado fino. </li>
                <li type="disc">Bandera de Poliestireno de Alto impacto color Blanco</li>
                <li type="disc"><b>Serigrafía:</b>Indica Marca, modelo, no. de serie, tarifa a pagar, nombre de la empresa, la leyenda "Hecho en México” </li>
                <li type="disc"><b>Carátula:</b>Acrílico rojo transparente</li> 
                <li type="disc"><b>Botones: </b> Polietileno de Baja densidad</li>
                <li type="disc"><b>Chupones</b></li>
                <li type="disc"><b>Alimentación</b></li><br/>
            </ul>
            <img className="cuadritos" src="./img/14.png" alt= "imagen14" width="32" height="32"/>
            <h5 className="titulocol1"> ¿Cómo me beneficio como concesionario?</h5><br/>
            <ul className="letras">
                <li type="disc">Sabrás en tiempo real dónde se encuentra tu unidad.</li>
                <li type="disc">Tendrás el reporte de trabajo al día (horas trabajadas, ingresos generados, kilómetros recorridos).</li>
                <li type="disc">Conocerás la velocidad máxima que alcanza tu unidad y te anticiparás a prevenir accidentes y desgaste innecesario.</li>
            </ul><br/> <br/>
        </div>
        <div className="col-sm-6 col-md-3">
            <img className="cuadritos" src="./img/14.png" alt= "imagen14" width="32" height="32"/>
            <h5 className="titulocol1"> ¿Cómo activo el GPS en Taxímetro RETRO TX-3? </h5><br/>
            <p className="letras">Una vez realizada la instalación del GPS y de la App, ingresar a la App y registrar los datos del concesionario y de cada unidad de Taxi que será administrada y ya cuente con el GPS instalado (registro único).
            El usuario contará con un ID que le dará acceso a los reportes cada vez que lo requiera. 
            </p><br/>
            <img className="cuadritos" src="./img/14.png" alt= "imagen14" width="32" height="32"/>
            <h5 className="titulocol1">¿Cómo accedo a cada unidad registrada?</h5><br/>
            <p className="letras">Una vez que hayas iniciado sesión, sólo tienes que teclear el número de concesión de la unidad que quieres revisar.
            En la pantalla aparecerán los datos del vehículo y del conductor que pertenecen a  esa concesión.  
            Si deseas revisar otra unidad sólo debes regresar al menú principal y teclear otro número de concesión. 
            </p><br/>
        </div>              
        <div className="col-sm-6 col-md-3 text-justify">
            <img className="cuadritos" src="./img/14.png" alt= "imagen14" width="32" height="32"/>
            <h5 className="titulocol1"> ¿Qué incluye el GPS-DATA?</h5><br/>
            <ul className="letras">
                <li type= "disc">Hardware: Taxímetro RETRO TX-3 con cable de alimentación. Tarjeta electónica de GPS y modem interno activado con conectividad gratuita durante un año.</li><br/>
                <li type= "disc">Software: App gratuita (disponible para Android) cionfiguarada para ser personalizada y recibir código transformado en datos reales.</li><br/>
            </ul>
            <img className="cuadritos" src="./img/14.png" alt= "imagen14" width="32" height="32"/>
            <h5 className="titulocol1"> ¿Dónde genero los reportes?</h5><br/>
            <p className="letras">La App cuenta con un menú desplegable que te permite solicitar el reporte generado del día o bien te permite indicar la fecha exacta de la que te interesa generar el reporte, mostrándote en ese cuántos viajes fueron realizados durante día, la hora en la que inicio y finalizó cada uno, el ingreso monetario que generó y el promedio de velocidad máxima a la que se realizo cada viaje</p><br/>
        </div>
        <div className="col-sm-6 col-md-3 col3">
            <img className="cuadritos" src="./img/14.png" alt= "imagen14" width="32" height="32"/>
            <h5 className="titulocol1"> ¿Cómo instalo GPS en Taxímetro RETRO TX-3?</h5><br/>
            <p className="letras">Cualquier usuario, empleado en tienda o gestor punto de venta, puede instalar Smart Pallet, basta con retirar la pestaña de plástico que encontrarás debajo del pallet y colocarlo en el suelo en la localización deseada en tienda. No necesitas conectarlo a nada: ni cable de red, ni alimentación, ni wifi. A partir de ese momento, Smart Pallet estará enviando información.</p>
        </div>
    </div>
    </div>
<div className="divisor"></div>
</React.Fragment>
         );
    }
}
 
export default Faqs;