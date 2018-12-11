import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Navegacion from './components/navegacion/navegacion'
import Principal from './components/divprincipal/principal'
import Ventajas from './components/ventajas/ventajas'
import Ventajas2 from './components/ventajas2/ventajas2'
import Funciones from './components/funcion/funciones'
import Funcion1 from './components/funcion1/funcion1'
import Funcion2 from './components/funcion2/funcion2'
import Funcion3 from './components/funcion3/funcion3'
import Funcion4 from './components/funcion4/funcion4'
import Compra from './components/compra/compra'
import Faqs from './components/faqs/faqs'
import Pie from './components/pie/pie'
import Contacto from './components/contacto/contacto'


class Routes extends Component {
   
    render() { 
        return ( 
            <Router>
                <main>
                    <Route exact path = "/" component = {Navegacion} />
                    <Route exact path = "/" component = {Principal} />
                    <Route exact path = "/" component = {Ventajas} />
                    <Route exact path = "/" component = {Ventajas2} />
                    <Route exact path = "/" component = {Funciones} />
                    <Route exact path = "/" component = {Funcion1} />
                    <Route exact path = "/" component = {Funcion2} />
                    <Route exact path = "/" component = {Funcion3} />
                    <Route exact path = "/" component = {Funcion4} />
                    <Route exact path = "/" component = {Compra} />
                    <Route exact path = "/" component = {Faqs} />
                    <Route exact path = "/" component = {Pie} />
                    <Route exact path = "/contacto" component = {Contacto} />
                </main>
            </Router>
         );
    }
}
 
export default Routes;