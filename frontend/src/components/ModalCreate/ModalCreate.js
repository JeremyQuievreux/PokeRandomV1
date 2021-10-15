import React, { useState } from 'react';
import axios  from 'axios';

import './ModalCreate.scss';

function ModalCreate({setModalState}) {

    const [pseudo, setPseudo] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleInput(e, setter) {
        setter(e.target.value)
      }

    function handleClick(e) {
        e.preventDefault();

        axios.post('http://localhost:5000/user/create', {
            pseudo: pseudo,
            mail: mail,
            password : password,
            confirmPassword : confirmPassword
          })
          .then(function (response) {
              if (response.status === 200) {
                  setModalState("login")
              }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    function closeModal(){
        setModalState("");
    }




    return(
        <div className="modal-create-externe" onClick={() => closeModal()}>
            <div className="modal-create-interne" onClick={(e) => {e.stopPropagation()}}>
               <h2>Créer un compte : </h2> 
               <form>
                    <div className="form-line">
                        <label htmlFor="pseudo">Pseudo : </label>
                        <input type="text" name="pseudo" id="pseudo" onInput={(e)=>handleInput(e, setPseudo)}/>
                    </div>
                    <div className="form-line">
                        <label htmlFor="mail">Adresse mail : </label>
                        <input type="text" name="mail" id="mail" onInput={(e)=>handleInput(e, setMail)}/>
                    </div>
                    <div className="form-line">
                        <label htmlFor="password">Mot de passe : </label>
                        <input type="text" name="password" id="password" onInput={(e)=>handleInput(e, setPassword)}/>
                    </div>
                    <div className="form-line">
                        <label htmlFor="confirm_password">Confirmation : </label>
                        <input type="text" name="confirm_password" id="confirm_password" onInput={(e)=>handleInput(e, setConfirmPassword)}/>
                    </div>
                    <button onClick={(e)=> handleClick(e)}>Créer Compte</button>
                    <p></p>
               </form>
            </div>
        </div>
    )
}

export default ModalCreate;