import React from 'react';

import './UserPage.scss';

import Card from '../Card/Card';

function UserPage({user}) {

    function addPokemon() {
        console.log("j'ai click");

        // cards/random
    }


    return(
        <div className="user-page">
            <h1>User Page</h1>
            <p>Pseudo  = {user?.pseudo}</p>
            <p>mail = {user?.mail}</p>
            <p>PokéCoins = {user?.poke_coins}</p>
            <p>Prochain click = {user?.next_click}</p>

            <button onClick={()=>addPokemon()}>Add Random Pokemon</button>

        {user?.cardslist.map((card) => {
            return (
                <Card card={card}/>
            )
        })}

        </div>
    )
}

export default UserPage;