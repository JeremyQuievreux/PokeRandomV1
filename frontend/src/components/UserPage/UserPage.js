import React from 'react';

import './UserPage.scss';

import Card from '../Card/Card';

function UserPage({user}) {

    return(
        <div className="user-page">
            <h1>User Page</h1>
            <p>Pseudo  = {user.pseudo}</p>
            <p>mail = {user.mail}</p>
            <p>PokéCoins = {user.poke_coins}</p>
            <p>Prochain click = {user.next_click}</p>

            
        </div>
    )
}

export default UserPage;