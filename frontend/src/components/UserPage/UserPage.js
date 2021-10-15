import React from 'react';

import './UserPage.scss';
import axios from 'axios';

import Card from '../Card/Card';

function UserPage({user}) {

    let orderedUserCard = user?.cardslist.sort(function (a, b) {
        return a.dex_number - b.dex_number;
      });

    return(
        <div className="user-page">
            <div className="user-info">
               <h2>User Page</h2>
                <p>Id = {user?.userId}</p>
                <p>Pseudo  = {user?.pseudo}</p>
                <p>mail = {user?.mail}</p>
                <p>PokéCoins = {user?.poke_coins}</p>
                <p>Prochain click = {user?.next_click}</p>
                
            </div>
                <h2>Votre Collection : </h2>
            <div className="card-list">
                {orderedUserCard?.map((card, id) => {
                    return(
                        <Card key={id} card={card}/>
                    )
                })}
            </div>
        </div>
    )
}

export default UserPage;