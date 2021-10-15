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
        let ordered = response.data.sort(function (a, b) {
          return a.dex_number - b.dex_number;
        });
        setCardsList(ordered);
      })
      .catch(function (err) {
        console.log(err);
      })
  }, []);
  

  return (
    <div className="cards-page">
      <h2>Boutique : </h2>
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
