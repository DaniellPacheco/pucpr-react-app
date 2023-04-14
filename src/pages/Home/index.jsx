import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from '../../Firebase';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            email: "",
            nome: "",
            sobrenome: "",
            data_nascimento: ""
        }

        this.getUser = this.getUser.bind(this);

    }


    async getUser() {
        // console.log(localStorage.getItem("email"));
        const emailCampo = localStorage.getItem("email");

        const db = firebase.firestore();
        db.collection("usuario")
            .where("email", "==", emailCampo)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.setState({
                        id: `ID: ${doc.id}`,
                        email: `Email: ${doc.data().email}`,
                        nome: `Nome: ${doc.data().nome}`,
                        sobrenome: `Sobrenome: ${doc.data().sobrenome}`,
                        data_nascimento: `Data Nascimento: ${doc.data().data}`
                    })
                    // console.log(doc.id, " => ", doc.data())
                })
            })
    };

    render() {
        this.getUser();

        return (
            <>
                <div className="base base-home">
                    <h1>Página Home</h1>
                    <div>
                        <ul>
                            <li className="list-item"> 
                                <Link to="/" className="list-item-link">
                                    <span class="material-symbols-outlined">
                                        password
                                    </span>
                                    Login
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to="/registro" className="list-item-link">
                                    <span class="material-symbols-outlined">
                                        how_to_reg
                                    </span>
                                    Registro
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to="/sobre" className="list-item-link">
                                    <span class="material-symbols-outlined">
                                        description
                                    </span>
                                    Sobre
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to="/contato" className="list-item-link">
                                    <span class="material-symbols-outlined">
                                        contact_mail
                                    </span>
                                    Contato
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to="/sss" className="list-item-link" >
                                    <span class="material-symbols-outlined">
                                        signal_wifi_statusbar_null
                                    </span>
                                    Página Inexistente
                                </Link>
                            </li>
                        </ul>                 
                    </div>

                    {/* <button onClick={this.getUser}>Teste</button> */}
                    <div className="info">
                        <p>{this.state.id}</p>
                        <p>{this.state.email}</p>
                        <p>{this.state.nome}</p>
                        <p>{this.state.sobrenome}</p>
                        <p>{this.state.data_nascimento}</p>
                        
                    </div>
                </div>
            </>
        );
    }
}
