import React, { useState } from 'react';
import axios  from 'axios';

import './ModalLogin.scss';

function ModalLogin({Login}) {

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
              console.log(response.data);
              localStorage.setItem('@tokenmern', response.data.token);
              Login.closeModal();
              document.location.replace('/');
          })
          .catch(function (error) {
            console.log(error.data);
          });
        
    }
    
    
    
    
    return(
        <div className="modal-login-externe" onClick={() => Login.closeModal()}>
            <div className="modal-login-interne" onClick={(e) => {e.stopPropagation()}}>
               <h2>Se Connecter :</h2> 
               <form>
                    <div className="form-line">
                       <label htmlFor="mail">Votre adresse mail : </label>
                       <input type="text" name="mail" id="mail" onInput={(e)=>handleInput(e, setMail)}/>
                    </div>
                    <div className="form-line">
                       <label htmlFor="password">Mot de passe: </label>
                       <input type="password" name="password" id="password" onInput={(e)=>handleInput(e, setPassword)}/>
                    </div>
                    <button onClick={(e)=> handleClick(e)} >Connection</button>
               </form>
            </div>
        </div>
    )
}

export default ModalLogin;