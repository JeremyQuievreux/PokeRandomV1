import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss';
import LogoImg from '../../img/logo.png';

function Navbar({Login}) {
    
    function logOut(){
        localStorage.removeItem("@tokenmern");
        document.location.replace('/');
    }

    return(
        <div className="navbar">
            <div className="logo">
                <img src={LogoImg} alt="" />
                <h1>Poké Random</h1>
            </div>
            <div className="menu">
                {Login.isLog ? (
                    <Fragment>
                        <Link to="/"><button>Accueil</button></Link>
                        <Link to="/userpage"><button>Profil</button></Link>
                        <Link to="/shop"><button>Shop</button></Link> 
                        <button onClick={() => logOut()}>LogOut</button>
                    </Fragment>)
                    : (
                    <Fragment>
                        <button onClick={() => Login.openLoginModal()} >Login</button>
                        <button onClick={() => Login.openCreateModal()} >Sign In</button>
                    </Fragment>
                )                                
                }

            </div>
        </div>
    )
}

export default Navbar;