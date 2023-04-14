import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {

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
                        <h2>Dados Desenvolvedor:</h2>
                        <p>Desenvolvedor: Daniel Pacheco</p>
                        <p>E-mail: daniel.pacheco123@hotmail.com</p>
                    </div>
                </div>
            </>
        );
    }

}