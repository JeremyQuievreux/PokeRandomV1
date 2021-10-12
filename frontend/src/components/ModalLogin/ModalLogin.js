import React from 'react';

import './ModalLogin.scss';

function ModalLogin({setModalState}) {

    function closeModal(){
        setModalState("");
    }
    
    return(
        <div className="modal-login-externe" onClick={() => closeModal()}>
            <div className="modal-login-interne" onClick={(e) => {e.stopPropagation()}}>
               <h1>Modal de Login</h1> 
            </div>
        </div>
    )
}

export default ModalLogin;