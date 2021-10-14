import React from 'react';

import './UserPage.scss';
import axios from 'axios';

import Card from '../Card/Card';

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
            <h1>User Page</h1>
            <p>Id = {user?.userId}</p>
            <p>Pseudo  = {user?.pseudo}</p>
            <p>mail = {user?.mail}</p>
            <p>PokéCoins = {user?.poke_coins}</p>
            <p>Prochain click = {user?.next_click}</p>

            <button onClick={()=>addPokemon()}>Add Random Pokemon</button>

        {user?.cardslist.map((card, id) => {
            return(
                <Card key={id} card={card}/>
            )
        })}

        </div>
    )
}

export default UserPage;