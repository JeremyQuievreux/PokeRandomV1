import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

import './Home.scss';

function Home() {

    const [randomCard, setRandomCard] = useState({});

    useEffect(() => {
        axios
          .get("http://localhost:5000/cards/random")
          .then(function (response) {
            setRandomCard(response.data[0]);
          })
          .catch(function (err) {
            console.log(err);
          })
      }, []);
    
    return(
        <div className="home-page">
            <h1>Home Page</h1>
            <Card card={randomCard} />
        </div>
    )
}

export default Home;