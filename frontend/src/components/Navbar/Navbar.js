import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss';
import LogoImg from '../../img/logo.png';

function Navbar({setModalState, isLog}) {
    
    function openModalCreate(){
        setModalState("create")
    }

    function openModalLogin(){
        setModalState("login")
    }
    function logOut(){
        localStorage.removeItem("@Mern:token");
        document.location.replace('/');
    }

    return(
        <div className="navbar">
            <div className="logo">
                <img src={LogoImg} alt="" />
                <h1>Pokémon Random</h1>
            </div>
            <div className="menu">
                {isLog ? (
                    <Fragment>
                        <Link to="/"><button>Accueil</button></Link>
                        <Link to="/userpage"><button>Profil</button></Link>
                        <Link to="/shop"><button>Shop</button></Link> 
                        <button onClick={() => logOut()}>LogOut</button>
                    </Fragment>)
                    : (
                    <Fragment>
                        <button onClick={() => openModalLogin()} >Login</button>
                        <button onClick={() => openModalCreate()} >Sign In</button>
                    </Fragment>
                )                                
                }

            </div>
        </div>
    )
}

export default Navbar;