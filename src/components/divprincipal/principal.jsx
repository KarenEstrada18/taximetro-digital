import React, { Component } from 'react';
import Youtube from 'react-youtube';
import ReactModal from 'react-modal';

import './principal.css';


class Principal extends Component {

constructor(){
    super()
    this.state = {
        showModal: false,
    }
    this.handleOpenModal= this.handleOpenModal.bind(this)
    this.handleCloseModal= this.handleCloseModal.bind(this)
}

handleOpenModal(){
    this.setState({
        showModal : true
    })
}

handleCloseModal(){
    this.setState({
        showModal: false
    })
}

watchVideo = (url) => {
return url.split("=")[1]
}




render(){

  const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 1
      }
    };

return (
<React.Fragment>
<div className="row justify-content-center">
    <div className="col-sm-12 ">
        <div className="div1 container" id="inicio">
            <div className="col-md-12">
                <div className="div-img hidden">
                    <span>
                    <br/><a href="#contenido" onClick={this.handleOpenModal} data-toggle="modal" data-target="#exampleModalCenter"> <img className="imagenv img-fluid mx-auto d-block" src="/img/1.png" alt= ""/></a></span>
                    <br/><h1>TAXIMETRO DIGITAL</h1>
                    <p className="pprincipal"> <br/>Taxímetro Digital es un dispositivo inteligente, conectado a Internet y de fácil instalación que envía datos en tiempo real sobre la ubicación de tu Taxi y su administración, todo através de tu móvil.</p><br/>
                </div>
            </div> 
            <div className="row justify-content-center">
            <a className="boton1 trans2" href="#compra"><b>COMPRAR</b><br/></a>
            </div>
            <br/>
        </div>
    </div>
</div>
<div className="divisor"></div>
    <ReactModal className="modal-main" isOpen={this.state.showModal} ariaHideApp={false} onRequestClose={this.handleCloseModal} contentLabel="Minimal Modal Example">
        <Youtube className="videop" videoId={this.watchVideo("https://www.youtube.com/watch?v=nJXM_HT5BOw")}
        opts={opts}/>
    </ReactModal>
</React.Fragment>
        );
    }
}

export default Principal;