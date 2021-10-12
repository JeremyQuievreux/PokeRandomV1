import "./CardsPage.scss";
import React, { useEffect, useState } from "react";
import axios  from "axios";

import Card from '../Card/Card';

function CardsPage() {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then(function (response) {
        setCardsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      })
  }, []);
  

  return (
    <div className="cards-page">
      <h1>Boutique : </h1>
      <div className="cards-list">
        {cardsList.map((card) => (
          
          <Card key={card.dex_number} card={card}></Card>
        )
        )}  
      </div>
      
    </div>
  );
}

export default CardsPage;
