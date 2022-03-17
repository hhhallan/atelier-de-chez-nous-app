import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <div className="logo">
                        <Link to="/">
                            <li>L'atelier de chez nous</li>
                        </Link>
                    </div>

                    <div className="main">
                        <NavLink to="/">
                            <li>Nos produits</li>
                        </NavLink>
                        <NavLink to="/recipes">
                            <li>Nos recettes</li>
                        </NavLink>
                        <NavLink to="/about-us">
                            <li>à propos de nous</li>
                        </NavLink>
                    </div>

                    <div className="user">
                        <NavLink to="/profil">
                            <li>Profil</li>
                        </NavLink>
                        <NavLink to="/cart">
                            <li>Panier</li>
                        </NavLink>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;