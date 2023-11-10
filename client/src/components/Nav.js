import React from "react";
import cinemaxLogo from "../assets/cinemax-lg.png";
import { Link } from "react-router-dom";

/**
 * TODO: Ajouter une indication de la page où l'on se trouve
 */
const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <img src={ cinemaxLogo } alt="" width="150" />
            </Link>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">Recherche</Link>
                </li>
                <li className="nav-item">
                    <Link to="/favorites">Mes favoris</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;