import React from 'react';
import { Component } from 'react';
import firebase from '../../Firebase';

class Register extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            senha: '',
            nome: '',
            sobrenome: '',
            nascimento: '',
            redirect: '',
        }

        this.criarUsuario = this.criarUsuario.bind(this);
    }


    async criarUsuario() {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha);

        await firebase.firestore().collection("usuario").add({
            email: this.state.email,
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            data: this.state.nascimento
        }).then(() => {
            window.location.href = "/";
        });
        
    }
    

    render() {
        return(
            <div className='base base-container'>
                <h1>Página de Cadastro</h1>

                <input type="email" placeholder='E-mail' onChange={ (e) => this.setState({email: e.target.value}) }/>
                <input type="password" placeholder='Senha' onChange={ (e) => this.setState({senha: e.target.value}) }/>
                <input type="text" placeholder='Nome' onChange={ (e) => this.setState({nome: e.target.value}) } />
                <input type="text" placeholder='Sobrenome' onChange={ (e) => this.setState({sobrenome: e.target.value}) } />
                <input type="text" placeholder='Data de Nascimento 10/10/2010' onChange={ (e) => this.setState({nascimento: e.target.value}) }/>
                <button className='login-button' onClick={this.criarUsuario}>Gravar</button>
                
            </div>
        )
    }
}

export default Register;