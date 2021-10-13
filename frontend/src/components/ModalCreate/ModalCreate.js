import React from 'react';

import './ModalCreate.scss';

function ModalCreate({setModalState}) {
    
    function closeModal(){
        setModalState("");
    }


    return(
        <div className="modal-create-externe" onClick={() => closeModal()}>
            <div className="modal-create-interne" onClick={(e) => {e.stopPropagation()}}>
               <h1>Créer compte : </h1> 
               <form>
                    <div className="form-line">
                        <label htmlFor="pseudo">Votre pseudo : </label>
                        <input type="text" name="pseudo" id="pseudo" />
                    </div>
                    <div className="form-line">
                        <label htmlFor="mail">Votre adresse mail : </label>
                        <input type="text" name="mail" id="mail" />
                    </div>
                    <div className="form-line">
                        <label htmlFor="password">Votre mot de passe : </label>
                        <input type="text" name="password" id="password" />
                    </div>
                    <button>Créer Compte</button>
               </form>
            </div>
        </div>
    )
}

export default ModalCreate;