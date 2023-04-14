import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { Component } from "react";

export default class Rotas extends Component{
    
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact={true} path="/" Component={Login} />
                    <Route exact={true} path="/home" Component={Home} />
                    <Route exact={true} path="/sobre" Component={AboutUs} />
                    <Route exact={true} path="/contato" Component={ContactUs} />
                    <Route exact={true} path="/registro" Component={Register} />
                    
                    <Route path="*" Component={NotFound}/>
                </Routes>
            </BrowserRouter>
        );
    }
}