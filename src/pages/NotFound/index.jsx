import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
    render() {
        return(
            <>
                <div className="base base-notfound">
                    <h1>Erro 404 - Página Não Encontrada</h1>
                    <Link to="/home" className="list-item-link">
                        <span class="material-symbols-outlined">
                            undo    
                        </span>
                        Ir para a Home
                    </Link>
                </div>
            </>
        );
    }
}