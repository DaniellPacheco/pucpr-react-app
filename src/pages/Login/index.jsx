import React from 'react';
import { Component } from 'react';
import firebase from '../../Firebase';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            message: ""
        }

        this.validar = this.validar.bind(this);
        this.registrar = this.registrar.bind(this);
    }

    async validar() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            localStorage.setItem("email", this.state.email);
            window.location.href = "/home";
        }).catch(error => {
            this.setState({message: "Credenciais inválidas!"})
        });
        
    }

    registrar() {
        window.location.href = "/registro";
    }

    

    render() {
        return(
                <div className='base base-container'>
                    <h1>Entrar</h1>
                    <input type="email" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value}) }/>
                    <input type="password" placeholder='Senha' onChange={ (e) => this.setState({senha: e.target.value}) } />
                    <button className='login-button' onClick={this.validar}>Entrar</button>
                    <button className='register-button' onClick={this.registrar}>Registrar-se</button>

                    <h2 className='alert-message'>{this.state.message}</h2>

                    <p className='observation-message'>
                        Observação: Caso não tenha uma conta, registre-se.
                    </p>
                </div>
        )
    }
}


export default Login;