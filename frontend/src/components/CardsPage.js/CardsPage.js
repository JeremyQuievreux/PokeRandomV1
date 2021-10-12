import "./CardsPage.scss";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function CardsPage() {
  const [cardsList, setCardsList] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/card")
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
    </div>
  );
}

export default CardsPage;
