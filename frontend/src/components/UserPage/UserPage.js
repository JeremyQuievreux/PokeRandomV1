import React from 'react';

import './UserPage.scss';
import axios from 'axios';

import CardUser from '../CardUser/CardUser';

function UserPage({user, hardRefresh}) {

    
    function addPokemon() {

        axios.post('http://localhost:5000/cards/random',{
            userId : user.userId
        })
          .then(function (response) {
            console.log(response.data.token);
            /* localStorage.removeItem('@tokenmern'); */
            localStorage.setItem('@tokenmern', response.data.token);
            hardRefresh();
          })
          .catch(function (error) {
            console.log(error);
          });
        // cards/random
    }


    return(
        <div className="user-page">
               <h2>User Page</h2>
            <div className="user-info">
                <h3>Votre Profil : </h3>
                <div className="info-line">
                    <p>Id Collectionneur : </p>
                    <p>{user?.userId}</p>
                </div>
                <div className="info-line">
                    <p>Pseudo : </p>
                    <p>{user?.pseudo}</p>
                </div>
                <div className="info-line">
                    <p>Mail : </p>
                    <p>{user?.mail}</p>
                </div>
                <div className="info-line">
                    <p>Pokécoins : </p>
                    <p>{user?.poke_coins} $</p>
                </div>
                <button onClick={()=>addPokemon()}>Add Random Pokemon</button> 
            </div>
                <h2>Votre Collection : </h2>
            <div className="card-list">
                {user?.cardslist.map((card, id) => {
                    return(
                        <CardUser key={id} card={card}/>
                    )
                })}
            </div>
        </div>
    )
}

export default UserPage;