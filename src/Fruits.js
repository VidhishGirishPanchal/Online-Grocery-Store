import React from 'react';
import "./Fruits.css";

import Card from "./Components/Card"

function Fruits() {
    return (
        <div className="main">
          <div className="titlestrip">
          Fruits
          </div>
          <Card />
          <Card />
          <Card />
        </div>
    )
}

export default Fruits;
