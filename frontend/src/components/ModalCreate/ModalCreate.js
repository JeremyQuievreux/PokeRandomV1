import React from 'react';

import './ModalCreate.scss';

function ModalCreate({setModalState}) {
    
    function closeModal(){
        setModalState("");
    }


    return(
        <div className="modal-create-externe" onClick={() => closeModal()}>
            <div className="modal-create-interne" onClick={(e) => {e.stopPropagation()}}>
               <h1>Modal de Creation de compte</h1> 
            </div>
        </div>
    )
}

export default ModalCreate;