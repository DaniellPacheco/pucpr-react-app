import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContactUs extends Component {

    render() {
        return(
            <>
                <div className='base base-container'>
                    <h1>Contato</h1>
                    <Link to="/home" className="list-item-link">
                        <span class="material-symbols-outlined">
                            undo    
                        </span>
                        Voltar
                    </Link>

                    <div>
                        <h2>Informação Aplicação:</h2>
                        <p>Linguagem: JavaScript</p>
                        <p>Framwork: React</p>
                    </div>
                </div>
            </>
        );
    }
}