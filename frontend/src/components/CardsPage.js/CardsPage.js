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
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      })
  }, []);
  

  return (
    <div className="cards-page">
      <h1>Cards Page</h1>
      {cardsList.map((card) => (
        
        <Card card={card}></Card>
      )
      )}
    </div>
  );
}

export default CardsPage;
