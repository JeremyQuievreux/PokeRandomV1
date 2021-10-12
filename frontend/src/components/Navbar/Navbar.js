import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss';
import LogoImg from '../../img/logo.png';

function Navbar() {
    
    return(
        <div className="navbar">
            <div className="logo">
                <img src={LogoImg} alt="" />
                <h1>Pokémon ClickDom</h1>
            </div>
            <div className="menu">
                <Link to="/"><button>Accueil</button></Link>
                <Link to="/userpage"><button>Profil</button></Link>
                <Link to="/shop"><button>Shop</button></Link>
            </div>
        </div>
    )
}

export default Navbar;