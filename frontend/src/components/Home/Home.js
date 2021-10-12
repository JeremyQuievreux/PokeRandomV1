import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

import './Home.scss';

function Home() {

    const [card, setCard] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:5000/cards/random")
          .then(function (response) {
            console.log(response.data);
            setCard(response.data);
          })
          .catch(function (err) {
            console.log(err);
          })
      }, []);
    
    return(
        <div className="home-page">
            <h1>Home Page</h1>
            {card.map((card) => {
              return <Card card={card} />
            })}
        </div>
    )
}

export default Home;