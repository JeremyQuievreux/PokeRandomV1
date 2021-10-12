import React from 'react';

import './ModalLogin.scss';

function ModalLogin({setModalState}) {

    function closeModal(){
        setModalState("");
    }
    
    return(
        <div className="modal-login-externe" onClick={() => closeModal()}>
            <div className="modal-login-interne" onClick={(e) => {e.stopPropagation()}}>
               <h1>Se Connecter :</h1> 
               <form action="/user/login" method="get">
                    <div className="form-line">
                       <label htmlFor="mail">Votre adresse mail : </label>
                       <input type="text" name="mail" id="mail" />
                    </div>
                    <div className="form-line">
                       <label htmlFor="password">Votre pseudo : </label>
                       <input type="text" name="password" id="password" />
                    </div>
                    <button type="submit">Connection</button>
               </form>
            </div>
        </div>
    )
}

export default ModalLogin;