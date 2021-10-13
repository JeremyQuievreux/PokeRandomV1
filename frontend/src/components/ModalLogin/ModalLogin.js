import React, { useState } from 'react';
import axios  from 'axios';

import './ModalLogin.scss';

function ModalLogin({setModalState}) {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    function handleInput(e, setter) {
        setter(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/user/login', {
            mail: mail,
            password : password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    
    
    function closeModal(){
        setModalState("");
    }
    
    return(
        <div className="modal-login-externe" onClick={() => closeModal()}>
            <div className="modal-login-interne" onClick={(e) => {e.stopPropagation()}}>
               <h1>Se Connecter :</h1> 
               <form>
                    <div className="form-line">
                       <label htmlFor="mail">Votre adresse mail : </label>
                       <input type="text" name="mail" id="mail" onInput={(e)=>handleInput(e, setMail)}/>
                    </div>
                    <div className="form-line">
                       <label htmlFor="password">Mot de passe: </label>
                       <input type="text" name="password" id="password" onInput={(e)=>handleInput(e, setPassword)}/>
                    </div>
                    <button onClick={(e)=> handleClick(e)} >Connection</button>
               </form>
            </div>
        </div>
    )
}

export default ModalLogin;